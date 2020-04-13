import moment from "moment";

// eslint-disable-next-line import/no-webpack-loader-syntax
import tlgString from '!raw-loader!../data/DU2063479_20200101_20200410.tlg';

const parseType = (type) =>
    type === 'BUYTOOPEN' ? 'BUY' : type === 'SELLTOCLOSE' ? 'SELL' : type;

const parseDate = (date) =>
    new Date(date.substr(0, 4), date.substr(4, 2), date.substr(6, 2));

const parseDateTime = (date, time) =>
    moment(`${date} ${time}`, 'YYYYMMDD HH:mm:ss');

const tlg2transactions = (tlgContent) => {
    const transactionsContent = tlgContent.split('STOCK_TRANSACTIONS')[1].split('CURRENCY_TRANSACTIONS')[0];
    const entries = [];
    for (const line of transactionsContent.split('\n')) {
        if (!line) {
            continue;
        }
        const data = line.split('|');
        const dateTime = parseDateTime(data[7], data[8]);
        entries.push({
            symbol: data[2],
            name: data[3],
            type: parseType(data[5]),
            // date: parseDate(data[7]),
            date: dateTime.format('L HH:mm:ss'),
            time: data[8],
            dateTime,
            currency: data[9],
            position: parseInt(data[10]),
            price: parseFloat(data[12]),
            total: parseFloat(data[13]),
            commission: -1 * parseFloat(data[14]),
        })
    }

    entries.sort((a, b) => a.dateTime - b.dateTime);

    return entries;
};

const transactions2Trades = (transactions) => {

    const symbols = {};

    for (const txn of transactions) {

        if (!symbols[txn.symbol]) {
            symbols[txn.symbol] = [];
        }

        const symbolTrades = symbols[txn.symbol];

        // open trade
        if (symbolTrades.length === 0 || symbolTrades[symbolTrades.length - 1].netPosition === 0) {
            symbolTrades.push({
                symbol: txn.symbol,
                dateStart: txn.dateTime,
                currency: txn.currency,
                name: txn.name,
                buys: 0,
                sells: 0,
                netPosition: 0,
                total: 0,
                transactions: []
            });
        }

        // fill current trade
        const trade = symbolTrades[symbolTrades.length - 1];
        trade.transactions.push(txn);
        if (txn.type === "BUY")
            trade.buys += txn.position;
        else if (txn.type === "SELL")
            trade.sells += Math.abs(txn.position);
        trade.netPosition += txn.position;
        trade.total += txn.total;

        // close trade
        if (trade.netPosition === 0) {
            trade.dateEnd = txn.dateTime;
            trade.transactionCount = trade.transactions.length;
            // TODO
        }

    }

    const trades = Object.values(symbols).flat();

    trades.sort((a, b) => a.dateStart - b.dateStart);

    return trades;

};

const transactions = tlg2transactions(tlgString);

const trades = transactions2Trades(transactions);

console.log(trades);

export {transactions, trades};

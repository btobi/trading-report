import React from "react";

import {Typography, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow} from "@material-ui/core";
import {gradient, percentLog} from "../utils/colors";

export default class TradesTable extends React.Component {

    render() {

        const maxPositive = 4000;
        const maxNegative = 2000;

        return (
            <div>
                <Typography variant={"h4"} align={"left"} gutterBottom>Trade Summary</Typography>
                <TableContainer component={Paper}>
                    <Table size={"small"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date Start</TableCell>
                                <TableCell>Date End</TableCell>
                                <TableCell>Symbol</TableCell>
                                <TableCell align={"right"}>Buys</TableCell>
                                <TableCell align={"right"}>Sells</TableCell>
                                {/*<TableCell>Avg. Buy</TableCell>*/}
                                {/*<TableCell>Avg. Sell</TableCell>*/}
                                <TableCell align={"right"}>Transactions</TableCell>
                                <TableCell align={"right"}>Total</TableCell>
                                {/*<TableCell>Commissions</TableCell>*/}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.trades.map(trade =>
                                <TableRow>
                                    <TableCell>{trade.dateStart.format('LL LTS')}</TableCell>
                                    <TableCell>{trade.dateEnd.format('LL LTS')}</TableCell>
                                    {/*<TableCell>{trade.name}</TableCell>*/}
                                    <TableCell>{trade.symbol}</TableCell>
                                    <TableCell align={"right"}>{trade.buys}</TableCell>
                                    <TableCell align={"right"}>{trade.sells}</TableCell>
                                    <TableCell align={"right"}>{trade.transactionCount}</TableCell>
                                    <TableCell align={"right"}
                                               style={{
                                                   background:
                                                       trade.total > 0
                                                           ? '#' + gradient('ffffff', '00850b', 0, maxPositive, trade.total)
                                                           : '#' + gradient('ffffff', 'a30a15', 0, maxNegative, Math.abs(trade.total)),
                                                   color:
                                                       trade.total > 0
                                                           ? percentLog(0, maxPositive, trade.total) > 0.7 ? ' white' : 'inherit'
                                                           : 'inherit'
                                                   // : percentLog(0, maxNegative, Math.abs(trade.total)) > 0.7 ? ' white' : 'inherit'
                                               }}>{trade.total.toFixed(2)}</TableCell>
                                    {/*<TableCell align={"right"}>{trade.commission}</TableCell>*/}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

}
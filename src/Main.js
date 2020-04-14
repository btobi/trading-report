import React from 'react';

import {Typography, Divider} from "@material-ui/core";

import {transactions, trades, statistics} from "./utils/parser";

import TradesTable from "./components/TradesTable";
import TransactionsTable from "./components/TransactionsTable";
import Statistics from "./components/Statistics";

const CustomDivider = () => <div style={{marginTop: '50px', marginBottom: '50px'}} />

export default function Main() {
    return (
        <div style={{padding: "50px", background: '#fafafa'}}>
            <Typography variant={"h2"} gutterBottom>Trading Report</Typography>
            <CustomDivider/>
            <Statistics statistics={statistics} />
            <CustomDivider/>
            <TradesTable trades={trades}/>
            <CustomDivider/>
            <TransactionsTable transactions={transactions}/>
        </div>
    )
}
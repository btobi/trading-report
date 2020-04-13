import React from 'react';

import {Typography, Divider} from "@material-ui/core";

import {transactions, trades} from "./utils/parser";

import TradesTable from "./components/TradesTable";
import TransactionsTable from "./components/TransactionsTable";

const CustomDivider = () => <Divider variant={"middle"} style={{marginTop: '50px', marginBottom: '50px'}} />

export default function Main() {
    return (
        <div style={{padding: "20px"}}>
            <Typography variant={"h2"} gutterBottom>Trading Report</Typography>
            <CustomDivider/>
            <TradesTable trades={trades}/>
            <CustomDivider/>
            <TransactionsTable transactions={transactions}/>
        </div>
    )
}
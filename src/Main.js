import React from 'react';

import LogTable from "./components/LogTable";
import {Typography} from "@material-ui/core";

import {tlgSummary} from "./utils/parser";

export default function Main() {
    return (
        <div style={{padding: "20px"}}>
            <Typography variant={"h2"} gutterBottom>Trading Report</Typography>
            <LogTable></LogTable>
        </div>
    )
}
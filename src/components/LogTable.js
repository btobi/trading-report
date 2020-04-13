import React from "react";

import {Typography, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow} from "@material-ui/core";

const SummaryRow = () =>
    <TableRow>
        <TableCell></TableCell>
    </TableRow>;

export default class LogTable extends React.Component {

    render() {
        return (
            <div>
                <Typography variant={"h4"} gutterBottom>Trade Summary</Typography>
                <TableContainer component={Paper}>
                    <Table size={"small"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Symbol</TableCell>
                                <TableCell>Buys</TableCell>
                                <TableCell>Sells</TableCell>
                                <TableCell>Avg. Buy</TableCell>
                                <TableCell>Avg. Sell</TableCell>
                                <TableCell>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

}
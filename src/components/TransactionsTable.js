import React from "react";

import {Typography, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow} from "@material-ui/core";


export default class TransactionsTable extends React.Component {

    render() {
        return (
            <div>
                <Typography variant={"h4"} gutterBottom>All transactions</Typography>
                <TableContainer component={Paper}>
                    <Table size={"small"}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Symbol</TableCell>
                                {/*<TableCell>Name</TableCell>*/}
                                <TableCell>Type</TableCell>
                                <TableCell>Date</TableCell>
                                <TableCell>Time</TableCell>
                                <TableCell>Currency</TableCell>
                                <TableCell align={"right"}>Position</TableCell>
                                <TableCell align={"right"}>Price</TableCell>
                                <TableCell align={"right"}>Total</TableCell>
                                <TableCell align={"right"}>Commission</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.transactions.map(transaction =>
                                <TableRow>
                                    <TableCell>{transaction.symbol}</TableCell>
                                    {/*<TableCell>{transaction.name}</TableCell>*/}
                                    <TableCell>{transaction.type}</TableCell>
                                    <TableCell>{transaction.date}</TableCell>
                                    <TableCell>{transaction.time}</TableCell>
                                    <TableCell>{transaction.currency}</TableCell>
                                    <TableCell align={"right"}>{transaction.position}</TableCell>
                                    <TableCell align={"right"}>{transaction.price.toFixed(2)}</TableCell>
                                    <TableCell align={"right"}>{transaction.total.toFixed(2)}</TableCell>
                                    <TableCell align={"right"}>{transaction.commission.toFixed(2)}</TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        )
    }

}
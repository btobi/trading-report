import React from "react";

import {Grid, Typography, TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow} from "@material-ui/core";

export default class Statistics extends React.Component {

    render() {
        return (
          <div>
              <Typography variant={'h4'} align={"left"} gutterBottom>Statistics</Typography>
              <Grid container spacing={3} >
                  <Grid item md={3}>
                      <TableContainer component={Paper}>
                          <Table>
                              <TableBody>
                                  <TableRow><TableCell>Gross Total</TableCell><TableCell align={"right"}>{this.props.statistics.total.toFixed(2)}</TableCell></TableRow>
                                  <TableRow><TableCell>Total Profit</TableCell><TableCell align={"right"}>{this.props.statistics.totalProfit.toFixed(2)}</TableCell></TableRow>
                                  <TableRow><TableCell>Total Loss</TableCell><TableCell align={"right"}>{this.props.statistics.totalLoss.toFixed(2)}</TableCell></TableRow>
                                  <TableRow><TableCell>Average Profit</TableCell><TableCell align={"right"}>{this.props.statistics.avgProfit.toFixed(2)}</TableCell></TableRow>
                                  <TableRow><TableCell>Average Loss</TableCell><TableCell align={"right"}>{this.props.statistics.avgLoss.toFixed(2)}</TableCell></TableRow>
                                  <TableRow><TableCell>Profit-Loss Ratio</TableCell><TableCell align={"right"}>{this.props.statistics.profitLossRatio.toFixed(2)}</TableCell></TableRow>
                                  </TableBody>
                          </Table>
                      </TableContainer>
                  </Grid>
                  <Grid item md={3}>
                      <TableContainer component={Paper}>
                          <Table>
                              <TableBody>
                                  <TableRow><TableCell>Total Number of Trades</TableCell><TableCell align={"right"}>{this.props.statistics.totalTrades.toFixed(0)}</TableCell></TableRow>
                                  <TableRow><TableCell>Successful Trades</TableCell><TableCell align={"right"}>{this.props.statistics.successfulTrades.toFixed(0)}</TableCell></TableRow>
                                  <TableRow><TableCell>Non-successful Trades</TableCell><TableCell align={"right"}>{this.props.statistics.nonSuccessfulTrades.toFixed(0)}</TableCell></TableRow>
                                  <TableRow><TableCell>Success Ratio</TableCell><TableCell align={"right"}>{(this.props.statistics.successRatio*100).toFixed(2)}%</TableCell></TableRow>
                              </TableBody>
                          </Table>
                      </TableContainer>
                  </Grid>
              </Grid>
          </div>
        );
    }

}
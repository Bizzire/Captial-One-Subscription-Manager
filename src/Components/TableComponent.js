import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from '@mui/material';

const SubscriptionsTable = () => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Subscriptions</TableCell>
            <TableCell align="left">Start Date</TableCell>
            <TableCell align="left">Cost</TableCell>
            <TableCell align="left">Handle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Spotify
              </TableCell>
              <TableCell align="left">9/10/2022</TableCell>
              <TableCell align="left">$4.99</TableCell>
              <TableCell align="left">
                <Link
                href={"https://spotify.com"}
                >
                    https://spotify.com
                </Link>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                HBO Max
              </TableCell>
              <TableCell align="left">9/02/2022</TableCell>
              <TableCell align="left">$14.99</TableCell>
              <TableCell align="left">
                <Link
                href={"https://hbomax.com"}
                >
                    https://hbomax.com
                </Link>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Netflix
              </TableCell>
              <TableCell align="left">9/08/2022</TableCell>
              <TableCell align="left">$40.00</TableCell>
              <TableCell align="left">
                <Link
                href={"https://netflix.com"}
                >
                    https://netflix.com
                </Link>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Disney Plus
              </TableCell>
              <TableCell align="left">8/23/2022</TableCell>
              <TableCell align="left">$24.99</TableCell>
              <TableCell align="left">
                <Link
                href={"https://disneyplus.com"}
                >
                    https://disneyplus.com
                </Link>
              </TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Hulu
              </TableCell>
              <TableCell align="left">4/13/2022</TableCell>
              <TableCell align="left">$4.99</TableCell>
              <TableCell align="left">
                <Link
                href={"https://hulu.com"}
                >
                    https://hulu.com
                </Link>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SubscriptionsTable

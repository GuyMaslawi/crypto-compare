import {useContext, useEffect, useState} from "react";
import {Paper, Table, TableHead, TableRow, TableBody, TableContainer} from "@mui/material";
import {PinnedIcon, StyledTableCell} from './HomeStyle';
import {CryptoContext} from "../../Context";
import DataTable from "./DataTable";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const headers = [
    {
        id: 1,
        name: "Name",
    },
    {
        id: 2,
        name: "Price",
    },
    {
        id: 3,
        name: "Volume(24h)"
    },
];

const Home = () => {
    const {data, isLoading, error}: any = useContext(CryptoContext);

    return (
        <div>
            {!isLoading ? <div>loading...</div> :
                error.length ? <div>{error}</div> :

                <TableContainer component={Paper}>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {headers.map(row => {
                                    return (
                                        <StyledTableCell key={row.id}
                                                         sx={{
                                                             backgroundColor: '#000',
                                                             color: '#fff',
                                                             fontSize: '1.6rem'
                                                         }}>
                                            {row.name}
                                        </StyledTableCell>
                                    )
                                })}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data && Object.values(data).map((row: any, index: number) => {
                                return <DataTable row={row} index={index}/>
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    );
};

export default Home;

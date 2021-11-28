import {useEffect, useState} from "react";
import axios from 'axios';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import IconButton from '@mui/material/IconButton';
import {PinnedIcon, StyledTableCell} from './HomeStyle';

const Home = () => {
    const [items, setItems] = useState({});
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoaded(false);

            await axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD")
                .then((result: any) => {
                    const list = result.data.RAW;

                    const resetData = Object.values(list).map((item: any) => {
                        return {
                            ...list,
                            [item.USD]: {
                                PINNED: false,
                            }
                        };
                    });

                    setItems(resetData);

                    setIsLoaded(true);
                })
                .catch ((error) => {
                        setIsLoaded(true);
                        setError(error);
                    }
                )
        };

        fetchData();
        console.log(items)
    },[]);

    const handleItemPinned = (row: {}) => {
        const currentItem = row;
        setItems({
            ...items,
            currentItem: {
                pinned: true
            }
        });
    };

    return (
        <div>
            {!isLoaded ? <div>loading...</div> :
                error.length ? <div>{error}</div> :

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Coin</StyledTableCell>
                                    <StyledTableCell>Market Value</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {items && Object.values(items).map((row: any, index: number) => {
                                    return (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {/*<span>{row.USD.FROMSYMBOL}</span>*/}
                                                {/*<img src={row.USD.IMAGEURL}*/}
                                                {/*     alt={row.USD.FROMSYMBOL}*/}
                                                {/*     style={{ marginLeft: '1rem' }}*/}
                                                {/*/>*/}
                                            </TableCell>
                                            {/*<TableCell>${row.USD.PRICE}</TableCell>*/}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>

            }
        </div>
    );
};

export default Home;
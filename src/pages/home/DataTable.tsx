import TableRow from '@mui/material/TableRow';
import {StyledTableCell} from "./HomeStyle";
import {Link} from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useContext} from "react";
import {CryptoContext} from "../../Context";

interface DataTableProps {
    row: any;
    index: number;
}

const DataTable = ({
                       row,
                       index
                   }:DataTableProps) => {
    const {setSelectedCoin}: any = useContext(CryptoContext);

    return (
        <TableRow key={index}>
            <StyledTableCell>
                <Link to={row.USD.FROMSYMBOL} onClick={setSelectedCoin(row)}>
                    <span>{row.USD.FROMSYMBOL}</span>
                    <img src={row.USD.IMAGEURL}
                         alt={row.USD.FROMSYMBOL}
                         style={{ marginLeft: '1rem' }}
                    />
                </Link>
            </StyledTableCell>
            <StyledTableCell sx={{
                display: 'flex',
                alignItems: 'center',
                color: row.USD.CHANGEHOUR > 0 ? 'green': 'red'
            }}>
                {row.USD.CHANGEHOUR > 0 ?
                    <ArrowDropUpIcon sx={{fontSize: 30}}/>
                    :
                    <ArrowDropDownIcon sx={{fontSize: 30}}/>
                }
                <span>${row.USD.PRICE}</span>
            </StyledTableCell>
            <StyledTableCell>${Number(~~row.USD.VOLUME24HOUR).toLocaleString()}</StyledTableCell>
        </TableRow>
    );
};

export default DataTable;

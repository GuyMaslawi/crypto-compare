import styled from 'styled-components';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import PushPinIcon from '@mui/icons-material/PushPin';

export const StyledTableCell = styled(TableCell)`
    position: relative;

    '&.${tableCellClasses.head}': {
        background-color: #000;
        color: #fff;
        font-size: 1.6rem;
    },
    '&.${tableCellClasses.body}': {
        font-size: 1.6rem;
    },
`;

export const PinnedIcon = styled(PushPinIcon)`
    position: absolute;
    left: .1rem;
    top: .1rem
`;
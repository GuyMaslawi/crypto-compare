import { styled } from '@mui/material/styles';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import PushPinIcon from '@mui/icons-material/PushPin';

export const StyledTableCell = styled(TableCell)({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: '#000',
        color: '#fff',
        fontSize: '1.6rem',
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: '1.4rem'
    },
});

export const PinnedIcon = styled(PushPinIcon)`
    position: absolute;
    left: .1rem;
    top: .1rem
`;

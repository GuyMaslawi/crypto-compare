import CircularProgress from '@mui/material/CircularProgress';
import { Div } from './LoaderStyle';

const Loader = () => {
    return (
        <Div>
            <CircularProgress/>
            <h2>Loading Data</h2>
        </Div>
    );
};

export default Loader;

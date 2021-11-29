import {useContext} from "react";
import {CryptoContext} from "../../Context";
import { useParams } from "react-router-dom";

const CoinDetails = () => {
    let params = useParams();


    return (
        <div>
            sgfgfdgd {params.coinName}
        </div>
    );
};

export default CoinDetails;

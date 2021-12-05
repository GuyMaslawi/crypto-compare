import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Button} from "@mui/material";
import {formatFloatNumber, getImgPath} from "../utils";
import {Wrapper, Price, Div, Img} from './CoinDetailsStyle';
import {fetchData} from "../../store/cryptoSliceExtraData";
import Description from "./description/Description";
import Loader from "../../components/loader/Loader";

const CoinDetails = () => {
    const [isButtonText, setIsButtonText] = useState<boolean>(false);
    const selectedCoin = useSelector((state: any) => state.crypto.selectedCoin);
    const isLoading = useSelector((state: any) => state.cryptoExtraData.loading);
    const dispatch = useDispatch();
    const text = isButtonText ? 'Month Value: ' : '7 Days Value: ';
    const buttonText = !isButtonText ? 'month Value' : '7 Days Value';
    const isup = selectedCoin.CHANGEHOUR > 0;

    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]);

    const handleToggle = () => setIsButtonText(!isButtonText);

    return (
        !isLoading ?
            <Loader/>
            :
            <Wrapper>
                <Div>
                    <Img src={getImgPath(selectedCoin.IMAGEURL)} alt={selectedCoin.FROMSYMBOL}/>
                    <span>{selectedCoin.FROMSYMBOL}</span>
                </Div>

                <Price isup={isup.toString()}>
                    <span>{formatFloatNumber(selectedCoin.PRICE)}</span>
                    {isup ?
                        <ArrowDropUpIcon sx={{fontSize: 50}}/>
                        :
                        <ArrowDropDownIcon sx={{fontSize: 50}}/>
                    }
                </Price>

                <div>
                    <Description title="Created On" currentVal="ContentCreatedOn"/>
                    <Description title="Blocks Number" currentVal="BlockNumber"/>
                    <Description title="Description" currentVal="Description"/>
                </div>

                <Div>
                    <Button variant="contained"
                            size="large"
                            sx={{
                                margin: '2rem 2rem 0 0',
                                fontSize: '1.6rem'
                            }}
                            onClick={handleToggle}>
                        Switch To {buttonText}
                    </Button>
                    <span style={{marginTop: '1rem'}}>{text}</span>
                </Div>
            </Wrapper>
    );
};

export default CoinDetails;

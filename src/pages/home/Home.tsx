import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import IconButton from '@mui/material/IconButton';
import {AgGridColumn, AgGridReact as AgGrid} from 'ag-grid-react';
import PushPinIcon from '@mui/icons-material/PushPin';
import {fetchCoins, setSelectedCoin} from "../../store/cryptoSlice";
import {formatIntNumber, formatFloatNumber, getImgPath} from "../utils";
import Loader from "../../components/loader/Loader";
import {PriceWrap, Img, Div} from './HomeStyle';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Home = () => {
    const dispatch = useDispatch();
    const list = useSelector((state: any) => state.crypto.list);
    const isLoading = useSelector((state: any) => state.crypto.loading);

    useEffect(() => {
        dispatch(fetchCoins());
    }, [dispatch]);

    const NameComp = (params: { data: { FROMSYMBOL: string, IMAGEURL: string } }) => {
        return (
            <Div>
                <IconButton aria-label="pin row">
                    <PushPinIcon />
                </IconButton>
                <Link to={params.data.FROMSYMBOL}
                      onClick={() => dispatch(setSelectedCoin(params))}
                      style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#000'
                      }}>
                    <Img src={getImgPath(params.data.IMAGEURL)}
                         alt={params.data.FROMSYMBOL}
                         style={{marginRight: '1rem'}}
                    />
                    <span>{params.data.FROMSYMBOL}</span>
                </Link>
            </Div>
        )
    };

    const PriceComp = (params: { data: { CHANGEHOUR: number, PRICE: number } }) => {
        const isup = params.data.CHANGEHOUR > 0;

        return (
            <PriceWrap isup={isup.toString()}>
                {isup ?
                    <ArrowDropUpIcon sx={{fontSize: 30}}/>
                    :
                    <ArrowDropDownIcon sx={{fontSize: 30}}/>
                }
                <span>{`${formatFloatNumber(params.data.PRICE)}`}</span>
            </PriceWrap>
        )
    };

    const VolumeComp = (params: { data: { VOLUME24HOURTO: number } }) => formatIntNumber(params.data.VOLUME24HOURTO);

    const MarketCapComp = (params: { data: { MKTCAP: number } }) => formatIntNumber(params.data.MKTCAP);

    const rowData = Object.values(list).map((row: any) => row.USD);

    return (
        isLoading ?
            <Loader/>
            :
            <div className="ag-theme-alpine" style={{
                margin: "0 auto",
                height: "calc(100vh - 14rem)",
                width: "80.5rem",
                maxWidth: "90vw"
            }}>
                <AgGrid rowData={rowData}>
                    <AgGridColumn field="FROMSYMBOL"
                                  headerName="Name"
                                  sortable
                                  cellRendererFramework={NameComp}
                    />
                    <AgGridColumn field="PRICE"
                                  headerName="Price"
                                  sortable
                                  cellRendererFramework={PriceComp}
                    />
                    <AgGridColumn field="VOLUME24HOURTO"
                                  headerName="Volume(24h)"
                                  sortable
                                  cellRendererFramework={VolumeComp}
                    />
                    <AgGridColumn field="MKTCAP"
                                  headerName="Market Cap"
                                  sortable
                                  cellRendererFramework={MarketCapComp}
                    />

                </AgGrid>
            </div>
    );
};

export default Home;

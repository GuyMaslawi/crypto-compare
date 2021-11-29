import {createContext, ReactNode, useEffect, useState} from "react";
import axios from "axios";

interface initial {
    data: {};
    selected: {};
    isLoading: boolean;
    error: string;
    setSelectedCoin: (item: {}) => void;
}

export const CryptoContext = createContext<initial | undefined>(undefined);

interface ContextProps {
    children: ReactNode;
}

const CryptoProvider = ({children}: ContextProps) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [selected, setSelected] = useState({});

    useEffect(() => {
        const fetchData = () => {
            setIsLoading(false);

            axios.get("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,ONE,SHIB,ADA&tsyms=USD")
                .then((result: any) => {
                    const list = result.data.RAW;

                    const resetData = Object.values(list).map((item: any) => {
                        return {
                            ...item,
                            USD: {
                                ...item.USD,
                                PINNED: false,
                            }
                        };
                    });

                    setData(resetData);

                    setIsLoading(true);
                })
                .catch ((error) => {
                    setIsLoading(true);
                    setError(error);
                })
        };

        fetchData();
    },[]);

    const setSelectedCoin = (item: {}) => setSelected(item);

    return (
        <CryptoContext.Provider value={{
            data,
            setSelectedCoin,
            selected,
            isLoading,
            error
        }}>
            {children}
        </CryptoContext.Provider>
    );
};

export default CryptoProvider;

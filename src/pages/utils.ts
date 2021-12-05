import Moment from 'moment';

export const formatFloatNumber = (num: number) => '$' + num.toLocaleString('en', {maximumFractionDigits: 9});
export const formatIntNumber = (num: number) => '$' + num.toLocaleString('en', {maximumFractionDigits: 0});

export const baseImgUrl = "https://www.cryptocompare.com/";

export const getImgPath = (str: string) => {
    return baseImgUrl + str;
}

export const formatDate = (num: any) => Moment(num).format("DD/MM/YYYY");

export const getCoinVal = (arr: {}, selectedCoin: {FROMSYMBOL: string}, val: string) => {
    return (
        Object.values(arr).map((row: any) => {
            if (row.Symbol === selectedCoin.FROMSYMBOL) {
                switch (val) {
                    case "ContentCreatedOn":
                        return formatDate(row.ContentCreatedOn);
                    case "BlockNumber":
                        return row.BlockNumber;
                    case "Description":
                        return row.Description;
                    default:
                        return "";
                }
            }
            return "";
        })
    )
};

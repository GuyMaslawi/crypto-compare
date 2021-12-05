import {useSelector} from "react-redux";
import {getCoinVal} from "../../utils";
import {Row, Title} from "./DescriptionStyle";

interface DescriptionProps {
    title: string;
    currentVal: string;
}

const Description = ({title, currentVal}: DescriptionProps) => {
    const arr = useSelector((state: any) => state.cryptoExtraData.extraData);
    const selectedCoin = useSelector((state: any) => state.crypto.selectedCoin);

    return (
        <Row>
            <Title>{title}</Title>
            {getCoinVal(arr, selectedCoin, currentVal)}
        </Row>
    );
};

export default Description;

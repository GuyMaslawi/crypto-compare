import { styled } from '@mui/material/styles';

interface ColorProps {
    isup: string;
}

export const PriceWrap = styled('div')((props: ColorProps) => ({
    color: props.isup ? 'green' : 'red',
    display: 'flex',
    alignItems: 'center'
}));

export const Img = styled('img')`
  width: 3rem;
  height: 3rem;
`;

export const Div = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;



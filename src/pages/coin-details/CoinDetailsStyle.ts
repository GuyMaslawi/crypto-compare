import {styled} from '@mui/material';

export const Wrapper = styled('div')`
  width: 128rem;
  max-width: 100%;
  margin: 3rem auto;
`;

interface ColorProps {
    isup: string;
}

export const Price = styled('div')((props: ColorProps) => ({
    fontSize: '7rem',
    color: props.isup ? 'green' : 'red'
}));

export const Div = styled('div')`
  display: flex;
  align-items: center;

  span {
    font-size: 2rem;
  }
`;

export const Img = styled('img')`
  width: 5rem;
  height: 5rem;
`;

export const Description = styled('div')`
  padding: 1rem 0;
  font-size: 1.6rem;
  color: #000;
`;


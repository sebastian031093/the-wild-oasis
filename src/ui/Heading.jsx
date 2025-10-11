import { css } from 'styled-components';
import styled from 'styled-components';

// const test = css`

// text-align: center;
// ${10 > 5  && "backgorund-colopr": yellow  }

// `

const StyledHeading = styled.h1`
  ${props =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}
  ${props =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
  ${props =>
    props.as === 'h3' &&
    css`
      font-size: 1.3rem;
      font-weight: 500;
    `}
`;

function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

export default Heading;

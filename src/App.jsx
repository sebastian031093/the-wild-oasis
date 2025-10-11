// import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/inpust';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: tomato;
`;

// Define our button, but with the use of props.theme this time
const ButtonTheme = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
ButtonTheme.defaultProps = {
  theme: {
    main: '#BF4F74',
  },
};

// Define what props.theme will look like
const theme = {
  main: 'mediumseagreen',
};

const StyledApp = styled.div`
  background-color: tomato;
  padding: 40px;
  border: 10px solid black;
`;

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>Hello from new skills</H1>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('You click me...')}>click me</Button>
        <Button onClick={() => alert('You click me...')}>click me 2</Button>
        <Input type="text" placeholder="Here you could put your name." />

        <div>
          <Button>Default Theme</Button>

          <ThemeProvider theme={theme}>
            <ButtonTheme>Inverted Theme</ButtonTheme>
          </ThemeProvider>
        </div>
      </StyledApp>
    </>
  );
}

export default App;

// import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/inpust';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: tomato;
  padding: 40px;
  border: 10px solid black;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading as="h1">Hello from new skills</Heading>
        <Heading as="h2">The Wild Oasis</Heading>
        <Button onClick={() => alert('You click me...')}>click me</Button>
        <Button onClick={() => alert('You click me...')}>click me 2</Button>
        <Heading as="h3">Forms</Heading>
        <di>
          <Input type="text" placeholder="Here you could put your name." />
          <Input type="text" placeholder="Here you could put your name." />
          <Input type="text" placeholder="Here you could put your name." />
        </di>
      </StyledApp>
    </>
  );
}

export default App;

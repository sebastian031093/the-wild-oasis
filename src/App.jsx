// import { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/inpust';
import Heading from './ui/Heading';
import Row from './ui/Row';

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
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">check in out</Heading>
              <Button size="large" variation="primary" onClick={() => alert('You click me...')}>
                click me
              </Button>
              <Button onClick={() => alert('You click me...')}>click me 2</Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Forms</Heading>
            <form action="">
              <Input type="number" placeholder="Here you could put your name." />
              <Input type="number" placeholder="Here you could put your name." />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;

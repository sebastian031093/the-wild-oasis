// import { useState } from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: tomato;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.div`
  background-color: tomato;
  padding: 40px;
  border: 10px solid black;
`;

function App() {
  // const [count, setCount] = useState(0);

  return (
    <StyledApp>
      <H1>Hello from new skills</H1>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert('You click me...')}>click me</Button>
      <Button onClick={() => alert('You click me...')}>click me 2</Button>
      <Input type="text" placeholder="Here you could put your name." />
    </StyledApp>
  );
}

export default App;

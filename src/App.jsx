// import { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/inpust';
import Heading from './ui/Heading';
import Row from './ui/Row';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Bookings from './pages/Bookings';
import Cabins from './pages/Cabins';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Account from './pages/Account';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';

const StyledApp = styled.div`
  background-color: tomato;
  padding: 40px;
  border: 10px solid black;
`;

// function App() {
//   return (
//     <>
//       <GlobalStyles />
//       <StyledApp>
//         <Row>
//           <Row type="horizontal">
//             <Heading as="h1">The Wild Oasis</Heading>
//             <div>
//               <Heading as="h2">check in out</Heading>
//               <Button size="large" variation="primary" onClick={() => alert('You click me...')}>
//                 Check in
//               </Button>
//               <Button onClick={() => alert('You click me...')}>Check out</Button>
//             </div>
//           </Row>

//           <Row type="vertical">
//             <Heading as="h3">Forms</Heading>
//             <form action="">
//               <Input type="number" placeholder="Here you could put your name." />
//               <Input type="number" placeholder="Here you could put your name." />
//             </form>
//           </Row>
//         </Row>
//       </StyledApp>
//     </>
//   );
// }

// export default App;

export function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="accunt" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

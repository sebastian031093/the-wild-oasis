import styled from 'styled-components';

const StyledSideBar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-radius: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;

  ${props => console.log(props)}
`;

function SideBar() {
  return <StyledSideBar message="Hi from props.">Hi from SideBar</StyledSideBar>;
}

export default SideBar;

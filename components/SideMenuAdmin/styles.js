import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ItemContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  background: ${props => (props.isActive ? '#565656' : 'none')};
  border-radius: 2px;
  margin: 8px;
  padding-left: 20px;

  .icon {
    color: #ffffff;
  }
`;

const ListLink = styled(Link)`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  margin-left: 17px;
`;

const H1 = styled.h1`
  text-align: center;
  color: white;
  margin-top:15px;
`;

const MenuBottom = styled.div`
display:flex;
flex-direction:column;
gap:10px;

.menuBottomStyle{
display:flex;
align-items:center;

}
`;

export { Container, ItemContainer, ListLink, H1, MenuBottom };

import styled from 'styled-components'

import Background from '../../assets/background.svg'

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url('${Background}');

  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
  }
`

export const RegisterImage = styled.img`
  height: 95%;

  @media (max-width: 768px) {
    height: auto;
    max-height: 400px;
  }
`

export const ContainerItens = styled.div`
  height: 95%;
  padding: 1.56rem 4.68rem;
  background: #373737;
  border-radius: 0 0.62rem 0.62rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-style: normal;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1.75rem;
    color: #ffffff;
    text-align: center;
    margin-top: 0.62rem;
  }

  img {
    margin: auto;
    width: 12.75rem;
  }

 @media (max-width: 768px) {
   flex-direction: column; // stack elements vertically
   padding: 1rem; // reduce padding
   border-radius:0; // remove border radius
 }
`

export const Label = styled.p`
 font-style:normal;
 font-weight:bold; // make label bold
 font-size:.75rem; // reduce font size
 line-height:.87rem;
 color:#ffffff; // change color to white
 margin-top:${props => (props.error ? '0.60rem' : '1.60rem')};
 margin-bottom:.31rem; // reduce bottom margin
`

export const Input = styled.input`
 width:auto; // make input width auto
 height:auto; // make input height auto
 background:#ffffff; // change input background to white
 box-shadow:none; // remove box shadow
 border-radius:.31rem; // add border radius
 border:${props => (props.error ? '.12rem solid #CC1717' : 'none')};
 padding-left:.62rem;

 @media (max-width:768px) {
   width:auto; // make input width auto for small screens
 }
`

export const SignInLink = styled.p`
 font-style:normal;
 font-weight:bold; // make sign in link bold
 font-size:.87rem; // reduce font size
 line-height:1rem;
 color:#ffffff; // change color to white

 a {
   cursor:pointer;
   text-decoration:none; // remove underline from link
 }
`

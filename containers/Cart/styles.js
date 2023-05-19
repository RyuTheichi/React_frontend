import styled from 'styled-components'

export const Container = styled.div`
    background: #e5e5e5;
    min-height: calc(100vh - 75px);
`

export const CartImage = styled.img`
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
    padding-bottom: 30px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-evenly;
    }
`

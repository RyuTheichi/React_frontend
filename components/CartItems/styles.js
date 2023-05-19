import styled from 'styled-components'

export const Container = styled.div`
    background-color: #ffffff;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    padding: 10px;
    width: max-content;

    @media (max-width: 768px) {
        width: 100%;
        border-radius: 10px;
    }
`

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    border-bottom: 1px solid #b5b5b5;

    p {
        font-size: 16px;
        color: #b5b5b5;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

export const Body = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding: 10px;
    grid-gap: 10px 15px;

    img {
        border-radius: 10px;
        width: 120px;
    }

    p {
        font-size: 16px;
        color: #000000;
    }

    .quantity-container {
        display: flex;
        gap: 20px;

        button {
            height: 30px;
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }

        p {
            margin-top: 5px;
        }
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);

        img {
            width: 100%;
            max-width: 200px;
            height: auto;
        }
    }
`

export const EmptyCart = styled.p`
    padding: 20px;
    text-align: center;
    font-weight: bold;
`

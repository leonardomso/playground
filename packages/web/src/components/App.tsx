import React from "react";
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: #000;
    font-family: Inter;
    font-size: 2rem;
`;

const App: React.FC = () => (
    <Container>
        <Title><span role="img" aria-label="rhino">🦏</span> mu</Title>
    </Container>
);

export default App;

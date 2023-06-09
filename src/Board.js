import React from "react";
import styled from "styled-components";
import Cell from "./Cell"

function Board() {
    return (
        <Container>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
            <Cell></Cell>
        </Container>
    );

}

const Container = styled.div `

    width: 400px;
    height: 400px;
    boarder: 1px solid blue;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(5,1fr)

`;

export default Board;
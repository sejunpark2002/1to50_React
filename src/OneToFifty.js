import React from "react"
import styled from "styled-components"
import Board from "./Board"

function OneToFifty() {
    return (
        <Container>
            <Board>

            </Board>
        </Container>
    )
}

const Container = styled `
    width: 600px;
    height: 800px;
    boarder: 1px solid black;

`
export default OneToFifty
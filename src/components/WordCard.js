import React from "react";
import { Card } from "reactstrap";
import styled from 'styled-components';

function WordCard(props){
    

const WordButton = styled.button`
    background-color: #9CC3D5FF;
    border: none;
    color: black;
    margin: 5px;
    padding: 10px;
    box-shadow: 0px 8px 15px 0px rgba(0,0,0,0.37);
    :focus, :active {
        background-color: #D3DBDF;
    }
`

    // Play audio when word is clicked
    let wordAudio = new Audio(props.audio)
    const play = () => {
        wordAudio.play()
        .catch(err => console.log(err))
    }

    return (
        <>
        <Card className="wordCard">
            <WordButton onClick={play}>
                <h2>{props.word}</h2>
            </WordButton>
            
        </Card>
        </>
    )
}

export default WordCard;
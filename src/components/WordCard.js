import React from "react";
import { Card } from "reactstrap";

function WordCard(props){

    // Play audio when word is clicked
    let wordAudio = new Audio(props.audio)
    const play = () => {
        wordAudio.play()
        .catch(err => console.log(err))
    }

    return (
        <>
        <Card className="wordCard">
            <button className="wordButton" onClick={play}>
                <h2>{props.word}</h2>
            </button>
            
        </Card>
        </>
    )
}

export default WordCard;
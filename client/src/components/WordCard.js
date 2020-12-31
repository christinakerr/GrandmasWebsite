import React from "react";
import { Card } from "reactstrap";

function WordCard(props){

    // Play audio when word is clicked
    let wordAudio = new Audio(props.audio)
    const play = () => {
        wordAudio.play()
        .then(console.log("Working"))
        .catch(err => console.log(err))
    }

    return (
        <>
        <Card >
            <button onClick={play}>
                <h1>{props.word}</h1>
            </button>
            
        </Card>
        </>
    )
}

export default WordCard;
import React from "react";
import { Card } from "reactstrap";
// import friedChicken from "../audio/fried-chicken.mp3"

function WordCard(props){

    // Play audio when word is clicked
    let wordAudio = new Audio(props.audio)
    wordAudio.crossOrigin = "anonymous";
    const play = () => {
        wordAudio.play()
        .then(console.log("Working"))
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
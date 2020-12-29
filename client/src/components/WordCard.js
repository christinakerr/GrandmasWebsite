import React from "react";
import { Card } from "reactstrap";
import audio from "../audio/chicken.mp3"

function WordCard(){

    let chicken = new Audio(audio)
    
    const play = () => {
        chicken.play()
        .then(console.log("Working"))
        .catch(err => console.log(err))
    }

    // window.addEventListener("click", e=> {
    //     let audio = document.getElementById("chicken");
    //     if (!audio){
    //         return;
    //     }
    //     console.log(audio);
    //     audio.play();
    // })
    return (
        <>
        <Card >
            <button onClick={play}>
                <h1>Chicken</h1>
                {/* <audio src={chicken} id="chicken"/> */}
            </button>
            
        </Card>
        </>
    )
}

export default WordCard;
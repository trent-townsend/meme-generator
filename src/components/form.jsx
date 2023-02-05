import React from 'react';
import memesData from '../../memesdata';

export default function MemeForm() {
    const memesArray = memesData.data.memes
    const [randMeme, setRandMeme] = React.useState("")

    function btnClick(e) {
        setRandMeme(memesArray[Math.floor(Math.random() * memesArray.length)])
        e.preventDefault();
    }

    return (
        <form className='meme-form'>
            <span className='form-inputs'>
                <input type="text" placeholder="Upper text" />
                <input type="text" placeholder="Lower text" />
            </span>
            <button className='meme-btn' onClick={btnClick}>Get a new meme image &#128444;</button>
            <img className='meme-img' src={randMeme.url}/>
        </form>
    )

}
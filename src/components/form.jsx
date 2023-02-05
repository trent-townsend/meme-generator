import React from 'react';
import memesData from '../../memesdata';

export default function MemeForm() {
    const memesArray = memesData.data.memes

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    function btnClick(e) {
        let memeUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url

        setMeme(prevMeme => {
            return{...prevMeme, 
                randomImg: memeUrl}
           })
           
        e.preventDefault();
    }

    return (
        <form className='meme-form'>
            <span className='form-inputs'>
                <input type="text" placeholder="Upper text" />
                <input type="text" placeholder="Lower text" />
            </span>
            <button className='meme-btn' onClick={btnClick}>Get a new meme image &#128444;</button>
            <img className='meme-img' src={meme.randomImg}/>
        </form>
    )

}
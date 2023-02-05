import React from 'react';
import memesData from '../../memesdata';

export default function MemeForm() {
    const memesArray = memesData.data.memes

    const meme = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg"
    }

    const [allMemeImages, setAllMemeImages] = React.useState(meme)

    function btnClick(e) {
        setAllMemeImages(prevMeme => {
            return{...prevMeme, 
                randomImg: memesArray[Math.floor(Math.random() * memesArray.length)].url}
           })
           console.log(allMemeImages)
        e.preventDefault();
    }

    return (
        <form className='meme-form'>
            <span className='form-inputs'>
                <input type="text" placeholder="Upper text" />
                <input type="text" placeholder="Lower text" />
            </span>
            <button className='meme-btn' onClick={btnClick}>Get a new meme image &#128444;</button>
            <img className='meme-img' src={allMemeImages.randomImg}/>
        </form>
    )

}
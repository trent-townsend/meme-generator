import React from 'react';

export default function MemeForm() {
    return (
        <form className='meme-form'>
            <span className='form-inputs'>
                <input type="text" placeholder="Upper text" />
                <input type="text" placeholder="Lower text" />
            </span>
            <div className='meme-btn'>
            <span>Get a new meme image</span>
            </div>
        </form>
    )
}
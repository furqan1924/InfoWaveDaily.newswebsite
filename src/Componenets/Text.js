import React, { useState } from 'react'

export default function Text(props) {
    const Upercase = () => {

        let Foruper = intext.toUpperCase();
        setIntext(Foruper)
    }
    const lowercase = () => {

        let Foruper = intext.toLowerCase();
        setIntext(Foruper)
    }

    const hendalingonchange = (event) => {
        setIntext(event.target.value)
    }
    const [intext, setIntext] = useState("");
    return (
        <>
        <div>
            <h1>{props.title}</h1>
            <textarea onChange={hendalingonchange} cols={50} rows="15" id='mybox' value={intext}></textarea>
            <button className='uperbtn' onClick={Upercase}>Convert To UpperCase</button>
            <button className='uperbtn' onClick={lowercase}>Convert To LowerCase</button>
            </div>
            <div>
                <h3>Your Text Summary</h3>
                <p>{intext.split(" ").length} Words and {intext.length} Charactors</p>
                <p>{0.008*intext.split(" ").length} Minutes read</p>
                <h3>Preview</h3>
                <p>{intext}</p>

            </div>

        </>
    )
}

import React from 'react'

const Buttons = (props)=> {
    const {text,click} = props;

    return (
        <button onClick={click}>
            {text}
        </button>
    )
}
export default Buttons;
import React from 'react'

const FunctionalComp = (props)=> {
    const {counter} = props;
    return (
        <div>
            {counter}
        </div>
    )
}

export default FunctionalComp;

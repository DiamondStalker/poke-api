import React from 'react'

const Type = ({ poke, id }) => {
    return (
        <div className={`type ${poke.type.name}`}>
            {poke.type.name}
        </div>
    )
}

export default Type
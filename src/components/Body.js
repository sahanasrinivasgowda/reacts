// first install react-player
//npm i react-player

import React from 'react'
import ReactPlayer from 'react-player' //import ReactPlayer  from react-player

const Body = () => {
    return (
        <div>
            {/* pass down url link in url attribuite */}
            <ReactPlayer url={'https://www.youtube.com/watch?v=WcxMOcxGYRk'} height={200}    controls />
        </div>
    )
}

export default Body
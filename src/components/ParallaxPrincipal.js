import React from "react";
// import IconButton from "@mui/material/IconButton";
// import { Preview } from "@mui/icons-material";
import play from "../assets/play-white.svg"
import pause from "../assets/pause-white.svg"

export default function ParallaxPrincipal() {
  const [audioState, setAudioState] = React.useState({
    isTextLoaded: false,
    isAudioLoaded: false,
    isPlaying: false,
  })
  
  function handlePlay(){
      document.getElementById('audioPlayer').play()
      setAudioState(prev=>({
        ...prev,
        isPlaying:true,  
      }))
  }
  function handlePause(){
    document.getElementById('audioPlayer').pause()
    setAudioState(prev=>({
      ...prev,
      isPlaying:false,  
    }))
}

let dynamicStyle = audioState.isTextLoaded ? { margin: "5px" }:{ margin: "5px", display:"none" } ;
  return (
    <div className="parallax-container">
      <div className="parallax" id="parallax-inicio">
        <div className="streaming-div">
          <div id="title-player">
          
            <div id="radio-en-linea" >
            <h1>RADIO EN LINEA</h1>
            {!audioState.isPlaying ? <img className='streamButton' src={play} alt='play' onClick={handlePlay} /> : <img className='streamButton' src={pause} alt='pause' onClick={handlePause}  />}
            </div>
            {/* <iframe
            title="player"
            className="streaming-player"
            height="60"
            style={{margin:"2px"}}
            frameBorder="0"
            scrolling="no"
            width="100%"
            src="http://streaming.mundoclasicaupa.com/liveradio/"
            allowtransparency="true"
          ></iframe> */}
            <audio
              // controls
              id="audioPlayer"
              src="http://streaming.mundoclasicaupa.com:8000/radioelmundo"
              // onLoadedData={()=>console.log("im loaded")}
            ></audio>
          </div>
          {/* <iframe
            onLoad={()=>{
            console.log("Streaming Loaded")
            setAudioState(prev=>({
              ...prev,
              isTextLoaded:true
            }))
            }}
            title="streaming"
            className="streaming"
            height="60"
            frameBorder="0"

            scrolling="no"
            width="100%"
            style={dynamicStyle}
            src="http://streaming.mundoclasicaupa.com/liveradio/metadata/icecast/"
            allowtransparency="true"
          ></iframe> */}
        </div>
      </div>
    </div>

    // </div>
  );
}

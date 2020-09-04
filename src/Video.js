import React, { useRef, useState } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from './VideoSidebar';

function Video() {
   const [playing, setPlaying] = useState(false);
   const videoRef = useRef(null);
   const onVideoPress = () => {
      if (playing) {
         videoRef.current.pause();
         setPlaying(false);
      } else {
         videoRef.current.play();
         setPlaying(true);
      }
   };
   return (
      <div className="video">
         <video
            className="video__player"
            loop
            onClick={onVideoPress}
            ref={videoRef}
            src="https://v16m.tiktokcdn.com/7b017cd11164bc4030d596a1be6a3d95/5f5237f8/video/tos/alisg/tos-alisg-pve-0037/2265a91929a34cc5b57b50f9b513f8f4/?a=1180&br=4052&bt=2026&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202009040649400101152290651E00ECAF&lr=tiktok&mime_type=video_mp4&qs=0&rc=amR0MzRodTw6dzMzNzgzM0ApNzw3ODk7NWVmN2U0NWdnM2dkbi1mX2IxZjNfLS00LzRzc2E1MDFiL2IuL141YDM0NF46Yw%3D%3D&vl=&vr="
         ></video>
         <VideoFooter
            chanel="tuanhuyngt"
            description="Binh minh do noi chung ta da"
            song="Tat ca se thay anh"
         />
         <VideoSidebar/>
      </div>
   );
}

export default Video;

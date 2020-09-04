import React, { useState } from "react";
import "./VideoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar() {
   const [liked, setLiked] = useState(false);
   return (
      <div className="videoSidebar">
         <div className="videoSidebar__button">
            {liked ? <FavoriteIcon fontSize="large" onClick={e=>setLiked(false)} />
            : <FavoriteBorderIcon fontSize="large" onClick={e=>setLiked(true)} />}
            <p>{liked? 1805+1 : 1805}</p>
         </div>
         <div className="videoSidebar__button">
            <MessageIcon fontSize="large" />
            <p>18</p>
         </div>
         <div className="videoSidebar__button">
            <ShareIcon fontSize="large" />
            <p>808</p>
         </div>
      </div>
   );
}

export default VideoSidebar;

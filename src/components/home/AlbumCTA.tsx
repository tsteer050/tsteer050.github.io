import React from "react";
import coverArt from "../../assets/TRVSTR.jpg";
import "./albumCTA.scss";

const AlbumCTA = () => {
    return (
        <div className="album-cta">
            <img alt="UYIV Cover" src={coverArt} />
            <div className="album-cta-text">
                <h1>USE YOUR INSIDE VOICE</h1>
                <h2>The debut album</h2>
                <h3>Individual tracks release starting Jan 2023</h3>
                <button>STREAM / BUY</button>
            </div>
        </div>
    );
};

export default AlbumCTA;

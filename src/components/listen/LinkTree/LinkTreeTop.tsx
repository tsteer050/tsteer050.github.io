import React from "react";
import "./LinkTreeTop.scss";

const LinkTreeTop = ({ selected, setSelected }) => {
    return (
        <div className="linktree-top">
            <img alt={selected.name} src={selected.img} />
            <div className="linktree-top-text-area">
                <h3>Trevor Steer</h3>
                <h3>{selected.name}</h3>
                <p>Listen now</p>
            </div>
        </div>
    );
};

export default LinkTreeTop;

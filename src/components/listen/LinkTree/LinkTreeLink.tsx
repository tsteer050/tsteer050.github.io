import React from "react";
import { serviceToImage } from "./links.ts";
import "./LinkTreeLink.scss";

const LinkTreeLink = ({ link }) => {
    
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };

    return (
        <div className="linktree-link">
            <img alt={link.service} src={serviceToImage[link.service]} />
            <button className="link-button" onClick={(e) => {
                e.preventDefault();
                openInNewTab(link.url);
            }}>
                {link.action}
            </button>
        </div>
    );
};

export default LinkTreeLink;

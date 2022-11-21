import React from "react";
import LinkTreeLink from "./LinkTreeLink.tsx";
import "./LinkTreeLinks.scss";

const LinkTreeLinks = ({ selected }) => {
    return (
        <div className="linktree-links">
            {selected.links.map((link) => {
                return <LinkTreeLink link={link} key={link.name} />
            })}
        </div>
    );
};

export default LinkTreeLinks;

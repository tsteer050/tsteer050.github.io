import React, { useState } from "react";
import { links } from "./links.ts";
import LinkTreeTop from "./LinkTreeTop.tsx";
import LinkTreeLinks from "./LinkTreeLinks.tsx";
import "./LinkTree.scss";

const LinkTree = () => {
    const [selected, setSelected] = useState(links["fts"]);

    return (
        <div className="linktree">
            <LinkTreeTop selected={selected} setSelected={setSelected} />
            <LinkTreeLinks selected={selected} />
        </div>
    );
};

export default LinkTree;

import React from "react";
import { ReactComponent as FBLogo } from "../../assets/facebook.svg";
import { ReactComponent as InstaLogo } from "../../assets/instagram.svg";
import { ReactComponent as YTLogo } from "../../assets/youtube.svg";
import styled from "styled-components";
import sharedSocialStyles from "./sharedSocialStyles.ts";
import "./Socials.scss";

const StyledFBLogo = styled(FBLogo)`${sharedSocialStyles}`;
const StyledInstaLogo = styled(InstaLogo)`${sharedSocialStyles}`;
const StyledYTLogo = styled(YTLogo)`${sharedSocialStyles}`;

const Socials = () => {

    return (
        <div className="socials">
            <a 
                href="https://www.facebook.com/trevorsteerofficial"
                rel="noreferrer noopener"
                target="_blank"
            >
                <StyledFBLogo />
            </a>
            <a 
                href="https://www.instagram.com/trevorsteer"
                rel="noreferrer noopener"
                target="_blank"
            >
                <StyledInstaLogo />
            </a>
            <a 
                href="http://bit.ly/3tAAOEz"
                rel="noreferrer noopener"
                target="_blank"
            >
                <StyledYTLogo />
            </a>    
        </div>
    );
};

export default Socials;

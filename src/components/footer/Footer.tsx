import React from "react";
import Socials from "./Socials.tsx";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import SubscribeForm from "./SubscribeForm.tsx";
import "./footer.scss";

const Footer = () => {

    const postUrl = `https://trevorsteer.us21.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
        <div className="subscribe-footer">
            <h3>SUBSCRIBE</h3>
            <p>Sign up to receive occasional news about releases and tour information</p>
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <SubscribeForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />

            <Socials />
        </div>
    )
};

export default Footer;

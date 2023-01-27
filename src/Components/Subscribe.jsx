import React, { useState } from 'react';
import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div></div>
  );
};

const MailchimpFormContainer = () => {

  const postUrl = `https://tellafriend.us21.list-manage.com/subscribe/post?u=4fa8a7fc8b4932a2c3473a7dd&id=1fc5cc1c2b`;

    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
              url={postUrl}
              render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={formData => subscribe(formData)}
                />
            )}
            />
        </div>
    );
};

export default MailchimpFormContainer;
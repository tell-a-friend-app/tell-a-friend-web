import React, { useState } from 'react';
import '../App.css';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    firstName &&
    lastName &&
    email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: email,
        MERGE1: firstName,
        MERGE2: lastName,
    });
}

  return (
    <form className="mailchimpform" onSubmit={(e) => handleSubmit(e)}>
        <h3 className="mailchimpformtitle">Join our email list for future updates.</h3>

        {status === "sending" && (
          <div className="mc__alert mc__alert--sending">
            sending...
          </div>
        )}
        {status === "error" && (
          <div
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}

        <div className="mc__field-container">
          <input
            label="First Name"
            onChangeHandler={setFirstName}
            type="text"
            value={firstName}
            placeholder="Jane"
            isRequired
          />

          <input
            label="Last Name"
            onChangeHandler={setLastName}
            type="text"
            value={lastName}
            placeholder="Doe"
            isRequired
          />

          <input
            label="Email"
            onChangeHandler={setEmail}
            type="email"
            value={email}
            placeholder="your@email.com"
            isRequired
          />

        </div>

        <input
          label="subscribe"
          type="submit"
          formValues={[email, firstName, lastName]}
        />
      </form>
  );
};

const MailchimpFormContainer = () => {

  const postUrl = `https://tellafriend.us21.list-manage.com/subscribe/post?u=4fa8a7fc8b4932a2c3473a7dd&id=1fc5cc1c2b`;

    return (
        <div className="mailchimpform-container">
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
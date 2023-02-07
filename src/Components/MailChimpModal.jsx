import React from 'react';
import Mailchimp from 'react-mailchimp-form';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const MailChimpModal = ({hide}) => {
  return (
    <div className="modal">
      <div className="mailChimpModal">
        <div className='closeButtons'>
          <AiOutlineCloseCircle id='modalClose' onClick={hide}/>
        </div>
        <h3 className='modalHeader'>Subscribe to get notified when tella.friend launches! We promise we won't spam you!</h3>
        <Mailchimp
          action='https://tellafriend.us21.list-manage.com/subscribe/post?u=4fa8a7fc8b4932a2c3473a7dd&id=1fc5cc1c2b'
          fields={[
            {
              name: 'EMAIL',
              placeholder: 'your@email.com',
              type: 'email',
              required: true
            }
          ]}
          messages = {
            {
              sending: "Sending...",
              success: "Thank you for joining the waitlist!",
              error: "An unexpected internal error has occurred.",
              empty: "Please input an email.",
              duplicate: "You've already joined the waitlist with this email.",
              button: "Join Waitlist"
            }
          }
          className='mailChimpForm'
        />
      </div>
    </div>

  );
}

export default MailChimpModal;
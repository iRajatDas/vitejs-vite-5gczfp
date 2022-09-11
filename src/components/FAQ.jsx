import React from 'react';
import Card from './Card';

const FAQ = () => {
  return (
    <div className="box mx-auto flex flex-col gap-y-5">
      <h1 className="heading_main">Frequently Asked Questions</h1>

      <Card
        question="How to withdraw money?"
        answer="Complete the given task and fill out the required form field to get
      paid."
      />

      <Card
        question="How much time we take to process withdrawal request?"
        answer="We generally pay our users between 24-48 hours since the request has
      been made."
      />

      <Card
        question="What is the minimum withdrawal threshold?"
        answer="For every 100 captcha we pay ₹5 Indian Rupees*."
      />

      <Card
        question="Do we store any user data?"
        answer="Users can start earning by filling out the captcha(s), We don't force
      them to create an account at our webiste. However, We do store
      withdrawal request data such as user name, mobile number, and some
      other security details."
      />
    </div>
  );
};

export default FAQ;

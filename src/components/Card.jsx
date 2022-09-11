import React from 'react';

const Card = ({ question, answer }) => {
  return (
    <div className="shadow shadow-gray-50 p-3.5 rounded-xl border">
      <h3 className="pb-3 font-medium text-xl leading-7 tracking-wider text-gray-900">
        {question}
      </h3>
      <p>{answer}</p>
    </div>
  );
};

export default Card;

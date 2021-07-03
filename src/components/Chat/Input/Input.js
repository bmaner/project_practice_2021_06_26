import React from 'react';

import './Input.css';

const Input = ({ setMessage, sendMessage, message, room }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder={`Message #💬${room}`}
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
  </form>
);

export default Input;
import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import InfoBar from '../components/Chat/InfoBar/InfoBar';
import Input from '../components/Chat/Input/Input';
import Messages from '../components/Chat/Messages/Messages';

import './Chat.css';

let socket;
// const ENDPOINT = 'http://localhost:5000/';
const ENDPOINT = 'https://chat-web-front-app.herokuapp.com/';

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const name = Math.random().toString(36).substr(2,11);
    const room = "room";
    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);
    
    console.log(name);
    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} room={room} />
      </div>
    </div>
  );
}

export default Chat;

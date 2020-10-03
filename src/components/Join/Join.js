import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Join.css';

const SignIn = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Chat App</h1>
        <div>
          <input placeholder="Tên của bạn" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Mã phòng" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className={'button mt-20'} type="submit">Đăng nhập</button>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;

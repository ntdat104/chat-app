import React from 'react';
import './TextContainer.css';
import onlineIcon from '../../icons/onlineIcon.png';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Chat App realtime <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Công nghệ sử dụng: React, Express, Node and Socket.IO</h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>Đang online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    <img alt="Online Icon" src={onlineIcon}/>
                    {name}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;
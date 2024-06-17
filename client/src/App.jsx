// import "./App.css";
// import io from "socket.io-client";
// import { useEffect, useState } from "react";
// const socket = io.connect("https://chatrush-using-react.onrender.com");

// function App() {
//   const [room, setRoom] = useState("");
//   const [message, setMessage] = useState("");
//   const [messageReceived, setMessageReceived] = useState("");

//   const joinRoom = () => {
//     if (room !== "") {
//       socket.emit("join_room", room);
//     }
//   };

//   const sendMessage = () => {
//     socket.emit("send_message", { message, room });
//   };

//   useEffect(() => {
//     socket.on("receive_message", (data) => {
//       setMessageReceived(data.message);
//     });
//   }, []);
//   return (
//     <div className="App">
//       <input
//         placeholder="room ID"
//         onChange={(event) => {
//           setRoom(event.target.value);
//         }}
//       />
//       <button onClick={joinRoom}>join Room</button>
//       <input
//         placeholder="message..."
//         onChange={(event) => {
//           setMessage(event.target.value);
//         }}
//       />
//       <button onClick={sendMessage}>send message</button>
//       <h1>Message: </h1>
//       {messageReceived}
//     </div>
//   );
// }

// export default App;

import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("https://chatrush-using-react.onrender.com");

function App() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="room-input">
          <input
            placeholder="Enter Room ID"
            onChange={(event) => setRoom(event.target.value)}
          />
          <button onClick={joinRoom}>Join Room</button>
        </div>
        <div className="message-input">
          <input
            placeholder="Type a message..."
            onChange={(event) => setMessage(event.target.value)}
          />
          <button onClick={sendMessage}>Send Message</button>
        </div>
        <div className="messages-display">
          <h1>Message:</h1>
          <p>{messageReceived}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

// import { useEffect, useState } from "react";
// import { sendMessage } from "../../../Redux/Features/chat/messagesSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { myMessages } from "../../../Redux/Features/chat/messagesSlice";

// let SendMessage = () => {
//   const dispatch = useDispatch();
//   const chatId = useSelector((state) => state.chatingUser?.chatId);
//   const allChats = useSelector((state) => state.allUserToChat?.allChats?.data);
//   let [message, setMessage] = useState("");

//   let findChatId = (myArray, targetItem) => {
//     return myArray.some((data) => {
//       if (data.id) {
//         return data.id == targetItem;
//       }
//       return false;
//     });
//   };

//   let handleChange = (e) => {
//     setMessage(e.target.value);
//   };

//   let handleSubmit = async () => {
//     if (Array.isArray(allChats)) {
//       console.log("status", findChatId(allChats, `${chatId}`));
//       console.log("chating id:", chatId);
//     }
//     console.log("message:", message, "chat id:", chatId);
//     dispatch(sendMessage({ content: message, chatId })).then(() => dispatch(myMessages(chatId)));
//     setMessage("");
//   };

//   return (
//     <>
//       <div className="sendMessage">
//         <input
//           type="text"
//           placeholder="write a message.."
//           className="sendInput"
//           value={message}
//           onChange={handleChange}
//         />
//         <img
//           className="sendIcon"
//           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCDjrGZTba_aPiLR6_2UcxvBao8SyLPOTUw&usqp=CAU"
//           onClick={handleSubmit}
//         />
//       </div>
//     </>
//   );
// };

// export default SendMessage;

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../../Redux/Features/chat/messagesSlice";
import { myMessages } from "../../../Redux/Features/chat/messagesSlice";
import { io } from "socket.io-client";

let SendMessage = () => {
  const dispatch = useDispatch();
  const chatId = useSelector((state) => state.chatingUser?.chatId);
  const allChats = useSelector((state) => state.allUserToChat?.allChats?.data);
  let [message, setMessage] = useState("");

  let findChatId = (myArray, targetItem) => {
    return myArray.some((data) => {
      if (data.id) {
        return data.id === targetItem;
      }
      return false;
    });
  };

  let handleChange = (e) => {
    setMessage(e.target.value);
  };

  let handleSubmit = async () => {
    if (Array.isArray(allChats)) {
      console.log("status", findChatId(allChats, `${chatId}`));
      console.log("chating id:", chatId);
    }
    console.log("message:", message, "chat id:", chatId);
    dispatch(sendMessage({ content: message, chatId })).then(() =>
      dispatch(myMessages(chatId))
    );
    setMessage("");

    const socket = io("http://localhost:3001/"); // Replace with the actual Socket.IO server URL
    socket.emit("send_message", { content: message, chatId }); // Emit the message to the server

    // Optional: You can listen to the "receive_message" event to handle incoming messages from the server
    socket.on("receive_message", (data) => {
      console.log("Received message:", data);
      // dispatch(myMessages(data.chatId));
      // Handle the received message
    });
  };

  return (
    <>
      <div className="sendMessage">
        <input
          type="text"
          placeholder="write a message.."
          className="sendInput"
          value={message}
          onChange={handleChange}
        />
        <img
          className="sendIcon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCDjrGZTba_aPiLR6_2UcxvBao8SyLPOTUw&usqp=CAU"
          onClick={handleSubmit}
        />
      </div>
    </>
  );
};

export default SendMessage;


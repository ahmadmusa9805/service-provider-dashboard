import { useState } from "react";
import {
  AiOutlineSearch,
  AiOutlinePaperClip,
  AiOutlineSend,
} from "react-icons/ai";

const users = [
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/28",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/27",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/29",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/30",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/31",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/32",
  },
  {
    id: 1,
    name: "Patient Mahfud",
    message: "Thank you Dr.",
    time: "3:00 PM",
    avatar: "https://avatar.iran.liara.run/public/33",
  },
];

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [messages, setMessages] = useState([
    {
      text: "Don't worry, the pain will pass soon",
      sender: "me",
      time: "20-Apr-2024",
    },
    { text: "Thank you Dr.", sender: "them", time: "20-Apr-2024" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        { text: newMessage, sender: "me", time: "Just now" },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-80 border-r flex flex-col p-4">
        <div className="relative mb-4">
          <AiOutlineSearch
            className="absolute left-3 top-2.5 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 p-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="flex-1 overflow-auto">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-3 p-4 hover:bg-gray-100 cursor-pointer"
              onClick={() => setSelectedUser(user)}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <h3 className="font-medium">{user.name}</h3>
                <p className="text-sm text-gray-500 truncate">{user.message}</p>
              </div>
              <span className="text-xs text-gray-500">{user.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col mb-10">
        <div className="p-4 border-b bg-teal-500 text-white flex items-center gap-3">
          <img
            src="https://avatar.iran.liara.run/public/28"
            alt={selectedUser.name}
            className="h-10 w-10 rounded-full object-cover"
          />
          <h2 className="font-medium">{selectedUser.name}</h2>
        </div>
        <div className="flex-1 overflow-auto bg-[#E6FAF9] p-4 space-y-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              <div className="bg-white rounded-lg p-3 max-w-md shadow">
                <p>{msg.text}</p>
                <p className="text-xs text-gray-500 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t bg-white flex gap-2">
          <input
            type="text"
            placeholder="Type your message"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring focus:border-teal-300"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button className="p-2 bg-gray-100 rounded-lg">
            <AiOutlinePaperClip size={20} className="text-gray-500" />
          </button>
          <button
            onClick={sendMessage}
            className="p-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg"
          >
            <AiOutlineSend size={20} />
          </button>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-72 border-l-[10px] border-white p-2 bg-[#E6FAF9] rounded-lg mb-10">
        <h3 className="text-xl text-[#4F4F59] font-medium mb-2 mt-5">Media(1)</h3>
        <img
          src="/3.jpg"
          alt="Media"
          className="rounded w-20 h-20 object-cover"
        />
        <div className="flex flex-col justify-center items-center py-3 bg-white mt-[300px]">
          <h3 className="text-xl text-[#4F4F59] font-medium">Attachments(1)</h3>
        </div>
        <div className="flex flex-col justify-center items-center bg-white py-3 mt-2">
          <p className="text-sm truncate">document.pdf</p>
          <p className="text-xs text-[#4F4F59]">2.00 MB</p>
        </div>
      </div>
    </div>
  );
};

export default Chat;

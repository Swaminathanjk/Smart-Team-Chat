// src/pages/NewChat.jsx
import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";

export default function NewChat() {
  const [name, setName] = useState("");
  const [icebreaker, setIcebreaker] = useState("");
  const { createChat, addMessage } = useContext(ChatContext);
  const navigate = useNavigate();

  const handleGenerateIcebreaker = () => {
    if (!name.trim()) {
      setIcebreaker("Please enter a participant name first.");
      return;
    }
    setIcebreaker(`Hey ${name}, how’s your week going so far? 😊`);
  };

  const handleCreate = () => {
    if (!name.trim()) return;
    const chatId = createChat(name);

    if (icebreaker) {
      addMessage(chatId, {
        id: Date.now().toString(),
        sender: "Me",
        text: icebreaker,
        time: new Date().toISOString(),
      });
    }

    navigate(`/chat/${chatId}`);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="p-4 border-b border-gray-300 bg-white flex justify-between items-center shadow-sm">
        <Link to="/" className="text-green-500 font-semibold hover:underline">
          ← Back
        </Link>
        <h2 className="text-lg font-semibold text-gray-800">New Chat</h2>
        <div className="w-12" />
      </header>

      {/* Form */}
      <div className="flex-1 flex flex-col p-6 gap-4">
        <label className="flex flex-col gap-2 text-gray-700">
          <span className="font-medium">Participant Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
            className="border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </label>

        <button
          onClick={handleGenerateIcebreaker}
          className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition w-fit text-sm font-medium"
        >
          Generate Icebreaker
        </button>

        {icebreaker && (
          <div className="p-3 bg-green-100 text-sm rounded-md border border-green-300 shadow-sm">
            <strong>AI Suggestion:</strong> {icebreaker}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-300 bg-white shadow-sm">
        <button
          onClick={handleCreate}
          className="w-full px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition text-sm font-medium"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
}

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
    // AI placeholder logic — can be replaced with real AI call later
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
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="p-4 border-b border-gray-200 flex justify-between items-center">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back
        </Link>
        <h2 className="text-lg font-semibold">New Chat</h2>
        <div className="w-12" /> {/* Spacer */}
      </header>

      {/* Form */}
      <div className="flex-1 flex flex-col p-6 gap-4">
        <label className="flex flex-col gap-2">
          <span className="font-medium">Participant Name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name..."
            className="border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </label>

        <button
          onClick={handleGenerateIcebreaker}
          className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-fit"
        >
          Generate Icebreaker
        </button>

        {icebreaker && (
          <div className="p-3 bg-green-100 text-sm rounded">
            <strong>AI Suggestion:</strong> {icebreaker}
          </div>
        )}
      </div>

      {/* Footer Action */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleCreate}
          className="w-full px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Start Chat
        </button>
      </div>
    </div>
  );
}

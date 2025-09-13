// src/pages/ChatWindow.jsx
import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import MessageList from "../components/MessageList";
import InputBar from "../components/InputBar";
import AIControls from "../components/AIControls";

export default function ChatWindow() {
  const { chatId } = useParams();
  const { chats, addMessage } = useContext(ChatContext);
  const chat = chats.find((c) => c.id === chatId);

  const [aiSummary, setAiSummary] = useState(null);
  const [aiReply, setAiReply] = useState(null);

  if (!chat) {
    return (
      <div className="p-4">
        <p>Chat not found.</p>
        <Link to="/" className="text-blue-600 underline">
          Back to chats
        </Link>
      </div>
    );
  }

  const handleSend = (text) => {
    if (!text.trim()) return;
    addMessage(chat.id, {
      id: Date.now().toString(),
      sender: "Me",
      text,
      time: new Date().toISOString(),
    });
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="p-4 border-b border-gray-200 flex justify-between items-center">
        <Link to="/" className="text-blue-600 hover:underline">
          ← Back
        </Link>
        <h2 className="text-lg font-semibold">{chat.name}</h2>
        <div className="w-12" /> {/* Spacer */}
      </header>

      {/* Message List */}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
        <MessageList messages={chat.messages} />
        {aiSummary && (
          <div className="mt-4 p-3 bg-yellow-100 text-sm rounded">
            <strong>AI Summary:</strong> {aiSummary}
          </div>
        )}
        {aiReply && (
          <div className="mt-4 p-3 bg-green-100 text-sm rounded">
            <strong>AI Suggestion:</strong> {aiReply}
          </div>
        )}
      </div>

      {/* AI Controls */}
      <AIControls
        onSummarize={() =>
          setAiSummary("This thread mainly discusses updates and next steps.")
        }
        onSmartReply={() =>
          setAiReply("Sounds good, let’s proceed with that plan!")
        }
      />

      {/* Input Bar */}
      <InputBar onSend={handleSend} />
    </div>
  );
}

// src/pages/ChatWindow.jsx
import { useParams, Link } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
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

  const [copiedReply, setCopiedReply] = useState(false);

  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages, aiSummary, aiReply]);

  if (!chat) {
    return (
      <div className="p-4">
        <p className="text-gray-600">Chat not found.</p>
        <Link to="/" className="text-blue-600 underline">
          Back to chats
        </Link>
      </div>
    );
  }

  // Predefined auto-replies
  const autoReplies = [
    "Got it 👍",
    "Interesting, tell me more!",
    "Let’s follow up on that soon.",
    "Haha, that’s funny 😂",
    "Sounds like a plan!",
    "I’ll check and get back to you.",
    "Thanks for sharing!",
  ];

  const handleSend = (text) => {
    if (!text.trim()) return;
    const newMessage = {
      id: Date.now().toString(),
      sender: "Me",
      text,
      time: new Date().toISOString(),
    };
    addMessage(chat.id, newMessage);

    // Simulate bot auto-reply after delay
    setTimeout(() => {
      const randomReply =
        autoReplies[Math.floor(Math.random() * autoReplies.length)];
      addMessage(chat.id, {
        id: (Date.now() + 1).toString(),
        sender: chat.name, // Or "Bot"
        text: randomReply,
        time: new Date().toISOString(),
      });
    }, 1000); // 1s delay
  };

  const copyToClipboard = (text, setCopied) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error("Failed to copy:", err));
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <header className="p-4 border-b border-gray-300 bg-white flex justify-between items-center shadow-sm">
        <Link to="/" className="text-green-500 font-semibold hover:underline">
          ← Back
        </Link>
        <h2 className="text-lg font-semibold text-gray-800">{chat.name}</h2>
        <div className="w-12" />
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <MessageList messages={chat.messages} />

        {aiSummary && (
          <div className="relative mt-2 p-3 bg-yellow-100 text-sm rounded-md border border-yellow-300 shadow-sm">
            <strong>AI Summary:</strong> {aiSummary}
          </div>
        )}

        {aiReply && (
          <div className="relative mt-2 p-3 bg-green-100 text-sm rounded-md border border-green-300 shadow-sm">
            <strong>AI Suggestion:</strong> {aiReply}
            <button
              onClick={() => copyToClipboard(aiReply, setCopiedReply)}
              className="absolute top-2 right-2 bg-green-200 hover:bg-green-300 text-xs px-2 py-1 rounded"
            >
              {copiedReply ? "Copied!" : "Copy"}
            </button>
          </div>
        )}

        <div ref={scrollRef} />
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

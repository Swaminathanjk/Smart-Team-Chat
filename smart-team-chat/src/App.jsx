// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatProvider } from "./context/ChatContext";
import ChatList from "./pages/ChatList";
import ChatWindow from "./pages/ChatWindow";
import NewChat from "./pages/NewChat";

export default function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ChatList />} />
          <Route path="/chat/:chatId" element={<ChatWindow />} />
          <Route path="/new" element={<NewChat />} />
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

// src/components/Layout.jsx
import { Outlet, useLocation, useParams } from "react-router-dom";
import Header from "./Header";

// Simple route-based config for header
export default function Layout() {
  const location = useLocation();
  const { chatId } = useParams();

  let headerProps = { title: "Smart Team Chat" };

  if (location.pathname === "/") {
    headerProps = {
      title: "Smart Team Chat",
      action: (
        <a
          href="/new"
          className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + New
        </a>
      ),
    };
  } else if (location.pathname.startsWith("/chat/")) {
    headerProps = { title: `Chat: ${chatId}`, backTo: "/" };
  } else if (location.pathname === "/new") {
    headerProps = { title: "New Chat", backTo: "/" };
  }

  return (
    <div className="flex flex-col h-full">
      <Header {...headerProps} />
      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
}

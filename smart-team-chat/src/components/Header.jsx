// src/components/Header.jsx
import { Link } from "react-router-dom";

export default function Header({ title, backTo = null, action = null }) {
  return (
    <header
      className="sticky top-0 z-20 flex items-center justify-between px-4 py-3
             bg-gray-50 border-b border-gray-200 shadow-sm"
    >
      {/* Back button */}
      <div className="w-20">
        {backTo && (
          <Link
            to={backTo}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition-colors"
          >
            <span className="text-lg">←</span> Back
          </Link>
        )}
      </div>

      {/* Title */}
      <h1 className="flex-1 text-center text-lg font-semibold text-gray-900 truncate">
        {title}
      </h1>

      {/* Action (like + New Chat) */}
      <div className="w-20 flex justify-end">
        {action && (
          <div className="text-blue-600 hover:text-blue-700 font-medium cursor-pointer transition-colors">
            {action}
          </div>
        )}
      </div>
    </header>
  );
}

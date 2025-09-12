// app/dashboard/layout.js
"use client";

import AuthGuard from "../components/AuthGuard";

export default function DashboardLayout({ children }) {
  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          {children}
        </div>
      </div>
    </AuthGuard>
  );
}

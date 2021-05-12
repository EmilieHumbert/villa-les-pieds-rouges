import React from "react";

export default function Error({ message }) {
  return (
    <div className="rounded border-red-700 text-red-900 bg-red-200 mx-4 p-4 break-words">
      {message}
    </div>
  );
}

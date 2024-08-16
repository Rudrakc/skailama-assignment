import React from "react";

function TextField({placeholder}) {
  return (
    <div>
      <input
        type="email"
        placeholder={placeholder}
        class="w-full px-4 py-4 mt-6 border bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
    </div>
  );
}

export default TextField;

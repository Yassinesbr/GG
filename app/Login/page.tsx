"use client";

import { useState } from "react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center mt-8">Login</h1>
      <form
        className="flex flex-col space-y-4 p-8 max-w-md mx-auto mt-8 rounded-lg bg-neutral-950"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col space-y-1" htmlFor="username">
          Email:
          <input
            className="p-2 border border-gray-300 rounded-md text-gray-900"
            type="text"
            name="username"
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>
        <label className="flex flex-col space-y-1" htmlFor="password">
          Password:
          <input
            className="p-2 border border-gray-300 rounded-md text-gray-900"
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>
        <br />
        <button className="p-2 bg-blue-500 text-white rounded-md" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default page;

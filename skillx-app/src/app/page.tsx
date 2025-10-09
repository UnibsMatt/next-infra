"use client";
import { useState } from "react";
import axios from "axios";

const endpoints = [
  { name: "App 1", url: "http://localhost:8001/api/users/" },
  { name: "App 2", url: "http://localhost:8002/api/users/" },
  { name: "App 3", url: "http://localhost:8003/api/users/" },
];
export default function Home() {
  const [selected, setSelected] = useState(endpoints[0].url);
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(selected, formData);
      setMessage("✅ User created successfully");
    } catch (err) {
      setMessage(`❌ ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 rounded shadow w-96">
        <h1 className="text-xl font-bold mb-4">User Creation Panel</h1>

        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="border p-2 mb-4 w-full"
        >
          {endpoints.map((e) => (
            <option key={e.url} value={e.url}>{e.name}</option>
          ))}
        </select>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="border p-2 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700"
          >
            Create User
          </button>
        </form>

        {message && <p className="mt-3 text-center">{message}</p>}
      </div>
    </div>
  );
}

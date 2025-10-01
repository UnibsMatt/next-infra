"use client";


export function HelloButton() {
    return (
      <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => console.log("Hello World")}>Click me</button>
    );
  }
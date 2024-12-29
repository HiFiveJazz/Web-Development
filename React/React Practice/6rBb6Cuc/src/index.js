import React from "react";
import { createRoot } from "react-dom/client";
import { pkcs12 } from "node-forge";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const date = new Date(2024,1,1,14);
const currentTime = date.getHours();
console.log(currentTime)

let greeting;

const customStyle = {
  color: "",
}

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red"
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "green"
} else {
  greeting = "Good Evening";
  customStyle.color = "blue"
}

root.render(
  <div>
    <h1 className = "heading" style={customStyle}>{greeting}</h1>
  </div>
);


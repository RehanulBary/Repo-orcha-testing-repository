import { getWelcomeMessage } from "./messages.js";

export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 640, margin: "40px auto" }}>
      <h1>Simple React App</h1>
      <p>{getWelcomeMessage("Repo-Orcha")}</p>
    </main>
  );
}

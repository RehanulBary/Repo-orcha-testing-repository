import { getWelcomeMessage } from "./messages.js";

export default function App(index) {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 640, margin: "40px auto" }}>
      <h1>Simple React App {index}</h1>
      <p>{getWelcomeMessage("Repo-Orcha")}</p>
    </main>
  );
}

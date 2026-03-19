import { getWelcomeMessage } from "./messages.js";

export default function App(index,str) {
  return (
    <main style={{ fontFamily: "sans-serif", maxWidth: 640, margin: "40px auto" }}>
      <h1>Simple React App {index}</h1>
      <h1>f(i)</h1>
      <p>{getWelcomeMessage("Repo-Orcha")}</p>
    </main>
  );
}
function f(i){
  console.log(i);
}

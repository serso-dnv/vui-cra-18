import "./App.css";
import { guid } from "@veracity/ui-utils";

function App() {
  return (
    <div>
      <ul>
        {Array(100)
          .fill("")
          .map((g) => guid())
          .map((g) => (
            <li key={g}>{g}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;

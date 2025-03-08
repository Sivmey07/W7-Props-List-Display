import React from "react";
import { CARDS_DATA } from "./data";
import Card from "./components/Card";
import "./index.css";

function App() {
  return <>{/* Your code  here */}

    <header>
      <h1>My Items</h1>
    </header>
    <main className="cards-view">
      <div className="cards-grid">
        {CARDS_DATA.map((card, index) => (
          <Card key={index} card={card} />
            ))}
      </div>
    </main>
      
  </>;

}

export default App;

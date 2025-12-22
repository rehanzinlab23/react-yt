import React from "react";
import Card from "./components/card";

const App = () => {
  return (
    <div className="parent">
      <Card
        user="Rehan"
        age={17}
        img="https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
      />
      <Card
        user="Emily"
        age={22}
        img="https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Card
        user="Lily"
        age={28}
        img="https://images.unsplash.com/photo-1766106509321-f62d0017d9e6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4Mnx8fGVufDB8fHx8fA%3D%3D"
      />
    </div>
  );
};

export default App;

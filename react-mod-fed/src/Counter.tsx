// import { useStore } from "@tanstack/react-store";

import { styles } from "./Counter.styles";
import { useStore } from "@tanstack/react-store";
import { useState } from "react";
import store from "ReactModuleFederationTwo/counterStore";

export default function Counter() {
  //   const count = useStore(store);
  const [character, setCharacter] = useState('1');
  const count = useStore(store, state => state.count);
    const increment = () => {
      store.setState((state) => {
        return {
          ...state,
          count: state.count + 1,
        };
      });
    }
  
    const decrement = () => {
      store.setState((state) => { 
        return {
          ...state,
          count: state.count - 1,
        };
      });
    }
    const find = () => {
      store.setState((state) => {
        return {
          ...state,
          flightNumber: character,
        };
      });
    };

  


  return (
    <div style={styles.counter}>
      <div style={styles.titleContainer}>
        <h1 style={styles.title}>React Counter</h1>
      </div>
      <div style={styles.countDisplay}>
        <h1 style={styles.count}>{count}</h1>
      </div>
      <div style={styles.buttonContainer}>
        <button
          onClick={increment}
          style={styles.incrementButton}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={styles.decrementButton}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Decrement
        </button>
        <div style={styles.findContainer}>
          <input
            type="text"
            value={character}
            onChange={(e) => setCharacter(e.target.value)}
            style={styles.input}
          />
          <button
            onClick={find}
            style={styles.findButton}
          >
            Find
          </button>
        </div>
      </div>
    </div>
  );
}
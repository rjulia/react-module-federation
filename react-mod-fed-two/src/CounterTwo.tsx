// import { useStore } from "@tanstack/react-store";

import { styles } from "./Counter.styles";
import { useStore } from "@tanstack/react-store";

import store from "./counterStore";
import { useEffect } from "react";

export default function Counter() {
  //   const count = useStore(store);

  const count = useStore(store, state => state.count);
  const flightNumber = useStore(store, state => state.flightNumber);
  console.log("🚀 ~ Counter ~ flightNumber:", flightNumber)
  const data = useStore(store, state => state.data);

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

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters/${flightNumber}`)
      .then((response) => response.json())
      .then((data) => {
        store.setState((state) => {
          return {
            ...state,
            data: data,
          };
        });
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [flightNumber]);
  
  

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
      </div>
      <div>
        <p style={styles.text}>KI: {data.ki}</p>
        <p style={styles.text}>Name: {data.name}</p>
      </div>
    </div>
  );
}
import React, { Component } from "react";
import { PollInterval } from "./PollInterval";
import "./App.css";

const apiUrl = "https://pokeapi.co/api/v2/pokemon/2/";
const STOP = "STOP";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Bulbasaur",
      imgUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
    };
  }
  _updatePokemon = data => {
    this.setState({
      name: data.name,
      imgUrl: data.sprites.back_default
    });
  };

  render() {
    const { name, imgUrl } = this.state;
    return (
      <div>
        <PollInterval>
          {({ startPolling, stopPolling }) => {
            return (
              <div className="App">
                <h1>Pokemon Poller</h1>
                <button
                  onClick={() => startPolling(apiUrl, this._updatePokemon)}
                >
                  Start Polling
                </button>
                <button onClick={stopPolling}>Stop Polling</button>
                <h1>{name}</h1>
                <img src={imgUrl} />
              </div>
            );
          }}
        </PollInterval>
      </div>
    );
  }
}

export default App;

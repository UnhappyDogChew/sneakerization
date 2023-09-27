import "./App.css";
import Tile from "./components/Tile";

export default function App() {
  return (
    <>
      <h1>hello, sneakerization!</h1>
      <main className="map">
        <div className="row">
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          {/* <Tile></Tile> */}
        </div>
        <div className="row">
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          <Tile></Tile>
          {/* <Tile></Tile> */}
        </div>
      </main>
    </>
  );
}

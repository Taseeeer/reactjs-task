import { useState } from "react";
import Lists from "./components/Lists";
import Navbar from "./components/Navbar";
import GlobalStyles from "./styles/GlobalStyles";

function App() {


  const [ searchvalue, setSearchvalue ] = useState("");

  return (
    <div className="App">
      <GlobalStyles />
      <Navbar setSearchvalue={setSearchvalue} />
      <Lists searchvalue={searchvalue} />
    </div>
  );
}

export default App;

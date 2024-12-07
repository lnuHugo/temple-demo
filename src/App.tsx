import { useState } from "react";
import "./App.css";
import WalletConnect from "./components/WalletConnect";


function App() {
  const [showWidget, setShowWidget] = useState<boolean>(false);

  return (
    <div>
      {showWidget && (
        <>
          <WalletConnect />
        </>
      )}
      {!showWidget && (
        <button onClick={() => setShowWidget(!showWidget)}>Connect</button>
      )}
    </div>
  );
}

export default App;

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
          <button onClick={() => setShowWidget(!showWidget)}>Disconnect</button>
        </>
      )}
      {!showWidget && (
        <button onClick={() => setShowWidget(!showWidget)}>Connect</button>
      )}
    </div>
  );
}

export default App;

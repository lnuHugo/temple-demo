import React, { useState } from "react";
import "./WalletConnect.css";

// Import Temple Wallet library
import { TempleWallet } from "@temple-wallet/dapp";

// Komponent för att hantera popup och plånboksinloggning
function WalletConnect() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Funktion för att öppna popupen
  const togglePopup = () => setIsOpen(!isOpen);

  // Funktion för att logga in med Temple Wallet
  const connectToTempleWallet = async () => {
    try {
      // Initiera Temple Wallet
      const temple = new TempleWallet("Temple-Demo");
      const network = {
        rpc: "https://tezos-node", // Ersätt med rätt RPC-URL för Tezos nätverket
        name: "Mainnet", // Använd rätt nätverksnamn
      };

      // Anslut till plånboken
      const result = await temple.connect(network);
      console.log(result);

      setIsLoggedIn(true);
      togglePopup();
    } catch (error) {
      console.error("Error connecting to Temple Wallet:", error);
    }
  };

  return (
    <div>
      {/* Knapp för att visa popup */}
      <button onClick={togglePopup}>Connect Wallet</button>

      {/* Popup för att välja plånbok */}
      <div
        className={`wallet-connect ${isOpen ? "open" : ""}`}
        onClick={togglePopup}
      >
        <div className="popup-content" onClick={(e) => e.stopPropagation()}>
          <h2>Choose Your Tezos Wallet</h2>
          <button onClick={connectToTempleWallet}>
            <img src="/temple.svg" alt="Temple Wallet" width="30" />
            <span>Connect Temple Wallet</span>
          </button>
          {isLoggedIn && <p>Logged in with Temple Wallet!</p>}
        </div>
      </div>
    </div>
  );
}

export default WalletConnect;

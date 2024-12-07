import React, { useState, useEffect } from "react";
import "./WalletConnect.css";
import { connectWallet } from "../utils/wallet";

function WalletConnect() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkActiveAccount = async () => {
      const activeAccount = await connectWallet();
      if (activeAccount) {
        setWalletAddress(activeAccount);
        setIsLoggedIn(true);
      }
    };

    checkActiveAccount();
  }, []);

  const connect = async () => {
    const address = await connectWallet();
    if (address) {
      setWalletAddress(address);
      setIsLoggedIn(true);
    }
  };

  const disconnect = () => {
    setWalletAddress(null);
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Connected with: {walletAddress}</p>
          <button onClick={disconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}

export default WalletConnect;

import React, { useState } from "react";
import { Web3Provider } from "../Wallet/web3";
import Wallet from "../Wallet/Wallet";
import "./Header.css";

export default function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function handleBorderStyle() {
    const common = "header-title";
    return isCollapsed ? `${common} fade noop"` : `${common} glow noop"`;
  }

  return (
    <div className="header-wrapper">
      <div className="header-container">
        <h1 className={handleBorderStyle()}> BANKLESS POD </h1>
        <p>
          Welcome to the Bankless PoolTogether Pod, a smart contract that allows
          users to combine their deposits together for a higher chance to win.
          Hop onto the pod by connecting your wallet now!
        </p>
        <Web3Provider>
          <Wallet
            onDepositToggle={(status) => {
              setIsCollapsed(!status);
            }}
          />
        </Web3Provider>
      </div>
    </div>
  );
}

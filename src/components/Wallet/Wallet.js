import {
  Button,
  Stack,
  useDisclosure,
  Collapse,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState, useRef } from "react";
import { Web3Context } from "./web3";
import { ReactComponent as MetamaskIcon } from "../../assets/icons/mask.svg";
import { ReactComponent as WalletIcon } from "../../assets/icons/wallet.svg";
import { ReactComponent as WrongIcon } from "../../assets/icons/wrong.svg";
import { ReactComponent as ArrowIcon } from "../../assets/icons/arrow.svg";
import { ToastContainer } from "react-toastify";
import toaster from "./toasts";
import "react-toastify/dist/ReactToastify.css";

import "./Wallet.css";

export default function Wallet({ onDepositToggle }) {
  const { account, connectWeb3, logout } = useContext(Web3Context);
  const [connected, setConnected] = useState(false);
  const { isOpen, onToggle } = useDisclosure();
  const inputDai = useRef(null);

  useEffect(() => {
    let defaultWallet = localStorage.getItem("defaultWallet");
    if (defaultWallet) {
      handleConnectWeb3();
    }
  }, []);

  async function handleConnectWeb3() {
    if (connected) {
      logout();
      setConnected(false);
    } else {
      await connectWeb3();
      setConnected(true);
    }
  }

  function toggleDeposit() {
    if (!true) {
      toaster("NO_DAI");
      return;
    }
    onDepositToggle(isOpen);
    if (inputDai && inputDai.current) {
      setTimeout(() => {
        inputDai.current.focus();
      }, 0);
    }
    onToggle();
  }

  async function approve() {
    toaster("APPROVED");
  }

  return (
    <React.Fragment>
      <Stack direction="row" spacing={4}>
        <Button
          className="btn--space connect__btn"
          leftIcon={<MetamaskIcon />}
          borderRadius="37px"
          variant="solid"
          bg="white"
          onClick={handleConnectWeb3}
        >
          {connected ? "Disconnect MetaMask" : "Connect with MetaMask"}
        </Button>
        {connected ? (
          <Button
            className="btn--space deposit"
            leftIcon={isOpen ? <WrongIcon /> : <WalletIcon />}
            borderRadius="37px"
            variant="solid"
            onClick={toggleDeposit}
            bg="white"
          >
            {isOpen ? "Cancel" : "Deposit"}
          </Button>
        ) : null}
      </Stack>
      <p className="wallet__status">
        {account ? `${account} on Ethereum` : ``}
      </p>
      <Collapse in={isOpen} animateOpacity className="collapse">
        <Stack direction="row" spacing="4px">
          <NumberInput>
            <NumberInputField
              ref={inputDai}
              className="inputDai"
              placeHoldersize="lg"
              placeholder={"0.0000"}
              _placeholder={{ color: "#fff" }}
            />
          </NumberInput>
          <h1 className="bold--32 plc"> DAI </h1>
          <ArrowIcon onClick={approve} className="arrow" />
        </Stack>
      </Collapse>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme="dark"
        draggable
        pauseOnHover
      />
    </React.Fragment>
  );
}

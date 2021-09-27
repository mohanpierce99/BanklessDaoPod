import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <ChakraProvider>
      <div className="container">
        <Header />
        <Home />
      </div>
    </ChakraProvider>
  );
}

export default App;

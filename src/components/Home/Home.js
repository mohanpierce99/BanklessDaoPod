import { Button } from "@chakra-ui/react";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { ReactComponent as ManageIcon } from "../../assets/icons/manage.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home__wrapper">
      <LogoIcon className="logo"></LogoIcon>
      <Button
        className="manage bold--16"
        leftIcon={<ManageIcon />}
        borderRadius="29px"
        variant="solid"
        bg="white"
      >
        Manage POD
      </Button>
    </div>
  );
}

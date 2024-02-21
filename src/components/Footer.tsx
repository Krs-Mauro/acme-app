import { Button } from "@chakra-ui/react";
import Link from "next/link";

const Footer = ({ source }: { source: string }) => {
  return (
    <footer
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        height: "10vh",
        width: "100%",
        backgroundColor: "#69c983",
      }}
    >
      {source === "form" ? (
        <Link href="/">
          <Button as="a">Home</Button>
        </Link>
      ) : (
        <Link href="/form">
          <Button as="a">Form</Button>
        </Link>
      )}
    </footer>
  );
};

export default Footer;

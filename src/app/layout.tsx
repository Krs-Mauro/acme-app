import { ChakraProvider } from "@chakra-ui/react";

export const metadata = {
  title: "Acme App",
  description: "Testing the Acme stack",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}

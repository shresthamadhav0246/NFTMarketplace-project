import { Footer, NavBar } from "@/component";
import { NFTMarketplaceProvider } from "@/context/NFTMarketplace";

import "@/styles/globals.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export const metadata = {
  title: "NFTMarketplace",
  description: "null",
};

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background-color 0.3s, color 0.3s;
  }

  .input, .textarea, .fileInput {
  
    background-color: ${({ theme }) => theme.inputBg};
    transition: border-color 0.3s, background-color 0.3s;
  }
`;

const lightTheme = {
  body: "#f4f4f4;",
  text: "#000",
  cardBg: "#fff",
  inputBg: "#000",
  switchBg: "#ccc",
  switchBgChecked: "#2196F3",
  sliderBg: "#fff",
  sliderBgChecked: "#f1c40f",
};

const darkTheme = {
  body: "#161616",
  text: "#FFF",
  cardBg: "rgba(255, 255, 255, 0.05)",
  inputBg: "#000",
  switchBg: "#555",
  switchBgChecked: "#555",
  sliderBg: "#fff",
  sliderBgChecked: "#f1c40f",
};

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const router = useRouter();
  const noFooterRoutes = ["/collection", "/profile"];

  const showFooter = !noFooterRoutes.includes(router.pathname);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <NFTMarketplaceProvider>
        <GlobalStyle />

        <NavBar toggleTheme={toggleTheme} isDarkMode={theme === "dark"} />
        <Component {...pageProps} />
        {showFooter && <Footer />}
      </NFTMarketplaceProvider>
    </ThemeProvider>
  );
}

export default App;

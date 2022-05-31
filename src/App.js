import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";
import GlobalStyle from "./GlobalStyle";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;

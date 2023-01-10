import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gnb from "../components/Gnb";
import Home from "./Home/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

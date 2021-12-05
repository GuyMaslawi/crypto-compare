import { Routes, Route } from "react-router-dom";
import CoinDetails from "../pages/coin-details/CoinDetails";
import Home from "../pages/home/Home";

const NavRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path=":coinName" element={<CoinDetails />} />
        </Routes>
    );
};

export default NavRoutes;

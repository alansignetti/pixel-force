import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Onboarding from "../Pages/Onboarding";
import Login from "../Pages/Login";
import Explore from "../Pages/Explore";
import Chat from "../Pages/Chat";
import Profile from "../Pages/Profile";

const Navigation = () => {
  return (
    <BrowserRouter>
      {/* <Header cartCount={productsInCart ? productsInCart.length : 0} /> */}
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};
export default Navigation;

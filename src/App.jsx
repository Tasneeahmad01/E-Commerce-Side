 import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Login from "./Components/login/Login";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Fashion from "./Components/Fashion";
import Cart from "./Components/Cart";
import Men from "./Components/Men";
import Women from "./Components/Women";
import Girls from "./Components/Girls";
import Kids from "./Components/Kids";
import Shirt from "./Components/Shirt";
import ProductDetail from "./Components/ProductDetail";
import MedalDetail from "./Components/MedalDetail";
import GirlsProductdetail from "./Components/GirlsProductdetail";
import Search from "./Components/Search";
import Electronics from "./assets/Electronics";
import HomeKitchen from "./assets/HomeKitchen";
import HomeKitchenDetail from "./assets/HomekitchenDetail";
import Beauty from "./assets/Beauty";
function App() {
  const [login, setLogin] = useState(
    localStorage.getItem("login") === "true"
  );

  const handleLoginSuccess = () => {
    localStorage.setItem("login", "true");
    setLogin(true);
  };

  return (
    <BrowserRouter>
      <AppLayout
        login={login}
        handleLoginSuccess={handleLoginSuccess}
      />
    </BrowserRouter>
  );
}

function AppLayout({ login, handleLoginSuccess }) {
  const location = useLocation();

  // Cart page par Navbar/Footer hide
  const hideLayout = location.pathname === "/cart";

  return (
    <>
      {/* Navbar */}
      {login && !hideLayout && <Navbar />}

      <Routes>
        {!login ? (
          <Route
            path="*"
            element={
              <Login setIsLoggedIn={handleLoginSuccess} />
            }
          />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/fashion" element={<Fashion />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/girls" element={<Girls />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/shirt" element={<Shirt />} />
            <Route
              path="/homekitchenDetail/:id"
              element={<HomeKitchenDetail />}
            />

            <Route
              path="/productdetail/:id"
              element={<ProductDetail />}
            />
            <Route
              path="/medal/:id"
              element={<MedalDetail />}
            />

            <Route
              path="/Girlsproductdetail/:id"
              element={<GirlsProductdetail />}
            />
            <Route
              path="/search/:keyword"
              element={<Search />}
            />
            <Route
              path="/electronics"
              element={<Electronics />}
            />
            <Route
              path="/home-kitchen"
              element={<HomeKitchen />}
            />
            <Route path="/beauty" element={<Beauty/>}/>

            {/* Wrong URL → Home */}
            <Route
              path="*"
              element={<Navigate to="/" />}
            />
          </>
        )}
      </Routes>

      {/* Footer */}
      {login && !hideLayout && <Footer />}
    </>
  );
}

export default App;
 
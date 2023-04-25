// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import CreatePostPage from "./pages/CreatePostPage/CreatePostPage";
import AboutPage from "./pages/About Page/AboutPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import EditPostPage from "./pages/Edit Post/EditPost";
import FavoriteTipsPage from "./pages/FavoriteTips Page/FavoriteTipsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createpost/" element={<PrivateRoute><CreatePostPage /></PrivateRoute>} />
        <Route path="/about/" element={<AboutPage />} />
        <Route path="/profile/" element={<ProfilePage />}></Route>
        <Route path="/editpost/:tipId/" element={<EditPostPage />} />
        <Route path="favorites/" element={<FavoriteTipsPage />} />

      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

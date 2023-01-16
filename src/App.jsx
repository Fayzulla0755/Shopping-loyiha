import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import MainPage from "./pages/MainPage/MainPage";
import RegisterModal from "./Components/RegisterModal/RegisterModal";
import ProductPage from "./pages/ProductPage/ProductPage";
import UserPage from "./pages/UserPage/UserPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
    return (
        <Layout >
            <Routes>
                <Route path="*" element={<ErrorPage />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/user" element={<UserPage />} />
            </Routes>
            <ToastContainer position="top-right" />
            <RegisterModal />
        </Layout>
    );
}

export default App;

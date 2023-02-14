import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUpForm from './SignUpForm';
import MainPage from "./MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

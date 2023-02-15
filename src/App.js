import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import SignUpForm from './SignUpForm';
import MainPage from "./MainPage";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div>
          <div className="container">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/signup" element={<SignUpForm />} />
            </Routes>
          </div>
      </div>
      </BrowserRouter>
  );
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { PostPage } from "./components/PostPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<PostPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

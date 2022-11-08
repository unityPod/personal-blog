import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from "./components/Home";
import { PostPage } from "./components/PostPage";
import { useAppSelector} from "./store/hooks";

function App() {
  const mode = useAppSelector(state => state.mode.value)
  return (
    <div className={mode}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

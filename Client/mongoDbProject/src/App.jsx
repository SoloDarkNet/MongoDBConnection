import Post from "./Components/post";
import Get from "./Components/get";
import Update from "./Components/update";
import Delete from "./Components/delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="get" element={<Get />} />
          <Route path="update" element={<Update />} />
          <Route path="delete" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

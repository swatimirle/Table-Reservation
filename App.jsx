import { Toaster } from "react-hot-toast";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";


const App = () => {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="*" element={<NotFound />}/>
      <Route path="/Success" element={ <Success />}/>
    </Routes>
    <Toaster/>
  </Router>
  );
};

export default App;
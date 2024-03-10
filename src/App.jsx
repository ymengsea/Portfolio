import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Resume from "./Page/Resume";
import Contact from "./Page/Contact";
import Work from "./Page/Work";
import Test from "./Page/Test";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Work" element={<Work />} />
        </Routes>
      </Router>
      {/* <Test /> */}
    </div>
  );
}

export default App;

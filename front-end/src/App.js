import { Routes, Route } from "react-router-dom";
import Nav from "./Components/Nav";

//import routes
import Home from "./pages/Home";
import Index from "./pages/Index";
import Show from "./pages/Show";
import New from "./pages/New";
import Edit from "./pages/Edit";
import FourOFour from "./pages/FourOFour";

function App() {
  return (
    <div className="App">
      <main></main>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/snacks" element={<Index />} />
        {/* <Route path="/snacks/new" element={<New />} />
        <Route path="/snacks/:snackId/edit" element={<Edit />} /> */}
        <Route path="/snacks/:snackId" element={<Show />} />
        <Route path="*" element={<FourOFour />} />
      </Routes>
    </div>
  );
}

export default App;

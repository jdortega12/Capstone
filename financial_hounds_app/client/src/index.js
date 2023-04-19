import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import CreateAccount from "./components/CreateAccount"
import Login from "./components/Login"
import GenericPlanner from "./components/GenericPlanner"
import StudentHome from "./components/StudentHome"
import CreateBudget from "./components/CreateBudget"
import ViewBudget from "./components/ViewBudget"
import CreateEmergency from "./components/CreateEmergency"


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about/genericplanner" element={<GenericPlanner />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/createbudget" element={<CreateBudget />} />
          <Route path="/viewbudget" element={<ViewBudget />} />
          <Route path="/createemergency" element={<CreateEmergency />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

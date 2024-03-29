import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import CreateAccount from "./components/CreateAccount";
import Login from "./components/Login";
import GenericPlanner from "./components/GenericPlanner";
import StudentHome from "./components/StudentHome";
import StudentProfile from "./components/StudentProfile";
import CreateBudget from "./components/CreateBudget";
import ViewBudget from "./components/ViewBudget";
import CreateEmergency from "./components/CreateEmergency";
import ViewEmergency from "./components/ViewEmergency";
import CreateRetirement from "./components/CreateRetirement";
import ViewRetirement from "./components/ViewRetirement";
import ViewAll from "./components/ViewAll";
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import ViewStudents from "./components/ViewStudents";
import Forum from "./components/Forum";
import ViewStocks from "./components/ViewStocks";
import StockList from "./components/StockList";

export default function App() {
  return (
    <BrowserRouter>
    <ScrollTop>
      <Routes>
        <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about/genericplanner" element={<GenericPlanner />} />
          <Route path="/studenthome" element={<StudentHome />} />
          <Route path="/studentprofile" element={<StudentProfile />} />
          <Route path="/createbudget" element={<CreateBudget />} />
          <Route path="/viewbudget" element={<ViewBudget />} />
          <Route path="/createemergency" element={<CreateEmergency />} />
          <Route path="/viewemergency" element={<ViewEmergency />} />
          <Route path="/createretirement" element={<CreateRetirement />} />
          <Route path="/viewretirement" element={<ViewRetirement />} />
          <Route path="/viewall" element={<ViewAll />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/viewstudents" element={<ViewStudents />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/viewstocks" element={<ViewStocks />} />
          <Route path="/stocklist" element={<StockList />} />


        </Route>
      </Routes>
      </ScrollTop>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

import { Route, Routes } from "react-router-dom";
import SingleUserPage from "./SingleUserPage";
// import EmployeeList from "./EmployeeList";
import Home from "./Home";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path='/'  element={ <Home />} />
      <Route path='/users' element={<SingleUserPage />} />
    </Routes>
  );
}
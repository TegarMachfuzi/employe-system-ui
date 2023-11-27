import './App.css';
import Navbar from './component/navbar';
import AddEmployee from './component/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './component/EmployeeList';
import UpdateEmployee from './component/UpdateEmployee';
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<EmployeeList/>} />
        <Route path='/' element={<EmployeeList />}></Route>
        <Route path='/employeList' element={<EmployeeList/>} />
        <Route path='/addEmployee' element={<AddEmployee/>} />
        <Route path='/editEmployee/:id' element={<UpdateEmployee/>} />
      </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;

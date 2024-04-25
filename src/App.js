import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header1 from "./website/Components/Header1";
import Header2 from "./website/Components/Header2";
import Navbar from "./website/Components/Navbar";
import About from "./website/Pages/About";
import Blog from "./website/Pages/Blog";
import Contact from "./website/Pages/Contact";
import Home from "./website/Pages/Home";
import Login from "./website/Pages/Login";
import Signup from "./website/Pages/Signup";





import Makeup_artist from "./website/Pages/Makeup_artist";
import Dashboard from "./admin/Pages/Dashboard";
import Add_blog from "./admin/Pages/Add_blog";
import Manage_blog from "./admin/Pages/Manage_blog";
import Manage_artist from "./admin/Pages/Manage_artist";
import Manage_contact from "./admin/Pages/Manage_contact";
import Artist_profile from "./website/Pages/Artist_profile";
import Edit_profile from "./website/Pages/Edit_profile";

function App() {
  return (
    <>
      {/* <Navbar></Navbar> */}
      {/* <Header1 /> */}
      {/* <Header2 /> */}
      {/* <Header1 /> */}

      {/* <Home /> */}
      {/* <About /> */}
      {/* <Makeup_artist /> */}
      {/* <Contact /> */}
      {/* <Blog /> */}



      {/* Website */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Home /></>}> </Route>
          <Route path="/about" element={<><About /></>}> </Route>
          <Route path="/contact" element={<><Contact /></>}> </Route>
          <Route path="/Makeup_artist" element={<><Makeup_artist /></>}> </Route>
          <Route path="/contact" element={<><Contact /></>}> </Route>
          <Route path="/Blog" element={<><Blog /></>}> </Route>
          <Route path="/Log_in" element={<><Login /></>}> </Route>
          <Route path="/signup" element={<><Signup /></>}> </Route>
          <Route path="/profile" element={<><Artist_profile /></>}> </Route>
          <Route path="/edit_profile" element={<><Edit_profile /></>}> </Route>



        </Routes>
      </BrowserRouter>



      {/* admin */}
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<><Dashboard /></>}> </Route>
          <Route path="/Add_blog" element={<><Add_blog /></>}> </Route>
          <Route path="/Manage_blog" element={<><Manage_blog /></>}> </Route>
          <Route path="/Manage_artist" element={<><Manage_artist /></>}> </Route>
          <Route path="/Manage_contact" element={<><Manage_contact /></>}> </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

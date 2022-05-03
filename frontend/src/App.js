import logo from "./logo.svg";
import "./App.css";
import Dashboard from "./components/admin/dashboard";
import Admin from "./components/admin/index";
import ManageUser from "./components/admin/manageUser";
import AdminProfile from "./components/admin/profile";
import BrowseFlower from "./components/main/browseFlower";
import Home from "./components/main/home";
import Main from "./components/main/index";
import SignIn from "./components/main/signin";
import NotFound from "./components/main/notFound";
import ResetPassword from "./components/main/resetPassword";
import Signup from "./components/main/signup";
import User from "./components/user/index";
import UserProfile from "./components/user/profile";
import AddFlorist from "./components/admin/addFlorist";
import ManageFlorist from "./components/admin/manageFlorist";
import ManageFlower from "./components/admin/manageFlower";
import BrowseFlorist from "./components/main/browseflorist";
import FloristList from "./components/main/floristlist";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar";
import UserAuthenticator from "./components/userAuthenticator";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Admin/>} path="admin">
            <Route element={<AddFlorist/>} path="addflorist" />
            <Route element={<Dashboard/>} path="dashboard" />
            <Route element={<ManageUser/>} path="manageuser" />
            <Route
              element={<ManageFlorist/>}
              path="managerflorist"
            />
            <Route
              element={<ManageFlower/>}
              path="manageflower"
            />
            <Route
              element={<AdminProfile/>}
              path="adminprofile"
            />
          </Route>
          <Route element={<Main/>} path="main">
            <Route element={<Signup/>} path="signup" />
            <Route element={<SignIn/>} path="signin" />
            <Route element={<Home/>} path="home" />
            <Route element={<NotFound/>} path="404" />
            
            <Route element={<BrowseFlower/>} path="browseflower"/>
            <Route element={<BrowseFlorist />} path="browseflorist" />
            <Route element={<FloristList />} path="floristlist" />

            <Route
              element={<ResetPassword/>}
              path="resetpassword"
            />
          </Route>

          <Route
            element={
              <UserAuthenticator>
                <User />
              </UserAuthenticator>
            }
            path="user"
          >
            <Route element={<UserProfile></UserProfile>} path="userprofile" />
            <Route element={<Sidebar></Sidebar>} path="sidebar" />
          </Route>

          <Route element={<Navigate to="/main/home" />} path="" />
          <Route element={<Navigate to="/main/404" />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

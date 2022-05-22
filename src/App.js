import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import PrivateRoute from "./Authentication/PrivateRoute";
import { PrivateRoutes } from "./routes/PrivateRoutes";
import AdminRoute from "./Authentication/AdminRoute";
import Dashboard from "./Pages/Dashboard/Dashboard";
import AddAdmin from "./Pages/Dashboard/AddAdmin";
import AddService from "./Pages/Dashboard/AddService";



function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div  >
      <Navbar>
        <Routes>
          {
            publicRoute.map((route, index) => <Route key={index} path={route.path} element={<route.Component />}></Route>)
          }
          <Route element={<PrivateRoute />
          }>
            {PrivateRoutes.map(({ path, Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}
          </Route>
          <Route element={<AdminRoute />}>
            <Route path='/dashboard' element={<Dashboard />}>

              <Route path='add-admin' element={<AddAdmin></AddAdmin>}></Route>
              <Route path='add-service' element={<AddService></AddService>}></Route>

            </Route>
          </Route>

        </Routes>
      </Navbar>

    </div>
  );
}

export default App;

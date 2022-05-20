import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { publicRoute } from "./routes/PublicRoutes";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


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
        </Routes>
      </Navbar>

    </div>
  );
}

export default App;

// This is you home view, which is being render on main.jsx

import { Navbar } from "../components/Navbar.jsx";
import { EstaVisible } from "../components/visible.jsx";

const Home = () => {

  return (
    <>
    <Navbar/>
     <div className="container-fluid text-center vh-100 d-flex align-items-center">
      <EstaVisible/>
     </div>
    </>
  )
}

export default Home;

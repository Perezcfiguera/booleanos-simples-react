// This is you home view, which is being render on main.jsx

import { Navbar } from "../components/Navbar";

const Home = () => {

  return (
    <>
    <Navbar/>
     <div className="container-fluid text-center vh-100 d-flex align-items-center">
      <div className="row">
        <div className="col">
          <h1>React Template without layout!</h1>
        </div>
      </div>
      <div className="row align-items-center">
      </div>
     </div>
    </>
  )
}

export default Home;

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import AddUser from "./components/AddUser";


import UserList from "./components/UserList_temp";


const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <div className="p-4">
          {/* <h1 className="text-2xl font-bold text-center text-white">React + Node.js + MongoDB</h1> */}
          {/* <AddUser />
          <UserList /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

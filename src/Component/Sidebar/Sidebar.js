// import React, { useState } from 'react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { SidebarData } from './SidebarData';
// import SubMenu from './SubMenu';
// import { IconContext } from 'react-icons/lib';

// const Nav = styled.div`
//   background: #763B75;
//   height: 100px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   // width:10%;
  
// `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

// const SidebarNav = styled.nav`
//   background: #763B75;
//   width: 250px;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   position: fixed;
//   top: 0;
//   left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
//   transition: 350ms;
//   z-index: 10;
// `;

// const SidebarWrap = styled.div`
//   width: 100%;
// `;

// const Sidebar = () => {
//   const [sidebar, setSidebar] = useState(true);

//   const showSidebar = () => setSidebar(!sidebar);

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <Nav>
//           <NavIcon to='#'>
//             <FaIcons.FaBars onClick={showSidebar} />
//           </NavIcon>
//         </Nav>
//         <SidebarNav sidebar={sidebar}>
//           <SidebarWrap>
//             <NavIcon to='#'>
//               <AiIcons.AiOutlineClose onClick={showSidebar} />
//             </NavIcon>
//             {SidebarData.map((item, index) => {
//               return <SubMenu item={item} key={index} />;
//             })}
//           </SidebarWrap>
//         </SidebarNav>
//         <div>
//           <img src="logo" />
//           <div>
//             <AiIcons/>
//           </div>
//         </div>
//       </IconContext.Provider>
//     </>
//   );
// };

// export default Sidebar;

// import React, { useState } from 'react';
// import './side.css';
// import { Link } from 'react-router-dom';

// const Sidebar = () => {
//   const [show, setShow] = useState();

//   return (
//     <main className={show ? 'space-toggle' : null}>
//       <header className={`header ${show ? 'space-toggle' : null}`}>
//         <div className='header-toggle' onClick={() => setShow(!show)}>
//           <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
//         </div>
//       </header>

//       <aside className={`sidebar ${show ? 'show' : null}`}>
//         <nav className='nav'>
//           <div>
//             <Link to='/' className='nav-logo'>
//               <i className={`fas fa-home-alt nav-logo-icon`}></i>
//               <span className='nav-logo-name'>Homepage</span>
//             </Link>

//             <div className='nav-list'>
//               <Link to='/dashboard' className='nav-link active'>
//                 <i className='fas fa-tachometer-alt nav-link-icon'></i>
//                 <span className='nav-link-name'>Dashboard</span>
//               </Link>
//               <Link to='/hotel' className='nav-link'>
//                 <i className='fas fa-hotel nav-link-icon'></i>
//                 <span className='nav-link-name'>Hotel</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-image nav-link-icon'></i>
//                 <span className='nav-link-name'>Gallery</span>
//               </Link>
//               <Link to='/gallery' className='nav-link'>
//                 <i className='fas fa-dollar-sign nav-link-icon'></i>
//                 <span className='nav-link-name'>Transaction</span>
//               </Link>
//             </div>
//           </div>

//           <Link to='/logout' className='nav-link'>
//             <i className='fas fa-sign-out nav-link-icon'></i>
//             <span className='nav-link-name'>Logout</span>
//           </Link>
//         </nav>
//       </aside>

//       {/* <h1>Content</h1> */}
//     </main>
//   );
// };

// export default Sidebar;


import { NavLink } from "react-router-dom";
import { FaUserAlt, FaHome, FaLock, FaMoneyBill, FaUser,FaBars } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog,BiRupee } from "react-icons/bi";
import { AiFillDashboard,AiFillCheckSquare,AiFillSound } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { TbReportSearch} from "react-icons/tb";
import { ImBook } from "react-icons/im";
import {MdSupportAgent } from "react-icons/md";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './side.css'
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <AiFillDashboard/>,
  },
  {
    path: "/Creatagent",
    name: "Createagent",
    icon: <FaUserAlt/>,
  },
  {
    path: "/Rcscheck",
    name: "RcsCheck",
    icon: <AiFillCheckSquare/>,
  },
 
  {
    path: "/",
    name: "Campaign",
    icon: <AiFillSound />,
    subRoutes: [
      {
        path: "/Richcard",
        name: "Richcard",
        icon: <FaUser />,
      },
      {
        path: "/Corousel",
        name: "Corousel",
        icon: <FaLock />,
      },
      {
        path: "/text",
        name: "text",
        icon: <FaMoneyBill />,
      },
    ],
  },

  {
    path: "/CampaignA",
    name: "Approval",
    icon: <AiFillSound />,
    subRoutes: [
      {
        path: "/CampaignA",
        name: "Campaign",
        icon: <FaUser />,
      },
      {
        path: "/Agent",
        name: "Agent",
        icon: <FaLock />,
      },
      {
        path: "/User",
        name: "User",
        icon: <FaMoneyBill />,
      },
    ],
  },
  {
    path: "/Reports",
    name: "Reports",
    icon: <TbReportSearch/>,
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <BiRupee />,
  },
  {
    path: "/Faq",
    name: "FAQ",
    icon: <ImBook />,
    
    
  },
  {
    path: "/Support",
    name: "Support",
    icon: <MdSupportAgent/>,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  // const inputAnimation = {
  //   hidden: {
  //     width: 0,
  //     padding: 0,
  //     // transition: {
  //     //   duration: 0.0,
  //     // },
  //   },
  //   show: {
  //     width: "140px",
  //     padding: "5px 15px",
     
  //   },
  // };

  // const showAnimation = {
  //   hidden: {
  //     width: 0,
  //     opacity: 0,
  //     // transition: {
  //     //   duration: 0.0,
  //     // },
  //   },
  //   show: {
  //     opacity: 1,
  //     // width: "auto",
    
  //   },
  // };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",
          

          }}
          className={`sidebar1 `}
          // className={`maind`}
        >
          <div className="top_section">
          <div className="bars">
              <FaBars onClick={toggle} />
            </div>
            {/* <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="show"
                  // animate="show"
                  exit="hidden"
                  className="logo"
                >
                  RBM STUDIO
                </motion.h1>
              )}
            </AnimatePresence> */}

            
          </div>
          {/* <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div> */}
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    // showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        // variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        {/* <main>{children}</main> */}
      </div>
    </>
  );
};

export default Sidebar;
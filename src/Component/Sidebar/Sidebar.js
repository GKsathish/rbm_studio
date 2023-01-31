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
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";
import './side.css'
const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/Creatagent",
    name: "Createagent",
    icon: <FaUser />,
  },
  {
    path: "/Rcscheck",
    name: "RcsCheck",
    icon: <MdMessage />,
  },
 
  {
    path: "",
    name: "Campaign",
    icon: <AiTwotoneFileExclamation />,
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
    path: "/Reports",
    name: "Reports",
    icon: <BsCartCheck />,
  },
  {
    path: "/billing",
    name: "Billing",
    icon: <FaMoneyBill />,
  },
  {
    path: "/Faq",
    name: "FAQ",
    icon: <BiCog />,
    
    
  },
  {
    path: "/Support",
    name: "Support",
    icon: <AiFillHeart />,
  },
];

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 1.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 1.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 1.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 1.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar1 `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h1
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  RBM STUDIO
                </motion.h1>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
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
                    showAnimation={showAnimation}
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
                        variants={showAnimation}
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
import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdDashboard, MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import imgLogo from "../../assets/brand/logo_mon_auto_ecole.png";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <MdDashboard />,
  },
  {
    path: "/condidats",
    name: "Condidats",
    icon: <FaUser />,
  },
  {
    path: "/abonemments",
    name: "Abonemments",
    icon: <MdMessage />,
  },
  {
    path: "/caisse",
    name: "La Caisse",
    icon: <BiAnalyse />,
  },
  {
    path: "/profile-page",
    name: "Profile Pager",
    icon: <AiTwotoneFileExclamation />,
  },
  {
    path: "/formations",
    name: "Formations",
    icon: <BsCartCheck />,
  },
  {
    path: "/articles",
    name: "Articles",
    icon: <BiCog />,
    exact: true,
  },
  {
    path: "/support",
    name: "Support",
    icon: <AiFillHeart />,
  },
  {
    path: "/roles&permissions",
    name: "Roles Permissions",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [isWidthSet, setIsWidthSet] = useState(true);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsWidthSet(!isWidthSet); // Set isWidthSet to false when the button is clicked
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <aside className="parent_sideBar">
          <motion.div
            animate={{
              width: isOpen ? "200px" : "45px",

              transition: {
                duration: 0.3,
                type: "spring",
                damping: 20,
              },
            }}
            className={`sidebar `}
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
                    {/* AUTO ECOLE */}
                    <img
                      loading="lazy"
                      src={imgLogo}
                      alt="logo mon auto ecxolme "
                    />
                  </motion.h1>
                )}
              </AnimatePresence>
              {/* icon open sidebare */}
              <div className="bars">
                <FaBars onClick={toggle} />
              </div>
            </div>

            <section className="routes">
              {routes.map((route, index) => {
                return (
                  <NavLink
                    to={route.path}
                    key={index}
                    className="link"
                    activeclassname="active"
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
            <section
              style={
                isWidthSet ? { padding: "15px 5px" } : { padding: "15px 15px" }
              }
              className=" footer-sideBar"
            >
              <img
                className="relative inline-block h-8 w-8 rounded-full object-cover object-center"
                alt="Image placeholder"
                src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
              />
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link_text"
                  >
                    <b>Admin</b>
                  </motion.div>
                )}
              </AnimatePresence>
            </section>
          </motion.div>
        </aside>

        {/* content page  */}
        <main
          style={
            isWidthSet ? { paddingLeft: "45px" } : { paddingLeft: "200px" }
          }
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default SideBar;

import Link from "next/link";
import NavLink from "./NavLink";

const navLink = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];
const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center px-24 bg-sky-400 py-3">
      <h1 className="text-3xl font-bold">Next Hero</h1>
      <ul className="flex gap-3">
        {navLink.map(({ path, title }) => (
          <li  className="font-bold hover:text-white delay-200 " key={path}>
            <NavLink  exact ={ path === '/'} activeClassName='text-white' href={path}>{title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

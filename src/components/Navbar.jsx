import Link from "next/link";

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
    <nav className="flex justify-between px-24 bg-sky-400 py-3">
      <h1 className="text-3xl font-bold">Next Hero</h1>
      <ul className="flex gap-3">
        {navLink.map(({ path, title }) => (
          <li  key={path}>
            <Link className="font-bold hover:text-white delay-200 " href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
const navLink = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/user/add-product",
    title: "add Product",
  },
  {
    path: "/dashboard/user/manages-product",
    title: "Manages Product",
  },
  {
    path: "/",
    title: "Home",
  },
];
const SideBar = () => {
  return (
    <aside className="mr-10 ">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <ul className="">
        {navLink.map(({ path, title }) => (
          <li className="font-bold hover:text-white delay-200 my-3" key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;

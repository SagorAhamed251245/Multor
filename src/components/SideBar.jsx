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
    <aside className="flex justify-between  items-center px-24 bg-sky-400 py-3">
      <h1 className="text-3xl font-bold">Next Hero</h1>
      <ul className="flex gap-3">
        {navLink.map(({ path, title }) => (
          <li className="font-bold hover:text-white delay-200 " key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;

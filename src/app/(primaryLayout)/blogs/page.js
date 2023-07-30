import Link from "next/link";

/* const blogs = [
  {
    id: 1,
    year: 2016,
    title: "Blogs 1",
  },
  {
    id: 2,
    year: 2013,
    title: "Blogs 2",
  },
  {
    id: 3,
    year: 2015,
    title: "Blogs 3",
  },
]; */

const BlogsPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache"
  });
  const data = await res.json();
  return (
    <div className="flex flex-col gap-5 my-10 w-[80%] mx-auto">
      {data.map(({ id, body, title }) => (
        <div key={id} className="border-sky-400 border">
          <p>
            {id}. {body}
          </p>
          <Link href={`blogs/${id}`}>
            <button className="py-1 px-3 bg-sky-500 ">Details</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;

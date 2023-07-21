import Link from "next/link";

const blogs = [
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
];

const BlogsPage = () => {
  return (
    <div>
      {blogs.map(({ id, year, title }) => (
        <Link className=" px-2 bg-red-400 mr-5" href={{
            pathname:`blogs/${id}/${year}`,
            query: {
                title: title,
                year: year
            }
        }} key={id} >{title}</Link>
      ))}
    </div>
  );
};

export default BlogsPage;

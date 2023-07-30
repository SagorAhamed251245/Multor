import loadSingleBlog from "@/utils/loadSingleBlog";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlog(params.id);
  return {
    title: title,
  };
};
const SingleBlogs = async ({ params }) => {
  const { title, id, body } = await loadSingleBlog(params.id);
  return (
    <div>
      <div className="border-sky-400 border w-10/12 mx-auto mt-28">
        <p>
          {" "}
          {id}.{title}
        </p>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default SingleBlogs;

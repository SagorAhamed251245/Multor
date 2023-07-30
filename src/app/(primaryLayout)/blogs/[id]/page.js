import loadSingleBlog from "@/utils/loadSingleBlog";

const SingleBlogs = async ({ params }) => {
  const { id, body, title } = await loadSingleBlog(params.id);
  return (
    <div>
      <div className="border-sky-400 border w-10/12 mx-auto mt-28">
        <p> {id}.{title}</p>
        <p>
          {body}
        </p>
      </div>
    </div>
  );
};

export default SingleBlogs;

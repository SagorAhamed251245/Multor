import Navbar from "@/components/Navbar";

const PrimaryLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <footer> this is footer</footer>
    </div>
  );
};

export default PrimaryLayout;

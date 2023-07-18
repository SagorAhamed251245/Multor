import SideBar from "@/components/SideBar";

const DashboardLayout = ({children}) => {
    return (
        <div className="flex container  mx-auto">
            <SideBar></SideBar>
            {children}
        </div>
    );
};

export default DashboardLayout;
import SideBar from "@/components/SideBar";

const DashboardLayout = ({children}) => {
    return (
        <div>
            <SideBar></SideBar>
            {children}
        </div>
    );
};

export default DashboardLayout;
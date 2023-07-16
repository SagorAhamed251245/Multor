
const PrimaryLayout = ({children}) => {
    return (
        <div>
            <nav> this is nav</nav>
            {children}
            <footer> this is footer</footer>
        </div>
    );
};

export default PrimaryLayout;
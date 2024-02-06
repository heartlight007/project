import '../../src/App.css'
const Nav = () => {
    return (
        <>
            <nav>
                <div className="nav-logo">
                    <img src="Images/brand_logo.png" alt="Brand Logo" />
                </div>
                <ul className="nav-menu">
                    <li href="#">Home</li>
                    <li href="#">Gallery</li>
                    <li href="#">Category</li>
                    <li href="#">Contact Us</li>
                </ul>
                <button>
                    Login
                </button>
            </nav>
        </>
    );
};

export default Nav;

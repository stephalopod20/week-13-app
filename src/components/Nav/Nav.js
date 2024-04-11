//Create a Navigation component that contains links styled like a navbar.
//(The links don't have to go anywhere.)

function Navbar() {
    return (
        <nav className="navBarn">
            <h4>NavBarn 🏘</h4>
            <ul>
                <li><button>Horse</button></li>
                <li><button>Dog</button></li>
                <li><button>Chicken</button></li>
                <li><button>Cow</button></li>
                <li><button>Pig</button></li>
            </ul>
        </nav>
    )
}

export default Navbar;
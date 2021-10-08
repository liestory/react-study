import React from 'react';

const Navbar = () => {
    return(
        <nav>
            <div>
                <a href="/profile">Profile</a>
            </div>
            <div>
                <a href="/dialogs">Message</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;
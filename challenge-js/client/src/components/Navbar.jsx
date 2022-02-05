import React from 'react';

function Navbar() {
    return (
        <nav class="navbar navbar-light" id="top-form">
            <div class="container-fluid top-bar">
                <form method="POST" class="d-flex" action=".">
                    <input class="form-control me-2" type="text" placeholder="First name" aria-label="First name" name="firstName" required/>
                    <input class="form-control me-2" type="text" placeholder="Last name" aria-label="Last name" name="lastName" required/>
                    <input class="form-control me-2" type="text" placeholder="Participation" aria-label="Participation" name="participation" required/>
                    <button class="btn btn-outline-light" type="submit" value="submit">Send</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
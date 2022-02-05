import React from 'react';

function handleClick(event) {
    const [fname, lname, participation] = [event.target[0].value, event.target[1].value, event.target[2].value];
    // pra não restartar a página
    event.preventDefault();  
}

function Navbar() {
    return (
        <nav className="navbar navbar-light" id="top-form">
            <div className="container-fluid top-bar">
                <form method="POST" className="d-flex" onSubmit={handleClick}>
                    <input className="form-control me-2" type="text" placeholder="First name" aria-label="First name" name="firstName" required/>
                    <input className="form-control me-2" type="text" placeholder="Last name" aria-label="Last name" name="lastName" required/>
                    <input className="form-control me-2" type="text" placeholder="Participation" aria-label="Participation" name="participation" required/>
                    <button className="btn btn-outline-light" type="submit" value="submit">Send</button>
                </form>
            </div>
        </nav>
    );
}

export default Navbar;
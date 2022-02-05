import React from 'react';

function Navbar() {
    function handleClick(event) {
        const data = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            participation: event.target[2].value
        };
        alert(JSON.stringify(data));

        // Para não restartar a página
        //event.preventDefault();
    }
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
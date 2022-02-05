import React from 'react';
import TableBody from './TableBody';

function Table() {
    return (
        <div className="col">
            <table className="table table-bordered" id="tabela">
                <thead>
                    <tr>
                    <th scope="col"></th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col" className="alignCenterText">Participation</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    <TableBody
                        number="1"
                        fname="Carlos"
                        lname="Moura"
                        participation="5%" 
                    />
                    <TableBody
                        number="2"
                        fname="Fernanda"
                        lname="Oliveira"
                        participation="15%" 
                    />
                    <TableBody
                        number="3"
                        fname="Hugo"
                        lname="Silva"
                        participation="20%" 
                    />
                    <TableBody
                        number="4"
                        fname="Eliza"
                        lname="Souza"
                        participation="20%" 
                    />
                    <TableBody
                        number="5"
                        fname="Anderson"
                        lname="Santos"
                        participation="40%" 
                    />
                </tbody>
            </table>
        </div>
    );
}

export default Table;
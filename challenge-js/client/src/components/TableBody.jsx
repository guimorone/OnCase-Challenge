import React from 'react';

function TableBody(props) {
    return (
        <tr>
            <th scope="row" className="alignCenterText">{props.number}</th>
            <td>{props.fname}</td>
            <td>{props.lname}</td>
            <td className="alignCenterText">{props.participation}</td>    
        </tr>
    );
}

export default TableBody;
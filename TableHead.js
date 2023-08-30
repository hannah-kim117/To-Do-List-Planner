import React from 'react';
import { Link } from 'react-router-dom';
import { CgAdd } from "react-icons/cg";


function TableHead() {
    return (
        <thead>
            <th> Delete</th>
            <th> Edit</th>
            <th> Name</th>
            <th> Count</th>
            <th> Date</th>
            <th><Link to="/create"><i><CgAdd></CgAdd></i></Link></th>
        </thead>
    );
}

export default TableHead;
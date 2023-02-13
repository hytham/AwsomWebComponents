import React from 'react'
import TableWithPaginationAndSorting from './TableWithPaginationAndSorting';

function Body() {
    const data =[
        {"first_name":"hytham","last_name":"alobydi"}
    ]
    const columns:string[] = ["first name", "last name"]
    return ( 
        <div>
            <TableWithPaginationAndSorting data={data} columns={columns}/>
        </div>
     );
}

export default Body;
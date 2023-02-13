import React from 'react'

import "../style/Content.css"
import Sidebar from './Sidebar';
function Content() {
    return ( 
        <div className="contentbody">
            <Sidebar/>
            <Body/>
        </div>
     );
}

export default Content;
import React from 'react'

import './SidebarOption.css' 
function SidebarOption( {title , number , Icon , selected}) {
    return (
        <div className = {`sidebarOption ${selected && 'sidebarOption--active '} `}>
                <Icon></Icon>
                <h3>{title}</h3>
                <p>{number}</p>
        </div>
    )
}

export default SidebarOption
 
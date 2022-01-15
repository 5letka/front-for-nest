import React from 'react' 
import { NavLink } from 'react-router-dom'

const HomePage = () => {

     return (
         <div>
             <div>Home Page</div>
            <NavLink  to='/owner' >Owner Page</NavLink>
         </div>
     )
}

export default HomePage
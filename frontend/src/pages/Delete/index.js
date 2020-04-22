import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'
export default function Delete(){
    
    
    
    return (
       <div className="delete-container">
				 <div className="header">
					 <h2>Academic System</h2>
					 <h4>by: Mario Mendonça, using React and nodejs</h4>
				 </div>
				 <section>
                <h1>Delete</h1>
                <p>Delete a students</p>
                <Link className='back-link' to='/'>
                    <FiArrowLeft size={16} color='#B22222'/>
                        back to menu
                </Link>
            </section>
       </div>
    )
}
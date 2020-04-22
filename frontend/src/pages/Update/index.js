import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft} from 'react-icons/fi'

export default function Update(){
    return (
        <div className="update-container">
            <div className="header">
                <h2>Academic System</h2>
                <h4>by: Mario Mendonça, using React and nodejs</h4>
            </div>
            <section>
            <h1>Update</h1>
                    <p>Update some infomation</p>
                    <Link className='back-link' to='/'>
                        <FiArrowLeft size={16} color='#B22222'/>
                            back to menu
                    </Link>
            </section>
        </div>
    )
}
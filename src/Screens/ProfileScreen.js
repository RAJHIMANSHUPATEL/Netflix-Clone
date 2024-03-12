import React from 'react'
import './ProfileScreen.css'
import Nav from '../Nav'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import { useSelector } from 'react-redux'

function ProfileScreen() {
    const user = useSelector(selectUser);
    return (
        <div className='profileScreen'>
            <Nav />
            <div className="profileScreen__body">
                <h1>Edit Profile</h1>
                <div className="profileScreen__info">
                    <img src="https://i.pinimg.com/236x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg?nii=t" alt="" />
                    <div className="profileScreen__details">
                        <h2>{user.email}</h2>
                        <div className="profileScreen__plans">
                        <h3>Plans</h3>

                            <button
                                onClick={()=>auth.signOut()}
                                className="profileScreen__signOut">
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
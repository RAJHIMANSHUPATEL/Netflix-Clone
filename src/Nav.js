import React from 'react'
import {useNavigate} from 'react-router-dom'
import './Nav.css'

function Nav() {
    //For scroll animation
    const [show, handleShow] = React.useState(false);
    const navigate = useNavigate()

    function transitionNavBar() {
        if (window.scrollY > 100) {
            handleShow(true)
        }
        else {
            handleShow(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar)
    }, [])

    return (
        <div className ={`nav ${show && 'nav__black'}`}>
            <div className="nav__contents">
                <img
                    onClick={()=> navigate("/")}
                    className='nav__logo'
                    src="https://farm6.staticflickr.com/5821/20639706793_8c038faa4a_o.png"
                    alt=""
                />

                <img
                    onClick={()=> navigate("/profile")}
                    className='nav__avatar'
                    src="https://i.pinimg.com/236x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg?nii=t"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav
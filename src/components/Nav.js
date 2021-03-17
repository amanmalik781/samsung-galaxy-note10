import React, { useEffect } from 'react'
import styled from 'styled-components';
import './nav.css';

const Nav = () => {
    const [scrolled, setScrolled] = React.useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 90) {
            setScrolled(true);
        }
        else {
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })
    let navbarClasses = ['navbar'];
    if (scrolled) {
        navbarClasses.push('scrolled');
    }
    return (
        <NavContainer className={navbarClasses.join(" ")}>
            <div className="div1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Galaxy_Note10_wordmark.svg/1200px-Galaxy_Note10_wordmark.svg.png" alt="note10logos" />
                <button>BUY NOW</button>
            </div>



            <div className="div2">
                <h4>HIGHLIGHTS</h4>
                <h4>DESIGN</h4>
                <h4>PERFORMANCE</h4>
                <h4>CAMERA</h4>
                <h4>S-PEN</h4>
                <h4>ACCESSORIES</h4>
                <h4>OFFER</h4>
            </div>


        </NavContainer >
    )
}

export default Nav;




const NavContainer = styled.div`

display:flex;
flex-direction:column;
align-items:center;
width:100vw;
.div1{
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    width:100vw;
    img{
    width:180px;
    margin-left:20px;
}
button{
    cursor: pointer;
padding:15px 30px;
color:white;
background-color:#1478C7;
border:none;
outline:none;


}
}

.div2{
    border-top:1px solid gray;
    border-bottom:1px solid gray;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:100vw;
    
    
    h4{
        cursor: pointer;
        padding:8px 12px;
        :hover{
            border-bottom:3px solid #1478C7;
        }
    }
}
`;

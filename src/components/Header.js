import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
    return (
        <HeaderContainer>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/samsung-512.png" alt="samsung icon" />
            <div >
                <h4>Mobile</h4>
                <h4>TV & AV</h4>
                <h4>Home Appliances</h4>
                <h4>Computing</h4>
                <h4>Displays</h4>
                <h4>Offers</h4>
            </div>
            <div>
                <h4>Explore</h4>
                <h4>Support</h4>
                <h4>Business</h4>
            </div>
            <div>
                <SearchIcon fontSize='large' />
                <ShoppingCartIcon fontSize='large' />
                <MenuIcon fontSize='large' />
            </div>

        </HeaderContainer>
    )
}

export default Header
const HeaderContainer = styled.div`
height:90px;
padding-left:20px;
display:flex;
align-items:center;
justify-content:space-between;
div{
    cursor: pointer;
    margin-right:10px;
    display:flex;
    justify-content:space-between;
    min-width:120px;
    h4{
        cursor: pointer;
        margin-right:13px;
        transition:smooth 0.5s ease;
:hover{
    padding:4px;
    border-radius:20px;
    color:white;
background-color:black;
}
    }
}

img{
    cursor: pointer;
width:100px;

}
`;
import React from 'react'
import styled from 'styled-components';

const Header2 = () => {
    return (
        <Header2Container>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Galaxy_Note10_wordmark.svg/1200px-Galaxy_Note10_wordmark.svg.png" alt="note10logos" />
            <button>BUY NOW</button>
        </Header2Container>
    )
}

export default Header2;
const Header2Container = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
img{
    width:180px;
    margin-left:10px;
}
button{
    cursor: pointer;
padding:15px 30px;
color:white;
background-color:#1478C7;
border:none;
outline:none;
transition:smooth 0.3s ease;
:hover{
    color:#1478C7;
background-color:white;
}
}
`;

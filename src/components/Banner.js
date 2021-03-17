import React from 'react'
import styled from 'styled-components'

const Banner = () => {
    return (
        <BannerContainer>
            <center>
                <img className="img1" src="https://images.samsung.com/in/smartphones/galaxy-note10/images/galaxy-note10_highlights_mobile_kv.jpg" alt="bannerimg" />
                <h2>Galaxy Note10 | 10+‎</h2>
                <button>BUY NOW</button>
                <h2><strong>Introducing next-level power</strong></h2>
                <p>With Galaxy Note10 and Note10+ we've designed a mobile experience that’s like a computer, a gaming console, a movie-tech camera, and an intelligent pen, all in one device.</p>
                <h1><strong>More screen, less interruption</strong></h1>
                <button>LEARN MORE</button><br />
                <img className="img2" src="https://images.samsung.com/in/smartphones/galaxy-note10/images/galaxy-note10_highlight_design_end.jpg" alt="banner2" />
                <h1>Turn handwriting into text instantly</h1>
                <p>Jot down your notes even when on the move and tap to turn them into readable text you can share. <br />

*The actual text export function may require some processing to turn writing into text.</p>
                <img className="img3" src="https://images.samsung.com/in/smartphones/galaxy-note10/images/galaxy-note10_highlights_spen_handwriting_l.jpg" alt="banner3" />
                <h1>Take Galaxy Note10 & Note10+ even further</h1>
                <button>LEARN MORE</button><br />
                <img src="https://images.samsung.com/in/smartphones/galaxy-note10/images/galaxy-note10_highlights_acc_b_m.jpg" alt="banner4" />
            </center>

        </BannerContainer>

    )
}

export default Banner
const BannerContainer = styled.div`
padding:20px;
.img3{
    width:90vw;
}
.img2{
    width:1000px;
    margin:30px;
}
p{
    margin:20px;
}
.img1{
    padding :20px;
    height: 600px;
    position:center;
    background-size:100%;
    transition:1s;
    
    :hover{
        background-size:150%;

    }
}
button{
    cursor: pointer;
    background:white;
    padding: 15px 15px;
    border:3px solid black;
    border-radius:30px;
    margin-top:15px;
    margin-bottom:15px;
    outline:none;
}`;
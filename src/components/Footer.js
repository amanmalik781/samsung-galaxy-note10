import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterStatement>
                <p>
                    Copyright ⓒ 1995-2021 SAMSUNG All Rights reserved.

                    Please dispose of e-waste and plastic waste responsibly.

</p>
                <p>
                    For more information or e-waste pick up, please call 1800 40 SAMSUNG (7267864) or 1800 5 SAMSUNG (7267864) or click here for more details.
                    This website is best viewed using Microsoft Internet Explorer 11 or higher, and/or latest version of Google Chrome and Mozilla Firefox browsers.
</p>
                <p>
                    Registered Office Address: 6th Floor, DLF Centre, Sansad Marg, New Delhi-110001
                    Corporate Identification Number (CIN): U31900DL1995PTC071387
</p>
            </FooterStatement>
            <FooterLinks>
                <div>
                    <h6><strong>India/English</strong></h6>
                    <h6>|</h6>
                    <h6>Accessiblity Help</h6>
                    <h6>Privacy</h6>
                    <h6>Legal</h6>
                    <h6>CSR Policy</h6>
                    <h6>Sitemap</h6>
                </div>
                <Icons>
                    <h6>Stay in the loop? </h6>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                    <LinkedInIcon />
                    <WhatsAppIcon />
                </Icons>
            </FooterLinks>
        </FooterContainer>
    )
}

export default Footer;
const FooterContainer = styled.div``;
const FooterStatement = styled.div`
border-top:1px solid gray;
border-bottom:1px solid gray;
p{
    width:50vw;
    padding:10px 20px;
    font-family:arial,sans-serif;
    font-size:small;
}`;
const FooterLinks = styled.div`
padding:20px 20px;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-between;
div{
    width:28vw;
    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
}
`;
const Icons = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:15vw;
justify-content:space-between;
`;


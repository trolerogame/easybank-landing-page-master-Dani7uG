import React from 'react'
import Logo from './Logo'
import { InviteButton } from '../styles/stylesHeader'
import { FooterContain,ItemsFooter,ListNetworks } from '../styles/styleFooter'
import IconFacebook from '../../images/icon-facebook.svg'
import IconInstagram from '../../images/icon-instagram.svg'
import IconTwitter from '../../images/icon-twitter.svg'
import IconPinterest from '../../images/icon-pinterest.svg'
import IconYoutube from '../../images/icon-youtube.svg'
const Footer = React.memo(() => {
    const footerItems = ['About Us','Contact','Blog','Careers','Support','Privacy Policy']
    const icons = [IconFacebook,IconYoutube,IconTwitter,IconPinterest,IconInstagram]
    return (
        <FooterContain>
            {/* <Logo/> */}
            <ListNetworks>
                {icons.map((icon,i) => 
                    <button key={i}><img src={icon}/></button>
                )}
            </ListNetworks>
            <ItemsFooter>
                {footerItems.map(item => 
                    <a href={`#${item}`} key={item}>{item}</a>
                )}
            </ItemsFooter>
            <InviteButton>Request Invite</InviteButton>
            <p>@easybank. All Rights Reserved</p>
        </FooterContain>
    )
})

export default Footer

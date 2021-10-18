import React from 'react'
import Logo from './Logo'
import { InviteButton } from '../styles/stylesHeader'
import { FooterContain,ItemsFooter,ListNetworks,Align } from '../styles/styleFooter'
import IconFacebook from './logos/Facebook'
import IconInstagram from './logos/Instagram'
import IconTwitter from './logos/Twitter'
import IconPinterest from './logos/Pinterest'
import IconYoutube from './logos/Youtebe'
const Footer = React.memo(() => {
    const footerItems = ['About Us','Contact','Blog','Careers','Support','Privacy Policy']
    const icons = [IconFacebook,IconYoutube,IconTwitter,IconPinterest,IconInstagram]
    return (
        <FooterContain>
            <Align space>
                <Logo color="white"/>
                <ListNetworks>
                    {icons.map((Icon,i) => 
                        <button key={i}><Icon/></button>
                    )}
                </ListNetworks>
            </Align>
            <ItemsFooter>
                <Align item>
                    {footerItems.slice(0,3).map(item => 
                        <a href={`#${item}`} key={item}>{item}</a>
                    )}
                </Align>
                <Align item>
                    {footerItems.slice(3,footerItems.length).map(item => 
                        <a href={`#${item}`} key={item}>{item}</a>
                    )}
                </Align>
            </ItemsFooter>
            <Align>
                <InviteButton>Request Invite</InviteButton>
                <p>@easybank. All Rights Reserved</p>
            </Align>
        </FooterContain>
    )
})

export default Footer

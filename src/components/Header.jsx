import React from 'react'
import { HeaderContain,Hamburger,HeaderItems,InviteButton } from '../styles/stylesHeader'
import HamburgerImg from '../../images/icon-hamburger.svg'
import Close from '../../images/icon-close.svg'
import logo from '../../images/logo.svg'
const Header = ({close,setClose}) => {
    const headerLinks = ['Home', 'About', 'Contact','Blog','Careers']
    return (
        <HeaderContain>
            <img src={logo} alt="" />
            <HeaderItems close={close}>
                {headerLinks.map(item => 
                    <p key={item}>{item}</p>
                )}
            </HeaderItems>
            <Hamburger
                onClick={() => setClose(!close)}
            >
                <img src={close ? Close : HamburgerImg} alt="" />
            </Hamburger>
            <InviteButton>
                Request Invite
            </InviteButton>
        </HeaderContain>
    )
}

export default Header

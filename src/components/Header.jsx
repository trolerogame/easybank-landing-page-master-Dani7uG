import React from 'react'
import { HeaderContain,Hamburger,HeaderItems,InviteButton } from '../styles/stylesHeader'
import HamburgerImg from '../../public/icon-hamburger.svg'
import Close from '../../public/icon-close.svg'
import Logo from './Logo'
const Header = ({close,setClose}) => {
    const headerLinks = ['Home', 'About', 'Contact','Blog','Careers']
    return (
        <HeaderContain>
            <Logo color='#2D314D'/>
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

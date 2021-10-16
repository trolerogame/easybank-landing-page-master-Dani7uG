import styled from 'styled-components';


export const HeaderContain = styled.header`
    display:flex;
    justify-content:space-between;
    align-items: center;
    position:relative;
    background-color:#fff;
    padding:0 20px;
    height:70px;
`

export const Hamburger = styled.button`
    border:none;
    outline:none;
    background:none;
    padding:5px;
    cursor:pointer;
    img{
        width:18px;
        height: 18px;
    }
    @media (min-width:768px){
        display: none;
    }
`
export const InviteButton = styled.button`
    font-weight: 700;
    text-align: center;
    border:none;
    outline: none;
    background: linear-gradient(90deg, hsl(136, 65%, 51%) 0%, hsl(192, 70%, 51%) 80%);
    border-radius: 30px;
    width: 170px;
    height: 40px;
    color:#fff;
    cursor:pointer;
    display:none;
    @media (min-width:768px){
        display: block;
    }
`
export const HeaderItems = styled.div`
    display:${props => props.close ? 'block' : 'none'};
    opacity:${props => props.close ? 1 : 0};
    position:absolute;
    bottom:-290px;
    width: calc(100% - 40px);
    background:#fff;
    padding:5px 0;
    display:flex;
    flex-direction:column;
    align-items:center;
    border-radius: 5px;
    transition: all .15s linear;
    @media (min-width: 768px) {
        opacity: 1;
        position: static;
        flex-direction: row;
        justify-content: center;
        p{
            margin:0 20px;
        }
    }
`

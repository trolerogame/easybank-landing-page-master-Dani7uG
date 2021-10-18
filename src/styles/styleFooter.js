import styled from 'styled-components'


export const FooterContain = styled.footer`
    background:hsl(233, 26%, 24%);
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:30px 0;

    p{
        color:hsl(233, 8%, 62%)
    }
    @media (min-width:768px){
        flex-direction: row;
        justify-content:space-around;
        align-items:center;
    }
`

export const ItemsFooter = styled.div`
    display: flex;
    flex-direction:column;
    align-items:center;
    a{
        color:#fff;
        margin:7px 0;
        text-decoration:none;
        cursor:pointer;
        transition: all 0.1s linear;
    }
    a:hover{
        color:hsl(136, 65%, 51%);
    }
    @media (min-width:768px){
        flex-direction: row;
    }
`
export const ListNetworks = styled.div`
    margin:20px 0;
    button{
        margin:0 3px;
        border:none;
        outline:none;
        background:none;
        cursor:pointer;
        transition:all 0.1 linear;
    }
    button:hover >svg path{
        fill:hsl(136, 65%, 51%);
    }
`

export const Align = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    @media (min-width: 768px) {
        align-items:${props => props.item ? 'start': 'center'};
        margin:${props => props.item ? '0 60px' : '15px'};
    }
`
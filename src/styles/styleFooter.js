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
    }
    button:hover{
        color:hsl(136, 65%, 51%)
    }
`
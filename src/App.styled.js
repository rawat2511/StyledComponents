import styled from 'styled-components';

export const Logo = styled.img`
    position : absolute;
    height : 50px;
    width : 50px;
    left : 12px;
    top : 12px;
    border : 1px solid white;
    border-radius : 8px;
    @media all and ( max-width : 500px ) {
        display : none;
    }
`;
Logo.displayName="Logo";

export const MainWrapper = styled.div`
    position : relative;
    border : 1px solid black;
    margin : 50px;
    height : 78px;
    background-color : black;
`;
MainWrapper.displayName = "MainWrapper";


export const Link = styled.a`
    position: absolute;
    right: ${({num}) => ((num-1)*60 + 20)+"px" };
    color : white;
    font-family: 'Roboto', sans-serif;;
    font-weight: bold;
    text-decoration: none;
    top: 40%;
    @media all and ( max-width : 500px ) {
        font-size: 14px;
    }
`;
Link.displayName = "Link";




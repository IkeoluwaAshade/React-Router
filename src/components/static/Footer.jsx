import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <LogoDiv>
                React Router
            </LogoDiv>

            <FooterNavDiv>
                <FooterNavigationDiv>
                    <h4>Need Help?</h4>
                    <ul>
                        <li>Chat with us</li>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                    </ul>
                </FooterNavigationDiv>

                <FooterNavigationDiv>
                    <h4>About Us</h4>
                    <ul>
                        <li>Router</li>
                        <li>mainRoute</li>
                        <li>Pretty Cool</li>
                    </ul>
                </FooterNavigationDiv>

                <FooterNavigationDiv>
                    <h4>Blog</h4>
                    <ul>
                        <li>Route</li>
                        <li>Press</li>
                        <li>Outlet</li>
                    </ul>
                </FooterNavigationDiv>
            </FooterNavDiv>
        </Wrapper>
    </Container>
  )
}

export default Footer

const Container= styled.div`
    background-color: #123456;
    width: 100%;
    height: 170px;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    bottom: 0;
`

const Wrapper = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoDiv = styled.div`
    font-family: jokerman;
    font-weight: 600;
    font-size: 22px;
    color: lightblue;
`

const FooterNavDiv = styled.div`
    color: aliceblue;
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;       
`

const FooterNavigationDiv = styled.div`
    display: flex;
    align-items:  center;
    justify-content: center;
    flex-direction: column;

    width: 150px;

    

    li {
        font-size: 15px;
    }
`
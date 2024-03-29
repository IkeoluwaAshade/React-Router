import React, {useState} from 'react'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {FaBookOpen} from 'react-icons/fa'
import {AiFillContacts} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {GiCancel} from 'react-icons/gi'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const toggleChange = () => {
    setToggle(!toggle)
  }

  return (
    <Container>
      <Wrapper>
        <LogoDiv>
          React Router
        </LogoDiv>

        <NavDiv>
          <Navigations>
            <FaBookOpen />    
            <span>About</span>
          </Navigations>

          <Navigations>
          <AiFillContacts />    
            <span>Contact Us</span>
          </Navigations>

          <Navigations>
            <FaBookOpen />    
            <span>FAQs</span>
          </Navigations>

          <Navigations>
            <AiFillHome />    
            <span>Help</span>
          </Navigations>
        </NavDiv>  

        <BurgerIconHold onClick={toggleChange}>
          {toggle ? (
            <GiCancel color='white'
            size='25px' />
          ) : (
            <GiHamburgerMenu color='#fff'
            size='25px' />
          )}
        </BurgerIconHold>        
      </Wrapper>
    </Container>
  )
}

export default Header

const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #123456;

  display: flex;
  justify-content: center;
  align-items: center;
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

const NavDiv = styled.div`
  width: 450px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Navigations = styled.div`
 width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  transition: all 350ms;

  &:hover {
    color: skyblue;
    cursor: pointer;
    transform: scale(1.1);
  }

  span {
    margin-left: 6px;
    font-weight: 600;
  }
`

const BurgerIconHold = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`



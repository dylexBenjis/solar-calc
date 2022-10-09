import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavCon>
        <AppName>
            Solar Energy Estimator
        </AppName>
    </NavCon>
  )
}

export default Nav

const NavCon = styled.div`
    display: flex ;
    height: calc(100vh*0.1) ;
    align-items:center ;
    justify-content:center ;
`
const AppName = styled.div`
    font-size : 35px;
    font-weight:bold ;
    color: orangered;
    text-shadow: 1px 1px 0 black, 0 0 10px orange;

    @media screen and (max-width: 500px){
      font-size: 25px ;
    }

`
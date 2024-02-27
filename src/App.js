import styled from 'styled-components';
import Home from '../src/Pages/home';
import Img1 from '../src/Images/technician-g0995accdf_1920.jpg';
import './App.css';
import './anim.css'
import Loadpage from './Pages/loadpage';
import { useState, useEffect } from 'react';
import useLoadpage from './Pages/loadpage';

function App() {

  const Loadpage = useLoadpage();
  var page = Loadpage.page;

  return (
    <div className="App">
      {page && <A page={page}>{Loadpage.render}</A>}
      <BackgroundImage>
        <Img src={Img1}></Img>
      </BackgroundImage>
      <Home />
    </div>
  );
}

export default App;

const BackgroundImage = styled.div`
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100vw;
height: 100vh;
z-index: -1;
`
const Img = styled.img`
height:100% ;
width:100% ;
object-fit: cover ;
` 
const A = styled.div`
  display:flex ;
  position:fixed ;
  z-index: 1;
  transition: opacity 1s ease-in-out ;
`
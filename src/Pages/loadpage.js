import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const useLoadpage = () => {
  const [page, setPage] = useState(true);
  const content = 'Solar Energy Estimator';
  const [animateContent, setAnimateContent] = useState('');
  useEffect(() => {
    setTimeout(() => {
      setAnimateContent(content.slice(0, animateContent.length + 1));
    }, 50);

    if (content.length === animateContent.length) {
      setTimeout(() => {
        setPage(false);
      }, 1000)
    };

  }, [animateContent]);
   
  return {
    page,
    render : (
      <LoadCon>
        <Content> {animateContent}</Content>
      </LoadCon>)
  }
}

export default useLoadpage

const LoadCon= styled.div`
    display: flex;
    height:100vh ;
    width: 100vw ;
    background-color: black ;
    align-items:center ;
    justify-content:center ;
`
const Content = styled.div`
    font-weight:bold ;
    color: orangered;
    text-shadow: 1px 1px 0 black, 0 0 10px orange;
    font-size:50px ;

    @media screen and (max-width:600px){
      font-size: 24px ;
    }
`
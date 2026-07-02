import React, { useEffect, useState } from 'react'
import logo from '../assets/Link.png'
import Container from './Container'
import Flex from './Flex'
import Btn from './Btn'
import LatestCstm from './LatestCstm'

function NavBar() {
  //   const handleScrollToAbouts = () => {
  //   const aboutSection = document.getElementById('About-us'); 
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: 'instant' });
  //   }
  // };

  const handleScrollTohome = () =>{
    const homescrill = document.getElementById('home')
    if (homescrill) {
      homescrill.scrollIntoView({behavior:'instant'})
      
    }
  }

const handleScrollToAbouts = ()=>{
  const aboutSection = document.getElementById('About-us')
  if (aboutSection) {
    aboutSection.scrollIntoView({behavior:'instant'})
    
  }
}

  const handleScrollToscdule = () =>{
    const seduale = document.getElementById('scdule')
    if (seduale){
        seduale.scrollIntoView({behavior:'instant'})
    }
  }

  // const handleOpenfooter = () =>{
  //   const footer = document.getElementById('contect')
  //   if (footer){
  //       footer.scrollIntoView( {behavior:'instant'} )
  //   }
  // }

   const handalepages = ()=>{
    const handalescroll = document.getElementById('pages')
    if (handalescroll) {
      handalescroll.scrollIntoView({behavior:'auto'})
      
    }
   }






  const handleOpenfooter = () =>{
    const footers = document.getElementById('contect')
    if(footers){
      footers.scrollIntoView({behavior:'instant'})
    }
  }

 
  // const[isScrolled,setIsScrolled]=useState(false)

  // useEffect(()=>{
  //   const handleScrollToscdule = ()=>{

  //    if (window.scrollY >50) {
  //     setIsScrolled(true);
  //    }
  //    else{
  //     setIsScrolled(false)
  //    }
  //   };

  //   window.addEventListener('scroll',handleScrollToscdule)
  //   return()=>window.removeEventListener('scroll',handleScrollToscdule)
  // },[]);
  
          
        const [isScrolled,setIsScrolled]=useState(false)  
          
          
           useEffect(()=>{

             const handleScrollToscdule  = ()=>{
              if (window.scrollY >75 ) {
                setIsScrolled(true);
              }else{
                setIsScrolled(false)
              }
             };
             window.addEventListener('scroll',handleScrollToscdule )
           return()=> window.removeEventListener('scroll',handleScrollToscdule )

           },[]);
          
          



  return (
    <>
      
    <nav className={` text-white backdrop-blur-md bg-[#ffffff16] px-20 fixed top-0 left-0 w-full z-50  py-6.25 on-all duration-2000 ${
        isScrolled
          ? "bg-primary" 
          : "bg-slate-900/40 text-gray-200"       
      }`}> 
        <Container>
            <Flex className='justify-between items-center!'>
            <div>
                <img src={logo} alt="" />
            </div>

            <ul   className='flex gap-10 font-medium  '>
                <li onClick={ handleScrollTohome} className='hover:text-black'>Home</li>

             

                    <li onClick={handleScrollToAbouts} className='hover:text-black'>About Us</li>
                        <li onClick={handleScrollToscdule} className='hover:text-black'>Schedule</li>
                            <li onClick={handalepages} className='hover:text-black'>Pages</li>
                                <li onClick={handleOpenfooter} className='hover:text-black'>Contact Us</li>
            </ul>
            <Btn  className='py-5 text-black hover:bg-orange-300 px-5 text-sm bg-[#FFFFFF] '>Join the Conference</Btn>
         </Flex>
        </Container>
    </nav>

    </>
  )
}

export default NavBar

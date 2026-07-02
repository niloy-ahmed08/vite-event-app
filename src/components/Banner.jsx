import Container from './Container'
import React, { useState } from 'react'
import Flex from './Flex'
import Btn from './Btn'
import play from '../assets/play.png'
import CountDown from './CountDown'
import borderimg from '../assets/border.png'
import borderimgs from '../assets/borders.png'
import borderimgt from '../assets/bordert.png'
import alibanat from '../assets/alibanat.mp4'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Pulsea from './Pulsea'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import ScrambledText from './ScrambledText/ScrambledText';





function Banner() {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => { 
    setOpen(true); 
    setLoading(true); 
  
  setTimeout(() => {
      setLoading(false);
    }, 1000); 
  };
  const handleClose = () => { 
    setOpen(false); 
    setLoading(false); 
  };



  return (
    <>
    <div id='home' className='bg-[url(./assets/banner.jpg)] bg-cover bg-no-repeat bg-center pt-37.5 '>
      <Container>
       <div className=' text-white text-center mt-20'>

          <div className='w-[242px] py-3  h-[42px]bg-[rgba(255, 255, 255, 0.1)] backdrop-blur-md mx-auto px-[9px] rounded-[100px]'>
            <Flex className='items-center gap-px'>
            
            <div>
              <img src={} alt="" />
            </div>
            
            <div>
              <img src={} alt="" />
            </div>

            <div>
              <img src={} alt="" />
            </div>
            <div className=''>
            <h1 className='text-sm align-middle font-semibold'>Ideas that spark </h1>
            </div>
            </Flex>
          </div>


        <h1 className='text-[83.58px] leading-20 w-245.75   mx-auto text-white font-extrabold mt-[27px]'>  
<ScrambledText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars=".:"
>
  Connecting Minds to Shape
Tomorrow's Big Ideas
</ScrambledText></h1>
        <p className='mt-4 mb-13 text-[15px] w-183.25 mx-auto'>Experience a powerful gathering of visionaries, creators, and industry experts united by one goal—
exchanging ideas that spark growth, innovation, and meaningful change.</p>
      
       <Flex className='gap-4 items-center justify-center pb-15'>
        <Btn>Explore Schedule</Btn>
        <div className=' relative'>
        <img src={play} alt="" onClick={handleOpen} className='  '/>
        <Pulsea
        
        className='top-7 left-10 -translate-x-1/2 -translate-y-1/2  absolute w-16 h-16'
        />
        </div>
       </Flex>
       <Modal open={open} onClose={handleClose}>
  <Box sx={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800, 
    height: 480, 
    bgcolor: '#000',
    boxShadow: 24,
    borderRadius: 2,
    overflow: 'hidden'
  }}>
    
    {/*  */}
    {loading && (
      <Box sx={{
        position: 'absolute',
        inset: 0,
        backgroundColor: '#18181b', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 3,
        zIndex: 10 
      }}>
        <Stack spacing={2}>
          <Skeleton variant="rectangular" width="100%" height="70%" sx={{ bgcolor: 'grey.800' }} />
          <Skeleton variant="rounded" width="40%" height={30} sx={{ bgcolor: 'grey.800' }} />
        </Stack>
      </Box>
    )}

    {/* {video element} */}
    <video 
      src={alibanat} 
      autoPlay 
      controls 
      style={{ width: '100%', height: '100%', objectFit: 'contain' }}
      
    />
  </Box>
</Modal>
       <h1>Upcoming Speaker Reveal - Don't Miss Out</h1>
 </div>
             
             <Flex>
              <CountDown/>
             </Flex>
      </Container>


       </div>
    </>
  )
}

export default Banner

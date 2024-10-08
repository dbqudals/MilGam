import { useScroll, useTransform} from "framer-motion";
import { useRef } from "react";

/**
 * 1. FileName : Page1.js
 * 3. Package  : components.Home.Page1
 * 4. Comment  : home 페이지 속 영상 
 * 5. 작성자   : bonjae
 * 6. 작성일   : 2024. 07. 08
 **/

// conatiner
export const cPage1Style = (theme) => ({
  widht:'100%',
  hegiht:'100%',
  // background: theme.palette.comp,
  color : theme.palette.text.primary,
});

// span
export const cSpanStyle = (theme) => ({
  margin: '0',
  color: theme.palette.primary.main,
  left: '10%',
  fontSize: '56px',
  fontWeight: '700',
  letterSpacing: '-3px',
  lineHeight: '1.2',
  position: 'relative',
});

// text
export const cTextStyle = (theme) => ({
  paddingRight:'12px',
  display:'flex',
  flexDirection:'column',
  justifyContent:'center',
});

// picture
export const cPicStyle = (theme) => ({
  width: '250px',
  height: '250px',
  borderRadius: '10px',
});

function Page1(){

  function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
  }

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
      return (
          <>
            <div style={{ position: 'relative' }}>
              <video loop autoPlay muted style={{width:'100vw', zIndex:'3'}}>
                <source src="https://videos.pexels.com/video-files/26690702/11987721_2560_1440_60fps.mp4" type="video/mp4" />
              </video>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '99.5%',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: 4
              }} />
              <p style={{color:'white', position:'absolute', top:'30%', paddingLeft:'5%', fontSize:'40px', fontWeight:'800', zIndex:'5'}}>
                AI를 활용한 크라우드 매니지먼트<br/>
                단 하나의 솔루션, 밀감
              </p>
            </div>
          </>
        );
  }
  
  export default Page1;
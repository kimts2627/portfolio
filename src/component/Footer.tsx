import React, { useEffect, useRef } from 'react';

interface FooterProps {
  currentProject: string;
  isContactOn: boolean;
  handleContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ currentProject, isContactOn, handleContact }) => {

    // 하단 프로젝트 이름 변경
    const descRef: any = useRef();
    const descRef2: any = useRef();

    const generateTitle = () => {
      if(currentProject === 'komma') {
        descRef.current.textContent = 'Komma';
        descRef2.current.textContent = '콤마';
      }
      else if(currentProject === 'onemeal') {
        descRef.current.textContent = 'One Meal';
        descRef2.current.textContent = '고독한 한끼';
      }
    }

    useEffect(() => {
      generateTitle();
    });

    // ABOUT ME 페이지 이동 함수
    const transitionRef: any = useRef();
    const handlePage = () => {
      transitionRef.current.style.display = 'inline';
      setTimeout(() => {
        transitionRef.current.style.display = 'none';
      }, 600);
      // 이동
    }

  return(
    <footer className='Main-footer'>
      <p onClick={handleContact} className={isContactOn ? 'contact-open' : undefined}>CONTACT</p>
      <div className={isContactOn ? 'contact-circle-open' : 'contact-circle'}>
        <h4><a href="https://github.com/kimts2627" target='_blank'>Github</a></h4>
        <h4><a href="https://velog.io/@tsts_" target='_blank'>Velog</a></h4>
        <h4>E-Mail</h4>
        <h4><a href="https://www.notion.so/Kim-Taesu-20bc3848588c4eba8831cc69666fe0d1" target='_blank'>Resume</a></h4>
      </div>
      <p className='rightmenu' onClick={handlePage}>ABOUT ME</p>
      <div className='transition-circle' ref={transitionRef}></div>
      <h2 ref={descRef}>Komma</h2>
      <h3 ref={descRef2}>콤마</h3>
    </footer>
  );
}

export default Footer;

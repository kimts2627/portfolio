import React, { useEffect, useRef } from 'react';
import komma1 from '../img/komma1.png';
import komma2 from '../img/komma2.png';
import onemeal1 from '../img/onemeal1.png';
import onemeal2 from '../img/onemeal2.png';

interface ProjectsProps {
  degree: number;
  handleDegree: (newDegree: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ degree, handleDegree }) => {
  let newDeg: number = degree;
  let ProjectRef: any = useRef();
  useEffect(() => {
      window.addEventListener('mousewheel', (delta: any) => {
        if(delta.wheelDelta >= 3) {
          ProjectRef.current.style.transform = `rotate(${newDeg}deg)`;
          newDeg = newDeg + 0.6;
          console.log(newDeg);
        }
        else if(delta.wheelDelta <= -3) {
          ProjectRef.current.style.transform = `rotate(${newDeg}deg)`;
          newDeg = newDeg - 0.6;
          console.log(newDeg);
        }
        if(newDeg < 252) {
          newDeg = 252;
        }
        else if(newDeg > 270) {
          newDeg = 270;
        }
        handleDegree(newDeg);
      })
  }, []);

  return(
    <div className='projects' ref={ProjectRef}>
      <span>
        <div>
          <img src={komma2}/>
        </div>
      </span>
      <span>
        <div>
          <img src={onemeal1}/>
        </div>
      </span>
    </div>
  );
}

export default Projects;

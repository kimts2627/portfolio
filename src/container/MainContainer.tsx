import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../component/Main';
import { RootState } from '../modules';
import { handleDegree, changeCurrentProject, handleContact, handleMovePage } from '../modules/main';

const MainComponent: React.FC = () => {

  const degree = useSelector((state: RootState) => state.main.degree);
  const isContactOn = useSelector((state: RootState) => state.main.isContactOn);
  const currentProject = useSelector((state: RootState) => state.main.currentProject);
  const isMain = useSelector((state: RootState) => state.main.isMain);

  const dispatch = useDispatch();

  const handlingDegree = (newDegree: number) => {
    dispatch(handleDegree(newDegree));
  }

  const changingCurrentProject = () => {
    dispatch(changeCurrentProject());
  }

  const handlingContact = () => {
    dispatch(handleContact());
  }

  const handlingMovePage = () => {
    dispatch(handleMovePage());
  }

  return(
    <Main
      degree={degree}
      isContactOn={isContactOn}
      isMain={isMain}
      currentProject={currentProject}
      handleDegree={handlingDegree}
      changeCurrentProject={changingCurrentProject}
      handleContact={handlingContact}
      handleMovePage={handlingMovePage}
    />
  );
}

export default MainComponent;

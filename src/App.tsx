import bgImg from './assets/bg-image.png';
import './App.css'
import Sidepanel from './components/Sidepanel/Sidepanel';
import Mainpanel from './components/Mainpanel/Mainpanel';
import NewProjectModal from './components/NewProjectModal/NewProjectModal';
import { useState } from 'react';
import type { IProjectData } from './interfaces/project.interface';

function App() {
  const [showAddNewProjectModal, updateAddProjectState] = useState(false);

  function addNewProject(data: IProjectData) {
    console.log('n ',data);
    updateAddProjectState(false);
  }

  return (
    <div className='w-screen h-screen bg-image flex flex-row' style={{backgroundImage: `url(${bgImg})`}}>
      <Sidepanel addProject={() => updateAddProjectState(true)} />
      <Mainpanel addProject={() => updateAddProjectState(true)} />
      {
        showAddNewProjectModal &&
        <NewProjectModal addNewProject={addNewProject}/>
      }
    </div>
  )
}

export default App

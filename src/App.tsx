import bgImg from './assets/bg-image.png';
import './App.css'
import Sidepanel from './components/Sidepanel/Sidepanel';
import Mainpanel from './components/Mainpanel/Mainpanel';
import NewProjectModal from './components/NewProjectModal/NewProjectModal';
import { useEffect, useState } from 'react';
import type { IProjectData } from './interfaces/project.interface';
import { addNewProject, retrieveProjects, deleteProject } from './utils/utils';
import ConfirmationModal from './components/ConfirmationModal/ConfirmationModal';

function App() {
  const [showAddNewProjectModal, updateAddProjectState] = useState(false);
  const [projects, updateProjects] = useState<any>([]);
  const [selectedProject, updateSelectedProject] = useState<IProjectData | null>(null);
  const [showConfModal, updateConfModalState] = useState(false);

  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    const projects = await retrieveProjects();
    if (projects) {
      updateProjects(projects);
    }
  }

  async function addProject(data: IProjectData) {
    const status = await addNewProject(data);
    if (!!status) {
      console.log('project added');
      updateAddProjectState(false);
      getProjects();
    }
  }

  function cancelAddProject() {
      updateAddProjectState(false);
  }

  function onProjectSelection(pID: number) {
    console.log(pID);
    updateSelectedProject(projects!.find((p: IProjectData) => p.pID === pID));
  }

  async function deleteProjectByID(pID: number) {
    console.log('delete ',pID);
    updateConfModalState(true);
    const res = await deleteProject(pID);
    if (res!) {
      console.log('Project deleted');
      updateSelectedProject(null);
      getProjects();
    }
  }

  function actionConfirmation(confirm: boolean) {
    if (confirm) {
      // delete
    }
    updateConfModalState(false);
  }

  return (
    <div className='w-screen h-screen bg-image flex flex-row' style={{backgroundImage: `url(${bgImg})`}}>
      <Sidepanel projects={projects} addProject={() => updateAddProjectState(true)} onProjectSelection={onProjectSelection}/>
      <Mainpanel 
        project={selectedProject}
        addProject={() => updateAddProjectState(true)} 
        deleteProject={deleteProjectByID}
      />
      {
        showAddNewProjectModal &&
        <NewProjectModal addNewProject={addProject} cancel={cancelAddProject}/>
      }
      {
        showConfModal &&
        <ConfirmationModal header="Are you sure?" actionConfirmation={actionConfirmation}/>
      }
    </div>
  )
}

export default App

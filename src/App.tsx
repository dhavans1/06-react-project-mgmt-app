import bgImg from './assets/bg-image.png';
import './App.css'
import Sidepanel from './components/Sidepanel/Sidepanel';
import Mainpanel from './components/Mainpanel/Mainpanel';
import NewProjectModal from './components/NewProjectModal/NewProjectModal';
import { useEffect, useState } from 'react';
import type { IProjectData } from './interfaces/project.interface';
import { addNewProject, retrieveProjects, deleteProject } from './utils/utils';

function App() {
  const [showAddNewProjectModal, updateAddProjectState] = useState(false);
  const [projects, updateProjects] = useState<any>([]);
  const [selectedProject, updateSelectedProject] = useState<IProjectData | null>(null);

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
    const res = await deleteProject(pID);
    if (res!) {
      console.log('Project deleted');
      updateSelectedProject(null);
      getProjects();
    }
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
    </div>
  )
}

export default App

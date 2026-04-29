import type { IProjectData } from "../interfaces/project.interface";
import { getProjects, addProject, deleteProjectByID } from "../services/api.service";

export function retrieveProject(id: number) {

}

export async function retrieveProjects() {
    try {
      const project = await getProjects();
      return project;
    } catch (err) {
      console.log('Error fetching projects');
      return null;
    }
}

export async function addNewProject(data: IProjectData) {
    // Invoke API to post project data
    try {
      const res = await addProject(data);
      return res;
    } catch(err) {
      return null;
    }
}

export async function deleteProject(projectID: number) {
    try {
        const res = await deleteProjectByID(projectID);
        return res;
    } catch (err) {
        return null;
    }
}
import axios from 'axios';
import { environment } from '../environment/environment.local';
import type { IProjectData } from '../interfaces/project.interface';

// 1. Create axios instance
const projectsApi = axios.create({
    baseURL: environment.baseUrl,
    headers: {
        "Content-Type": "application/json"
    }
});

// Error handler
projectsApi.interceptors.response.use(
    (res) => res,
    (err) => {
        console.log('API Error: ', err);
        return null;
    }
);

export const getProjects = () => projectsApi.get<IProjectData | undefined>(
    environment.getProjectsPath
).then(res => res.data);

export const addProject = (data: IProjectData) => projectsApi.post(
    environment.addProjectPath,
    {
        ...data,
        pID: new Date().getTime()
    }
);

export const deleteProjectByID = (projectID: number) => projectsApi.delete(
    environment.deleteProjectPath,
    {
        params: {
            pID: projectID
        }
    }
);

export default projectsApi;
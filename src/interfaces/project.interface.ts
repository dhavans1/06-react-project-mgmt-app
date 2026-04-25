export interface IProjectData {
    pID: number;
    title: string;
    desc: string;
    goal: string;
    tasks: ITask[] | null | undefined;
}

export interface ITask {
    taskID: number;
    pID: number;
    taskDesc: string;
    priority: 'Low' | 'Medium' | 'High';
    status: 'Not Started' | 'In progress' | 'Completed';
}


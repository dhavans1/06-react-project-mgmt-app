import type { IProjectData } from "../../interfaces/project.interface";

type ProjectProps = {
    project: IProjectData;
    deleteProject: (pID: number) => void;
};

export default function Project({project, deleteProject}: ProjectProps) {
    return (
        <>
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <p>{project.goal}</p>
            {
                project.tasks!.map(task => {
                    <div>
                        <p>{task.taskDesc}</p>
                    </div>
                })
            }
            <button
                onClick={() => deleteProject(project.pID)}
                className="p-2 m-2 text-white bg-blue-950 hover:cursor-pointer"
            >Delete Project</button>
        </>
    );
}
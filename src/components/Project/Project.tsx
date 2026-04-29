import type { IProjectData } from "../../interfaces/project.interface";
import { MdDelete } from "react-icons/md";

type ProjectProps = {
    project: IProjectData;
    deleteProject: (pID: number) => void;
};

const bgStlye = "p-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
const divStlye = "flex flex-col items-center m-4";
const headerStyle="text-2xl font-semibold font-sans pb-2";

export default function Project({project, deleteProject}: ProjectProps) {
    return (
        <div className="w-full h-full bg-linear-180 from-blue-950/90 to-blue-600/90 rounded-2xl flex flex-col items-center p-6">
            <h1 className={`${bgStlye} text-4xl`}>{project.title}</h1>
            <div className={divStlye}>
                <p className={`${bgStlye} ${headerStyle}`}>Description</p>
                <p className="text-xl text-white">{project.desc}</p>
            </div>
            <div className={divStlye}>
                <p className={`${bgStlye} ${headerStyle}`}>Goal</p>
                <p className="text-xl text-white">{project.goal}</p>
            </div>
            {
                project.tasks!.map(task =>
                    <div>
                        <p>{task.taskDesc}</p>
                    </div>
                )
            }
            <button
                onClick={() => deleteProject(project.pID)}
                className="p-4 m-2 hover:cursor-pointer fixed right-0"
            ><MdDelete size="40px" className="text-orange-500"/></button>
        </div>
    );
}
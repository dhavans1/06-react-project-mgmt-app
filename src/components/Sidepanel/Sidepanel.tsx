import type { IProjectData } from "../../interfaces/project.interface";

type SidepanelProps = {
    projects: IProjectData[];
    addProject: (v: boolean) => void;
    onProjectSelection: (pID: number) => void;
};

export default function Sidepanel({projects, addProject, onProjectSelection}: SidepanelProps) {

    function handleOnClick() {
        addProject(true);
    }

    return (
      <div className='w-1/4 h-screen bg-linear-180 from-blue-950/80 to-blue-400/80 rounded-tr-2xl rounded-br-2xl flex flex-col items-center'>
        <p className='uppercase text-white text-2xl font-bold pt-10'>Your Projects</p>
        <button 
            className='p-4 m-6 mt-10 bg-linear-90 from-blue-950 to-blue-600 animate-pulse text-white text-md font-sans font-semibold rounded-2xl border-blue-900 border-2 hover:cursor-pointer hover:bg-blue-950'
            onClick={handleOnClick}
        >Add New Project</button>
        {
            projects.length &&
            <div className="projects-container w-full">
                <p className="h-10 font-sans font-semibold text-md bg-linear-0 from-orange-50/80 to-orange-400/80 flex justify-center items-center">Your Projects</p>
                {
                    projects.map(p => 
                        <p
                            key={p.title}
                            className="h-10 font-sans font-medium text-white bg-linear-180 from-blue-950 to-blue-800 flex justify-center items-center hover:cursor-pointer hover:animate-pulse hover:animate-duration-10"
                            onClick={() => onProjectSelection(p.pID)}
                        >{p.title}</p>
                    )
                }
            </div>
        }
      </div>  
    );
}
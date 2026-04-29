import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import type { IProjectData } from "../../interfaces/project.interface";

type newProjectModalProps = {
    addNewProject: (data: IProjectData) => void;
    cancel: () => void;
}

const formElParentStyle = "flex flex-row w-1/2 justify-between m-2";
const formInputStyle = "border-blue-600 bg-linear-0 from-blue-100 to-blue-50 rounded-md h-10 w-60 pl-2 pr-2";
const formTextAresAtyle = "border-blue-600 bg-linear-0 from-blue-100 to-blue-50 rounded-md h-20 w-60 pl-2 pr-2";
const fieldStyle ="font-sans text-md font-semibold mr-4";

export default function NewProjectModal({addNewProject, cancel}: newProjectModalProps) {
    const { register, handleSubmit } = useForm();

    function onSubmit(formData: any) {
        addNewProject({
            pID: new Date().getTime(),
            title: formData.title,
            desc: formData.desc,
            goal: formData.goal,
            tasks: []
        });
    }

    return createPortal(
        <div className="modal-container fixed inset-0 w-screen h-screen bg-black/50 flex justify-center items-center">
            <form 
                className="content w-1/2 bg-linear-0 from-blue-300 to-blue-200 border-2 rounded-2xl border-blue-300 flex flex-col items-center p-4"
                onSubmit={handleSubmit(onSubmit)}>
                <span className="font-sans text-xl font-semibold p-4">Enter Project Details</span>
                <div className={formElParentStyle}>
                    <span className={fieldStyle}>Title</span>
                    <input className={formInputStyle} type="text" id="title" {...register("title")}/>
                </div>
                <div className={formElParentStyle}>
                    <span className={fieldStyle}>Description</span>
                    <textarea className={formTextAresAtyle} id="desc" {...register("desc")}/>
                </div>
                <div className={formElParentStyle}>
                    <span className={fieldStyle}>Goal</span>
                    <textarea className={formTextAresAtyle} id="goal" {...register("goal")}/>
                </div>
                <button 
                    type="button" 
                    className="m-4 p-2 pl-4 pr-4 bg-linear-60 from-orange-400 to-orange-200 rounded-xl border-2 border-orange-400 cursor-pointer"
                    onClick={() => {}}
                >+ Add Task</button>
                <div className="flex flex-row"> 
                    <button 
                        type="submit" 
                        className="m-6 p-2 pl-4 pr-4 w-30 bg-linear-30 from-blue-950 to-blue-400 rounded-xl border-2 border-blue-800 text-white cursor-pointer hover:bg-amber-300"
                    >Save</button>
                    <button 
                        type="button" 
                        className="m-6 p-2 pl-4 pr-4 w-30 bg-linear-30 from-orange-950 to-orange-400 rounded-xl border-2 border-orange-800 text-white cursor-pointer hover:bg-amber-300"
                        onClick={cancel}
                    >Cancel</button>
                </div>
            </form>
        </div>
        , document.getElementById('project-modal')!
    );
}
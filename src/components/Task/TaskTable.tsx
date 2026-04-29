import { taskPriority, taskStatus, taskTableHeaders } from "../../constants/constant"
import type { ITask } from "../../interfaces/project.interface"
import { MdEdit, MdOutlineSave } from "react-icons/md";

type TaskTableProps = {
    tasks: ITask[],
    addTask: boolean
}

const thStyle = "p-4 m-2 ";
const tdStyle = "pr-2 pl-2 m-2 ";
const descStyle = "border-2 rouded-xl bg-white text-black";

export default function TaskTable({tasks, addTask}: TaskTableProps) {
    let newTask: ITask = {
        pID: 1,
        taskID: 1,
        taskDesc: '',
        status: taskStatus[0],
        priority: taskPriority[0]
    };

    // remove
    tasks = [];

    if (addTask) {
        tasks.push(newTask);
    }

    return (
        <div className="w-full h-40 overflow-auto flex justify-center">   
            <table className="border-2 border-blue-800 rounded-2xl">
                <thead>
                    <tr>
                        {
                            taskTableHeaders.map(header => 
                                <th className={thStyle}>
                                    {header}
                                </th>
                            )
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        !!tasks.length &&
                        tasks.map(task => 
                            <tr>
                                <td className={tdStyle}>
                                    <input className={descStyle} value={task.taskDesc} disabled={true} type="text" />
                                </td>
                                <td className={tdStyle}>
                                    <select
                                        value={task.priority}
                                        onChange={(e) => task.priority = e.target.value}
                                        className="p-2 border rounded"
                                        >
                                            {
                                                taskPriority.map (p => 
                                                    <option value={p}>{p}</option>
                                                )
                                            }
                                    </select>
                                </td>
                                <td className={tdStyle}>
                                    <select
                                        value={task.status}
                                        onChange={(e) => task.status = e.target.value}
                                        className="p-2 border rounded"
                                        >
                                            {
                                                taskStatus.map (s => 
                                                    <option value={s}>{s}</option>
                                                )
                                            }
                                    </select>
                                </td>
                                <td className={tdStyle}>
                                    <button className="cursor-pointer">    
                                        <MdEdit size="30px"/>
                                    </button>
                                </td>
                            </tr>
                        )
                    }
                    {
                        !!addTask &&
                        <tr>
                            <td className={tdStyle}>
                                <input className={descStyle} type="text" />
                            </td>
                            <td className={tdStyle}>
                                <select
                                    value={newTask.priority}
                                    onChange={(e) => newTask.priority = e.target.value}
                                    className="p-2 border rounded"
                                    >
                                        {
                                            taskPriority.map (p => 
                                                <option value={p}>{p}</option>
                                            )
                                        }
                                </select>
                            </td>
                            <td className={tdStyle}>
                                <select
                                    value={newTask.status}
                                    onChange={(e) => newTask.status = e.target.value}
                                    className="p-2 border rounded"
                                    >
                                        {
                                            taskStatus.map (s => 
                                                <option value={s}>{s}</option>
                                            )
                                        }
                                </select>
                            </td>
                            <td className={tdStyle}>
                                <button className="hover:animate-pulse cursor-pointer">    
                                    <MdOutlineSave size="30px"/>
                                </button>
                            </td>
                        </tr>
                    }                
                </tbody>
            </table>
        </div>
    )
}
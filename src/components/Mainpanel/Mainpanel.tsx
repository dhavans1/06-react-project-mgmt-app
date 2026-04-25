type MainpanelProps = {
    addProject: (v: boolean) => void
};

export default function Mainpanel({addProject}: MainpanelProps) {
    return (
        <div className='w-3/4 h-screen bg-blue-300/50 flex flex-col justify-center items-center'>
            <p className="m-4 text-3xl text-blue-950 font-semibold font-sans">No Project Selected</p>
            <p className="m-2 text-xl text-blue-950">Select a project or get started with a new one</p>
            <button 
                className='p-4 m-6 mt-10 bg-linear-90 from-blue-950 to-blue-600 animate-bounce text-white text-md font-sans font-semibold rounded-2xl border-blue-900 border-2 hover:cursor-pointer hover:animate-pulse hover:bg-blue-950'
                onClick={() => addProject(true)}
            >Add New Project</button>
        </div>
    );
}
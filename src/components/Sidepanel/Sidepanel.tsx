type SidepanelProps = {
    addProject: (v: boolean) => void
};

export default function Sidepanel({addProject}: SidepanelProps) {

    function handleOnClick() {
        addProject(true);
    }

    return (
      <div className='w-1/4 h-screen bg-linear-180 from-blue-950/80 to-blue-400/80 rounded-tr-2xl rounded-br-2xl flex flex-col items-center'>
        <p className='uppercase text-white text-2xl font-bold pt-10'>Your Projects</p>
        <button 
            className='p-4 m-6 mt-10 bg-linear-90 from-blue-950 to-blue-600 animate-bounce text-white text-md font-sans font-semibold rounded-2xl border-blue-900 border-2 hover:cursor-pointer hover:animate-pulse hover:bg-blue-950'
            onClick={handleOnClick}
            >Add New Project</button>
      </div>  
    );
}
type ConfirmationModalProps = {
    header: string;
    actionConfirmation: (confirm: boolean) => void;
};

const btnStyle="p-2 pl-4 pr-4 m-2 w-30 rounded-2xl flex justify-center items-center bg-linear-0 from-orange-900 to-orange-400 hover:cursor-pointer";

export default function ConfirmationModal({header, actionConfirmation}: ConfirmationModalProps) {
    return (
        <div className="modal-container fixed inset-0 w-screen h-screen bg-black/50 flex justify-center items-center">
            <div className="content p-4 font-sans font-medium text-white w-1/5 bg-blue-950 border-2 rounded-2xl border-blue-800 flex flex-col items-center p-4">
                <h2 className="pb-4">{header}</h2>
                <div className="flex flex-row">
                    <button className={btnStyle} onClick={() => actionConfirmation(true)}>Continue</button>
                    <button className={btnStyle} onClick={() => actionConfirmation(false)}>Cancel</button>
                </div>
            </div>
        </div>
    )
}
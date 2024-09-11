/* eslint-disable react/prop-types */
const DeleteAll = ({ deleteall, reset, daylight }) => {
    return (
        <div className="flex justify-around">
            <button className="btn btn-primary" onClick={deleteall}>
                Delete All
            </button>
            <button className="btn btn-primary" onClick={reset}>
                Reset
            </button>
            <button className="btn btn-primary" onClick={daylight}>
                day&light
            </button>
        </div>
    );
};

export default DeleteAll;

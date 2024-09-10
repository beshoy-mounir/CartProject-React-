/* eslint-disable react/prop-types */
const DeleteAll = ({ deleteall }) => {
    return (
        <div className="flex justify-center">
            <button className="btn btn-primary" onClick={deleteall}>
                Delete All
            </button>
        </div>
    );
};

export default DeleteAll;

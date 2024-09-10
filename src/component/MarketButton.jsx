/* eslint-disable react/prop-types */
const MarketButton = ({ products: { name, id }, addm }) => {
    // console.log(name);

    return (
        <div>
            <button
                className="btn btn-success w-[100px]"
                onClick={() => {
                    addm(id);
                }}>
                {name}
            </button>
        </div>
    );
};

export default MarketButton;

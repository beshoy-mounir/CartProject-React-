/* eslint-disable react/prop-types */
const Products = ({ product: { name, price, items, id }, inc, dec, dele }) => {
    let total = items * price;
    return (
        <div className="flex justify-evenly items-center bg-gray-600 my-3 text-white rounded-full h-16">
            <span className="w-16">{name}</span>
            <span>{price}</span>
            <div className="flex justify-between items-center w-[20%]">
                <button
                    className="btn btn-info"
                    onClick={() => {
                        inc(id);
                    }}>
                    +
                </button>
                <span>{items}</span>
                <button
                    className="btn btn-error"
                    onClick={() => {
                        dec(id);
                    }}>
                    -
                </button>
            </div>
            <span className="w-[80px]">Total:{total}</span>
            <button
                className="btn btn-circle btn-outline"
                onClick={() => {
                    dele(id);
                }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Products;

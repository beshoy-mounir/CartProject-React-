/* eslint-disable react/prop-types */
import MarketButton from "./MarketButton";

const Market = ({ products, addm }) => {
    return (
        <div className="flex justify-around my-5">
            {products.map((products, index) => (
                <div key={index}>
                    <MarketButton products={products} addm={addm} />
                </div>
            ))}
        </div>
    );
};

export default Market;

{
    /* <button className="btn btn-success w-[100px]">chipsy</button>
<button className="btn btn-success w-[100px]">pepsi</button>
<button className="btn btn-success w-[100px]">cigaretes</button>
<button className="btn btn-success w-[100px]">kranshy</button> */
}

/* eslint-disable react/prop-types */
import Products from "./Products";

const MainProducts = ({ products, inc, dec, dele }) => {
    return (
        <div className="mt-11">
            {products.map((product, index) => (
                <div key={index} className="w-[80%] m-auto ">
                    <Products
                        product={product}
                        inc={inc}
                        dec={dec}
                        dele={dele}
                    />
                </div>
            ))}
        </div>
    );
};
export default MainProducts;

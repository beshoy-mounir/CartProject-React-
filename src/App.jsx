import { useState } from "react";
import Nav from "./component/nav.jsx";
import DeleteAll from "./component/DeleteAll.jsx";
import MainProducts from "./component/MainProducts.jsx";
import Total from "./component/Total.jsx";
import Market from "./component/Market.jsx";

// Style
import "./index.css";

// App
export const App = () => {
    // Data

    // Data displyed in card and can be changed
    const [products, setitems] = useState([
        { id: 1, name: "chipsy", price: 100, items: 1 },
        { id: 2, name: "pepsi", price: 200, items: 1 },
        { id: 3, name: "cigaretes", price: 300, items: 1 },
        { id: 4, name: "kranshy", price: 400, items: 1 },
        { id: 5, name: "3aser", price: 500, items: 1 },
    ]);

    // Data displyed in market and can not be changed !!
    const [readonly] = useState([
        { id: 1, name: "chipsy", price: 100, items: 1 },
        { id: 2, name: "pepsi", price: 200, items: 1 },
        { id: 3, name: "cigaretes", price: 300, items: 1 },
        { id: 4, name: "kranshy", price: 400, items: 1 },
        { id: 5, name: "3aser", price: 500, items: 1 },
    ]);

    // Functions

    // increment
    const inc = (id) => {
        let newProducts = products.map((products) => {
            if (products.id === id) {
                products.items += 1;
            }
            return products;
        });
        setitems(newProducts);
    };

    // decrement
    const dec = (id) => {
        let newProducts = products.map((products) => {
            if (products.id === id) {
                if (products.items !== 0) {
                    products.items -= 1;
                }
            }
            return products;
        });
        setitems(newProducts);
    };

    // Delete
    const dele = (id) => {
        let newProducts = products.filter((x) => x.id !== id);
        setitems(newProducts);
    };

    // ADD
    const addm = (id) => {
        // Return the Clicked Obj As Array
        let temp = readonly.filter((i) => i.id == id);
        // Convert Clicked Obj As Array !! to licked Obj As Obj !!
        let addObj = temp[0];
        //Retrun true if the element is already in cart
        let x = products.some((i) => i.id == id);
        // if true Skip if false Add product to cart
        if (!x) {
            // Save current cart to temp array
            let tempArray = products;
            // Added Clicked Product to to current cart (Temp Array)
            tempArray.push(addObj);
            // now temp Array = product + Clicked Product
            // set current product to Temp Array
            setitems(tempArray);
        }
    };

    // Delete All

    const deleteall = () => {
        let newProducts = products.filter((x) => x.id == -1);
        setitems(newProducts);
    };
    return (
        <div>
            <Nav products={products} />
            <Market products={readonly} addm={addm} />
            <DeleteAll deleteall={deleteall} />
            <MainProducts products={products} inc={inc} dec={dec} dele={dele} />
            <Total products={products} />
        </div>
    );
};
export default App;

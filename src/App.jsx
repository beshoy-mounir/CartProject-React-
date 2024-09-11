import { useState } from "react";
import Nav from "./component/nav.jsx";
import Buttons from "./component/Buttons.jsx";
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
    // Dark Mode data
    const [bgColor, setbgColor] = useState("white");

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
                if (products.items !== 1) {
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
    const addm = (sentid) => {
        // Check if sent product is found
        let found = products.some(({ id }) => {
            if (id == sentid) {
                inc(sentid);
                return true;
            }
        });

        if (!found) {
            if (!found) {
                let newProducts = products;
                newProducts.push(readonly[sentid - 1]);
                console.log(typeof newProducts);
                console.log(newProducts);
                setitems(newProducts);
                inc();
            }
        }
    };

    // Delete All

    const deleteall = () => {
        setitems([]);
    };

    // Reset
    const reset = () => {
        setitems(readonly);
    };

    // daylight
    const daylight = () => {
        bgColor == "white" ? setbgColor("black") : setbgColor("white");
        console.log(bgColor);
    };

    return (
        <div className="h-lvh " style={{ background: bgColor }}>
            <Nav products={products} />
            <Market products={readonly} addm={addm} />
            <Buttons deleteall={deleteall} reset={reset} daylight={daylight} />
            <MainProducts products={products} inc={inc} dec={dec} dele={dele} />
            <Total products={products} />
        </div>
    );
};
export default App;

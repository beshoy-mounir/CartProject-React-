/* eslint-disable react/prop-types */
const Total = ({ products }) => {
    // console.log(products);
    let sum = products.map(({ items, price }) => {
        // console.log(items);
        // console.log(price);
        let sum;
        sum = items * price;
        return sum;
    });
    let total = 0;
    for (let i = 0; i < sum.length; i++) {
        total += sum[i];
    }
    let result = `Total : ${total}`;
    if (total == 0) {
        result = "Cart is Empty";
    }
    return <div className="w-fit m-auto my-5 text-4xl font-bold">{result}</div>;
};

export default Total;

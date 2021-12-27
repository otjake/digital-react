import React from "react";
import { Table } from "react-bootstrap";
import ProductItems from "./Product-Items/ProductItems";

const ProductList = (props) => {
    console.log("Products", props.products);
    if(props.products.length == 0){
        return <p>if spelling is correct,Product does not exist or is out of stock</p>
    }
    let categories = []
    
    props.products.map(expense =>
        (!categories.includes(expense.category) && categories.push(expense.category))
    )

    let collectProductsWithSameCategory = (categoryName) => {
        return props.products.filter(product => product.category == categoryName)
    }

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            {
                categories.map(categoryName =>
                    <tbody key={categoryName}>
                        <tr>
                            <td>{categoryName}</td>
                        </tr>
                      <ProductItems items={collectProductsWithSameCategory(categoryName)} />
                    </tbody>
                )
            }
        </Table>

    )
}

export default ProductList

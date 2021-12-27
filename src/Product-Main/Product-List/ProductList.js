import React from "react";
import { Table } from "react-bootstrap";
import ProductItems from "./Product-Items/ProductItems";

const ProductList = (props) => {
    console.log("Products", props.products);
    if(props.products.length == 0){
        return <p>if spelling is correct,Product does not exist</p>
    }
    let categories = []
    
    let fetchDistinctCategories = props.products.map(expense =>
        (!categories.includes(expense.category) && categories.push(expense.category))
    )
    console.log("Categories", categories);

    let extractor = (categoryName) => {
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
                categories.map(category =>
                    <tbody key={category}>
                        <tr>
                            <td>{category}</td>
                        </tr>
                      <ProductItems items={extractor(category)} />
                    </tbody>
                )
            }
        </Table>

    )
}

export default ProductList

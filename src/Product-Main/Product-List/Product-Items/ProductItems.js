import React from "react";

const ProductItems = (props) => {
    return (
        props.items.map(item =>
            <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.price}</td>
        </tr>
        )

    )
}

export default ProductItems

import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import ProductList from "./Product-List/ProductList";
import SearchList from "./Search-List/SearchList";
const ProductMain = (props) => {
    // const [products,setProducts] = useState(props.products)
    const [filteredString, setFilteredString] = useState('');//set a default state for search input
    const [checkboxValue, setcheckboxValue] = useState(false);//set a default state for checkbux

  const searchInputChangeHandler = searchInput => {
    setFilteredString(searchInput);
  };

  
  const checkboxChangeHandler = checked => {
    console.log("checkbox",checked)

    setcheckboxValue(checked);
  };
    // let productToSearch =[...props.products]
 
    let searchingProducts = props.products.filter(product => {
        if(filteredString == ""){
            return props.products;
        }else{
          return product.name.toLowerCase() == filteredString.toLowerCase()
        } 
    })

    let productsInStock = searchingProducts.filter(product => {
        if(checkboxValue == false){
            return searchingProducts;
        }else{
          return product.stocked == checkboxValue
        }
    })
    
    

    return (
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Row>
                    <SearchList 
                    onInputChange={searchInputChangeHandler}
                    onCheckChange={checkboxChangeHandler}
                    />
                </Row>
                <Row>
                    <ProductList products={productsInStock}/>
                </Row>
            </Col>
        </Row>
    )
}

export default ProductMain

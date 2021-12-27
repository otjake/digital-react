import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import ProductList from "./Product-List/ProductList";
import SearchList from "./Search-List/SearchList";
import AddProduct from "./Add-Product/AddProduct";
const ProductMain = (props) => {
  const [products,setProducts] = useState(props.products)
  const [filteredString, setFilteredString] = useState('');//set a default state for search input
  const [checkboxValue, setcheckboxValue] = useState(false);//set a default state for checkbux


  const searchInputChangeHandler = searchInput => {
    setFilteredString(searchInput);
  };


  const checkboxChangeHandler = checked => {
    console.log("checkbox", checked)

    setcheckboxValue(checked);
  };
  // let productToSearch =[...props.products]

  //applying search
  let searchingProducts = products.filter(product => {
    if (filteredString === "") {
      return products;
    } else {
      return product.name.toLowerCase() === filteredString.toLowerCase()
    }
  })

  //applying checkbox filter
  let productsInStock = searchingProducts.filter(product => {
    if (checkboxValue === false) {
      return searchingProducts;
    } else {
      return product.stocked === checkboxValue
    }
  })

  let addProducts = (formData) => {
    formData.id = 90;
    setProducts((prevProducts)=>{
      console.log('added',[formData,...prevProducts])
      return([formData,...prevProducts]);
    })
  }



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
          <ProductList products={productsInStock} />
        </Row>
        <Row>
          { filteredString.length === 0 ?
          <Card>
            <Card.Header>Add a new product</Card.Header>
            <Card.Body>
              <AddProduct
              collectFormData={addProducts} />
            </Card.Body>
          </Card> :
          ''
        }
        </Row>
      </Col>
    </Row>
  )
}

export default ProductMain

import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import ProductList from "./Product-List/ProductList";
import SearchList from "./Search-List/SearchList";
import AddProduct from "./Add-Product/AddProduct";
const ProductMain = (props) => {
  const [products,setProducts] = useState(props.products)
  const [filteredString, setFilteredString] = useState('');//set a default state for search input
  const [checkboxValue, setcheckboxValue] = useState(false);//set a default state for checkbux
  const [success, setSuccess] = useState(false);//set a default state for checkbux




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
  //i am used the results of the searchingproducts and filter through then use as the final products
  //if the checkbox is false return all products
  //if it is true return products in stock
  let productsInStock = searchingProducts.filter(product => {
    if (checkboxValue === false) {
      return searchingProducts;
    } else {
      return product.stocked === checkboxValue
    }
  })

  let addProducts = (formData) => {
    let lastArrayId = products.at(-1).id
    formData.id = +lastArrayId + 1; //+ behind the lastArrayId makes casts it as an integer
    
    setProducts((prevProducts)=>{
      let previviousLength=prevProducts.length
      let totalProducts = [...prevProducts,formData]
      if(totalProducts.length > previviousLength){
        console.log('checker1',success)
        setSuccess(true)
        return(totalProducts);
      }else{
        setSuccess(false)
        return;
      }
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
              collectFormData={addProducts}
              success = {success}/>
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

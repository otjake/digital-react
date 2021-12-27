import React from "react";
import { Form } from "react-bootstrap";


const SearchList = (props) => {

    const handleSearchInputChange = e => {
            props.onInputChange(e.target.value)
    }

    
    const handleCheckboxChange = e => {
        props.onCheckChange(e.target.checked)
}

    return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="text" placeholder="Enter Product to search for" name='search' onChange={handleSearchInputChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Only show products in stock" onChange={handleCheckboxChange} />
        </Form.Group>
      </Form>
        )
}

export default SearchList

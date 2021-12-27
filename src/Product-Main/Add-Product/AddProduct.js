import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";

const AddProduct = (props) => {
    const [category,setCategory] = useState('')
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [stocked,setstocked] = useState('checked')


    const handleCategoryNameChange = (e) => {
        setCategory(e.target.value)
    }


    const handleProductNameChange = (e) => {
        setName(e.target.value)
    }


    const handleProductPriceChange = (e) => {
        setPrice(e.target.value)
    }


    const handleInStockChange = (e) => {
        setstocked(e.target.checked)
    }

    const gatherFormData = (e) => {
        e.preventDefault();
  
        const formData ={
            category : category,
            name : name,
            price : "$" + price,
            stocked : stocked
        }

        props.collectFormData(formData)
        
            setCategory('')
            setName('')
            setPrice(0)
            setstocked(false)
    }


    return (
        <Form onSubmit={gatherFormData}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Product Category</Form.Label>
                <Form.Control type="text" placeholder="Enter Category" value={category} onChange={handleCategoryNameChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Category" value={name} onChange={handleProductNameChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="number" placeholder="enter price" value={price} onChange={handleProductPriceChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="In stock?" value={stocked} onChange={handleInStockChange} />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default AddProduct
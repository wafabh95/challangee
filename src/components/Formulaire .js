import React, { Component } from 'react'
import {Button} from 'react-bootstrap';
import {Form,Card} from 'react-bootstrap';


export default class Formulaire  extends Component {

constructor(props) {
  super(props)

  this.state = {
    FirstName:"",
    LastName:"",
    show:false,

  }
}
add=(e)=>{  


  this.setState({
    [e.target.name]: e.target.value,
   

});

}
Submit=()=>{
//  this.e.preventDefault()

  this.setState({
    show:true,
  })

}
  render() {
    return (
      <div>

<Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>FirstName</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name='FirstName' onChange={this.add}/>
        <Form.Text className="text-muted">
     
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>lastName:</Form.Label>
        <Form.Control type="text" placeholder="Enter lastname" name='LastName' onChange={this.add}/>
        <Form.Text className="text-muted">
     
        </Form.Text>
      </Form.Group>
     
  
      <Button variant="primary"  onClick={this.Submit}>
        Add
      </Button>
    </Form>


    {this.state.show ===true? <Card style={{ width: '18rem' }}>
      
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>:<></>}
      </div>
    )
  }
}





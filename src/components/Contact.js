import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import image from './IMG3.jpg';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';


// import Layout from '../components/layout'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
class Checkout extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }
handleSubmit(e) {
    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'glorehoney@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'service_ni63u3d',
      'test',
       templateParams,
      'user_SZ0p8Gqu4DlfLSrZeX2Yw'
     )
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (

      <>
        {/* <Layout> */}
      {/* <div  className = "col-10 mx-auto col-md-4 my-4" className ="img-fluid">
      <img src={image} style={{width:555}} />
        </div>
         */}
         {/* <SplitPane
    split="vertical"
  > */}
         <br></br>
         <div className = "col- mx-auto col-md-5 col-lg-4 my-7 " > 
          <h1 className="p-heading1">Check out</h1>
          <br></br>
          <h4>Payment Information</h4><br></br>
            <h6><b>Cash On Delivery</b></h6>
            <hr></hr>
            <h5>Billing Address</h5>
            <hr></hr>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted" color="#000000">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder=""
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder=""
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Country</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder=""
              />
            </FormGroup>
            <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Mobile Number</Label>
              <Input
                type="text"
                name="mobile"
                className="text-primary"
                value={this.state.mobile}
                onChange={this.handleChange.bind(this, 'mobile')}
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Address</Label>
              <Input
                type="textarea"
                name="address"
                className="text-primary"
                value={this.state.address}
                onChange={this.handleChange.bind(this, 'address')}
              />
            </FormGroup>
            {/* <FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Order Comments</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup> */}
<Button variant="primary" type="submit">
              Place Your Order
            </Button>
          </Form>
          
          </div>
          {/* </SplitPane> */}
        {/* </Layout> */}
        
      </>
      
    )
  }
}
export default Checkout
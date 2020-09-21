import React from 'react';
import { useState } from 'react';

const Contact = () =>{
    const [data, setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        message:'',
    });
    const InputEvent = (event) =>{
        const {name, value} = event.target;
        
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        })
    } 
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`My name is ${data.fullname}`);
        }
    return(
        <>
            <div className='my-5'>
                <h1 className='text-center'>Contact us</h1>        
            </div>
            <div className='container contacct_div'>
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto'>
                    <form onSubmit={formSubmit}>
  <div class="mb-3">
    <label for="exampleFormControlInput1">Name</label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={InputEvent} placeholder="Enter Your Name" />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={InputEvent} placeholder="Enter Your Contact Number" />
  </div>
  <div class="mb-3">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={InputEvent} placeholder="name@example.com" />
  </div>
 <div class="mb-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1"  name='message' value={data.message} onChange={InputEvent} rows="3"></textarea>
  </div>
  <div className='col-12'>
  <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div><br></br>
</form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
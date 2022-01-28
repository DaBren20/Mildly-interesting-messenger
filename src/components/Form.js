import React from 'react'

const Form = () => {
  return (
    <div className='formbody'>
        <form className = 'card p-3 col-sm-6 bg-dark'>
        <div className='form-row'>
          <div className='col'>
          <label for="firstName">First Name</label>
            <input type="text" className='form-control' id="firstName" placeholder='First Name' />
          </div>
          <div className='col'>
          <label for="lastName">Last Name</label>
            <input type="text" className='form-control' id='lastName' placeholder='Last Name' />
          </div>
        </div>
        <br />
        <br />
        <div className="form-group">
            <label for="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <br />
        <br />
        <div class="form-group">
          <label for="textArea">Message</label>
          <textarea class="form-control" id="textArea" rows="3"></textarea>
        </div>

        <button type="submit" className="btn btn-primary col-sm-1">Submit</button>
        </form>
    </div>
  )
};

export default Form;

import React, { useState } from 'react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Send data to the backend
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        if (response.ok) {
          alert('Email sent successfully');
        } else {
          alert('Failed to send email');
        }
      };
    


  return (
    <div>
     <div class="container animated fadeIn">

<div class="row mt-5">
  <h1 class="header-title"> Contact </h1>
  <hr/>
  <div class=" row" id="parent">
      <div class="col-md-6">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224567.72022483096!2d76.82493149608617!3d28.423160295934977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1729497920781!5m2!1sen!2sin" width="100%" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="col-md-6">
          <form onSubmit={handleSubmit} class="contact-form">
  
              <div class="form-group">
                <input type="text" class="form-control" name="name" value={formData.name} onChange={handleChange} required />
              </div>
          
          
              <div class="form-group form_left">
                <input type="email" class="form-control" name="email" value={formData.email} onChange={handleChange} required  />
              </div>
          
            {/* <div class="form-group">
                 <input type="text" class="form-control" placeholder="Mobile No." required="" />
            </div> */}
            <div class="form-group">
            <textarea class="form-control textarea-contact" rows="5" placeholder="Type Your Message/Feedback here..." value={formData.message} onChange={handleChange}></textarea>
            <br/>
              <button class="btn btn-default btn-send" type="submit"> <i class="fa fa-paper-plane"></i> SUBMIT </button>
            </div>
           </form>
      </div>
  </div>
</div>

<div class="container second-portion">
  <div class="row">
      <div class="col-xs-12 col-sm-6 col-lg-4">
          <div class="box">							
              <div class="icon">
                  <div class="image"><i class="fa fa-envelope" aria-hidden="true"></i></div>
                  <div class="info">
                      <h3 class="title">EMAIL</h3>
                      <p>
                          <i class="fa fa-envelope" aria-hidden="true"></i> rajeshrathaur0011@gmail.com
                         
                      </p>
                  
                  </div>
              </div>
              <div class="space"></div>
          </div> 
      </div>
          
      <div class="col-xs-12 col-sm-6 col-lg-4">
          <div class="box">							
              <div class="icon">
                  <div class="image"><i class="fa fa-mobile" aria-hidden="true"></i></div>
                  <div class="info">
                      <h3 class="title">CONTACT</h3>
                      <p>
                          <i class="fa fa-mobile" aria-hidden="true"></i> (+91)-7900099842
                          
                      </p>
                  </div>
              </div>
              <div class="space"></div>
          </div> 
      </div>
          
      <div class="col-xs-12 col-sm-6 col-lg-4">
          <div class="box">							
              <div class="icon">
                  <div class="image"><i class="fa fa-map-marker" aria-hidden="true"></i></div>
                  <div class="info">
                      <h3 class="title">ADDRESS</h3>
                      <p>
                           <i class="fa fa-map-marker" aria-hidden="true"></i> Gurgaon, Haryana, India
                      </p>
                  </div>
              </div>
              <div class="space"></div>
          </div> 
      </div>		    
     
  </div>
</div>

</div>
    </div>
  )
}

export default Contact

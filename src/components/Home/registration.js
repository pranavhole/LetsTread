import React from 'react'
import './reg.scss'
function Registration() {
    const imageStyles = {
        backgroundImage: "url(http://localhost:3000/Images/bgimage.png)",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
      const titleStyles = {
        height: "65px",
        left: "453px",
        top: "2710px",
        borderRadius: "nullpx",
        fontFamily: "Mulish",
        fontSize: "40px",
        fontWeight: "700",
        lineHeight: "65px",
        letterSpacing: "0em",
        color: "rgba(45, 85, 47, 1)",
      };
  return (
    
    <div><div style={imageStyles}>
    <div className="relative inline-flex w-full justify-evenly ">
      <div className=" flex flex-col justify-center space-y-4">
        <div className="py-4">
          <div className=" flex flex-col justify-center items-center">
            <div style={titleStyles}>LET’S TRADE INDIA LOGIN</div>
          </div>
          <div className="form_wrapper">
<div className="form_container">
  <div className="title_container">
    <h2>Responsive Registration Form</h2>
  </div>
  <div className="row clearfix">
    <div className="">
      <form>
        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
          <input type="password" name="password" placeholder="Re-type Password" required />
        </div>
        <div className="row clearfix">
          <div className="col_half">
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
              <input type="text" name="name" placeholder="First Name" />
            </div>
          </div>
          <div className="col_half">
            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
              <input type="text" name="name" placeholder="Last Name" required />
            </div>
          </div>
        </div>
              <div className="input_field radio_option">
            <input type="radio" name="radiogroup1" id="rd1" />
            <label for="rd1">Male</label>
            <input type="radio" name="radiogroup1" id="rd2" />
            <label for="rd2">Female</label>
            </div>
            <div className="input_field select_option">
              <select>
                <option>Select a country</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <div className="select_arrow"></div>
            </div>
          <div className="input_field checkbox_option">
              <input type="checkbox" id="cb1" />
              <label for="cb1">I agree with terms and conditions</label>
          </div>
          <div className="input_field checkbox_option">
              <input type="checkbox" id="cb2" />
              <label for="cb2">I want to receive the newsletter</label>
          </div>
        <input className="button" type="submit" value="Register" />
      </form>
    </div>
  </div>
</div>
</div>

          </div>
          {/* body */}
        </div>
      </div>
    </div>
</div>
  )
}

export default Registration;

import React, { useState } from 'react'
import './reg.scss'
import axios from 'axios';
function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [email, setEmail] = useState('');
  const [pincode, setPincode] = useState('');
  const [referralCode, setReferralCode] = useState('');
  const [gender, setGender] = useState('');
  const [termsAndConditions, setTermsAndConditions] = useState(false);

  const handleRegistration = async () => {
    try {
      await axios.post('http://localhost:27017/register', {
        username,
        password,
        rePassword,
        email,
        pincode,
        referralCode,
        gender,
        termsAndConditions,
      });
      // Registration successful, perform any necessary actions
    } catch (error) {
      console.error('Error during registration:', error.response.data.error);
    }
  };
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
                        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                      </div>
                      <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                        <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                      </div>
                      <div className="input_field"> <span><i aria-hidden="true" className="fa fa-lock"></i></span>
                        <input type="password" name="password" placeholder="Re-type Password" value={rePassword} onChange={(e) => setRePassword(e.target.value)} required />
                      </div>
                      <div className="row clearfix">
                        <div className="col_full">
                          <div className="input_field"> <span><i aria-hidden="true" className="fa fa-user"></i></span>
                            <input type="text" name="name" placeholder="userEmail" value={email} onChange={(e) => setEmail(e.target.value)} />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label>Gender:</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)}>
                          <option value="">Select</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="input_field"> <span><i className="fa fa-lock"></i></span>
                        <input type="text" name="Pincode" placeholder="Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} required />
                      </div>
                      <div className="input_field checkbox_option">
                        <input type="checkbox" id="cb1" />
                        <label for="cb1"> <input
                          type="checkbox"
                          checked={termsAndConditions}
                          onChange={(e) => setTermsAndConditions(e.target.checked)}
                        />{' '}
                          I agree to the Terms and Conditions</label>
                      </div>
                      <div className="input_field checkbox_option">
                        <input type="checkbox" id="cb2" />
                        <label for="cb2">I Have Refer Code</label>
                        <input type='text' className=' p-2 w-[60%]' placeholder='R E F E R   C O D E' />
                      </div>
                      <input className="button" type="submit" onClick={handleRegistration} />
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

import { useFormik } from 'formik';
import Page from '../Page/Page';

const validate = (values, props) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address'; 
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(values.password)) {
    errors.password = 'Invalid Password'; 
  }
  if (!values.phone) {
    errors.phone = 'Required';
  } else if (!/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(values.phone)) {
    errors.phone = 'Invalid Phone'; 
  }

  return errors;
};

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      phone: ''
    },
    validate : validate
  });
  
    return (
        <Page>
      <div className='divSignUp'>
          <div className='container-registration'>
          <h1>Registration</h1>
          <div className='divSignUp1'>
              <h3>
                New Customer? Please create an account.
              </h3>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div className='div-label'>
              <label className='label'>Email</label>
              <span style={{color :"red"}}>*</span>
            </div>              
              <input
                type="email"
                id="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                placeholder="Email"
              />
              {
              formik.errors.email && <div style={{color :"red"}}>  {formik.errors.email}</div>
              }
              <div className='div-label'>
                <label className='label'>Password</label>
                <span style={{color :"red"}}>*</span>
              </div>
              <input 
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="Password"       
              />
              <p className='divSignUp-p'>Minimum eight characters, at least one letter and one number</p>
              {
              formik.errors.password && <div style={{color :"red"}}>  {formik.errors.password}</div>
              }
              <div className='div-label'>
                <label className='label'>Phone</label>
                <span style={{color :"red"}}>*</span>
              </div>
              <input
                type="text"
                id="phone"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                placeholder="Phone"         
              /> 
              {
              formik.errors.phone && <div style={{color :"red"}}>  {formik.errors.phone}</div>
              }              
              <button className='registration-btn'>Log In</button>
          </form>
          </div>
          
      </div>
      </Page>
    )
  }

export default Registration
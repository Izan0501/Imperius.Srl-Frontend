import React from 'react';
import Meta from '../components/Meta';
import SignupHeader from '../components/StoreHeader';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

const Signup = () => {
  return (
    <>
      <Meta title={'Signup'} />
      <SignupHeader title='Signup' />
      <Container class1="login-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <div className="auth-card">
              <h3 className='text-center mb-3'>Create Account</h3>
              <form
                action=""
                className='d-flex flex-column gap-15'
              >
                <CustomInput
                  type="text"
                  name='name'
                  placeholder='Name'
                />
                <CustomInput
                  type="text"
                  name='last-name' placeholder='Last Name'
                />
                <CustomInput
                  type="email"
                  name='email'
                  placeholder='Email'
                />
                <CustomInput
                  type="password"
                  name='password' placeholder='Password'
                />
                <Link className='mt-2 text-dark' to='/login'><BiArrowBack/>&nbsp;Back to Login</Link>
                <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                  <button className="button border-0">
                    Signup
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Signup
import React, { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

export default function SignUp() {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  });


  const { loading, signup } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp <span className='text-blue-500'>Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder='John Hary'
              className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="username" className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder='johnhary'
              className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="password" className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type="password"
              id="password"
              placeholder='Password'
              className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type="password"
              id="confirmPassword"
              placeholder='Rewrite password'
              className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          </div>

          <GenderCheckBox onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to='/login' className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'>
            Already have an account?
          </Link>

            <div>
              <button
                type='submit'
                className='btn btn-block btn-sm mt-2'
                disabled={loading}
                //loading || !inputs.fullName || !inputs.username || !inputs.password || !inputs.confirmPassword || !inputs.gender
              > 
                {loading ? <span className='loading loading-spinner'></span>:"Sign up" }
              </button>
            </div>
        </form>
      </div>
    </div>
  );
}

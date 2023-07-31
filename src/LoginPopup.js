import React, { useState } from 'react';

const LoginPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup((prevShowPopup) => !prevShowPopup);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log('Email:', email);
    console.log('Password:', password);
    togglePopup();
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className='bg-blue-700 text-blue-50 p-2 font-bold tracking-widest'
      >
        Signup/Login
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center z-10 bg-black bg-opacity-50">
          <div className="bg-white rounded p-8 relative md:w-96">
            <span
              onClick={togglePopup}
              className="absolute top-0 right-0 cursor-pointer text-red-600 text-4xl px-5"
            >
              &times;
            </span>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className='border-solid text-black border-2 border-black p-2 mt-4 w-full font-black font-sans hover:border-red-600'
                  required
                  placeholder='Enter Email'
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className='border-solid text-black border-2 border-black p-2 mt-4 w-full font-black font-sans hover:border-red-600'
                  required
                  placeholder='Password'
                />
              </div>
              <div className="mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  className='border-solid text-black border-2 border-black p-2 mt-4 w-full font-black  hover:border-red-600'
                  required
                  placeholder='Confirm Password'
                />
              </div>
              <p className='text-black font-semibold'>Already A User? <span onClick={togglePopup} className='text-blue-600 font-semibold cursor-pointer' >Login</span></p>
              <button
                type="submit"
                className='bg-blue-700 text-blue-50 p-2 font-bold tracking-widest w-full mt-2'
              >
                Signup Now
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;

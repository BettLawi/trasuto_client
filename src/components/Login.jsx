import React from 'react';

const Login = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Hidden on small screens */}
      <div className="hidden md:flex w-1/2 bg-blue-100 items-center justify-center p-8">
        <div className="text-left">
          <h2 className="text-3xl font-bold text-blue-800">"Everyone should be using Trasuto!"</h2>
          <p className="mt-4 text-blue-600">Responsible travel is not only better for our world, it’s also more interesting and memorable. Responsible tourism is the future of travel.</p>
          <p className="mt-2 text-blue-800">- Simon Reeve</p>
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center px-8 py-16 bg-white">
        <header className="w-full flex justify-end px-4">
          <p className="text-gray-700">
            Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
          </p>
        </header>

        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold mb-6">Log in</h1>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="w-full p-2 border border-gray-300 rounded" required />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </label>
              <a href="/forgot-password" className="text-sm text-blue-500">Forgot password?</a>
            </div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
              Log in
            </button>
            <div className="text-center mt-4">or</div>

            {/* Google Login Button */}
            <button type="button" className="w-full py-2 flex items-center justify-center border border-gray-300 text-gray-700 font-semibold rounded hover:bg-gray-100">
              <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Icon" className="h-5 w-5 mr-2" />
              Log in with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

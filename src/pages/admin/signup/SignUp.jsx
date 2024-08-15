import { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log({errors})

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    setErrors({})
  };

  const validate = () => {
    const errors = {};

    // Name validation
    if (!formData.username) {
      errors.username = 'Name is required';
    }

    // Email validation
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email address is invalid';
    }

    // Password validation
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!formData.acceptedTerms) {
      errors.acceptedTerms = 'You must accept the terms and conditions';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("over here")
    if (validate()) {
      console.log('Form data is valid:', formData);
      // Proceed with form submission
    } else {
      console.log('Form data is invalid:', errors);
    }
  };
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white border-[0.3px] border-[#B9B9B9]">
        <div className="mb-9 text-center">
          <h1 className="my-3 text-3xl font-bold text-[#202224]">Create An Account</h1>
          <p className="text-lg text-[#202224]">Create a account to continue</p>
        </div>
        <form className="space-y-12" onSubmit={handleSubmit}>
          <div className="space-y-5">
          <div>
              <label htmlFor="email" className="block mb-3 text-lg text-[#202224]">Email address</label>
              <input value={formData.email} onChange={handleChange} type="email" name="email" id="email" placeholder="esteban_schiller@gmail.com" className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-orange-600":"border-[#D8D8D8]"} bg-[#F1F4F9] text-[#A6A6A6]`}/>
              {errors.email && <p className="text-xs text-orange-700">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="username" className="block mb-3 text-lg text-[#202224]">Username</label>
              <input value={formData.username} onChange={handleChange} type="text" name="username" id="username" placeholder="username" className="w-full px-3 py-2 border rounded-md border-[#D8D8D8] bg-[#F1F4F9] text-[#A6A6A6]" />
              {errors.username && <p>{errors.username}</p>}
            </div>
            <div>
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="block mb-2 text-lg text-[#202224]">Password</label>
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-[#202224]">Forgot password?</a>
              </div>
              <input value={formData.password} onChange={handleChange} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-[#D8D8D8] bg-[#F1F4F9] text-[#A6A6A6]" />
              {errors.password && <p>{errors.password}</p>}
            </div>
            <div className="flex items-center">
              <input checked={formData.acceptedTerms} onChange={handleChange} type="checkbox" name="acceptedTerms" id="remember" aria-label="accept terms and conditions" className="mr-1 rounded-sm " />
              <label htmlFor="acceptedTerms" className="text-sm dark:text-gray-400">I accept terms and conditions</label>
              {errors.acceptedTerms && <p>{errors.acceptedTerms}</p>}
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button type="submit" className="w-full px-8 py-3 font-medium rounded-md bg-[#4880FF] text-white">Sign Up</button>
            </div>
            <p className="px-6 text-sm text-center text-gray-400">Already have an account ?
              <a rel="noopener noreferrer" href="#" className=" ml-2 underline text-[#4880FF]">Log in</a>.
            </p>
          </div>
        </form>
      </div>
      </section>
  )
}

export default SignUp
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const matchedUser = users.find(
      (u) => u.email === form.email && u.password === form.password
    );

    if (!matchedUser) {
      return setError('Invalid credentials');
    }

    localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));
    navigate('/');
  };

  return (
    <div className="md:h-[550px] h-[400px] flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 px-4">
      <motion.form
        onSubmit={handleLogin}
        className="max-w-sm w-full space-y-6 bg-white p-8 rounded-lg shadow-xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold text-center text-gray-800">Login</h2>
        {error && (
          <motion.p
            className="text-red-500 text-sm text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            {error}
          </motion.p>
        )}
        <motion.input
          name="email"
          placeholder="Email"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          onChange={handleChange}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />
        <motion.input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 transition duration-300"
          onChange={handleChange}
          required
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        />
        <motion.button
          type="submit"
          className="w-full bg-pink-600 text-white hover:bg-pink-700 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Login
        </motion.button>
        <p className="text-center text-sm mt-4">
          Don’t have an account?{' '}
          <span
            className="text-pink-600 cursor-pointer hover:underline"
            onClick={() => navigate('/register')}
          >
            Register
          </span>
        </p>
      </motion.form>
    </div>
  );
};

export default Login;

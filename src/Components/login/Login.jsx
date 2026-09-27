
import React, { useState } from "react";
function Login({ setIsLoggedIn }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();
        if (
            email === "test32@gmail.com" &&
            password === "Alam@123"
        ) {
            alert("Login Successfully 🎉✨");
            // App ko login success batana
            setIsLoggedIn();
        } else {
            alert("Invalid Email or Password ❌");
        }
    };
    return (

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-red-900 px-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-6">

                    <h1 className="text-3xl font-extrabold text-white tracking-wide">
                        Kiling{" "}
                        <span className="text-red-500">
                            SHOP
                        </span>
                    </h1>
                    <p className="text-gray-300 mt-2">
                        Welcome back! Please login to your account.
                    </p>
                </div>
                {/* Login Card */}
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
                        Login
                    </h2>

                    <p className="text-center text-gray-500 text-sm mb-7">
                        Enter your details to continue
                    </p>
                    <form onSubmit={handleLogin}>
                        {/* Email */}
                        <div className="mb-5">

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            />

                        </div>

                        {/* Password */}

                        <div className="mb-6">

                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Password
                            </label>
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) =>
                                    setPassword(e.target.value)
                                }
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition duration-300 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            />

                        </div>

                        {/* Remember */}

                        <div className="flex items-center justify-between mb-6 text-sm">

                            <label className="flex items-center gap-2 text-gray-600">

                                <input
                                    type="checkbox"
                                    className="accent-red-600"
                                />

                                Remember me
                            </label>

                            <button
                                type="button"
                                className="text-red-600 font-semibold hover:text-red-700"
                            >
                                Forgot Password?
                            </button>

                        </div>

                        {/* Login Button */}

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-red-700 active:scale-[0.98] transition duration-300 shadow-lg"
                        >
                            Login
                        </button>

                    </form>

                    {/* Signup */}

                    <div className="text-center mt-7">

                        <p className="text-gray-500 text-sm">

                            Don't have an account?

                            <button
                                type="button"
                                className="ml-1 text-red-600 font-bold hover:underline"
                            >
                                Sign Up
                            </button>

                        </p>

                    </div>
                </div>

                {/* Small Footer Text */}

                <p className="text-center text-gray-400 text-xs mt-6">

                    © 2026 Kiling SHOP. All rights reserved.

                </p>

            </div>

        </div>

    );
}

export default Login;




 
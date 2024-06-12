import React from "react";

const Login = () => {
    return (
        <>
            <div className='max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center'>
                <h1 className='text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8'>
                    Welcome to My Company
                </h1>
                <form action='#' className='w-full flex flex-col gap-4'>
                    <div className='flex items-start flex-col justify-start'>
                        <label className='text-sm text-gray-700 dark:text-gray-200 mr-2'>
                            Email:
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            className='w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'
                        />
                    </div>

                    <div className='flex items-start flex-col justify-start'>
                        <label className='text-sm text-gray-700 dark:text-gray-200 mr-2'>
                            Password:
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            className='w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'
                        />
                    </div>

                    <div className='flex items-start flex-col justify-start'>
                        <label className='text-sm text-gray-700 dark:text-gray-200 mr-2'>
                            Confirm Password:
                        </label>
                        <input
                            type='password'
                            id='confirmPassword'
                            name='confirmPassword'
                            className='w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500'
                        />
                    </div>

                    <button
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm'>
                        Login
                    </button>
                </form>

                <div className='mt-4 text-center'>
                    <a href='#' className='text-blue-500 hover:text-blue-600'>
                        Register
                    </a>
                </div>
            </div>
        </>
    );
};

export default Login;

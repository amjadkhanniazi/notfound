// src/pages/NotFound.js
import React from 'react';

const NotFound = () => {
return (
    <div className="flex flex-col min-h-screen relative">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center bg-cover bg-center opacity-60">
            <img src="https://www.shutterstock.com/image-vector/disappointed-woman-feeling-anxious-facial-600nw-2535496191.jpg" alt="Background" className="w-1/2 h-auto object-cover opacity-60" />
        </div>

        {/* Header */}
        <header className="bg-gray-800 text-white p-4 z-10">
            <h1 className="text-2xl">My Website</h1>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex items-center justify-center bg-gray-100 bg-opacity-75 z-10">
            <div className="text-center">
                <h2 className="text-6xl font-bold text-gray-700">404</h2>
                <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
                <p className="mt-2 text-gray-500">The page you are looking for does not exist.</p>
                <a href="/" className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Go to Home
                </a>
            </div>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white p-4 text-center z-10">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
        </footer>
    </div>
);
};

export default NotFound;
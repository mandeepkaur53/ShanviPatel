import React from 'react';


function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-2xl font-bold mb-4">LOGO</h2>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <ul>
                            <li className="mb-2"><a href="#" className="text-white">Home</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Courses</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Characters</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <ul>
                            <li className="mb-2"><a href="#" className="text-white">About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Refund Policy</a></li>
                           </ul>
                    </div>

                    <div className="col-span-1 md:col-span-1">
                        <ul>
                            <li className="mb-2"><a href="#" className="text-white">Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Whatsapp: +91 8178819091</a></li>
                            <li className="mb-2"><a href="#" className="text-white">Email: info@shanvipatel.com</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    <div>
                        <p>Copyright (C) 2025 shanvipatel All rights reserved</p>
                    </div>
                    <div>
                        <p>Created by : Mandeep</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
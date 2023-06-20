import React from 'react';
import Navbar from '../components/Navbar';
import Link from 'next/link';

const contact = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-12" style={{ backgroundColor: 'lightblue' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-800 shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8 sm:p-10">
              <h1 className="text-2xl font-semibold text-white mb-6">Contact Me</h1>

              <div className="mt-8">
                <h1 className="text-lg font-medium text-white mb-4">Connect With Me On</h1>
                <ul className="flex space-x-4">
                  <li>
                    <Link href="mailto:example@gmail.com" className="text-indigo-500 hover:text-white transition-colors duration-300">
                      <img src='https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-64.png' alt="Gmail Logo" style={{ width: '64px', height: '64px' }} />
                      <h3 className="text-white">Gmail</h3>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.instagram.com/aman_shukla.4194/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-white transition-colors duration-300"
                    >
                      <img src='https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_3-instagram-64.png' alt="Instagram Logo" style={{ width: '64px', height: '64px' }} />
                      <h3 className="text-white">Instagram</h3>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.facebook.com/aman.shukla.4194"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-white transition-colors duration-300"
                    >
                      <img src='https://cdn2.iconfinder.com/data/icons/social-var-1/614/2_-_Facebook-64.png' alt="Facebook Logo" style={{ width: '64px', height: '64px' }} />
                      <h3 className="text-white">Facebook</h3>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/aman-shukla-16b8501b9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-white transition-colors duration-300"
                    >
                      <img src='https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-64.png' alt="LinkedIn Logo" style={{ width: '64px', height: '64px' }} />
                      <h3 className="text-white">LinkedIn</h3>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://www.linkedin.com/in/aman-shukla-16b8501b9/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-500 hover:text-white transition-colors duration-300">
                      <img src='https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-128.png' alt="Twitter Logo" style={{ width: '64px', height: '64px' }} />
                      <h3 className="text-white">Twitter</h3>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

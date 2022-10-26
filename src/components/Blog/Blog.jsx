import React from 'react';

export const Blog = () => {
    return (
      <div className="px-4 min-h-[55vh] py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600">— 27 Oct 2022</span>
            </p>
            <h3 className="font-bold text-gray-800 transition-colors duration-200 hover:text-green-400">What is Cors?</h3>
            <p className="mb-5 text-gray-700">
              Cors or Cross Origin Resource Shering is a policy through this policy one can get access to the data. If Cors doesn't specify in the api then nobody does not get access to the data from other port except the localhost port where the api is created.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Anamul Islam Shamim
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600">— 27 Oct 2022</span>
            </p>
            <h3 className="font-bold text-gray-800 transition-colors duration-200 hover:text-green-400">Why are you using firebase?</h3>
            <p className="mb-5 text-gray-700">
              The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Anamul Islam Shamim
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600">— 27 Oct 2022</span>
            </p>
            <h3 className="font-bold text-gray-800 transition-colors duration-200 hover:text-green-400">How does private route works?</h3>
            <p className="mb-5 text-gray-700">
              Private route ensure secure access to some private data. If you want like your user should authenticate or should register and login before he enter some special route then you can protect those special route by private route. When user want to reach the route then private route redirect them to register or login page if they are not register or login yet. Thus private route protect and ensure private access to some specific route.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Anamul Islam Shamim
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
          <div className="p-8 bg-white border rounded shadow-sm">
            <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
              <span className="text-gray-600">— 27 Oct 2022</span>
            </p>
            <h3 className="font-bold text-gray-800 transition-colors duration-200 hover:text-green-400">What is Node? How does it work?</h3>
            <p className="mb-5 text-gray-700">
              Node is JavaScript runtime that is created to do server site activities by JavaScript. Node work outside of the browser. But is use Browser engine to convert its code into machine code. Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.
            </p>
            <div className="flex items-center">
              <a href="/" aria-label="Author" title="Author" className="mr-3">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                  alt="avatar"
                  className="object-cover w-10 h-10 rounded-full shadow-sm"
                />
              </a>
              <div>
                <a
                  href="/"
                  aria-label="Author"
                  title="Author"
                  className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                >
                  Anamul Islam Shamim
                </a>
                <p className="text-sm font-medium leading-4 text-gray-600">
                  Author
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Blog;
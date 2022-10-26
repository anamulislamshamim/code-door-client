import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export const CourseDetails = () => {
    const details = useLoaderData();
    return (
      <div className="px-1 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-0">
        <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
          <div className="relative lg:w-1/2">
            <img
              src={ details.picture }
              alt=""
              className="object-cover w-full lg:absolute h-80 lg:h-full"
            />
            <svg
              className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
              viewBox="0 0 20 104"
              fill="currentColor"
            >
              <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
            </svg>
          </div>
          <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
                New Course for 2022
              </p>
            </div>
            <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
              { details.sub }
            </h5>
            <p className="mb-2 text-gray-800">
              { details.description }
            </p>
            <p className="mb-2 text-gray-800">Instructor: <span className='font-bold'>{ details.name }</span></p>
            <p className="mb-2 text-gray-800">Price: { details.price }</p>
            <p className="mb-2 text-gray-800">Duration: { details.time }</p>
            <p className="mb-2 text-gray-800">Reqirement: { details.requirement }</p>
            <div className="flex items-center">
              <Link
                to={`/courses/course/checkout/${ details.id }`}
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-200 hover:bg-green-700 focus:shadow-outline focus:outline-none"
              >
                Get Premium Access
              </Link>
              {/* <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Learn More
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default CourseDetails;
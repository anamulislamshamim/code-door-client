import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';

export const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
            Available Courses
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="7b568941-9ed0-4f49-85a0-5e21ca6c7ad6"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#7b568941-9ed0-4f49-85a0-5e21ca6c7ad6)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Practice</span>
          </span>{' '}
          and hardwork are the keys of success.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Only education is not easy. It's need strong dedication, practice and patience. It also needs the mentality to take any challenges. We wishes best for you!
        </p>
      </div>
      <div className='flex'>
        <div className='w-1/5'>
          <h6 className='mb-3'>All Categories:</h6>
          <p className="p-2 mb-2"><NavLink className="py-3 px-1 rounded" style={({isActive}) => isActive ? {background:"green",color:"white"}:undefined} to="/courses/1">UI/UX Design</NavLink></p>
          <p className="p-2 mb-2"><NavLink className="py-3 px-1 rounded" style={({isActive}) => isActive ? {background:"green",color:"white"}:undefined} to="/courses/3">Server</NavLink></p>
          <p className="p-2 mb-2"><NavLink className="py-3 px-1 rounded" style={({isActive}) => isActive ? {background:"green",color:"white"}:undefined} to="/courses/6">Backend</NavLink></p>
          <p className="p-2 mb-2"><NavLink className="py-3 px-1 rounded" style={({isActive}) => isActive ? {background:"green",color:"white"}:undefined} to="/courses/4">Database</NavLink></p>
          <p className="p-2 mb-2"><NavLink className="py-3 px-1 rounded" style={({isActive}) => isActive ? {background:"green",color:"white"}:undefined} to="/courses/2">Problem Solving</NavLink></p>
          <p className="p-2 mb-2"><NavLink className="py-3 px-1 rounded" style={({isActive}) => isActive ? {background:"green",color:"white"}:undefined} to="/courses/5">IT Support</NavLink></p>
        </div>
        <div className='w-4/5'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Courses;
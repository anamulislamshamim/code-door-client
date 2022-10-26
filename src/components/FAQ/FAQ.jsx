import React, { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b">
        <button
          type="button"
          aria-label="Open item"
          title="Open item"
          className="flex items-center justify-between w-full p-4 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <p className="text-lg font-medium">{title}</p>
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transform transition-transform duration-200 ${
              isOpen ? 'rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="p-4 pt-0">
            <p className="text-gray-700">{children}</p>
          </div>
        )}
      </div>
    );
  };
  
  export const FAQ = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-white uppercase rounded-full bg-green-400">
                Find Your Answer
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
                      id="232db96b-4aa2-422f-9086-5a77996d1df1"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#232db96b-4aa2-422f-9086-5a77996d1df1)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">The</span>
              </span>{' '}
              interest of learning is to ask question!
            </h2>
            <p className="text-base text-gray-700 md:text-lg ">
               If you do not find your answer. Please send us emial. We are eagerly waiting to answer your question. Your service is our commitment.
            </p>
          </div>
          <div className="space-y-4">
            <Item title="When the winter semister will start?">
              Our winter semister will start on 31 December, 2022.
            </Item>
            <Item title="What should i learn for UI/UX design?">
              UI means User Interface and UX means User Exprience. If you want to become a good frontend developer then you should learn HTML, CSS, JavaScript first. Then you can learn React, Vue or Angular.
            </Item>
            <Item title="What should i learn for beckend development?">
              For backend development you can learn any backend language like C,C++,Python, Nodejs, PHP etc. And also learn Database like MongoDb, Postgree etc.
            </Item>
            <Item title="Can i become a Full-Stack developer after finished the course?">
              Actually our course has two part. In first part we will teach our students HTML, CSS, JavaScript, React. After finished the first part one can become a junior frontend developer. Then the second part we will teach our students NodeJs, MongoDb, firebase etc. After completed the full course one can easily become a full stack developer.
            </Item>
          </div>
        </div>
      </div>
    );
  };

export default FAQ;
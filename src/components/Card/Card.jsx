import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ course }) => {
    const { picture, sub, description, id } = course;
    return (
        <div>
            <Link
                to={`/courses/course/${ id }`}
                aria-label="View Item"
                className="inline-block overflow-hidden duration-300 transform bg-white rounded shadow-sm hover:-translate-y-2"
            >
                <div className="flex flex-col h-full">
                    <img
                        src={ picture }
                        className="object-cover w-full h-48"
                        alt=""
                    />
                    <div className="flex-grow border border-t-0 rounded-b">
                        <div className="p-5">
                            <h6 className="mb-2 font-semibold leading-5">
                                { sub }
                            </h6>
                            <p className="text-sm text-gray-900">
                                { description.length > 70 ? description.slice(0,70)+"...": description}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
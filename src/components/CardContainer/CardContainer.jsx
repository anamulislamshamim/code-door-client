import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';

const CardContainer = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className="grid gap-5 row-gap-5 mb-8 lg:grid-cols-3 md:grid-cols-2">
            {
              courses.length !== 0 ? courses.map(course => <Card course={course} />):"No Result Found!"
            }
          </div>
        </div>
    );
};

export default CardContainer;
import React from 'react';
import BlogItem from './BlogItem';

import { useSelector } from 'react-redux';

export default function BlogsContent() {
    const blogs = useSelector((state) => state.blogs)
    const filters = useSelector((state) => state.filters);
    const { filter_categories, filter_authors } = filters;

    const filterByCategory = (blog) => {

        if (filter_categories.length > 0) {
            return filter_categories.includes(blog?.categories_name);
        }
        return true;
    };

    const filterByAuthor = (blog) => {

        if (filter_authors.length > 0) {
            return filter_authors.includes(blog?.author_name);
        }
        return true;
    };

    return (
        <section
            className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8"
        >
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2
                        className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
                    >
                        ALL BLOGS ARE HERE
                    </h2>
                    <p
                        className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4"
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Ipsa libero labore natus atque, ducimus sed.
                    </p>
                </div>
                <div>
                    {filter_categories && <button class="text-white bg-red-500 p-2 mr-3">{filter_categories} </button>}
                    {filter_authors && <button class="text-white bg-red-500 p-2">{filter_authors}</button>}
                </div>
                {/* <!-- card grid  --> */}
                <div
                    className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
                >

                    {blogs.filter(filterByCategory).filter(filterByAuthor).map((blog) => (

                        <BlogItem blog={blog} key={blog.id} />

                    ))}

                </div>
            </div>
        </section>

    )
}

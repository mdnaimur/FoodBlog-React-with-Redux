import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { author_fillter, catetories_fillter } from '../redux/filters/action';

export default function BlogItem({ blog }) {
    const { categories_name, blog_name, blog_img, author_name, author_pic, published_time, reading_time } = blog;
    // const blogs = useSelector((state) => state.blogs)
    const filters = useSelector((state) => state.filters);


    const { filter_categories, filter_authors } = filters;

    const dispatch = useDispatch();

    const handleCategorieFillter = (categorie) => {
        if (filter_categories.includes(categorie)) {
            dispatch(catetories_fillter(categorie, "removed"))

        }
        else {
            dispatch(catetories_fillter(categorie, "added"))

        }
    }

    const handleAuthorFillter = (author) => {
        if (filter_authors.includes(author)) {
            dispatch(author_fillter(author, "removed"))
        }
        else {
            dispatch(author_fillter(author, "added"))
        }
    }

    return (
        <>

            <div
                className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
                <div className="flex-shrink-0">
                    <img
                        className="h-48 w-full object-cover"
                        src={blog_img}
                        alt="Blog imag"
                    />
                </div>
                <div
                    className="flex-1 bg-white p-6 flex flex-col justify-between"
                >
                    <div className="flex-1">
                        <p className="text-sm font-medium text-indigo-600">

                            <span onClick={() => handleCategorieFillter(categories_name)}
                                className="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                            >
                                {categories_name}
                            </span>
                        </p>
                        <a href="#" className="block mt-1">
                            <p
                                className="text-xl font-semibold text-gray-900"
                            >
                                {blog_name}
                            </p>
                        </a>
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={author_pic}
                                alt="author pictur"
                            />
                        </div>
                        <div className="ml-3">
                            <p onClick={() => handleAuthorFillter(author_name)}
                                className="cursor-pointer text-sm font-medium text-gray-900 hover:underline"
                            >
                                {author_name}
                            </p>
                            <div
                                className="flex space-x-1 text-sm text-gray-500"
                            >
                                <time datetime="2020-03-16">
                                    {published_time}
                                </time>
                                <span aria-hidden="true">
                                    &middot;
                                </span>
                                <span> {reading_time} </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import search from '../assets/search.svg';


const debounce = ((callback, delay) => {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(callback, delay);
    }
})

export default function Search() {

    const blogs = useSelector((state) => state.blogs)
    const [allData, setAllData] = useState(blogs);


    const searchHandler = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];

        result = allData.filter((data) => {
            return data.blog_name.search(value) !== -1;
        });
        setAllData(result);
    }

    debounce(searchHandler, 2000);

    return (
        <div
            className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200"
        >
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search" onChange={(e) => searchHandler(e)}
            />
            <img
                className="inline h-6 cursor-pointer"
                src={search}
                alt="Search"
            />
        </div>
    )
}

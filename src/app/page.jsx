'use client';
import Image from "next/image";
import User from "./icons/user.svg";
import Search from "./icons/search.svg";
import { useState } from "react";
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
  };
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div>
      <nav className=" absolute top-0 left-0 right-0 text-white p-2 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Imagini</span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="bg-white p-1 flex text-sm rounded-full md:me-0 focus:ring-4" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <Image className="w-8 h-8 rounded-full" src={User} alt="user photo" />
            </button>
          </div>
          <div className=" absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
              <li>
                <a href="#" className="block py-2 px-3 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Web</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0  md:dark:hover:text-blue-500  md:dark:hover:bg-transparent">Business</a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3  rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Gov</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-screen flex items-center justify-center">
        <div className="sm:w-80 md:w-72 lg:w-1/2 flex justify-center">
          <input type="search"          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress} value={searchQuery} className="text-black p-3 pl-5 pr-12 rounded-full w-full" placeholder="Search here..." />
          <div className="flex justify-end"  onClick={handleSearch}>
            <Image src={Search} className=" absolute mr-3  mt-2 w-8 h-8" alt="search button" />
          </div>
        </div>
      </div>
    </div>
  );
}

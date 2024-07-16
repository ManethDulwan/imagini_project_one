'use client';
import Image from "next/image";
import User from "./icons/user.svg";
import Search from "./icons/search.svg";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();
  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    router.push(`/results?query=${searchQuery}`);
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <div>
      <nav className=" absolute top-0 left-0 right-0 text-white p-2 z-999 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="cursor-pointer self-center text-2xl font-semibold whitespace-nowrap">Imagini</span>
          </a>
          <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="bg-white p-1 flex text-sm rounded-full md:me-0 focus:ring-4" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <Image className="w-8 h-8 rounded-full cursor-pointer" src={User} alt="user photo" />
            </button>
          </div>
          <div className=" absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center">
            <ul className="flex font-medium p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 text-white">
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
        <div className="w-full max-w-lg md:max-w-md lg:max-w-2xl flex justify-center relative">
          <input
            type="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            value={searchQuery}
            className="text-black p-3 pl-5 pr-12 rounded-full w-full ml-[5%] mr-[5%]"
            placeholder="Search here..."
          />
          <div className="absolute inset-y-0 right-[5%] flex items-center pr-3 " onClick={handleSearch}>
            <Image src={Search} className="w-8 h-8 p-1" alt="search button" />
          </div>
        </div>
      </div>
    </div>
  );
}

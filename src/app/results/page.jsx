'use client'
import Image from "next/image";
import User from "../icons/user.svg";
import Search from "../icons/search.svg";
import { useState } from "react";
import en_img from "../images/th.webp"
import { useRouter } from 'next/navigation';
export default function Results() {
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
        <div className=" text-white">
            <nav class=" border-gray-200 bg-blur p-2">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Imagini</span>
                    </a>
                    <div class="flex md:order-2">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search</span>
                        </button>
                        <div class="relative hidden md:block">
                            <div onClick={handleSearch} class="absolute cursor-pointer inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span class="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar" onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleKeyPress} value={searchQuery} class="block w-full p-2 ps-10 text-sm
                            text-gray-900 border rounded-[20px] bg-transparent focus:ring-blue-500 focus:border-blue-500 placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div class="relative mt-3 md:hidden">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-white border rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white bg-transparent dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Web</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Business</a>
                            </li>
                            <li>
                                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Gov</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="w-full flex flex-wrap bg-blur">
                <div class="w-full md:w-2/3  p-4 text-white">
                    <div className="flex">
                        <a href="#" class="text-blue-400 font-bold text-[20px]">World Environment Day</a><a href="#" className="bg-green-500 rounded-full h-1 w-1 flex items-center justify-center p-1 mt-3 ml-3"></a><br />
                    </div>
                    <p class="mt-3 mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                    <div class="w-full flex flex-wrap">
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Background</a><br />
                            <p class="mt-3 mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">UN Environment Resources</a><br />
                            <p class="mt-3 mb-5">Resolution establishing World Environment Day: United Nations Conference on …</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-wrap">
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Beat Plastic Pollution</a><br />
                            <p class="mt-3 mb-5">The theme of this year’s World Environment Day is “land restoration, desertification, …</p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Environment Day Stories</a><br />
                            <p class="mt-3 mb-5">Saudi Arabia strives to regreen deserts to tackle drought and land degradation. In …</p>
                        </div>
                    </div>
                    <div class="w-full md:w-2/3   text-white">
                        <div className="flex">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">World Environment Day</a><a href="#" className="bg-green-500 rounded-full h-1 w-1 flex items-center justify-center p-1 mt-3 ml-3"></a><br />
                        </div>
                        <p class="mt-3 mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                        <div class="w-full flex flex-wrap">
                            <div class="w-full md:w-1/2">
                                <a href="#" class="text-blue-400 font-bold text-[20px]">Background</a><br />
                                <p class="mt-3 mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                            </div>
                            <div class="w-full md:w-1/2">
                                <a href="#" class="text-blue-400 font-bold text-[20px]">UN Environment Resources</a><br />
                                <p class="mt-3 mb-5">Resolution establishing World Environment Day: United Nations Conference on …</p>
                            </div>
                        </div>
                        <div class="w-full flex flex-wrap">
                            <div class="w-full md:w-1/2">
                                <a href="#" class="text-blue-400 font-bold text-[20px]">Beat Plastic Pollution</a><br />
                                <p class="mt-3 mb-5">The theme of this year’s World Environment Day is “land restoration, desertification, …</p>
                            </div>
                            <div class="w-full md:w-1/2">
                                <a href="#" class="text-blue-400 font-bold text-[20px]">Environment Day Stories</a><br />
                                <p class="mt-3 mb-5">Saudi Arabia strives to regreen deserts to tackle drought and land degradation. In …</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="w-full md:w-1/3  p-4 text-white text-center hidden md:block">
                    <Image src={en_img} alt="image" width="300" height="300" class="ml-auto mr-auto" />
                    <p class="mt-5 ml-[5%] mr-[5%]">World Environment Day is celebrated annually on 5 June and encourages awareness and action for the protection of the environment. It is supported by many non-governmental organiz…<a class="text-blue-800" href="https://en.wikipedia.org/wiki/World_Environment_Day">Wikipedia</a></p>
                </div>
            </div>
        </div>
    )
}
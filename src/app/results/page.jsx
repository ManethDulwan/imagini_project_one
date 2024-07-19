'use client'
import Image from "next/image";
import User from "../icons/user.svg";
import Search from "../icons/search.svg";
import MIC from "../icons/mic.png";
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
        <div className=" text-black bg-white">
            <nav class=" border-gray-200 bg-blur p-2">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" /> */}
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Imagini</span>
                    </a>
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button type="button" className=" border bg-white p-1 flex text-sm rounded-full md:me-0 focus:ring-4" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <Image className="w-8 h-8 rounded-full cursor-pointer" src={User} alt="user photo" />
                        </button>
                    </div>
                    <div className=" absolute left-44 right-0">
                        <div className="w-full max-w-lg md:max-w-md lg:max-w-2xl flex justify-center relative">
                            <input
                                type="search"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyPress={handleKeyPress}
                                value={searchQuery}
                                className="shadow border text-black p-3 pl-5 pr-12 rounded-full w-full ml-[5%] mr-[5%]"
                                placeholder="Search here..."
                            />
                            <div className="absolute inset-y-0 right-[5%] flex items-center pr-3 " onClick={handleSearch}>
                                <Image src={MIC} className="w-8 h-8 p-[4px] mr-2" alt="search button" />
                                <Image src={Search} className="w-8 h-8 p-1" alt="search button" />
                            </div>
                        </div>
                    </div>
                    <h1 className=" absolute right-[14%] border pl-3 pr-3 bg-blue-100 p-[5px]">Sign in</h1>
                    <button data-collapse-toggle="navbar-search" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
            </nav>
            <div className="flex font-bold text-[15px]  ml-10">
                <h3 className="ml-5 mr-5 border-b-2 border-blue-500">All</h3>
                <h3 className="ml-5 mr-5 border-b-2 border-gray-300">Web</h3>
                <h3 className="ml-5 mr-5 border-b-2 border-gray-300">Business</h3>
                <h3 className="ml-5 mr-5 border-b-2 border-gray-300">Gov</h3>
            </div>
            <div class="w-[90%] flex flex-wrap ml-10">
                <div class="w-full md:w-2/3  p-4 text-black">
                    <div className="flex mt-5">
                        <a href="#" class="text-blue-400 font-bold text-[20px]">World Environment Day</a><a href="#" className="bg-green-500 rounded-full h-1 w-1 flex items-center justify-center p-1 mt-3 ml-3"></a><br />
                    </div>
                    <p class="mt-3 text-[13px] mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                    <div class="w-full flex flex-wrap">
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Background</a><br />
                            <p class="mt-3 text-[13px] mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">UN Environment Resources</a><br />
                            <p class="mt-3 text-[13px] mb-5">Resolution establishing World Environment Day: United Nations Conference on …</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-wrap">
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Beat Plastic Pollution</a><br />
                            <p class="mt-3 text-[13px] mb-5">The theme of this year’s World Environment Day is “land restoration, desertification, …</p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Environment Day Stories</a><br />
                            <p class="mt-3 text-[13px] mb-5">Saudi Arabia strives to regreen deserts to tackle drought and land degradation. In …</p>
                        </div>
                    </div>
                    <div className="flex mt-8">
                        <a href="#" class="text-blue-400 font-bold text-[20px]">World Environment Day</a><a href="#" className="bg-red-500 rounded-full h-1 w-1 flex items-center justify-center p-1 mt-3 ml-3"></a><h6 className="bg-green-500 text-[13px] text-white mt-1 mb-1 ml-3 mr-1 pl-1 pr-1 rounded-[7px]">business</h6><br />
                    </div>
                    <p class="mt-3 text-[13px] mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                    <div class="w-full flex flex-wrap">
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Background</a><br />
                            <p class="mt-3 text-[13px] mb-5">WEBWhat is World Environment Day? Led by the United Nations Environment Programme (UNEP) and held annually on 5 June since 1973, World Environment Day is the largest global platform for...</p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">UN Environment Resources</a><br />
                            <p class="mt-3 text-[13px] mb-5">Resolution establishing World Environment Day: United Nations Conference on …</p>
                        </div>
                    </div>
                    <div class="w-full flex flex-wrap">
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Beat Plastic Pollution</a><br />
                            <p class="mt-3 text-[13px] mb-5">The theme of this year’s World Environment Day is “land restoration, desertification, …</p>
                        </div>
                        <div class="w-full md:w-1/2">
                            <a href="#" class="text-blue-400 font-bold text-[20px]">Environment Day Stories</a><br />
                            <p class="mt-3 text-[13px] mb-5">Saudi Arabia strives to regreen deserts to tackle drought and land degradation. In …</p>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/3  p-4 text-black text-center hidden md:block mt-5  ">
                    <div className="border  rounded-[15px] pt-3 pb-3">
                        <Image src={en_img} alt="image" width="300" height="300" class="ml-auto mr-auto" />
                        <p class="mt-5 ml-[5%] text-[13px] text-left mr-[5%]">World Environment Day is celebrated annually on 5 June and encourages awareness and action for the protection of the environment. It is supported by many non-governmental organiz…<a class="text-blue-800" href="https://en.wikipedia.org/wiki/World_Environment_Day">Wikipedia</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
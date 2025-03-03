import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className='flex flex-col h-screen overflow-hidden bg-gradient-to-r from-slate-400 to-slate-500'>
      <header className='w-full text-center bg-gradient-to-b from-slate-500 to-slate-600 p-4'>
        <Navbar></Navbar>
      </header>
      <main className='flex-1 overflow-y-scroll'>
        <div className='min-h-screen'>[HOME Main container] </div>
      </main>
      <footer className='w-full text-center p-4'>[footer container]</footer>
    </div>
  );
}

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// <div className='bg-slate-400 min-h-[720px] max-h-[720px] border-4 border-red-500'>
// <header>
//   <nav className='bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700'>
//     <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4'>
//       <a
//         href='#'
//         className='flex items-center space-x-3 rtl:space-x-reverse'>
//         <img
//           src='https://flowbite.com/docs/images/logo.svg'
//           className='h-8'
//           alt='Flowbite Logo'
//         />
//         <span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
//           Flowbite
//         </span>
//       </a>
//       <button
//         data-collapse-toggle='navbar-dropdown'
//         type='button'
//         className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
//         aria-controls='navbar-dropdown'
//         aria-expanded='false'>
//         <span className='sr-only'>Open main menu</span>
//         <svg
//           className='w-5 h-5'
//           aria-hidden='true'
//           xmlns='http://www.w3.org/2000/svg'
//           fill='none'
//           viewBox='0 0 17 14'>
//           <path
//             stroke='currentColor'
//             stroke-linecap='round'
//             stroke-linejoin='round'
//             stroke-width='2'
//             d='M1 1h15M1 7h15M1 13h15'
//           />
//         </svg>
//       </button>
//       <div
//         className='hidden w-full md:block md:w-auto'
//         id='navbar-dropdown'>
//         <ul className='flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
//           <li>
//             <a
//               href='#'
//               className='block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent'
//               aria-current='page'>
//               Home
//             </a>
//           </li>
//           <li>
//             <button
//               id='dropdownNavbarLink'
//               data-dropdown-toggle='dropdownNavbar'
//               className='flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'>
//               Dropdown{" "}
//               <svg
//                 className='w-2.5 h-2.5 ms-2.5'
//                 aria-hidden='true'
//                 xmlns='http://www.w3.org/2000/svg'
//                 fill='none'
//                 viewBox='0 0 10 6'>
//                 <path
//                   stroke='currentColor'
//                   stroke-linecap='round'
//                   stroke-linejoin='round'
//                   stroke-width='2'
//                   d='m1 1 4 4 4-4'
//                 />
//               </svg>
//             </button>
//             <div
//               id='dropdownNavbar'
//               className='z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600'>
//               <ul
//                 className='py-2 text-sm text-gray-700 dark:text-gray-400'
//                 aria-labelledby='dropdownLargeButton'>
//                 <li>
//                   <a
//                     href='#'
//                     className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
//                     Dashboard
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='#'
//                     className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
//                     Settings
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href='#'
//                     className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
//                     Earnings
//                   </a>
//                 </li>
//               </ul>
//               <div className='py-1'>
//                 <a
//                   href='#'
//                   className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
//                   Sign out
//                 </a>
//               </div>
//             </div>
//           </li>
//           <li>
//             <a
//               href='#'
//               className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
//               Services
//             </a>
//           </li>
//           <li>
//             <a
//               href='#'
//               className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
//               Pricing
//             </a>
//           </li>
//           <li>
//             <a
//               href='#'
//               className='block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>
//               Contact
//             </a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   </nav>
// </header>
// <div className='grid min-h-[720px] max-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 '>
//   <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
//     [Main container]
//   </main>
//   <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'>
//     [footer container]
//   </footer>
// </div>
// </div>

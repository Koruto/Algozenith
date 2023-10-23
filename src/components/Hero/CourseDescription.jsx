import Feature from './Feature';
import { BsArrowRightShort } from 'react-icons/bs';

function CourseDescription() {
  return (
    <div className="flex flex-col items-center md:items-start mx-4 my-20 md:my-[9rem] md:ml-[2rem] lg:ml-[4rem] xl:ml-[4rem] 2xl:ml-[11rem] font-dm-sans md:mr-[28rem] lg:mr-[34rem] xl:mr-[41rem]">
      <h1 className="text-white font-rubik text-3xl md:text-2xl lg:text-4xl xl:text-5xl font-extrabold leading-72 tracking-[-2px]">
        Be better at DSA & CP
      </h1>
      <p className="text-xs md:text-base lg:text-lg xl:text-xl font-light tracking-tighter my-6 px-12 md:px-0 lg:pr-[2rem] xl:pr-[4rem] 2xl:pr-[10rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className="flex flex-col md:flex-row items-center order-last md:order-none w-full md:w-auto">
        <button className="flex justify-center items-center bg-gradient-to-br from-[#FFF] to-[#DFF6FF] hover:bg-blue-700 mb-4 md:my-0 w-full md:w-auto px-2 lg:px-10 py-1 rounded-md text-[#05445E] text-center font-bold leading-10 tracking-tighter shadow-[0_0_200px_rgba(255,_255,_255,_0.30),0_4px_200px_#29539B] lg:shadow-none lg:hover:shadow-[0_0_200px_rgba(255,_255,_255,_0.30),0_4px_200px_#29539B] ">
          Join Now
          <BsArrowRightShort size={25} />
        </button>
        <button className="rounded-md bg-gradient-to-r from-[#ffffff4d] mx-4 p-[0.5px] w-full md:w-auto">
          <div className="bg-gradient-to-br from-[#033042] to-[#005C83] rounded-md text-white text-center font-bold leading-10 px-2 lg:px-10 py-1">
            View curriculum
          </div>
        </button>
      </div>
      <div className="flex flex-wrap justify-center md:justify-start sm:mx-10 md:mx-0 md:my-10 xl:pr-10">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
}

export default CourseDescription;

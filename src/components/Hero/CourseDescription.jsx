import Feature from './Feature';
import { BsArrowRightShort } from 'react-icons/bs';

function CourseDescription() {
  return (
    <div className="flex flex-col my-[9rem] mx-[6rem] font-dm-sans mr-[50rem]">
      <h1 className="text-white font-rubik text-5xl font-extrabold leading-72 tracking-[-2px]">
        Be better at DSA & CP
      </h1>
      <p className="text-xl font-light tracking-tighter my-6 pr-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className="flex items-center">
        <button class="flex items-center bg-gradient-to-br from-[#FFF] to-[#DFF6FF] hover:bg-blue-700 px-10 py-1 border border-blue-700 rounded-md text-[#05445E] text-center font-bold leading-10 tracking-tighter">
          Join Now
          <BsArrowRightShort size={25} />
        </button>
        <button class="rounded-md bg-gradient-to-r from-[#ffffff4d] mx-4 p-[0.5px]">
          <div class="bg-gradient-to-br from-[#033042] to-[#005C83] rounded-md text-white text-center font-bold leading-10 px-10 py-1">
            View curriculum
          </div>
        </button>
      </div>
      <div className="flex flex-wrap my-10 pr-10">
        <Feature />
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
}

export default CourseDescription;

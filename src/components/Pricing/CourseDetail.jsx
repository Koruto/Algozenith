import { BsArrowRightShort } from 'react-icons/bs';
import grid from '../../../assets/grid.png';
import vector from '../../../assets/vector.png';
import azLogo from '../../../assets/az.png';
import CourseFeature from './CourseFeature';

function CourseDetail() {
  return (
    <div className="border border-gray-400 w-96 h-[45rem] font-rubik rounded-md mb-12 md:mb-0 z-20 relative overflow-hidden shadow-[0_12px_45px_rgba(5,_68,_94,_0.35)] md:shadow-[0_20px_75px_rgba(5,_68,_94,_0.35)]">
      <div className="w-full h-[25%] p-7 flex items-center -space-x-5">
        <div>
          <p className="text-sm font-bold font-dm-sans text-[#0F0F0F]">
            Premium Victory Batch
          </p>
          <p className="text-4xl line-through decoration-[2px] font-rubik font-bold text-[#818181] mt-2 mb-1 ">
            ₹19,999
          </p>
          <p className="text-5xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3F6FC1] to-[#05445E] tracking-[-2px]">
            ₹13,999
          </p>
        </div>

        <img
          src={azLogo}
          alt="az logo"
          className="absolute opacity-[8%] h-48 object-cover right-[-2rem] top-[3px]"
        />
      </div>
      <div className="relative w-full h-[75%] bg-[#05425C] text-white flex flex-col space-y-6 pt-4">
        <img
          className="absolute inset-0 w-full h-full opacity-5 -z-1"
          src={grid}
          alt="Grid"
        />
        <CourseFeature content="100+ Hrs Live Content" />
        <CourseFeature content="50+ Hrs Contest" />
        <CourseFeature content="500+ Problems" />
        <CourseFeature content="Includes an interview bootcamp and access to a mentor network" />
        <CourseFeature content="Enjoy access to our content for one year (paid extentions available)" />
        <CourseFeature content="Flexible payment options, including no-cost EMI, are available." />

        <button
          style={{ boxShadow: '0 0 150px rgba(255, 255, 255, 0.7)' }}
          className="rounded-md px-28 py-2 w-[21rem] mx-auto font-dm-sans font-bold bg-gradient-to-br from-[#FFF] to-[#DFF6FF] text-[#043C53] flex items-center justify-center shadow-[0_0_150px_rgba(255,_255,_255,_0.30)]"
        >
          Join Now <BsArrowRightShort className="" size={25} />
        </button>
      </div>
    </div>
  );
}

export default CourseDetail;

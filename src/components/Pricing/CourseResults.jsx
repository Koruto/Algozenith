function CourseResults() {
  return (
    <div className="w-[40rem] z-20 my-24 font-dm-sans">
      <h1 className="md:text-5xl text-4xl text-center md:text-left font-extrabold md:w-[28rem] px-40 md:px-0 font-rubik">
        Invest in skills,{' '}
        <span className="text-[#05445E] font-rubik">earn 10x</span> of what you
        paid.
      </h1>
      <p className="text-sm mt-10 md:mb-16 mb-7 md:w-[30rem] w-full text-black text-center md:text-left px-40 md:px-0 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 mb-16 md:mb-0 px-36 md:px-0">
        <div className="flex items-center gap-4">
          <div className="md:bg-[#D9D9D9] border border-gray-400 md:border-none w-8 md:w-12 h-8 md:h-12 rounded-md" />{' '}
          <div>
            <h2 className="font-semibold md:text-lg text-xs">1.2 Cr/Year</h2>
            <p className="text-base">highest fresher package</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="md:bg-[#D9D9D9] border border-gray-400 md:border-none w-8 md:w-12 h-8 md:h-12 rounded-md" />{' '}
          <div>
            <h2 className="font-semibold flex md:text-lg text-xs">
              Multiple{' '}
              <p className="pl-1" dangerouslySetInnerHTML={{ __html: '&lt' }} />{' '}
              100 Ranks
            </h2>
            <p className="text-base">in kickstart last year</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="md:bg-[#D9D9D9] border border-gray-400 md:border-none w-8 md:w-12 h-8 md:h-12 rounded-md" />{' '}
          <div>
            <h2 className="font-semibold md:text-lg text-xs">1000+ Offers</h2>
            <p className="text-base">from top companies</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="md:bg-[#D9D9D9] border border-gray-400 md:border-none w-8 md:w-12 h-8 md:h-12 rounded-md" />{' '}
          <div>
            <h2 className="font-semibold md:text-lg text-xs">
              Trusted by IITians
            </h2>
            <p className="text-base">for their career prep</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseResults;

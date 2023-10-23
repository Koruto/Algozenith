import CourseDetail from './CourseDetail';
import CourseFeature from './CourseResults';
import Background from './Background';

function Pricing() {
  return (
    <div className=" bg-white relative text-black">
      <div className="flex flex-col lg:flex-row items-center justify-center 2xl:justify-evenly md:m-10 lg:m-20">
        <CourseFeature />
        <CourseDetail />
      </div>
      <Background />
    </div>
  );
}

export default Pricing;

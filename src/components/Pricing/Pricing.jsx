import CourseDetail from './CourseDetail';
import CourseFeature from './CourseResults';
import Background from './Background';

function Pricing() {
  return (
    <div className="h-[55rem] bg-white relative text-black">
      <div className="flex justify-center m-20">
        <CourseFeature />
        <CourseDetail />
      </div>
      <Background />
    </div>
  );
}

export default Pricing;

import AlgozenithLogo from './AlgozenithLogo';
import CourseDescription from './CourseDescription';

function Hero() {
  return (
    <div className="h-[36rem] flex bg-gradient-to-r from-[#05445E] to-[#022534]">
      {/* Add background to this div, the linear one */}
      <CourseDescription />
      <AlgozenithLogo />
    </div>
  );
}

export default Hero;

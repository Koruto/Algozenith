import AlgozenithLogo from './AlgozenithLogo';
import CourseDescription from './CourseDescription';

function Hero() {
  return (
    <div className="h-[40rem] flex bg-[url('assets/texture.png'),url('assets/text2.png'),linear-gradient(270deg,#05445E,#022534)] bg-blend-color-dodge">
      <CourseDescription />
      <AlgozenithLogo />
    </div>
  );
}

export default Hero;

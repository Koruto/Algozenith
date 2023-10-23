import Graph from '../../../assets/graph.png';

function Background() {
  return (
    <img
      className="h-full w-full hidden lg:block bg-gradient-to-r to-[#F6FAFF] from-[rgba(232, 240, 255, 0.00)] absolute top-0"
      src={Graph}
      alt="Graph Background"
    />
  );
}

export default Background;

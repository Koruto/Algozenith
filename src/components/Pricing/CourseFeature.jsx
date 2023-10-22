function CourseFeature(props) {
  return (
    <div className="flex items-center text-sm mx-6">
      <div className="w-12 h-12 relative mr-4">
        <div className="absolute inset-0 bg-transparent border border-[#CFF1FF] border-t-[1px] border-b-[0.5px] rounded-lg border-opacity-40"></div>
      </div>
      <span className="w-72">{props.content}</span>
    </div>
  );
}

export default CourseFeature;

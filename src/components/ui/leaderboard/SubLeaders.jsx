import UserIcon from "../../svg/userIcon.svg";
function SubLeaders({ data, children }) {
  return (
    <div className="flex flex-col items-center text-white text-xl">
      <span className=" text-center leading-4 text-lg">
        {children}
        <br />
        🔻
      </span>
      <img src={UserIcon} className="bg-[#fffeff] p-4 h-22 rounded-lg"></img>
      <div className="mt-2">{data.name}</div>
      <div>{data.score}</div>
    </div>
  );
}

export default SubLeaders;

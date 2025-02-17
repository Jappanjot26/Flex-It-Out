import UserIcon from "../../svg/userIcon.svg";
import King from "../../../img/King.png";
function Leader({ data }) {
  return (
    <div className="flex flex-col items-center text-white hanken text-lg xl:text-xl self-start">
      <img src={King}></img>
      <img
        src={UserIcon}
        className="bg-[#fffeff] p-4 h-18 xl:h-22 rounded-lg md:h-20"
      ></img>
      <div className="mt-2">{data.name}</div>
      <div>{data.score}</div>
    </div>
  );
}

export default Leader;

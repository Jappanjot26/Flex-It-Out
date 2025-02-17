function OtherPositions({ data }) {
  return (
    <div className="bg-white p-3 rounded-lg px-6 text-md md:text-lg xl:text-xl font-semibold hankens flex w-64 md:w-84 justify-between mb-2">
      <span>{data.position}</span>
      <span>{data.name}</span>
      <span className="bg-main text-black p-1 px-2 rounded-lg">
        {data.score}
      </span>
    </div>
  );
}

export default OtherPositions;

function TestinomialCard({ data }) {
  return (
    <div className="flex flex-col hanken font-semibold text-black xl:text-2xl w-full text-md h-5/6 xl:h-full">
      <img src={data.img} className="h-1/2" />
      <div className="bg-main p-8 flex flex-col w-full h-1/2 ">
        <span className="h-3/4 text-justify">{data.review}</span>
        <br />
        <span className="h-1/4">
          {data.name}, {data.age}
        </span>
      </div>
    </div>
  );
}

export default TestinomialCard;

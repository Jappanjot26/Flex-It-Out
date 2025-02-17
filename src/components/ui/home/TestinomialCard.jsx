function TestinomialCard({ data }) {
  return (
    <div className="flex flex-col hanken font-semibold text-black w-108 text-2xl">
      <img src={data.img} className="h-72" />
      <div className="bg-main p-8 flex flex-col h-72">
        <span className="h-3/4 text-justify">{data.review}</span>
        <br />
        <span>
          {data.name}, {data.age}
        </span>
      </div>
    </div>
  );
}

export default TestinomialCard;

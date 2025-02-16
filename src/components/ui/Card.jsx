import { Link } from "react-router-dom";
function Card({ excercise }) {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-section-200 text-light bg-clip-border text-gray-700 shadow-md my-4">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={excercise.img} alt={excercise.name} />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {excercise.name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {excercise.description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <Link
          to={`/excercise/${excercise.name.toLowerCase()}`}
          data-ripple-light="true"
          type="button"
          className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Choose
        </Link>
      </div>
    </div>
  );
}

export default Card;

import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <div className="grid place-items-center	h-3/5 w-11/12 grid-rows-6 sm:h-4/5 lg:h-11/12 lg:w-4/5 xl:w-3/5 ">
      <div className=" w-full h-full row-span-5 gb-4">
        <iframe
          className="w-full h-full aspect-video"
          src="https://www.youtube.com/embed/Ne-3i09lXSA"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        >
        </iframe>
      </div>

      <div className="btn">
        <Link to="/user-form">
          <button className="px-5 py-2 rounded-full border border-solid	bg-violet-500 hover:bg-violet-400 active:bg-violet-600 font-semibold text-white shadow-md" >Register Now</button>
        </Link>
      </div>

    </div>
  )
}

export default HomePage




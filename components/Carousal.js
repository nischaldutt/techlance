import Image from "next/image";

const Carousal = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="carousel-item active relative float-left w-full h-56">
          <Image
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="carousel-item active relative float-left w-full h-56">
          <Image
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="carousel-item active relative float-left w-full h-56">
          <Image
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousal;

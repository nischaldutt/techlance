import Image from "next/image";

const Carousal = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-[48rem] overflow-hidden rounded-lg">
        <div className="absolute right-0 rounded-tr-lg rounded-bl-lg z-10 bg-[rgba(0,0,0,0.8)] text-white text-center p-2">
          <div className="font-bold text-2xl">5.0</div>
          <div className="text-sm">568 Reviews</div>
        </div>
        <div className="carousel-item active relative float-left w-[50rem] h-[530px]">
          <Image
            src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/173102/biz_photo/a0c65af40bdf488c9ed98b92bd6780-roy-master-barber-biz-photo-c89d068112214cb2a81d03576c3b58-booksy.jpeg?size=640x427"
            className="block w-full"
            alt="..."
            layout="fill"
          />
        </div>
        <div className="carousel-item relative float-left w-[50rem] h-[530px]">
          <Image
            src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/398145/biz_photo/4665e1bd66b74e108a4f8d8cfa775c-yoko-dapper-cuts-biz-photo-0448cad1ebdb4af6a7cd5324b0fb29-booksy.jpeg?size=640x427"
            className="block w-full"
            alt="..."
            layout="fill"
          />
        </div>
        <div className="carousel-item relative float-left w-[50rem] h-[530px]">
          <Image
            src="https://d2zdpiztbgorvt.cloudfront.net/region1/us/173102/biz_photo/a0c65af40bdf488c9ed98b92bd6780-roy-master-barber-biz-photo-c89d068112214cb2a81d03576c3b58-booksy.jpeg?size=640x427"
            className="block w-full"
            alt="..."
            layout="fill"
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

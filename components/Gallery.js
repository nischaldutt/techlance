import Link from "next/link";
import Image from "next/image";

const Gallery = () => {
  return (
    <section className="border border-red-900 overflow-hidden text-gray-700">
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="border border-black flex flex-wrap w-1/2">
            <div className="border border-black relative w-full h-[200px] p-1 md:p-2">
              <Image
                alt="gallery"
                className="block object-cover object-center rounded-lg"
                src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

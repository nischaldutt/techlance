import Link from "next/link";
import Image from "next/image";

const Gallery = ({ images }) => {
  return (
    <section className="grid grid-cols-3 gap-2 relative border border-black">
      {images.map((image, index) => {
        return index < 5 ? (
          <div key={index} className="relative w-full h-[150px]">
            <Image
              src={image.src}
              layout="fill"
              objectFit="cover"
              alt="..."
              className="rounded-lg"
            />
          </div>
        ) : null;
      })}

      <div className="border border-black grid place-items-center rounded-lg">
        <p>See More</p>
      </div>
    </section>
  );
};

export default Gallery;

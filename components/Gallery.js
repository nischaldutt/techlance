import Link from "next/link";
import Image from "next/image";

const Gallery = ({ images }) => {
  return (
    <section className="grid gird-cols-1 gap-2">
      {images.map((image, index) => {
        return index < 5 ? (
          <Image
            key={index}
            src={image.src}
            width={280}
            height={200}
            objectFit="cover"
            alt="..."
          />
        ) : null;
      })}
    </section>
  );
};

export default Gallery;

import Image from "next/image";
import { Carousel } from "antd";

const AUTOPLAY_SPEED = 5000;

const Carousal = () => {
  return (
    <section className="relative overflow-hidden rounded-lg">
      <div className="absolute right-0 rounded-tr-lg rounded-bl-lg z-10 bg-[rgba(0,0,0,0.5)] text-white text-center p-1">
        <div className="font-bold text-lg">5.0</div>
        <div className="text-[11px]">568 Reviews</div>
      </div>
      <Carousel effect="fade" autoplay autoplaySpeed={AUTOPLAY_SPEED}>
        <div className="active relative float-left h-48 md:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="..."
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="relative float-left h-48 md:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="relative float-left h-48 md:h-[500px]">
          <Image
            src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt="..."
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Carousel>
    </section>
  );
};

export default Carousal;

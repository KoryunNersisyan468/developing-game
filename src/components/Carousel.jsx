import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ blog }) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const validVideos = blog.videos.filter((video) => video.trim() !== "");
  const validImages = blog.images
    .slice(1)
    .filter((image) => image.trim() !== "");

  if (validVideos.length === 0 && validImages.length === 0) {
    return null;
  }

  if (validVideos.length === 1 && validImages.length === 0) {
    return (
      <video controls className="h-[350px] mt-20 rounded-lg">
        <source
          src={`${import.meta.env.BASE_URL}${validVideos[0]}`}
          type="video/mp4"
        />
      </video>
    );
  }

  if (validVideos.length === 0 && validImages.length === 1) {
    return (
      <img
        src={`${import.meta.env.BASE_URL}${validImages[0]}`}
        alt="single-image"
        className="h-[350px] mt-20 rounded-lg"
      />
    );
  }

  return (
    <div className="py-8 px-1 w-full rounded-2xl text-center bg-gray-300">
      <Slider {...settings}>
        {validVideos.map((video, index) => (
          <div key={`video-${index}`} className="px-2">
            <video controls className="w-full h-96 rounded-lg">
              <source
                src={`${import.meta.env.BASE_URL}${video}`}
                type="video/mp4"
              />
            </video>
          </div>
        ))}

        {validImages.map((image, index) => (
          <div key={`image-${index}`} className="px-2">
            <img
              src={`${import.meta.env.BASE_URL}${image}`}
              alt={`image-${index}`}
              className="w-full h-96 rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

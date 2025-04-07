import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel({ blog }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const holdTimer = useRef(null);
  const holdThreshold = 300;

  const validVideos = blog.videos.filter((video) => video.trim() !== "");
  const validImages = blog.images.slice(1).filter((img) => img.trim() !== "");
  const fullImageList = validImages.map(
    (img) => `${import.meta.env.BASE_URL}${img}`
  );

  const blockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unblockScroll = () => {
    document.body.style.overflow = "auto";
  };

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
    blockScroll();
  };

  const closeModal = () => {
    setIsOpen(false);
    unblockScroll();
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % fullImageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? fullImageList.length - 1 : prev - 1
    );
  };

  const handleMouseDown = () => {
    holdTimer.current = Date.now();
  };

  const handleClickImage = (index) => {
    if (holdTimer.current && Date.now() - holdTimer.current < holdThreshold) {
      openModal(index);
    }
    holdTimer.current = null;
  };

  useEffect(() => {
    return () => unblockScroll();
  }, []);

  if (validVideos.length === 0 && validImages.length === 0) return null;

  if (validVideos.length === 1 && validImages.length === 0) {
    return (
      <video controls className="sm:h-[350px] h-96 mt-20 rounded-lg">
        <source
          src={`${import.meta.env.BASE_URL}${validVideos[0]}`}
          type="video/mp4"
        />
      </video>
    );
  }

  if (validVideos.length === 0 && validImages.length === 1) {
    const src = fullImageList[0];
    return (
      <>
        <img
          src={src}
          alt="single-image"
          className="sm:h-[350px] h-64 mt-20 rounded-lg cursor-pointer"
          onMouseDown={handleMouseDown}
          onClick={() => handleClickImage(0)}
        />

        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              className="absolute top-4 right-4 text-white z-50"
              onClick={closeModal}
            >
              <AiOutlineClose size={32} />
            </button>
            <img
              src={fullImageList[currentIndex]}
              alt="fullscreen"
              className="max-w-full max-h-full"
            />
          </div>
        )}
      </>
    );
  }

  return (
    <div className="py-8 px-1 w-full rounded-2xl text-center bg-gray-300">
      <Slider
        dots={true}
        arrows={false}
        infinite={true}
        speed={500}
        slidesToShow={3}
        slidesToScroll={1}
        responsive={[
          { breakpoint: 1024, settings: { slidesToShow: 2 } },
          { breakpoint: 768, settings: { slidesToShow: 1 } },
        ]}
      >
        {validImages.map((image, index) => {
          const src = fullImageList[index];
          return (
            <div key={`image-${index}`} className="px-2">
              <img
                src={src}
                alt={`image-${index}`}
                className="w-full sm:h-96 h-64 rounded-lg cursor-pointer"
                onMouseDown={handleMouseDown}
                onClick={() => handleClickImage(index)}
              />
            </div>
          );
        })}

        {validVideos.map((video, index) => (
          <div key={`video-${index}`} className="px-2">
            <video controls className="w-full sm:h-96 h-64 rounded-lg">
              <source
                src={`${import.meta.env.BASE_URL}${video}`}
                type="video/mp4"
              />
            </video>
          </div>
        ))}
      </Slider>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={closeModal}
          >
            <AiOutlineClose size={32} />
          </button>
          <img
            src={fullImageList[currentIndex]}
            alt="fullscreen"
            className="max-w-full max-h-full"
          />
          {fullImageList.length > 1 && (
            <>
              <button
                className="absolute left-4 text-white z-50"
                onClick={prevImage}
              >
                <AiOutlineLeft size={48} />
              </button>
              <button
                className="absolute right-4 text-white z-50"
                onClick={nextImage}
              >
                <AiOutlineRight size={48} />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

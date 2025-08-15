import { useState, useEffect, useCallback } from "react";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LazyImage from "./LazyImage";

export default function Carousel({ blog }) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const closeModal = useCallback(() => {
    setIsOpen(false);
    unblockScroll();
  }, []);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % fullImageList.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? fullImageList.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      unblockScroll();
    };
  }, [closeModal]);

  if (validVideos.length === 0 && validImages.length === 0) return null;

  if (validVideos.length === 1 && validImages.length === 0) {
    return (
      <video
        controls
        preload="metadata"
        loading="lazy"
        className="sm:h-[350px] h-96 mt-20 rounded-lg"
      >
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
        <div onClick={() => openModal(0)}>
          <LazyImage
            src={src}
            alt="single-image"
            className="sm:h-[350px] h-64 mt-20 rounded-lg cursor-pointer"
          />
        </div>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300">
            <button
              className="absolute top-4 right-4 text-white z-50"
              onClick={closeModal}
            >
              <AiOutlineClose size={32} />
            </button>
            <LazyImage
              src={fullImageList[currentIndex]}
              alt="fullscreen"
              className="w-full h-full object-contain"
            />
          </div>
        )}
      </>
    );
  }

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={16}
        slidesPerView={3}
        navigation
        style={{
          "--swiper-pagination-color": "#ffffffb2",
          "--swiper-pagination-bullet-inactive-color": "#ffffff77",
          "--swiper-navigation-color": "#ffffffff",
          "--swiper-navigation-size": "3rem",
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 3 },
        }}
      >
        {validImages.map((image, index) => {
          const src = fullImageList[index];
          return (
            <SwiperSlide key={`image-${index}`}>
              <div onClick={() => openModal(index)}>
                <LazyImage
                  src={src}
                  alt={`image-${index}`}
                  className="w-full sm:h-96 h-64 rounded-lg cursor-pointer"
                />
              </div>
            </SwiperSlide>
          );
        })}
        {validVideos.map((video, index) => (
          <SwiperSlide key={`video-${index}`}>
            <video
              preload="metadata"
              loading="lazy"
              controls
              className="w-full sm:h-96 h-64 rounded-lg"
            >
              <source
                src={`${import.meta.env.BASE_URL}${video}`}
                type="video/mp4"
              />
            </video>
          </SwiperSlide>
        ))}
      </Swiper>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 transition-opacity duration-300">
          <button
            className="absolute top-4 right-4 text-white z-50"
            onClick={closeModal}
          >
            <AiOutlineClose size={32} />
          </button>
          <LazyImage
            src={fullImageList[currentIndex]}
            alt="fullscreen"
            className="w-full h-full object-contain"
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

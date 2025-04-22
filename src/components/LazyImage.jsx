import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyImage({ src, alt, className }) {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      className={className}
    />
  );
}

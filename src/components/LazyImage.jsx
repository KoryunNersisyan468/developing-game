import { LazyLoadImage } from "react-lazy-load-image-component";

export default function LazyImage({ src, alt, className }) {
  return (
    <LazyLoadImage src={src} alt={alt} className={className} loading="lazy" />
  );
}

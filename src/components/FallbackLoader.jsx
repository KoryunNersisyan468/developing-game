import { FadeLoader } from "react-spinners";

export function FallbackLoader() {
  return (
    <div className="w-full flex text-center justify-center items-center h-[calc(100vh-124px)] md:h-[calc(100vh-78px)]">
      <FadeLoader />
    </div>
  );
}

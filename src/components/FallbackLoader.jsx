import { FadeLoader } from "react-spinners";

export function FallbackLoader() {
  return (
    <div className="w-full flex justify-center items-center h-[93vh]">
      <FadeLoader />
    </div>
  );
}

import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaBehance,
  FaGithub,
} from "react-icons/fa";

export default function UserCard({
  src,
  nameFL,
  description,
  facebook,
  instagram,
  tiktok,
  behance,
  github,
}) {
  return (
    <div className="w-[340px] min-h-[500px] h-auto bg-linear-to-r from-purple-200 via-purple-100 to-purple-200 dark:from-blue-200 dark:via-blue-100 dark:to-blue-200 border-4 transition-all duration-200 dark:border-blue-300 border-purple-300 rounded-2xl flex gap-5 flex-col p-5 justify-around items-center">
      <div className="rounded-full w-32 h-32">
        <LazyImage
          src={src}
          className="w-full rounded-full h-full"
          alt="UserCard"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <div className="text-2xl text-center">{nameFL}</div>
        <div className="flex gap-6 text-center justify-center items-center flex-col">
          <div className="text-sm">{description}</div>
          <div className="flex justify-around items-center gap-6">
            {facebook && (
              <a target="blank" href={facebook}>
                <FaFacebook size={32} />
              </a>
            )}

            {instagram && (
              <a target="blank" href={instagram}>
                <FaInstagram size={32} />
              </a>
            )}

            {tiktok && (
              <a target="blank" href={tiktok}>
                <FaTiktok size={32} />
              </a>
            )}

            {behance && (
              <a target="blank" href={behance}>
                <FaBehance size={32} />
              </a>
            )}

            {github && (
              <a target="blank" href={github}>
                <FaGithub size={32} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

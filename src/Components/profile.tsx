import Image from "next/image";

export default function Profile(): JSX.Element {
  return (
    <div
      className="relative size-32 rounded-full overflow-hidden border-4 border-[#5BD124]"
    >
      <Image
        src="/profile.jpg"
        alt="Profile Picture"
        fill
        className="rounded-full object-cover"
      />
    </div>
  );
}


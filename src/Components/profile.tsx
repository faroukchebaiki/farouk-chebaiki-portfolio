import Image from "next/image";
import React from "react";

 const Profile  =() => {
  return (
    <div
      className="mt-auto relative size-40 rounded-full overflow-hidden border-[6px] bg-white border-[#5BD124]"
    >
      <Image
        src="/profile.png"
        alt="Profile Picture"
        fill
        className="rounded-full object-cover"
      />
    </div>
  );
}
export default Profile;


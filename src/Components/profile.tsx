import Image from "next/image";
import React from "react";

 const Profile  =() => {
  return (
    <div
      className="mt-auto relative size-40 rounded-full overflow-hidden border-6 border-[#5BD124]"
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
export default Profile;

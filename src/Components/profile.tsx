'use client';

import Image from "next/image";
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    <motion.div
      className="mt-auto relative size-40 rounded-full overflow-hidden border-6 bg-white border-[#5BD124]"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      <Image
        src="/profile.png"
        alt="Profile Picture"
        fill
        className="rounded-full object-cover"
      />
    </motion.div>
  );
};
export default Profile;

import React from "react";

interface ProfilePicProps {
  src: string;
  alt?: string;
  size?: number;
}

const ProfilePic: React.FC<ProfilePicProps> = ({
  src,
  alt = "Profile Picture",
  size = 100,
}) => {
  return (
    <div
      className={`w-${size} h-${size} rounded-full overflow-hidden border border-gray-300 shadow-md`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {/*eslint-disable-next-line */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default ProfilePic;

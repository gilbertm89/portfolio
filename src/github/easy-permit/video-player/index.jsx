import { useEffect, useRef } from "react";

export const VideoPlayer = ({ src, className, ...otherProps }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref?.current?.play();
  }, []);

  return (
    <div className={`relative ${className}`}>
      <video ref={ref} className="absolute" {...otherProps}>
        <source src={src} />
      </video>
    </div>
  );
};

//https://www.linkedin.com/posts/easy-permit_easypermit-the-smart-way-of-finding-and-activity-6957747010602942464-OJPk?utm_source=share&utm_medium=member_desktop

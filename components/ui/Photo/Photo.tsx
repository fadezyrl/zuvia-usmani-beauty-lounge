import Image from "next/image";
import type { CSSProperties } from "react";
import "./photo.css";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  style?: CSSProperties;
  objectPosition?: string;
};

export const Photo = ({
  src,
  alt,
  className = "",
  sizes = "(max-width: 900px) 90vw, 40vw",
  priority = false,
  style,
  objectPosition = "center",
}: PhotoProps): React.JSX.Element => {
  return (
    <div className={`ph ${className}`.trim()} style={style}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition }}
      />
    </div>
  );
};

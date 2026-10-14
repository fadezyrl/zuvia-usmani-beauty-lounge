import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export const Photo = ({
  src,
  alt,
  className = "",
  sizes = "(max-width: 900px) 90vw, 40vw",
  priority = false,
}: PhotoProps): React.JSX.Element => {
  return (
    <div className={`ph ${className}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

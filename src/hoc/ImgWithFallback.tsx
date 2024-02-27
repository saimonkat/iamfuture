import React from "react";

const ImgWithFallback = ({
  src,
  fallback,
  width,
  height,
  type = 'image/webp',
  alt,
  pictureClass,
  imgClass,
  sizes
}: {
  src: string,
  fallback: string,
  width?: number | string,
  height?: number | string,
  type?: string,
  alt: string,
  pictureClass?: string,
  imgClass?: string,
  sizes?: string
}) => {
  return (
    <picture className={pictureClass}>
      <source srcSet={src} type={type} />
      <img src={fallback} width={width} height={height} alt={alt} className={imgClass} sizes={sizes}/>
    </picture>
  )
}

export default ImgWithFallback;

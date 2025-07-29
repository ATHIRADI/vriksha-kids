"use client";

export default function ImageBackground({ image }) {
  return (
    <div
      className="absolute inset-0 bg-fixed bg-cover bg-center z-[-1]"
      style={{
        backgroundImage: `url(${image})`,
      }}
    />
  );
}

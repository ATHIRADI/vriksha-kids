"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";


const ReviewCard = ({ image, name, feedback, className = "" }) => {
  return (
    <Card
      className={`py-4 shadow-none border-dotted bg-tertiary border-amber-400 text-text-dark rounded-md text-center ${className}`}
    >
      <CardContent className="flex flex-col  items-center space-y-6 ">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="rounded-full w-24 h-24 object-cover"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-muted" />
        )}
        <p className="text-center">{feedback}</p>
        <p className="text-effect body-small">{name}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

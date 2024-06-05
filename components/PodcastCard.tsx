import React from "react";
import Image from "next/image";
export default function PodcastCard({
  podcastId,
  title,
  description,
  imgURL,
}: {
  podcastId: number;
  title: string;
  description: string;
  imgURL: string;
}) {
  return (
    <div className="cursor-point">
      <figure className="flex flex-col gap-2">
        <Image className=" aspect-square w-fit h-full rounded-xl 2xl:size-[200px]" src={imgURL} alt="img" width={175} height={175} />
        <div className="flex flex-col">
        <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
         <h2 className="text-12 truncate font-normal capitalize">{description}</h2>
        </div>
      </figure>
    </div>
  );
}

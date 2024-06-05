"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { podcastData } from "@/app/constants";
import PodcastCard from "@/components/PodcastCard";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-9 flex flex-col gap-9">
      <section className="flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">Trending Podcasts</h1>
        <div className="flex  flex-row items-center justify-between p-2">
          {tasks?.map(({ _id, text }) => <div key={_id}>{text}</div>)}
        </div>
        <div className="podcast_grid">
          {podcastData.map(({ id, title, description, imgURL }: any) => (
            <PodcastCard
              key={id}
              title={title}
              description={description}
              imgURL={imgURL}
              podcastId={id}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

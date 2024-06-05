import React from "react";

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-20 font-bold text-white-1">Discover page</h1>
      <p>Podcast detail for the {params?.podcastId}</p>
    </div>
  );
};

export default PodcastDetails;

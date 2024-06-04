import React from 'react'

const PodcastDetails = ({params}: {params: {podcastId: string}}) => {
  return (
    <div>Podcast detail for the {params?.podcastId}</div>
  )
}

export default PodcastDetails
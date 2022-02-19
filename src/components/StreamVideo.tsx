import React, { FC } from 'react';
import { Stream } from '../@types';
import { useEmbedUrl } from '../hooks';

export const StreamVideo: FC<Omit<Stream, 'id'>> = ({ service, username }) => {
  const streamUrl = useEmbedUrl('video', service, username);

  if (!streamUrl) return null;

  return (
    <iframe
      src={streamUrl}
      height='auto'
      width='100%'
      allowFullScreen
      frameBorder={0}
      title={`${username}'s ${service} Stream`}
    />
  );
};

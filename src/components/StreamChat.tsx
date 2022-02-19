import React, { FC } from 'react';
import { Stream } from '../@types';
import { useEmbedUrl } from '../hooks';

export const StreamChat: FC<Omit<Stream, 'id'>> = ({ service, username }) => {
  const streamUrl = useEmbedUrl('chat', service, username);

  if (!streamUrl) return null;

  return (
    <iframe
      src={streamUrl}
      height='100%'
      width='100%'
      allowFullScreen
      frameBorder={0}
      title={`${username}'s ${service} Chat`}
    />
  );
};

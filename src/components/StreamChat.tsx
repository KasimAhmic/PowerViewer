import React, { FC, useMemo } from 'react';
import { Stream } from '../@types';

export const StreamChat: FC<Omit<Stream, 'id'>> = ({ service, username }) => {
  const streamUrl = useMemo<string>(() => {
    switch (service) {
      case 'Twitch':
        return `https://www.twitch.tv/embed/${username}/chat?parent=localhost&darkpopout`;
      case 'YouTube':
        return `https://www.youtube.com/live_chat?v=${username}&embed_domain=localhost`;
      case 'Trovo':
        return `https://trovo.live/chat/${username}`;
      default:
        return '';
    }
  }, [service, username]);

  if (!Boolean(streamUrl)) return null;

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

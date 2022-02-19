import React, { FC, useMemo } from 'react';
import { Stream } from '../@types';

export const StreamVideo: FC<Omit<Stream, 'id'>> = ({ service, username }) => {
  const streamUrl = useMemo<string>(() => {
    switch (service) {
      case 'Twitch':
        return `https://player.twitch.tv/?channel=${username}&parent=localhost`;
      case 'YouTube':
        return `https://www.youtube.com/embed/live_stream?channel=${username}`;
      case 'Trovo':
        return `https://trovo.live/embed/player?streamername=${username}`;
      default:
        return '';
    }
  }, [service, username]);

  if (!Boolean(streamUrl)) return null;

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

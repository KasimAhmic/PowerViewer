import { useMemo } from 'react';
import { StreamService } from '../@types';
import { hostname } from '../util';

export const useEmbedUrl = (
  resource: 'video' | 'chat',
  service: StreamService,
  username: string,
): string | null => {
  return useMemo(() => {
    switch (service) {
      case 'Twitch':
        return resource === 'video'
          ? `https://player.twitch.tv/?channel=${username}&parent=${hostname()}`
          : `https://www.twitch.tv/embed/${username}/chat?parent=${hostname()}&darkpopout`;

      case 'YouTube':
        return resource === 'video'
          ? `https://www.youtube.com/embed/live_stream?channel=${username}`
          : `https://www.youtube.com/live_chat?v=${username}&embed_domain=${hostname()}`;

      case 'Trovo':
        return resource === 'video'
          ? `https://trovo.live/embed/player?streamername=${username}`
          : `https://trovo.live/chat/${username}`;

      default:
        return null;
    }
  }, [resource, service, username]);
};

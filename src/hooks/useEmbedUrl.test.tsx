import { renderHook } from '@testing-library/react-hooks';
import { Resource, useEmbedUrl } from './useEmbedUrl';
import { StreamService } from '../@types';

type TestArray = [string | null, StreamService, Resource, string][];

describe('useEmbedUrl', () => {
  test.each([
    ['https://player.twitch.tv/?channel=jest&parent=kasimahmic.github.io', 'Twitch', 'video', 'jest'],
    [
      'https://www.twitch.tv/embed/jest/chat?parent=kasimahmic.github.io&darkpopout',
      'Twitch',
      'chat',
      'jest',
    ],
    ['https://www.youtube.com/embed/live_stream?channel=jest', 'YouTube', 'video', 'jest'],
    ['https://www.youtube.com/live_chat?v=jest&embed_domain=kasimahmic.github.io', 'YouTube', 'chat', 'jest'],
    [null, 'Facebook', 'video', 'jest'],
    [null, 'Facebook', 'chat', 'jest'],
    [null, 'TikTok', 'video', 'jest'],
    [null, 'TikTok', 'chat', 'jest'],
    [null, 'Reddit', 'video', 'jest'],
    [null, 'Reddit', 'chat', 'jest'],
    ['https://trovo.live/embed/player?streamername=jest', 'Trovo', 'video', 'jest'],
    ['https://trovo.live/chat/jest', 'Trovo', 'chat', 'jest'],
  ] as TestArray)('returns %s for %s %s %s', (expected, service, resource, username) => {
    const { result } = renderHook(() => useEmbedUrl(resource, service, username));

    expect(result.current).toBe(expected);
  });
});

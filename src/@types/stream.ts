export const StreamServices = ['Twitch', 'YouTube', 'Facebook', 'TikTok', 'Reddit', 'Trovo'] as const;

export type StreamService = typeof StreamServices[number];

export interface Stream {
  id: string;
  username: string;
  service: StreamService;
}

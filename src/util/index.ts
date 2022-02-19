export const isDev = () => process.env.NODE_ENV === 'development';
export const hostname = () => (isDev() ? 'localhost' : 'kasimahmic.github.io');

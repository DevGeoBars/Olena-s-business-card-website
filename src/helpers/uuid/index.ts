export const generateUUID = () => {
  if (typeof window !== 'undefined') {
    return window.crypto.randomUUID();
  } else {
    return 'no_uuid';
  }
};
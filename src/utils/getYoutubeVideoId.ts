export function getYoutubeVideoId(url: string | null) {
  if (url === null) return;
  const video = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  return video[2] !== undefined ? video[2].split(/[^0-9a-z_\-]/i)[0] : video[0];
}

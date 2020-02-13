
const MediaQueryActive = (
  media: string,
): boolean => {
  let clearQuery = media.split('@media ');

  return window.matchMedia(clearQuery[1]).matches;
}

export default MediaQueryActive;
import { NAVBAR_HEIGHT_PX } from "../constants";

export default function scrollIt(destination: HTMLElement): void {
  const documentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.getElementsByTagName("body")[0].clientHeight;
  // Use getBoundingClientRect + scroll position so it works regardless of offsetParent
  const rect = destination.getBoundingClientRect();
  const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop;
  const destinationOffset = scrollTop + rect.top - NAVBAR_HEIGHT_PX;
  const destinationOffsetToScroll = Math.round(
    Math.min(
      Math.max(0, destinationOffset),
      documentHeight - windowHeight
    )
  );

  window.scroll({
    top: destinationOffsetToScroll,
    left: 0,
    behavior: "smooth",
  });
}

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
  
  // Account for fixed navbar height (approximately 80px)
  const navbarHeight = 80;
  const destinationOffset = destination.offsetTop - navbarHeight;
  
  const destinationOffsetToScroll = Math.round(
    documentHeight - destinationOffset < windowHeight
      ? documentHeight - windowHeight
      : destinationOffset
  );

  function scroll() {
    window.scroll({
      top: destinationOffsetToScroll,
      left: 0, // Fixed: should be 0, not destinationOffsetToScroll
      behavior: "smooth",
    });
  }

  scroll();
}

export function timeout(s: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, s * 1000));
}
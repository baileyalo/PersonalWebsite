import { NAVBAR_HEIGHT_PX } from '../constants';

/** Returns a promise that resolves after `seconds` seconds */
export function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function scrollOffsetPx(): number {
  // Desktop has a fixed top nav; mobile only has floating controls.
  return window.matchMedia('(min-width: 768px)').matches ? NAVBAR_HEIGHT_PX : 16;
}

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
    document.getElementsByTagName('body')[0].clientHeight;
  const rect = destination.getBoundingClientRect();
  const scrollTop = window.pageYOffset ?? document.documentElement.scrollTop;
  const destinationOffset = scrollTop + rect.top - scrollOffsetPx();
  const destinationOffsetToScroll = Math.round(
    Math.min(Math.max(0, destinationOffset), documentHeight - windowHeight)
  );

  window.scroll({
    top: destinationOffsetToScroll,
    left: 0,
    behavior: prefersReducedMotion() ? 'auto' : 'smooth',
  });
}

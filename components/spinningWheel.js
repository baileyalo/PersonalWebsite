export default function SpinningWheel() {
  return (
    <>
      <div id="wrapper">
        <div className="z-[9000]">
          <div className="mx-auto h-[1.8rem] w-[1.8rem]">
            <svg className="animate-spin origin-center" viewBox="25 25 50 50">
              <circle
                className="animate-dash animate-color stroke-[#212121] stroke-[4] fill-none stroke-linecap-round"
                cx="50"
                cy="50"
                r="20"
                fill="none"
                stroke="#212121"
                strokeWidth="4"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
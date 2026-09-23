/** Circular "Quality · Reliability · Partnership" seal from the hero comps. */
export function BadgeSeal({ className = '' }: { className?: string }) {
  return (
    <span
      className={`border-maroon/25 bg-cream-light/90 text-maroon grid h-20 w-20 place-items-center rounded-full border text-center backdrop-blur-sm sm:h-24 sm:w-24 ${className}`}
    >
      <span className="font-display px-2 text-[0.58rem] leading-[1.35] font-semibold sm:text-[0.62rem]">
        Quality
        <br />
        Reliability
        <br />
        Partnership
      </span>
    </span>
  )
}

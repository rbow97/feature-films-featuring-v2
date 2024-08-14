import cx from "classnames";

export default function Arrow({ className }: { className?: string }) {
  return (
    <span
      className={cx(
        "h-3 w-3 border-t-2 border-primary-black border-r-2 relative rotate-45 ",

        // pseudo-element
        "after:absolute after:w-0.5 after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-black after:origin-top",
        className
      )}
    ></span>
  );
}

import cx from "classnames";

interface Props {
  resultsUrlWithParams: string;
  visible: boolean;
}

export default function TagsSearchButton({
  resultsUrlWithParams,
  visible,
}: Props) {
  return (
    <a
      href={resultsUrlWithParams}
      className={cx("h-fit ml-xs md:ml-0", visible ? "block" : "hidden")}
    >
      <div className="flex items-center rounded-full bg-primary-lightGrey border border-primary-grey px-sm py-xs md:h-md  w-fit text-sm">
        <span>Search</span>
      </div>
    </a>
  );
}

// shadow-[0_0_1px_.4px_rgba(12,41,126,.03),0_1px_3px_rgba(12,41,126,.09)]

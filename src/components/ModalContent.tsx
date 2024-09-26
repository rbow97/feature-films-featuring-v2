import { useStore } from "@nanostores/react";
import {
  clearTaggedPeople,
  resultsUrlWithParams,
  taggedPeople,
} from "@stores/store";
import { addSearchParams } from "@utils/addSearchParams";
import { useEffect } from "react";
import { TaggedPersonList } from "./TaggedPersonList";

export default function ModalContent() {
  const $taggedPeople = useStore(taggedPeople);
  const $resultsUrlWithParams = useStore(resultsUrlWithParams);

  const handleRefresh = () => {
    clearTaggedPeople();
  };

  useEffect(() => {
    addSearchParams("/results", $taggedPeople);
  }, [$taggedPeople]);

  return (
    <div className="flex flex-col h-full min-h-[200px] max-h-[400px]">
      <p className="text-[24px] font-bold pl-sm pt-sm pb-sm mb-sm border-b border-b-primary-lightGrey">
        Tags
      </p>
      <div className="flex flex-col h-full px-sm pb-sm overflow-hidden">
        <div className="overflow-y-auto grow h-full">
          <TaggedPersonList taggedPeople={$taggedPeople} />
        </div>
        <div className="absolute left-0 right-0 bottom-0 w-full flex justify-between items-center px-sm pb-sm">
          <button
            onClick={handleRefresh}
            className="w-md h-md bg-primary-lightGrey rounded-full hover:bg-primary-grey transition-bg duration-300 ease-in-out flex items-center justify-center group"
            aria-label="Refresh"
          >
            <svg
              className="w-5 h-5 transition-transform duration-300 ease-in-out group-hover:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </button>
          <a
            href={$resultsUrlWithParams}
            className="px-sm py-xs bg-black text-white rounded-full hover:bg-gray-800 transition-bg duration-300 ease-in-out"
          >
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}

import type { JSX } from "preact/jsx-runtime";

interface Props {
  imagePath?: string;
  children: JSX.Element;
}

export function ImageWithText({ imagePath, children }: Props) {
  return (
    <article class="flex px-xs pt-xs pb-sm gap-x-sm border-b-primary-lightGrey border-b h-fit items-start">
      <img
        loading="lazy"
        width="100"
        height="100"
        decoding="async"
        class="imageLayout h-medium w-medium"
        src={
          imagePath
            ? `https://image.tmdb.org/t/p/w185/${imagePath}`
            : "/film-camera.svg"
        }
      />
      {children}
    </article>
  );
}

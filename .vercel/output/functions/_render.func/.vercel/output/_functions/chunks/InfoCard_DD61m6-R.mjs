import { jsx, jsxs } from 'preact/jsx-runtime';

function InfoCard(props) {
  const {
    imagePath,
    title,
    handleTagButtonClick
  } = props;
  return jsx("div", {
    class: "col-span-1 w-full relative mx-auto",
    children: jsxs("article", {
      class: " max-h-[400px] h-full flex flex-col",
      children: [jsx("img", {
        loading: "lazy",
        width: "150",
        height: "150",
        decoding: "async",
        class: "w-full object-cover overflow-hidden grow rounded-lg border-2 border-primary-lightGrey",
        src: imagePath ? `https://image.tmdb.org/t/p/w500${imagePath}` : "/film-camera.svg"
      }), jsxs("div", {
        class: "flex justify-between mt-xs gap-xs w-full",
        children: [jsx("p", {
          class: "text-md text-primary-darkGrey grow truncate max-w-[300px] md:max-w-[unset]",
          children: title
        }), jsxs("div", {
          class: "flex gap-4 items-start",
          children: [handleTagButtonClick && jsxs("button", {
            onClick: handleTagButtonClick,
            class: "group relative",
            "aria-describedby": "tag-person",
            children: [jsx("div", {
              class: "h-4 w-4 relative after:absolute after:top-0 after:bottom-0 after:left-1/2 after:w-0.5 after:bg-primary-black after:opacity-50 before:opacity-50 after:rounded-md before:absolute before:left-0 before:right-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 after:-translate-x-1/2 before:bg-primary-black before:rounded-md group-hover:after:opacity-100 group-hover:before:opacity-100 after:transition-opacity before:transition-opacity after:duration-200 before:duration-200"
            }), jsx("div", {
              role: "tooltip",
              id: "tag-person",
              class: "absolute -top-[30px] left-1/2 -translate-x-1/2 text-xs whitespace-nowrap bg-primary-black rounded-md py-1 px-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease",
              children: jsx("p", {
                children: "Tag this person"
              })
            })]
          }), jsx("button", {
            class: "group",
            children: jsx("div", {
              class: "h-3 w-3 border-t-2 border-primary-black opacity-50 border-r-2 relative after:absolute after:w-0.5 after:h-5 after:-right-0.5 after:-top-[1px] after:rotate-45 after:bg-primary-black after:origin-top group-hover:opacity-100 transition-all duration-200 "
            })
          })]
        })]
      })]
    })
  });
}

export { InfoCard as I };

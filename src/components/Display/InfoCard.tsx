interface Props {
  imagePath: string;
  title?: string;
  handleTagButtonClick?: () => void;
}

const imdbImageUrl = "https://image.tmdb.org/t/p/w500";

export default function InfoCard(props: Props) {
  const { imagePath, title, handleTagButtonClick } = props;

  return (
    <div className="w-full mx-auto">
      <article className="flex flex-col h-full overflow-hidden">
        <div className="relative group h-full">
          <img
            loading="lazy"
            width="150"
            height="150"
            decoding="async"
            className="w-full h-full object-cover rounded-lg grow"
            src={imagePath ? `${imdbImageUrl}${imagePath}` : "/film-camera.svg"}
            alt={title}
          />
          {handleTagButtonClick && (
            <>
              <div className="absolute rounded-lg inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 hidden md:block"></div>
              <button
                onClick={handleTagButtonClick}
                className="absolute bottom-2 right-2 md:opacity-0 group-hover:opacity-100 transition-all duration-300"
                aria-label="Tag"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="10"
                    cy="10"
                    r="10"
                    fill="black"
                    fillOpacity="0.5"
                    className="group-hover:fill-opacity-40 transition-all duration-300"
                  />
                  <path
                    d="M10 6V14M6 10H14"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
        <div className="pt-2 truncate">
          <p className="text-sm text-primary-darkGrey truncate">{title}</p>
        </div>
      </article>
    </div>
  );
}

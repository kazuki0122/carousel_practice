import { FC } from "react"
import { ThumbnailList } from "./ThumbnailList"

import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { useThumbnails } from "./useThumbnails"

export const Thumbnails: FC = () => {
  const {
    landscapeThumbnails,
    scrollToPrevImage,
    scrollToNextImage,
    currentThumbnailIndex,
    setCurrentThumbnailIndex
  } = useThumbnails()

  return(
    <div className="group relative w-[330px] mt-4 ml-4">
      <button
        className={`
          ${currentThumbnailIndex === 0 && 'hidden'}
          opacity-0
          group-hover:opacity-100
          transition
          duration-250
          ease-in
          absolute
          top-1/2
          left-1
          -translate-y-1/2
          h-[24px]
          w-[24px]
          rounded-full
          bg-white
          p-0
        `}
        onClick={scrollToPrevImage}
        >
          <ChevronLeftIcon />
        </button>
        <ul
          className="
            flex
            w-full
            overflow-y-hidden
            overflow-x-scroll
            scrollbar-hide
            snap-x
            snap-mandatory
            scroll-smooth
            m-0
            p-0
          "
        >
          {landscapeThumbnails.map((Thumbnail, index) => (
            <ThumbnailList
              key={`thumbnailList-${index}`}
              Thumbnail={Thumbnail}
              index={index}
              setCurrentThumbnailIndex={setCurrentThumbnailIndex}
            />
          ))}
        </ul>

      <div
        className="
          flex
          justify-around
          w-[80px]
          absolute
          left-1/2
          -translate-x-1/2
          bottom-[10px]
      ">
        { landscapeThumbnails.map((_, index) => (
          <span
            key={`indicator-${index}`}
            className={`
              ${currentThumbnailIndex === index ? 'bg-white' : 'bg-gray-500'}
              w-[8px]
              h-[8px]
              rounded-full
              border-solid
            `}
          />
        )
        )}
      </div>
      <button
        className={`
          ${currentThumbnailIndex === landscapeThumbnails.length -1 && 'hidden'}
          opacity-0
          group-hover:opacity-100
          transition
          duration-250
          absolute
          top-1/2
          right-1
          -translate-y-1/2
          h-[24px]
          w-[24px]
          rounded-full
          bg-white
          p-0
        `}
        onClick={scrollToNextImage}
      >
        <ChevronRightIcon />
      </button>
    </div>
  )
}
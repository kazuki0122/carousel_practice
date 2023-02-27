import { FC, useEffect, useRef } from "react"
import { useIntersection } from "react-use"
import { LandscapeThumbnail } from "./useThumbnails"

type Props = {
  Thumbnail: LandscapeThumbnail
  index: number,
  setCurrentThumbnailIndex: React.Dispatch<React.SetStateAction<number>>
}

export const ThumbnailList: FC<Props> = ({
  Thumbnail,
  index,
  setCurrentThumbnailIndex
}) => {
  const listItemRef = useRef<HTMLLIElement>(null)
  const intersection = useIntersection(listItemRef, {
    threshold: 1,
  })

  useEffect(() => {
    if (intersection?.intersectionRatio === 1) {
      setCurrentThumbnailIndex(index)
    }
  }, [
    intersection?.intersectionRatio,
    setCurrentThumbnailIndex,
  ])

  return (
    <li
      className="list-none snap-start"
      ref={listItemRef}
      image-id={`image-id:${index}`}>
      <img
        className="min-w-[330px] h-[300px] rounded-3xl"
        src={Thumbnail.src} alt={Thumbnail.alt}
      />
    </li>
  )
}
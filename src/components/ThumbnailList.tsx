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
    // Android Chromeでスクロール判定できなかったためthresholdの値を0.99に変更
    threshold: 0.99,
  })

  useEffect(() => {
    if (intersection?.intersectionRatio ?? 0 >= 0.99) {
      setCurrentThumbnailIndex(index)
    }
  }, [
    intersection?.intersectionRatio,
    setCurrentThumbnailIndex,
  ])

  return (
    <li
      className="list-none snap-start snap-always"
      ref={listItemRef}
      data-image-id={`image-id:${index}`}>
      <img
        className="min-w-[330px] h-[300px]"
        src={Thumbnail.src} alt={Thumbnail.alt}
      />
    </li>
  )
}
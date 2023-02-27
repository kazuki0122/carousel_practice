import { useState } from 'react'
import landscape1 from '../images/landscape1.jpeg'
import landscape2 from '../images/landscape2.jpeg'
import landscape3 from '../images/landscape3.jpeg'
import landscape4 from '../images/landscape4.jpeg'
import landscape5 from '../images/landscape5.jpeg'

export type LandscapeThumbnail = {
  src: string;
  alt: string;
}

type UseThumbnails = () => {
  landscapeThumbnails: ReadonlyArray<LandscapeThumbnail>
  scrollToPrevImage: () => void
  scrollToNextImage: () => void
  currentThumbnailIndex: number
  setCurrentThumbnailIndex: React.Dispatch<React.SetStateAction<number>>
}

export const useThumbnails: UseThumbnails = () => {

  const landscapeThumbnails = [
    {
      src: landscape1,
      alt: '風景1'
    },
    {
      src: landscape2,
      alt: '風景2'
    },
    {
      src: landscape3,
      alt: '風景3'
    },
    {
      src: landscape4,
      alt: '風景4'
    },
    {
      src: landscape5,
      alt: '風景5'
    },
  ] as const

  const scrollTo = (index: number): void => {
    const target = document.querySelector<HTMLLIElement>(
      `[image-id="image-id:${index}"]`,
    )
    if (!target) return

    target.parentElement?.scrollTo?.(target.offsetLeft, 0)
  }

  const scrollToPrevImage = (): void => scrollTo(currentThumbnailIndex - 1)

  const scrollToNextImage = (): void => scrollTo(currentThumbnailIndex + 1)

  const [currentThumbnailIndex, setCurrentThumbnailIndex] = useState<number>(0)

  return {
    landscapeThumbnails,
    scrollToPrevImage,
    scrollToNextImage,
    currentThumbnailIndex,
    setCurrentThumbnailIndex
  }
}
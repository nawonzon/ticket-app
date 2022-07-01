/** @jsxImportSource @emotion/react */

import React from 'react'
import { Swiper as SwiperType } from 'swiper'
import {
  Swiper as SwiperBase,
  SwiperProps as SwiperBaseProps
} from 'swiper/react'

interface SwiperProps extends SwiperBaseProps {
  onScrolling?: (distance: number, itemRect: DOMRect, swiper: SwiperType) => void
}

function Swiper({
  onScrolling,
  onSetTranslate,
  children,
  ...rest
}: SwiperProps) {
  const [initialPosition, setInitialPosition] = React.useState<number | null>(
    null
  )

  return (
    <SwiperBase
      onSetTranslate={(swiper, translate) => {
        if (initialPosition === null && translate) {
          setInitialPosition(translate)
        }

        if (initialPosition) {
          if (translate > initialPosition) return

          const rect = swiper.slides[swiper.activeIndex].getBoundingClientRect()

          const distance = Math.abs(translate - initialPosition)

          onScrolling?.(distance, rect, swiper)
        }

        onSetTranslate?.(swiper, translate)
      }}
      {...rest}
    >
      {children}
    </SwiperBase>
  )
}

export default Swiper

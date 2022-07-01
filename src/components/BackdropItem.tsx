/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { motion, MotionValue, useTransform } from 'framer-motion'
import { Movie } from '../models'

const BackgroundImage = styled(motion.img)`
  width: 100%;
  position: absolute;
`

interface BackdropItemProps {
  movie: Movie
  index: number
  progress: MotionValue<number>
}

function BackdropItem({ movie, index, progress }: BackdropItemProps) {
  const clipPath = useTransform(
    progress,
    [index - 1, index],
    [
      'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)',
      'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    ]
  )

  return (
    <BackgroundImage style={{ clipPath }} src={movie.image} />
  )
}

export default BackdropItem

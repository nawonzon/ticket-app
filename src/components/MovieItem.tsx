/** @jsxImportSource @emotion/react */

import {
  Categories,
  Category,
  FlexBox,
  Gradient,
  Title
} from './../components/ui'
import styled from '@emotion/styled'
import { motion, MotionValue, useTransform } from 'framer-motion'
import { Movie } from '../models'
import { Rating } from 'react-simple-star-rating'

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: #ffffff;

  ${Gradient} {
    height: 50px;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`
const Image = styled.img`
  border-radius: 20px;
  aspect-ratio: 1/1.3;
  object-fit: cover;
`
const RatingContainer = styled(FlexBox)`
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  ${Title} {
    margin: 0;
    margin-right: 5px;
    font-size: small;
  }
`

interface MovieItemProps {
  movie: Movie
  progress: MotionValue<number>
  index: number
}

function MovieItem({ movie, progress, index }: MovieItemProps) {
  const translateY = useTransform(
    progress,
    [index - 1, index, index + 1],
    [0, -50, 0]
  )

  return (
    <Card style={{ translateY }}>
      <Image src={movie.image} />
      <Title>{movie.title}</Title>
      <Categories>
        {movie.categories.map((category) => (
          <Category key={category}>{category}</Category>
        ))}
      </Categories>

      <RatingContainer>
        <Title>{movie.rating.toFixed(1)}</Title>
        <Rating size={15} iconsCount={5} ratingValue={movie.rating * 10} />
      </RatingContainer>

      <Gradient />
    </Card>
  )
}

export default MovieItem

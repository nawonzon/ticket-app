/** @jsxImportSource @emotion/react */

import styled from '@emotion/styled'
import { IonContent, IonLabel } from '@ionic/react'
import { Movie } from '../models'
import {
  Button,
  Categories,
  Category,
  FlexBox,
  Title,
  TouchableOpacity
} from './ui'
import { Rating } from 'react-simple-star-rating'

const Container = styled(FlexBox)`
  padding: 20px;
  flex-direction: column;
  height: 70%;

  & > ${Title} {
    font-size: smaller;
    font-weight: 700;
    margin-bottom: 15px;
  }

  & > ${FlexBox} {
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;

    & > ${FlexBox} {
      flex-direction: column;
    }

    & > ${TouchableOpacity} {
      margin-bottom: 55px;
    }
  }
`
const InfosContainer = styled(FlexBox)`
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  & > ${Title} {
    font-size: x-large;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  ${Categories} {
    width: 55%;
  }
`
const ActorsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 30%;
  overflow-x: scroll;
  grid-gap: 20px;
  width: 110%;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`
const ActorContainer = styled(FlexBox)`
  flex-direction: column;

  ${Title} {
    font-size: x-small;
    opacity: 0.75;
  }
`
const ActorImage = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 5px;
`
const Synopsis = styled(IonLabel)`
  opacity: 0.5;
  font-size: small;
  line-height: 1.2rem;
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

function BuyTicketModal({ movie }: { movie: Movie }) {
  return (
    <IonContent>
      <Container>
        <InfosContainer>
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
        </InfosContainer>

        <FlexBox>
          <FlexBox>
            {movie.actors && (
              <>
                <Title>Actors</Title>
                <ActorsContainer>
                  {movie.actors.map((actor, index) => (
                    <ActorContainer key={index}>
                      <ActorImage src={actor.image} />
                      <Title>{actor.name}</Title>
                    </ActorContainer>
                  ))}
                </ActorsContainer>
              </>
            )}

            {movie.synopsis && (
              <>
                <Title>Introduction</Title>
                <Synopsis>{movie.synopsis}</Synopsis>
              </>
            )}
          </FlexBox>

          <TouchableOpacity>
            <Button>Buy ticket</Button>
          </TouchableOpacity>
        </FlexBox>
      </Container>
    </IonContent>
  )
}

export default BuyTicketModal

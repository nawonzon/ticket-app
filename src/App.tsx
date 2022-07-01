/** @jsxImportSource @emotion/react */

import { IonApp, IonContent, IonModal, IonPage } from '@ionic/react'
import { Button, FlexBox, Gradient, TouchableOpacity } from './components/ui'
import styled from '@emotion/styled'
import movies from './mocks/movies'
import { SwiperSlide } from 'swiper/react'
import MovieItem from './components/MovieItem'
import { useMotionValue } from 'framer-motion'
import BackdropItem from './components/BackdropItem'
import Swiper from './components/Swiper'
import BuyTicketModal from './components/BuyTicketModal'
import React from 'react'

const Container = styled(FlexBox)`
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eeeeee;

  ${TouchableOpacity} {
    align-self: center;
    width: 70%;
    margin-bottom: 30px;
  }
`
const SlidesContainer = styled(FlexBox)`
  flex-grow: 1;
  margin-top: 200px;
`
const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 60%;

  ${FlexBox} {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-y: hidden;
  }

  ${Gradient} {
    position: absolute;
    bottom: -2px;
    height: 50%;
  }
`
const ModalContainer = styled(IonModal)`
  --border-radius: 30px;
`

function App() {
  const progress = useMotionValue(0)

  const [activeIndex, setActiveIndex] = React.useState(0)

  return (
    <IonApp>
      <IonPage>
        <IonContent scrollY={false}>
          <Container>
            <TopSectionContainer>
              <FlexBox>
                {movies.map((movie, index) => (
                  <BackdropItem
                    key={index}
                    movie={movie}
                    index={index}
                    progress={progress}
                  />
                ))}
              </FlexBox>
              <Gradient />
            </TopSectionContainer>

            <SlidesContainer>
              <Swiper
                onScrolling={(distance, itemRect) => {
                  const slideWidth = itemRect.width

                  let value = Math.floor(distance) / Math.floor(slideWidth + 20)

                  if (value > movies.length - 1) value = movies.length - 1

                  progress.set(value)
                }}
                onSlideChange={(swipper) => setActiveIndex(swipper.activeIndex)}
                spaceBetween={20}
                slidesPerView={movies.length === 1 ? 1.072 : 1.5}
                centeredSlides
                cssMode
              >
                {movies.map((movie, index) => (
                  <SwiperSlide key={index}>
                    <MovieItem
                      progress={progress}
                      index={index}
                      movie={movie}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </SlidesContainer>

            <TouchableOpacity>
              <Button id="showBuyModal">Buy ticket</Button>
            </TouchableOpacity>

            <ModalContainer
              breakpoints={[0, 0.7, 0.9]}
              initialBreakpoint={0.7}
              backdropDismiss={false}
              handle={false}
              trigger="showBuyModal"
            >
              <BuyTicketModal movie={movies[activeIndex]} />
            </ModalContainer>
          </Container>
        </IonContent>
      </IonPage>
    </IonApp>
  )
}

export default App

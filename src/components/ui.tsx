import styled from '@emotion/styled/macro'
import { IonLabel } from '@ionic/react'
import { HTMLMotionProps, motion } from 'framer-motion'

export const FlexBox = styled.div`
  display: flex;
`

export const Gradient = styled.div`
  background-image: linear-gradient(transparent, #eeeeee);
  width: 100%;
`

export const TouchableOpacity = styled(
  ({ ...props }: HTMLMotionProps<'div'>) => (
    <motion.div {...props} whileTap={{ scale: 0.95, opacity: 0.2 }} />
  )
)()

export const Title = styled(IonLabel)`
  color: #000000;
  margin: 10px 0;
  font-size: larger;
`

export const Categories = styled(FlexBox)`
  justify-content: center;
`

export const Category = styled.span`
  display: inline-block;
  border: 1px #eee solid;
  font-size: xx-small;
  padding: 5px 10px;
  color: #000000;
  border-radius: 15px;
  text-align: center;
  margin-right: 7px;
`

export const Button = styled.button`
  padding: 15px 0;
  background-color: #333;
  color: #ffffff;
  width: 100%;
  border-radius: 5px;
  text-transform: uppercase;
  outline: none;
  border: none;
`
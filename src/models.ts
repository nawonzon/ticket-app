export interface Movie {
  title: string
  categories: string[]
  image: string
  actors?: Actor[],
  synopsis?: string
  rating: number
}

interface Actor {
  name: string
  image: string
}
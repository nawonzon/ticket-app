import { Movie } from '../models'

const movies: Movie[] = [
  {
    image: 'https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1280x1280/products/89058/93685/Joker-2019-Final-Style-steps-Poster-buy-original-movie-posters-at-starstills__62518.1572351179.jpg?c=2',
    title: 'Joker',
    categories: ['Action', 'Drama', 'History'],
    actors: [
      {
        name: 'Joaquin Phoenix',
        image:
          'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQWB4h9kSLFVTvgGO7IFG2EY1X15F-V-WfpJ34IKcfVpz_IwxQk1aLrSTCMT6RclsG2'
      },
      {
        name: 'Zazie Beetz',
        image:
          'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcStcDW4daXMymAnWIsGIgRpGL4jPiMeqN0IKuxu8vCUDtrk9nFBYCBPgxCi48dI0c2e'
      },
      {
        name: 'Robert De Niro',
        image:
          'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRet3BhJvMKJYagpFilShzw8hXCzb7UqpWmvEtxOIwpu1SqDzN1onGe3YGBBSbkcSEC'
      }
    ],
    rating: 6,
    synopsis:
      "Arthur Fleck, comédien raté, rencontre des voyous violents en errant dans les rues de Gotham City déguisé en clown. Méprisé par la société, Fleck s'enfonce peu à peu dans la démence et devient le génie criminel connu sous le nom de Joker, un dangereux tueur psychotique."
  },
  {
    image: 'https://pbs.twimg.com/media/Eh3Ax8nXsAArowN.jpg:large',
    title: 'Jujutsu',
    categories: ['Action', 'Anime', 'History'],
    actors: [
      {
        name: 'Yuji Itadori',
        image: 'https://pbs.twimg.com/media/Eu5p2H9VcAECQ_s.jpg'
      },
      {
        name: 'Satoru Gojo',
        image: 'https://www.nautiljon.com/images/description/00/48/1606668100762_image.jpg'
      },
      {
        name: 'Megumi Fushiguro',
        image: 'https://i.pinimg.com/originals/ac/a9/8e/aca98e7b9a5478520672ad0812ad7648.jpg'
      }
    ],
    rating: 8,
    synopsis: "Le héros de Jujutsu Kaisen, Yuji Itadori, un lycéen, se retrouve confronté aux forces occultes et est enrôlé dans une école d'exorcisme le jour où il se voit possédé par le démon millénaire Ryomen Sukuna."
  },
  {
    image: 'https://www.closeupshop.fr/media/oart_0/oart_m/oart_14146/1023019_G524780.JPG',
    title: 'Matrix',
    categories: ['Action', 'History'],
    actors: [
      {
        name: 'Keanu Reeves',
        image: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTHS-5f406TrldZ_rezhpccR0cieBPhVxRzi5NkQtriQzclWSef-yElDlnt8VoU1IZV'
      }
    ],
    rating: 7
  },
  {
    image: 'https://cdn.europosters.eu/image/1300/posters/naruto-shippuden-i84239.jpg',
    title: 'Naruto ❤️',
    categories: ['Action', 'Anime', 'History'],
    actors: [
      {
        name: 'Naruto Uzumaki',
        image: 'https://nntheblog.b-cdn.net/wp-content/uploads/2022/04/naruto-uzumaki-1.jpg',
      },
      {
        name: 'Pain',
        image: 'https://image.jeuxvideo.com/medias-crop-1200-675/145459/1454589118-1362-card.jpg',
      },
      {
        name: 'Sasuke Uchiwa',
        image: 'https://www.nautiljon.com/images/perso/00/15/uchiha_sasuke_14951.jpg',
      },
      {
        name: 'Kakashi Hatake',
        image: 'https://bricoleurs.info/wp-content/uploads/2021/09/Pourquoi-Kakashi-porte-un-masque-pour-cacher-son-visage.jpg',
      }
    ],
    rating: 9,
    synopsis: "Dans le village de Konoha vit Naruto, un jeune garçon détesté et craint des villageois, du fait qu'il détient en lui Kyuubi (démon renard à neuf queues) d'une incroyable force, qui a tué un grand nombre de personnes."
  }
]
export default movies

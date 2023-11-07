import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

const carousel = [
  {
    imgUrl: images.carousel01,
    title: 'Food that surprise you',
    subtitle: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
  },
  {
    imgUrl: images.carousel02,
    title: 'Reserve your table today',
    subtitle: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
  },
  {
    imgUrl: images.carousel03,
    title: 'Love the original taste',
    subtitle: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
  },
  {
    imgUrl: images.carousel04,
    title: 'The key to fine dining',
    subtitle: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
  },
];

export const blogs = [
  {
    image: images.carousel01,
    title: '		Five Easy Ways To Facilitate Food Related Restaurant	',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.',
    topic:'Food',
    date:'1 Sep',
    role:'admin'
  },
  {
    image: images.carousel02,
    title: 'The Guide On Food Restaurant To Help You Get Rich',
    desc: '			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mus in.		',
    topic:'Restaurant',
    date:'1 Sep',
    role:'admin'
  },
  {
    image: images.carousel03,
    title: 'Will Food Restaurant Ever Rule the World?',
    desc: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
    topic:'Food',
    date:'1 Sep',
    role:'admin'
  },
  {
    image: images.carousel04,
    title: 'Tips for prepping and caring for your grill',
    desc: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
    topic:'Restaurant',
    date:'1 Sep',
    role:'admin'
  },
  {
    image: images.carousel01,
    title: '5 Secrets That Experts Of Food Restaurant You Don’t Know',
    desc: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
    topic:'Food',
    date:'1 Sep',
    role:'admin'
  },
  {
    image: images.carousel04,
    title: 'How to make your food Photographs look aesthetic	',
    desc: 'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus.',
    topic:'Restaurant',
    date:'1 Sep',
    role:'admin'
  },

];

export default { wines, cocktails, awards,carousel };

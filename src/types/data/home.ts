export type HomeDataType = {
  id: number;
  name: string;
  image: string;
  price: number;
  color: string;
};

export const HomeData: HomeDataType[] = [
  {
    id: 1,
    name: 'Product 1',
    image: 'https://picsum.photos/400/200',
    price: 100,
    color: '#D9F8C4',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'https://picsum.photos/400/200',
    price: 120,
    color: '#F9F9C5',
  },
  {
    id: 3,
    name: 'Product 3',
    image: 'https://picsum.photos/400/200',
    price: 40,
    color: '#F5EDDC',
  },
  {
    id: 4,
    name: 'Product 4',
    image: 'https://picsum.photos/400/200',
    price: 50,
    color: '#FF8B8B',
  },
];

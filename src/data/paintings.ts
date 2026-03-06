export interface Painting {
  id: number;
  title: string;
  year: string;
  imageUrl: string;
  galleryUrl?: string;
  medium?: string;
  description?: string;
}

export const paintings: Painting[] = [
  {
    id: 1,
    title: "Tung Tung Tung Sahur",
    year: "2025",
    imageUrl: "https://i.imgur.com/8T0Zb46.jpg",
    galleryUrl: "https://imgur.com/8T0Zb46",
    medium: "Oil on wood"
  },
  {
    id: 2,
    title: "Brr Brr Patapim",
    year: "2025",
    imageUrl: "https://i.imgur.com/anaxF4g.jpg",
    galleryUrl: "https://imgur.com/anaxF4g",
    medium: "Oil on wood"
  },
  {
    id: 3,
    title: "Boneca Ambalabu",
    year: "2025",
    imageUrl: "https://i.imgur.com/v6LAmM8.jpg",
    galleryUrl: "https://imgur.com/v6LAmM8",
    medium: "Oil on wood"
  },
  {
    id: 4,
    title: "Big white pigeon",
    year: "2024",
    imageUrl: "https://i.imgur.com/sSGqZel.jpg",
    galleryUrl: "https://imgur.com/sSGqZel",
    medium: "Oil on wood"
  },
  {
    id: 5,
    title: "Beanstalk's cherry",
    year: "2025",
    imageUrl: "https://i.imgur.com/4MmdbQ4.jpg",
    galleryUrl: "https://imgur.com/4MmdbQ4",
    medium: "Oil on wood"
  }
];

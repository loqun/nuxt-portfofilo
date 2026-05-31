export interface Photo {
  id: string
  src: string
  title: string
  location: string
  category: string
  aspect: 'landscape' | 'portrait' | 'square'
}

export const photos: Photo[] = [
  {
    id: 'mountain',
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    title: 'Mountain Silence',
    location: 'Mount Rainier, USA',
    category: 'Landscape',
    aspect: 'landscape'
  },
  {
    id: 'forest',
    src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80',
    title: 'Deep Woods',
    location: 'Pacific Northwest',
    category: 'Nature',
    aspect: 'portrait'
  },
  {
    id: 'coast',
    src: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80',
    title: 'Golden Coast',
    location: 'Big Sur, California',
    category: 'Landscape',
    aspect: 'landscape'
  },
  {
    id: 'city',
    src: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&q=80',
    title: 'Urban Pulse',
    location: 'Tokyo, Japan',
    category: 'Street',
    aspect: 'portrait'
  },
  {
    id: 'lake',
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80',
    title: 'Still Waters',
    location: 'Lake Como, Italy',
    category: 'Landscape',
    aspect: 'landscape'
  },
  {
    id: 'portrait',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
    title: 'Quiet Contemplation',
    location: 'Portland, Oregon',
    category: 'Portrait',
    aspect: 'square'
  },
  {
    id: 'night',
    src: 'https://images.unsplash.com/photo-1506703719100-a0f3a48d2547?w=800&q=80',
    title: 'Night Lights',
    location: 'Reykjavik, Iceland',
    category: 'Night',
    aspect: 'landscape'
  },
  {
    id: 'architecture',
    src: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&q=80',
    title: 'Geometric Dreams',
    location: 'Barcelona, Spain',
    category: 'Architecture',
    aspect: 'portrait'
  },
  {
    id: 'desert',
    src: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80',
    title: 'Desert Solitude',
    location: 'Namibia',
    category: 'Landscape',
    aspect: 'landscape'
  }
]

export interface Album {
  id: string
  title: string
  description: string
  cover: string
  photos: Photo[]
}

export const albums: Album[] = [
  {
    id: 'wedding',
    title: 'Wedding',
    description: 'Intimate weddings captured on film. Candid moments, genuine emotions.',
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
    photos: [
      {
        id: 'wedding-1',
        src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        title: 'First Look',
        location: 'Jakarta',
        category: 'Wedding',
        aspect: 'landscape'
      },
      {
        id: 'wedding-2',
        src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
        title: 'The Vows',
        location: 'Bandung',
        category: 'Wedding',
        aspect: 'portrait'
      },
      {
        id: 'wedding-3',
        src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80',
        title: 'Golden Hour',
        location: 'Yogyakarta',
        category: 'Wedding',
        aspect: 'landscape'
      },
      {
        id: 'wedding-4',
        src: 'https://images.unsplash.com/photo-1510076857177-7470076d4098?w=800&q=80',
        title: 'Dancing',
        location: 'Jakarta',
        category: 'Wedding',
        aspect: 'square'
      },
      {
        id: 'wedding-5',
        src: 'https://images.unsplash.com/photo-1507504031003-bf0b2ee08a6c?w=800&q=80',
        title: 'Confetti',
        location: 'Bali',
        category: 'Wedding',
        aspect: 'landscape'
      },
      {
        id: 'wedding-6',
        src: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
        title: 'Reception',
        location: 'Jakarta',
        category: 'Wedding',
        aspect: 'portrait'
      }
    ]
  },
  {
    id: 'convo',
    title: 'Convo',
    description: 'Concert and event coverage — the energy, the lights, the crowd.',
    cover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
    photos: [
      {
        id: 'convo-1',
        src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
        title: 'Stage Lights',
        location: 'Jakarta',
        category: 'Convo',
        aspect: 'landscape'
      },
      {
        id: 'convo-2',
        src: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80',
        title: 'Crowd',
        location: 'Bandung',
        category: 'Convo',
        aspect: 'landscape'
      },
      {
        id: 'convo-3',
        src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
        title: 'Performance',
        location: 'Jakarta',
        category: 'Convo',
        aspect: 'portrait'
      },
      {
        id: 'convo-4',
        src: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
        title: 'Sound Check',
        location: 'Yogyakarta',
        category: 'Convo',
        aspect: 'square'
      },
      {
        id: 'convo-5',
        src: 'https://images.unsplash.com/photo-1501612780327-45045538702b?w=800&q=80',
        title: 'Encore',
        location: 'Jakarta',
        category: 'Convo',
        aspect: 'landscape'
      }
    ]
  },
  {
    id: 'sports',
    title: 'Sports',
    description: 'Athletic moments frozen in time. Motion, sweat, and determination.',
    cover: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=800&q=80',
    photos: [
      {
        id: 'sports-1',
        src: 'https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?w=800&q=80',
        title: 'Race Day',
        location: 'Jakarta',
        category: 'Sports',
        aspect: 'landscape'
      },
      {
        id: 'sports-2',
        src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
        title: 'Game Point',
        location: 'Bandung',
        category: 'Sports',
        aspect: 'portrait'
      },
      {
        id: 'sports-3',
        src: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80',
        title: 'The Kick',
        location: 'Jakarta',
        category: 'Sports',
        aspect: 'landscape'
      },
      {
        id: 'sports-4',
        src: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
        title: 'Training',
        location: 'Yogyakarta',
        category: 'Sports',
        aspect: 'square'
      },
      {
        id: 'sports-5',
        src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80',
        title: 'Victory',
        location: 'Jakarta',
        category: 'Sports',
        aspect: 'landscape'
      }
    ]
  }
]

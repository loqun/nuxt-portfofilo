export interface WishlistItem {
  name: string
  description: string
  url?: string
}

export interface WishlistCategory {
  category: string
  items: WishlistItem[]
}

export const wishlist: WishlistCategory[] = [
  {
    category: 'Tools',
    items: [
      {
        name: 'Sekonic Light Meter',
        description: 'Handheld meter for accurate exposure readings',
      },
    ],
  },
  {
    category: 'Film Rolls',
    items: [
      {
        name: 'Fujichrome Velvia',
        description: 'Punchy color reversal film with strong saturation',
      },
      {
        name: 'Kodak Ektachrome',
        description: 'Classic color slide film with balanced tones',
      },
    ],
  },
  {
    category: 'Gear',
    items: [
      {
        name: 'Ricoh GR III / GR IV',
        description: 'Pocketable everyday carry for discreet shooting',
      },
      {
        name: 'Fujifilm X-T5',
        description: 'High-resolution APS-C body for stills and travel',
      },
      {
        name: 'Mechanical Watch',
        description: 'Analog timepiece with a hand-wound or automatic movement',
      },
    ],
  },
]

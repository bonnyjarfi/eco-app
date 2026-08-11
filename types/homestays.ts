export interface HomestayPackage {
    id: string;
    name: string;
    description: string;
    price: number;
    capacity?: number;
    unit: string;
    
  }
  
  export interface Homestay {
    id: string;
    name: string;
    slug: string;
    location: string;
    guide: string;
    guideImage: string;
    pricePerPerson: number;
    rating: number;
    reviewCount: number;
    description: string;
    image: string;
    gallery: string[];
    packages: HomestayPackage[];
  }
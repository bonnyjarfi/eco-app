import type { Homestay } from "@/types/homestays";
export const homestays: Homestay[] = [
    {
      id: "1",
      name: "Dugong Homestay",
      slug: "dugong-homestay",
      location: "Papua Barat Daya",
      guide: "Musa Omkarsba",
      
      guideImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  
      pricePerPerson: 500000,
  
      rating: 4.9,
      reviewCount: 0,
  
      description:
        "Pengalaman menginap bersama masyarakat lokal sekaligus menikmati keindahan laut, pulau, dan kehidupan pesisir Papua.",
  
        image:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      
      gallery: [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=85",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
      ],
  
      packages: [
        {
          id: "1",
          name: "Dayan (Manta Ray)",
          description:
            "Perjalanan menikmati pengalaman melihat manta ray.",
          price: 1000000,
          capacity: 4,
          unit: "per 4 orang",
        },
  
        {
          id: "2",
          name: "Dugong",
          description:
            "Paket perjalanan untuk menikmati pengalaman melihat dugong.",
          price: 300000,
          capacity: 4,
          unit: "per 4 orang",
        },
  
        {
          id: "3",
          name: "Snorkeling Hurun – Pasir Timbul",
          description:
            "Menikmati keindahan bawah laut dan pasir timbul.",
          price: 450000,
          capacity: 4,
          unit: "per 4 orang",
        },
  
        {
          id: "4",
          name: "Snorkeling Pulau Wai",
          description:
            "Menjelajahi keindahan laut dan spot snorkeling Pulau Wai.",
          price: 1000000,
          unit: "per trip",
        },
      ],
    },
  ];
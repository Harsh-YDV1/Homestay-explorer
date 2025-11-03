// src/data/sampleData.js
export const roles = [
  { id: 1, title: "Admin", description: "Oversees platform operations, manages content, users, and site security." },
  { id: 2, title: "Host", description: "Hosts homestays, manages property listings, pricing, and booking details." },
  { id: 3, title: "Tourist", description: "Searches and books stays, leaves reviews, and explores local attractions." },
  { id: 4, title: "Guide", description: "Offers local experiences and guided tours to tourists." }
];

export const listings = [
  {
    id: 1,
    title: "Cozy Vijayawada Retreat",
    host: "Local Guide",
    price: 50,
    description: "Near Kanaka Durga Temple. Ideal for families and solo travelers.",
    location: "Vijayawada, Andhra Pradesh",
    image: "https://source.unsplash.com/random/800x450/?homestay",
    rating: 4.7
  },
  {
    id: 2,
    title: "Lakeview Homestay",
    host: "Host A",
    price: 35,
    description: "Serene homestay beside the lake, perfect for a weekend getaway.",
    location: "Kolleru Lake, Eluru",
    image: "https://source.unsplash.com/random/800x450/?lakehouse",
    rating: 4.5
  },
  {
    id: 3,
    title: "Historic Cottage",
    host: "Host B",
    price: 60,
    description: "Charming heritage cottage with traditional interiors.",
    location: "Guntur, Andhra Pradesh",
    image: "https://source.unsplash.com/random/800x450/?heritage",
    rating: 4.8
  },
  {
    id: 4,
    title: "Urban City Stay",
    host: "Host C",
    price: 45,
    description: "Modern apartment in the city center with fast Wi-Fi and AC.",
    location: "Vijayawada City",
    image: "https://source.unsplash.com/random/800x450/?apartment",
    rating: 4.3
  }
];

export const attractions = [
  {
    id: 1,
    name: "Kanaka Durga Temple",
    description: "Sacred temple located atop Indrakeeladri Hill.",
    location: "Vijayawada",
    image: "https://source.unsplash.com/random/400x250/?temple"
  },
  {
    id: 2,
    name: "Bhavani Island",
    description: "A peaceful island getaway in the middle of the Krishna River.",
    location: "Vijayawada",
    image: "https://source.unsplash.com/random/400x250/?island"
  },
  {
    id: 3,
    name: "Prakasam Barrage",
    description: "Famous bridge and landmark offering scenic evening views.",
    location: "Krishna River",
    image: "https://source.unsplash.com/random/400x250/?bridge"
  }
];

export const users = [
  { id: 1, name: "Ravi Kumar", role: "Host", email: "ravi@homestay.com", rating: 4.8 },
  { id: 2, name: "Priya Sharma", role: "Tourist", email: "priya@homestay.com", rating: 4.6 },
  { id: 3, name: "Aman Singh", role: "Guide", email: "aman@homestay.com", rating: 4.9 },
  { id: 4, name: "Kiran Reddy", role: "Admin", email: "kiran@homestay.com", rating: 5.0 }
];

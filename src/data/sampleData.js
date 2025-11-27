// src/data/sampleData.js
// Final version — every record now has an image

export const roles = [
  { 
    id: 1, 
    title: "Admin", 
    description: "Oversees platform operations, manages content, users, and site security.",
    image: "https://source.unsplash.com/400x300/?admin,office"
  },
  { 
    id: 2, 
    title: "Host", 
    description: "Hosts homestays, manages property listings, pricing, and booking details.",
    image: "https://source.unsplash.com/400x300/?host,homestay"
  },
  { 
    id: 3, 
    title: "Tourist", 
    description: "Searches and books stays, leaves reviews, and explores local attractions.",
    image: "https://source.unsplash.com/400x300/?traveller,tourist"
  },
  { 
    id: 4, 
    title: "Guide", 
    description: "Offers local experiences and guided tours to tourists.",
    image: "https://source.unsplash.com/400x300/?tourguide,travel"
  }
];

// ---------------- HOMESTAYS ----------------
export const listings = [
  // Andhra Pradesh
  {
    id: 1,
    title: "Cozy Vijayawada Retreat",
    host: "Local Guide",
    price: 50,
    description: "Near Kanaka Durga Temple. Ideal for families and solo travelers.",
    location: "Vijayawada, Andhra Pradesh",
    image:"https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80"
,
    rating: 4.7
  },
  {
    id: 2,
    title: "Krishna River View Stay",
    host: "Local Guide",
    price: 55,
    description: "Beautiful riverside stay with balcony view of the Krishna River.",
    location: "Vijayawada, Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf"
,
    rating: 4.8
  },
  {
    id: 3,
    title: "Green Valley Homestay",
    host: "Meera Choudhary",
    price: 40,
    description: "Eco-friendly stay near Kondapalli Fort surrounded by greenery.",
    location: "Vijayawada outskirts, Andhra Pradesh",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=900&q=80",
    rating: 4.6
  },

  // Goa
  {
    id: 4,
    title: "Palolem Beach Cottage",
    host: "Anita Fernandes",
    price: 70,
    description: "Beachfront cottage with sea view and delicious seafood nearby.",
    location: "Palolem, Goa",
    image: "https://source.unsplash.com/800x450/?goa,beachhouse",
    rating: 4.9
  },
  {
    id: 5,
    title: "Old Goa Heritage Stay",
    host: "Manuel D’Souza",
    price: 65,
    description: "Portuguese-style villa surrounded by palm trees and serenity.",
    location: "Old Goa",
    image: "https://source.unsplash.com/800x450/?heritage,villa,goa",
    rating: 4.7
  },

  // Kerala
  {
    id: 6,
    title: "Munnar Tea Garden Stay",
    host: "Leena Mathai",
    price: 75,
    description: "Cottage amidst tea plantations with misty hill views.",
    location: "Munnar, Kerala",
    image: "https://source.unsplash.com/800x450/?munnar,tea,plantation",
    rating: 4.9
  },
  {
    id: 7,
    title: "Alleppey Backwater Home",
    host: "Ramesh Kumar",
    price: 65,
    description: "Traditional Kerala home on the backwaters with houseboat tours.",
    location: "Alleppey, Kerala",
    image: "https://source.unsplash.com/800x450/?houseboat,kerala",
    rating: 4.8
  },

  // Himachal Pradesh
  {
    id: 8,
    title: "Shimla Valley Cottage",
    host: "Deepak Sharma",
    price: 50,
    description: "Warm wooden cottage with fireplace and mountain views.",
    location: "Shimla, Himachal Pradesh",
    image: "https://source.unsplash.com/800x450/?shimla,mountains,cottage",
    rating: 4.6
  },
  {
    id: 9,
    title: "Manali Riverside Homestay",
    host: "Priya Mehta",
    price: 55,
    description: "Cozy riverside stay for adventurers and nature lovers.",
    location: "Manali, Himachal Pradesh",
    image: "https://source.unsplash.com/800x450/?manali,river,homestay",
    rating: 4.7
  },

  // Rajasthan
  {
    id: 10,
    title: "Jaipur Haveli Experience",
    host: "Rajiv Singh",
    price: 80,
    description: "Stay in a restored haveli with royal Rajasthani décor.",
    location: "Jaipur, Rajasthan",
    image: "https://source.unsplash.com/800x450/?jaipur,haveli,rajasthan",
    rating: 4.9
  },
  {
    id: 11,
    title: "Desert Camp Stay",
    host: "Aarti Rathore",
    price: 60,
    description: "Camel rides and bonfire evenings under the desert sky.",
    location: "Jaisalmer, Rajasthan",
    image: "https://source.unsplash.com/800x450/?jaisalmer,desert,camp",
    rating: 4.8
  },

  // Sikkim
  {
    id: 12,
    title: "Gangtok Hillside Homestay",
    host: "Tenzing Bhutia",
    price: 45,
    description: "Simple home with panoramic views of the eastern Himalayas.",
    location: "Gangtok, Sikkim",
    image: "https://source.unsplash.com/800x450/?sikkim,hills,homestay",
    rating: 4.6
  }
];

// ---------------- ATTRACTIONS ----------------
export const attractions = [
  // Andhra Pradesh
  {
    id: 1,
    name: "Kanaka Durga Temple",
    description: "Sacred temple atop Indrakeeladri Hill overlooking the Krishna River.",
    location: "Vijayawada",
    image: "https://source.unsplash.com/400x250/?temple,vijayawada"
  },
  {
    id: 2,
    name: "Bhavani Island",
    description: "Peaceful island retreat in the Krishna River.",
    location: "Vijayawada",
    image: "https://source.unsplash.com/400x250/?island,river"
  },
  {
    id: 3,
    name: "Kondapalli Fort",
    description: "Ancient fort with historical sculptures and panoramic views.",
    location: "Kondapalli, Andhra Pradesh",
    image: "https://source.unsplash.com/400x250/?fort,india"
  },

  // Goa
  {
    id: 4,
    name: "Palolem Beach",
    description: "Palm-fringed beach known for kayaking and seafood.",
    location: "South Goa",
    image: "https://source.unsplash.com/400x250/?beach,goa"
  },
  {
    id: 5,
    name: "Basilica of Bom Jesus",
    description: "UNESCO heritage site with baroque architecture.",
    location: "Old Goa",
    image: "https://source.unsplash.com/400x250/?church,goa"
  },

  // Kerala
  {
    id: 6,
    name: "Munnar Tea Gardens",
    description: "Endless green hills with tea plantations and misty peaks.",
    location: "Munnar, Kerala",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbn1ox0qF0SkL_sY2JiXye7Z2dzM6pJTH8mw&s"
  },
  {
    id: 7,
    name: "Alleppey Backwaters",
    description: "Houseboat cruises through scenic canals and lagoons.",
    location: "Alleppey, Kerala",
    image: "https://source.unsplash.com/400x250/?backwaters,kerala"
  },

  // Himachal Pradesh
  {
    id: 8,
    name: "Rohtang Pass",
    description: "Snowy mountain pass famous for adventure sports.",
    location: "Manali, Himachal Pradesh",
    image: "https://source.unsplash.com/400x250/?snow,rohtang"
  },
  {
    id: 9,
    name: "The Ridge",
    description: "Open space in Shimla offering stunning sunset views.",
    location: "Shimla, Himachal Pradesh",
    image: "https://source.unsplash.com/400x250/?shimla,ridge"
  },

  // Rajasthan
  {
    id: 10,
    name: "Amber Fort",
    description: "Magnificent fort with intricate architecture.",
    location: "Jaipur, Rajasthan",
    image: "https://source.unsplash.com/400x250/?amber,fort,jaipur"
  },
  {
    id: 11,
    name: "Sam Sand Dunes",
    description: "Golden desert landscape ideal for jeep safaris.",
    location: "Jaisalmer, Rajasthan",
    image: "https://source.unsplash.com/400x250/?sand,dunes,desert"
  },

  // Sikkim
  {
    id: 12,
    name: "Tsomgo Lake",
    description: "Glacial lake surrounded by snow-capped peaks.",
    location: "Gangtok, Sikkim",
    image: "https://source.unsplash.com/400x250/?tsomgo,lake,sikkim"
  },
  {
    id: 13,
    name: "Rumtek Monastery",
    description: "Peaceful Buddhist monastery showcasing Tibetan art.",
    location: "Rumtek, Sikkim",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

// ---------------- USERS ----------------
export const users = [
  { 
    id: 1, 
    name: "Ravi Kumar", 
    role: "Host", 
    email: "ravi@homestay.com", 
    rating: 4.8,
    image: "https://source.unsplash.com/200x200/?man,portrait"
  },
  { 
    id: 2, 
    name: "Priya Sharma", 
    role: "Tourist", 
    email: "priya@homestay.com", 
    rating: 4.6,
    image: "https://source.unsplash.com/200x200/?woman,portrait"
  },
  { 
    id: 3, 
    name: "Aman Singh", 
    role: "Guide", 
    email: "aman@homestay.com", 
    rating: 4.9,
    image: "https://source.unsplash.com/200x200/?guide,man"
  },
  { 
    id: 4, 
    name: "Kiran Reddy", 
    role: "Admin", 
    email: "kiran@homestay.com", 
    rating: 5.0,
    image: "https://source.unsplash.com/200x200/?admin,office,person"
  }
];

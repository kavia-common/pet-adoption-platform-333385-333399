/**
 * Mock pet data for the demo application.
 *
 * Invariants:
 * - `id` is unique and stable (used for routing /pets/:petId).
 * - `type` is one of: "Dog" | "Cat" | "Rabbit" | "Bird".
 * - `size` is one of: "Small" | "Medium" | "Large".
 * - `energy` is 1..5 (inclusive).
 */
export const PETS = [
  {
    id: "luna",
    name: "Luna",
    type: "Dog",
    breed: "Labrador Mix",
    ageYears: 2,
    size: "Large",
    energy: 4,
    gender: "Female",
    location: "San Mateo, CA",
    goodWithKids: true,
    vaccinated: true,
    description:
      "Luna is a joyful, people-loving pup who adores fetch and long walks. She's learning leash manners and responds well to positive reinforcement.",
    traits: ["Affectionate", "Food-motivated", "Smart"],
    imageUrl:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "milo",
    name: "Milo",
    type: "Cat",
    breed: "Domestic Shorthair",
    ageYears: 1,
    size: "Small",
    energy: 3,
    gender: "Male",
    location: "Oakland, CA",
    goodWithKids: true,
    vaccinated: true,
    description:
      "Milo is curious and cuddly once he warms up. He loves window watching, wand toys, and napping in sunbeams.",
    traits: ["Gentle", "Playful", "Quiet"],
    imageUrl:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "coco",
    name: "Coco",
    type: "Rabbit",
    breed: "Mini Lop",
    ageYears: 3,
    size: "Small",
    energy: 2,
    gender: "Female",
    location: "Berkeley, CA",
    goodWithKids: false,
    vaccinated: false,
    description:
      "Coco is a calm companion who enjoys gentle pets and quiet evenings. She’s litter trained and thrives in a predictable routine.",
    traits: ["Calm", "Litter trained", "Independent"],
    imageUrl:
      "https://images.unsplash.com/photo-1552410260-0fd9b577afa6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "atlas",
    name: "Atlas",
    type: "Dog",
    breed: "Australian Shepherd",
    ageYears: 4,
    size: "Medium",
    energy: 5,
    gender: "Male",
    location: "San Jose, CA",
    goodWithKids: true,
    vaccinated: true,
    description:
      "Atlas is an energetic, brainy dog who loves agility-style games and structured training. Best fit for an active home.",
    traits: ["High energy", "Loyal", "Trainable"],
    imageUrl:
      "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "skye",
    name: "Skye",
    type: "Dog",
    breed: "Corgi",
    ageYears: 6,
    size: "Small",
    energy: 3,
    gender: "Female",
    location: "San Francisco, CA",
    goodWithKids: true,
    vaccinated: true,
    description:
      "Skye is a sweet senior-ish gal with a playful streak. She enjoys short adventures and lots of cozy couch time.",
    traits: ["Easygoing", "Friendly", "Snack lover"],
    imageUrl:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "nova",
    name: "Nova",
    type: "Cat",
    breed: "Siamese Mix",
    ageYears: 2,
    size: "Small",
    energy: 4,
    gender: "Female",
    location: "Daly City, CA",
    goodWithKids: false,
    vaccinated: true,
    description:
      "Nova is chatty, clever, and loves interactive play. She bonds strongly with her person and enjoys puzzle feeders.",
    traits: ["Vocal", "Clever", "Confident"],
    imageUrl:
      "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "piper",
    name: "Piper",
    type: "Bird",
    breed: "Parakeet",
    ageYears: 1,
    size: "Small",
    energy: 3,
    gender: "Unknown",
    location: "Alameda, CA",
    goodWithKids: true,
    vaccinated: false,
    description:
      "Piper is a bright little parakeet who loves gentle music and chirping along. With patience, Piper may learn simple step-ups.",
    traits: ["Bright", "Social", "Curious"],
    imageUrl:
      "https://images.unsplash.com/photo-1518791602622-9e695f8b694e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "pepper",
    name: "Pepper",
    type: "Dog",
    breed: "Terrier Mix",
    ageYears: 1,
    size: "Medium",
    energy: 4,
    gender: "Male",
    location: "Santa Clara, CA",
    goodWithKids: false,
    vaccinated: true,
    description:
      "Pepper is a spirited young terrier who loves sniff walks and learning new tricks. He can be a little shy at first.",
    traits: ["Spirited", "Curious", "Eager"],
    imageUrl:
      "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=1200&q=80",
  },
];

// Manually maintained vehicle data (see PRD §8 Data Model)
// Prices are real client-provided daily rental ranges, not single prices.
const VEHICLES = [
  {
    id: "li-i6",
    model: "Li Auto i6",
    type: "SUV",
    priceMin: 550,
    priceMax: 650,
    availability: "Available",
    seats: 5,
    rangeKm: 550,
    photo: "images/li-auto-i6.jpg",
    featured: true
  },
  {
    id: "li-i8",
    model: "Li Auto i8",
    type: "SUV",
    priceMin: 650,
    priceMax: 800,
    availability: "Available",
    seats: 6,
    rangeKm: 560,
    photo: "images/li-auto-i8.jpg",
    featured: false
  },
  {
    id: "li-l7",
    model: "Li Auto L7",
    type: "SUV",
    priceMin: 300,
    priceMax: 500,
    availability: "Booked",
    seats: 5,
    rangeKm: 210,
    photo: "images/li-auto-l7.jpg",
    featured: true
  },
  {
    id: "xiaomi-su7max",
    model: "Xiaomi SU7 Max",
    type: "Sedan",
    priceMin: 450,
    priceMax: 550,
    availability: "Available",
    seats: 5,
    rangeKm: 800,
    photo: "images/xiaomi-su7-max.jpg",
    featured: true
  },
  {
    id: "xiaomi-yu7",
    model: "Xiaomi YU7",
    type: "SUV",
    priceMin: 450,
    priceMax: 550,
    availability: "Available",
    seats: 5,
    rangeKm: 760,
    photo: "images/xiaomi-yu7.jpg",
    featured: false
  },
  {
    id: "zeekr-007gt",
    model: "ZEEKR 007GT",
    type: "Sedan",
    priceMin: 350,
    priceMax: 400,
    availability: "Available",
    seats: 5,
    rangeKm: 640,
    photo: "images/zeekr-007gt.jpg",
    featured: false
  },
  {
    id: "onvo-l90",
    model: "ONVO L90",
    type: "SUV",
    priceMin: 500,
    priceMax: 600,
    availability: "Maintenance",
    seats: 6,
    rangeKm: 590,
    photo: "images/onvo-l90.jpg",
    featured: false
  }
];

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI(req, res) {
  res.status(200).json([
    {
      // img: "https://picsum.photos/200/300",
      img: "/images/bedroom1.jpeg",
      location: "Private room in center of Bengaluru",
      title: "Stay at this spacious Edwardian House2",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.73,
      price: "₹300 / night",
      total: "₹1170 total",
      long: 75.5937,
      lat: 15.9629,
    },
    {
      img: "/images/bedroom2.jpeg",
      location: "Private room in center of Bengaluru",
      title: "Independant luxury studio apartment",
      description:
        "2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen",
      star: 4.3,
      price: "₹400 / night",
      total: "₹1570 total",
      long: 75.6947,
      lat: 15.9629,
    },
    {
      img: "/images/bedroom3.jpeg",
      location: "Private room in center of Bengaluru",
      title: "Bengaluru Studio Apartments",
      description:
        "4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine",
      star: 3.8,
      price: "₹350 / night",
      total: "₹2070 total",
      long: 75.7977,
      lat: 15.9629,
    },
    {
      img: "/images/bedroom4.jpeg",
      img: "/images/bedroom2.jpeg",
      title: "30 mins to Oxford Street, Excel Bengaluru",
      description:
        "1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 4.1,
      price: "₹550 / night",
      total: "₹3200 total",
      long: 75.8937,
      lat: 15.9669,
    },
    {
      img: "/images/bedroom5.jpeg",
      location: "Private room in center of Bengaluru",
      title: "Spacious Peaceful Modern Bedroom",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning",
      star: 5,
      price: "₹600 / night",
      total: "₹4500 total",
      long: 75.9937,
      lat: 15.9639,
    },
    {
      img: "/images/bedroom6.jpeg",
      location: "Private room in center of Bengaluru",
      title: "The Blue Room In Bengaluru",
      description:
        "2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine",
      star: 4.23,
      price: "₹650 / night",
      total: "₹4800 total",
      long: 75.5937,
      lat: 15.962,
    },
    {
      img: "/images/bedroom7.jpeg",
      location: "Private room in center of Bengaluru",
      title: "5 Star Luxury Apartment",
      description:
        "3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine",
      star: 3.85,
      price: "₹900 / night",
      total: "₹6500 total",
      long: 75.5937,
      lat: 15.9623,
    },
  ]);
}

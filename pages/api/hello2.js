// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI2(req, res) {
  res.status(200).json([
    {
      img: "/images/front.jpeg",
      location: "Bengaluru",
      distance: "45-minute drive",
    },
    {
      img: "/images/front.jpeg",
      location: "Delhi",
      distance: "4.5-hour drive",
    },
    {
      img: "/images/front.jpeg",
      location: "Kolkata",
      distance: "4.5-hour drive",
    },
    {
      img: "/images/front.jpeg",
      location: "Bihar",
      distance: "4-hour drive",
    },
    {
      img: "/images/front.jpeg",
      location: "Mumbai",
      distance: "45-minute drive",
    },
    {
      img: "/images/front.jpeg",
      location: "kashmir",
      distance: "4.5-hour drive",
    },
    {
      img: "/images/front.jpeg",
      location: "kerala",
      distance: "6-hour drive",
    },
    {
      img: "/images/front.jpeg",
      location: "goa",
      distance: "2-hour drive",
    },
  ]);
}

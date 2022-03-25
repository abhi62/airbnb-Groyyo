// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function helloAPI3(req, res) {
  res.status(200).json([
    {
      img: "/images/beachHome.jpeg",
      title: "Outdoor getaways",
    },
    {
      img: "/images/beachHome.jpeg",
      title: "Unique stays",
    },
    {
      img: "/images/beachHome.jpeg",
      title: "Entire homes",
    },
    {
      img: "/images/beachHome.jpeg",
      title: "Pet allowed",
    },
  ]);
}

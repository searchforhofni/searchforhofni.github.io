/*
  HOW TO ADD NEW WORK — no coding needed:

  1. Put your image(s) in the folder: assets/images/portfolio/
     (name them something simple, e.g. mmk-poster-1.jpg)

  2. Copy one of the blocks below, paste it above the closing "];",
     and fill in your own details.

  3. Fields:
     - images: a LIST of file names — use just one for a single photo,
       or several for a swipeable multi-photo card (like a gallery item)
     - title: short name for the piece
     - category: either "digital" or "construction"
     - client: the client's name (or "" to leave it out)
     - description: one short sentence

  Save the file — that's it, the new item appears on the site automatically.
*/

const portfolioItems = [
  {
    images: [
      "assets/images/portfolio/SFH-IT-and-Digital-Solutions.jpg",
      "assets/videos/portfolio/SFH-IT-and-Digital-Solutions.mp4"
    ],
    title: "IT & Digital Solutions",
    category: "digital",
    client: "",
    description: "Service poster covering hardware & setup, graphic & web design, and security & business IT."
  },
  {
    images: [
      "assets/images/portfolio/SFH-Construction-and-Property.jpg",
      "assets/videos/portfolio/SFH-Construction-and-Property.mp4"
    ],
    title: "Construction & Property Services",
    category: "construction",
    client: "",
    description: "Service poster covering construction, specialized trades, and cleaning services."
  },
  {
    images: ["assets/images/portfolio/placeholder-poster.jpg"],
    title: "Event Poster",
    category: "digital",
    client: "",
    description: "Poster design for a local event."
  },
  {
    images: ["assets/images/portfolio/placeholder-cv.jpg"],
    title: "Professional CV Design",
    category: "digital",
    client: "",
    description: "CV/resume redesign for a job applicant."
  },
  {
    images: ["assets/images/portfolio/placeholder-construction.jpg"],
    title: "Property Maintenance",
    category: "construction",
    client: "",
    description: "Renovation and maintenance work."
  }
];

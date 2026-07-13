/*
  HOW TO ADD NEW WORK — no coding needed:

  1. Put your image in the folder: assets/images/portfolio/
     (name it something simple, e.g. mmk-poster-1.jpg)

  2. Copy one of the blocks below, paste it above the closing "];",
     and fill in your own details.

  3. Fields:
     - image: the file name you saved in step 1
     - title: short name for the piece
     - category: either "digital" or "construction"
     - client: the client's name (or "" to leave it out)
     - description: one short sentence

  Save the file — that's it, the new item appears on the site automatically.
*/

const portfolioItems = [
  {
    image: "assets/images/portfolio/placeholder-poster.jpg",
    title: "Event Poster",
    category: "digital",
    client: "",
    description: "Poster design for a local event."
  },
  {
    image: "assets/images/portfolio/placeholder-cv.jpg",
    title: "Professional CV Design",
    category: "digital",
    client: "",
    description: "CV/resume redesign for a job applicant."
  },
  {
    image: "assets/images/portfolio/placeholder-mmk.jpg",
    title: "Dealership Documents",
    category: "digital",
    client: "MMK Shipdenk Holdings",
    description: "Ongoing quotations, invoices and booking letters."
  },
  {
    image: "assets/images/portfolio/placeholder-construction.jpg",
    title: "Property Maintenance",
    category: "construction",
    client: "",
    description: "Renovation and maintenance work."
  }
];

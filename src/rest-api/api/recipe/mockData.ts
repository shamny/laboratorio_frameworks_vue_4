import { Recipe } from "../../model";

export const mockRecipes: Recipe[] = [
  {
    id: 1,
    name: "Omelette",
    description: `
     1. For a basic omelette, crack the eggs into a mixing bowl with a pinch of sea salt and black pepper. Beat well with a fork.
     2. Heat a small knob of butter in a small frying pan on a low heat, and once melted and bubbling, add the eggs and move the pan around to spread them out evenly.
     3. When the omelette begins to cook and firm up, but still has a little raw egg on top, sprinkle over the cheese (if using).
     4. Using a spatula, ease around the edges of the omelette, then fold it over in half. When it starts to turn golden brown underneath, remove the pan from the heat and slide the omelette on to a plate.
    `,
    ingredients: ["2 eggs", "cheese", "salt", "black pepper"],
    image:"https://www.diariamenteali.com/medias/receta-de-omelette-1900Wx500H?context=bWFzdGVyfHJvb3R8MjM4MTM0fGltYWdlL2pwZWd8aDMyL2g4ZS85MDc0MTMxNTMzODU0L3JlY2V0YS1kZS1vbWVsZXR0ZV8xOTAwV3g1MDBIfDM2MmRlNGM2N2EyZjY5NjE0ZjAwMDcwZGM3Nzk3NmQ0MDgwNTZmNGM0MTZhMjFjY2NhZjdlZjc2YWMxM2I1ZTE",
  },
  {
    id: 2,
    name: "Salad with tomatoes",
    description: `
     1. Combine salad, tomatoes, avocados, garlic and onion in a large bowl.
     2. Sprinkle with lemon juice, and season with salt and pepper.
     3. Garnish salad with thin lemon slices.
    `,
    ingredients: ["salad", "2 tomatoes", "2 avocados", "1 tooth garlic", "1 onion", "lemon juice", "salt", "pepper"],
    image:"https://d2v9mhsiek5lbq.cloudfront.net/eyJidWNrZXQiOiJsb21hLW1lZGlhLXVrIiwia2V5IjoiZm9vZG5ldHdvcmstaW1hZ2UtMWUyMWNmOTQtMjk4My00NDUwLThkNjQtYTQwMzNmNTc0MDAzLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NzUwLCJoZWlnaHQiOjQyMiwiZml0IjoiY292ZXIifX19",
  },
  {
    id: 3,
    name: "Spaghetti with tomato sauce",
    description: `
     1. Brown beef over medium heat. Drain off fat.
     2. In a large pot, combine beef, salt, oregano, pepper, garlic powder, onion flakes, diced tomatoes, tomato sauce, and mushrooms. Simmer at a low heat setting for 2 hours, stirring occasionally
     3. Cook pasta according to package directions. Drain. Serve sauce over spaghetti.
    `,
    ingredients: [
      "spaghetti",
      "1 beef",
      "1/4 teaspoon garlic powder",
      "1 onion",
      "3 tomatoes",
      "4 mushrooms",
      "oregano",
      "salt",
    ],
    image:"https://flockler.com/thumbs/sites/192/classic_tomato_spaghetti_21645_s600x600_c854x499_l0x420.png",
  },
];

import React from "react";
import Card from "./Card";
import salad from "../icons_assets/greek salad.jpg";
import bruchetta from "../icons_assets/bruchetta.svg";
import dessert from "../icons_assets/lemon dessert.jpg";
const dishes = [
  {
    id: 1,
    name: "Greek Salad",
    price: "12.99$",
    src: salad,
    discreption:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 2,
    name: "Bruchetta",
    price: "5.99$",
    src: bruchetta,
    discreption:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    price: "5.00$",
    src: dessert,
    discreption:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

function Specials() {
  return (
    <section className="dishes">
      {dishes.map((dish) => {
        return (
          <Card
            key={dish.id}
            id={dish.id}
            title={dish.name}
            price={dish.price}
            image={dish.src}
            parg={dish.discreption}
          />
        );
      })}
    </section>
  );
}

export default Specials;

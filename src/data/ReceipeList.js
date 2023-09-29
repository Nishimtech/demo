import React from 'react';
import image from '../config/Image';

const ReceipeList = [
	{
		id: "01",
		name: "Pizza",
		image: image.pizza,
		rating: "4.2",
		ingredients: ["Tomato", "Cheese", "Red Onion", "Mozzarella", "Sauce"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Preheat the pizza stone (or pizza pan or baking sheet).",
			"Divide the dough into 2 balls.",
			"Prep the toppings.",
			"Flatten the dough ball, and stretch out into a round.",
			"Brush the dough top with olive oil",
			"Spread with tomato sauce and sprinkle with toppings"
		],
	},
	{
		id: "02",
		name: "Noodles",
		image: image.noodles,
		rating: "3.6",
		ingredients: [
			"Lasagna Noodles",
			"Ground Beef",
			"Ricotta Cheese",
			"Tomato Sauce",
		],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Cook the lasagna noodles according to package instructions.",
			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.",
		],
	},
	{
		id: "03",
		name: "Hot Dog",
		image: image.hotdog,
		rating: "4.6",
		ingredients: ["Hot Dog Buns", "Frankfurters", "Ketchup", "Mustard"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"A classic American favorite, hot dog buns stuffed with juicy frankfurters, drizzled with ketchup and mustard for that perfect balance of flavors.",
		steps: [
			"Grill or heat the frankfurters until they're cooked through.",
			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!",
		],
	},
	{
		id: "04",
		name: "Manchurian",
		image: image.manchurian,
		rating: "3.6",
		ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},

	{
		id: "05",
		name: "Cupcakes",
		image: image.cupcake,
		rating: "5.0",
		ingredients: ["Flour", "Sugar", "Eggs", "Butter"],
		time: "60 mins",
		difficulty: "Medium",
		calories: "200 cal",
		description:
			"Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Prepare the cupcake batter by mixing the ingredients together.",
			"Line a muffin tin with cupcake liners.",
			"Fill each liner with batter and bake in the oven.",
			"Let the cupcakes cool, then frost and decorate as desired.",
			"Indulge in these sweet treats and savor the flavor!",
		],
	},
	{
		id: "06",
		name: "Curry",
		image: image.curry,
		rating: "4.8",
		ingredients: ["Meat", "Curry Powder", "Coconut Milk", "Spices"],
		time: "55 mins",
		difficulty: "Hard",
		calories: "550 cal",
		color: "#d35400",

		description:
			"A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.",
		steps: [
			"Marinate the meat with spices and let it sit for a while.",
			"Heat oil in a large pot and sauté the marinated meat until browned.",
			"Add curry powder and stir to coat the meat.",
			"Pour in coconut milk and bring to a simmer.",
			"Cover and let the curry simmer until the meat is tender and the flavors meld.",
			"Serve the curry with rice or bread and enjoy the deliciousness!",
		],
	},
	{
		id: "07",
		name: "Pasta",
		image: image.pasta,
		rating: "4.2",
		ingredients: ["Spring Onions", "Soy Sauce", "ginger-garlic paste", "Vegetables", "Red chili powder"],
		time: "35 mins",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Heat 4 cups water along with ½ teaspoon salt till it comes to a boil..",
			" When the water comes to a boil, add 100 grams penne pasta.",
			"Cook the pasta without any lid on medium to high heat.",
			"Cook till the pasta becomes al dente. You can also cook it more, if you want.",
			"Strain the pasta.",
			"Add in a bowl and or keep in the strainer or colander. Cover and keep aside",
		],
	},
	{
		id: "08",
		name: "Hot Dog",
		image: image.hotdog,
		rating: "4.6",
		ingredients: ["Hot Dog Buns", "Frankfurters", "Ketchup", "Mustard"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"A classic American favorite, hot dog buns stuffed with juicy frankfurters, drizzled with ketchup and mustard for that perfect balance of flavors.",
		steps: [
			"Grill or heat the frankfurters until they're cooked through.",
			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!",
		],
	},
];

export default ReceipeList;
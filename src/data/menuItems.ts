import heroBurger from "@/assets/hero-burger.png";
import foodChicken from "@/assets/food-chicken.png";
import foodPizza from "@/assets/food-pizza.png";
import foodSalad from "@/assets/food-salad.png";
import foodSandwich from "@/assets/food-sandwich.png";
import foodFries from "@/assets/food-fries.png";

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  dietary?: string[];
}

export const menuItems: MenuItem[] = [
  // Bread category
  { id: 1, name: "Naan Burger", price: 1.85, category: "bread", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 2, name: "Butter Chicken Taco", price: 1.15, category: "bread", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["gluten-free"] },
  { id: 3, name: "Chicken Burger", price: 2.00, category: "bread", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: [] },
  { id: 4, name: "Cheese Chicken Naan", price: 2.50, category: "bread", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 5, name: "3 Layer Burger", price: 4.99, category: "bread", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: [] },
  { id: 6, name: "Sandwich", price: 2.80, category: "bread", image: foodFries, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian", "vegan"] },
  
  // Chiffon & Rolls category
  { id: 7, name: "Classic Chiffon Roll", price: 3.25, category: "chiffon", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 8, name: "Cinnamon Chiffon Roll", price: 3.50, category: "chiffon", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 9, name: "Chocolate Chiffon Roll", price: 3.75, category: "chiffon", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 10, name: "Vanilla Chiffon Roll", price: 3.25, category: "chiffon", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  
  // Donut category
  { id: 11, name: "Glazed Donut", price: 1.50, category: "donut", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 12, name: "Chocolate Donut", price: 1.75, category: "donut", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 13, name: "Sprinkled Donut", price: 2.00, category: "donut", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 14, name: "Jelly Filled Donut", price: 2.25, category: "donut", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 15, name: "Boston Cream Donut", price: 2.50, category: "donut", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  
  // Pastry & Danish category
  { id: 16, name: "Apple Danish", price: 3.00, category: "pastry", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 17, name: "Cherry Danish", price: 3.25, category: "pastry", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 18, name: "Cheese Danish", price: 3.50, category: "pastry", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 19, name: "Almond Croissant", price: 4.00, category: "pastry", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 20, name: "Chocolate Pastry", price: 3.75, category: "pastry", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  
  // Cakes category
  { id: 21, name: "Chocolate Cake", price: 12.99, category: "cakes", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 22, name: "Vanilla Cake", price: 11.99, category: "cakes", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 23, name: "Red Velvet Cake", price: 13.99, category: "cakes", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 24, name: "Strawberry Cake", price: 12.50, category: "cakes", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 25, name: "Carrot Cake", price: 11.50, category: "cakes", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian", "gluten-free"] },
  
  // Cookies category
  { id: 26, name: "Chocolate Chip Cookie", price: 1.25, category: "cookies", image: heroBurger, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 27, name: "Oatmeal Cookie", price: 1.15, category: "cookies", image: foodChicken, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 28, name: "Sugar Cookie", price: 1.00, category: "cookies", image: foodPizza, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian", "vegan"] },
  { id: 29, name: "Peanut Butter Cookie", price: 1.35, category: "cookies", image: foodSalad, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
  { id: 30, name: "Double Chocolate Cookie", price: 1.50, category: "cookies", image: foodSandwich, description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", dietary: ["vegetarian"] },
];

export const categories = [
  { id: "all", name: "All" },
  { id: "bread", name: "Bread" },
  { id: "chiffon", name: "Chiffon & Rolls" },
  { id: "donut", name: "Donut" },
  { id: "pastry", name: "Pastry & Danish" },
  { id: "cakes", name: "Cakes" },
  { id: "cookies", name: "Cookies" },
];


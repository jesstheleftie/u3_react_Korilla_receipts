### SEBR 0916

# Korilla React Receipts

![koreanTacos](https://www.foodnetwork.com/content/dam/images/food/fullset/2014/4/16/0/DV1906H_Korean-Bulgogi-Taco-Recipe_s4x3.jpg)



Korilla is a Korean barbecue taco truck that makes thousands of hungry customers
happy every year.

Their CEO is thinking of updating their short order tracking system using React.

Looking for promising, younge React Developers, they've decided to contract you out to help build up their app.

Build a prototype of this short order receipts tracker.

## Prerequisites

- React

## Instructions

1. Fork and clone this repository.
1. Create a new React App
1. Fulfill the listed requirements.

## Requirements

Follow the walkthrough and finish all parts. If you have extra time, finish the
bonus as well.

How you want your app to be structured (# of components, where data is being stored, props being passed) is completely up to *you* choose. A way that you feel will be the cleanest to work with, that you can accomplish, and challenge yourself with


## Part 1: Sample Receipts

You'll be rendering some sample receipts:

```js
const receipts = [
  {
    id: 1,
    person: 'Jeremy',
    order: {
      main: 'Burrito',
      protein: 'Skirt Steak',
      rice: 'Purple Rice',
      sauce: 'Green Habanero',
      toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
      drink: 'Thai Iced Tea',
      cost: 22,
     isVegetrian: false
    },
    paid: false,
  },
  {
    id: 2,
    person: 'Brittany',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Chicken',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
      drink: 'Korchata',
      cost: 19,
     isVegetarian: false,
    },
    
    paid: false,
  },
  {
    id: 3,
    person: 'Tom',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: null,
      sauce: "K'lla",
      toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20,
     isVegetarian: true
    },
    paid: false,
  },
  {
    id: 4,
    person: 'Jessica',
    order: {
      main: 'Burrito Bowl',
      protein: 'Carnitas',
      rice: null,
      sauce: "Jalapeno Honey",
      toppings: ['Grilled Corn', 'Pico De Gallo', 'Guacamole'],
      drink: 'Pineapple Jarritos',
      cost: 23,
    isVegetarian: false
    },
    
    paid: true,
  },
{
    id: 5,
    person: 'Sophie',
    order: {
      main: 'Burrito Bowl',
      protein: 'Birria',
      rice: 'white rice',
      sauce: "Hot Honey",
      toppings: ['Grilled Corn', 'Mango Salsa', 'Guacamole'],
      drink: 'Tamarind Jarritos',
      cost: 23,
     isVegetarian: false
    },
    
    paid: true,
  },
  {
    id: 6,
    person: 'Frank',
    order: {
      main: 'Taco Bowl',
      protein: 'Barbacoa',
      rice: 'yellow rice',
      sauce: null,
      toppings: null,
      drink: 'Mexican Coca Cola',
      isVegetarian: false,
      cost: 19,
    },
    
    paid: false,
  },
{
    id: 7,
    person: 'Dennis',
    order: {
      main: 'Burrito Bowl',
      protein: 'Tofu',
      rice: 'white rice',
      sauce: 'jalapeno honey',
      toppings: null,
      drink: null,
      cost: 15,
     isVegetarian: true
    },
    
    paid: false,
  },
{
    id: 8,
    person: 'Charlie',
    order: {
      main: 'Burrito',
      protein: 'Tofu',
      rice: 'yellow rice',
      sauce: null,
      toppings: ['guacamole', 'pico de gallo', 'red onion'],
      drink: 'lime jarritos',
      isVegetarian: true,
      cost: 18
    },
    
    paid: true,
  },
{
    id: 9,
    person: 'Mac',
    order: {
      main: 'Taco Bowl',
      protein: 'Carnitas',
      rice: 'Purple rice',
      sauce: 'Red Hot',
      toppings: ['guacamole', 'Pineapple Slaw'],
      drink: null,
      cost: 19,
      isVegetarian: false
    },
   
    paid: false,
  }
];
```

Make a Receipt component that maps and renders the following data from the receipt:

- person
- order
  - main
  - protein
  - rice
  - sauce
  - drink
  - cost
  - toppings (this may require a nested map!)
 
Give it a border and some clean style so the company can differentiate between the receipts they see.

Make sure to set up a conditional to control if someone has opted to skip an option ('null' for the value)

If an order is Vegetarian, put some kind of note on the card. This can be a green "V", or any other logo or design of your choosing

**Optional:** render the toppings


## Part 2: Conditionally render the receipts

Only some of the receipts are paid.

Modify your componenent to only render a component if the receipt
has not been paid.

Then go into the receipt data and change a paid value to true, then verify that
the receipt disappears.



## Plagiarism

Take a moment to refamiliarize yourself with the
[Plagiarism policy](https://git.generalassemb.ly/DC-WDI/Administrative/blob/master/plagiarism.md).
Plagiarized work will not be accepted.

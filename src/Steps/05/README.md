# Task for Step 04 (optional): Simulate the cards turning

Simulate the cards turning using CSS. You'll need to add a couple of container elements, and use some 3D styling.

Tutorials:
(Card Flip)[https://3dtransforms.desandro.com/card-flip
https://itnext.io/)
[Flippable CSS Card](flippable-css-card-how-to-create-a-css-card-that-flips-when-you-hover-af1ef763f3d2)


# Task for Step 03: Turn card over when clicked
*(See CHANGELOG.md for details of how Step 02 was treated.)*

Turn either card over when it is clicked.

* Display two cards face down, side-by-side or one beneath each other as before.
* Add an `onClick` event listener to the cards so that they turn over when clicked.

Tips:
1. Create an array containing two cherry emoji characters
2. Create an array containing two `false` values, indicating the initial "turned" state of the two cards
3. Use useState() to track changes to the "turned" state
4. Use Array.map() on your images array to create an array of `<Card />` components
5. Use the `index` argument of the `map` callback function to determine what value to use for `turned` for each card.
6. Remember that, for JavaScript, an *array* is an *address in your computer's RAM space* where the data in the array is stored. If you updated an array and then use a `useState` setter to tell React that you have updated the array, React will just see the same RAM address, and think nothing has changed. You need to call the `useState` setter with a *new* array (at a different RAM address), so that React will pay attention.
   ```javascript
   const [ faceDown, setFaceDown ] = useState([ false, false ])

   faceDown[0] = !faceDown[0] // the local faceDown array is updated
   setFaceDown[...faceDown]   // React sees a clone of the local array
   ```


# Task for Step 02: Create styling for the card back
*(See CHANGELOG.md for details of how Step 01 was treated.)*

Display two cards side-by-side, or one beneath the other, depending on the aspect-ratio of the browser window. The first card should be the one you created in step 01. The second should show the back of the card.

1. Display two Card components, both with a "card" className and with the 🍒 emoji character as a prop.
2. The first component should receive a `turned` prop with a value of `true` and be shown face-up, as before
3. The second component should receive a `turned` prop with a value of `false` and it should show the back of the card.
4. Give the card back a gradient, and the same border as the front.
5. Do not show the 🍒 image on the face-down card.
6. As before, put all your CSS inside `styles.css`.
7. If the page is in portrait mode, show the cards one above the other; if it is in landscape mode, show them side-by-side.

You can see a demo of the expected result [here](https://dciforks.github.io/memory/step/02). Do your best to match the styling as closely as possible. You will use the suggested styling as the starting point for the next step.

# Task for Step 01: Create a single styled card, face up

You can start by creating a square card with an image of two cherries, using the Unicode emoji character 🍒. 

1. Create a Card component and send it the 🍒 emoji character as a prop.
2. Give the Card component a "card" className.
3. Put all your CSS inside `styles.css`.
4. Centre the image.
5. Give the card a neutral background and a border.
6. Give the card rounded corners

Emoji characters can scale to any size, so make the card fill the viewport, then alter the size of the viewport to check that the card, the border and the image all scale proportionately.

You can see a demo of the expected result [here](https://dciforks.github.io/memory/step/01). Do your best to match the styling as closely as possible. You will use the suggested styling as the starting point for the next step.


# Building a Memory game in React

This repo contains a multi-step assignment that guides you as you build a Memory game using React.

The branches are named step01, step02 and so on. Each branch contains a README.md (like this one) with a simple task for you to complete. The next branch in numerical order contains a solution for the previous task, plus a new task.

You can find a demo of the completed game [here](https://dciforks.github.io/memory). You can use the hamburger menu on this page to see side-by-side each of the tasks and the expected result of that completed task.◊

Here's an overview of the steps:

1. Create a single styled card, face up
2. Create the styling for the back of the card
3. Use CSS classes to flip the card
4. Create a responsive layout of multiple cards
5. Use React.useReducer to ensure that a maximum of two cards can be flipped at a time
6. Detect matching pairs of cards
7. Use custom images
8. Select the number of pairs to use for a game
9. Allow players to enter their names
10. Alternate play between multiple players
11. Show the winner



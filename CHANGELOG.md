# CHANGE LOG

## Step 02

* Add Steps/03 folder
* Add hard-coded `turned` property
* Add .face-down or .face-up className to card
* Edit CSS
+ Display #root as flex-column
+ Limit --card-size to 50vmax
+ Add rule for .face-down > gradient background
+ Add @media for landscape screen

## Step 01

1. Steps/01/ renamed as Steps/02
2. Add components/Card.jsx
3. Export <div className="card"> from Card.jsx
4. Import Card into App.jsx
5. Send "🍒" as image prop to <Card />
6. Set hard-coded CSS properties in :root:
   * --card-size
   * --font-size
   * --card-color
   * --border-color
   * --border-width
   * --border-radius
   CSS properties used to simplify future tweaks.
7. Style .card class using these hard-coded values
8. Manual test that card resizes to fit the viewport
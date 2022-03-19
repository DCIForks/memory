const { getLayout } = require('./src/tools/utilities.js')


const data = [
  // {
  //   cardCount: 10,
  //   width: 900,
  //   height: 300,
  //   columns: 5,
  //   rows: 2,
  //   side: 160
  // },
  // {
  //   cardCount: 30,
  //   width: 900,
  //   height: 300,
  //   columns: 10,
  //   rows: 3,
  //   side: 90
  // },
  // {
  //   cardCount: 30,
  //   width: 400,
  //   height: 600,
  //   columns: 5,
  //   rows: 6,
  //   side: 80
  // },
  // {
  //   cardCount: 30,
  //   width: 600,
  //   height: 400,
  //   columns: 6,
  //   rows: 5,
  //   side: 80
  // },
  // {
  //   cardCount: 30,
  //   width: 810,
  //   height: 320,
  //   columns: 10,
  //   rows: 3,
  //   side: 81
  // },
  // {
  //   cardCount: 28,
  //   width: 400,
  //   height: 810,
  //   columns: 4,
  //   rows: 7,
  //   side: 100
  // },
  // {
  //   cardCount: 30,
  //   width: 400,
  //   height: 810,
  //   columns: 4,
  //   rows: 8,
  //   side: 100
  // },
  // {
  //   cardCount: 36,
  //   width: 400,
  //   height: 810,
  //   columns: 4,
  //   rows: 9,
  //   side: 90
  // },
  // {
  //   cardCount: 36,
  //   width: 280,
  //   height: 810,
  //   columns: 4,
  //   rows: 9,
  //   side: 90
  // },
  // { cardCount: 36,
  //   width: 240,
  //   height: 810,
  //   columns:  3,
  //   rows:12,
  //   side:67.5
  // },
  {
    cardCount: 36,
    width: 319,
    height: 960,
    columns: 3,
    rows:12,
    side: 80
  }
]

data.forEach( data => {
  const { cardCount, width, height, columns, rows, side } = data
  const result = getLayout(cardCount, width, height)

  console.log("cardCount:", cardCount, "width:", width, "height:", height);
  console.log("result:  ", result.rows * result.columns < cardCount ? "X" : "√", "columns:", result.columns, "rows:", result.rows, "count:", result.rows * result.columns, "side:", result.side);
  console.log("expected:", rows * columns < cardCount ? "X" : "√", "columns:", columns, "rows:", rows, "count:", rows*columns, "side:", side);
  console.log(" ")
})

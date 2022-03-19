/**
 * 
 */


import { getLayout } from './tools/utilities'


describe('optimal layout', () => {
  test.each`
  cardCount | width | height | expected 
  ${10} | ${900} | ${320} | ${[{columns:  5, rows: 2, side: 160}]}
  ${30} | ${900} | ${320} | ${[{columns: 10, rows: 3, side:  90}]}
  ${30} | ${810} | ${320} | ${[{columns: 10, rows: 3, side:  81}]}
  ${30} | ${800} | ${320} | ${[{columns:  8, rows: 4, side:  80},
                               {columns: 10, rows: 3, side:  80}]}
  
  ${30} | ${400} | ${600} | ${[{columns:  5, rows: 6, side:  80}]}
  ${30} | ${600} | ${400} | ${[{columns:  6, rows: 5, side:  80}]}
  ${30} | ${600} | ${600} | ${[{columns:  6, rows: 5, side: 100}]}
  ${36} | ${600} | ${600} | ${[{columns:  6, rows: 6, side: 100}]}
  
  ${28} | ${400} | ${810} | ${[{columns:  4, rows: 7, side: 100}]}
  ${30} | ${400} | ${810} | ${[{columns:  4, rows: 8, side: 100}]}
  ${36} | ${400} | ${810} | ${[{columns:  4, rows: 9, side:  90}]}
  ${36} | ${280} | ${810} | ${[{columns:  4, rows: 9, side:  70}]}
  ${36} | ${240} | ${810} | ${[{columns:  3, rows:12, side:67.5}]}

  ${36} | ${280} | ${621} | ${[{columns:  4, rows: 9, side:  69}]}
  ${36} | ${280} | ${630} | ${[{columns:  4, rows: 9, side:  70}]}
  ${36} | ${280} | ${840} | ${[{columns:  4, rows: 9, side:  70}]}
  ${36} | ${279} | ${840} | ${[{columns:  3, rows:12, side:  70}]}

  ${36} | ${210} | ${840} | ${[{columns:  3, rows:12, side: 70}]}
  ${36} | ${279} | ${840} | ${[{columns:  3, rows:12, side: 70}]}
  ${36} | ${280} | ${840} | ${[{columns:  4, rows: 9, side: 70}]}
  ${36} | ${240} | ${960} | ${[{columns:  3, rows:12, side: 80}]}
  ${36} | ${240} | ${1439}| ${[{columns:  3, rows:12, side: 80}]}
  ${36} | ${319} | ${960} | ${[{columns:  3, rows:12, side: 80}]}
  ${36} | ${320} | ${960} | ${[{columns:  4, rows: 9, side: 80}]}
  ${36} | ${320} | ${720} | ${[{columns:  4, rows: 9, side: 80}]}
  ${36} | ${399} | ${720} | ${[{columns:  4, rows: 9, side: 80}]}
  ${36} | ${400} | ${720} | ${[{columns:  5, rows: 8, side: 80}]}
 
  `(`getLayout($cardCount, $width, $height) should be in given array`, ({cardCount, width, height, expected}) => {
    
    const result = getLayout(cardCount, width, height)
    expect(expected).toContainEqual(result)
  });
});
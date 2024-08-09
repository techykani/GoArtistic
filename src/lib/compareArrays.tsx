// import React from 'react'

// const compareArrays = (arr1: any, arr2: any) => {

//         const comparedArray: any = [];

//         // Iterate over arr1
//         arr1?.forEach((item1: any) => {
//           // Find a matching item in arr2 based on title
//           const matchingItem = arr2?.find((item2: any) => item2?.title === item1?.title);

//           // Push object to comparedArray with title from arr1 and arr2 (or '-' if no match)
//           comparedArray.push({
//             testList: [item1?.labTest],
//             title: [item1?.title, matchingItem ? matchingItem?.title : '-']
//           });
//         });

//         // Iterate over arr2 to find additional titles
//         arr2?.forEach((item2: any) => {
//           // Check if the title is already in comparedArray
//           const matchingTitle = comparedArray?.find((comparedItem: any) => comparedItem?.title[0] === item2?.title);
//           if (!matchingTitle) {
//             // Push object to comparedArray with '-' for arr1 and title from arr2
//             comparedArray.push({
//               testList: [item2?.labTest],
//               title: ['-', item2?.title]
//             });
//           }
//         });

//         return comparedArray;

// }

// export default compareArrays

const compareArrays = (...arrayData: any[]) => {
  let arrays = arrayData.filter(arr => arr !== undefined);

  console.log(arrays.length, 'a')
  // if (arrays.length < 2 || arrays.length > 4) {
  //   throw new Error("You must provide between 2 and 4 arrays for comparison.");
  // }

  const comparedArray: { testList: any[]; title: any[]; }[] = [];

  // Combine all arrays into one set of unique titles
  const allTitles = new Set(arrays.flatMap(arr => arr?.map((item: { title: any; }) => item.title)));

  // Iterate over each unique title
  allTitles.forEach(title => {
    const items = arrays.map(arr => arr?.find((item: { title: any; }) => item.title === title));
    const labTests = items.map(item => item?.labTest ? item.labTest : []);

    // Push object to comparedArray with testList and title from all arrays (or '-' if no match)
    comparedArray.push({
      testList: labTests,
      title: items.map(item => item ? item.title : '-')
    });
  });

  return comparedArray;
}

export default compareArrays;

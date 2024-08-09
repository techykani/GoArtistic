// const compareLabArrays = (arr1:any, arr2:any) => {
//     const comparedArray: any = [];

//     // Iterate over arr1
//     arr1?.forEach((item1:any) => {
//       // Find a matching item in arr2 based on labTitle
//       const matchingItem = arr2?.find((item2:any) => item2?.labTitle === item1?.labTitle);

//       // Extract labTest values from item1 and matchingItem
//       const labTest1 = item1?.labTest ? item1?.labTest?.map((test:any) => test?.title) : [];
//       const labTest2 = matchingItem && matchingItem?.labTest ? matchingItem?.labTest?.map((test:any) => test?.title) : [];

//       // Combine labTest values from both arrays
//       const combinedLabTests = [...new Set([...labTest1, ...labTest2])];

//       // Generate labTest array with comparison
//       const labTestArray = combinedLabTests?.map(test => {
//         const title1 = labTest1?.includes(test) ? test : '-';
//         const title2 = labTest2?.includes(test) ? test : '-';
//         return { title: [title1, title2] };
//       });

//       comparedArray.push({
//         title: item1?.labTitle,
//         labTest: labTestArray
//       });
//     });

//     // Add unmatched labTitles from arr2
//     arr2?.forEach((item2:any) => {
//       const matchingItem = arr1?.find((item1:any) => item1?.labTitle === item2?.labTitle);
//       if (!matchingItem) {
//         comparedArray?.push({
//           title: item2?.labTitle,
//           labTest: item2?.labTest ? item2?.labTest?.map((test:any) => ({ title: ['-', test?.title] })) : null
//         });
//       }
//     });

//     return comparedArray;
//   }

//   export default compareLabArrays

const compareLabArrays = (...arrayData: any[]) => {
  let arrays = arrayData.filter(arr => arr !== undefined);
  // console.log(arrays.length, 'a')
  const comparedArray: { title: any; labTest: { title: any[]; }[]; }[] = [];

  // if (arrays.length < 2 || arrays.length > 4) {
  //   throw new Error("You must provide between 2 and 4 arrays for comparison.");
  // }

  // Combine all arrays into one set of unique labTitles
  const allLabTitles = new Set(arrays.flatMap(arr => arr?.map((item: { labTitle: any; }) => item.labTitle)));

  // Iterate over each unique labTitle
  allLabTitles.forEach(labTitle => {
    // Find matching items in each array based on labTitle
    const items = arrays.map(arr => arr?.find((item: { labTitle: any; }) => item.labTitle === labTitle));

    // Extract labTest values from each item
    const labTests = items.map(item => item?.labTest ? item.labTest.map((test: { title: any; }) => test.title) : []);

    // Combine labTest values from all arrays
    const combinedLabTests = [...new Set(labTests.flat())];

    // Generate labTest array with comparison
    const labTestArray = combinedLabTests.map(test => {
      const titles = labTests.map(labTest => labTest.includes(test) ? test : '-');
      return { title: titles };
    });

    comparedArray.push({
      title: labTitle,
      labTest: labTestArray,
    });
  });

  return comparedArray;
};

export default compareLabArrays;

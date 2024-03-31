// Code your solution here
function findMatching(source, sought) {
    return source.filter(
       (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
   }
   
   //  performs fuzzy matching in a source array
   function fuzzyMatch(source, testString) {
    return source.filter(
       (possibleMatch) =>
         possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
   }
   
   // match elements in a source array by a specific property (name)
   function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
   }
  
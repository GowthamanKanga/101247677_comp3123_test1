const lowerCaseWords = function(mixArr)
{
  return new Promise((res,rej) => 
  {
    if (mixArr.filter(element => typeof element === "string"))
    {
      const strArr = mixArr.filter(element => typeof element === "string")
      .map((element) => element.toLowerCase());
      res(strArr);
    }
    else
    {
      rej("Error - no string the array to lowercase");
    }

    return Promise;
  });
};

const mixArr = ["PIZZA", 10, true, 25, false, "Wings"];

lowerCaseWords(mixArr).then((mixArr) => 
{
  console.log(mixArr);
});
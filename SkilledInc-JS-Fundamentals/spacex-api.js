// Create a program that will pull data from SpaceX api 'https://api.spacexdata.com/v3/history’ and display wikipedia link for each history event that comes back.
// Wikipedia link is stored in the links object. Do not print null results.
// Please implement using regular promises as well as using async/await syntax.

async function getData() {
  try {
    const response = await fetch("https://api.spacexdata.com/v3/history");
    const data = await response.json();
    const wikiObj = {};
    data.forEach((elem) => {
      wikiObj[elem.title] = elem.links.wikipedia;
    });
    console.log(wikiObj);
  } catch (error) {
    console.log(error);
  }
}

// click the console on the bottom right and uncomment to run
// getData();

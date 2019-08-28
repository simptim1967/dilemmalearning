// Require and initialize outside of your main handler
const mysql = require('serverless-mysql')({
  config: {
    host: process.env.RDS_HOSTNAME,
    database: process.env.RDS_DB,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD
  }
})

// Main handler function
exports.handler = async (event, context) => {
  // Extract required page name
  let pagename = event.queryStringParameters.pagename;
  
  // Check if page name has invlid characters such as space or any of ?{}[]+_!()%*,
  // Must match a-z0-9 and "-"
  // TODO !!!

  // Check that page name was specified
  if (pagename === undefined) {
    console.log("IncrementPageLikeCount pagename URL parameter not specified.");
    // throw a 400 bad request if pagename is not defined
    const response = {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": process.env.CORS_ORIGIN,
        "Content-Type": "application/json"
      },
      body: "400 Bad request: pagename URL parameter not specified."
    };
    return response;
  }

  console.log("event: " + JSON.stringify(event));
  console.log("IncrementPageLikeCount selected page name: " + pagename);

  // Attempt to incrment page ike count
  let updatesql = "update pagelike set likecount=likecount+1 where pagename=?;"
  let results = await mysql.query(updatesql, pagename)

  console.log(results.affectedRows + " record(s) updated");

  // Was the page like count actually updated
  // throw a 404 page not found if results empty
  if (results.affectedRows < 1) {
    console.log("404 IncrementPageLikeCount page not found: " + pagename);
    // throw a 404 page not found if no results returned
    const response = {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": process.env.CORS_ORIGIN,
        "Content-Type": "application/json"
      },
      body: "404 Page not found: " + pagename
    };
    return response;
  }
  
  // construct sql statement
  let sql = "select pagename, likecount from pagelike where pagename = ?;"

  // get page name and updated like count
  results = await mysql.query(sql, pagename)

  // Run clean up function
  await mysql.end()

  console.log("Results: " + JSON.stringify(results))
  let responsebody = results;

  // Return the result
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.CORS_ORIGIN,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(responsebody)
  };

  return response;
}

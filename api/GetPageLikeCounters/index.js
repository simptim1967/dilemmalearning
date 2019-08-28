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
  // Extract required group name
  let groupname = event.queryStringParameters.groupname;
  
  // Check if group name has any invalid characters such as space or any of ?{}[]+_!()%*,
  // Must match a-z characters only
  // TODO !!!

  // Check that group name was specified
  if (groupname === undefined) {
    console.log("GetPageLikeCount groupname URL parameter not specified.");
    // throw a 400 bad request if groupname is not defined
    const response = {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin": process.env.CORS_ORIGIN,
        "Content-Type": "application/json"
      },
      body: "400 Bad request: groupname URL parameter not specified."
    };
    return response;
  }

  console.log("event: " + JSON.stringify(event));
  console.log("GetPageLikeCounters selected group name: " + groupname);

  // construct sql statement
  let sql = "select pagename, likecount from pagelike where pagegroup = ?;"

  // list page name and like count
  let results = await mysql.query(sql, groupname)

  // Run clean up function
  await mysql.end()

  // throw a 404 page not found if results empty
  if (!results.length) {
    console.log("404 GetPageLikeCounters page group not found: " + groupname);
    // throw a 404 page not found if no results returned
    const response = {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": process.env.CORS_ORIGIN,
        "Content-Type": "application/json"
      },
      body: "404 Page group not found: " + groupname
    };
    return response;
  }
  
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

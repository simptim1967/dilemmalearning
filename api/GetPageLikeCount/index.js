exports.handler = async (event) => {
    console.log("In lambda handler");
    
    const response = {
        statusCode: 200,
        headers: {
         "Access-Control-Allow-Origin": "*",
        },
        body: "55"
    };
    
    return response;
};

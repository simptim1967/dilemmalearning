        //Call the Lambda function to get the current page like count
        function getPageLikeCount() {
            var pagename = getPageName(window.location.href);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let results = JSON.parse(this.responseText);
                    let count = results[0].likecount;
                    if (count > 0) {
                        document.getElementById("likeCount").innerHTML = "(" + count + ")";
                    }
                }
            };
            // Correct API/method name
            xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/live/GetPageLikeCount?pagename="+pagename, true);
            xhttp.send();
        }

        //Call the Lambda function to get the current page like count for each page belonging to the named group
        function getPageLikeCounters(groupname) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let results = JSON.parse(this.responseText);
                    // Iterate the array of results and set each page like count for all the pages in the group
                    for(i=0; i<results.length; i++) {
                        let count = results[i].likecount;
                        if (count > 0) {
                            // Set page like count
                            document.getElementById(results[i].pagename).innerHTML = "(" + count + ")";
                            // Make page like count visible
                            document.getElementById("like"+results[i].pagename).classList.remove("hidden");
                        }
                    }
                }
            };
            // TODO Correct API/method name
            xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/live/GetPageLikeCounters?groupname="+groupname, true);
            xhttp.send();
        }

        function incrementPageLikeCount()
        {
            // Handle like button click
            var pagename = getPageName(window.location.href);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    let results = JSON.parse(this.responseText);
                    let count = results[0].likecount;
                    // Hide like button
                    document.getElementById("likeButton").classList.add("hidden");
                    // Say thanks for liking this page and set the updated like count
                    document.getElementById("newLikeCount").innerHTML = "(" + count + ")";
                    // Reveal thank you message and new like count
                    document.getElementById("thankyou").classList.remove("hidden");
                }
            };
            // Correct API/method name
            xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/live/IncrementPageLikeCount?pagename="+pagename, true);
            xhttp.send();
        }

        function getPageName(url)
        {
            let i = url.lastIndexOf("/");
            let i2 = url.lastIndexOf(".html");
            let pageName = url.substring(i+1,i2);
            return pageName;
        }


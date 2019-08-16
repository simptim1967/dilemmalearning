        //Call the Lambda function to get the current page like count
        function getPageLikeCount() {
            var pageName = getPageName(window.location.href);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    document.getElementById("likeCount").innerHTML = "(" + this.responseText + ")";
                }
            };
            // Udemy API/method name
            //xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/default/UdemyTutorialLambda?pageName="+pageName, true);
            
            // Correct name
            xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/test/GetPageLikeCount?pageName="+pageName, true);
            xhttp.send();
        }

        //Call the Lambda function to get the current page like count for each page belonging to the named group
        function getPageGroupLikeCounts(groupName) {
            var pageName = getPageName(window.location.href);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Set each page like count for all the pages in the group
                    // TODO !!!
                    document.getElementById("likeCount").innerHTML = "(" + this.responseText + ")";
                }
            };
            // Udemy API/method name
            //xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/default/UdemyTutorialLambda?pageName="+pageName, true);
            
            // Correct name
            xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/test/GetPageLikeCount?pageName="+pageName, true);
            xhttp.send();
        }

        function incrementPageLikeCount()
        {
            // Handle like button click
            var pageName = getPageName(window.location.href);
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    // Hide like button
                    document.getElementById("likeButton").classList.add("hidden");
                    // Say thanks for liking this page and set the updated like count
                    document.getElementById("newLikeCount").innerHTML = "(" + this.responseText + ")";
                    // Reveal thank you message and new like count
                    document.getElementById("thankyou").classList.remove("hidden");
                }
            };
            // Udemy API/method name
            //xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/default/UdemyTutorialLambda?pageName="+pageName, true);
            
            // Correct name
            xhttp.open("GET", "https://dcmhionaf3.execute-api.eu-west-2.amazonaws.com/test/GetPageLikeCount?pageName="+pageName, true);
            xhttp.send();
        }

        function getPageName(url)
        {
            let i = url.lastIndexOf("/");
            let i2 = url.lastIndexOf(".html");
            let pageName = url.substring(i+1,i2);
            return pageName;
        }


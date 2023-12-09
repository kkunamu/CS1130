    function showAssignments() {
        var userNameInput = document.getElementById("userNameInput");
        var userName = userNameInput.value.trim().toLowerCase();

        if (userName !== "") {
            var fontSize = Math.min(36, 120 / Math.max(1, userName.length));

            var welcomeMessage = document.getElementById("welcomeMessage");
            welcomeMessage.innerHTML = "Welcome " + userName;
            welcomeMessage.style.fontSize = fontSize + "px";

            document.getElementById("overlay").style.display = "none";
            document.getElementById("content").style.display = "block";

            // Store the user's name in localStorage
            localStorage.setItem("userName", userName);

            document.getElementById("blurredBackground").style.display = "block";
        }
    }

    function toggleAssignments() {
        var welcomeMessage = document.getElementById("welcomeMessage");
        var arrow = document.getElementById("arrow");
        var assignmentList = document.getElementById("assignmentList");

        welcomeMessage.style.display = "none";
        arrow.style.display = "none"; // Hide the arrow during the assignment list
        assignmentList.style.display = "block";
        help.style.display = "block";
        document.getElementById("blurredBackground").style.display = "block";
    }

    function resetState() {
        var overlay = document.getElementById("overlay");
        var welcomeMessage = document.getElementById("welcomeMessage");
        var arrow = document.getElementById("arrow");
        var assignmentList = document.getElementById("assignmentList");
        var userNameInput = document.getElementById("userNameInput");

        overlay.style.display = "flex";
        welcomeMessage.style.display = "block";
        arrow.style.display = "block"; // Show the arrow during the welcome message
        assignmentList.style.display = "none";
        userNameInput.value = "";

        // Check if the user's name is stored in localStorage
        var storedUserName = localStorage.getItem("userName");
        if (storedUserName) {
            // Skip the entire overlay, welcome message, and show the assignment list
            overlay.style.display = "none";
            document.getElementById("content").style.display = "block";
            welcomeMessage.style.display = "none";
            arrow.style.display = "none"; // Hide the arrow when the assignment list is displayed
            assignmentList.style.display = "block";
            help.style.display = "block";
            document.getElementById("blurredBackground").style.display = "block";
        } else {
            // Delayed prompt messages
            setTimeout(function () {
                document.getElementById("promptMessage").innerHTML = "What's your name?";
                userNameInput.style.display = "block";
                document.getElementById("pressEnter").style.display = "block";
                arrow.style.display = "block"; // Show the arrow after the welcome message
                help.style.display = "none";
                document.getElementById("blurredBackground").style.display = "none";
            }, 3000);
        }
    }
    document.addEventListener('DOMContentLoaded', function () {
        var links = document.querySelectorAll('a'); // Adjust the selector based on your links
        var loadingOverlay = document.getElementById('loadingOverlay');

        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();

        // Show loading overlay
        loadingOverlay.style.display = 'flex';

            var href = this.getAttribute('href');

    // Redirect to the new webpage after a delay (adjust the delay as needed)
    setTimeout(function () {
        window.location.href = href;
                }, 1000); // Adjust the delay as needed
            });
        });
    });
    // Call the resetState function on page load
    resetState();


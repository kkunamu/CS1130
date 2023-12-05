function showAssignments() {
    var userName = document.getElementById("userNameInput").value;
    if (userName != null && userName != "") {
        document.getElementById("welcomeMessage").innerHTML = "Welcome " + userName + " <span id='arrow' onclick='toggleAssignments()'>&#9658;</span>";
        document.getElementById("overlay").style.display = "none";
        document.getElementById("content").style.display = "block";
    }
}

function toggleAssignments() {
    var assignmentList = document.getElementById("assignmentList");
    assignmentList.style.display = assignme ntList.style.display === "none" ? "block" : "none";
}

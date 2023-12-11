document.addEventListener("DOMContentLoaded", function() {
    closeAllDropdowns();
});

function toggleDropdown(id) {
    var dropdownContent = document.getElementById(id);
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
     
        closeAllDropdowns();
        dropdownContent.style.display = "block";
    } 
    
    else {
        dropdownContent.style.display = "none";
    }
}

function closeAllDropdowns() {
    var dropdownContents = document.querySelectorAll('.dropdown-content');
    dropdownContents.forEach(function (content) {
        content.style.display = "none";
    });
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-btn')) {
        closeAllDropdowns();
    }
}

//================ share ==================
function compartir() {
    if (navigator.share) {
        navigator.share({
            title: document.title,
            text:  document.title,
            url: window.location.href
        });
    } else {
        alert("The sharing feature is not available in this browser.");
    }
}

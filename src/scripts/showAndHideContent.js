function showAndHideContent(currentPage, nextPage) {
    if (document.getElementById(currentPage) !== null && document.getElementById(nextPage) !== null) {
        document.getElementById(currentPage).hidden = true;
        document.getElementById(nextPage).hidden = false;
    }
    else {
        document.getElementById(currentPage).hidden = true;
    }
}

module.exports = showAndHideContent;
const catEl = document.querySelectorAll('.item');
console.log('Number of categories:', catEl.length);

catEl.forEach(function (categories) {
    console.log("Category:", categories.firstElementChild.textContent);
    console.log("Elements:", categories.lastElementChild.children.length)
});
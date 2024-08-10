const categories = document.querySelectorAll('#categories .item');
console.log('Кількість категорій:', categories.length);

categories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const title = category.querySelectorAll('ul li').length;
    console.log(`Категорія: ${categoryTitle}, Кількість елементів: ${title}`);
})

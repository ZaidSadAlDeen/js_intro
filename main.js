const getProducts = async() => {
    const { data } = await axios.get(`https://fakestoreapi.com/products`);
    console.log(data);
    const result = data.map((element) => {
        return `
        <h2>${element.title}</h2>
        <img src="${element.image}" width=500px height=500px>
        <a href="details.html?id=${element.id}">details</a>
        `
    }).join('');

    document.querySelector(`body`).innerHTML = result;
}
getProducts();
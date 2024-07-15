const getProduct = async() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
    console.log(data);
    const result = `
    <h2>${data.title}</h2>
    <p>${data.description}</p>
        <img src="${data.image}" width=500px height=500px>
    `

    document.querySelector(`body`).innerHTML = result;
}
getProduct();
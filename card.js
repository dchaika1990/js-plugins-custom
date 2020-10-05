const fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://cardiffstudentmedia.co.uk/gairrhydd/wp-content/uploads/sites/2/2019/12/apple-2-990x556.jpg'},
    {id: 2, title: 'Oranges', price: 30, img: 'https://www.medicalmedium.com/blog-photos/orange33.jpg'},
    {id: 3, title: 'Mango', price: 40, img: 'http://xaoc-lab.ru/image/cache/catalog/FA/FA%20Mango-428x428.jpg'}
]

const card = function (options) {
    const wrap = document.createElement('div')
    wrap.classList.add('col')
    wrap.insertAdjacentHTML('beforeend', `
        <div data-card data-price="${options.price}" id="${options.id}" class="card">
            <img src="${options.img}" class="card-img-top" alt="apples">
            <div class="card-body">
                <h5 class="card-title">${options.title}</h5>
                <a href="#" class="btn btn-primary">Look a price</a>
                <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
    `)
    return wrap
}

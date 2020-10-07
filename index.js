const fruits = [
    {id: 1, title: 'Apples', price: 20, img: 'https://cardiffstudentmedia.co.uk/gairrhydd/wp-content/uploads/sites/2/2019/12/apple-2-990x556.jpg'},
    {id: 2, title: 'Oranges', price: 30, img: 'https://www.medicalmedium.com/blog-photos/orange33.jpg'},
    {id: 3, title: 'Mango', price: 40, img: 'http://xaoc-lab.ru/image/cache/catalog/FA/FA%20Mango-428x428.jpg'}
]

// Show products
const toHTML = fruit => `
    <div class="col">
        <div data-card data-price="${fruit.price}"  class="card">
            <img src="${fruit.img}" class="card-img-top" alt="${fruit.title}">
            <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Look a price</a>
                <a href="#" class="btn btn-danger">Delete</a>
            </div>
        </div>
    </div>
`

function render() {
    const html = fruits.map(toHTML).join('')
    document.querySelector('.products').innerHTML = html
}

render()
//---------------

// Add modal to product
document.addEventListener('click', event => {
    event.preventDefault();
    const btnType = event.target.dataset.btn;
    const id = +event.target.dataset.id;

    if (btnType === 'price') {
        const fruit = fruits.find(f => {
            return  f.id === id
        })
        priceModal.setContent(`
            <p>Price of ${fruit.title} is <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open()
    }
})



// const singleProduct = [].slice.call(document.querySelectorAll('[data-card]'))
// singleProduct.forEach(product => {
//     const productTitle = product.querySelector('.card-title').textContent
//     const productPrice = product.getAttribute('data-price')
//     const handler = function(){
//         const priceModal = $.modal({
//             title: productTitle,
//             content: `
//                 <p>Price: ${productPrice}</p>
//             `,
//             closable: true,
//             footerButtons: [
//                 {
//                     text: 'Close', type: 'danger', handler() {
//                         priceModal.close()
//                         priceModal.destroy()
//                     }
//                 }
//             ]
//         })
//         priceModal.open()
//     }
//     product.querySelector('.btn-primary').addEventListener('click', handler)
// })


// Modal
const priceModal = $.modal({
    title: 'Product price',
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Close', type: 'primary', handler() {
                priceModal.close()
            }
        },
    ]
})
let fruits = [
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
                <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Delete</a>
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
    const fruit = fruits.find(f => {
        return  f.id === id
    })

    if (btnType === 'price') {
        priceModal.setContent(`
            <p>Price of ${fruit.title} is <strong>${fruit.price}$</strong></p>
        `)
        priceModal.open()
    } else if( btnType === 'remove' ){
        $.confirm({
            title: 'Are you sure?',
            content: `<p>You are deleting fruit <strong>${fruit.title}</strong></p>`
        })
            .then(()=> {
                fruits = fruits.filter(f => f.id !== id)
                render()
            })
            .catch(() => {
                console.log('cancel')
            })
    }
})

// Modal Price
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

// Modal Delete
// const confirmModal = $.modal({
//     title: 'Are you right?',
//     closable: true,
//     width: '400px',
//     footerButtons: [
//         {
//             text: 'Cancel', type: 'secondary', handler() {
//                 confirmModal.close()
//             }
//         },
//         {
//             text: 'Delete', type: 'danger', handler() {
//                 confirmModal.close()
//             }
//         },
//     ]
// })
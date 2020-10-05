const products = document.querySelector('.products')

fruits.forEach( fruit => {
    products.insertAdjacentElement('beforeend', card(fruit))
} )

/*
*   1. Динамически вывести карточки товаров
*   2. Показать цену в модалке (и это должна быть одна модалка)
 */

const singleProduct = [].slice.call(document.querySelectorAll('[data-card]'))
singleProduct.forEach(product => {
    const productTitle = product.querySelector('.card-title').textContent
    const productPrice = product.getAttribute('data-price')
    const handler = function(){
        const priceModal = $.modal({
            title: productTitle,
            content: `
                <p>Price: ${productPrice}</p>
            `,
            closable: true,
            footerButtons: [
                {
                    text: 'Close', type: 'danger', handler() {
                        priceModal.close()
                        priceModal.destroy()
                    }
                }
            ]
        })
        priceModal.open()
    }
    product.querySelector('.btn-primary').addEventListener('click', handler)
})


// Modal
const modal = $.modal({
    title: 'New title',
    content: `
        <h4>Modal is working</h4>
        <p>A lot of texts</p>
    `,
    closable: true,
    width: '400px',
    footerButtons: [
        {
            text: 'Ok', type: 'primary', handler() {
                console.log('Primary btn clicked')
                modal.close()
            }
        },
        {
            text: 'Cancel', type: 'danger', handler() {
                console.log('Danger btn clicked')
            }
        }
    ]
})
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
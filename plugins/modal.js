function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
        <div class="modal-overlay">
            <div class="modal-window" style="width: ${options.width}">
                <div class="modal-header">
                    <span class="modal-title">${options.title}</span>
                    <span class="modal-close">&times;</span>
                </div>
                <div class="modal-body">
                    <p>${options.content}</p>
                </div>
                <div class="modal-footer">
                    <button>ok</button>
                    <button>cancel</button>
                </div>
            </div>
        </div>
    `)
    document.body.appendChild(modal)
    return modal;
}
/*
* title: string
* closable: boolean
* content: string
* width: string ('400px')
* окно должно закрываться как на крестик так и на шейп
* destroy(): void (удилаить модалку и все слушатели)
* --------------
* setContent(html: string): void | public
* onClose(): void
* onOpen(): void
*
 */
$.modal = function (options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    const $modalClose = $modal.querySelector('.modal-close')
    const $modalWindow = $modal.querySelector('.modal-window')
    const $modalOverlay = $modal.querySelector('.modal-overlay')
    let closing = false
    const _close = () => {
        if (!options.closable) return;
        closing = true
        $modal.classList.remove('open')
        $modal.classList.add('hide')
        setTimeout(()=>{
            $modal.classList.remove('hide')
            closing = false
        }, ANIMATION_SPEED)
    }

    $modalClose.addEventListener('click', _close)
    $modalWindow.addEventListener('click', (e) => e.stopPropagation())
    $modalOverlay.addEventListener('click', _close)
    return {
        open(){
            !closing && $modal.classList.add('open')
        },
        close(){
            _close()
        },
        destroy(){
            $modalClose.removeEventListener('click', _close)
            $modalWindow.removeEventListener('click', (e) => e.stopPropagation())
            $modalOverlay.removeEventListener('click', _close)
        }
    }
}
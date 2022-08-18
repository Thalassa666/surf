class FullMenu {
    constructor(selector) {
        this.menu = document.querySelector(selector)

        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-menu]')
            
            if(target) {
                const event = target.dataset.menu

                this[event]()
            }
        })
    }

    open() {
        this.menu.classList.add('open')
        document.body.style.overflow = 'hidden'
    }

    close() {
        this.menu.classList.remove('open')
        document.body.style.overflow = 'auto'
    }
}

var menu = new FullMenu('#full-menu')
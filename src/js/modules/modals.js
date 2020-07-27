const modals = () => {
    function bindModals(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault
            }
            modal.style.display = 'block'
            document.body.classList.add = 'modal-open'
        })

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none'
                document.body.classList.remove = 'modal-open'
            }
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.classList.remove = 'modal-open'
        })
    }

    const callEngineerBtn = document.querySelector('.popup_engineer_btn'),
        modalEngineer = document.querySelector('.popup_engineer'),
        modalEngineerClose = document.querySelector('.popup_engineer .popup_close')

    bindModals(callEngineerBtn, modalEngineer, modalEngineerClose)
}

export default modals
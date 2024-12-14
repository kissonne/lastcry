
        // Открытие модального окна
        const openModal = document.getElementById('openModal');
        const modal = document.getElementById('modal');
        const closeModal = document.getElementById('closeModal');

        openModal.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        // Закрытие модального окна
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        // Закрытие модального окна при клике вне его
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    
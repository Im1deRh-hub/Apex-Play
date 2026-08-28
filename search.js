document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    function filterCards() {
        const filter = searchInput.value.toLowerCase().trim();
        const cards = document.querySelectorAll('.game-card');

        cards.forEach(card => {
            const titleElement = card.querySelector('h3');
            if (titleElement) {
                const titleText = titleElement.textContent.toLowerCase();
                if (titleText.includes(filter)) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            }
        });
    }

    // تشغيل البحث عند النقر على الزر
    if (searchBtn) {
        searchBtn.addEventListener('click', filterCards);
    }

    // تشغيل البحث أثناء الكتابة
    if (searchInput) {
        searchInput.addEventListener('keyup', filterCards);
    }
});
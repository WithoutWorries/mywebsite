<!-- JavaScript for Popup Functionality -->

    function openPopup(contentId) {
        const content = document.getElementById(contentId).innerHTML;
        document.getElementById('popupInnerContent').innerHTML = content;
        document.getElementById('logoPopup').style.display = 'flex';
    }

    function closePopup() {
        document.getElementById('logoPopup').style.display = 'none';
    }

    window.onclick = function(event) {
        const popup = document.getElementById('logoPopup');
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }




<!-- JavaScript animated count -->

        function animateCount(el, target) {
            let current = 0;
            const increment = Math.ceil(target / 100);
            const update = () => {
                current += increment;
                if (current > target) current = target;
                el.textContent = current.toLocaleString();
                if (current < target) requestAnimationFrame(update);
            };
            update();
        }

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counterEl = entry.target.querySelector('.count');
                    const targetCount = parseInt(entry.target.getAttribute('data-count'), 10);
                    animateCount(counterEl, targetCount);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.follower-counter').forEach(counter => {
            observer.observe(counter);
        });

        function openPopup(contentId) {
            document.getElementById('popupInnerContent').innerHTML = document.getElementById(contentId).innerHTML;
            document.getElementById('logoPopup').style.display = 'flex';
        }

        function closePopup() {
            document.getElementById('logoPopup').style.display = 'none';
        }

        window.onclick = event => {
            if (event.target === document.getElementById('logoPopup')) closePopup();
        };



<!-- Hidden Descriptive Content for Popups -->

function openPopup(filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById('popupInnerContent').innerHTML = html;
            document.getElementById('logoPopup').style.display = 'flex';
        })
        .catch(err => {
            document.getElementById('popupInnerContent').innerHTML = '<p>Error loading content.</p>';
            console.error('Popup load error:', err);
        });
}

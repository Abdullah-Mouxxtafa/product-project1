// Add a hover effect for menu items
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
        item.style.boxShadow = 'none';
    });
});

 // Lấy button back to top
 const backToTop = document.querySelector('.back-to-top');

 // Xử lý hiển thị/ẩn button khi scroll
 window.addEventListener('scroll', () => {
     if (window.pageYOffset > 20) {
         backToTop.classList.add('active');
     } else {
         backToTop.classList.remove('active');
     }
 });

 // Xử lý sự kiện click vào button
 backToTop.addEventListener('click', () => {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });

 document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.collapse');
    
    toggleButton.addEventListener('click', function() {
        // Toggle class 'show' trên phần tử collapse
        navbarCollapse.classList.toggle('show');
        
        // Thêm/xóa attribute aria-expanded để hỗ trợ accessibility
        const isExpanded = navbarCollapse.classList.contains('show');
        toggleButton.setAttribute('aria-expanded', isExpanded);
    });
});
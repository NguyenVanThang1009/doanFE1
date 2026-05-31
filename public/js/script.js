
        function slideSlider(direction) {
            const slider = document.getElementById('gottaHaveItSlider');
            // Lấy chính xác chiều rộng của 1 thẻ sản phẩm con (cột) để trượt mượt mà
            const itemWidth = slider.firstElementChild.offsetWidth; 
            
            if (direction === 'left') {
                slider.scrollBy({ left: -itemWidth, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        }

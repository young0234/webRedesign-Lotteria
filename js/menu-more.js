/* left */
fetch('/webRedesign-Lotteria/include/left.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.left-include').innerHTML = data;

  });

/* right */
fetch('/webRedesign-Lotteria/include/right.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.right-include').innerHTML = data;

  });

/* 헤더 불러오기 */
fetch('/webRedesign-Lotteria/include/header.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.header-include').innerHTML = data;

    // 메뉴 토글
    const menuOpenBtn = document.querySelector('.menu-open-btn');
    const menuCloseBtn = document.querySelector('.menu-close-btn');
    const menuAside = document.querySelector('.menu-aside');

    if (menuOpenBtn && menuCloseBtn && menuAside) {
      menuOpenBtn.addEventListener('click', () => {
        menuAside.classList.toggle('active');
      });
      menuCloseBtn.addEventListener('click', () => {
        menuAside.classList.remove('active');
      });
    }

    // 로그인 토글
    const loginLink = document.querySelector('.menu-login');
    const loginWrap = document.querySelector('.login-wrap');
    const cartWrap = document.querySelector('.cart-wrap');

    if (loginLink && loginWrap) {
      loginLink.addEventListener('click', e => {
        e.preventDefault();
        loginWrap.classList.toggle('active');

        // 로그인 창 열리면 장바구니 닫기
        if (loginWrap.classList.contains('active') && cartWrap) {
          cartWrap.classList.remove('active');
        }
      });
    }

    // 로그인 폼 처리
    const loginBtn = document.querySelector('.login');
    const emailInput = document.querySelector('.id input');
    const passwordInput = document.querySelector('.password input');

    if (loginBtn && emailInput && passwordInput) {
      loginBtn.addEventListener('click', e => {
        e.preventDefault();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (!email || !password) {
          alert('이메일과 비밀번호를 모두 입력하세요.');
          return;
        }
        console.log('로그인 시도:', email, password);
        // 로그인 처리 추가 가능
      });
    }

    const loginCloseBtn = document.querySelector('.login-wrap .close-btn');
    if (loginCloseBtn && loginWrap) {
      loginCloseBtn.addEventListener('click', () => {
        loginWrap.classList.remove('active');
      });
    }

    // 장바구니 버튼 이벤트
    const shoppingBtn = document.querySelector('.menu-shopping-btn');

    if (shoppingBtn && cartWrap) {
      shoppingBtn.addEventListener('click', () => {
        cartWrap.classList.toggle('active');

        // 장바구니 열리면 로그인창 닫기
        if (cartWrap.classList.contains('active') && loginWrap) {
          loginWrap.classList.remove('active');
        }
      });
    }

    // 장바구니 닫기(X) 버튼 이벤트
    const cartCloseBtn = document.querySelector('.cart-close-btn');
    if (cartCloseBtn && cartWrap) {
      cartCloseBtn.addEventListener('click', () => {
        cartWrap.classList.remove('active');
      });
    }

    // 장바구니 수량 및 총합 업데이트
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.querySelector('.cart-summary .total-line span:last-child');

    function updateTotal() {
      let total = 0;

      cartItems.forEach(item => {
        const priceText = item.querySelector('.item-price').textContent;
        const quantityText = item.querySelector('.quantity-number').textContent;

        const price = parseInt(priceText.replace(/[^0-9]/g, ''));
        const quantity = parseInt(quantityText);

        total += price * quantity;
      });

      if (totalPriceElement) {
        totalPriceElement.textContent = total.toLocaleString() + '원';
      }
    }

    cartItems.forEach(item => {
      const minusBtn = item.querySelector('button:first-child');
      const plusBtn = item.querySelector('button:last-child');
      const quantityNumber = item.querySelector('.quantity-number');

      minusBtn?.addEventListener('click', () => {
        let current = parseInt(quantityNumber.textContent);
        if (current > 1) {
          quantityNumber.textContent = current - 1;
          updateTotal();
        }
      });

      plusBtn?.addEventListener('click', () => {
        let current = parseInt(quantityNumber.textContent);
        quantityNumber.textContent = current + 1;
        updateTotal();
      });
    });

    updateTotal();
  });
  
/* 스와이퍼 */
var swiper = new Swiper(".item-more-item-swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "3",
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -10,
    depth: 0,
    modifier: 1,
    slideShadows: false,
  },
});

/* footer */
fetch('/webRedesign-Lotteria/include/footer.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.footer-include').innerHTML = data;

    window.onscroll = function () {
      const btn = document.getElementById("topBtn");
      if (btn) {
        btn.style.display = (window.scrollY > 300) ? "flex" : "none";
      }
    };
  });

/* bottom */
fetch('/webRedesign-Lotteria/include/bottom.html')
  .then(response => response.text())
  .then(data => {
    document.querySelector('.bottom-include').innerHTML = data;
  });
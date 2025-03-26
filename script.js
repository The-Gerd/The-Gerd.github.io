// Traducciones completas para todo el sitio
const translations = {
    en: {
      // Navegación común
      "nav-home": "Home",
      "nav-about": "About Us",
      "nav-products": "Products",
      "nav-contact": "Contact",
      "nav-terms": "Terms and Conditions",
      
      // Index Page
      "info-message": "Information",
      "mision-title": "Mission",
      "mision-text": "To be a Mexican company recognized in South Korea for bringing fruit flavors to Koreans through dehydrated fruit snacks.",
      "vision-title": "Vision",
      "vision-text": "Position our Mexican fruit snacks as a preferred and regular option in the Korean market, satisfying the needs and preferences of Korean consumers and establishing a solid and sustainable presence.",
      "values-title": "Values",
      "value1": "Responsibility",
      "value2": "Loyalty",
      "value3": "Quality",
      "value4": "Trust",
      "value5": "Integrity",
      "value6": "Commitment",
      "value7": "Respect",
      "sales-title": "Sales Speech",
      "sales-text": "Hello good afternoon. We are Snack Gwail, exporters of dehydrated fruit from Mexico. We offer a variety of Mexican fruits, 100% natural, no added sugars. Our products are ideal for the South Korean market, which seeks healthy and exotic snacks. With long shelf life and easy distribution, they are perfect for supermarkets and convenience stores. We are looking for business partners to bring these unique flavors to South Korea. Let's talk business!",
      
      // Product Page
      "products-page-title": "Export Products - Snack Gwail",
      "products-title": "Our Products",
      "product-mango-desc": "Dehydrated mango chips, healthy and natural snack.",
      "product-mango-full-desc": "Delicious dehydrated mango chips, no added sugar, ideal for a healthy and natural snack.",
      "specifications": "Specifications:",
      "raw-material": "Raw material:",
      "pineapple-raw": "100% natural pineapple.",
      "mango-raw": "100% natural mango.",
      "weight": "Weight:",
      "content": "Content:",
      "pineapple-content": "Dehydrated pineapple pieces.",
      "mango-content": "Dehydrated mango slices.",
      "nutrition-info": "Nutritional information (per 25g serving):",
      "calories": "Calories:",
      "carbs": "Carbohydrates:",
      "natural-sugar": "Natural sugars:",
      "fiber": "Fiber:",
      "protein": "Protein:",
      "fat": "Fat:",
      "certifications": "Certifications:",
      "cert-details": "Organic, Gluten Free, No Preservatives.",
      "cert-details2": "Organic, No Preservatives, Kosher Certification.",
      "storage": "Storage:",
      "storage-details": "Store in an airtight container in a cool, dry place.",
      "storage-details2": "Keep in a cool, dry place, away from direct sunlight.",
      "price": "Price:",
      "add-to-cart": "Add to Cart",
      "cart-title": "Shopping Cart",
      "total": "Total:",
      "confirm-purchase": "Confirm Purchase",
      "empty-cart": "The cart is empty. Add products before confirming your purchase.",
      "purchase-confirmed": "Purchase confirmed! Total: $",
      
      // About Page
      "about-page-title": "About Us - Snack Gwail",
      "our-history": "Our History",
      "history-text1": "Snack Gwail was born in 2023 from the passion to bring Mexican fruit flavors to South Korea. Founded by a team of Mexican entrepreneurs with experience in international trade, we identified a unique opportunity in the Korean market, where consumers seek healthy and exotic snacks.",
      "history-text2": 'Our name "Gwail" (과일) means "fruit" in Korean, representing our mission to connect Mexican fruits with Korean palates. We started with a small line of dehydrated mango products and today we offer a variety of fruit snacks that meet the highest quality standards.',
      "history-text3": "What sets us apart is our commitment to authenticity. We work directly with local producers in Mexico to ensure the best quality, while adapting our products to the preferences of the Korean market, always maintaining the natural flavors and nutritional properties of the fruits.",
      "our-team": "Our Team",
      "ceo-role": "CEO and Founder",
      "ceo-desc": "International trade expert with over 10 years of experience in food product exports.",
      "operations-role": "Operations Director",
      "operations-desc": "Specialist in dehydration processes and quality control of fruit products.",
      "marketing-role": "Marketing Director",
      "marketing-desc": "Responsible for positioning our brand in the Korean market and developing digital strategies.",
      "our-values": "Our Values",
      "quality-value": "Quality:",
      "quality-desc": "We select only the best fruits and use dehydration processes that preserve flavor and nutrients.",
      "innovation-value": "Innovation:",
      "innovation-desc": "We constantly develop new products and flavors to meet market demands.",
      "sustainability-value": "Sustainability:",
      "sustainability-desc": "We work with responsible production methods and eco-friendly packaging.",
      "cultural-value": "Cultural bridge:",
      "cultural-desc": "We are proud to be a link between Mexico's fruit wealth and Korean consumers.",
      
      // Contact Page
      "contact-page-title": "Contact - Snack Gwail",
      "contact-form-title": "Contact Form",
      "contact-description": "Do you have any questions, comments or suggestions? We're here to help!",
      "name-label": "Name:",
      "name-placeholder": "Enter your name",
      "email-label": "Email:",
      "email-placeholder": "Enter your email",
      "subject-label": "Subject:",
      "subject-placeholder": "Message subject",
      "message-label": "Message:",
      "message-placeholder": "Write your message here",
      "submit-button": "Send Message",
      "contact-info-title": "Contact Information",
      "address-label": "Address:",
      "phone-label": "Phone:",
      "email-contact-label": "Email:",
      "location-title": "Location",
      
      // Terms Page
      "terms-page-title": "Terms and Conditions - Snack Gwail",
      "terms-section1-title": "1. Introduction",
      "terms-section1-text": "Welcome to Snack Gwail. These terms and conditions govern the use of our services and products. By accessing or using our services, you agree to be bound by these terms. If you disagree with any part of these terms, you should not use our services.",
      "terms-section2-title": "2. Definitions",
      "terms-company-def": "Snack Gwail",
      "terms-company-desc": "Refers to the fruit snack exporting company.",
      "terms-client-def": "Client",
      "terms-client-desc": "Person or entity that acquires our products or services.",
      "terms-products-def": "Products",
      "terms-products-desc": "Fruit snacks offered by Snack Gwail.",
      "terms-section3-title": "3. Use of Services",
      "terms-section3-text": "Snack Gwail services are intended solely for legitimate personal or commercial use. It is not permitted to use our products for illegal or unauthorized activities.",
      "terms-section4-title": "4. Orders and Payments",
      "terms-section4-text1": "When placing an order, you agree to provide accurate and complete information. Snack Gwail reserves the right to reject or cancel orders in case of incorrect information or suspected fraud.",
      "terms-section4-text2": "Product prices are subject to change without notice. Payments must be made in the currency and form specified at the time of purchase.",
      "terms-section5-title": "5. Shipping and Deliveries",
      "terms-section5-text": "Snack Gwail strives to meet estimated delivery times, but does not guarantee delivery on a specific date. Delays may occur due to factors beyond our control, such as weather conditions or customs.",
      "terms-section6-title": "6. Returns and Refunds",
      "terms-section6-text": "If you are not satisfied with your purchase, you may request a return or refund within 30 days of receiving the product. Products must be in their original, unopened condition. See our return policy for details.",
      "terms-section7-title": "7. Liability Limitation",
      "terms-section7-text": "Snack Gwail will not be liable for any indirect, incidental or consequential damages arising from the use of our products or services. Our maximum liability in any case will be the total value of the products purchased.",
      "terms-section8-title": "8. Intellectual Property",
      "terms-section8-text": "All intellectual property rights related to our products, brands and content are the exclusive property of Snack Gwail. It is not permitted to use, copy or distribute our material without prior written authorization.",
      "terms-section9-title": "9. Modifications",
      "terms-section9-text": "Snack Gwail reserves the right to modify these terms and conditions at any time. Modifications will take effect immediately after their publication on our website. It is the customer's responsibility to periodically review these terms.",
      "terms-section10-title": "10. Applicable Law",
      "terms-section10-text": "These terms and conditions are governed by the laws of the country where Snack Gwail has its main headquarters. Any dispute related to these terms will be subject to the exclusive jurisdiction of the courts of said country.",
      "terms-section11-title": "11. Contact",
      "terms-section11-text": "If you have any questions about these terms and conditions, you can contact us through:",
      "contact-email": "Email",
      "contact-phone": "Phone",
      "contact-address": "Address",
      "team-title": "Team Members",
      
      // Footer
      "copyright": "Snack Gwail. All rights reserved.",
      "instagram": "Instagram",
      "tiktok": "TikTok"
    },
    ko: {
      // Navegación común
      "nav-home": "홈",
      "nav-about": "회사 소개",
      "nav-products": "제품",
      "nav-contact": "연락처",
      "nav-terms": "이용 약관",
      
      // Index Page
      "info-message": "정보",
      "mision-title": "미션",
      "mision-text": "멕시코 회사로서 탈수 과일 스낵을 통해 한국인들에게 과일 맛을 전하는 것으로 인정받는 것.",
      "vision-title": "비전",
      "vision-text": "한국 시장에서 선호되고 정기적인 선택으로 멕시코 과일 스낵을 위치시키고, 한국 소비자의 요구와 선호를 충족시키며 견고하고 지속 가능한 입지를 구축하는 것.",
      "values-title": "가치",
      "value1": "책임감",
      "value2": "충성도",
      "value3": "품질",
      "value4": "신뢰",
      "value5": "진실성",
      "value6": "헌신",
      "value7": "존중",
      "sales-title": "판매 스피치",
      "sales-text": "안녕하세요. 우리는 멕시코에서 탈수 과일을 수출하는 Snack Gwail입니다. 첨가된 설탕 없이 100% 천연 멕시코 과일을 제공합니다. 우리 제품은 건강하고 이국적인 스낵을 찾는 한국 시장에 이상적입니다. 긴 유통 기한과 쉬운 유통으로 슈퍼마켓과 편의점에 완벽합니다. 우리는 이러한 독특한 맛을 한국에 가져올 비즈니스 파트너를 찾고 있습니다. 비즈니스 이야기를 나눠봅시다!",
      
      // Product Page
      "products-page-title": "수출 제품 - Snack Gwail",
      "products-title": "우리 제품",
      "product-mango-desc": "탈수 망고 칩, 건강하고 자연적인 스낵.",
      "product-mango-full-desc": "첨가된 설탕 없이 탈수된 맛있는 망고 칩, 건강하고 자연적인 스낵으로 이상적입니다.",
      "specifications": "사양:",
      "raw-material": "원료:",
      "pineapple-raw": "100% 천연 파인애플.",
      "mango-raw": "100% 천연 망고.",
      "weight": "무게:",
      "content": "내용물:",
      "pineapple-content": "탈수된 파인애플 조각.",
      "mango-content": "탈수된 망고 슬라이스.",
      "nutrition-info": "영양 정보 (25g 제공량당):",
      "calories": "칼로리:",
      "carbs": "탄수화물:",
      "natural-sugar": "천연 당류:",
      "fiber": "식이섬유:",
      "protein": "단백질:",
      "fat": "지방:",
      "certifications": "인증:",
      "cert-details": "유기농, 글루텐 프리, 방부제 없음.",
      "cert-details2": "유기농, 방부제 없음, 코셔 인증.",
      "storage": "보관:",
      "storage-details": "시원하고 건조한 곳에 밀폐 용기에 보관하십시오.",
      "storage-details2": "직사광선을 피해 서늘하고 건조한 곳에 보관하십시오.",
      "price": "가격:",
      "add-to-cart": "장바구니에 추가",
      "cart-title": "쇼핑 카트",
      "total": "총계:",
      "confirm-purchase": "구매 확인",
      "empty-cart": "카트가 비어 있습니다. 구매를 확인하기 전에 제품을 추가하세요.",
      "purchase-confirmed": "구매가 확인되었습니다! 총액: $",
      
      // About Page
      "about-page-title": "회사 소개 - Snack Gwail",
      "our-history": "우리의 역사",
      "history-text1": "Snack Gwail은 멕시코 과일의 맛을 한국에 전하기 위한 열정으로 2023년에 탄생했습니다. 국제 무역 경험이 있는 멕시코 기업가 팀이 한국 시장에서 건강하고 이국적인 스낵을 찾는 소비자들을 위한 독특한 기회를 발견했습니다.",
      "history-text2": '우리의 이름 "Gwail"(과일)은 한국어로 "과일"을 의미하며, 멕시코 과일과 한국인의 입맛을 연결하겠다는 우리의 사명을 나타냅니다. 우리는 소량의 탈수 망고 제품으로 시작해 현재는 최고 품질 기준을 충족하는 다양한 과일 스낵을 제공하고 있습니다.',
      "history-text3": "우리를 차별화하는 것은 진정성에 대한 헌신입니다. 우리는 최상의 품질을 보장하기 위해 멕시코의 현지 생산자와 직접 협력하며, 과일의 자연스러운 맛과 영양 성분을 유지하면서 한국 시장의 선호도에 맞게 제품을 조정합니다.",
      "our-team": "우리 팀",
      "ceo-role": "CEO 및 창립자",
      "ceo-desc": "10년 이상의 식품 수출 경험을 가진 국제 무역 전문가",
      "operations-role": "운영 디렉터",
      "operations-desc": "탈수 공정 및 과일 제품 품질 관리 전문가",
      "marketing-role": "마케팅 디렉터",
      "marketing-desc": "한국 시장에서 우리 브랜드를 포지셔닝하고 디지털 전략을 개발하는 역할",
      "our-values": "우리의 가치",
      "quality-value": "품질:",
      "quality-desc": "우리는 최상의 과일만을 선택하고 맛과 영양분을 보존하는 탈수 공정을 사용합니다.",
      "innovation-value": "혁신:",
      "innovation-desc": "우리는 시장의 요구를 충족시키기 위해 지속적으로 새로운 제품과 맛을 개발합니다.",
      "sustainability-value": "지속가능성:",
      "sustainability-desc": "우리는 책임 있는 생산 방법과 친환경 포장을 사용합니다.",
      "cultural-value": "문화적 가교:",
      "cultural-desc": "우리는 멕시코의 풍부한 과일과 한국 소비자를 연결하는 가교 역할을 자랑스럽게 생각합니다.",
      
      // Contact Page
      "contact-page-title": "연락처 - Snack Gwail",
      "contact-form-title": "연락처 양식",
      "contact-description": "질문, 의견 또는 제안이 있으신가요? 저희가 도와드리겠습니다!",
      "name-label": "이름:",
      "name-placeholder": "이름을 입력하세요",
      "email-label": "이메일:",
      "email-placeholder": "이메일을 입력하세요",
      "subject-label": "제목:",
      "subject-placeholder": "메시지 제목",
      "message-label": "메시지:",
      "message-placeholder": "메시지를 작성하세요",
      "submit-button": "메시지 보내기",
      "contact-info-title": "연락처 정보",
      "address-label": "주소:",
      "phone-label": "전화:",
      "email-contact-label": "이메일:",
      "location-title": "위치",
      
      // Terms Page
      "terms-page-title": "이용 약관 - Snack Gwail",
      "terms-section1-title": "1. 소개",
      "terms-section1-text": "Snack Gwail에 오신 것을 환영합니다. 이 약관은 당사 서비스와 제품의 사용을 규정합니다. 당사 서비스에 접근하거나 사용함으로써 귀하는 이 약관에 동의하게 됩니다. 약관의 일부에 동의하지 않는 경우 당사 서비스를 사용해서는 안 됩니다.",
      "terms-section2-title": "2. 정의",
      "terms-company-def": "Snack Gwail",
      "terms-company-desc": "과일 스낵 수출 기업을 의미합니다.",
      "terms-client-def": "고객",
      "terms-client-desc": "당사 제품이나 서비스를 구매하는 개인 또는 단체.",
      "terms-products-def": "제품",
      "terms-products-desc": "Snack Gwail이 제공하는 과일 스낵.",
      "terms-section3-title": "3. 서비스 사용",
      "terms-section3-text": "Snack Gwail 서비스는 합법적인 개인 또는 상업적 용도로만 사용되어야 합니다. 불법 또는 비인가 활동에 당사 제품을 사용하는 것은 허용되지 않습니다.",
      "terms-section4-title": "4. 주문 및 결제",
      "terms-section4-text1": "주문 시 정확하고 완전한 정보를 제공하는 데 동의합니다. Snack Gwail은 잘못된 정보 또는 사기 의심 시 주문을 거부하거나 취소할 권리를 보유합니다.",
      "terms-section4-text2": "제품 가격은 사전 통보 없이 변경될 수 있습니다. 결제는 구매 시 지정된 통화와 방식으로 이루어져야 합니다.",
      "terms-section5-title": "5. 배송",
      "terms-section5-text": "Snack Gwail은 예상 배송 시간을 준수하기 위해 노력하지만 특정 날짜 배송을 보장하지 않습니다. 기상 조건이나 세관 등 당사 통제 범위를 벗어난 요인으로 인해 지연이 발생할 수 있습니다.",
      "terms-section6-title": "6. 반품 및 환불",
      "terms-section6-text": "구매에 만족하지 못한 경우 제품 수령 후 30일 이내에 반품 또는 환불을 요청할 수 있습니다. 제품은 원래 상태로 미개봉되어 있어야 합니다. 자세한 내용은 반품 정책을 참조하십시오.",
      "terms-section7-title": "7. 책임 제한",
      "terms-section7-text": "Snack Gwail은 당사 제품 또는 서비스 사용으로 인한 간접적, 부수적 또는 결과적 손해에 대해 책임지지 않습니다. 어떠한 경우에도 당사의 최대 책임은 구매한 제품의 총 가액으로 한정됩니다.",
      "terms-section8-title": "8. 지적 재산권",
      "terms-section8-text": "당사 제품, 브랜드 및 콘텐츠와 관련된 모든 지적 재산권은 Snack Gwail의 독점적 소유입니다. 사전 서면 허가 없이 당사 자료를 사용, 복사 또는 배포하는 것은 허용되지 않습니다.",
      "terms-section9-title": "9. 수정",
      "terms-section9-text": "Snack Gwail은 언제든지 이 약관을 수정할 권리를 보유합니다. 수정 사항은 당사 웹사이트에 게시된 즉시 효력을 발생합니다. 고객은 정기적으로 이 약관을 검토할 책임이 있습니다.",
      "terms-section10-title": "10. 적용 법률",
      "terms-section10-text": "이 약관은 Snack Gwail의 주요 본사가 위치한 국가의 법률에 의해 규율됩니다. 이 약관과 관련된 모든 분쟁은 해당 국가의 법원의 전속적 관할에 따릅니다.",
      "terms-section11-title": "11. 연락처",
      "terms-section11-text": "이 약관에 대한 질문이 있는 경우 다음 연락처로 문의할 수 있습니다:",
      "contact-email": "이메일",
      "contact-phone": "전화",
      "contact-address": "주소",
      "team-title": "팀 구성원",
      
      // Footer
      "copyright": "Snack Gwail. 모든 권리 보유.",
      "instagram": "인스타그램",
      "tiktok": "틱톡"
    }
  };
  
  // Sistema de traducción
  function changeLanguage(lang) {
    // Guardar preferencia
    localStorage.setItem('preferredLanguage', lang);
    
    // Traducir elementos comunes
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        if (el.tagName === 'INPUT' && el.type === 'submit') {
          el.value = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });
  
    // Traducir placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (translations[lang] && translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });
  
    // Actualizar el año en el copyright
    document.getElementById('year').textContent = new Date().getFullYear();
  }
  
  // Eventos para los botones de idioma
  document.getElementById('translate-en')?.addEventListener('click', () => changeLanguage('en'));
  document.getElementById('translate-ko')?.addEventListener('click', () => changeLanguage('ko'));
  
  // Cargar idioma al iniciar
  document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('preferredLanguage') || 'es';
    if (lang !== 'es') changeLanguage(lang);
    
    // Actualizar el año del copyright
    document.getElementById('year').textContent = new Date().getFullYear();
  });
  
  // Funciones del carrito
  let cartItems = [];
  let cartTotal = 0;
  
  function addToCart(productName, price) {
      cartItems.push({ name: productName, price: price });
      cartTotal += price;
      updateCart();
  }
  
  function updateCart() {
      const cartItemsElement = document.getElementById('cart-items');
      const cartTotalElement = document.getElementById('cart-total');
  
      cartItemsElement.innerHTML = '';
  
      cartItems.forEach(item => {
          const li = document.createElement('li');
          li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
          cartItemsElement.appendChild(li);
      });
  
      cartTotalElement.textContent = cartTotal.toFixed(2);
  }
  
  function confirmPurchase() {
      const lang = localStorage.getItem('preferredLanguage') || 'es';
      if (cartItems.length === 0) {
          alert(translations[lang]?.['empty-cart'] || "El carrito está vacío. Agrega productos antes de confirmar la compra.");
      } else {
          alert(`${translations[lang]?.['purchase-confirmed'] || "Compra confirmada! Total: $"}${cartTotal.toFixed(2)}`);
          cartItems = [];
          cartTotal = 0;
          updateCart();
      }
  }
  
  // Carrusel de imágenes (si existe en la página)
  const carouselSlide = document.querySelector('.carousel-slide');
  if (carouselSlide) {
      let currentIndex = 0;
      function moveCarousel() {
          currentIndex = (currentIndex + 1) % 5;
          const offset = -currentIndex * 100;
          carouselSlide.style.transform = `translateX(${offset}%)`;
      }
      setInterval(moveCarousel, 3000);
  }
  
  // Validación de formulario de contacto (si existe en la página)
  const contactForm = document.querySelector('form');
  if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
          const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const subject = document.getElementById('subject').value;
          const message = document.getElementById('message').value;
  
          if (!name || !email || !subject || !message) {
              const lang = localStorage.getItem('preferredLanguage') || 'es';
              alert(lang === 'en' ? 'Please fill in all fields.' : 
                    lang === 'ko' ? '모든 필드를 채워주세요.' : 
                    'Por favor, complete todos los campos.');
              event.preventDefault();
          }
      });
  }
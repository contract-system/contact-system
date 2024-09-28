import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../../styles/main.css';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className="hero-section hero-1 style-hero-3">
      <div className="array-button-2">
        <button className="array-prev"><i className="fas fa-chevron-left"></i></button>
        <button className="array-next"><i className="fas fa-chevron-right"></i></button>
      </div>
      <button className="burger-menu" onClick={toggleMenu}>
        <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        {/* قائمة العناصر هنا */}
        <ul>
          <li><a href="#">الرابط 1</a></li>
          <li><a href="#">الرابط 2</a></li>
          <li><a href="#">الرابط 3</a></li>
        </ul>
      </div>
      <div className="swiper hero-slider">
        <div className="swiper-wrapper">
          <SwiperSlide>
            <div className="hero-image bg-cover" style={{ backgroundImage: "url('assets/img/hero/hero-1.jpg')" }}></div>
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-9">
                  <div className="hero-content">
                    <h6 data-animation="fadeInUp" data-delay="1.3s">Best Solution</h6>
                    <h1 className="text-white" data-animation="fadeInUp" data-delay="1.5s">
                      Enjoy Fast Internet <br /> Solution
                    </h1>
                    <div className="price-item">
                      <h2 data-animation="fadeInUp" data-delay="1.7s">
                        <sub>$</sub>99 <span>/ Month</span>
                      </h2>
                      <div className="icon" data-animation="fadeInUp" data-delay="1.7s">
                        <i className="flaticon-wifi-router-1"></i> Subscribed & get 1month WIFi Free
                      </div>
                    </div>
                    <a href="index.html" className="theme-btn theme-btn-2" data-animation="fadeInUp" data-delay="1.9s">
                      <span>Learn More <i className="fas fa-chevron-right"></i></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* يمكنك إضافة المزيد من شرائح Swiper هنا */}
        </div>
      </div>

      <style jsx>{`
        .burger-menu {
          display: none; /* إخفاء زر البرجر في الشاشات الكبيرة */
          cursor: pointer;
        }

        .menu {
          display: none; /* إخفاء القائمة بشكل افتراضي */
        }

        .menu.open {
          display: block; /* عرض القائمة عند فتحها */
        }

        /* نمط لزر البرجر */
        @media (max-width: 768px) {
          .burger-menu {
            display: block; /* إظهار زر البرجر في الشاشات الصغيرة */
          }
          .menu {
            display: none; /* إخفاء القائمة بشكل افتراضي */
          }
          .menu.open {
            display: block; /* عرض القائمة عند فتحها */
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

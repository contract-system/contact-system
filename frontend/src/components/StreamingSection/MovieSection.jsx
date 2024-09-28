import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const MovieSection = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    // رابط API لـ TVMaze لجلب العروض التلفزيونية
    const apiUrl = 'https://api.tvmaze.com/shows';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setShows(data); // تخزين البيانات في state
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <section className="movie-section movie-bg" id="shows">
      <div className="container custom-container-2">
        <div className="section-title text-center">
          <span className="text-white">What’s new</span>
          <h2 className="text-white" data-wow-delay=".3s">
            Popular Shows
          </h2>
        </div>
        <Swiper spaceBetween={30} slidesPerView={5}>
          {shows.map((show) => (
            <SwiperSlide key={show.id}>
              <div className="movie-card-items">
                <div className="movie-image">
                  <img
                    src={show.image ? show.image.medium : 'https://via.placeholder.com/210x295'}
                    alt={show.name}
                  />
                  <div className="movie-play">
                    <a
                      href={show.url}
                      className="video-btn ripple video-popup"
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <i className="fas fa-play"></i>
                    </a>
                  </div>
                </div>
                <div className="movie-content">
                  <h3><a href={show.url}>{show.name}</a></h3>
                  <div className="movie-review">
                    <span>({show.premiered.split('-')[0]})</span>
                    <ul>
                      <li><i className="fas fa-star"></i>{show.rating.average ? show.rating.average : 'N/A'}</li>
                      <li><i className="fas fa-comment-alt"></i>{show.language}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MovieSection;

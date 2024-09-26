const Feature = () => {
  return (
    <>
      <section class="feature-section fix section-padding">
        <div class="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div class="container">
          <div class="row g-4">
            <div class="col-xxl-4 col-xl-6 wow fadeInUp" data-wow-delay=".3s">
              <div class="single-feature-items">
                <div class="content">
                  <span>Features</span>
                  <h3>TV & Streaming</h3>
                </div>
                <div class="icon">
                  <i class="flaticon-smart-tv-1"></i>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 wow fadeInUp" data-wow-delay=".5s">
              <div class="single-feature-items active">
                <div class="content">
                  <span>Features</span>
                  <h3>Fast Internet</h3>
                </div>
                <div class="icon">
                  <i class="flaticon-connection"></i>
                </div>
              </div>
            </div>
            <div class="col-xxl-4 col-xl-6 wow fadeInUp" data-wow-delay=".7s">
              <div class="single-feature-items">
                <div class="content">
                  <span>Features</span>
                  <h3>All for Mobile</h3>
                </div>
                <div class="icon">
                  <i class="flaticon-smart-tv-3"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Feature;

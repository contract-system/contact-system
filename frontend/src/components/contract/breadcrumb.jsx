const Breadcrumb = () => {
  return (
    <>
      <div
        class="breadcrumb-wrapper section-padding bg-cover"
        style={{
          backgroundImage: "url('assets/img/breadcrumb.jpg')",
        }}
      >
        <div class="container">
          <div class="page-heading">
            <h1 class="wow fadeInUp" data-wow-delay=".3s">
              Our Pricing
            </h1>
            <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <a href="index.html"> Home Page </a>
              </li>
              <li>
                <i class="fal fa-minus"></i>
              </li>
              <li>Pricing</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Breadcrumb;

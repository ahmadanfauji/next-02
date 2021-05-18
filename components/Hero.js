import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          {" "}
          <FontAwesomeIcon icon="chevron-right" />{" "}
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          {" "}
          <FontAwesomeIcon icon="chevron-left" />{" "}
        </div>
      </div>
    ),
  };

  return (
    <section className="section position-relative">
      <Container>
        <Slider {...settings}>
          <div>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="pr-lg-5">
                  <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                    First Banner
                  </p>
                  <h1 className="mb-4 font-weight-normal line-height-1_4">
                    Simply dummy text of the printing{" "}
                    <span className="text-primary font-weight-medium">
                      Name
                    </span>
                  </h1>
                  <p className="text-muted mb-4 pb-2">
                    Morbi tincidunt ornare massa eget egestas purus. Eget
                    gravida cum sociis natoque penatibus et magnis dis. Mauris
                    vitae ultricies leo integer malesuada nunc.
                  </p>
                  <a href="#" className="btn btn-warning">
                    Find Out How{" "}
                    <span className="ml-2 right-icon">&#8594;</span>
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-5 mt-lg-0">
                  <img
                    src="/images/image-4.svg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="pr-lg-5">
                  <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                    Second Banner
                  </p>
                  <h1 className="mb-4 font-weight-normal line-height-1_4">
                    Consectetur adipiscing elit
                  </h1>
                  <p className="text-muted mb-4 pb-2">
                    Amet consectetur adipiscing elit pellentesque habitant morbi
                    tristique senectus et.
                  </p>
                  <a href="#" className="btn btn-warning">
                    Find Out How{" "}
                    <span className="ml-2 right-icon">&#8594;</span>
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-5 mt-lg-0">
                  <img
                    src="/images/image-5.svg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div>
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="pr-lg-5">
                  <p className="text-uppercase text-primary font-weight-medium f-14 mb-4">
                    Third Banner
                  </p>
                  <h1 className="mb-4 font-weight-normal line-height-1_4">
                    Sed do eiusmod tempor
                  </h1>
                  <p className="text-muted mb-4 pb-2">
                    Netus et malesuada fames ac turpis egestas sed tempus.
                    Dignissim cras tincidunt lobortis feugiat vivamus at augue
                    eget.
                  </p>
                  <a href="#" className="btn btn-warning">
                    Find Out How{" "}
                    <span className="ml-2 right-icon">&#8594;</span>
                  </a>
                </div>
              </Col>
              <Col lg={6}>
                <div className="mt-5 mt-lg-0">
                  <img
                    src="/images/image-6.svg"
                    alt=""
                    className="img-fluid mx-auto d-block"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Slider>
      </Container>
    </section>
  );
};

export default Hero;

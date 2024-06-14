const Hero = () => {
  return (
    <section className="hero">
      <picture>
        <source
          media="(min-width: 992px )"
          srcset="/assets/images/illustration-sign-up-desktop.svg"
        />
        <img
          src="/assets/images/illustration-sign-up-mobile.svg"
          alt=""
          className="hero__img"
        />
      </picture>
    </section>
  );
};

export default Hero;

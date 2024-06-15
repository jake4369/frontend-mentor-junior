import BmiForm from "./bmi_form/BmiForm";

const Hero = () => {
  return (
    <section className="hero">
      <img src="/assets/images/logo.svg" alt="" className="logo" />
      <h1>Body Mass Index Calculator</h1>

      <p className="hero__p">
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>

      <BmiForm />
    </section>
  );
};

export default Hero;

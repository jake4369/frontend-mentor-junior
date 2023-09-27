import logo from "./../../assets/logo.svg";

const HeaderText = () => {
  return (
    <div className="header__text-content">
      <img src={logo} alt="Logo" className="logo" />

      <h1>Body Mass Index Calculator</h1>

      <p>
        Better understand your weight in relation to your height using our body
        mass index (BM) calculator. While BMI is not the sole determinant of a
        healthy weight, it offers a valuable starting point to evaluate your
        overall health and well-being.
      </p>
    </div>
  );
};

export default HeaderText;

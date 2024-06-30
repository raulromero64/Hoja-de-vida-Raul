import images from "./images";
import "./../Diseños/Diseño.css";

const Diseño = () => {
  return (
    <di>
      <div className="container__title__Diseño">
        <h2 className="title__Diseño">Some of my Designs</h2>
      </div>
      <div className="images__container">
        {images.map((image) => (
          <div className="item">
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </di>
  );
};

export default Diseño;
//https://www.youtube.com/watch?v=cf1ipTZ1E_I&t=1069s

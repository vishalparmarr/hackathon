import React from 'react';
import Image from 'next/image';
// internal
import laptop from "@assets/img/login/laptop.png";
import man from "@assets/img/login/man.png";
import shape_1 from "@assets/img/login/shape-1.png";
import shape_2 from "@assets/img/login/shape-2.png";
import shape_3 from "@assets/img/login/shape-3.png";
import shape_4 from "@assets/img/login/shape-4.png";

const Shapes = () => {
  return (
    <div className="login__shape">
    <Image className="login__shape-1" src={laptop} alt="laptop" />
    <Image className="login__shape-2" src={man} alt="man" />
    <Image className="login__shape-3" src={shape_1} alt="shape" />
    <Image className="login__shape-4" src={shape_2} alt="shape" />
    <Image className="login__shape-5" src={shape_3} alt="shape" />
    <Image className="login__shape-6" src={shape_4} alt="shape" />
  </div>
  );
};

export default Shapes;
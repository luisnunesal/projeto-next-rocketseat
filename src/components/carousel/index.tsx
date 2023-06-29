"use client"

import { useKeenSlider } from 'keen-slider/react'
import { HomeContainer, Product } from "@/styles/app/home";
import Image from "next/image";
import camiseta1 from "@/assets/1.png";
import camiseta2 from "@/assets/2.png";
import camiseta3 from "@/assets/3.png";
import 'keen-slider/keen-slider.min.css';



export function CarouselProduct() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider_slide">
        <Image src={camiseta1} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider_slide">
        <Image src={camiseta2} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product className="keen-slider_slide">
        <Image src={camiseta3} alt="" width={520} height={480} />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

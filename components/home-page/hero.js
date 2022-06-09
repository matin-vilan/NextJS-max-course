import classes from './hero.module.css';
import Image from 'next/image';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
          <Image src={"/images/site/max.png"} alt={"an image showing max"} width={300} height={300} />
      </div>
      <h1>hi, im max</h1>
      <p>
        I blog aboute development - especially front-end frameworks like angular
        or react
      </p>
    </section>
  );
}

export default Hero;

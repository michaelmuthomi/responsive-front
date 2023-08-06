import React from 'react';
import Program from '../components/WeightLossProgram/Program';
import Testimony from '../components/WeightLossProgram/Testimony';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const WeightLossProgram = (): JSX.Element => {
  return (
    <>
      <div className="yellowBlock"></div>

      <Header />
      <section className="my-10 flex flex-row gap-5 flex-wrap justify-center items-center md:w-3/5 w-5/6 m-auto ">
        <Program
          programName={'Loss weight'}
          duration={'4 weeks'}
          description={
            "Begginer's program and easy to follow to lose weigth and get started into a healthy life style"
          }
          imgSrc={'./aboutus_image1.webp'}
        />
        <Program
          programName={'Loss weight'}
          duration={'4 weeks'}
          description={
            "Begginer's program and easy to follow to lose weigth and get started into a healthy life style"
          }
          imgSrc={'./aboutus_image1.webp'}
        />
        <Program
          programName={'Loss weight'}
          duration={'4 weeks'}
          description={
            "Begginer's program and easy to follow to lose weigth and get started into a healthy life style"
          }
          imgSrc={'./aboutus_image1.webp'}
        />

        <Program
          programName={'Loss weight'}
          duration={'4 weeks'}
          description={
            "Begginer's program and easy to follow to lose weigth and get started into a healthy life style"
          }
          imgSrc={'./aboutus_image1.webp'}
        />
      </section>

      <section className="md:mt-[50px] my-10 flex flex-row gap-5 flex-wrap md:justify-between justify-center md:w-3/5 w-full m-auto">
        <Testimony
          imgSrc={'./aboutus_image1.webp'}
          name={'BelloDev'}
          testimony={'This has been the most rewarding feat of my life!'}
        />

        <Testimony
          imgSrc={'./aboutus_image1.webp'}
          name={'anicmarco'}
          testimony={
            "I'm so happy for having so much help and impriving my health. I really recommend the begginers course"
          }
        />

        <Testimony
          imgSrc={'./aboutus_image1.webp'}
          name={'John Dope'}
          testimony={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas magnam vel exercitationem, quis consequatur saepe ratione dignissimos itaque excepturi blanditiis? Temporibus quas voluptatibus rem hic dicta voluptates quae. Eius dolor omnis quod, maxime necessitatibus cupiditate totam eaque blanditiis numquam accusamus molestiae laudantium harum aliquam a quaerat fuga voluptas! Voluptatibus nihil maiores sapiente temporibus earum, accusamus tempore illo, commodi quia autem facilis sunt et beatae quos cum soluta explicabo eaque quidem ratione doloribus eligendi voluptatem. Beatae, hic ratione, aliquid.'
          }
        />

        <Testimony
          imgSrc={'./aboutus_image1.webp'}
          name={'Johan Dope'}
          testimony={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, voluptas magnam vel exercitationem, quis consequatur saepe ratione dignissimos itaque excepturi blanditiis? Temporibus quas voluptatibus rem hic dicta voluptates quae. Eius dolor omnis quod, maxime necessitatibus cupiditate totam eaque blanditiis numquam accusamus molestiae laudantium harum aliquam a quaerat fuga voluptas! Voluptatibus nihil maiores sapiente temporibus earum, accusamus tempore illo, commodi quia autem facilis sunt et beatae quos cum soluta explicabo eaque quidem ratione doloribus eligendi voluptatem. Beatae, hic ratione, aliquid.'
          }
        />
      </section>
      <Footer />
    </>
  );
};

export default WeightLossProgram;

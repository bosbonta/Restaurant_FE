import React, { useEffect, useRef, useState } from "react";
import KeenSlider from "keen-slider";
import "keen-slider/keen-slider.min.css";
import ImageGalery1 from "../assets/img/testimonials-1.jpg";
import ImageGalery2 from "../assets/img/testimonials-2.jpg";
import ImageGalery3 from "../assets/img/testimonials-3.jpg";
import ImageGalery4 from "../assets/img/testimonials-4.jpg";

const testimonials = [
  {
    id: 1,
    name: "Muhammad Ari",
    image: ImageGalery1,
    review:
      "Pelayanan sangat memuaskan, makanan enak, harga terjangkau. Tempatnya juga nyaman, cocok untuk nongkrong bareng teman-teman.",
    rating: 4,
  },
  {
    id: 2,
    name: "Selominta Sari",
    image:ImageGalery2,
    review:
      "Saya sarapan, makan pagi, sampai makan malam di sini. Semua makanan yang saya coba enak-enak. Pelayanan juga ramah. Harga terjangkau. Pokoknya sangat woth it",
    rating: 4,
  },
  {
    id: 3,
    name: "Emma Fatahilah",
    image: ImageGalery3,
    review:
      "Cocok buat nugas sampai begadang. ",
    rating: 4,
  },
  {
    id: 4,
    name: "Niko Putra",
    image: ImageGalery4,
    review:
      "Sering ada diskon, jadi bisa hemat. Makanannya juga enak-enak. Pelayanannya juga ramah. Tempatnya nyaman. Pokoknya recommended banget deh.",
    rating: 5,
  },
];

const TestimonialSlider = () => {
  const sliderRef = useRef(null);
  const [sliderInstance, setSliderInstance] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (sliderRef.current) {
      const slider = new KeenSlider(sliderRef.current, {
        loop: true,
        defaultAnimation: { duration: 750 },
        slides: { perView: 1, spacing: 16 },
        breakpoints: {
          "(min-width: 640px)": { slides: { perView: 1.5, spacing: 16 } },
          "(min-width: 768px)": { slides: { perView: 1.75, spacing: 16 } },
          "(min-width: 1024px)": { slides: { perView: 3, spacing: 16 } },
        },
        created(slider) {
          setCurrentSlide(slider.track.details.rel + 1);
          setSliderInstance(slider);
        },
        slideChanged(slider) {
          setCurrentSlide(slider.track.details.rel + 1);
        },
      });

      return () => slider.destroy();
    }
  }, []);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Testimoni dari Pelanggan
        </h2>

        <div className="mt-8 relative">
          <div ref={sliderRef} className="keen-slider">
            {testimonials.map((testimonial) => (
              <div
              key={testimonial.id}
              className="keen-slider__slide opacity-100 transition-opacity duration-500"
            >
                <blockquote className="rounded-lg bg-gray-50 p-6 shadow-xs sm:p-8">
                  <div className="flex items-center gap-4">
                    <img
                      alt={testimonial.name}
                      src={testimonial.image}
                      className="size-14 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex justify-center gap-0.5 text-green-500">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-0.5 text-lg font-medium text-gray-900">
                        {testimonial.name}
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-gray-700">{testimonial.review}</p>
                </blockquote>
              </div>
            ))}
          </div>

          {/* Tombol Navigasi */}
          {sliderInstance && (
            <div className="flex justify-between mt-4">
              <button
                onClick={() => sliderInstance.prev()}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Previous
              </button>
              <p>
                {currentSlide} / {testimonials.length}
              </p>
              <button
                onClick={() => sliderInstance.next()}
                className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

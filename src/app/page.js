"use client";
import dynamic from 'next/dynamic';
import styles from "./page.module.css";
const MovieSlider = dynamic(() => import("./components/Slider/MovieSlider"), { ssr: false });
const CardSlider = dynamic(() => import("./components/CardSlider/CardSlider"), { ssr: false });
const MostWatched = dynamic(() => import("./components/MostWatched/MostWatched"), { ssr: false });
const TrendingMovies = dynamic(() => import("./components/TrendingMovies/TrendingMovies"), { ssr: false });
const About= dynamic(()=> import("./components/About/About"), { ssr: false })
const FAQ= dynamic(()=> import("./components/FAQ/Faq"), { ssr: false })

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
       
        <MovieSlider />
        <CardSlider />
        <TrendingMovies />
        <About/>
       <FAQ/>
      </main>
    </div>
  );
}

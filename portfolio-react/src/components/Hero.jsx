import meImg from '../assets/me.jpg';

export default function Hero() {
  return (
    <section id="about" className="grid gap-8 items-center py-8 md:py-14 md:grid-cols-[2fr_1fr]">
      <div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
          Hi, I'm Nguyen Trong Phat
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          4th-year Physics &amp; Informatics student. Deeply passionate and
          self-taught in Electronics, Internet of Things (IoT), and Information
          Technology. I love building bridges between hardware and software.
        </p>
        <div className="mt-6">
          <a
            className="inline-block px-5 py-2.5 rounded-lg bg-teal-700 text-white font-medium hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 transition-colors shadow-sm"
            href="#contact"
          >
            Get in Touch
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className="w-44 h-44 sm:w-56 sm:h-56 rounded-full object-cover shadow-lg border-4 border-slate-100 dark:border-slate-800 aspect-square"
          src={meImg}
          alt="Portrait of Nguyen Trong Phat"
        />
      </div>
    </section>
  );
}

import { useState, useEffect, useRef, useCallback } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";
import { MdPhotoLibrary } from "react-icons/md";

/* ─────────────────────────────────────────
   IMAGES DATA
   Replace `src: null` with actual paths:
   e.g. src: "/assets/gallery/photo1.jpg"
───────────────────────────────────────── */
const IMAGES = [
  {
    id: 1,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-01.jpg",
    alt: "Pharmacist Day - 1",
  },
  {
    id: 2,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-02.jpg",
    alt: "Pharmacist Day - 2",
  },
  {
    id: 3,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-03.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 4,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-04.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 5,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-05.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 6,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-06.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 7,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-07.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 8,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-08.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 9,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-09.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 10,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/pharmacist-09.jpg",
    alt: "Pharmacist Day - 3",
  },
  {
    id: 11,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-01.jpg",
    alt: "SCO-1",
  },
  {
    id: 12,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-02.jpg",
    alt: "SCO",
  },
  {
    id: 13,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-03.jpg",
    alt: "SCO",
  },
  {
    id: 14,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-04.jpg",
    alt: "SCO",
  },
  {
    id: 15,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-05.jpg",
    alt: "SCO",
  },
  {
    id: 16,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-06.jpg",
    alt: "SCO",
  },
  {
    id: 17,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-07.jpg",
    alt: "SCO",
  },
  {
    id: 18,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-08.jpg",
    alt: "SCO",
  },
  {
    id: 19,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-09.jpg",
    alt: "SCO",
  },
  {
    id: 20,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-10.jpg",
    alt: "SCO",
  },
  {
    id: 21,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-012.jpg",
    alt: "SCO",
  },
  {
    id: 22,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-13.jpg",
    alt: "SCO",
  },
  {
    id: 23,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-14.jpg",
    alt: "SCO",
  },
  {
    id: 24,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-15.jpg",
    alt: "SCO",
  },
  {
    id: 25,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-16.jpg",
    alt: "SCO",
  },
  {
    id: 26,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-17.jpg",
    alt: "SCO",
  },
  {
    id: 27,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/sco-18.jpg",
    alt: "SCO",
  },
  {
    id: 28,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/gallery_01.jpg",
    alt: "Gallery",
  },
  {
    id: 29,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/gallery_02.jpg",
    alt: "Gallery",
  },
  {
    id: 30,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/gallery_03.jpg",
    alt: "Gallery",
  },
  {
    id: 31,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-01.jpg",
    alt: "news",
  },
  {
    id: 32,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-02.jpg",
    alt: "news",
  },
  {
    id: 33,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-03.jpg",
    alt: "news",
  },
  {
    id: 34,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-04.jpg",
    alt: "news",
  },
  {
    id: 35,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-05.jpg",
    alt: "news",
  },
  {
    id: 36,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-06.jpg",
    alt: "news",
  },
  {
    id: 37,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-07.jpg",
    alt: "news",
  },
  {
    id: 38,
    src: "https://cdn.ccsuniversity.ac.in/public/jpg/2026/03/news-08.jpg",
    alt: "news",
  },
];

const BATCH_SIZE = 9;

/* ── Placeholder tile ── */
const Placeholder = ({ index }) => {
  const gradients = [
    "from-blue-100 to-cyan-100",
    "from-purple-100 to-blue-100",
    "from-teal-100 to-green-100",
    "from-orange-100 to-yellow-100",
    "from-rose-100 to-pink-100",
    "from-indigo-100 to-violet-100",
  ];
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center`}>
      <MdPhotoLibrary className="text-4xl text-gray-300" />
    </div>
  );
};

/* ─────────────────────────────────────────
   LIGHTBOX
───────────────────────────────────────── */
const Lightbox = ({ images, index, onClose }) => {
  const [current, setCurrent] = useState(index);

  const prev = useCallback(() => setCurrent((c) => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % images.length), [images.length]);

  /* Keyboard support */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  /* Lock scroll */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const img = images[current];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85"
      onClick={onClose}
    >
      <div
        className="relative flex items-center justify-center w-full h-full px-14 sm:px-20"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors"
        >
          <FaTimes className="text-sm" />
        </button>

        {/* Prev */}
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 sm:left-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:scale-110"
        >
          <FaChevronLeft />
        </button>

        {/* Image */}
        {img.src ? (
          <img
            key={current}
            src={img.src}
            alt={img.alt}
            className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-2xl"
            style={{ animation: "lbFade .22s ease" }}
          />
        ) : (
          <div
            key={current}
            className="w-[720px] max-w-full h-[480px] max-h-[82vh] rounded-lg overflow-hidden shadow-2xl"
            style={{ animation: "lbFade .22s ease" }}
          >
            <Placeholder index={current} />
          </div>
        )}

        {/* Next */}
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 sm:right-5 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all hover:scale-110"
        >
          <FaChevronRight />
        </button>

        {/* Counter */}
        <p className="absolute bottom-5 right-5 text-white/50 text-xs font-semibold tracking-widest">
          {current + 1} of {images.length}
        </p>
      </div>

      <style>{`
        @keyframes lbFade {
          from { opacity: 0; transform: scale(.96); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

/* ─────────────────────────────────────────
   SINGLE GRID CARD  (lazy reveal)
───────────────────────────────────────── */
const GalleryCard = ({ image, index, onClick }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className="group relative cursor-pointer rounded-xl overflow-hidden aspect-[4/3] shadow-sm hover:shadow-lg transition-all duration-300"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity .45s ease ${(index % BATCH_SIZE) * 40}ms, transform .45s ease ${(index % BATCH_SIZE) * 40}ms, box-shadow .3s`,
      }}
    >
      {/* Image / placeholder */}
      {image.src ? (
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      ) : (
        <div className="w-full h-full group-hover:scale-105 transition-transform duration-500">
          <Placeholder index={index} />
        </div>
      )}

      {/* Dark hover overlay */}
      <div className="absolute inset-0 bg-[#0f2f5a]/0 group-hover:bg-[#0f2f5a]/40 transition-colors duration-300" />
    </div>
  );
};

/* ─────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────── */
const Gallery = () => {
  const [count,   setCount]   = useState(BATCH_SIZE);
  const [loading, setLoading] = useState(false);
  const [lightbox, setLightbox] = useState(null); // opened index or null
  const sentinelRef = useRef(null);

  const visible = IMAGES.slice(0, count);
  const hasMore = count < IMAGES.length;

  /* Infinite scroll sentinel */
  useEffect(() => {
    if (!hasMore) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            setCount((c) => Math.min(c + BATCH_SIZE, IMAGES.length));
            setLoading(false);
          }, 500);
        }
      },
      { threshold: 0.1 }
    );
    if (sentinelRef.current) io.observe(sentinelRef.current);
    return () => io.disconnect();
  }, [hasMore, loading]);

  return (
    <>
      <div className="w-full bg-gradient-to-br from-[#0a1e38] to-[#1a3a6b] py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-screen-xl mx-auto text-center">
              <span className="inline-block text-xs font-bold tracking-widest uppercase text-cyan-400 mb-3">
              Charak School of Pharmacy
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Georgia',serif]">
               Gallery
              </h1>
              <div className="mt-3 mx-auto w-16 h-1 rounded-full bg-gradient-to-r from-red-500 to-cyan-400" />
              <p className="mt-5 text-blue-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Explore moments and activities captured from academic events, campus life, and institutional programs.              </p>
          </div>
        </div>

        <div className="w-full min-h-screen bg-white">
      {/* ── Grid Section ── */}
      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-screen-xl mx-auto">

          {/* Heading row */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f2f5a] font-['Georgia',serif]">
              Photo Gallery
            </h2>
            <span className="text-sm text-gray-400 font-medium">
              {visible.length} / {IMAGES.length} Photos
            </span>
          </div>

          {/* 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {visible.map((img, i) => (
              <GalleryCard
                key={img.id}
                image={img}
                index={i}
                onClick={setLightbox}
              />
            ))}
          </div>

          {/* Infinite scroll sentinel */}
          {hasMore && (
            <div ref={sentinelRef} className="flex justify-center mt-12 h-10">
              {loading && (
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* End message */}
          {!hasMore && (
            <p className="text-center mt-10 text-sm text-gray-400 font-medium">
              — All {IMAGES.length} photos loaded —
            </p>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <Lightbox
          images={visible}
          index={lightbox}
          onClose={() => setLightbox(null)}
        />
      )}

    </div>
    </>
    
  );
};

export default Gallery;
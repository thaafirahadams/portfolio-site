import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "VELA Skincare", category: "Branding", image: "https://via.placeholder.com/800x600" },
  { title: "NOIRÉ Film", category: "Motion", image: "https://via.placeholder.com/800x600" },
  { title: "SORA Campaign", category: "Social", image: "https://via.placeholder.com/800x600" },
  { title: "AVENIRÉ Shoot", category: "Photography", image: "https://via.placeholder.com/800x600" }
];

export default function Home() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-all duration-500">

        {/* NAV */}
        <div className="fixed top-0 w-full flex justify-between px-6 py-4 z-50">
          <h1 className="tracking-wide lowercase">thaafirah</h1>
          <button onClick={() => setDark(!dark)} className="border px-3 py-1 rounded-full text-sm">
            {dark ? "light" : "dark"}
          </button>
        </div>

        {/* HERO */}
        <section className="h-screen flex flex-col justify-center items-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-9xl font-bold lowercase"
          >
            thaafirah
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-xl text-lg opacity-70"
          >
            multidisciplinary creative — branding, photography, motion & digital.
          </motion.p>
        </section>

        {/* PROJECTS */}
        <section className="px-6 py-20 grid md:grid-cols-2 gap-10">
          {projects.map((p, i) => (
            <motion.div key={i} whileHover={{ scale: 1.03 }} className="cursor-pointer group">
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  src={p.image}
                  className="w-full h-[400px] object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
              <div className="mt-4 flex justify-between">
                <h3>{p.title}</h3>
                <span className="opacity-60 text-sm">{p.category}</span>
              </div>
            </motion.div>
          ))}
        </section>

        {/* ABOUT */}
        <section className="px-6 py-32 max-w-2xl mx-auto text-center">
          <p>
            Thaafirah is a multidisciplinary creative working across branding, photography, motion, and digital design.
          </p>
        </section>

      </main>
    </div>
  );
}

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Helvetica, sans-serif" }}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "64px", marginBottom: "10px" }}
      >
        thaafirah
      </motion.h1>

      <p style={{ fontSize: "18px", marginBottom: "60px", opacity: 0.7 }}>
        multidisciplinary creative — branding, photography, motion & digital
      </p>

      <div style={{ display: "grid", gap: "30px" }}>
        {[
          { title: "ELA Skincare", type: "Branding" },
          { title: "NOIRÉ Film", type: "Motion" },
          { title: "SORA Campaign", type: "Social" },
          { title: "AVENIRÉ Shoot", type: "Photography" },
        ].map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            style={{
              padding: "30px",
              border: "1px solid #ddd",
              borderRadius: "12px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <h2 style={{ margin: 0 }}>{project.title}</h2>
            <p style={{ opacity: 0.6 }}>{project.type}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

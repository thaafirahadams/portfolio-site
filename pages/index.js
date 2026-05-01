import { motion } from "framer-motion";

export default function Home() {
  return (
    <main
      style={{
        padding: "60px",
        fontFamily: "Helvetica, sans-serif",
        background: "#0f0f0f",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "72px",
          marginBottom: "10px",
          letterSpacing: "-2px",
        }}
      >
        thaafirah
      </motion.h1>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "80px",
          opacity: 0.6,
          maxWidth: "500px",
        }}
      >
        multidisciplinary creative — branding, photography, motion & digital
      </p>

      <div style={{ display: "grid", gap: "25px" }}>
        {[
          { title: "ELA Skincare", type: "Branding" },
          { title: "NOIRÉ Film", type: "Motion" },
          { title: "SORA Campaign", type: "Social" },
          { title: "AVENIRÉ Shoot", type: "Photography" },
        ].map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.04 }}
            style={{
              padding: "40px",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "16px",
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(10px)",
              cursor: "pointer",
            }}
          >
            <h2 style={{ margin: 0, fontSize: "28px" }}>
              {project.title}
            </h2>
            <p style={{ opacity: 0.5 }}>{project.type}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

import { motion } from "framer-motion";
import ClientLogo from "./ClientLogo";

const clients = [
  { src: "https://img-cdn.publive.online/fit-in/640x430/filters:format(webp)/dq/media/media_files/KMnzXc2TTiNaIwURgard.png", name: "Client 1" },
  { src: "https://www.capgemini.com/au-en/wp-content/uploads/sites/10/2023/05/Capgemini.png", name: "INT" },
  { src: "https://etimg.etb2bimg.com/photo/111601246.cms", name: "Tech Mahindra" },
  { src: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/3468188/DSCF1179.0.jpg?quality=90&strip=all&crop=0,0,100,100", name: "Infosys" },
  { src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202502/apple-launches-144212375-16x9_0.jpg?VersionId=wrXj8T4VjRsYqmW88_Zmslhv8eKu98wy", name: "Techved" },
];

export default function OurClients() {
  return (
    <section className="py-24 bg-slate-900/90 overflow-hidden">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-semibold tracking-widest mb-16 text-white"
      >
        OUR CLIENT
      </motion.h2>

      {/* Slider */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...clients, ...clients].map((client, index) => (
            <ClientLogo
              key={index}
              src={client.src}
              alt={client.name}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

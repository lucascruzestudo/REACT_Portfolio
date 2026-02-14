import React from 'react';
import { BsWhatsapp, BsGithub, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';
import translations from '../locales/translations.js';

const Contact = ({ language }) => {
  const t = translations[language];

  const contactLinks = [
    { icon: <MdEmail />, label: t.emailMe, href: `mailto:${t.email}`, accent: "text-blue-400" },
    { icon: <BsWhatsapp />, label: t.sendMeWhatsapp, href: `https://api.whatsapp.com/send?phone=5513998048091&text=${encodeURIComponent(t.whatsappMessage)}`, accent: "text-green-400", external: true },
    { icon: <BsGithub />, label: "GitHub", href: t.github, accent: "text-gray-400", external: true },
    { icon: <BsLinkedin />, label: "LinkedIn", href: t.linkedin, accent: "text-blue-600", external: true }
  ];

  return (
    <section id="contact" className="snap-section px-4 md:px-8">
      <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tighter">
            {t.nav.contact.toUpperCase()}
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-xl mx-auto italic">
            "{t.contactDescription}"
          </p>
        </motion.div>

        {/* Contact Links - MINIMAL */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-6 gap-3 rounded-xl border border-blue-500/10 hover:border-blue-500 group transition-all duration-300"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <span className={`text-3xl ${link.accent} group-hover:scale-110 transition-transform`}>
                {link.icon}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">
                {link.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;

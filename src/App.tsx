import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mic, 
  Users, 
  Play, 
  Mail, 
  Instagram, 
  Facebook,
  Menu, 
  X, 
  ChevronRight,
  Music,
  Headphones,
  Podcast,
  Radio
} from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Hosts', href: '#hosts' },
    { name: 'Episodes', href: '#episodes' },
    { name: 'Listen', href: '#listen' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-sm shadow-black' : 'bg-black/60 backdrop-blur-sm py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex items-center justify-center shrink-0">
            <img src="https://i.imgur.com/2Sv9wo4.png" alt="A PhD, But Not A Professor Logo" className="w-full h-full object-contain scale-110" referrerPolicy="no-referrer" />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-medium hover:text-hot-pink transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a href="#listen" className="gradient-btn px-6 py-2 rounded-full text-sm font-semibold">
            Listen Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white text-lg font-medium border-b border-border-pink pb-2"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#listen" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="gradient-btn px-6 py-3 rounded-full text-center font-semibold"
            >
              Listen Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8">
            A PhD, <span className="italic font-semibold">But Not A</span> <br />
            <span className="text-navy">Professor</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-text mb-10 leading-relaxed">
            You earned the degree. You don't have to take the expected path.
          </p>
          
          <div className="flex justify-center gap-4 mb-12">
            <a href="#about" className="gradient-btn px-10 py-4 rounded-full font-bold shadow-lg shadow-navy/20">
              Learn More
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <div className="space-y-6 text-lg text-muted-text leading-relaxed">
              <p>
                A PhD, But Not A Professor exists to expand how doctoral success is defined. We create space for PhD-trained individuals to think beyond traditional academic pathways and make informed, intentional career decisions. Our goal is to normalize exploration, support transitions, and highlight the value of doctoral training across sectors—not just within academia.
              </p>
              <p>
                Through honest dialogue and shared experiences, we aim to remove the stigma around non-linear paths and provide clarity for those navigating what comes next. We believe a PhD is not a single destination—it's a foundation for impact in many forms.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5">
            <motion.div 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              className="bg-card-bg p-10 rounded-3xl relative"
            >
              <div className="absolute -top-4 -left-4 text-navy opacity-20">
                <Mic size={80} />
              </div>
              <blockquote className="relative z-10">
                <p className="text-2xl md:text-3xl font-serif italic text-navy leading-snug mb-6">
                  "A PhD doesn't define your path—it expands your options."
                </p>
                <cite className="text-navy font-bold not-italic">— Dr. Shaniece Theodore & Dr. Shana Thomas</cite>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Hosts = () => {
  const hosts = [
    {
      name: "Dr. Shana Thomas",
      title: "Regulatory Affairs Leader",
      bio: "PhD-trained pharmacologist (Purdue University) turned regulatory affairs leader. Has worked across NIST, FDA (CBER), and biotech, advancing cell and gene therapies from research to approval. On the podcast, she brings an industry lens to navigating careers beyond academia.",
      img: "https://i.imgur.com/oxBjJGe.jpg"
    },
    {
      name: "Dr. Shaniece Theodore",
      title: "Public Health Workforce Leader",
      bio: "PhD-trained molecular biologist (Tuskegee University) turned public health workforce leader. Serves at CDC and as a U.S. Public Health Service officer, leading initiatives that strengthen and support the scientific workforce. On the podcast, she brings a government and public health lens to navigating careers beyond academia.",
      img: "https://i.imgur.com/jKfLAik.jpg"
    }
  ];

  return (
    <section id="hosts" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet the Hosts</h2>
          <p className="text-muted-text max-w-2xl mx-auto text-lg">
            The voices behind the mic, dedicated to redefining what it means to be a PhD in the 21st century.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {hosts.map((host, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="card-border bg-card-bg rounded-3xl overflow-hidden group shadow-lg shadow-pink-100"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img 
                  src={host.img} 
                  alt={host.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-1">{host.name}</h3>
                <p className="text-hot-pink font-semibold mb-4 text-sm uppercase tracking-wider">{host.title}</p>
                <p className="text-muted-text leading-relaxed">
                  {host.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Episodes = () => {
  return (
    <section id="episodes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Episodes</h2>
          <p className="text-muted-text text-lg">Our journey beyond academia is just beginning.</p>
        </div>

        <div className="flex justify-center py-20 border-2 border-dashed border-border-pink rounded-3xl bg-card-bg/30">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-navy mx-auto mb-6 shadow-sm">
              <Mic size={32} />
            </div>
            <h3 className="text-3xl font-serif italic text-navy font-bold mb-2">Episodes Coming Soon</h3>
            <p className="text-muted-text">We're currently recording our first season. Stay tuned!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Listen = () => {
  const platforms = [
    { name: "Spotify", icon: <Music size={32} />, color: "#1DB954" },
    { name: "Apple Podcasts", icon: <Podcast size={32} />, color: "#A259FF" },
    { name: "Google Podcasts", icon: <Radio size={32} />, color: "#4285F4" },
    { name: "Amazon Music", icon: <Headphones size={32} />, color: "#00A8E1" }
  ];

  return (
    <section id="listen" className="py-24 bg-card-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Where to Listen</h2>
          <p className="text-muted-text text-lg">Available on all major podcasting platforms.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((p, idx) => (
            <motion.a
              key={idx}
              href="#"
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-3xl flex flex-col items-center justify-center gap-4 card-border shadow-sm"
            >
              <motion.div
                className="text-navy"
                whileHover={{ color: p.color }}
                transition={{ duration: 0.2 }}
              >
                {p.icon}
              </motion.div>
              <span className="font-bold text-navy">{p.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 text-white" style={{ background: 'linear-gradient(135deg, #000080 0%, #0a0a6e 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Let's Connect</h2>
            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Have a story to share or a question for the hosts? We'd love to hear from you. Join our community and stay updated on new episodes and resources.
            </p>
            
            <div className="space-y-6">
              <a href="mailto:aphdbutnotaprofessor@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-hot-pink transition-colors">
                  <Mail size={20} />
                </div>
                <span className="text-xl font-medium">aphdbutnotaprofessor@gmail.com</span>
              </a>
              
              <div className="flex gap-4 pt-4">
                <a href="https://www.instagram.com/aphdbutnotaprofessor/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-hot-pink transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://www.facebook.com/aphdbutnotaprofessor" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-hot-pink transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-lg p-8 md:p-12 rounded-3xl border border-white/10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/50">Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-hot-pink transition-colors" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-white/50">Email</label>
                  <input type="email" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-hot-pink transition-colors" placeholder="Your Email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-white/50">Message</label>
                <textarea rows={4} className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:outline-none focus:border-hot-pink transition-colors resize-none" placeholder="How can we help?"></textarea>
              </div>
              <button className="w-full gradient-btn py-4 rounded-xl font-bold text-lg shadow-xl shadow-black/20">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/50 text-sm">
          <p>© 2026 A PhD, But Not A Professor. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Hosts />
        <Episodes />
        <Listen />
        <Contact />
      </main>
    </div>
  );
}

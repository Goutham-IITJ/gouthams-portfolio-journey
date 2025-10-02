import React, { useEffect, useRef } from "react";
// Button removed from this page header to keep header minimal
import { Card } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import teamWork from "@/assets/team-work.jpg";
import rcPlane from "@/assets/rc-plane.jpg";
// using public images for the art gallery (e.g. /art1.jpg .. /art9.jpg)

const Journey = () => {
  const journeyEntries = [
    {
      id: 'about-me',
      title: 'About Me',
      date: 'Hails from Kerala',
      location: 'Kerala, India',
      description: 'I grew up in Kerala. I love building things — electronics, small robots, and creative projects. I enjoy art, poetry, and collaborating with people to learn and build together.',
      image: teamWork,
      highlights: ['From Kerala', 'Electronics & Robotics', 'Art & Poetry']
    },
    {
      id: 'cult-meet-kgp',
      title: 'Inter IIT Cultural Meet',
      date: 'IIT Kharagpur',
      location: 'IIT Kharagpur',
      description: 'A memorable cultural exchange where I represented IIT Jodhpur. It sharpened my teamwork and creative event execution skills.',
  image: teamWork,
      highlights: ['Cultural Representation', 'Teamwork', 'Event Execution']
    },
    {
      id: 'joint-secy',
      title: 'Joint Secretary (Fine Arts)',
      date: 'Present',
      location: 'IIT Jodhpur',
      description: 'Leading creative teams, organizing exhibitions and cultural programs while balancing technical studies.',
  image: teamWork,
      highlights: ['Leadership', 'Creative Direction']
    },
    {
      id: 'product-and-mentoring',
      title: 'Product Club & Mentorship',
      date: 'Present',
      location: 'IIT Jodhpur',
      description: 'Active in the Product Club and mentoring juniors in the Robotics Club—helping them design and build projects.',
      image: teamWork,
      highlights: ['Product Thinking', 'Mentorship', 'Robotics Projects']
    },
    {
      id: 'inter-iit-tech-bom',
      title: 'Inter IIT Tech Meet',
      date: 'IIT Bombay',
      location: 'IIT Bombay',
      description: 'Competed in technical challenges focused on autonomous systems and robotics. The experience pushed my skills in systems integration and real-time control.',
      image: teamWork,
      highlights: ['Autonomous Systems', 'Systems Integration']
    },
    {
      id: 'electronics-coord',
      title: 'Electronics Subsystem Coordinator',
      date: 'IIT Jodhpur',
      location: 'IIT Jodhpur',
      description: 'Coordinated electronics teams — responsible for design, procurement, and testing of subsystem components.',
      image: rcPlane,
      highlights: ['Coordination', 'Design & Testing']
    },
    {
      id: 'art-poetry',
      title: 'Art & Poetry',
      date: 'Ongoing',
      location: 'Personal',
      description: 'I pursue visual art and poetry as creative outlets — a balance to my engineering work that nourishes fresh ideas.',
  image: teamWork,
      highlights: ['Visual Art', 'Poetry']
    }
  ];

  // gallery images served from the public/ folder at root
  const artGalleryImages = Array.from({ length: 9 }).map((_, i) => ({
    src: `/art${i + 1}.jpg`,
    title: `Artwork ${i + 1}`,
  }));

  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Bubble effects removed: no dynamic bubble DOM creation and no mousemove listener here.
    // Keep cursor CSS variables as defaults; if you want cursor-driven gradient removed too,
    // we can remove the CSS block that depends on --cursor-x/--cursor-y.
    return () => {
      // nothing to cleanup for bubbles
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden bg-gradient-bg font-poppins" style={{ '--cursor-x': '50%', '--cursor-y': '50%' } as React.CSSProperties}>
      {/* Header */}
      <header className="sticky top-0 z-40 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          {/* Header intentionally minimal on Journey page */}
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Title */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="gradient-text">Journey</span>
            </h1>
            <p className="text-xl text-secondary-text">
              Personal stories, creative pursuits, and the experiences that shaped who I am today
            </p>
          </div>

          {/* CTA removed as requested */}

          {/* Journey Timeline (central spine with alternating cards) */}
          <div className="relative">
            {/* background gradient layers (deeper gradient + subtle moving overlay) */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-journey-base" />
            <div className="absolute inset-0 -z-9 rounded-xl bg-journey-overlay pointer-events-none" aria-hidden />

            {/* central spine */}
            <div className="timeline-spine absolute left-1/2 top-0 bottom-0 -translate-x-1/2" />

            <div className="space-y-10">
              {journeyEntries.map((entry, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <div key={entry.id || index} className="relative flex items-start lg:items-center">
                    {/* left column */}
                    <div className={`hidden lg:block w-1/2 pr-8 ${isLeft ? 'text-right' : ''}`}>
                      {isLeft && (
                        <Card className="timeline-card-gloss p-8 inline-block animate-slide-up hover:scale-[1.02] transition-transform duration-200" style={{ animationDelay: `${index * 0.06}s` }}>
                          <span className="card-glow-left absolute left-0 -translate-x-1/2 w-36 h-36 rounded-full pointer-events-none hidden lg:block" aria-hidden />
                          <span className="card-glow-right absolute right-0 translate-x-1/2 w-36 h-36 rounded-full pointer-events-none hidden lg:block" aria-hidden />
                          <div className="flex flex-col items-start gap-4">
                            <div className="w-full">
                              <img src={entry.image} alt={entry.title} className="w-full h-56 object-cover rounded-md" />
                            </div>
                            <div className="text-left w-full">
                              <h3 className="text-2xl font-semibold gradient-text">{entry.title}</h3>
                              <div className="text-sm text-secondary-text mt-1">{entry.date} • {entry.location}</div>
                              <p className="mt-3 text-secondary-text leading-relaxed">{entry.description}</p>
                            </div>
                          </div>
                        </Card>
                      )}
                    </div>

                    {/* center dot */}
                    <div className="w-12 flex items-start justify-center relative z-10">
                      <div className="timeline-dot mt-4" aria-hidden />
                    </div>

                    {/* right column */}
                    <div className={`w-full lg:w-1/2 ${isLeft ? '' : 'pl-8'}`}>
                      {!isLeft && (
                        <Card className="timeline-card-gloss p-8 animate-slide-up hover:scale-[1.02] transition-transform duration-200" style={{ animationDelay: `${index * 0.06}s` }}>
                          <span className="card-glow-left absolute left-0 -translate-x-1/2 w-36 h-36 rounded-full pointer-events-none hidden lg:block" aria-hidden />
                          <span className="card-glow-right absolute right-0 translate-x-1/2 w-36 h-36 rounded-full pointer-events-none hidden lg:block" aria-hidden />
                          <div className="flex flex-col items-start gap-4">
                            <div className="w-full">
                              <img src={entry.image} alt={entry.title} className="w-full h-56 object-cover rounded-md" />
                            </div>
                            <div className="text-left w-full">
                              <h3 className="text-2xl font-semibold gradient-text">{entry.title}</h3>
                              <div className="text-sm text-secondary-text mt-1">{entry.date} • {entry.location}</div>
                              <p className="mt-3 text-secondary-text leading-relaxed">{entry.description}</p>
                            </div>
                          </div>
                        </Card>
                      )}
                      {/* Mobile fallback: show card full width */}
                      <div className="lg:hidden mt-4">
                        <Card className="timeline-card-gloss p-6 animate-slide-up hover:scale-[1.02] transition-transform duration-200" style={{ animationDelay: `${index * 0.04}s` }}>
                          <div className="flex flex-col gap-3">
                            <img src={entry.image} alt={entry.title} className="w-full h-56 object-cover rounded-md" />
                            <h3 className="text-xl font-semibold gradient-text">{entry.title}</h3>
                            <div className="text-sm text-secondary-text">{entry.date} • {entry.location}</div>
                            <p className="mt-1 text-secondary-text leading-relaxed">{entry.description}</p>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* timeline styles */}
            <style>{`
              .timeline-spine { width: 4px; background: linear-gradient(180deg, rgba(124,58,237,0.9), rgba(59,130,246,0.9)); border-radius: 4px; opacity: 0.35; }
              .timeline-dot { width: 16px; height: 16px; border-radius: 9999px; background: linear-gradient(135deg, #7c3aed, #2563eb); box-shadow: 0 6px 18px rgba(37,99,235,0.18); border: 3px solid rgba(255,255,255,0.06); }
              .timeline-card-gloss { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.03); backdrop-filter: blur(6px); transition: box-shadow 180ms ease, transform 180ms ease, background 220ms ease; position: relative; overflow: hidden; }
              .timeline-card-gloss::before { content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 6px; background: linear-gradient(180deg,#7c3aed,#2563eb); opacity: 0.9; }
              .timeline-card-gloss:hover { box-shadow: 0 12px 40px rgba(37,99,235,0.14); background: linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.015)); }
              .timeline-card-gloss img { transition: transform 220ms ease; }
              .timeline-card-gloss:hover img { transform: scale(1.03); }
              /* soap-bubble elements (created dynamically) */
              /* Bubble visual removed */
              /* background base: deep gradient tuned for the Journey page */
              .bg-journey-base { background: radial-gradient(1200px 600px at 10% 20%, rgba(79,70,229,0.12), transparent 18%),
                                           radial-gradient(1000px 500px at 92% 80%, rgba(59,130,246,0.08), transparent 20%),
                                           linear-gradient(180deg, #05060a 0%, #0b1220 40%, #07102a 100%); }

              /* subtle animated overlay for gentle movement */
              .bg-journey-overlay { background: radial-gradient(circle at 20% 30%, rgba(124,58,237,0.06), transparent 18%),
                                              radial-gradient(circle at 80% 70%, rgba(59,130,246,0.04), transparent 22%);
                animation: journey-overlay-move 18s ease-in-out infinite;
                opacity: 0.95;
              }

              @keyframes journey-overlay-move {
                0% { background-position: 0% 0%, 100% 100%; }
                50% { background-position: 8% 4%, 92% 96%; }
                100% { background-position: 0% 0%, 100% 100%; }
              }

              /* cursor-driven radial gradient overlay (accent) */
              :root { --cursor-x: 50%; --cursor-y: 50%; }
              .bg-gradient-bg:before { content: ''; position: absolute; inset: 0; pointer-events: none; z-index: -1; background: radial-gradient(circle at var(--cursor-x) var(--cursor-y), rgba(99,102,241,0.12), rgba(59,130,246,0.06) 30%, transparent 45%); transition: background 120ms ease; }
              @media (max-width: 1024px) {
                .timeline-spine { left: 8px; transform: none; }
                .timeline-dot { margin-left: -8px; }
                .timeline-card-gloss::before { display: none; }
              }

              /* CTA removed */

              /* card side glow accents */
              .card-glow-left {
                background: radial-gradient(circle at 30% 40%, rgba(124,58,237,0.9), rgba(124,58,237,0.18) 25%, transparent 50%);
                filter: blur(18px) saturate(120%);
                opacity: 0.85;
                transform: translateY(-10%);
              }
              .card-glow-right {
                background: radial-gradient(circle at 70% 60%, rgba(59,130,246,0.9), rgba(59,130,246,0.18) 25%, transparent 50%);
                filter: blur(18px) saturate(120%);
                opacity: 0.85;
                transform: translateY(-10%);
              }
              .timeline-card-gloss { position: relative; }
              @media (max-width: 1024px) {
                .card-glow-left, .card-glow-right { display: none; }
              }
            `}</style>
          </div>

          {/* Art Gallery - Conveyor Belt */}
          <section className="mt-24">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                My <span className="gradient-text">Art Gallery</span>
              </h2>
              <p className="text-secondary-text">
                A conveyor of my creative works — continuously looping showcase
              </p>
            </div>

            <div className="overflow-x-auto py-6 -mx-4 px-4">
              <div className="flex gap-6 items-start snap-x snap-mandatory">
                {artGalleryImages.map((item, index) => (
                  <div key={index} className="min-w-[320px] max-w-[440px] snap-start">
                    <Card className="card-glow p-6 text-center hover:scale-105 transition-transform duration-300">
                      <div className="h-72 bg-gradient-accent/20 rounded-lg flex items-center justify-center overflow-hidden">
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover rounded-lg opacity-95"
                        />
                      </div>
                      <h3 className="font-medium gradient-text mt-3">{item.title}</h3>
                      <p className="text-sm text-secondary-text">Digital collection</p>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Inline styles for scroll gallery (touch-friendly + scroll-snap) */}
            <style>{`
              .snap-x { scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
              .snap-start { scroll-snap-align: start; }
              .card-glow img { display: block; }
              /* small visual padding for scroll container */
              @media (max-width: 640px) {
                .min-w-[320px] { min-width: 260px; }
                .h-72 { height: 16rem; }
              }
            `}</style>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Journey;
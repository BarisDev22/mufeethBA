import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BarChart3, BriefcaseBusiness, ChevronUp, ExternalLink, GraduationCap, Mail, MapPin, Menu, Phone, Sparkles, X } from 'lucide-react';
import './styles.css';

function LinkedInIcon({ size = 24 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}


const skills = [
  'Data Analysis','Business Analysis','KPI Monitoring','Trend Analysis','Power BI','Microsoft Excel',
  'IBM Cognos Analytics','Power Query','Dashboard Development','Data Visualization','MIS Reporting','Data Validation'
];

const experience = [
  {
    company: 'Zenith Logistics', role: 'Supply Chain Analyst', period: 'May 2026 – Aug 2026', location: 'Chennai, India',
    bullets: [
      'Analyzed logistics data to identify trends and support operational decision-making.',
      'Prepared recurring reports covering inventory, order fulfillment, transportation performance, and operational KPIs.',
      'Built dashboards in Excel, Power BI, and IBM Cognos Analytics to monitor supply chain performance.',
      'Generated insights for process improvement, cost optimization, and service-level enhancement.'
    ]
  },
  {
    company: 'Pickyourtrail', role: 'Customer Experience Analyst', period: 'Dec 2025 – May 2026', location: 'Chennai, India',
    bullets: [
      'Analyzed customer feedback and recurring service concerns to identify practical improvement opportunities.',
      'Maintained accurate CRM records and coordinated with internal teams to resolve customer concerns.',
      'Created Excel reports and trackers for customer requests, resolution status, and service performance.',
      'Supported process improvements by translating customer insights into practical recommendations.'
    ]
  }
];

function App(){
  const [open,setOpen]=useState(false); const [top,setTop]=useState(false);
  useEffect(()=>{const f=()=>setTop(window.scrollY > 500); window.addEventListener('scroll', f); return()=>window.removeEventListener('scroll', f)},[]);
  const go=(id)=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setOpen(false)};
  return <>
    <header className="nav"><a className="brand" onClick={()=>go('home')}>MOHAMED MUFEETH<span>.</span></a>
      <button className="menu" aria-label="Toggle menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      <nav className={open?'links open':'links'}>{['about','experience','skills','project','education','contact'].map(x=><button key={x} onClick={()=>go(x)}>{x}</button>)}</nav>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy reveal">
          <div className="eyebrow"><Sparkles size={16}/> Business & Data Analyst</div>
          <h1>Turning business data into <em>clear decisions.</em></h1>
          <p>MBA graduate with hands-on experience in supply chain analysis, customer experience analytics, dashboards, reporting, and performance insights.</p>
          <div className="actions"><button className="primary" onClick={()=>go('contact')}>Let’s connect <ArrowRight size={18}/></button><button className="secondary" onClick={()=>go('experience')}>View experience</button></div>
          <div className="mini"><span><MapPin size={16}/> Doha, Qatar</span><span><BarChart3 size={16}/> Excel · Power BI · Cognos</span></div>
        </div>
        <div className="portrait-wrap">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <img src="/profile.jpg" className="portrait" alt="Candidate portrait"/>
          
        </div>
      </section>

      <section id="about" className="section about"><div><p className="kicker">About me</p><h2>Analysis with business context.</h2></div><p className="lead">I combine analytical thinking with clear communication to make performance data useful. My experience spans logistics operations and customer experience, where I have built reports, monitored KPIs, identified patterns, and worked with stakeholders to support measurable improvements.</p></section>

      <section id="experience" className="section"><p className="kicker">Career journey</p><h2>Work experience</h2><div className="timeline">{experience.map((e,i)=><article className="job" key={e.company}><div className="dot">{i+1}</div><div className="job-head"><div><h3>{e.role}</h3><h4>{e.company}</h4></div><div className="job-meta"><span>{e.period}</span><span>{e.location}</span></div></div><ul>{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></article>)}</div></section>

      <section id="skills" className="section skill-section"><div className="skill-copy"><p className="kicker">Capabilities</p><h2>Tools and analytical strengths</h2><p>Practical skills for turning raw information into understandable reporting, visual insights, and business recommendations.</p></div><div className="skill-grid">{skills.map((s,i)=><div className="skill" key={s}><span>{String(i+1).padStart(2,'0')}</span>{s}</div>)}</div></section>

      <section id="project" className="section"><p className="kicker">Featured research</p><h2>Customer experience and brand loyalty</h2><article className="project"><div className="project-icon"><BarChart3/></div><div><h3>Customer Experience Analytics in an Online Travel Platform</h3><p>Research evaluating how service quality, usability, responsiveness, personalization, and issue resolution influence satisfaction, trust, repeat-purchase intention, and brand loyalty.</p><div className="project-tags"><span>Questionnaire design</span><span>Excel analysis</span><span>Customer retention</span><span>Insight generation</span></div></div></article></section>

      <section id="education" className="section"><p className="kicker">Academic foundation</p><h2>Education & leadership</h2><div className="edu-grid"><article><GraduationCap/><h3>Master of Business Administration</h3><p>Vels Institute of Science, Technology & Advanced Studies</p><strong>2024–2026 · 81%</strong></article><article><GraduationCap/><h3>Bachelor of Commerce</h3><p>B. S. Abdur Rahman Crescent Institute of Science and Technology</p><strong>2021–2024 · 86%</strong></article><article className="wide"><BriefcaseBusiness/><h3>Leadership highlights</h3><p>Overall Coordinator for TYCOON 2025, Bazaar Event, and a 12-day Freshers’ Inauguration Programme. Volunteer at VISTAS HR Conclave 2025.</p></article></div></section>

      <section id="contact" className="contact"><p className="kicker">Get in touch</p><h2>Let’s turn your data into the next decision.</h2><p>Open to opportunities in business analysis, data analysis, reporting, customer experience analytics, and supply chain analytics.</p><div className="contact-links"><a href="mailto:mufeethmak4@gmail.com"><Mail/>mufeethmak4@gmail.com</a><a href="tel:+97471264380"><Phone/>+974 71264380</a><a href="https://www.linkedin.com/in/mmufeeth/" target="_blank" rel="noopener noreferrer"><LinkedInIcon />LinkedIn <ExternalLink size={15}/></a></div></section>
    </main>
    <footer><span>© 2026 Mohamed Mufeeth</span><span>Business & Data Analyst Portfolio</span></footer>
    {top&&<button className="to-top" aria-label="Back to top" onClick={()=>go('home')}><ChevronUp/></button>}
  </>
}
createRoot(document.getElementById('root')).render(<App/>);

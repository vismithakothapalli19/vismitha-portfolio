import React, {useEffect, useState} from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const GITHUB = "https://github.com/vismithakothapalli19";
const LINKEDIN = "https://www.linkedin.com/in/vismitha-kothapalli-125826391/";
const EMAIL = "mailto:vismithakothapalli@gmail.com";

const projects = [
  {
    title:"HEALTHGUARD AI",
    label:"FEATURED · AI / HEALTHCARE",
    description:"A proactive healthcare supply-chain resilience platform focused on demand forecasting, anomaly detection, vulnerability analysis and disruption simulation.",
    tags:["AI/ML","Supply Chain","Simulation","TypeScript"],
    href:"https://github.com/vismithakothapalli19/HEALTHGUARD-AI",
    featured:true
  },
  {
    title:"AeroRAG",
    label:"RAG · INTELLIGENT SEARCH",
    description:"A retrieval-augmented generation project exploring grounded answers over a focused knowledge base.",
    tags:["RAG","AI","Python"],
    href:"https://github.com/vismithakothapalli19/aerorag"
  },
  {
    title:"Proof Before Action",
    label:"AI · TRUST & SAFETY",
    description:"A concept-driven AI safety project built around verifying evidence before an AI system takes action.",
    tags:["AI Safety","Verification","Trust"],
    href:"https://github.com/vismithakothapalli19/proof-before-action"
  },
  {
    title:"NTRO Crypto Tracing",
    label:"SECURITY · DATA",
    description:"A project exploring data-driven analysis for cryptocurrency tracing and investigation workflows.",
    tags:["Data","Security","Analytics"],
    href:"https://github.com/vismithakothapalli19/NTRO-crypto-tracing"
  },
  {
    title:"EcoCompute Optimizer",
    label:"OPTIMIZATION · COMPUTING",
    description:"A project focused on making computing workloads more resource-aware and efficient.",
    tags:["Optimization","Computing","Sustainability"],
    href:"https://github.com/vismithakothapalli19/EcoCompute-Optimizer"
  }
];

const skills = [
  ["01","Programming","Python · Java · C · C++ · SQL"],
  ["02","AI / Data","Data Science · Machine Learning · RAG · AI"],
  ["03","Development","React · JavaScript · HTML · CSS · REST · JDBC"],
  ["04","Tools","Git · GitHub · VS Code · Eclipse · MySQL"]
];

function App(){
  const [scrolled,setScrolled]=useState(false);
  const [active,setActive]=useState("home");
  useEffect(()=>{
    const onScroll=()=>{
      setScrolled(window.scrollY>30);
      const ids=["home","work","about","skills","contact"];
      let current="home";
      for(const id of ids){
        const el=document.getElementById(id);
        if(el && window.scrollY>=el.offsetTop-180) current=id;
      }
      setActive(current);
    };
    window.addEventListener("scroll",onScroll,{passive:true});
    onScroll();
    return()=>window.removeEventListener("scroll",onScroll);
  },[]);

  return <div className="site">
    <nav className={scrolled?"nav nav-scrolled":"nav"}>
      <a className="brand" href="#home"><span className="brand-mark">VK</span><span>Vismitha</span></a>
      <div className="nav-links">
        {["work","about","skills","contact"].map(x=><a className={active===x?"active":""} href={"#"+x} key={x}>{x[0].toUpperCase()+x.slice(1)}</a>)}
        <a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a>
      </div>
      <a className="nav-pill" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a>
    </nav>

    <main>
      <section id="home" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span>CSE DATA SCIENCE · AI/ML · SOFTWARE</div>
          <h1>I build <em>intelligent systems</em> that turn data into decisions.</h1>
          <p className="hero-text">Data Science student at SRM University KTR, exploring the intersection of AI/ML, data and software engineering through projects that solve real problems.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">Explore my work <span>↓</span></a>
            <a className="btn btn-ghost" href={GITHUB} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
          <div className="availability"><span></span>Currently building · AI · Data · Software</div>
        </div>
        <div className="hero-visual" aria-label="data intelligence visual">
          <div className="grid"></div>
          <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div>
          <div className="node n1">DATA</div><div className="node n2">MODEL</div><div className="node n3">RAG</div><div className="node n4">INSIGHT</div>
          <div className="core"><span>VK</span><small>BUILD / LEARN / SHIP</small></div>
          <div className="connector c1"></div><div className="connector c2"></div><div className="connector c3"></div><div className="connector c4"></div>
        </div>
      </section>

      <div className="ticker">
        <span>DATA SCIENCE</span><i>✦</i><span>ARTIFICIAL INTELLIGENCE</span><i>✦</i><span>SOFTWARE ENGINEERING</span><i>✦</i><span>PROBLEM SOLVING</span><i>✦</i>
      </div>

      <section id="work" className="section work">
        <div className="section-head"><div><div className="kicker">SELECTED WORK</div><h2>Projects with a purpose.</h2></div><a className="text-link" href={GITHUB} target="_blank" rel="noreferrer">View GitHub ↗</a></div>
        <div className="project-feature">
          <div className="project-art"><div className="scan"></div><div className="metric"><b>01</b><span>RESILIENCE<br/>ENGINE</span></div><div className="signal"></div><div className="art-label">HEALTHGUARD</div></div>
          <div className="project-info">
            <div className="project-label">01 · FEATURED PROJECT</div><h3>HEALTHGUARD AI</h3>
            <p>{projects[0].description}</p>
            <div className="tags">{projects[0].tags.map(t=><span key={t}>{t}</span>)}</div>
            <a className="project-link" href={projects[0].href} target="_blank" rel="noreferrer">Explore repository <span>↗</span></a>
          </div>
        </div>
        <div className="project-grid">
          {projects.slice(1).map((p,i)=><article className="project-card" key={p.title}>
            <div className="card-top"><span>{String(i+2).padStart(2,"0")}</span><span>↗</span></div>
            <div className="card-label">{p.label}</div><h3>{p.title}</h3><p>{p.description}</p>
            <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
            <a href={p.href} target="_blank" rel="noreferrer">GitHub repository ↗</a>
          </article>)}
        </div>
      </section>

      <section id="about" className="section about">
        <div className="kicker">ABOUT</div>
        <div className="about-layout">
          <h2>Curious about systems.<br/><em>Serious about building.</em></h2>
          <div className="about-copy"><p>I'm a CSE Data Science student who enjoys turning messy problems into structured, buildable systems.</p><p>My interests sit at the intersection of data, AI/ML and software engineering — from intelligent retrieval systems to practical applications where technology has to work beyond a demo.</p><p>I learn fastest by building, testing, breaking things and improving them.</p></div>
        </div>
        <div className="principles">
          <div><b>01</b><strong>Understand</strong><span>Start with the problem, not the technology.</span></div>
          <div><b>02</b><strong>Build</strong><span>Turn ideas into working prototypes.</span></div>
          <div><b>03</b><strong>Ship</strong><span>Polish the details that make software usable.</span></div>
        </div>
      </section>

      <section id="skills" className="section skills">
        <div className="section-head"><div><div className="kicker">TECHNICAL ARSENAL</div><h2>Tools I build with.</h2></div><div className="skill-note">Always learning. Always adding.</div></div>
        <div className="skill-list">{skills.map(s=><div className="skill-row" key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><b>↗</b></div>)}</div>
      </section>

      <section className="section beyond">
        <div className="kicker">BEYOND THE CODE</div>
        <div className="beyond-grid">
          <div><span>01</span><h3>Hackathons & Projects</h3><p>Building under constraints has taught me to move from idea to prototype quickly.</p></div>
          <div><span>02</span><h3>Communication</h3><p>Presentations, MUNs and team projects have made clear communication part of my toolkit.</p></div>
          <div><span>03</span><h3>Discipline</h3><p>Years of Bharatanatyam have shaped patience, consistency and attention to detail.</p></div>
        </div>
      </section>

      <section className="section exploring">
        <div className="explore-inner"><span>CURIOUS / CURRENTLY EXPLORING</span><div className="explore-track"><b>AI AGENTS</b><i>✦</i><b>RAG SYSTEMS</b><i>✦</i><b>DATA PRODUCTS</b><i>✦</i><b>INTELLIGENT SOFTWARE</b></div></div>
      </section>

      <section id="contact" className="section contact">
        <div className="kicker">CONTACT</div>
        <h2>Have an interesting<br/><em>problem?</em></h2>
        <p>I'm always interested in learning, building and meeting people who care about useful technology.</p>
        <a className="contact-email" href={EMAIL}>vismithakothapalli@gmail.com <span>↗</span></a>
        <div className="contact-links"><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a></div>
      </section>
    </main>

    <footer><span>© 2026 Vismitha Kothapalli</span><span>Designed & built with curiosity.</span><a href="#home">Back to top ↑</a></footer>
  </div>
}
createRoot(document.getElementById("root")).render(<App/>);

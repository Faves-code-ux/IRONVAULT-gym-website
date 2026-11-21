import { useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Clock3, Dumbbell, Instagram, MapPin, Menu, Play, Plus, X, Zap } from 'lucide-react'

const programmes = [
  { number: '01', name: 'STRENGTH', detail: 'Build real strength with guided weight training and smart progress plans.', time: '45–60 MIN', level: 'ALL LEVELS', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1000&q=85' },
  { number: '02', name: 'CONDITIONING', detail: 'Improve stamina, move better and keep your energy high.', time: '30–45 MIN', level: 'ALL LEVELS', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1000&q=85' },
  { number: '03', name: 'PERSONAL TRAINING', detail: 'One-to-one coaching built around your goals and your pace.', time: '45 MIN', level: 'PERSONAL COACH', image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=85' }
]
const classes = [
  { day: 'MON', date: '01', title: 'Full Body Strength', coach: 'Alex Morgan', time: '07:00 AM', type: 'Strength' },
  { day: 'TUE', date: '02', title: 'Power Circuit', coach: 'Jamie Cole', time: '06:30 AM', type: 'Conditioning' },
  { day: 'WED', date: '03', title: 'Lower Body Focus', coach: 'Alex Morgan', time: '07:00 AM', type: 'Strength' },
  { day: 'THU', date: '04', title: 'Core & Mobility', coach: 'Taylor Reed', time: '05:30 PM', type: 'Mobility' },
  { day: 'FRI', date: '05', title: 'Engine Room HIIT', coach: 'Jamie Cole', time: '06:00 PM', type: 'Conditioning' }
]
const plans = [
  { name: 'STARTER', price: '₦18,000', description: 'A strong place to begin.', features: ['Gym floor access', 'Locker room access', 'Fitness welcome session'] },
  { name: 'UNLIMITED', price: '₦35,000', description: 'For the ones who show up.', features: ['Everything in Starter', 'Unlimited group classes', 'Monthly progress check-in', 'Guest pass each month'], featured: true },
  { name: 'COACH+', price: '₦65,000', description: 'More guidance. More focus.', features: ['Everything in Unlimited', '2 personal training sessions', 'Personal training plan', 'Priority class booking'] }
]
const questions = [
  { question: 'Do I need experience to join?', answer: 'Not at all. Our coaches can help you find a comfortable starting point and build from there.' },
  { question: 'Can I try the gym before joining?', answer: 'Yes. Contact our team to ask about a visit or trial session before choosing a membership.' },
  { question: 'What should I bring for my first visit?', answer: 'Bring comfortable workout clothes, training shoes, a water bottle and a willingness to get started.' }
]

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDay, setActiveDay] = useState('MON')
  const [openQuestion, setOpenQuestion] = useState(0)
  const [selectedPlan, setSelectedPlan] = useState('UNLIMITED')
  const [joinOpen, setJoinOpen] = useState(false)
  const [requestSent, setRequestSent] = useState(false)
  const currentClass = classes.find(item => item.day === activeDay) || classes[0]

  function openJoin(planName = selectedPlan) {
    setSelectedPlan(planName)
    setRequestSent(false)
    setJoinOpen(true)
  }

  return <div className="min-h-screen bg-[#10110f] text-white">
    <div className="top-line">
      <span><Zap size={13} fill="currentColor" /> YOUR NEXT LEVEL STARTS HERE</span>
      <span className="top-right">LAGOS, NIGERIA <i className="green-dot" /> OPEN DAILY 5AM — 11PM</span>
    </div>
    <header className="header">
      <a className="logo" href="#home" aria-label="Ironvault home"><span className="logo-mark"><Dumbbell size={22}/></span><span>IRON<span className="green">VAULT</span><small>FITNESS CLUB</small></span></a>
      <nav className={mobileMenuOpen ? 'nav nav-open' : 'nav'}>
        {[['THE CLUB','#about'],['PROGRAMMES','#programmes'],['SCHEDULE','#schedule'],['MEMBERSHIP','#membership']].map(([label, link]) => <a key={label} href={link} onClick={() => setMobileMenuOpen(false)}>{label}</a>)}
      </nav>
      <div className="header-actions"><a className="header-login" href="#contact">LET'S TALK</a><button className="join-button" onClick={() => openJoin()}>JOIN THE CLUB <ArrowUpRight size={15}/></button></div>
      <button className="mobile-toggle" aria-label="Toggle menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <img className="hero-photo" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=90" alt="Modern strength training gym"/>
        <div className="hero-overlay"/>
        <div className="hero-content">
          <div className="hero-label"><i className="green-dot"/> BUILT FOR THE WORK</div>
          <h1>NO SHORTCUTS.<br/><span>JUST</span> <em>STRENGTH.</em></h1>
          <p>A better version of you isn't found. It's built.<br/>Show up, put in the work, and make it count.</p>
          <div className="hero-buttons"><a className="button button-green" href="#membership">FIND YOUR MEMBERSHIP <ArrowUpRight size={17}/></a><a className="watch-link" href="#about"><span><Play size={13} fill="currentColor"/></span> GET TO KNOW US</a></div>
          <div className="hero-proof"><div className="proof-avatars"><span>J</span><span>A</span><span>M</span><span>+</span></div><div><strong>1,200+</strong><small>PEOPLE PUTTING IN THE WORK</small></div></div>
        </div>
        <div className="hero-side">TRAIN WITH PURPOSE <span/> LIVE WITH POWER</div>
        <a href="#about" className="scroll-cue"><ArrowDown size={15}/> SCROLL TO EXPLORE</a>
        <div className="hero-bottom-note">01 / 04 <span/> THE IRONVAULT STANDARD</div>
      </section>

      <section className="numbers-strip" id="about">
        <div className="number-item"><strong>12<span>+</span></strong><small>YEARS OF EXPERIENCE</small></div>
        <div className="number-item"><strong>1.2<span>K</span></strong><small>ACTIVE MEMBERS</small></div>
        <div className="number-item"><strong>24<span>/7</span></strong><small>GOOD ENERGY</small></div>
        <div className="numbers-message"><span className="green">THE WORK</span><br/>IS THE REWARD.</div>
      </section>

      <section className="intro section-pad">
        <div className="intro-left"><p className="section-tag">01 / WHO WE ARE</p><h2>MORE THAN<br/>A <span className="outline-text">GYM.</span><br/><em>A MINDSET.</em></h2></div>
        <div className="intro-right"><p className="intro-lead">We built IRONVAULT for people who are ready to take their strength seriously — whatever that looks like for them.</p><p className="muted">No judgement. No pressure to be perfect. Just great equipment, good people and coaches who want to see you win. Start where you are. We'll help you move forward.</p><a className="text-arrow" href="#programmes">DISCOVER THE CLUB <ArrowUpRight size={16}/></a></div>
        <div className="intro-image"><img src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1200&q=85" alt="Gym training space"/><span>YOUR SPACE. YOUR PACE.</span></div>
      </section>

      <section className="programmes section-pad" id="programmes">
        <div className="section-top"><div><p className="section-tag">02 / FIND YOUR FOCUS</p><h2>TRAIN YOUR<br/><em>WAY.</em></h2></div><p className="muted section-top-copy">Different goals. Different paths.<br/>One place to make progress.</p></div>
        <div className="programme-grid">{programmes.map(item => <article className="programme-card" key={item.number}><div className="programme-image"><img src={item.image} alt={item.name}/><span className="programme-number">{item.number}</span><span className="programme-arrow"><ArrowUpRight size={19}/></span></div><div className="programme-info"><div><h3>{item.name}</h3><p>{item.detail}</p></div><div className="programme-meta"><span><Clock3 size={13}/>{item.time}</span><span>{item.level}</span></div></div></article>)}</div>
      </section>

      <section className="quote-band"><div className="quote-mark">“</div><blockquote>YOU DON'T HAVE TO BE<br/>THE BEST. JUST BE <em>BETTER</em><br/>THAN YESTERDAY.</blockquote><span>THE IRONVAULT MINDSET</span></section>

      <section className="schedule section-pad" id="schedule">
        <div className="section-top"><div><p className="section-tag">03 / MAKE A PLAN</p><h2>YOUR WEEK.<br/><em>YOUR WIN.</em></h2></div><p className="muted section-top-copy">A little structure goes a long way.<br/>Find a class and make it yours.</p></div>
        <div className="schedule-box">
          <div className="day-list">{classes.map(item => <button key={item.day} className={activeDay === item.day ? 'day-button selected' : 'day-button'} onClick={() => setActiveDay(item.day)}><span>{item.day}</span><strong>{item.date}</strong></button>)}</div>
          <div className="class-detail"><div className="class-image"><img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85" alt="Group fitness class"/></div><div className="class-info"><span className="class-type">{currentClass.type} SESSION</span><h3>{currentClass.title}</h3><p>Led by {currentClass.coach}. Bring your energy and we'll take care of the rest.</p><div className="class-time"><Clock3 size={16}/><strong>{currentClass.time}</strong><span>· 50 MINUTES</span></div><button className="text-arrow" onClick={() => openJoin()}>BOOK YOUR SPOT <ArrowUpRight size={16}/></button></div></div>
          <div className="schedule-note"><i className="green-dot"/> CLASS TIMES MAY CHANGE. CHECK WITH OUR TEAM BEFORE YOUR VISIT.</div>
        </div>
      </section>

      <section className="membership section-pad" id="membership">
        <div className="section-top"><div><p className="section-tag">04 / INVEST IN YOU</p><h2>CHOOSE YOUR<br/><em>LEVEL.</em></h2></div><p className="muted section-top-copy">No complicated plans. Just the access<br/>and support you need to get moving.</p></div>
        <div className="plan-grid">{plans.map(plan => <article className={plan.featured ? 'plan-card featured-plan' : 'plan-card'} key={plan.name}>{plan.featured && <div className="popular-label">MEMBER FAVOURITE</div>}<span className="plan-name">{plan.name}</span><p>{plan.description}</p><div className="plan-price">{plan.price}<small>/ month</small></div><div className="plan-rule"/><ul>{plan.features.map(feature => <li key={feature}><Check size={15}/>{feature}</li>)}</ul><button className={plan.featured ? 'button button-green plan-join' : 'button button-outline plan-join'} onClick={() => openJoin(plan.name)}>CHOOSE {plan.name} <ArrowUpRight size={16}/></button></article>)}</div>
        <p className="pricing-note">PRICES ARE SAMPLE STARTING RATES. CONFIRM CURRENT MEMBERSHIP DETAILS WITH THE CLUB.</p>
      </section>

      <section className="faq-contact" id="contact">
        <div className="faq"><p className="section-tag">GOT QUESTIONS?</p><h2>GOOD TO<br/><em>KNOW.</em></h2>{questions.map((item,index) => <div className="faq-item" key={item.question}><button onClick={() => setOpenQuestion(openQuestion === index ? -1 : index)}><span>{item.question}</span>{openQuestion === index ? <X size={17}/> : <Plus size={17}/>}</button>{openQuestion === index && <p>{item.answer}</p>}</div>)}</div>
        <div className="contact-card"><span className="section-tag">COME THROUGH</span><h2>LET'S GET<br/><em>TO WORK.</em></h2><p>Have a question or want to see the space? Our team would love to hear from you.</p><div className="contact-line"><MapPin size={17}/><span>Lagos, Nigeria<br/><small>Exact address to be added</small></span></div><div className="contact-line"><Clock3 size={17}/><span>MON — SUN<br/><small>5:00 AM — 11:00 PM</small></span></div><a className="button button-green contact-button" href="mailto:hello@ironvault.example">TALK TO THE TEAM <ArrowUpRight size={17}/></a></div>
      </section>
    </main>

    <footer className="footer"><div className="footer-main"><a className="logo footer-logo" href="#home"><span className="logo-mark"><Dumbbell size={22}/></span><span>IRON<span className="green">VAULT</span><small>FITNESS CLUB</small></span></a><p>SHOW UP. PUT IN THE WORK.<br/><span className="green">BECOME YOUR STRONGEST.</span></p><div className="social-links"><a href="#contact" aria-label="Instagram"><Instagram size={18}/></a><a href="#home" aria-label="Back to top"><ArrowUpRight size={18}/></a></div></div><div className="footer-bottom"><span>© 2026 IRONVAULT FITNESS CLUB. DEMO WEBSITE.</span><a href="#home">BACK TO TOP ↑</a></div></footer>

    {joinOpen && <div className="modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) setJoinOpen(false) }}><div className="join-modal"><button className="modal-close" onClick={() => setJoinOpen(false)} aria-label="Close"><X/></button>{requestSent ? <div className="join-success"><span className="success-icon"><Check size={25}/></span><p className="section-tag">REQUEST RECEIVED</p><h2>YOU'RE ONE<br/><em>STEP CLOSER.</em></h2><p>This demo form has recorded your selection on this page. Connect a backend to receive real membership enquiries.</p><button className="button button-green" onClick={() => setJoinOpen(false)}>BACK TO THE SITE <ArrowRight size={16}/></button></div> : <><p className="section-tag">TAKE THE FIRST STEP</p><h2>LET'S GET<br/><em>YOU STARTED.</em></h2><p className="modal-intro">Choose a plan and leave your details. Our team can help you with the next step.</p><form onSubmit={event => {event.preventDefault();setRequestSent(true)}}><label>YOUR NAME<input required placeholder="Enter your name"/></label><label>EMAIL ADDRESS<input required type="email" placeholder="you@example.com"/></label><label>PHONE NUMBER<input required type="tel" placeholder="+234"/></label><label>MEMBERSHIP PLAN<select value={selectedPlan} onChange={event => setSelectedPlan(event.target.value)}>{plans.map(plan => <option key={plan.name}>{plan.name}</option>)}</select></label><button className="button button-green submit-button" type="submit">SEND MEMBERSHIP REQUEST <ArrowUpRight size={17}/></button></form><small className="form-note">DEMO FORM — NO INFORMATION IS SENT OR STORED.</small></>}</div></div>}
  </div>
}

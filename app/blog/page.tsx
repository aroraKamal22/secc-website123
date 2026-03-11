'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const blogPosts = [
  {
    id: 1,
    title: 'How to Manage Dry Eyes in Air-Conditioned Environments During Summer',
    excerpt: 'Learn effective strategies to prevent and manage dry eyes in air-conditioned spaces.',
    fullContent: `Dry eye syndrome is a common condition that occurs when your tears aren't able to provide adequate lubrication for your eyes. Air conditioning can significantly worsen dry eye symptoms by reducing humidity levels in indoor environments.

**Why Do Air Conditioners Cause Dry Eyes?**
• AC removes moisture from the air, creating a dry environment
• Cold air blowing directly on eyes increases tear evaporation
• Reduced blinking while working in AC environments
• Low humidity levels (below 30%) accelerate tear film breakdown

**Common Symptoms of Dry Eyes:**
• Stinging or burning sensation
• Scratchy or gritty feeling
• Sensitivity to light
• Eye redness and fatigue
• Blurred vision, especially when reading
• Difficulty wearing contact lenses

**Prevention Tips for AC Environments:**

1. **Use a Humidifier** - Maintain indoor humidity between 40-60%

2. **Position Away from Direct Airflow** - Don't sit directly under AC vents

3. **Take Regular Breaks** - Follow the 20-20-20 rule

4. **Stay Hydrated** - Drink 8-10 glasses of water daily

5. **Use Artificial Tears** - Lubricating eye drops provide instant relief

**Home Remedies:**
• Apply warm compress to eyes for 5-10 minutes
• Include omega-3 fatty acids in your diet
• Wear wraparound glasses to reduce evaporation
• Blink consciously and frequently

**When to See a Doctor:**
If symptoms persist despite home care, visit Saraswati Eye Care Centre. Our specialists can recommend prescription eye drops, punctal plugs, or other advanced treatments for chronic dry eye.`,
    category: 'Eye Health',
    author: 'Dr. Khushboo Gupta',
    date: 'March 8, 2026',
    readTime: '5 min read',
    featured: true,
  },
  {
    id: 2,
    title: 'Benefits of Premium Intraocular Lenses (IOLs): Are They Right for You?',
    excerpt: 'Explore the advantages of premium IOLs and determine if they\'re the right choice for your vision.',
    fullContent: `When undergoing cataract surgery, the cloudy natural lens is replaced with an artificial intraocular lens (IOL). While standard IOLs restore clear vision at one distance, premium IOLs offer advanced features for enhanced visual outcomes.

**Types of Premium IOLs:**

1. **Multifocal IOLs**
• Provide clear vision at multiple distances (near, intermediate, far)
• Reduce dependency on glasses after surgery
• Ideal for active individuals wanting spectacle independence

2. **Toric IOLs**
• Specifically designed to correct astigmatism
• Provide sharper, clearer vision
• Best for patients with significant corneal astigmatism

3. **Extended Depth of Focus (EDOF) IOLs**
• Elongated focal point for continuous vision
• Better contrast sensitivity than multifocal
• Fewer visual disturbances like halos

4. **Accommodating IOLs**
• Mimic the natural focusing ability of the eye
• Move or change shape to focus at different distances
• Smooth transition between viewing distances

**Benefits of Premium IOLs:**
• Reduced or eliminated need for glasses
• Better quality of vision in various lighting
• Improved lifestyle and independence
• Long-lasting visual correction

**Who is a Good Candidate?**
• Active individuals wanting freedom from glasses
• Patients with healthy eyes (besides cataract)
• Those with realistic expectations
• People with specific visual needs

**Considerations:**
• Higher cost than standard IOLs
• May experience halos or glare initially
• Not suitable for everyone - requires thorough evaluation

**Our Expertise:**
At Saraswati Eye Care Centre, Dr. Rajesh Garg uses AI-assisted IOL selection technology to recommend the most suitable lens for each patient's unique visual needs and lifestyle.`,
    category: 'Cataract',
    author: 'Dr. Rajesh Garg',
    date: 'March 6, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 3,
    title: 'Topical vs Injection Anaesthesia in Cataract Surgery: What is Safer?',
    excerpt: 'Comparing different anesthesia methods in cataract surgery and their safety profiles.',
    fullContent: `Anesthesia is a crucial aspect of cataract surgery, ensuring patient comfort throughout the procedure. The two main types used are topical anesthesia (eye drops) and injection anesthesia (local block). Understanding the differences can help patients make informed decisions.

**Topical Anesthesia (Eye Drops):**

**How it Works:**
• Anesthetic drops are applied directly to the eye surface
• Numbs the cornea and conjunctiva
• Patient remains awake and comfortable

**Advantages:**
• No injection required - no needle anxiety
• Faster recovery with quicker visual rehabilitation
• Lower risk of complications
• No eye patching needed after surgery
• Can resume normal activities sooner

**Considerations:**
• Patient must be able to cooperate and stay still
• May feel slight pressure during surgery
• Best for experienced surgeons with quick surgical times

**Injection Anesthesia (Peribulbar/Retrobulbar Block):**

**How it Works:**
• Anesthetic is injected around the eye
• Temporarily paralyzes eye muscles
• Complete numbness and immobility

**Advantages:**
• Complete pain control
• Eye remains still during surgery
• Good for anxious patients
• Suitable for longer procedures

**Considerations:**
• Small risk of bruising or bleeding
• Temporary double vision possible
• Slower visual recovery
• Eye may need patching

**Which is Safer?**
Both methods are safe when performed by experienced surgeons. Modern cataract surgery with topical anesthesia has an excellent safety profile. The choice depends on:
• Patient's anxiety level
• Expected surgical complexity
• Surgeon's expertise and preference
• Patient's ability to cooperate

**Our Approach:**
At Saraswati Eye Care Centre, Dr. Rajesh Garg predominantly uses topical anesthesia for routine cataract surgeries, offering patients a comfortable, needle-free experience with rapid visual recovery.`,
    category: 'Cataract',
    author: 'Dr. Rajesh Garg',
    date: 'March 4, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding Cataract: Causes, Symptoms, and Treatment Options',
    excerpt: 'Learn everything about cataract - the most common age-related eye condition.',
    fullContent: `Cataract is a clouding of the natural lens inside the eye, which leads to decreased vision. It is one of the most common causes of vision loss in people over 40 and is the principal cause of blindness worldwide.

**What Causes Cataract?**
• Age-related changes in lens proteins
• Diabetes and other medical conditions
• Prolonged exposure to ultraviolet light
• Eye injuries or inflammation
• Family history and genetics
• Smoking and excessive alcohol consumption

**Common Symptoms:**
• Blurry or cloudy vision
• Difficulty seeing at night
• Sensitivity to light and glare
• Seeing halos around lights
• Fading or yellowing of colors
• Double vision in one eye

**Treatment Options:**
Modern cataract surgery is one of the safest and most effective surgical procedures. At Saraswati Eye Care Centre, we offer:

1. **Phacoemulsification** - Advanced technique using ultrasound to break up the cloudy lens
2. **FLACS (Femtosecond Laser-Assisted Cataract Surgery)** - Most precise and bladeless surgery
3. **Premium IOLs** - Multifocal, toric, and extended depth of focus lenses

**Why Choose Us?**
Dr. Rajesh Garg has performed over 25,000 successful cataract surgeries with excellent outcomes. Our centre is equipped with the latest Zeiss and Alcon equipment for precise diagnosis and treatment.`,
    category: 'Cataract',
    author: 'Dr. Rajesh Garg',
    date: 'March 5, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 5,
    title: 'Diabetic Retinopathy: Why Regular Eye Exams Are Critical',
    excerpt: 'Diabetes can silently damage your eyes.',
    fullContent: `Diabetic retinopathy is a diabetes complication that affects the eyes. It's caused by damage to the blood vessels of the light-sensitive tissue at the back of the eye (retina). At first, diabetic retinopathy may cause no symptoms or only mild vision problems, but it can eventually cause blindness.

**Stages of Diabetic Retinopathy:**

1. **Mild Nonproliferative** - Small areas of balloon-like swelling in the retina's blood vessels
2. **Moderate Nonproliferative** - Some blood vessels that nourish the retina become blocked
3. **Severe Nonproliferative** - More blood vessels are blocked, depriving areas of the retina of blood supply
4. **Proliferative** - Advanced stage where new abnormal blood vessels grow

**Warning Signs:**
• Spots or dark strings floating in your vision (floaters)
• Blurred vision
• Fluctuating vision
• Dark or empty areas in your vision
• Vision loss

**Prevention Tips:**
• Keep blood sugar levels under control
• Maintain healthy blood pressure and cholesterol
• Get comprehensive dilated eye exam at least once a year
• Quit smoking
• Exercise regularly

**Treatment at Saraswati Eye Care:**
Dr. Ajay Garg, our retina specialist, provides advanced treatments including:
• Anti-VEGF injections
• Laser photocoagulation
• Vitrectomy surgery

Early detection through regular eye exams can prevent 95% of diabetes-related vision loss.`,
    category: 'Retina',
    author: 'Dr. Ajay Garg',
    date: 'March 1, 2026',
    readTime: '6 min read',
    featured: false,
  },
  {
    id: 6,
    title: 'Myopia in Children: A Growing Epidemic',
    excerpt: 'With increased screen time, childhood myopia is on the rise.',
    fullContent: `Myopia, commonly known as nearsightedness, has become increasingly prevalent among children worldwide. Studies show that the rate of myopia has nearly doubled in the past few decades, largely attributed to changes in lifestyle and increased near-work activities.

**Why is Childhood Myopia Increasing?**
• Increased screen time on phones, tablets, and computers
• Less time spent outdoors
• Intensive near-work activities like reading and studying
• Genetic factors (if parents are myopic)

**Signs Your Child May Have Myopia:**
• Squinting to see distant objects
• Sitting too close to the TV
• Holding books very close while reading
• Complaining of headaches
• Rubbing eyes frequently
• Poor performance in sports

**Myopia Control Strategies:**

1. **Atropine Eye Drops** - Low-dose atropine can slow myopia progression by 50-60%
2. **Orthokeratology (Ortho-K)** - Special contact lenses worn overnight to reshape the cornea
3. **Multifocal Contact Lenses** - Specially designed lenses that slow myopia progression
4. **Outdoor Time** - At least 2 hours of outdoor activity daily

**Prevention Tips for Parents:**
• Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds
• Limit screen time to 2 hours per day
• Encourage outdoor play
• Ensure proper lighting while reading
• Regular eye check-ups starting from age 3

At Saraswati Eye Care, Dr. Khushboo Gupta specializes in pediatric eye care and myopia management with the latest evidence-based treatments.`,
    category: 'Pediatric',
    author: 'Dr. Khushboo Gupta',
    date: 'February 25, 2026',
    readTime: '7 min read',
    featured: false,
  },
  {
    id: 7,
    title: 'Glaucoma: The Silent Thief of Sight',
    excerpt: 'Glaucoma often has no symptoms until significant vision loss occurs.',
    fullContent: `Glaucoma is a group of eye conditions that damage the optic nerve, which is vital for good vision. This damage is often caused by abnormally high pressure in your eye and is one of the leading causes of blindness for people over 60.

**Types of Glaucoma:**

1. **Open-Angle Glaucoma** - Most common type, develops slowly with no early symptoms
2. **Angle-Closure Glaucoma** - Can occur suddenly (acute) or gradually (chronic)
3. **Normal-Tension Glaucoma** - Optic nerve damage despite normal eye pressure
4. **Congenital Glaucoma** - Present at birth due to abnormal eye development

**Risk Factors:**
• Age over 60 years
• Family history of glaucoma
• High eye pressure (intraocular pressure)
• Thin corneas
• Diabetes, heart disease, high blood pressure
• Previous eye injuries
• Long-term use of corticosteroid medications

**Symptoms of Acute Glaucoma:**
• Severe headache
• Eye pain
• Nausea and vomiting
• Blurred vision
• Halos around lights
• Eye redness

**Treatment Options:**
• **Eye Drops** - To reduce eye pressure
• **Laser Treatment** - Trabeculoplasty, iridotomy
• **Surgery** - Trabeculectomy, drainage implants
• **MIGS** - Minimally Invasive Glaucoma Surgery

**Why Regular Screening is Important:**
Since open-angle glaucoma has no early warning signs, regular comprehensive eye exams are crucial. Early detection and treatment can slow or prevent vision loss.

At Saraswati Eye Care Centre, we have advanced OCT and visual field testing equipment for early glaucoma detection and monitoring.`,
    category: 'Glaucoma',
    author: 'Dr. Rajesh Garg',
    date: 'February 15, 2026',
    readTime: '5 min read',
    featured: false,
  },
  {
    id: 8,
    title: 'Digital Eye Strain: Tips for the Screen Generation',
    excerpt: 'Hours of screen time taking a toll on your eyes?',
    fullContent: `In today's digital age, most of us spend hours staring at computer screens, smartphones, and tablets. This prolonged screen time can lead to digital eye strain, also known as computer vision syndrome.

**Common Symptoms:**
• Eye fatigue and discomfort
• Dry, irritated eyes
• Blurred vision
• Headaches
• Neck and shoulder pain
• Difficulty focusing

**Why Does Digital Eye Strain Occur?**
• Reduced blinking (we blink 66% less when using screens)
• Blue light emission from devices
• Poor screen positioning
• Glare from screens
• Uncorrected vision problems
• Poor posture

**Prevention and Relief Tips:**

**The 20-20-20 Rule:**
Every 20 minutes, take a 20-second break and look at something 20 feet away.

**Optimize Your Workspace:**
• Position screen at arm's length away
• Top of screen should be at or slightly below eye level
• Reduce glare with proper lighting
• Use anti-glare screen protectors

**Eye Care Habits:**
• Blink frequently and fully
• Use artificial tears for dry eyes
• Adjust screen brightness to match surroundings
• Increase text size if needed
• Consider computer glasses with blue light filter

**Lifestyle Changes:**
• Take regular breaks from screens
• Practice eye exercises
• Stay hydrated
• Get adequate sleep
• Include omega-3 fatty acids in diet

If symptoms persist despite these measures, visit Saraswati Eye Care Centre for a comprehensive eye examination. Our doctors can prescribe appropriate solutions for your specific needs.`,
    category: 'Eye Health',
    author: 'Dr. Khushboo Gupta',
    date: 'February 10, 2026',
    readTime: '4 min read',
    featured: false,
  },
  {
    id: 9,
    title: 'Eye Health and Nutrition: Foods That Protect Your Vision',
    excerpt: 'Discover which foods are best for maintaining healthy eyes.',
    fullContent: `What you eat plays a significant role in maintaining healthy eyes and preventing age-related eye conditions. A diet rich in certain nutrients can help protect your vision and reduce the risk of eye diseases.

**Essential Nutrients for Eye Health:**

**1. Vitamin A and Beta-Carotene**
• Essential for night vision and preventing dry eyes
• Sources: Carrots, sweet potatoes, spinach, eggs

**2. Vitamin C**
• Protects against cataracts and macular degeneration
• Sources: Citrus fruits, berries, bell peppers, broccoli

**3. Vitamin E**
• Antioxidant that protects eye cells from damage
• Sources: Nuts, seeds, vegetable oils, avocados

**4. Omega-3 Fatty Acids**
• Reduces dry eye syndrome and supports retinal health
• Sources: Fatty fish (salmon, mackerel), walnuts, flaxseeds

**5. Zinc**
• Helps vitamin A produce melanin, a protective pigment
• Sources: Oysters, beef, pumpkin seeds, chickpeas

**6. Lutein and Zeaxanthin**
• Filter harmful blue light and protect macula
• Sources: Leafy greens, eggs, corn, orange peppers

**Eye-Healthy Diet Tips:**
• Eat a variety of colorful fruits and vegetables
• Include fish in your diet at least twice a week
• Choose whole grains over refined carbohydrates
• Stay hydrated with plenty of water
• Limit processed foods and sugary drinks

**Foods to Avoid:**
• Excessive sugar (increases diabetes risk)
• Saturated and trans fats
• Excessive sodium
• Heavily processed foods

**Sample Eye-Healthy Meal Plan:**
• Breakfast: Eggs with spinach and whole grain toast
• Lunch: Grilled salmon salad with leafy greens
• Snack: Handful of almonds and an orange
• Dinner: Lean chicken with roasted sweet potatoes and broccoli

Remember, a healthy diet works best when combined with regular eye check-ups, adequate sleep, and protection from UV rays.`,
    category: 'Eye Health',
    author: 'Dr. Ajay Garg',
    date: 'January 30, 2026',
    readTime: '5 min read',
    featured: false,
  },
];

const categories = ['All', 'Cataract', 'Retina', 'Glaucoma', 'Pediatric', 'Eye Health'];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <>
      <Header />
      <main className="blog-page">
        {/* Hero Section */}
        <section className="blog-hero">
          <div className="hero-content">
            <span className="hero-tag">Our Blog</span>
            <h1>Eye Care <span>Insights</span> & Tips</h1>
            <p>Expert advice from our specialists on eye health, treatments, and prevention</p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="filter-section">
          <div className="filter-container">
            <div className="search-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="category-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`category-tab ${selectedCategory === cat ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="blog-grid-section">
          <div className="blog-container">
            <div className="section-header">
              <h2>Health Articles</h2>
              <span className="post-count">{filteredPosts.length} articles</span>
            </div>

            {filteredPosts.length === 0 ? (
              <div className="no-results">
                <h3>No articles found</h3>
                <p>Try adjusting your search or filter</p>
              </div>
            ) : (
              <div className="blog-grid">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className={`blog-card ${expandedPost === post.id ? 'expanded' : ''}`}
                  >
                    <div className="card-header">
                      <span className="card-category">{post.category}</span>
                      {post.featured && <span className="featured-badge">Featured</span>}
                    </div>
                    <div className="card-content">
                      <div className="card-meta">
                        <span className="card-date">{post.date}</span>
                        <span className="card-read-time">{post.readTime}</span>
                      </div>
                      <h3>{post.title}</h3>

                      {expandedPost === post.id ? (
                        <div className="full-content">
                          {post.fullContent.split('\n').map((paragraph, idx) => {
                            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                              return <h4 key={idx}>{paragraph.replace(/\*\*/g, '')}</h4>;
                            } else if (paragraph.startsWith('•')) {
                              return <li key={idx}>{paragraph.substring(1).trim()}</li>;
                            } else if (paragraph.match(/^\d+\./)) {
                              return <p key={idx} className="numbered-item">{paragraph}</p>;
                            } else if (paragraph.trim()) {
                              return <p key={idx}>{paragraph}</p>;
                            }
                            return null;
                          })}
                        </div>
                      ) : (
                        <p className="excerpt">{post.excerpt}</p>
                      )}

                      <div className="card-footer">
                        <div className="card-author">
                          <div className="author-avatar">
                            {post.author.charAt(4)}
                          </div>
                          <span>{post.author}</span>
                        </div>
                        <button
                          className="read-btn"
                          onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                        >
                          {expandedPost === post.id ? (
                            <>
                              Close
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 15l-6-6-6 6"/>
                              </svg>
                            </>
                          ) : (
                            <>
                              Read More
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M6 9l6 6 6-6"/>
                              </svg>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="cta-container">
            <h2>Have Questions About Your Eye Health?</h2>
            <p>Our expert doctors are here to help. Book a consultation today.</p>
            <div className="cta-buttons">
              <Link href="/appointment" className="cta-primary">
                Book Appointment
              </Link>
              <Link href="/contact" className="cta-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        .blog-page {
          min-height: 100vh;
          background: #f8f6fc;
        }

        .blog-hero {
          background: linear-gradient(135deg, #7157A0 0%, #9b7ed4 100%);
          padding: 140px 20px 80px;
          text-align: center;
        }

        .hero-content {
          max-width: 700px;
          margin: 0 auto;
        }

        .hero-tag {
          display: inline-block;
          background: rgba(255, 214, 0, 0.2);
          border: 1px solid rgba(255, 214, 0, 0.4);
          color: #FFD600;
          padding: 8px 24px;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 20px;
        }

        .hero-content h1 {
          font-size: 3rem;
          font-weight: 800;
          color: white;
          margin: 0 0 20px;
        }

        .hero-content h1 span {
          color: #FFD600;
        }

        .hero-content p {
          font-size: 1.15rem;
          color: rgba(255,255,255,0.9);
          margin: 0;
        }

        .filter-section {
          background: white;
          padding: 25px 20px;
          border-bottom: 1px solid #eee;
        }

        .filter-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          gap: 30px;
          align-items: center;
          flex-wrap: wrap;
        }

        .search-box {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f5f5f5;
          padding: 12px 20px;
          border-radius: 50px;
          flex: 1;
          min-width: 250px;
          max-width: 350px;
        }

        .search-box svg {
          color: #888;
        }

        .search-box input {
          border: none;
          background: none;
          outline: none;
          font-size: 1rem;
          width: 100%;
          color: #333;
        }

        .category-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .category-tab {
          padding: 10px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 50px;
          background: white;
          color: #666;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }

        .category-tab:hover {
          border-color: #7157A0;
          color: #7157A0;
        }

        .category-tab.active {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-color: transparent;
          color: white;
        }

        .blog-grid-section {
          padding: 60px 20px;
        }

        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .section-header h2 {
          font-size: 1.8rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0;
        }

        .post-count {
          color: #888;
        }

        .no-results {
          text-align: center;
          padding: 80px 20px;
          color: #888;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
          gap: 30px;
        }

        .blog-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(113, 87, 160, 0.08);
          transition: all 0.3s;
        }

        .blog-card:hover {
          box-shadow: 0 20px 50px rgba(113, 87, 160, 0.15);
        }

        .card-header {
          background: linear-gradient(135deg, #7157A0, #9b7ed4);
          padding: 20px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .card-category {
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .featured-badge {
          background: #FFD600;
          color: #5a4a7a;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .card-content {
          padding: 25px;
        }

        .card-meta {
          display: flex;
          gap: 15px;
          margin-bottom: 12px;
        }

        .card-date, .card-read-time {
          color: #888;
          font-size: 0.85rem;
        }

        .card-content h3 {
          font-size: 1.2rem;
          font-weight: 700;
          color: #1a1a2e;
          margin: 0 0 15px;
          line-height: 1.4;
        }

        .excerpt {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.6;
          margin: 0 0 20px;
        }

        .full-content {
          color: #444;
          font-size: 0.95rem;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .full-content h4 {
          color: #7157A0;
          font-size: 1.1rem;
          margin: 20px 0 10px;
          font-weight: 700;
        }

        .full-content p {
          margin: 10px 0;
        }

        .full-content li {
          margin: 5px 0 5px 20px;
          list-style: disc;
        }

        .full-content .numbered-item {
          padding-left: 10px;
          border-left: 3px solid #7157A0;
          margin: 10px 0;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 15px;
          border-top: 1px solid #eee;
        }

        .card-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .author-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
        }

        .card-author span {
          color: #666;
          font-size: 0.9rem;
        }

        .read-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          transition: all 0.3s;
        }

        .read-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 20px rgba(113, 87, 160, 0.3);
        }

        .cta-section {
          padding: 80px 20px;
          background: white;
          text-align: center;
        }

        .cta-container {
          max-width: 700px;
          margin: 0 auto;
        }

        .cta-section h2 {
          font-size: 2.2rem;
          font-weight: 800;
          color: #1a1a2e;
          margin: 0 0 15px;
        }

        .cta-section p {
          color: #666;
          font-size: 1.1rem;
          margin: 0 0 30px;
        }

        .cta-buttons {
          display: flex;
          gap: 15px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-primary {
          background: linear-gradient(135deg, #7157A0, #8B6BC4);
          color: white;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s;
        }

        .cta-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(113, 87, 160, 0.3);
        }

        .cta-secondary {
          background: white;
          color: #7157A0;
          padding: 16px 35px;
          border-radius: 50px;
          font-weight: 700;
          text-decoration: none;
          border: 2px solid #7157A0;
          transition: all 0.3s;
        }

        .cta-secondary:hover {
          background: #7157A0;
          color: white;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          .blog-grid {
            grid-template-columns: 1fr;
          }
          .filter-container {
            flex-direction: column;
          }
          .search-box {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}

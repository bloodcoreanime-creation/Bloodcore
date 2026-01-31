import './style.css'

// Character data with expanded backstories and abilities
const characters = {
  heroes: [
    {
      name: 'Yorudan',
      core: 'Blood Core',
      emoji: '🩸',
      description: 'The 11-year-old protagonist. Passionate and never backs down on his dreams. His blood itself becomes a weapon.',
      backstory: 'Born into a seemingly ordinary family, Yorudan discovered his Blood Core power during a fit of rage at school. His grandfather Jakusan was the legendary Blood Core user whose power became myth 60 years ago. Now Yorudan must learn to control this volatile power before it consumes him.',
      abilities: ['Blood Manipulation', 'Emotion Sensing', 'Memory Manipulation', 'Psychic Links'],
      signature: 'Blood Storm Barrage'
    },
    {
      name: 'Kata',
      core: 'Bone Core',
      emoji: '🦴',
      description: "Yorudan's best friend with the ego no one can take away. A serious, stoic swordsman who contrasts Yorudan's cheerful nature.",
      backstory: 'Kata trained from age 5 in the ancient sword arts. When his Bone Core awakened, he could forge weapons from his own skeleton. Despite his cold exterior, he is fiercely loyal to those he calls friends.',
      abilities: ['Bone Blade Creation', 'Skeletal Armor', 'Bone Density Control', 'Rapid Healing'],
      signature: 'Thousand Bone Slash'
    },
    {
      name: 'Zabieru',
      core: 'Muscle Core',
      emoji: '💪',
      description: 'Strong and loyal friend who joins the journey. His Muscle Core focuses on his arms, making him a formidable combatant.',
      backstory: 'Growing up in a mining village, Zabieru always had incredible strength. His Muscle Core allows him to amplify his already impressive physical abilities tenfold. He joined Yorudan after being saved from the M.E.F.',
      abilities: ['Super Strength', 'Muscle Expansion', 'Impact Absorption', 'Titan Grip'],
      signature: 'Mountain Crusher Fist'
    },
    {
      name: 'Keira',
      core: 'Unknown',
      emoji: '✨',
      description: "Yorudan's sister. Joyful and always happy, bringing light to even the darkest situations.",
      backstory: 'Keira is younger than Yorudan but possesses a mysterious power that has not yet awakened. Her unwavering optimism keeps the team motivated. Some believe she may hold an even rarer Core than Blood.',
      abilities: ['Unknown Potential', 'Aura of Hope', 'Emotional Stability', 'Hidden Power'],
      signature: '???'
    },
    {
      name: 'Soraia',
      core: 'Nostril Core',
      emoji: '👃',
      description: 'Former enemy turned ally. Goofy on the outside but deadly on the inside. Can control scents and manipulate emotions.',
      backstory: 'Once a spy for the M.E.F., Soraia defected after witnessing their cruelty. Her unique Nostril Core lets her sense danger, track anyone, and even influence emotions through pheromones.',
      abilities: ['Scent Tracking', 'Emotion Manipulation', 'Pheromone Control', 'Danger Detection'],
      signature: 'Nightmare Fog'
    }
  ],
  villains: [
    {
      name: 'Taison',
      core: 'Multiple Cores',
      emoji: '👹',
      description: 'The main antagonist, similar to Sukuna. Powerful and enigmatic with sinister charm. Masters multiple Core abilities.',
      backstory: 'An ancient being who has lived for centuries by absorbing other Core users. Taison seeks the Blood Core to complete his collection and achieve ultimate power. He views Yorudan as both a threat and a prize.',
      abilities: ['Core Absorption', 'Multi-Core Mastery', 'Immortality', 'Domain Expansion'],
      signature: 'Absolute Dominion'
    },
    {
      name: 'Jeison',
      core: 'Spirit Core',
      emoji: '👻',
      description: 'Leader of the M.E.F. organization. Superior strength and speed. Takes thin air and molds it with willpower.',
      backstory: 'Founder of the M.E.F. (Modern Enhancement Force), Jeison believes Core users should rule over normal humans. His Spirit Core grants him ghost-like abilities and immense combat prowess.',
      abilities: ['Intangibility', 'Air Manipulation', 'Spirit Projection', 'Willpower Constructs'],
      signature: 'Phantom Execution'
    },
    {
      name: 'Asan',
      core: 'Regeneration Core',
      emoji: '♻️',
      description: 'M.E.F. member with a cold heart. Has the power to regenerate his body parts.',
      backstory: 'Asan was experimented on as a child, unlocking his Regeneration Core. Now emotionless and calculating, he serves as the M.E.F.\'s enforcer, nearly impossible to kill permanently.',
      abilities: ['Instant Regeneration', 'Limb Regrowth', 'Pain Immunity', 'Cellular Control'],
      signature: 'Endless Revival'
    },
    {
      name: 'Al-e',
      core: 'Heat Core',
      emoji: '🔥',
      description: 'M.E.F. member who can shoot fire from fingertips and mold objects like a fire sword.',
      backstory: 'Al-e discovered his Heat Core during a house fire that should have killed him. Instead, he emerged unharmed and gained control over flames. He joined M.E.F. seeking purpose and power.',
      abilities: ['Pyrokinesis', 'Heat Immunity', 'Flame Weapons', 'Thermal Vision'],
      signature: 'Inferno Blade Dance'
    },
    {
      name: 'Kaylah',
      core: 'Illusion Core',
      emoji: '🎭',
      description: 'Can trick peoples eyes and create any illusion she wants, for good or for bad.',
      backstory: 'A master deceiver, Kaylah uses her Illusion Core to manipulate perception itself. No one knows her true appearance or motives. She plays all sides for her own mysterious agenda.',
      abilities: ['Visual Illusions', 'Memory Alteration', 'Shapeshifting Facade', 'Mass Hypnosis'],
      signature: 'Realm of Mirrors'
    }
  ],
  mentors: [
    {
      name: 'Jakusan',
      core: 'Blood Core',
      emoji: '👴',
      description: "Yorudan's grandfather. The legendary Blood Core user whose power became myth. Wise and mysterious with immense knowledge.",
      backstory: '60 years ago, Jakusan was the most powerful Core user alive. He defeated Erumo in an epic battle that became legend. Now elderly, he guides Yorudan in mastering the Blood Core before time runs out.',
      abilities: ['Blood Core Mastery', 'Ancient Techniques', 'Core Sensing', 'Life Transfer'],
      signature: 'Crimson Eclipse'
    },
    {
      name: 'Muhanmado',
      core: 'Brain + Eye Core',
      emoji: '👁️',
      description: 'Similar to Gojo. Super smart and always calm. Grants incredible mental and visual abilities. Serves as mentor to Yorudan.',
      backstory: 'The strongest active Core user and Yorudan\'s primary teacher. His dual-Core combination makes him nearly invincible. He sees potential in Yorudan that others cannot.',
      abilities: ['Infinite Perception', 'Prediction', 'Telekinesis', 'Mind Reading'],
      signature: 'All-Seeing Barrier'
    },
    {
      name: 'Karu',
      core: 'Brain Core',
      emoji: '🧠',
      description: "Yorudan's father. Smart and intelligent, always looks one step ahead. Analytical and calm.",
      backstory: 'A brilliant strategist and Yorudan\'s father. Karu uses his Brain Core for tactical planning and always stays several moves ahead of enemies. He supports his son from the shadows.',
      abilities: ['Super Intelligence', 'Perfect Memory', 'Tactical Analysis', 'Probability Calculation'],
      signature: 'Absolute Strategy'
    },
    {
      name: 'Hanifa',
      core: 'Heart Core',
      emoji: '❤️',
      description: "Yorudan's mother. Intelligent doctor with accelerated healing powers. Represents empathy and emotional strength.",
      backstory: 'A renowned doctor and Yorudan\'s loving mother. Hanifa\'s Heart Core allows her to heal others and sense emotions. She worries for her son but believes in his destiny.',
      abilities: ['Accelerated Healing', 'Emotion Reading', 'Vital Transfer', 'Life Force Boost'],
      signature: 'Heart\'s Embrace'
    }
  ]
};

// Episodes data
const episodes = {
  1: [
    { num: 1, title: 'The History of Blood Core', summary: 'An epic fight between Erumo and Jakusan reveals the legendary power of Blood Core for the first time.' },
    { num: 2, title: 'The Discovery of a New Era', summary: 'Yorudan discovers he possesses Blood Core during a schoolyard incident. Kata manifests Bone Core. A new era begins.' },
    { num: 3, title: 'The Search Begins', summary: 'The group seeks information to find Jakusan. A mysterious old man suggests they seek out Muhanmado in the mountains.' },
    { num: 4, title: 'Discovery of a Hidden Power', summary: 'The group encounters Zabieru with his Muscle Core. After a brief exchange, he joins their quest.' },
    { num: 5, title: 'The Unknown Muhanmado', summary: 'The group finds Muhanmado who offers to train them. Hanifa gains healing powers, Karu enhances his intelligence.' },
    { num: 6, title: 'Are There More Clues?', summary: 'They discover a devastated village, victim of Soraia\'s attacks. The group grows more determined to stop her.' },
    { num: 7, title: 'Stop the Fuss!', summary: 'Yorudan is disturbed by Soraia\'s revelation. The group heads toward Hanifa\'s sister\'s village for information.' },
    { num: 8, title: 'There is More?!', summary: 'A tense encounter with Soraia leads to the appearance of Tison, who possesses bone-shattering abilities.' },
    { num: 9, title: 'Hope, Fight, Win, Recruit?', summary: 'Kata and Yorudan combine powers to force Taison to retreat. Soraia joins the heroes team.' },
    { num: 10, title: 'Relax or Freedom', summary: 'The group takes a break for sushi. Kata receives a sword as reward for saving a village.' }
  ],
  2: [
    { num: 1, title: 'Time?', summary: 'A mysterious opponent named Time demonstrates incredible speed and the ability to rewind time, incapacitating Yorudan.' },
    { num: 2, title: 'The Sight of Death!', summary: 'The group launches a coordinated assault against Time. After a fierce battle, they give him a proper burial.' },
    { num: 3, title: 'The Path to Jakusan Has Come to an End', summary: 'Soraia leads them to M.E.F. headquarters. Shocking discovery: the Powered Genius is Yorudan\'s Grandpa.' },
    { num: 4, title: 'How Long Has it Been?', summary: 'Jakusan reveals why he embraced villainy. The group is captured by masked men but frees themselves.' },
    { num: 5, title: 'A Sudden Power Surge', summary: 'Yorudan reveals hidden power to protect Hanifa. Jakusan confesses to unknowingly passing on his strength.' },
    { num: 6, title: 'Train Train Train!', summary: 'The M.E.F. team faces a deadline: defeat Jeison in nine weeks. Intense training begins under Jakusan.' },
    { num: 7, title: 'Have We Got Progress?', summary: 'After 56 days of training, the crew shows incredible improvement. Jeison and his team set off to confront them.' },
    { num: 8, title: 'The History of M.E.F.', summary: 'Jeison arrives with his Unlisted group. In the battle, Jakusan falls. Yorudan becomes "THE BLUE BLUR."' },
    { num: 9, title: 'Rest in Peace', summary: 'The team defeats Jeison in a coordinated assault. Grief and rage fuel their devastating power.' },
    { num: 10, title: 'A New Path!', summary: 'Yorudan finds Jakusan\'s last message and the red diamond necklace. Team BloodCore vows to become the strongest.' },
    { num: 11, title: 'Mysterious Man!', summary: 'A pink portal whisks the team to an enormous space. The Mysterious Man warns them to prepare to fight.' },
    { num: 12, title: '1,000,000 Dollars!', summary: 'Team BloodCore discovers they have a bounty. Kaylah reveals her Illusion Core. A new conflict begins.' }
  ]
};

// Initialize particles
function createParticles() {
  const container = document.getElementById('particles');
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'blood-particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration = `${3 + Math.random() * 4}s`;
    particle.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(particle);
  }
}

// Render characters
function renderCharacters(category = 'heroes') {
  const grid = document.getElementById('characters-grid');
  grid.innerHTML = '';
  
  characters[category].forEach((char, index) => {
    const card = document.createElement('div');
    card.className = 'character-card clickable';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="character-avatar">${char.emoji}</div>
      <h3 class="character-name">${char.name}</h3>
      <span class="character-core">${char.core}</span>
      <p class="character-description">${char.description}</p>
      <div class="card-hint">View Details</div>
    `;
    card.addEventListener('click', () => openCharacterModal(char));
    grid.appendChild(card);
  });
}

// Character Modal Logic
function openCharacterModal(char) {
  const modal = document.getElementById('character-modal');
  document.getElementById('modal-char-emoji').textContent = char.emoji;
  document.getElementById('modal-char-name').textContent = char.name;
  document.getElementById('modal-char-core').textContent = char.core;
  document.getElementById('modal-char-backstory').textContent = char.backstory;
  document.getElementById('modal-char-signature').textContent = char.signature;
  
  const abilitiesList = document.getElementById('modal-char-abilities');
  abilitiesList.innerHTML = '';
  char.abilities.forEach(ability => {
    const li = document.createElement('li');
    li.textContent = ability;
    abilitiesList.appendChild(li);
  });
  
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Render episodes
function renderEpisodes(season = 1) {
  const timeline = document.getElementById('episodes-timeline');
  timeline.innerHTML = '';
  
  episodes[season].forEach((ep, index) => {
    const card = document.createElement('div');
    card.className = 'episode-card clickable';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="episode-number">${ep.num}</div>
      <div class="episode-content">
        <h3 class="episode-title">${ep.title}</h3>
        <p class="episode-summary">${ep.summary}</p>
        <span class="read-more">Read Panel &#10142;</span>
      </div>
    `;
    card.addEventListener('click', () => openEpisodeReader(ep));
    timeline.appendChild(card);
  });
}

// Episode Reader Logic
let currentPanelIndex = 0;
const totalPanels = 4; // Simulated panels for now

function openEpisodeReader(ep) {
  const reader = document.getElementById('episode-reader');
  document.getElementById('reader-title').textContent = `Episode ${ep.num}`;
  document.getElementById('reader-subtitle').textContent = ep.title;
  
  currentPanelIndex = 0;
  updateReaderPanel();
  
  reader.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function updateReaderPanel() {
  const container = document.getElementById('panel-container');
  const progress = document.getElementById('reader-progress-bar');
  
  container.innerHTML = `
    <div class="panel-placeholder">
      <div class="manga-panel-content">
        <h3>Panel ${currentPanelIndex + 1}</h3>
        <p>Storyboard visualization for the scene where the action unfolds...</p>
        <div class="sketch-effect"></div>
      </div>
    </div>
  `;
  
  progress.style.width = `${((currentPanelIndex + 1) / totalPanels) * 100}%`;
}

function navigateReader(direction) {
  currentPanelIndex += direction;
  if (currentPanelIndex < 0) currentPanelIndex = 0;
  if (currentPanelIndex >= totalPanels) {
    if (confirm("You've reached the end of the preview. Close reader?")) {
      closeAllModals();
    }
    currentPanelIndex = totalPanels - 1;
    return;
  }
  updateReaderPanel();
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  createParticles();
  renderCharacters('heroes');
  renderEpisodes(1);
  
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Close mobile menu on link click
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
  
  // Character category buttons
  document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderCharacters(btn.dataset.category);
    });
  });
  
  // Season tabs
  document.querySelectorAll('.season-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderEpisodes(parseInt(tab.dataset.season));
    });
  });
  
  // Newsletter form
  const form = document.getElementById('newsletter-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input').value;
    alert(`Thanks for subscribing! We'll keep ${email} updated on Blood Core news.`);
    form.reset();
  });

  // Gallery functionality
  renderGallery();
  setupLightbox();

  // Merch functionality
  renderMerch();

  // Modal close handlers
  document.querySelectorAll('.modal-close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  // Reader navigation
  document.getElementById('reader-prev').addEventListener('click', () => navigateReader(-1));
  document.getElementById('reader-next').addEventListener('click', () => navigateReader(1));

  // Fan Art Form
  const fanArtForm = document.getElementById('fan-art-form');
  const fileInput = document.getElementById('art-file');
  const fileNameDisplay = document.getElementById('file-name');
  const fileBtn = document.querySelector('.file-btn');

  fileBtn.addEventListener('click', () => fileInput.click());
  
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileNameDisplay.textContent = fileInput.files[0].name;
    } else {
      fileNameDisplay.textContent = 'No file chosen';
    }
  });

  fanArtForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const artist = document.getElementById('artist-name').value;
    alert(`Thank you ${artist}! Your fan art has been submitted for review. It will appear in the gallery once approved!`);
    fanArtForm.reset();
    fileNameDisplay.textContent = 'No file chosen';
  });

  // Active nav link highlighting
  setupScrollSpy();
});

function closeAllModals() {
  document.querySelectorAll('.modal, .gallery-lightbox').forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
}

// Gallery data - production artwork
const galleryImages = [
  { src: '/Untitled_Artwork.jpeg', label: 'Character Study' },
  { src: '/Untitled_Artwork 1.jpeg', label: 'Yorudan Design' },
  { src: '/Untitled_Artwork 2.jpeg', label: 'Action Sketch' },
  { src: '/Untitled_Artwork 3.jpeg', label: 'Scene Layout' },
  { src: '/Untitled_Artwork 4.jpeg', label: 'Character Pose' },
  { src: '/Untitled_Artwork 5.jpeg', label: 'Storyboard' },
  { src: '/Untitled_Artwork 6.jpeg', label: 'Concept Art' },
  { src: '/Untitled_Artwork 7.jpeg', label: 'Expression Sheet' },
  { src: '/Untitled_Artwork 8.jpeg', label: 'Battle Scene' },
  { src: '/Untitled_Artwork 9.jpeg', label: 'Power Study' },
  { src: '/Untitled_Artwork 10.jpeg', label: 'Draft Sketch' },
  { src: '/Untitled_Artwork 11.jpeg', label: 'Full Page' },
  { src: '/Untitled_Artwork 12.jpeg', label: 'Character Art' },
  { src: '/Untitled_Artwork 13.jpeg', label: 'Scene Design' },
  { src: '/Untitled_Artwork 14.jpeg', label: 'Final Art' }
];

let currentImageIndex = 0;

function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  galleryImages.forEach((img, index) => {
    const item = document.createElement('div');
    item.className = 'gallery-item';
    item.style.animationDelay = `${index * 0.1}s`;
    item.innerHTML = `
      <div class="gallery-frame" data-label="${img.label}">
        <img src="${img.src}" alt="${img.label}" class="gallery-image" loading="lazy" />
        <div class="gallery-sketch-marks"></div>
      </div>
    `;
    item.addEventListener('click', () => openLightbox(index));
    grid.appendChild(item);
  });
}

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;
  
  const closeBtn = lightbox.querySelector('.lightbox-close');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  
  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', () => navigateLightbox(-1));
  nextBtn.addEventListener('click', () => navigateLightbox(1));
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

function openLightbox(index) {
  currentImageIndex = index;
  const lightbox = document.getElementById('lightbox');
  const img = lightbox.querySelector('.lightbox-image');
  img.src = galleryImages[index].src;
  lightbox.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = galleryImages.length - 1;
  if (currentImageIndex >= galleryImages.length) currentImageIndex = 0;
  
  const lightbox = document.getElementById('lightbox');
  const img = lightbox.querySelector('.lightbox-image');
  img.src = galleryImages[currentImageIndex].src;
}

// Merch data - Blood Core branded items
const merchItems = [
  {
    name: 'BLOOD CORE TEE',
    description: 'Premium oversized black tee with dripping Blood Core logo and gold orb emblem',
    price: '$45',
    image: '/merch-tee.png',
    badge: 'Bestseller',
    available: true
  },
  {
    name: 'CORE POWER HOODIE',
    description: 'Heavyweight streetwear hoodie with crimson Blood Core typography',
    price: '$75',
    image: '/merch-hoodie.png',
    badge: 'Limited',
    available: true
  },
  {
    name: 'BLOOD DRIP JOGGERS',
    description: 'Signature joggers with dripping blood gradient from waist to ankles',
    price: '$65',
    image: '/merch-joggers.png',
    badge: 'New',
    available: true
  },
  {
    name: 'LEGACY BOMBER',
    description: 'Premium satin bomber with embroidered Blood Core back design and gold trim',
    price: '$135',
    image: '/merch-bomber.png',
    badge: 'Premium',
    available: true
  },
  {
    name: 'CORE BUCKET HAT',
    description: 'Embroidered bucket hat in black with Blood Core crimson logo',
    price: '$38',
    image: '/merch-bucket.png',
    badge: 'Trending',
    available: true
  },
  {
    name: 'CROSSBODY BAG',
    description: 'Compact sling bag with Blood Core patch and adjustable strap',
    price: '$55',
    image: '/merch-crossbody.png',
    badge: 'Hot',
    available: true
  },
  {
    name: 'CORE SLIDES',
    description: 'Luxury leather slides with embossed Blood Core logo and gold buckle',
    price: '$68',
    image: '/merch-slides.png',
    badge: 'Premium',
    available: true
  },
  {
    name: 'DRIP LONG SLEEVE',
    description: 'Black thermal with Blood Core drip text down both sleeves',
    price: '$55',
    image: '/merch-longsleeve.png',
    badge: 'New',
    available: true
  },
  {
    name: 'CORE PHONE CASE',
    description: 'Premium matte case with 3D Blood Core logo and gold orb accent',
    price: '$32',
    image: '/merch-phonecase.png',
    badge: 'Hot',
    available: true
  },
  {
    name: 'ANIME POSTER',
    description: 'Epic character battle poster featuring Blood Core heroes and villains',
    price: '$25',
    image: '/merch-poster.png',
    badge: 'Fan Favorite',
    available: true
  },
  {
    name: 'CORE BACKPACK',
    description: 'Premium black backpack with large embroidered Blood Core patch',
    price: '$89',
    image: '/merch-backpack.png',
    badge: 'Premium',
    available: true
  },
  {
    name: 'SKATE DECK',
    description: 'Custom deck with epic Blood Core anime artwork and drip effects',
    price: '$95',
    image: '/merch-skateboard.png',
    badge: 'Limited',
    available: true
  }
];

function renderMerch() {
  const grid = document.getElementById('merch-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  merchItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'merch-card';
    card.style.animationDelay = `${index * 0.1}s`;
    card.innerHTML = `
      <div class="merch-image">
        <img src="${item.image}" alt="${item.name}" class="merch-photo" />
        ${item.badge ? `<span class="merch-badge">${item.badge}</span>` : ''}
      </div>
      <div class="merch-info">
        <h3 class="merch-title">${item.name}</h3>
        <p class="merch-description">${item.description}</p>
        <div class="merch-price">${item.price}</div>
        <button class="merch-btn ${!item.available ? 'coming-soon' : ''}" ${!item.available ? 'disabled' : ''}>
          ${item.available ? 'Pre-Order' : 'Coming Soon'}
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Scroll spy for active nav highlighting
function setupScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.3 });
  
  sections.forEach(section => observer.observe(section));
}

// Theme switching functionality
const themeToggle = document.querySelector('.theme-toggle');
const icon = themeToggle.querySelector('i');

// Check for saved theme preference, otherwise use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        updateIcon('dark');
    }
}

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcon(newTheme);
});

// Update icon based on theme
function updateIcon(theme) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scrolled');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scrolled')) {
        // Scrolling down
        header.classList.add('scrolled');
    } else if (currentScroll < lastScroll && header.classList.contains('scrolled')) {
        // Scrolling up
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Add scroll reveal animation
const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

scrollRevealElements.forEach(element => {
    observer.observe(element);
});

// Initialize scroll progress bar
const scrollProgress = document.createElement('div');
scrollProgress.className = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = `${scrolled}%`;
});

// Add loading animation
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('loaded');
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically handle the form submission
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Region selection handling
const regionCards = document.querySelectorAll('.region-card');
regionCards.forEach(card => {
    card.addEventListener('click', function() {
        const region = this.querySelector('h3').textContent;
        // Here you would typically handle region selection
        console.log(`Selected region: ${region}`);
    });
});

// West Africa specific data
const westAfricaData = {
    itinerary: [
        {
            day: 1,
            location: 'Accra, Ghana',
            activities: [
                'Arrival at Kotoka International Airport',
                'City tour of Accra including Independence Square',
                'Visit to the National Museum of Ghana',
                'Traditional dinner with local music performance'
            ],
            accommodation: 'Luxury Hotel in Accra City Center',
            transport: 'Airport pickup and guided city tour'
        },
        {
            day: 2,
            location: 'Cape Coast, Ghana',
            activities: [
                'Visit to Cape Coast Castle (UNESCO World Heritage Site)',
                'Tour of the slave trade history museum',
                'Beach walk along the Gulf of Guinea',
                'Traditional fishing village visit'
            ],
            accommodation: 'Beachfront Resort in Cape Coast',
            transport: 'Private vehicle (3-hour drive from Accra)'
        },
        {
            day: 3,
            location: 'Kakum National Park, Ghana',
            activities: [
                'Canopy walk through the rainforest',
                'Guided nature walk to spot wildlife',
                'Bird watching tour',
                'Traditional village visit'
            ],
            accommodation: 'Eco-lodge near Kakum National Park',
            transport: 'Private vehicle (2-hour drive from Cape Coast)'
        },
        {
            day: 4,
            location: 'Kumasi, Ghana',
            activities: [
                'Visit to Manhyia Palace Museum',
                'Tour of the Kejetia Market (largest open-air market in West Africa)',
                'Traditional kente cloth weaving demonstration',
                'Evening cultural performance'
            ],
            accommodation: 'City Hotel in Kumasi',
            transport: 'Private vehicle (4-hour drive from Kakum)'
        },
               {
            day: 5,
            location: 'Lomé, Togo',
            activities: [
                'Cross-border journey to Togo',
                'Visit to the Grand Marché',
                'Tour of the National Museum',
                'Beach visit at Lomé'
            ],
            accommodation: 'Beach Hotel in Lomé',
            transport: 'Private vehicle (3-hour drive from Kumasi)'
        },
        {
            day: 6,
            location: 'Kpalimé, Togo',
            activities: [
                'Mountain hiking in the Kloto Mountains',
                'Visit to traditional coffee plantations',
                'Local craft market tour',
                'Traditional dinner with local families'
            ],
            accommodation: 'Mountain Lodge in Kpalimé',
            transport: 'Private vehicle (2-hour drive from Lomé)'
        },
        {
            day: 7,
            location: 'Cotonou, Benin',
            activities: [
                'Cross-border journey to Benin',
                'Visit to the Dantokpa Market',
                'Tour of the Ouidah Slave Route',
                'Voodoo Temple visit'
            ],
            accommodation: 'City Hotel in Cotonou',
            transport: 'Private vehicle (3-hour drive from Kpalimé)'
        },
        {
            day: 8,
            location: 'Ganvié, Benin',
            activities: [
                'Boat trip to the floating village',
                'Traditional fishing demonstration',
                'Local market visit',
                'Sunset boat tour'
            ],
            accommodation: 'Waterfront Hotel in Cotonou',
            transport: 'Boat transfer to Ganvié'
        },
        {
            day: 9,
            location: 'Abomey, Benin',
            activities: [
                'Visit to the Royal Palaces of Abomey (UNESCO World Heritage)',
                'Traditional ceremony demonstration',
                'Local craft workshop visit',
                'Traditional dinner with royal family descendants'
            ],
            accommodation: 'Heritage Hotel in Abomey',
            transport: 'Private vehicle (2-hour drive from Cotonou)'
        },
        {
            day: 10,
            location: 'Return to Accra, Ghana',
            activities: [
                'Morning market visit in Abomey',
                'Cross-border journey back to Ghana',
                'Farewell dinner in Accra',
                'Evening cultural performance'
            ],
            accommodation: 'Luxury Hotel in Accra',
            transport: 'Private vehicle (6-hour drive from Abomey)'
        }
    ],
    safety: {
        health: {
            vaccinations: [
                'Yellow Fever (Required)',
                'Hepatitis A (Recommended)',
                'Typhoid (Recommended)',
                'Malaria prophylaxis (Required)'
            ],
            precautions: [
                'Drink only bottled or purified water',
                'Avoid street food',
                'Use insect repellent',
                'Carry basic medical supplies'
            ]
        },
        political: {
            status: 'Generally stable in tourist areas',
            areas: {
                'Ghana': 'Very stable, democratic government',
                'Togo': 'Generally stable, some political tensions',
                'Benin': 'Stable, democratic government'
            },
            advice: 'Stay informed about current events and avoid political gatherings'
        },
        crime: {
            general: 'Low to moderate in tourist areas',
            precautions: [
                'Keep valuables in hotel safe',
                'Use official taxis',
                'Avoid walking alone at night',
                'Keep copies of important documents'
            ],
            areas: {
                'Accra': 'Exercise caution in crowded areas',
                'Cotonou': 'Be vigilant in market areas',
                'Lomé': 'Use common sense in tourist areas'
            }
        }
    }
};

// Function to populate itinerary
function populateItinerary() {
    const container = document.querySelector('.itinerary-container');
    if (!container) return;

    container.innerHTML = westAfricaData.itinerary.map(day => `
        <div class="itinerary-day">
            <h3>Day ${day.day}</h3>
            <h4>${day.location}</h4>
            <div class="transport-info">
                <i class="fas fa-car"></i> ${day.transport}
            </div>
            <h5>Activities:</h5>
            <ul>
                ${day.activities.map(activity => `<li>${activity}</li>`).join('')}
            </ul>
            <div class="accommodation-info">
                <i class="fas fa-hotel"></i> <strong>Accommodation:</strong> ${day.accommodation}
            </div>
        </div>
    `).join('');
}

// Function to populate safety information
function populateSafetyInfo() {
    const healthContent = document.querySelector('.safety-card:nth-child(1) .safety-content');
    const politicalContent = document.querySelector('.safety-card:nth-child(2) .safety-content');
    const crimeContent = document.querySelector('.safety-card:nth-child(3) .safety-content');

    if (healthContent) {
        healthContent.innerHTML = `
            <div class="safety-section">
                <h4>Required Vaccinations:</h4>
                <ul>
                    ${westAfricaData.safety.health.vaccinations.map(vaccine => `<li>${vaccine}</li>`).join('')}
                </ul>
                <h4>Health Precautions:</h4>
                <ul>
                    ${westAfricaData.safety.health.precautions.map(precaution => `<li>${precaution}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    if (politicalContent) {
        politicalContent.innerHTML = `
            <div class="safety-section">
                <p><strong>Overall Status:</strong> ${westAfricaData.safety.political.status}</p>
                <h4>Country-Specific Status:</h4>
                <ul>
                    ${Object.entries(westAfricaData.safety.political.areas).map(([country, status]) => 
                        `<li><strong>${country}:</strong> ${status}</li>`
                    ).join('')}
                </ul>
                <p><strong>Travel Advice:</strong> ${westAfricaData.safety.political.advice}</p>
            </div>
        `;
    }

    if (crimeContent) {
        crimeContent.innerHTML = `
            <div class="safety-section">
                <p><strong>General Risk Level:</strong> ${westAfricaData.safety.crime.general}</p>
                <h4>Safety Precautions:</h4>
                <ul>
                    ${westAfricaData.safety.crime.precautions.map(precaution => `<li>${precaution}</li>`).join('')}
                </ul>
                <h4>Area-Specific Information:</h4>
                <ul>
                    ${Object.entries(westAfricaData.safety.crime.areas).map(([area, info]) => 
                        `<li><strong>${area}:</strong> ${info}</li>`
                    ).join('')}
                </ul>
            </div>
        `;
    }
}

// Enhanced scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Add scroll reveal animation to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
    });

    // Intersection Observer for scroll animations with different thresholds
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Add a staggered animation delay based on section index
                const index = Array.from(sections).indexOf(entry.target);
                entry.target.style.animationDelay = `${index * 0.2}s`;
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });

    // Enhanced header scroll effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class based on scroll position
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header based on scroll direction
        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScroll = currentScroll;
    });

    // Enhanced smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced hover effects for cards
    const cards = document.querySelectorAll('.research-card, .itinerary-day');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px)';
            card.style.boxShadow = 'var(--shadow-2)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'var(--shadow-1)';
        });
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    });

    // Enhanced counter animation
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateStat = () => {
            current += step;
            if (current < target) {
                stat.textContent = Math.round(current);
                requestAnimationFrame(updateStat);
            } else {
                stat.textContent = target;
            }
        };

        // Start animation when element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateStat();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(stat);
    });

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${progress}%`;
    });
}); 
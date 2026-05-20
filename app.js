/* ==========================================================================
   SEOUL ACADEMY - PREMIUM OFFLINE KOREAN LANGUAGE INSTITUTE
   INTERACTIVE LOGIC & DYNAMIC WHATSAPP BUILDER
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. SCROLL EFFECT ON MAIN HEADER
    const mainHeader = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // 2. MOBILE DRAWER NAVIGATION CONTROLS
    const mobileToggle = document.querySelector('.mobile-nav-toggle');
    const drawerOverlay = document.querySelector('.mobile-drawer-overlay');
    const mobileDrawer = document.querySelector('.mobile-drawer');
    const drawerClose = document.querySelector('.drawer-close');
    const drawerLinks = document.querySelectorAll('.mobile-link');

    const openDrawer = () => {
        mobileDrawer.classList.add('active');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    const closeDrawer = () => {
        mobileDrawer.classList.remove('active');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
    
    drawerLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // 3. COURSE METRICS & DATA HUB FOR THE DYNAMIC MODAL
    const courseData = {
        beginner: {
            title: "Beginner Korean Language",
            category: "General Language",
            duration: "12 Weeks (Daily Classes)",
            schedule: "Morning Batch: 8:00 AM - 10:00 AM | Evening Batch: 5:00 PM - 7:00 PM",
            limit: "strictly 15 Students per session",
            syllabus: [
                "Mastery of Hangeul (Korean alphabet consonants, vowels, and double patchim mechanics)",
                "Basic phonetics, speech rules, and direct sound linking drills",
                "Primary noun particles (이/가, 은/는, 을/를) and basic present tense modifiers",
                "Essential real-life conversations: greetings, shopping, ordering food, and introducing family members",
                "Textbook writing exercises and basic vocabulary logs (500+ standard words)"
            ],
            whatsappMsg: "Hi Seoul Academy! I am interested in joining the physical Beginner Korean Language class. Please share the available seat matrix and fee structure."
        },
        intermediate: {
            title: "Intermediate Korean (A2/B1)",
            category: "General Language",
            duration: "16 Weeks",
            schedule: "Midday Batch: 11:00 AM - 1:00 PM | Afternoon Batch: 2:00 PM - 4:00 PM",
            limit: "15 Students Max",
            syllabus: [
                "Advanced verb modifications (past, continuous, future, and honorific conjugation forms)",
                "Complex connecting particles (그래서, 지만, 기 때문에) for fluent structural alignment",
                "Day-to-day social settings: banking, medical checks, post-office processes, and phone calls",
                "Introduction to basic Sino-Korean characters (Hanja roots) to double your vocabulary size",
                "Physical presentation projects and face-to-face peer speaking debates"
            ],
            whatsappMsg: "Hi Seoul Academy! I am interested in the offline Intermediate Korean Language program. When does the next cohort start?"
        },
        epstopik: {
            title: "EPS-TOPIK Preparation Bootcamp",
            category: "Exam Preparation (Job Oriented)",
            duration: "16 Weeks (Intensive Format)",
            schedule: "Morning Batch: 7:00 AM - 10:00 AM | Evening Batch: 4:00 PM - 7:00 PM",
            limit: "Restricted to 18 Students",
            syllabus: [
                "Exhaustive line-by-line review of the official 60-chapter HRD-Korea textbook curriculum",
                "Specialized agricultural, manufacturing, and construction terminology packages",
                "CBT Lab exam drills (daily computer test simulations with strict time-management tools)",
                "Mastery of listening tracks, fast question skimming techniques, and trick question bypasses",
                "Weekly Saturday simulated national-level mock exams with complete analytical scoring sheets"
            ],
            whatsappMsg: "Hi Seoul Academy! I am preparing for the EPS-TOPIK exam. I want to join your intensive offline preparation bootcamp. What are the start dates?"
        },
        topik: {
            title: "TOPIK I & II Exam Prep",
            category: "Exam Preparation",
            duration: "14 Weeks",
            schedule: "Specialist Slots: 1:30 PM - 4:00 PM",
            limit: "15 Students",
            syllabus: [
                "TOPIK-specific grammar keys and high-frequency reading comprehension strategies",
                "Rigorous essay writing drills (TOPIK II Section 51-54) with face-to-face red-ink teacher corrections",
                "Fast audio decoding skills for advanced academic Korean lectures",
                "Time-management strategies for matching university admission minimum target thresholds (TOPIK Level 3 to 5)",
                "Replication of actual official TOPIK paper booklets from past years"
            ],
            whatsappMsg: "Hi Seoul Academy! I need to clear the official TOPIK exam. Please share the details about your Saturday writing evaluation workshops."
        },
        interview: {
            title: "Korea Visa & Interview Prep",
            category: "Career / Job prep",
            duration: "4 Weeks (Crash Course)",
            schedule: "Weekend Intensives: Sat & Sun (10:00 AM - 2:00 PM)",
            limit: "strictly 10 Students for premium Mocking",
            syllabus: [
                "Korean executive body language: traditional bows, standard posture, and respectful visual contact guidelines",
                "Refined self-introduction writing templates in natural, confident business Korean dialects",
                "Answering industrial safety queries and physical test instructions under simulated workspace pressure",
                "Direct interactive simulations with native Korean trainers mimicking recruitment inspectors",
                "Guidance on physical EPS color-blindness check routines and coordination tests"
            ],
            whatsappMsg: "Hi Seoul Academy! I want to enroll in the physical Korea Interview Crash Course to prepare for my upcoming hiring interview."
        },
        advanced: {
            title: "Advanced Korean Mastery (B2/C1)",
            category: "General Language",
            duration: "18 Weeks",
            schedule: "Advanced Core: 3:00 PM - 5:00 PM",
            limit: "12 Students for conversation focus",
            syllabus: [
                "Native-level idiomatic phrases, street slangs, and historical proverbs (Sajasong-eo)",
                "Advanced reading exercises of real Korean newspapers, editorials, and legal clauses",
                "Professional correspondence styling, email structures, and workplace honorifics (Jondetmal vs Banmal nuances)",
                "High-level listening focusing on local media news feeds, political broadcasts, and cultural forums",
                "Native dialogue circles directly coached by our principal native instructor"
            ],
            whatsappMsg: "Hi Seoul Academy! I want to enroll in the Advanced Korean Mastery program. Let me know when I can visit for a language assessment."
        }
    };

    // 4. SYLLABUS MODAL LOGIC & WHATSAPP INTEGRATOR
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
    const modalOverlay = document.querySelector('.course-modal-overlay');
    const modal = document.querySelector('.course-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBodyContent = document.querySelector('.modal-body-content');

    const openModal = (courseKey) => {
        const course = courseData[courseKey];
        if (!course) return;

        // Build list elements for syllabus
        const syllabusLi = course.syllabus.map(item => `<li>${item}</li>`).join('');

        // Populate Modal Body HTML
        modalBodyContent.innerHTML = `
            <div class="modal-course-badge">${course.category}</div>
            <h3 class="modal-course-title">${course.title}</h3>
            
            <div class="course-footer-info" style="margin-top: 0; margin-bottom: 1.5rem;">
                <i class="fa-solid fa-hotel"></i> 100% Offline Classroom Session
            </div>

            <div class="modal-syllabus-section">
                <h4><i class="fa-solid fa-clock"></i> Program Duration</h4>
                <p style="font-size: 0.9rem; margin-bottom: 0.5rem;"><strong>${course.duration}</strong></p>
                <p style="font-size: 0.85rem; color: var(--color-text-muted);"><i class="fa-solid fa-calendar-check"></i> ${course.schedule}</p>
                <p style="font-size: 0.85rem; color: var(--color-accent-crimson); font-weight: 700;"><i class="fa-solid fa-users"></i> Size limit: ${course.limit}</p>
            </div>

            <div class="modal-syllabus-section">
                <h4><i class="fa-solid fa-book-bookmark"></i> Core Syllabus Syllabus</h4>
                <ul class="modal-syllabus-list">
                    ${syllabusLi}
                </ul>
            </div>

            <div class="modal-cta-box">
                <h5>Arrange a Campus Visit to Enroll</h5>
                <p>Have specific scheduling limits? Send our counselor your query directly on WhatsApp for immediate feedback.</p>
                
                <!-- Quick interactive messaging input field inside modal -->
                <div class="modal-custom-inquiry" style="margin-bottom: 0.75rem;">
                    <textarea id="modal-query-text" style="width: 100%; height: 60px; padding: 0.5rem; font-size: 0.85rem; border: 1px solid var(--color-border); border-radius: var(--radius-sm); resize: none;" placeholder="Customize your message...">${course.whatsappMsg}</textarea>
                </div>
                
                <button id="modal-send-wa-btn" class="btn btn-whatsapp w-100" style="padding: 0.6rem 1rem;">
                    <i class="fa-brands fa-whatsapp"></i> Inquire Timing on WhatsApp
                </button>
            </div>
        `;

        modal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Connect the dynamic WhatsApp link generator inside modal
        const sendWaBtn = document.getElementById('modal-send-wa-btn');
        const queryTextArea = document.getElementById('modal-query-text');

        sendWaBtn.addEventListener('click', () => {
            const rawMsg = queryTextArea.value;
            const encodedMsg = encodeURIComponent(rawMsg);
            const finalLink = `https://wa.me/9779876543210?text=${encodedMsg}`;
            window.open(finalLink, '_blank');
        });
    };

    const closeModal = () => {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    viewDetailsButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const courseKey = e.target.getAttribute('data-course');
            openModal(courseKey);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

    // 5. COURSE FILTER TABS MECHANISM
    const tabButtons = document.querySelectorAll('.course-tab-btn');
    const courseCards = document.querySelectorAll('.course-card');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Set active class to clicked tab
            tabButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.getAttribute('data-filter');

            courseCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (filterValue === 'all' || cardCategory === filterValue) {
                    card.style.display = 'flex';
                    // Trigger tiny dynamic entrance animation
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(10px)';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                        card.style.transition = 'all 0.4s ease-out';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // 6. GALLERY FILTERS MECHANISM
    const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    galleryFilterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            galleryFilterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');

            const groupValue = e.target.getAttribute('data-group');

            galleryItems.forEach(item => {
                const itemGroup = item.getAttribute('data-group');

                if (groupValue === 'all' || itemGroup === groupValue) {
                    item.classList.remove('hidden');
                    item.style.opacity = '0';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transition = 'opacity 0.4s ease-in-out';
                    }, 30);
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // 7. TESTIMONIAL SLIDER/CAROUSEL LOGIC
    const slides = document.querySelectorAll('.testimonial-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Handle boundaries
        if (index >= slides.length) currentSlide = 0;
        else if (index < 0) currentSlide = slides.length - 1;
        else currentSlide = index;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            showSlide(currentSlide + 1);
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            showSlide(currentSlide - 1);
        });
    }

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.target.getAttribute('data-index'));
            showSlide(index);
        });
    });

    // Auto rotate slides every 8 seconds
    let testimonialInterval = setInterval(() => {
        showSlide(currentSlide + 1);
    }, 8000);

    // Pause auto-rotation on mouse hover
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        carouselContainer.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(() => {
                showSlide(currentSlide + 1);
            }, 8000);
        });
    }

    // 8. FAQ ACCORDION TRANSITIONS
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(btn => {
        btn.addEventListener('click', () => {
            const faqItem = btn.parentElement;
            const faqAnswer = faqItem.querySelector('.faq-answer');
            const isActive = faqItem.classList.contains('active');

            // Close all other FAQs for clean aesthetic
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                item.querySelector('.faq-answer').style.maxHeight = null;
            });

            if (!isActive) {
                faqItem.classList.add('active');
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
            }
        });
    });

    // 9. MAP HOVER TOOLTIP EFFECT
    const mapPin = document.querySelector('.map-marker-pin');
    const mapTooltip = document.querySelector('.map-tooltip');

    if (mapPin && mapTooltip) {
        mapPin.addEventListener('mouseenter', () => {
            mapTooltip.style.opacity = '1';
            mapTooltip.style.transform = 'translateX(-50%) translateY(-5px)';
        });
        
        mapPin.addEventListener('mouseleave', () => {
            mapTooltip.style.transform = 'translateX(-50%) translateY(0)';
        });
    }

    // 10. SMOOTH SCROLL FOR IN-PAGE ANCHORS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for sticky header height
                const headerHeight = mainHeader.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

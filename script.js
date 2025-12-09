// ===== Device Detection =====
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
const isAndroid = /Android/.test(navigator.userAgent);
const isMobile = window.innerWidth <= 768;

// ===== Navigation Scroll Effect =====
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    const isOpening = !navLinks.classList.contains('active');
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
    
    // Prevent body scroll when nav is open
    if (isOpening) {
        document.body.classList.add('nav-open');
        document.body.style.top = `-${window.scrollY}px`;
    } else {
        const scrollY = document.body.style.top;
        document.body.classList.remove('nav-open');
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
});

// Close mobile nav when clicking a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        
        const scrollY = document.body.style.top;
        document.body.classList.remove('nav-open');
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
    });
});

// Close nav on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
});

// Close nav when clicking outside on mobile
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !navLinks.contains(e.target) && 
        !navToggle.contains(e.target)) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
});

// ===== Language Selector =====
const langToggle = document.querySelector('.lang-toggle');
const langDropdown = document.querySelector('.lang-dropdown');
const langSelector = document.querySelector('.lang-selector');

if (langToggle && langDropdown) {
    // Toggle dropdown
    langToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        langSelector.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!langSelector.contains(e.target)) {
            langSelector.classList.remove('active');
        }
    });
    
    // Handle language selection
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const lang = option.getAttribute('data-lang');
            
            if (window.i18n) {
                window.i18n.setLang(lang);
            }
            
            langSelector.classList.remove('active');
        });
    });
}

// Initialize i18n
document.addEventListener('DOMContentLoaded', () => {
    if (window.i18n) {
        window.i18n.init();
    }
});

// ===== Smooth Scroll for Anchor Links =====
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

// ===== Intersection Observer for Fade-in Animations =====
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Add fade-in class to elements and observe them
const animateElements = [
    '.info-card',
    '.business-card',
    '.value-card',
    '.join-card',
    '.btg-intro',
    '.ai-highlight',
    '.location-card',
    '.cta-section'
];

animateElements.forEach(selector => {
    document.querySelectorAll(selector).forEach((el, index) => {
        el.classList.add('fade-in');
        if (index < 6) {
            el.classList.add(`stagger-${index + 1}`);
        }
        observer.observe(el);
    });
});

// ===== Counter Animation for Stats =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Observe stats for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number, .btg-number');
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                const match = text.match(/(\d+)/);
                if (match && !stat.classList.contains('animated')) {
                    const number = parseInt(match[1]);
                    stat.classList.add('animated');
                    
                    // Keep the format (e.g., "100+", "80%", "1000亿+")
                    const prefix = text.substring(0, text.indexOf(match[0]));
                    const suffix = text.substring(text.indexOf(match[0]) + match[0].length);
                    
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            stat.textContent = prefix + number + suffix;
                            clearInterval(timer);
                        } else {
                            stat.textContent = prefix + Math.floor(current) + suffix;
                        }
                    }, 30);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.hero-stats, .btg-stats').forEach(el => {
    statsObserver.observe(el);
});

// ===== Parallax Effect for Hero Shapes =====
document.addEventListener('mousemove', (e) => {
    const shapes = document.querySelectorAll('.shape');
    const x = (window.innerWidth / 2 - e.clientX) / 50;
    const y = (window.innerHeight / 2 - e.clientY) / 50;
    
    shapes.forEach((shape, index) => {
        const factor = (index + 1) * 0.5;
        shape.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollPosition = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== Typing Effect for Hero Title (Optional Enhancement) =====
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== Card Tilt Effect (Desktop Only) =====
if (!isTouchDevice) {
    document.querySelectorAll('.business-card, .value-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Animate hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }
});

// ===== Scroll Progress Indicator (Optional) =====
function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    document.documentElement.style.setProperty('--scroll-progress', `${scrollPercent}%`);
}

window.addEventListener('scroll', updateScrollProgress);

// ===== Cinema Video Player Controls =====
const videoShowcase = document.querySelector('.showcase-video');
const playBtn = document.querySelector('.play-btn');
const videoOverlay = document.querySelector('.video-overlay');
const cinemaScreen = document.querySelector('.cinema-screen');
const muteBtn = document.querySelector('.mute-btn');
const iconMuted = document.querySelector('.icon-muted');
const iconUnmuted = document.querySelector('.icon-unmuted');
const playPauseBtn = document.querySelector('.play-pause-btn');
const iconPlay = document.querySelector('.icon-play');
const iconPause = document.querySelector('.icon-pause');
const fullscreenBtn = document.querySelector('.fullscreen-btn');
const progressBar = document.querySelector('.progress-bar');
const progressFilled = document.querySelector('.progress-filled');
const timeCurrent = document.querySelector('.time-current');
const timeDuration = document.querySelector('.time-duration');

// Format time helper
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

if (videoShowcase && playBtn && videoOverlay) {
    // Play/Pause on overlay click
    videoOverlay.addEventListener('click', () => {
        if (videoShowcase.paused) {
            videoShowcase.play();
            videoOverlay.classList.add('hidden');
            if (cinemaScreen) cinemaScreen.classList.add('controls-visible');
        }
    });
    
    // Click on video to toggle play/pause
    videoShowcase.addEventListener('click', (e) => {
        if (e.target === videoShowcase) {
            if (videoShowcase.paused) {
                videoShowcase.play();
                videoOverlay.classList.add('hidden');
            } else {
                videoShowcase.pause();
            }
        }
    });
    
    // Double click for fullscreen
    videoShowcase.addEventListener('dblclick', () => {
        toggleFullscreen();
    });
    
    // Update play/pause icons
    videoShowcase.addEventListener('play', () => {
        videoOverlay.classList.add('hidden');
        if (iconPlay && iconPause) {
            iconPlay.style.display = 'none';
            iconPause.style.display = 'block';
        }
    });
    
    videoShowcase.addEventListener('pause', () => {
        if (iconPlay && iconPause) {
            iconPlay.style.display = 'block';
            iconPause.style.display = 'none';
        }
    });
    
    // When video ends
    videoShowcase.addEventListener('ended', () => {
        videoOverlay.classList.remove('hidden');
        if (cinemaScreen) cinemaScreen.classList.remove('controls-visible');
    });
    
    // Play/Pause button in controls
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            if (videoShowcase.paused) {
                videoShowcase.play();
            } else {
                videoShowcase.pause();
            }
        });
    }
    
    // Mute/Unmute button
    if (muteBtn && iconMuted && iconUnmuted) {
        muteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            videoShowcase.muted = !videoShowcase.muted;
            if (videoShowcase.muted) {
                iconMuted.style.display = 'block';
                iconUnmuted.style.display = 'none';
            } else {
                iconMuted.style.display = 'none';
                iconUnmuted.style.display = 'block';
            }
        });
    }
    
    // Fullscreen toggle
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            if (cinemaScreen) {
                cinemaScreen.requestFullscreen().catch(err => {
                    console.log('Fullscreen error:', err);
                });
            }
        } else {
            document.exitFullscreen();
        }
    }
    
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFullscreen();
        });
    }
    
    // Progress bar
    if (progressBar && progressFilled) {
        // Update progress
        videoShowcase.addEventListener('timeupdate', () => {
            const percent = (videoShowcase.currentTime / videoShowcase.duration) * 100;
            progressFilled.style.width = percent + '%';
            if (timeCurrent) {
                timeCurrent.textContent = formatTime(videoShowcase.currentTime);
            }
        });
        
        // Set duration when loaded
        videoShowcase.addEventListener('loadedmetadata', () => {
            if (timeDuration) {
                timeDuration.textContent = formatTime(videoShowcase.duration);
            }
        });
        
        // Click to seek
        progressBar.addEventListener('click', (e) => {
            e.stopPropagation();
            const rect = progressBar.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            videoShowcase.currentTime = percent * videoShowcase.duration;
        });
    }
    
    // Show controls on mouse move
    let controlsTimeout;
    if (cinemaScreen) {
        cinemaScreen.addEventListener('mousemove', () => {
            cinemaScreen.classList.add('controls-visible');
            clearTimeout(controlsTimeout);
            if (!videoShowcase.paused) {
                controlsTimeout = setTimeout(() => {
                    cinemaScreen.classList.remove('controls-visible');
                }, 3000);
            }
        });
        
        cinemaScreen.addEventListener('mouseleave', () => {
            if (!videoShowcase.paused) {
                controlsTimeout = setTimeout(() => {
                    cinemaScreen.classList.remove('controls-visible');
                }, 1000);
            }
        });
    }
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        // Only if video section is in view
        const videoSection = document.querySelector('.video-section');
        if (!videoSection) return;
        
        const rect = videoSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInView) {
            switch(e.key) {
                case ' ':
                case 'k':
                    e.preventDefault();
                    if (videoShowcase.paused) {
                        videoShowcase.play();
                    } else {
                        videoShowcase.pause();
                    }
                    break;
                case 'm':
                    videoShowcase.muted = !videoShowcase.muted;
                    if (iconMuted && iconUnmuted) {
                        iconMuted.style.display = videoShowcase.muted ? 'block' : 'none';
                        iconUnmuted.style.display = videoShowcase.muted ? 'none' : 'block';
                    }
                    break;
                case 'f':
                    toggleFullscreen();
                    break;
                case 'ArrowLeft':
                    videoShowcase.currentTime -= 5;
                    break;
                case 'ArrowRight':
                    videoShowcase.currentTime += 5;
                    break;
            }
        }
    });
    
    // Pause when scrolling out of view
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting && !videoShowcase.paused) {
                videoShowcase.pause();
            }
        });
    }, { threshold: 0.3 });
    
    videoObserver.observe(videoShowcase);
}

// ===== Mobile Touch Enhancements =====

// Swipe to close navigation
let touchStartX = 0;
let touchEndX = 0;

navLinks.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

navLinks.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleNavSwipe();
}, { passive: true });

function handleNavSwipe() {
    const swipeThreshold = 100;
    const swipeDistance = touchEndX - touchStartX;
    
    // Swipe right to close nav
    if (swipeDistance > swipeThreshold && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('nav-open');
    }
}

// Video touch controls
if (videoShowcase && isTouchDevice) {
    let videoTouchStartX = 0;
    let videoTouchStartTime = 0;
    let lastTapTime = 0;
    
    const cinemaScreenEl = document.querySelector('.cinema-screen');
    
    if (cinemaScreenEl) {
        // Double tap to play/pause
        cinemaScreenEl.addEventListener('touchend', (e) => {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTapTime;
            
            if (tapLength < 300 && tapLength > 0) {
                // Double tap detected
                e.preventDefault();
                if (videoShowcase.paused) {
                    videoShowcase.play();
                    if (videoOverlay) videoOverlay.classList.add('hidden');
                } else {
                    videoShowcase.pause();
                }
            }
            lastTapTime = currentTime;
        });
        
        // Swipe left/right to seek
        cinemaScreenEl.addEventListener('touchstart', (e) => {
            videoTouchStartX = e.changedTouches[0].screenX;
            videoTouchStartTime = videoShowcase.currentTime;
        }, { passive: true });
        
        cinemaScreenEl.addEventListener('touchmove', (e) => {
            if (!videoShowcase.duration) return;
            
            const touchX = e.changedTouches[0].screenX;
            const diff = touchX - videoTouchStartX;
            const seekAmount = (diff / window.innerWidth) * 30; // Max 30 seconds seek
            
            let newTime = videoTouchStartTime + seekAmount;
            newTime = Math.max(0, Math.min(newTime, videoShowcase.duration));
            
            if (Math.abs(diff) > 30) { // Minimum swipe threshold
                videoShowcase.currentTime = newTime;
            }
        }, { passive: true });
        
        // Show controls on touch
        cinemaScreenEl.addEventListener('touchstart', () => {
            cinemaScreenEl.classList.add('controls-visible');
        }, { passive: true });
    }
}

// Prevent pull-to-refresh on iOS when scrolling up at top
let preventPullToRefresh = false;
let lastTouchY = 0;

document.addEventListener('touchstart', (e) => {
    if (e.touches.length !== 1) return;
    lastTouchY = e.touches[0].clientY;
    preventPullToRefresh = window.scrollY === 0;
}, { passive: true });

document.addEventListener('touchmove', (e) => {
    const touchY = e.touches[0].clientY;
    const touchYDelta = touchY - lastTouchY;
    
    if (preventPullToRefresh && touchYDelta > 0 && window.scrollY === 0) {
        if (e.cancelable) {
            e.preventDefault();
        }
    }
    
    lastTouchY = touchY;
}, { passive: false });

// Handle orientation change
let resizeTimeout;
window.addEventListener('orientationchange', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        // Close nav on orientation change
        navLinks.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.classList.remove('nav-open');
        
        // Recalculate any size-dependent layouts
        document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    }, 100);
});

// Set viewport height for mobile (fixes iOS 100vh issue)
function setViewportHeight() {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
}
setViewportHeight();
window.addEventListener('resize', setViewportHeight);

// Smooth scroll for iOS
if (isIOS) {
    document.documentElement.style.webkitOverflowScrolling = 'touch';
}

// Touch feedback for buttons
document.querySelectorAll('.cta-button, .control-btn, .play-btn, .lang-option').forEach(btn => {
    btn.addEventListener('touchstart', () => {
        btn.style.opacity = '0.8';
    }, { passive: true });
    
    btn.addEventListener('touchend', () => {
        btn.style.opacity = '';
    }, { passive: true });
    
    btn.addEventListener('touchcancel', () => {
        btn.style.opacity = '';
    }, { passive: true });
});

// Active section highlighting for mobile
function updateMobileNav() {
    if (window.innerWidth > 768) return;
    
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.querySelectorAll('a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateMobileNav, { passive: true });

// Throttled resize handler
let resizeThrottle;
window.addEventListener('resize', () => {
    if (resizeThrottle) return;
    resizeThrottle = setTimeout(() => {
        resizeThrottle = null;
        // Close mobile nav if resizing to desktop
        if (window.innerWidth > 768 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            navToggle.classList.remove('active');
            document.body.classList.remove('nav-open');
        }
    }, 100);
});

console.log('🚀 首旅慧联科技招聘网站已加载完成');
console.log(`📱 设备类型: ${isTouchDevice ? '触屏设备' : '桌面设备'}`);

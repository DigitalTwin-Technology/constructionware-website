// Modal content data
const modalContent = {
    // Feature modals
    'Real-Time 4D Construction Monitoring': {
        type: 'feature',
        title: 'Real-Time 4D Construction Monitoring',
        description: 'Links BIM design data with on-site as-built progress for a dynamic, time-aware model.',
        videoUrl: 'https://www.youtube.com/embed/tzOr1XgBZBw?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'Process drone/LiDAR/photogrammetry into point clouds',
            'AI aligns as-built with BIM to detect deviations',
            'Color-coded visualizations for discrepancies'
        ],
        benefits: [
            'Detect errors before rework',
            'Track schedule adherence with visual evidence',
            'Improve stakeholder transparency'
        ]
    },
    'AI-Driven 3D Reconstruction & BIM Comparison': {
        type: 'feature',
        title: 'AI-Driven 3D Reconstruction & BIM Comparison',
        description: 'Transforms raw site data into photorealistic 3D models and validates against BIM.',
        videoUrl: 'https://youtube.com/embed/pbpcywSJaiU?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'LiDAR/drone scans generate dense point clouds',
            'NeRF / Gaussian techniques produce realistic geometry',
            'AI detects deviations with sub-centimeter accuracy'
        ],
        benefits: [
            'Photorealistic as-built visualization',
            'Millimeter-level deviation detection',
            'Audit-ready annotated reports'
        ]
    },
    'AI-Based Safety & Quality Control': {
        type: 'feature',
        title: 'AI-Based Safety & Quality Control',
        description: '24/7 automated monitoring to detect safety violations, quality issues, and compliance risks.',
        videoUrl: 'https://www.youtube.com/embed/cf0o32P8fF0?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'Continuous video/image analysis from site cameras',
            'AI identifies PPE violations, unsafe conditions, and quality defects',
            'Real-time alerts to project managers and safety teams'
        ],
        benefits: [
            'Prevent accidents before they happen',
            'Reduce OSHA violations and fines',
            'Maintain consistent quality standards'
        ]
    },
    'Airport Runway Maintenance with Computer Vision AI': {
        type: 'feature',
        title: 'Airport Runway Maintenance with Computer Vision AI',
        description: 'Automated visual inspections for runway surfaces, eliminating manual surveys and safety shutdowns.',
        videoUrl: 'https://www.youtube.com/embed/SvF_IxMRagE?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'Drone-based imaging captures runway conditions',
            'Computer vision AI detects cracks, debris, and surface defects',
            'Prioritized maintenance reports with severity ratings'
        ],
        benefits: [
            'Eliminate manual surveys and safety shutdowns',
            'Early detection of developing issues',
            'Optimized maintenance scheduling'
        ]
    },
    'Discrete Event Simulation Sandbox': {
        type: 'feature',
        title: 'Discrete Event Simulation Sandbox',
        description: 'Virtual environment to test construction sequences, optimize resources, and predict timelines.',
        videoUrl: 'https://www.youtube.com/embed/2yi0PcPI8Ag?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'Model construction activities as discrete events',
            'Simulate resource allocation and sequencing scenarios',
            'Analyze bottlenecks and optimize schedules'
        ],
        benefits: [
            'Reduce project delays by up to 30%',
            'Optimize resource allocation',
            'Identify risks before execution'
        ]
    },
    'Concrete Curing Simulation & Strength Estimation': {
        type: 'feature',
        title: 'Concrete Curing Simulation & Strength Estimation',
        description: 'Physics-based AI predicts concrete strength development, enabling data-driven formwork removal decisions.',
        videoUrl: 'https://www.youtube.com/embed/ovGxLElLuv4?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'Monitor temperature and humidity sensors in concrete',
            'Physics-induced AI models hydration and strength gain',
            'Predict strength within 5% of laboratory break tests'
        ],
        benefits: [
            'Accelerate construction timelines',
            'Reduce liability from premature loading',
            'Replace subjective assessments with scientific data'
        ]
    },
    'Civil Infrastructure Health Monitoring': {
        type: 'feature',
        title: 'Civil Infrastructure Health Monitoring',
        description: 'Predictive analytics identify developing issues in bridges, tunnels, and highways before visible to the human eye.',
        videoUrl: 'https://www.youtube.com/embed/NO_2A70y2r8?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'Fusion of sensor data (strain, vibration, temperature)',
            'AI detects anomalies and predicts failure modes',
            'Risk-based prioritization of maintenance activities'
        ],
        benefits: [
            'Early maintenance triggers weeks or months in advance',
            'Maximize resource allocation efficiency',
            'Prevent catastrophic failures'
        ]
    },
    'Drone & Sensor Data Fusion with Physics-Induced AI': {
        type: 'feature',
        title: 'Drone & Sensor Data Fusion with Physics-Induced AI',
        description: 'Combines drone imagery with ground sensors, using physics-based AI for comprehensive site intelligence.',
        videoUrl: 'https://www.youtube.com/embed/BmKsZXwi9p8?mute=1&controls=1&modestbranding=1&rel=0&fs=0&playsinline=1',
        howItWorks: [
            'Synchronize drone flights with sensor networks',
            'Fuse multi-modal data using physics-informed neural networks',
            'Generate unified site intelligence dashboard'
        ],
        benefits: [
            'Complete site visibility from multiple perspectives',
            'Improved accuracy through data fusion',
            'Real-time decision support'
        ]
    },
    // Benefits modals
    'Key Benefits': {
        type: 'benefits',
        title: 'Key Benefits of Using constructionware',
        benefits: [
            {
                title: '24/7 Surveillance Without Fatigue',
                description: 'AI tirelessly monitors your entire site, preventing safety blind spots.'
            },
            {
                title: 'Instant Hazard Detection',
                description: 'React in seconds to safety violations or intrusions, preventing escalation into accidents or OSHA violations.'
            },
            {
                title: 'Accelerated Decision-Making',
                description: 'Know precisely when formwork can be removed or post-tensioning can begin, reducing construction timelines by up to 30%.'
            },
            {
                title: 'Improved Safety & Reliability',
                description: 'Avoid early loading of under-cured concrete and reduce liability by replacing subjective assessments with data-driven decisions.'
            },
            {
                title: 'Scientific Accuracy',
                description: 'Concrete strength prediction within 5% of laboratory break tests.'
            },
            {
                title: 'Automated Visual Inspections',
                description: 'Eliminate manual surveys and safety shutdowns for runway inspections.'
            },
            {
                title: 'Early Maintenance Triggers',
                description: 'Predictive analytics identify developing issues weeks or months before visible to the human eye, enabling proactive scheduling.'
            },
            {
                title: 'Risk-Based Decision Support',
                description: 'Prioritize maintenance activities based on safety impact, maximizing resource allocation efficiency.'
            },
            {
                title: 'Photorealistic As-Built Visualization',
                description: 'Generate immersive, hyper-accurate 3D models for virtual walkthroughs of actual site conditions.'
            },
            {
                title: 'High-Accuracy BIM Comparison',
                description: 'Detect subtle deviations between design and reality faster and more reliably than manual QA, with sub-centimeter precision.'
            },
            {
                title: 'Time Savings',
                description: 'Reduce inspection and modeling time by 80% compared to traditional methods.'
            },
            {
                title: 'Audit-Ready Output',
                description: 'Automatically generated, comprehensive reports for compliance, regulations, and liability protection.'
            },
            {
                title: 'Proactive Risk Mitigation',
                description: 'Anticipate and mitigate potential issues before they impact on-site execution, reducing costly rework and delays.'
            }
        ]
    },
    'Who Can Benefit': {
        type: 'benefits',
        title: 'Who Can Benefit',
        benefits: [
            {
                title: 'General Contractors',
                description: 'Monitor progress, ensure quality, and optimize schedules across multiple projects.'
            },
            {
                title: 'Construction Managers',
                description: 'Gain real-time visibility into site conditions and make data-driven decisions.'
            },
            {
                title: 'Infrastructure Operators',
                description: 'Maintain bridges, tunnels, highways, and runways with predictive maintenance.'
            },
            {
                title: 'Project Owners',
                description: 'Ensure compliance, reduce risks, and protect investments with comprehensive monitoring.'
            },
            {
                title: 'Safety Managers',
                description: 'Prevent incidents and violations with 24/7 AI-powered surveillance.'
            },
            {
                title: 'Quality Assurance Teams',
                description: 'Detect deviations early and ensure construction meets design specifications.'
            }
        ]
    },
    // About modal
    'About Constructionware': {
        type: 'about',
        title: 'About Constructionware',
        heading: 'See. Predict. Build Smarter',
        description: 'Constructionware is the AI control center for your construction and infrastructure projects — combining real-time 4D monitoring, BIM intelligence, and predictive simulation to give you complete clarity from planning to completion.',
        features: [
            'Track progress in 4D – compare as-built status against your BIM model in real time.',
            'Detect issues early – identify deviations and risks before they become costly rework.',
            'Simulate scenarios – optimize sequences, resources, and timelines with a virtual sandbox.',
            'Monitor asset health – predict maintenance needs for bridges, tunnels, highways, and runways.',
            'Ensure safety & quality – 24/7 AI monitoring to prevent incidents and enforce compliance.'
        ],
        conclusion: 'Whether you\'re building a high-rise, maintaining a bridge, or overseeing airport operations, Constructionware delivers the foresight and control you need to reduce delays, cut costs, and ensure flawless execution.',
        tagline: 'Because in construction, foresight isn\'t just an advantage — it\'s the foundation of success.'
    },
    'Request a Demo': {
        type: 'demo',
        title: 'Request a Demo',
        description: 'Experience Constructionware firsthand. Schedule a personalized demo to see how AI-powered construction monitoring can transform your projects.',
        company: {
            name: 'DigitalTwin Technology GmbH',
            address: 'Schaafenstrasse 25',
            city: 'Cologne - 50676',
            country: 'Germany'
        }
    },
    'Legal Notice': {
        type: 'legal',
        title: 'Legal Notice',
        sections: [
            {
                title: 'Company Information',
                subsections: [
                    {
                        heading: 'Legal Entity',
                        content: 'DigitalTwin Technology GmbH'
                    },
                    {
                        heading: 'Business Address',
                        content: 'Schaafenstrasse 25\n50676 Köln / Germany'
                    },
                    {
                        heading: 'Contact Details',
                        content: 'Email: info@digitaltwin.technology\nTel.: +49 221 398 808 00\nFax.: +49 221 398 8008'
                    }
                ]
            },
            {
                title: 'Management Team',
                subsections: [
                    {
                        heading: 'Person in Charge',
                        content: 'Rahul Tomar\nOverall responsibility for company operations'
                    },
                    {
                        heading: 'Executive Director',
                        content: 'Rahul Tomar\nStrategic leadership and business development'
                    }
                ]
            },
            {
                title: 'Registration Details',
                subsections: [
                    {
                        heading: 'Situs and Court of Registry',
                        content: 'Trade Register No.: HRB 96083\nCourt: Amtsgericht Köln'
                    },
                    {
                        heading: 'Tax Information',
                        content: 'VAT Number: DE321574819'
                    }
                ]
            },
            {
                title: 'Legal Terms & Disclaimer',
                subsections: [
                    {
                        heading: 'Liability for Content',
                        content: 'We make every effort to keep the information on our Web site current, but accept no liability whatsoever for the content provided. Pursuant to §7 par. 1 of TMG (German Tele-Media Act), the law limits our responsibility as a service provider to our own content on these Web pages.\n\nAccording to §§8 to 10 of TMG, we are not obligated to monitor third party information provided or stored on our Web site. However, we shall promptly remove any content upon becoming aware that it violates the law. Our liability in such an instance shall commence at the time we become aware of the respective violation.'
                    },
                    {
                        heading: 'Liability for Links',
                        content: 'Our site contains links to third-party Web sites. We have no influence whatsoever on the information on these Web sites and accept no guaranty for its correctness. The content of such third-party sites is the responsibility of the respective owners/providers.\n\nAt the time third-party Web sites were linked to ours, we found NO GROUNDS WHATSOEVER of any likely contravention of the law. We shall promptly delete a link upon becoming aware that it violates the law.'
                    },
                    {
                        heading: 'Copyrights',
                        content: 'The content and works provided on these Web pages are governed by the copyright laws of Germany. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator.'
                    },
                    {
                        heading: 'Data Protection',
                        content: 'Please be aware that there are inherent security risks in transmitting data, such as e-mails, via the Internet, because it is impossible to safeguard completely against unauthorized access by third parties. Nevertheless, we shall safeguard your data, subject to this limitation. In particular, personal information will be transmitted via the Internet only if it does not infringe upon third-party rights, unless the respective party has given its prior consent in view of such security risks.\n\nAccordingly, as the Web site provider, we shall not be held liable for any damages incurred as a consequence of such security risks or for any related acts of omission on our part.\n\nWe oppose the use of any available contact information by a third party for sending unsolicited advertisements. As the Web site provider, we reserve the express right to take legal action against unsolicited mailing or e-mailing of spam and other similar advertising materials.\n\nSource: S&K Rechtsanwälte www.streifler.de'
                    }
                ]
            }
        ]
    }
};

// Modal functionality
let currentModal = null;
let isOpeningModal = false;

function openModal(buttonText) {
    // Prevent multiple modals from opening simultaneously
    if (isOpeningModal) {
        return;
    }
    
    // Always close any existing modal first (synchronously, immediately)
    closeModal();
    
    const content = modalContent[buttonText];
    if (!content) return;
    
    // Set flag to prevent concurrent opens
    isOpeningModal = true;
    
    const overlay = document.getElementById('modal-overlay');
    const title = document.getElementById('modal-title');
    const modalContentDiv = document.getElementById('modal-content');
    
    // Ensure overlay is closed and reset before opening new one
    overlay.classList.remove('active');
    
    // Clear any existing content immediately
    modalContentDiv.innerHTML = '';
    title.textContent = '';
    
    // Set current modal immediately to prevent race conditions
    currentModal = buttonText;
    
    // Use a small delay to ensure DOM updates, but prevent multiple opens
    setTimeout(() => {
        // Double-check we're still opening the same modal
        if (currentModal !== buttonText) {
            isOpeningModal = false;
            return;
        }
        
        title.textContent = content.title;
        
        // Render based on content type
        if (content.type === 'feature') {
            renderFeatureModal(modalContentDiv, content);
        } else if (content.type === 'benefits') {
            renderBenefitsModal(modalContentDiv, content);
        } else if (content.type === 'about') {
            renderAboutModal(modalContentDiv, content);
        } else if (content.type === 'demo') {
            renderDemoModal(modalContentDiv, content);
        } else if (content.type === 'legal') {
            renderLegalModal(modalContentDiv, content);
        }
        
        // Show overlay
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Reset flag after modal is shown
        isOpeningModal = false;
    }, 10);
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    
    // Force close immediately, synchronously
    if (overlay) {
        overlay.classList.remove('active');
    }
    
    document.body.style.overflow = '';
    
    // Reset state immediately
    currentModal = null;
    isOpeningModal = false;
}

function renderFeatureModal(container, content) {
    let html = '';
    
    // If video exists, create layout with description on top and two columns below
    if (content.videoUrl) {
        // Full width description at top
        html += `<p class="modal-description-full">${content.description}</p>`;
        
        // Two column layout below
        html += '<div class="modal-two-column">';
        html += '<div class="modal-text-column">';
        
        html += '<div class="section-title">How it works</div>';
        html += '<ul>';
        content.howItWorks.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        
        html += '<div class="section-title">Benefits</div>';
        html += '<ul>';
        content.benefits.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        html += '</div>'; // close modal-text-column
        
        html += '<div class="modal-video-column">';
        html += `<div class="video-container">
            <iframe 
                src="${content.videoUrl}" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                class="modal-video">
            </iframe>
        </div>`;
        html += '</div>'; // close modal-video-column
        html += '</div>'; // close modal-two-column
    } else {
        // Single column layout for modals without video
        html += `<p>${content.description}</p>`;
        
        html += '<div class="section-title">How it works</div>';
        html += '<ul>';
        content.howItWorks.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
        
        html += '<div class="section-title">Benefits</div>';
        html += '<ul>';
        content.benefits.forEach(item => {
            html += `<li>${item}</li>`;
        });
        html += '</ul>';
    }
    
    container.innerHTML = html;
}

function renderBenefitsModal(container, content) {
    let html = `<h3>${content.title}</h3>`;
    
    content.benefits.forEach(benefit => {
        html += `
            <div class="benefit-item">
                <div class="benefit-item-title">${benefit.title}</div>
                <div class="benefit-item-description">${benefit.description}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function renderAboutModal(container, content) {
    let html = `<h3>${content.heading}</h3>`;
    html += `<p>${content.description}</p>`;
    html += '<ul>';
    content.features.forEach(feature => {
        html += `<li>${feature}</li>`;
    });
    html += '</ul>';
    html += `<p>${content.conclusion}</p>`;
    html += `<p><strong>${content.tagline}</strong></p>`;
    
    container.innerHTML = html;
}

function renderDemoModal(container, content) {
    let html = `<p class="modal-description-full">${content.description}</p>`;
    
    html += '<div class="demo-form-container">';
    
    // Contact Form
    html += '<div class="demo-form-column">';
    html += '<h4>Contact Form</h4>';
    html += '<form id="demo-form" class="contact-form" action="https://formsubmit.co/info@digitaltwin.technology" method="POST">';
    
    // Hidden fields for FormSubmit configuration
    html += '<input type="hidden" name="_subject" value="New Demo Request from Constructionware Website">';
    html += '<input type="hidden" name="_captcha" value="false">';
    html += '<input type="hidden" name="_template" value="table">';
    html += `<input type="hidden" name="_next" value="${window.location.origin}/thank-you.html">`;
    html += '<input type="text" name="_honey" style="display:none">';
    
    html += '<div class="form-group">';
    html += '<label for="demo-name">Full Name *</label>';
    html += '<input type="text" id="demo-name" name="name" required placeholder="John Doe">';
    html += '</div>';
    
    html += '<div class="form-group">';
    html += '<label for="demo-email">Email *</label>';
    html += '<input type="email" id="demo-email" name="email" required placeholder="john.doe@company.com">';
    html += '</div>';
    
    html += '<div class="form-group">';
    html += '<label for="demo-company">Company</label>';
    html += '<input type="text" id="demo-company" name="company" placeholder="Your Company Name">';
    html += '</div>';
    
    html += '<div class="form-group">';
    html += '<label for="demo-phone">Phone Number</label>';
    html += '<input type="tel" id="demo-phone" name="phone" placeholder="+49 123 456789">';
    html += '</div>';
    
    html += '<div class="form-group">';
    html += '<label for="demo-message">Message *</label>';
    html += '<textarea id="demo-message" name="message" rows="4" required placeholder="Tell us about your project and what you\'d like to see in the demo..."></textarea>';
    html += '</div>';
    
    html += '<button type="submit" class="form-submit-btn">Send Demo Request</button>';
    html += '</form>';
    html += '</div>'; // close demo-form-column
    
    // Company Information
    html += '<div class="demo-info-column">';
    html += '<h4>Contact Information</h4>';
    html += '<div class="company-info">';
    html += `<div class="company-name">${content.company.name}</div>`;
    html += `<div class="company-address">${content.company.address}</div>`;
    html += `<div class="company-address">${content.company.city}</div>`;
    html += `<div class="company-address">${content.company.country}</div>`;
    html += '</div>';
    
    html += '<div class="info-box">';
    html += '<h5>Why Request a Demo?</h5>';
    html += '<ul>';
    html += '<li>See the platform in action</li>';
    html += '<li>Discuss your specific use case</li>';
    html += '<li>Get expert recommendations</li>';
    html += '<li>Understand implementation process</li>';
    html += '<li>Explore pricing options</li>';
    html += '</ul>';
    html += '</div>';
    html += '</div>'; // close demo-info-column
    
    html += '</div>'; // close demo-form-container
    
    container.innerHTML = html;
    
    // Add form submission handler
    setTimeout(() => {
        const form = document.getElementById('demo-form');
        if (form) {
            form.addEventListener('submit', function(e) {
                const submitBtn = form.querySelector('.form-submit-btn');
                if (submitBtn) {
                    submitBtn.textContent = 'Sending...';
                    submitBtn.disabled = true;
                }
                // Form will submit naturally to FormSubmit
            });
        }
    }, 100);
}

function renderLegalModal(container, content) {
    let html = '<div class="legal-sections">';
    
    content.sections.forEach(section => {
        html += `<div class="legal-section">`;
        html += `<h3 class="legal-section-title">${section.title}</h3>`;
        
        section.subsections.forEach(subsection => {
            html += `<div class="legal-subsection">`;
            html += `<h4 class="legal-subsection-heading">${subsection.heading}</h4>`;
            html += `<p class="legal-subsection-content">${subsection.content.replace(/\n/g, '<br>')}</p>`;
            html += `</div>`;
        });
        
        html += `</div>`;
    });
    
    html += '</div>';
    
    container.innerHTML = html;
}

// Initialize modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('modal-overlay');
    const closeBtn = document.getElementById('modal-close');
    
    // Close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    // Close on overlay click
    if (overlay) {
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal();
            }
        });
    }
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && currentModal) {
            closeModal();
        }
    });
    
    // Use event delegation to prevent duplicate listeners
    // Attach single listener to document that handles all button clicks
    document.addEventListener('click', function(e) {
        const button = e.target.closest('.feature-btn, .benefit-btn');
        if (button) {
            e.stopPropagation();
            e.preventDefault();
            const buttonText = button.getAttribute('aria-label') || button.getAttribute('title') || button.textContent.trim();
            if (buttonText) {
                openModal(buttonText);
            }
        }
    });
    
    // Mobile menu toggle functionality
    const mobileMenuLeft = document.querySelector('.mobile-menu-left');
    const mobileMenuRight = document.querySelector('.mobile-menu-right');
    
    if (mobileMenuLeft) {
        mobileMenuLeft.addEventListener('click', function() {
            const leftSidebar = document.querySelector('.left-sidebar');
            const rightSidebar = document.querySelector('.right-sidebar');
            if (leftSidebar) {
                leftSidebar.classList.toggle('mobile-visible');
                if (rightSidebar) {
                    rightSidebar.classList.remove('mobile-visible');
                }
            }
        });
    }
    
    if (mobileMenuRight) {
        mobileMenuRight.addEventListener('click', function() {
            const rightSidebar = document.querySelector('.right-sidebar');
            const leftSidebar = document.querySelector('.left-sidebar');
            if (rightSidebar) {
                rightSidebar.classList.toggle('mobile-visible');
                if (leftSidebar) {
                    leftSidebar.classList.remove('mobile-visible');
                }
            }
        });
    }
    
    // Close sidebars when clicking outside on mobile
    document.addEventListener('click', function(e) {
        if (window.innerWidth < 1024) {
            const leftSidebar = document.querySelector('.left-sidebar');
            const rightSidebar = document.querySelector('.right-sidebar');
            const isClickOnMenuBtn = e.target.closest('.mobile-menu-btn');
            const isClickOnSidebar = e.target.closest('.left-sidebar, .right-sidebar');
            
            if (!isClickOnMenuBtn && !isClickOnSidebar) {
                if (leftSidebar) leftSidebar.classList.remove('mobile-visible');
                if (rightSidebar) rightSidebar.classList.remove('mobile-visible');
            }
        }
    });
});

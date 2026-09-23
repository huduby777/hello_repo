const modal = document.querySelector('#project-modal');
const trigger = document.querySelector('.project-trigger');
const closeModal = () => { 
    modal?.classList.remove('is-open'); 
    modal?.setAttribute('aria-hidden', 'true'); 
    document.body.classList.remove('modal-open'); 
};
const openModal = () => { 
    modal?.classList.add('is-open'); 
    modal?.setAttribute('aria-hidden', 'false'); 
    document.body.classList.add('modal-open'); 
    modal?.querySelector('.modal-close')?.focus(); 
};
trigger?.addEventListener('click', openModal);
trigger?.addEventListener('keydown', (event) => { 
    if (event.key === 'Enter' || event.key === ' ') { 
        event.preventDefault(); openModal(); 
    } 
});
modal?.querySelectorAll('[data-modal-close]').forEach((element) => element.addEventListener('click', closeModal));
document.addEventListener('keydown', (event) => { 
    if (event.key === 'Escape' && modal?.classList.contains('is-open')) closeModal(); 
});
const revealObserver = new IntersectionObserver((entries) => { 
    entries.forEach((entry) => { 
        if (entry.isIntersecting) { 
            entry.target.classList.add('visible'); 
            revealObserver.unobserve(entry.target); 
        } 
    }); 
}, { threshold: 0.1 });
document.querySelectorAll('.section-block, .contact-footer').forEach((element) => {
    element.classList.add('reveal'); 
    revealObserver.observe(element); 
});

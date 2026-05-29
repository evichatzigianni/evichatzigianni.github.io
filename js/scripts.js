/*!
* Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    let scrollSpyInstance = null;

    if (mainNav) {
        scrollSpyInstance = new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '-75px 0px -85% 0px', 
        });
    }
    
    // Force highlight last section when reaching the bottom of the page
    window.addEventListener('scroll', () => {
        const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');
        if (responsiveNavItems.length === 0) return;

        // Check if user reached the absolute bottom of the page
        const isAtBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 10);

        if (isAtBottom) {
            // Remove active class from all nav items
            responsiveNavItems.forEach(item => item.classList.remove('active'));
            // Add active class to the very last nav item
            responsiveNavItems[responsiveNavItems.length - 1].classList.add('active');
        } else if (scrollSpyInstance) {
            // Refresh ScrollSpy if we are not at the bottom to restore normal behavior
            scrollSpyInstance.refresh();
        }
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

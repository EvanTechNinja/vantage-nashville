// ============ INQUIRY MODAL ============
function openInquiryModal() {
  var modal = document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeInquiryModal() {
  var modal = document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Close modal on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeInquiryModal();
});

// ============ MOBILE NAV TOGGLE ============
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger-icon');
  const closeIcon = document.getElementById('close-icon');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = !menu.classList.contains('hidden');
      menu.classList.toggle('hidden');
      if (hamburger && closeIcon) {
        hamburger.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
      }
      toggle.setAttribute('aria-expanded', !isOpen);
    });

    // Close menu when clicking a nav link
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.add('hidden');
        if (hamburger && closeIcon) {
          hamburger.classList.remove('hidden');
          closeIcon.classList.add('hidden');
        }
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============ AMENITY LIST TOGGLES ============
  document.querySelectorAll('.amenity-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var list = btn.nextElementSibling;
      var chevron = btn.querySelector('.amenity-chevron');
      var isExpanded = btn.getAttribute('aria-expanded') === 'true';

      if (list && list.classList.contains('amenity-list')) {
        list.classList.toggle('hidden');
        btn.setAttribute('aria-expanded', !isExpanded);
        if (chevron) {
          chevron.style.transform = isExpanded ? '' : 'rotate(180deg)';
        }
        btn.textContent = '';
        // Rebuild button content
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'w-4 h-4 transition-transform duration-200 amenity-chevron');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
        svg.setAttribute('viewBox', '0 0 24 24');
        svg.style.transform = isExpanded ? '' : 'rotate(180deg)';
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', 'M19 9l-7 7-7-7');
        svg.appendChild(path);
        btn.appendChild(svg);
        btn.appendChild(document.createTextNode(isExpanded ? 'View Amenities' : 'Hide Amenities'));
      }
    });
  });

  // ============ HEADER SHADOW ON SCROLL ============
  var header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('shadow-md');
      } else {
        header.classList.remove('shadow-md');
      }
    });
  }
});

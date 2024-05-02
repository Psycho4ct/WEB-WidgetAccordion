const headers = document.querySelectorAll('.accordion-header');
const themeSwitcher = document.getElementById('theme-switcher');
const openAllButton = document.getElementById('open-all');
const closeAllButton = document.getElementById('close-all');
const body = document.body;
let allSectionsOpen = false;



    headers.forEach(header => {
      header.addEventListener('click', event => {
        const content = event.currentTarget.nextElementSibling;
        content.classList.toggle('show');

        const isOpen = content.classList.contains('show');
        event.currentTarget.classList.toggle('active', isOpen);
      });
    });



    themeSwitcher.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      themeSwitcher.textContent = document.body.classList.contains('dark') ? 'Switch to light theme' : 'Switch to dark theme';
    
      const themeCss = document.getElementById('theme-css');
      const darkThemeCss = document.getElementById('dark-theme-css');
    
      if (document.body.classList.contains('dark')) {
        themeCss.disabled = true;
        darkThemeCss.disabled = false;
      } else {
        themeCss.disabled = false;
        darkThemeCss.disabled = true;
      }
    });

    openAllButton.addEventListener('click', openAllSections);
    closeAllButton.addEventListener('click', closeAllSections);
    
    function openAllSections() {
      headers.forEach(header => {
        const content = header.nextElementSibling;
        content.classList.add('show');
        header.classList.add('active');
      });
      allSectionsOpen = true;
    }
    
    function closeAllSections() {
      headers.forEach(header => {
        const content = header.nextElementSibling;
        content.classList.remove('show');
        header.classList.remove('active');
      });
      allSectionsOpen = false;
    }
    
/**
 * Navigates to the element
 *
 */
$.fn.navigate = function (duration) {
  const elem = this;
  const heightInRem = parseFloat(getComputedStyle(document.body).getPropertyValue('--header-height'));
  const heightInPx = parseFloat(getComputedStyle(document.documentElement).fontSize) * heightInRem;

  $([document.documentElement, document.body]).animate({
    scrollTop: elem.offset().top - heightInPx
  }, duration, 'easeInOutCubic');
};

$(function () {
  const minScrollDuration = 1000;
  let skillsHTML = "";
  let workHTML = "";
  let projectsHTML = "";

  const skillGroups = [{
    name: 'Languages',
    skills: [{
      name: 'JavaScript / HTML / CSS',
      level: '90'
    }, {
      name: 'Java / C / C# / C++',
      level: '80'
    }, {
      name: 'PHP / Assembly',
      level: '65'
    }]
  }, {
    name: 'Frameworks & Libraries',
    skills: [{
      name: 'Angular / jQuery / Karma / Jasmine',
      level: '95'
    }, {
      name: 'React / NodeJS / Cucumber / Unity',
      level: '80'
    }, {
      name: '.NET MVC / WebAPI / CodeIgniter',
      level: '70'
    }]
  }, {
    name: 'Database',
    skills: [{
      name: 'SQL Server / MySQL / PostgreSQL',
      level: '85'
    }, {
      name: 'MongoDB',
      level: '65'
    }, {
      name: 'Stored procedures',
      level: '45'
    }]
  }, {
    name: 'Web Servers & Tools',
    skills: [{
      name: 'Git / Postman / MS Office',
      level: '95'
    }, {
      name: 'Apache / Nginx / IIS',
      level: '80'
    }, {
      name: 'VirtualBox',
      level: '50'
    }]
  }];

  const works = [{
    timeline: '2019 - NOW',
    role: 'DEVELOPMENT LEAD',
    isCompany: true,
    name: 'PEOPLE10 TECHNOSOFT PVT. LTD.',
    link: 'https://www.people10.com/',
    client: 'ALLEGIANT AIRLINES',
    clientLink: 'https://www.allegiantair.com/',
    description: `• Design and maintenance of Allegiant Air's Flight Movement Management (FMM), an Angular web app crucial to the Operational Control Centre (OCC) in order to track, maintain and modify flights.<br />
    • Large-scale project with over 90% unit test coverage and secured using Fortify.<br />
    • Improved UI performance by ~120% by implementing server-side rendering, lazy loading of front end modules, and virtual scrolling.<br />
    • Implemented an innovative solution to reduce the build time by ~650% by significantly improving unit test performance.`
  }, {
    timeline: '2018 - 2019',
    role: 'SENIOR SOFTWARE ENG.',
    isCompany: true,
    name: 'PEOPLE10 TECHNOSOFT PVT. LTD.',
    link: 'https://www.people10.com/',
    client: 'CHAPEL OF THE FLOWERS',
    clientLink: 'https://www.littlechapel.com/',
    description: `• Migrated a closed user group hotel booking website for wedding guests from .NET WebAPI, CodeIgniter, and jQuery to .NET WebAPI 2.0 and Angular 8 within 3 months which was earlier than estimated.<br />
    • Implemented split payment functionality which enables the splitting of large transactions between multiple cards.<br />
    • Implemented scheduled payments (EMI) and saved card functionality in compliance with PCI standards.`
  }, {
    timeline: '2016 - 2018',
    role: 'SOFTWARE ENG.',
    isCompany: true,
    name: 'PEOPLE10 TECHNOSOFT PVT. LTD.',
    link: 'https://www.people10.com/',
    client: 'PNW BOCES',
    clientLink: 'https://www.pnwboces.org/',
    description: `• Maintained the 11 Chapel of the Flowers' domains. Worked with various technologies such as AngularJS, Angular 2+, .NET MVC, .NET WebAPI, PHP and MySQL.<br />
    • Designed and developed OLAS (olasjobs.org), an online job application system for educators using AngularJS and .NET WebAPI.`
  }, {
    timeline: '2012 - 2016',
    role: 'ELECTRICAL & ELECTRONICS ENG.',
    isCompany: false,
    name: 'NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT',
    link: 'http://www.nitc.ac.in/',
    description: `• Senior executive of the media committee for Tathva and Ragam which are the technical and cultural fests respectively held at National Institute of Technology, Calicut.<br />
    • Player in the college football and table tennis team.`
  }];

  const projects = [{
    company: 'allegiant',
    bgImg: 'img/alegiant-thumbnail.jpg',
    webPBgImg: 'img/allegiant-thumbnail.webp',
    link: 'https://www.allegiantair.com/',
    logo: 'img/allegiant-logo.svg',
    logoWidth: 96,
    logoHeight: 96 / 3,
    title: 'Flight Movement Management',
    subtitle: 'Allegiant Airlines',
    tags: 'Angular / RxJS / Html / Css / Karma / Jasmine / Cucumber',
    description: 'Flight Movement Management (FMM) is a web app crucial to the Operational Control Centre (OCC) in order to track, maintain, and modify flights.'
  }, {
    company: 'chapel',
    bgImg: 'img/chapel-thumbnail.png',
    webPBgImg: 'img/chapel-thumbnail.webp',
    link: 'https://www.littlechapel.com/',
    logo: 'img/cof-logo.png',
    logoWidth: 96,
    logoHeight: 96 * 0.75,
    title: 'Little Chapel',
    subtitle: 'Chapel of the Flowers',
    tags: 'AngularJS / .NET MVC / SQL / Html / Css / IIS',
    description: 'Little Chapel is an E-commerce website for wedding bookings. Chapel of the Flowers features three unique chapels on its Las Vegas Strip grounds.'
  }, {
    company: 'tropicana',
    bgImg: 'img/trop-thumbnail.png',
    webPBgImg: 'img/trop-thumbnail.webp',
    link: 'https://www.tropicanalvweddings.com/',
    logo: 'img/trop-logo.svg',
    logoWidth: 96,
    logoHeight: 96 / 3,
    title: 'Tropicana LV Weddings',
    subtitle: 'Chapel of the Flowers',
    tags: 'AngularJS / GulpJS / .NET WebAPI / SQL / Html / Css',
    description: 'Tropicana LV Weddings is an E-commerce website for wedding bookings, which offers several unique indoor and outdoor chapels at the Tropicana Las Vegas resort.'
  }, {
    company: 'pnw',
    bgImg: 'img/olas-thumbnail.png',
    webPBgImg: 'img/olas-thumbnail.webp',
    link: 'https://www.olasjobs.org/',
    logo: 'img/pnw-logo.png',
    logoWidth: 120,
    logoHeight: 120 / 4.7,
    title: 'Online Job Application System',
    subtitle: 'PNW BOCES',
    tags: 'AngularJS / GulpJS / .NET WebAPI / SQL / Html / Css',
    description: 'The Online Application System for K-12 Education (OLAS) is a cloud-based job application system serving schools & districts throughout New York State and surrounding areas.'
  }, {
    company: 'nitc',
    bgImg: 'img/vending-machine-img.jpg',
    webPBgImg: 'img/vending-machine-img.webp',
    link: 'pdf/RFID vending machine thesis.pdf',
    logo: 'img/nitc-logo.png',
    logoWidth: 80,
    logoHeight: 80 / 0.84,
    title: 'RFID Vending Machine',
    subtitle: 'Major Project | National Institute of Technology, Calicut',
    tags: 'Electrical / Electronics / Mechanical / Arduino / C++',
    description: 'Created a working prototype of an RFID vending machine that would allow students to buy items using their ID cards. Developed an understanding of secure authentication using an RFID reader. The software was developed in C++ on an Arduino board.'
  }, {
    company: 'nitc',
    bgImg: 'img/jammer-thumbnail.jpg',
    webPBgImg: 'img/jammer-thumbnail.webp',
    logo: 'img/nitc-logo.png',
    logoWidth: 80,
    logoHeight: 80 / 0.84,
    title: 'Mobile Phone Jammer',
    subtitle: 'Minor Project | National Institute of Technology, Calicut',
    tags: 'Electronics',
    description: 'Created a cost-effective mobile phone detector and jammer which could extend over an entire room intended to be used in examination halls.'
  },
    // {
    //   company: 'nitc',
    //   bgClass: 'img/line-following-robot.jpg',
    //   link: 'http://www.nitc.ac.in/',
    //   logo: 'img/nitc-logo.png',
    //   logoWidth: 80,
    //   logoHeight: 80 / 0.84,
    //   title: 'Line Following Robot',
    //   subtitle: 'Robotics Interest Group | National Institute of Technology, Calicut',
    //   tags: 'Electrical / Electronics / Arduino / C',
    //   description: 'The Online Application System for K-12 Education (OLAS) is a cloud-based job application system serving schools & districts throughout New York State and surrounding areas.'
    // }
  ];

  // Scroll to the element provided
  const scrollTo = (elem) => {
    const duration = Math.abs(elem.offset().top - $(window).scrollTop()) * (1 / 2);
    elem.navigate(duration > minScrollDuration ? duration : minScrollDuration);
  };

  // Add smooth scrolling to # routes
  $('a[href^="#"]').each(function () {
    $(this).on('click', function (e) {
      $('#nav-icon').removeClass('open');
      $('header').removeClass('open');
      e.preventDefault();
      const id = $(this).attr('href');
      const elem = $(id);

      if (elem.length) {
        scrollTo(elem);
      }
    });
  });

  $('#nav-icon').on('click', function () {
    $(this).toggleClass('open');
    $('header').toggleClass('open');
  });

  // Scroll to top of the page
  function scrollToTop() {
    if ($(this).scrollTop() > 300) {
      $('#scrollToTop').fadeIn();
    } else {
      $('#scrollToTop').fadeOut();
    }
  }

  $(window).on('scroll', scrollToTop);

  // Set the active nav link in the header
  function setActiveNav() {
    $('section').each(function () {
      const cutoff = $(window).scrollTop() + 2 * $('header').height();
      if ($(this).offset().top <= cutoff && $(this).offset().top + $(this).height() > cutoff) {
        const activeId = $(this).attr('id');
        $('#nav-links').find('a').each(function () {
          $(this).toggleClass('active', $(this).attr('id').replace('nav-', '') === activeId);
        });
      }
    });
  }

  $(window).on('scroll', setActiveNav);

  // Trigger scroll animatons
  function scrollAnimations() {
    // Calc current offset and get all animatables
    const bottomOffset = $(window).scrollTop() + $(window).height();
    const animatables = $('.animatable');

    // Unbind scroll handler if we have no animatables
    if (animatables.length === 0) {
      $(window).off('scroll', scrollAnimations);
    }

    // Check all animatables and animate them if necessary
    animatables.each(function () {
      const animatable = $(this);
      if ((animatable.offset().top + animatable.height() - 20) < bottomOffset || (animatable.offset().top + 120) < bottomOffset) {
        animatable.removeClass('animatable').addClass('animated');
      }
    });
  }

  $(window).on('scroll', scrollAnimations);

  $.each(skillGroups, function (index, skillGroup) {
    let skills = "";

    $.each(skillGroup.skills, function (index, skill) {
      skills += `<p class="skill-names">
        ${skill.name}
      </p>
      <div class="skill-bar-container">
        <div style="width: ${skill.level}%;" class="skill-bar animatable expand"></div>
      </div>`;
    });

    skillsHTML += `<div class="skill-group">
      <h3 class="group-heading">
        ${skillGroup.name}
      </h3>
      <div class="skill">
        ${skills}
      </div>
    </div>`;
  });

  $('#skills').html(skillsHTML);

  $.each(works, function (index, work) {
    workHTML += `<div class="timeline-item animatable fadeInUp" data-text="${work.timeline}">
      <div class="timeline-content">
        <h2 class="timeline-content-title">${work.role}</h2>
        ${work.isCompany ? `<h3 class="timeline-content-company">
          COMPANY -
          <a class="fancy-link" target="_blank" rel="noreferrer" href="${work.link}">${work.name} <i class="fas fa-external-link-alt"></i></a>
        </h3>
        <h4 class="timeline-content-client">
          CLIENT -
          <a class="fancy-link" target="_blank" rel="noreferrer" href="${work.clientLink}">${work.client} <i class="fas fa-external-link-alt"></i></a>
        </h4>` : `<h3 class="timeline-content-company">
          UNIVERSITY -
          <a class="fancy-link" target="_blank" rel="noreferrer" href="${work.link}">${work.name} <i class="fas fa-external-link-alt"></i></a>
        </h3>`}
        <p class="timeline-content-desc">${work.description}</p>
      </div>
    </div>`;
  });

  $('#timeline').html(workHTML);

  $.each(projects, function (index, project) {
    const bgImgExt = project.bgImg.substr(-3);
    projectsHTML += `<div class="col animatable fadeInUp">
      <picture>
        <source type="image/webp" data-srcset="${project.webPBgImg}">
        <source type="image/${bgImgExt === 'jpg' ? 'jpeg' : bgImgExt}" data-srcset="${project.bgImg}">
        <img class="bg-img lazyload" data-src="${project.bgImg}" width="240" height="264" alt="${project.title} thumbnail">
      </picture>
      <div class="project-info">
        <div class="logo text-right ${project.company}-logo" class="lazy-load">
          <img data-src="${project.logo}" class="lazyload" width="${project.logoWidth}" height="${project.logoHeight}" alt="${project.company} logo" />
        </div>
        <h2 class="project-title">
          ${project.title} 
          ${project.link ? `<a target="_blank" rel="noreferrer" href="${project.link}"><i class="fas fa-external-link-alt"></i></a>` : ''}
        </h2>
        <span class="project-subtitle">
          ${project.subtitle}
        </span>
        <p class="tags">
          <i class="fa fa-tag"></i>
          ${project.tags}
        </p>
        <span class="desc">
          ${project.description}
        </span>
      </div>
    </div>`;
  });

  $('#project-list').html(projectsHTML);

  // Trigger scroll initially in case user is not at the top of the page
  $(window).trigger('scroll');
});

function loadScript(src, attributes) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = src;

  if (attributes) {
    attributes.forEach(attribute => {
      script.setAttribute(attribute.attributeName, attribute.attributeValue || '');
    });
  }
  document.body.appendChild(script);
}

// Run of page load to trigger preloader
$(window).on('load', function () {
  $('.brand-container').addClass('loaded');
  $('.preloader').addClass('loaded');

  loadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAMzb5C3tCHtOBpxkraWbvYKAUQZjief5s&callback=initMap&libraries=&v=weekly', [{ attributeName: 'defer', attributeValue: 'defer' }])
  loadScript('https://use.fontawesome.com/releases/v5.15.1/js/all.js', [{ attributeName: 'data-auto-replace-svg', attributeValue: 'nest'}])
  loadScript('https://code.jquery.com/ui/1.12.1/jquery-ui.min.js', [{ attributeName: 'integrity', attributeValue: 'sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU='}, { attributeName: 'crossorigin', attributeValue: 'anonymous'}])

  setTimeout(() => {
    $('body').addClass('loaded');
  }, 1000);
});

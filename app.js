/**
 * Navigates to the element
 *
 */
$.fn.navigate = function (duration) {
  const elem = this
  const heightInRem = parseFloat(
    getComputedStyle(document.body).getPropertyValue("--header-height")
  )
  const heightInPx =
    parseFloat(getComputedStyle(document.documentElement).fontSize) *
    heightInRem

  $([document.documentElement, document.body]).animate(
    {
      scrollTop: elem.offset().top - heightInPx,
    },
    duration,
    "easeInOutCubic"
  )
}

$(function () {
  const minScrollDuration = 1000
  let skillsHTML = ""
  let workHTML = ""
  let projectsHTML = ""
  let hackathonsHTML = ""

  const skillGroups = [
    {
      name: "Languages",
      skills: [
        {
          name: "JavaScript / Typescript / HTML / CSS",
          level: "95",
        },
        {
          name: "Solidity / Python",
          level: "85",
        },
        {
          name: "Java / C / C# / C++ / PHP",
          level: "65",
        },
      ],
    },
    {
      name: "Frameworks & Libraries",
      skills: [
        {
          name: "Next / React / Angular / NodeJS",
          level: "90",
        },
        {
          name: "Ethers.js / Karma / Jasmine",
          level: "80",
        },
        {
          name: "jQuery / .NET MVC / WebAPI",
          level: "70",
        },
      ],
    },
    {
      name: "Database",
      skills: [
        {
          name: "MySQL / PostgreSQL / MongoDB",
          level: "85",
        },
        {
          name: "SQL Server",
          level: "75",
        },
        {
          name: "Stored procedures",
          level: "45",
        },
      ],
    },
    {
      name: "Web Servers & Tools",
      skills: [
        {
          name: "Git / Postman / Metamask",
          level: "95",
        },
        {
          name: "Apache / Nginx / Remix / IPFS",
          level: "80",
        },
        {
          name: "Hardhat / Truffle / Docker",
          level: "70",
        },
      ],
    },
  ]

  const works = [
    {
      timeline: "2024 - 2024",
      role: "Teaching Assistant",
      name: "NEW JERSEY INSTITUTE OF TECHNOLOGY",
      link: "https://www.njit.edu/",
      description: [
        "Teaching Assistant for two courses, facilitating weekly labs and recitations for over 90 students.",
        "Grading over 250 assignments, quizzes and exams, providing personalized feedback.",
        "Hosting office hours, contributing to improved comprehension and higher student engagement.",
      ],
    },
    {
      timeline: "2024 - 2024",
      role: "Full Stack Developer",
      name: "NJIT FINTECH LAB",
      link: "https://www.njit.edu/",
      description: [
        "Enhanced the FHWA (Federal Highway Administration) mobile app by implementing Bluetooth connectivity for vehicles, improving connection reliability by 30%.",
      ],
    },
    {
      timeline: "2023 - 2023",
      role: "Teaching Assistant",
      name: "NEW JERSEY INSTITUTE OF TECHNOLOGY",
      link: "https://www.njit.edu/",
      description: [
        "Developed 3 assignments for CS331 on relational algebra, SQL queries, triggers, and views, enhancing comprehension and engagement for over 50 students.",
      ],
    },
    {
      timeline: "2023 - 2024",
      role: "COMPUTER SCIENCE, M.S.",
      isCompany: false,
      name: "NEW JERSEY INSTITUTE OF TECHNOLOGY",
      grade: "GPA - 3.61",
      link: "https://www.njit.edu/",
      description: [
        "Winner of the ACM Battlesnake hackathon.",
      ],
    },
    {
      timeline: "2021 - 2022",
      role: "FULL STACK WEB3 DEVELOPER",
      name: "SELF-EMPLOYED",
      description: [
        "Collaborating on a decentralized crowdfunding dApp for borderless donations using selected stablecoins and smart contracts.",
        "Implementing The Graph for blockchain data querying and Infura for smart contract communication.",
        "Explored cross-chain communication with Axelar network and decentralized cloud options like Akash Network.",
      ],
    },
    {
      timeline: "2019 - 2021",
      role: "DEVELOPMENT LEAD",
      isCompany: true,
      name: "PEOPLE10 TECHNOSOFT PVT. LTD.",
      link: "https://www.people10.com/",
      client: ["ALLEGIANT AIRLINES"],
      clientLink: ["https://www.allegiantair.com/"],
      description: [
        "Orchestrated design and maintenance of Allegiant Air's Flight Movement Management (FMM), a vital Angular web app supporting the Operational Control Centre (OCC) in flight tracking and management.",
        "Attained over 90% unit test coverage and implemented robust security measures, including Fortify.",
        "Drastically improved user experience with a ~120% boost in UI performance, accomplished through server-side rendering, lazy loading, and virtual scrolling.",
        "Revolutionized development workflows, reducing build times by a remarkable ~650% through innovative unit test enhancements.",
      ],
    },
    {
      timeline: "2018 - 2019",
      role: "SENIOR SOFTWARE ENG.",
      isCompany: true,
      name: "PEOPLE10 TECHNOSOFT PVT. LTD.",
      link: "https://www.people10.com/",
      client: ["CHAPEL OF THE FLOWERS"],
      clientLink: ["https://www.littlechapel.com/"],
      description: [
        "Led full-stack migration of a closed user group hotel booking website for wedding guests, moving from .NET WebAPI, CodeIgniter, and jQuery to .NET WebAPI 2.0 and Angular 8 in just three months, exceeding initial estimates.",
        "Innovatively introduced and crafted the frontend for split payment functionality for users to divide transactions across multiple cards, enhancing flexibility.",
        "Implemented and designed the frontend for scheduled payments (EMI) and incorporated a secure saved card feature, ensuring full compliance with PCI standards. This not only improved the payment experience but also bolstered data security.",
      ],
    },
    {
      timeline: "2016 - 2018",
      role: "SOFTWARE ENG.",
      isCompany: true,
      name: "PEOPLE10 TECHNOSOFT PVT. LTD.",
      link: "https://www.people10.com/",
      client: ["PNW BOCES", "OLAS"],
      clientLink: ["https://www.pnwboces.org/", "https://www.olasjobs.org/"],
      description: [
        "Managed 11 domains for Chapel of the Flowers, overseeing their maintenance and operation. Leveraged a diverse tech stack, including AngularJS, Angular 2+, .NET MVC, .NET WebAPI, PHP, and MySQL.",
        "Spearheaded the development of <a class='fancy-link' target='_blank' rel='noreferrer' href='https://www.olasjobs.org/'>OLAS <i class='fas fa-external-link-alt'></i></a>, a dynamic online job application system tailored for educators. The project was powered by the seamless synergy of AngularJS and .NET WebAPI, providing an efficient and user-friendly solution for educators and districts alike.",
      ],
    },
    {
      timeline: "2012 - 2016",
      role: "ELECTRICAL & ELECTRONICS ENG., B.Tech.",
      isCompany: false,
      name: "NATIONAL INSTITUTE OF TECHNOLOGY, CALICUT",
      grade: "Grade - First Class",
      link: "http://www.nitc.ac.in/",
      description: [
        "Served as the Senior Executive of the Media Committee for Tathva, the technical festival, and Ragam, the cultural festival, both hosted at the National Institute of Technology, Calicut.",
        "Competed in college football and table tennis.",
      ],
    },
  ]

  const projects = [
    {
      company: "allegiant",
      bgImg: "img/alegiant-thumbnail.jpg",
      webPBgImg: "img/allegiant-thumbnail.webp",
      link: "https://www.allegiantair.com/",
      logo: "img/allegiant-logo.svg",
      logoWidth: 96,
      logoHeight: 96 / 3,
      title: "Flight Movement Management",
      subtitle: "Allegiant Airlines",
      tags: "Angular / RxJS / Html / Css / Karma / Jasmine / Cucumber",
      description:
        "Flight Movement Management (FMM) is an indispensable web application that enables flight tracking, maintenance, and modifications at the Operational Control Centre (OCC).",
    },
    {
      company: "chapel",
      bgImg: "img/chapel-thumbnail.png",
      webPBgImg: "img/chapel-thumbnail.webp",
      link: "https://www.littlechapel.com/",
      logo: "img/cof-logo.png",
      logoWidth: 96,
      logoHeight: 96 * 0.75,
      title: "Little Chapel",
      subtitle: "Chapel of the Flowers",
      tags: "AngularJS / .NET MVC / SQL / Html / Css / IIS",
      description:
        "Little Chapel, an E-commerce platform for wedding bookings, showcases the three distinct chapels located on the grounds of Chapel of the Flowers in Las Vegas.",
    },
    {
      company: "tropicana",
      bgImg: "img/trop-thumbnail.png",
      webPBgImg: "img/trop-thumbnail.webp",
      link: "https://www.tropicanalvweddings.com/",
      logo: "img/trop-logo.svg",
      logoWidth: 96,
      logoHeight: 96 / 3,
      title: "Tropicana LV Weddings",
      subtitle: "Chapel of the Flowers",
      tags: "AngularJS / GulpJS / .NET WebAPI / SQL / Html / Css",
      description:
        "Tropicana LV Weddings, an E-commerce platform for wedding bookings, features a variety of distinctive indoor and outdoor chapels set within the Tropicana Las Vegas resort.",
    },
    {
      company: "pnw",
      bgImg: "img/olas-thumbnail.png",
      webPBgImg: "img/olas-thumbnail.webp",
      link: "https://www.olasjobs.org/",
      logo: "img/pnw-logo.png",
      logoWidth: 120,
      logoHeight: 120 / 4.7,
      title: "Online Job Application System",
      subtitle: "PNW BOCES",
      tags: "AngularJS / GulpJS / .NET WebAPI / SQL / Html / Css",
      description:
        "The Online Application System for K-12 Education (OLAS) is a cloud-based job application platform serving schools and districts in New York State and the surrounding areas.",
    },
    {
      company: "nitc",
      bgImg: "img/vending-machine-img.jpg",
      webPBgImg: "img/vending-machine-img.webp",
      link: "pdf/RFID_vending_machine_thesis.pdf",
      logo: "img/nitc-logo.png",
      logoWidth: 80,
      logoHeight: 80 / 0.84,
      title: "RFID Vending Machine",
      subtitle: "Major Project | National Institute of Technology, Calicut",
      tags: "Electrical / Electronics / Mechanical / Arduino / C++",
      description:
        "Engineered a functional prototype of an RFID vending machine, enabling students to make purchases using their ID cards. Gained expertise in secure authentication through RFID reader technology. The software was meticulously crafted in C++ on an Arduino board.",
    },
    {
      company: "nitc",
      bgImg: "img/jammer-thumbnail.jpg",
      webPBgImg: "img/jammer-thumbnail.webp",
      link: "pdf/phone_jammer_and_detector.pdf",
      logo: "img/nitc-logo.png",
      logoWidth: 80,
      logoHeight: 80 / 0.84,
      title: "Mobile Phone Jammer",
      subtitle: "Minor Project | National Institute of Technology, Calicut",
      tags: "Electronics",
      description:
        "Designed a budget-friendly mobile phone detector and jammer with the capability to cover an entire room, specifically tailored for use in examination halls.",
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
  ]

  const hackathons = [
    {
      host: "ethonline",
      bgImg: "img/the-registry-thumbnail.jpg",
      webPBgImg: "img/the-registry-thumbnail.webp",
      link: "https://the-registry.vercel.app/",
      showcaseLink: "https://ethglobal.com/showcase/theregistry-fj5rt/",
      githubLink: "https://github.com/nashidahmed/registry-interface",
      logo: "img/ethonline-logo.svg",
      logoWidth: 120,
      logoHeight: 120 / 3,
      title: "The Registry",
      subtitle: "ETHOnline 2023",
      tags: "Next / Solidity / Typescript / SQL",
      description:
        "The Registry is a blockchain-based decentralized application that enables Issuers to securely issue and trace digital documents to Users, improving authenticity and accessibility while simplifying the process, all in a gasless and user-friendly manner.",
    },
    {
      host: "ethglobalny",
      bgImg: "img/desavings-thumbnail.jpg",
      webPBgImg: "img/desavings-thumbnail.webp",
      link: "https://desavings.vercel.app/",
      showcaseLink: "https://ethglobal.com/showcase/desavings-hxno2/",
      githubLink: "https://github.com/nashidahmed/desavings-interface",
      logo: "img/ethglobalny-logo.svg",
      logoWidth: 96,
      logoHeight: 96 / 3,
      title: "DeSavings",
      subtitle: "ETHGlobal New York 2023",
      tags: "Next / Solidity / Typescript / GraphQL",
      description:
        "DeSavings introduces a decentralized application that offers users the power to seamlessly automate their personal savings plans and efficiently manage their organization's treasury, all in one place. Through the integration of smart contracts, Chainlink automation, and Ethereum Name Service (ENS), DeSavings empowers users with a wide range of financial possibilities.",
    },
    {
      host: "battlesnake",
      bgImg: "img/battlesnake-thumbnail.png",
      webPBgImg: "img/battlesnake-thumbnail.webp",
      link: "https://play.battlesnake.com/",
      githubLink: "https://github.com/nashidahmed/battlesnake",
      logo: "img/battlesnake-logo.png",
      logoWidth: 80 / 1.55,
      logoHeight: 80,
      title: "Python Battlesnake",
      subtitle: "Battlesnake",
      tags: "Python / A*",
      description:
        "Battlesnake is an autonomous survival game played by web developers around the world. Achieved 1st place in a Battlesnake hackathon.",
    },
  ]

  let matcher = window.matchMedia("(prefers-color-scheme: dark)")
  let lightSchemeIcon = document.querySelector("link#light-scheme-icon")
  let darkSchemeIcon = document.querySelector("link#dark-scheme-icon")

  function onUpdate() {
    if (matcher.matches) {
      lightSchemeIcon.remove()
      document.head.append(darkSchemeIcon)
    } else {
      document.head.append(lightSchemeIcon)
      darkSchemeIcon.remove()
    }
  }

  onUpdate()

  matcher.addEventListener("change", () => {
    onUpdate()
  })

  // Scroll to the element provided
  const scrollTo = (elem) => {
    const duration =
      Math.abs(elem.offset().top - $(window).scrollTop()) * (1 / 2)
    elem.navigate(duration > minScrollDuration ? duration : minScrollDuration)
  }

  // Add smooth scrolling to # routes
  $('a[href^="#"]').each(function () {
    $(this).on("click", function (e) {
      $("#nav-icon").removeClass("open")
      $("header").removeClass("open")
      e.preventDefault()
      const id = $(this).attr("href")
      const elem = $(id)

      if (elem.length) {
        scrollTo(elem)
      }
    })
  })

  $("#nav-icon").on("click", function () {
    $(this).toggleClass("open")
    $("header").toggleClass("open")
  })

  // Scroll to top of the page
  function scrollToTop() {
    if ($(this).scrollTop() > 300) {
      $("#scrollToTop").fadeIn()
    } else {
      $("#scrollToTop").fadeOut()
    }
  }

  $(window).on("scroll", scrollToTop)

  // Set the active nav link in the header
  function setActiveNav() {
    $("section").each(function () {
      const cutoff = $(window).scrollTop() + 2 * $("header").height()
      if (
        $(this).offset().top <= cutoff &&
        $(this).offset().top + $(this).height() > cutoff
      ) {
        const activeId = $(this).attr("id")
        $("#nav-links")
          .find("a")
          .each(function () {
            $(this).toggleClass(
              "active",
              $(this).attr("id").replace("nav-", "") === activeId
            )
          })
      }
    })
  }

  $(window).on("scroll", setActiveNav)

  function resetAnimations() {
    const animated = $(".animated")

    animated.each(function () {
      const animatable = $(this)
      animatable.removeClass("animated").addClass("animatable")
    })
  }

  // Trigger scroll animatons
  function scrollAnimations() {
    // Calc current offset and get all animatables
    const bottomOffset = $(window).scrollTop() + $(window).height()
    const animatables = $(".animatable")

    // Reset animations if user scrolls to top of the page
    if (!$(window).scrollTop()) {
      resetAnimations()
    }

    // Check all animatables and animate them if necessary
    animatables.each(function () {
      const animatable = $(this)
      if (
        animatable.offset().top + animatable.height() - 20 < bottomOffset ||
        animatable.offset().top + 120 < bottomOffset
      ) {
        animatable.removeClass("animatable").addClass("animated")
      }
    })
  }

  $(window).on("scroll", scrollAnimations)

  $.each(skillGroups, function (index, skillGroup) {
    let skills = ""

    $.each(skillGroup.skills, function (index, skill) {
      skills += `<p class="skill-names">
        ${skill.name}
      </p>
      <div class="skill-bar-container">
        <div style="width: ${skill.level}%;" class="skill-bar animatable expand"></div>
      </div>`
    })

    skillsHTML += `<div class="skill-group">
      <h3 class="group-heading">
        ${skillGroup.name}
      </h3>
      <div class="skill">
        ${skills}
      </div>
    </div>`
  })

  $("#skills").html(skillsHTML)

  $.each(works, function (index, work) {
    workHTML += `<div class="timeline-item animatable fadeInUp" data-text="${
      work.timeline
    }">
      <div class="timeline-content">
        <h2 class="timeline-content-title">${work.role.toUpperCase()}</h2>
        ${
          work.isCompany !== undefined
            ? work.isCompany
              ? `<h3 class="timeline-content-company">
            COMPANY -
            <a class="fancy-link" target="_blank" rel="noreferrer" href="${
              work.link
            }">${work.name} <i class="fas fa-external-link-alt"></i></a>
          </h3>
          <h4 class="timeline-content-client">
            ${work.client.length > 1 ? "CLIENTS" : "CLIENT"} - ${work.client
                  .map(
                    (client, index) =>
                      `<a class="fancy-link" target="_blank" rel="noreferrer" href="${work.clientLink[index]}">${client} <i class="fas fa-external-link-alt"></i></a>`
                  )
                  .join(", ")}
          </h4>`
              : `<h3 class="timeline-content-company">
            UNIVERSITY -
            <a class="fancy-link" target="_blank" rel="noreferrer" href="${work.link}">${work.name} <i class="fas fa-external-link-alt"></i></a>
          </h3>`
            : `<h3 class="timeline-content-company">
            ${work.name}
          </h3>`
        }
        ${
          work.isCompany === false
            ? `<h4 class="timeline-content-client">${work.grade}</h4>`
            : ""
        }
        <ul class="timeline-content-desc">${work.description
          .map((desc) => `<li>${desc}</li>`)
          .join("")}</ul>
      </div>
    </div>`
  })

  $("#timeline").html(workHTML)

  $.each(projects, function (index, project) {
    const bgImgExt = project.bgImg.substr(-3)
    projectsHTML += `<div class="col animatable fadeInUp">
      <picture>
        <source type="image/webp" data-srcset="${project.webPBgImg}">
        <source type="image/${
          bgImgExt === "jpg" ? "jpeg" : bgImgExt
        }" data-srcset="${project.bgImg}">
        <img class="bg-img lazyload" data-src="${
          project.bgImg
        }" width="240" height="264" alt="${project.title} thumbnail">
      </picture>
      <div class="project-info">
        <div class="logo text-right ${project.company}-logo" class="lazy-load">
          <img data-src="${project.logo}" class="lazyload" width="${
      project.logoWidth
    }" height="${project.logoHeight}" alt="${project.company} logo" />
        </div>
        <h2 class="project-title">
          ${project.title} 
          ${
            project.link
              ? `<a target="_blank" rel="noreferrer" href="${project.link}"><i class="fas fa-external-link-alt"></i></a>`
              : ""
          }
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
    </div>`
  })

  $("#project-list").html(projectsHTML)

  $.each(hackathons, function (index, hackathon) {
    const bgImgExt = hackathon.bgImg.substr(-3)
    hackathonsHTML += `<div class="col animatable fadeInUp">
      <picture>
        <source type="image/webp" data-srcset="${hackathon.webPBgImg}">
        <source type="image/${
          bgImgExt === "jpg" ? "jpeg" : bgImgExt
        }" data-srcset="${hackathon.bgImg}">
        <img class="bg-img lazyload" data-src="${
          hackathon.bgImg
        }" width="240" height="264" alt="${hackathon.title} thumbnail">
      </picture>
      <div class="hackathon-info">
        <div class="logo text-right ${hackathon.host}-logo" class="lazy-load">
          <img data-src="${hackathon.logo}" class="lazyload" width="${
      hackathon.logoWidth
    }" height="${hackathon.logoHeight}" alt="${hackathon.host} logo" />
        </div>
        <h2 class="hackathon-title">
          ${hackathon.title} 
          ${
            hackathon.link
              ? `<a target="_blank" rel="noreferrer" href="${hackathon.link}"><i class="fas fa-external-link-alt"></i></a>`
              : ""
          }
        </h2>
        ${
          hackathon.showcaseLink
            ? `<h3 class="hackathon-showcase">
            Showcase
            ${
              hackathon.showcaseLink
                ? `<a target="_blank" rel="noreferrer" href="${hackathon.showcaseLink}"><i class="fas fa-external-link-alt"></i></a>`
                : ""
            }
          </h3>`
            : ""
        }
        <h3 class="hackathon-github">
          Github repo
          ${
            hackathon.githubLink
              ? `<a target="_blank" rel="noreferrer" href="${hackathon.githubLink}"><i class="fas fa-external-link-alt"></i></a>`
              : ""
          }
        </h3>
        <span class="hackathon-subtitle">
          ${hackathon.subtitle}
        </span>
        <p class="tags">
          <i class="fa fa-tag"></i>
          ${hackathon.tags}
        </p>
        <span class="desc">
          ${hackathon.description}
        </span>
      </div>
    </div>`
  })

  $("#hackathon-list").html(hackathonsHTML)

  // Trigger scroll initially in case user is not at the top of the page
  $(window).trigger("scroll")
})

function loadScript(src, attributes) {
  var script = document.createElement("script")
  script.type = "text/javascript"
  script.src = src

  if (attributes) {
    attributes.forEach((attribute) => {
      script.setAttribute(
        attribute.attributeName,
        attribute.attributeValue || ""
      )
    })
  }
  document.body.appendChild(script)
}

// Get form elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-message');

// Function to validate email format
function isValidEmail(email) {
  // Simple regex for email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate a single field
function validateField(input) {
  const value = input.value.trim();

  // Handle validation for each field independently
  if (input.id === 'name') {
    input.style.outline = value === '' ? '1px solid red' : '';
  } else if (input.id === 'email') {
    input.style.outline = value === '' || !isValidEmail(value) ? '1px solid red' : '';
  } else if (input.id === 'message') {
    input.style.outline = value === '' ? '1px solid red' : '';
  }
}

// Function to check if the entire form is valid
function checkFormValidity() {
  const isNameValid = nameInput.value.trim() !== '';
  const isEmailValid = emailInput.value.trim() !== '' && isValidEmail(emailInput.value.trim());
  const isMessageValid = messageInput.value.trim() !== '';

  sendButton.disabled = !(isNameValid && isEmailValid && isMessageValid);
}

// Attach event listeners to each input field
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('input', () => {
    validateField(input); // Validate the field being changed
    checkFormValidity(); // Check if the form as a whole is valid
  });
});

// Run of page load to trigger preloader
$(window).on("load", function () {
  $(".preloader").addClass("loaded")

  loadScript(
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/js/all.min.js",
    [{ attributeName: "data-auto-replace-svg", attributeValue: "nest" }]
  )
  loadScript("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", [
    {
      attributeName: "integrity",
      attributeValue: "sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU=",
    },
    { attributeName: "crossorigin", attributeValue: "anonymous" },
  ])

  setTimeout(() => {
    $("body").addClass("loaded")
  }, 1000)
})

$(document).on("click", function (event) {
  if (!$(event.target).closest("header").length) {
    $("#nav-icon").removeClass("open")
    $("header").removeClass("open")
  }
})

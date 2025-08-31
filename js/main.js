
    const translations = {
      en: {
        quickLink: "QUICK LINK",
        eswg: "ESWG",
        forum: "Forum",
        affiliates: "Affiliates",
        platform: "Electrification Platform",
        stakeholders: "Stakeholders",
        grm: "GRM",
        jobs: "Jobs",
        home: "Home",
        about: "About",
        departments: "Departments",
        projects: "Projects",
        resources: "Resources",
        media: "Media",
        contact: "Contact",
        dashboard: "WSCF Dashboard",
        menu: "Menu"
      },
      so: {
        quickLink: "XIRIIR DEGDEG AH",
        eswg: "ESWG",
        forum: "Golaha",
        affiliates: "La-hawlgalayaasha",
        platform: "Madasha Korontada",
        stakeholders: "Dadka Saamileyda ah",
        grm: "GRM",
        jobs: "Shaqooyin",
        home: "Bogga Hore",
        about: "Nagu Saabsan",
        departments: "Waaxyaha",
        projects: "Mashruucyada",
        resources: "Khayraadka",
        media: "Warbaahinta",
        contact: "Nala Soo Xiriir",
        dashboard: "WSCF Dashboard",
        menu: "Menu"
      }
    };

    function setLanguage(lang) {
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
          el.textContent = translations[lang][key];
        }
      });
    }

    // Mobile Menu Toggle
    const btn = document.getElementById("menu-btn");
    const menu = document.getElementById("mobile-menu");
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });



    // 

  const translations2 = {
    en: {
      missionStatement: "Our mission is to ensure sustainable energy access and secure water resources for all Somalis.",
      discover: "Discover More",
      vision: "Vision",
      visionText: "The MoEWR is mandated for the development of energy and water resources for national prosperity.",
      mission: "Mission",
      missionText: "Strive to provide reliable, adequate, and accessible clean energy and water resources with quality services to society.",
      value: "Value",
      valueText: "Ensure and maintain high standards in the discharge of responsibilities and the delivery of services.",
      details: "More Details"
    },
    so: {
      missionStatement: "Himiladayadu waa inaan hubinno helitaanka tamar waarta iyo biyo ammaan ah dhammaan dadka Soomaaliyeed.",
      discover: "Ogow Dheeraad",
      vision: "Aragti",
      visionText: "MoEWR waxaa loo igmaday horumarinta tamarta iyo khayraadka biyaha si loogu guuleysto qaranimo.",
      mission: "Hawlgal",
      missionText: "U dadaal bixinta tamar iyo biyo nadiif ah oo lagu kalsoonaan karo, ku filan, oo la heli karo iyadoo la siinayo adeeg tayo leh bulshada.",
      value: "Qiime",
      valueText: "Hubi oo ilaali heerar sare oo ah masuuliyad iyo bixinta adeegyada.",
      details: "Faahfaahin Dheeraad"
    }
  };

  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (translations2[lang] && translations2[lang][key]) {
        el.textContent = translations2[lang][key];
      }
    });
  }


  ///
  
    // const observer = new IntersectionObserver((entries) => {
    //   entries.forEach(entry => {
    //     if (entry.isIntersecting) {
    //       entry.target.classList.remove("opacity-0","translate-y-6","scale-95");
    //       entry.target.classList.add("opacity-100","translate-y-0","scale-100");
    //       observer.unobserve(entry.target);
    //     }
    //   });
    // }, { threshold: 0.15 });

    // document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));



    // 
    
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Trigger animation by swapping Tailwind classes
        entry.target.classList.remove("opacity-0","translate-y-6","scale-95");
        entry.target.classList.add("opacity-100","translate-y-0","scale-100",
                                   "transition-all","duration-[900ms]",
                                   "ease-[cubic-bezier(0.22,0.7,0,0.9)]");
        observer.unobserve(entry.target); // run once
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll("[data-animate]").forEach(el => observer.observe(el));




//   

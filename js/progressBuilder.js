var progressGallery = {
  "Legion": [
      {
        "raidName": "Antorus, the Burning Throne",
        "carouselClass": "atbt",
        "progress": "11/11 HC",
        "encounters": [
        {
          "bossName": "Argus the Unmaker",
          "difficulty": "Heroic",
          "date": "04.03.2018",
          "image": "images/progress/legion/atbt/atbt-hc-11-large.jpg"
        },
        {
          "bossName": "Aggramar",
          "difficulty": "Heroic",
          "date": "04.03.2018",
          "image": "images/progress/legion/atbt/atbt-hc-10-large.jpg"
        },
        {
          "bossName": "The Coven of Shivarra",
          "difficulty": "Heroic",
          "date": "30.01.2018",
          "image": "images/progress/legion/atbt/atbt-hc-09-large.jpg"
        },
        {
          "bossName": "Varimathras",
          "difficulty": "Heroic",
          "date": "16.01.2018",
          "image": "images/progress/legion/atbt/atbt-hc-08-large.jpg"
        },
        {
          "bossName": "Kin'garoth",
          "difficulty": "Heroic",
          "date": "02.01.2018",
          "image": "images/progress/legion/atbt/atbt-hc-07-large.jpg"
        },
        {
          "bossName": "Eonar the Life-Binder",
          "difficulty": "Heroic",
          "date": "17.12.2017",
          "image": "images/progress/legion/atbt/atbt-hc-05-large.jpg"
        },
        {
          "bossName": "Portal Keeper Hasabel",
          "difficulty": "Heroic",
          "date": "17.12.2017",
          "image": "images/progress/legion/atbt/atbt-hc-04-large.jpg"
        },
        {
          "bossName": "Antoran High Command",
          "difficulty": "Heroic",
          "date": "17.12.2017",
          "image": "images/progress/legion/atbt/atbt-hc-03-large.jpg"
        }
      ]
    },
    {
      "raidName": "Tomb of Sargeras",
      "carouselClass": "tos",
      "progress": "9/9 HC",
      "encounters": [
        {
          "bossName": "Kil'jaeden",
          "difficulty": "Heroic",
          "date": "03.10.2017",
          "image": "images/progress/legion/tos/tos-hc-09-large.jpg"
        },
        {
          "bossName": "Fallen Avatar",
          "difficulty": "Heroic",
          "date": "19.09.2017",
          "image": "images/progress/legion/tos/tos-hc-08-large.jpg"
        },
        {
          "bossName": "Desolate Host",
          "difficulty": "Heroic",
          "date": "24.08.2017",
          "image": "images/progress/legion/tos/tos-hc-07-large.jpg"
        },
        {
          "bossName": "Mistress Sassz'ine",
          "difficulty": "Heroic",
          "date": "22.08.2017",
          "image": "images/progress/legion/tos/tos-hc-06-large.jpg"
        },
        {
          "bossName": "Maiden of Vigilance",
          "difficulty": "Heroic",
          "date": "12.08.2017",
          "image": "images/progress/legion/tos/tos-hc-05-large.jpg"
        },
        {
          "bossName": "Sisters of the Moon",
          "difficulty": "Heroic",
          "date": "01.08.2017",
          "image": "images/progress/legion/tos/tos-hc-04-large.jpg"
        },
        {
          "bossName": "Demonic Inquisition",
          "difficulty": "Heroic",
          "date": "25.07.2017",
          "image": "images/progress/legion/tos/tos-hc-03-large.jpg"
        },
        {
          "bossName": "Harjatan",
          "difficulty": "Heroic",
          "date": "15.07.2017",
          "image": "images/progress/legion/tos/tos-hc-02-large.jpg"
        },
        {
          "bossName": "Goroth",
          "difficulty": "Heroic",
          "date": "11.07.2017",
          "image": "images/progress/legion/tos/tos-hc-01-large.jpg"
        },
        {
          "bossName": "Kil'jaeden",
          "difficulty": "Normal",
          "date": "04.07.2017",
          "image": "images/progress/legion/tos/tos-n-09-large.jpg"
        },
      ]
    }

  ],
  "display": function() {
    progressGallery.Legion.forEach(function(raid) {
      $("#gallery").append(HTMLprogressStart);
      var formattedProgressMiniSlideshow = HTMLprogressMiniSlideshow;
      $(".gallery-entry:last").append(formattedProgressMiniSlideshow);
      var formattedCarouselClass = HTMLprogressSlide.replace("%carousel-class%", raid.carouselClass);
      var formattedProgressMiniSlideshowName = HTMLprogressMiniSlideshowName.replace("%gallery-name%", raid.raidName);
      $(".mini-slideshow-entry:last").append(formattedProgressMiniSlideshowName);
      raid.encounters.forEach(function(encounter) {
        var formattedProgressSlide = formattedCarouselClass.replace("%mini-slideshow-photo%", encounter.image);
        $(".mini-slideshow-entry:last").append(formattedProgressSlide);
      });
      var formattedProgressKills = HTMLprogressKills.replace("%kills%", raid.progress);
      $(".mini-slideshow-entry:last").append(formattedProgressKills);
    });
  }
};

progressGallery.display();

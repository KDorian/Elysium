var tos = {
  "progress": ["9/9", "7/9", "0/9"],
      "heroic": [
        {
          "bossName": "Desolate Host",
          "url": "images/tos/tos-heroic-07.jpg",
          "date": "24.08.17",
          "description": "Opis killa"
        },
        {
          "bossName": "Mistress Sassz'ine",
          "url": "images/tos/tos-heroic-06.jpg",
          "date": "22.08.17",
          "description": "Opis killa"
        },
        {
          "bossName": "Maiden of Vigilance",
          "url": "images/tos/tos-heroic-05.jpg",
          "date": "12.08.17",
          "description": "Opis killa"
        },
        {
          "bossName": "Sisters of the Moon",
          "url": "images/tos/tos-heroic-04.jpg",
          "date": "01.08.17",
          "description": "Opis killa"
        },
        {
          "bossName": "Demonic Inquisition",
          "url": "images/tos/tos-heroic-03.jpg",
          "date": "25.07.17",
          "description": "Opis killa"
         },
         {
          "bossName": "Harjatan",
          "url": "images/tos/tos-heroic-02.jpg",
          "date": "16.07.17",
          "description": "Opis killa"
        },
        {
          "bossName": "Goroth",
          "url": "images/tos/tos-heroic-01.jpg",
          "date": "11.07.17",
          "description": "Opis killa"
        }
      ],
      "normal": [
        {
          "bossName": "Kil'jeaden",
          "url": "images/tos/tos-normal-09.jpg",
          "date": "04.07.17",
          "description": "Opis killa"
        }
],
"display": function() {
    tos.heroic.forEach(function(kill) {
      $("#tos-heroic").append(HTMLtosKillStart);
      var formattedKillName = HTMLkillNameDate.replace("%bossName%", kill.bossName).replace("%date%", kill.date);
      var formattedKillUrl = HTMLkillUrl.replace("%data%", kill.url).replace("%alt%", kill.bossName);
      var formattedKillDescription = HTMLkillDescription.replace("%data%", kill.description);
      $(".kill-entry:last").append(formattedKillName, formattedKillUrl, formattedKillDescription);
    });
    tos.normal.forEach(function(kill) {
      $("#tos-normal").append(HTMLtosKillStart);
      var formattedKillName = HTMLkillNameDate.replace("%bossName%", kill.bossName).replace("%date%", kill.date);
      var formattedKillUrl = HTMLkillUrl.replace("%data%", kill.url).replace("%alt%", kill.bossName);
      var formattedKillDescription = HTMLkillDescription.replace("%data%", kill.description);
      $(".kill-entry:last").append(formattedKillName, formattedKillUrl, formattedKillDescription);
    });
  }
};

var nh = {
  "progress": ["10/10", "10/10", "2/10"],
  "mythic": [
      {
        "bossName": "Chronomatic Anomaly",
        "url": "images/tos/tos-mythic-02.jpg",
        "date": "12.08.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Skorpyron",
        "url": "images/tos/tos-mythic-01.jpg",
        "date": "12.08.17",
        "description": "Opis killa"
      },
  ],
  "heroic": [
      {
        "bossName": "Gul'dan",
        "url": "images/nh/nh-heroic-10.jpg",
        "date": "21.03.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Grand Migistrix Elisandre",
        "url": "images/nh/nh-heroic-9.jpg",
        "date": "28.02.17",
        "description": "Opis killa"
      },
      {
        "bossName": "High Botanist Tel'arm",
        "url": "images/nh/nh-heroic-8.jpg",
        "date": "18.02.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Star Augur Etraeus",
        "url": "images/nh/nh-heroic-7.jpg",
        "date": "13.02.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Tichondrius",
        "url": "images/nh/nh-heroic-6.jpg",
        "date": "11.02.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Spellblade Aluriel",
        "url": "images/nh/nh-heroic-5.jpg",
        "date": "07.02.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Krosus",
        "url": "images/nh/nh-heroic-4.jpg",
        "date": "04.02.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Trillax",
        "url": "images/nh/nh-heroic-3.jpg",
        "date": "28.01.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Chronomatic Anomaly",
        "url": "images/nh/nh-heroic-2.jpg",
        "date": "28.01.17",
        "description": "Opis killa"
      },
      {
        "bossName": "Skorpyron",
        "url": "images/nh/nh-heroic-1.jpg",
        "date": "24.01.17",
        "description": "Opis killa"
      }
      ],
      "normal": [
        {
          "bossName": "Gul'dan",
          "url": "images/nh/nh-normal-10.jpg",
          "date": "24.01.17",
          "description": "Opis killa"
        },
        {
          "bossName": "Grand Migistrix Elisandre",
          "url": "images/nh/nh-normal-9.jpg",
          "date": "21.01.17",
          "description": "Opis killa"
        },
        {
          "bossName": "High Botanist Tel'arm",
          "url": "images/nh/nh-normal-8.jpg",
          "date": "21.01.17",
          "description": "Opis killa"
        },
        {
          "bossName": "Star Augur Etraeus",
          "url": "images/nh/nh-normal-7.jpg",
          "date": "19.01.17",
          "description": "Opis killa"
        }
      ],
};

var tov = {
  "progress": ["3/3", "3/3", "0/3"],
  "heroic": [
    {
      "bossName": "Helya",
      "url": "images/tov/tov-heroic-03.jpg",
      "date": "14.01.17",
      "description": "Opis killa"
    },
    {
      "bossName": "Guarm",
      "url": "images/tov/tov-heroic-02.jpg",
      "date": "27.12.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Odyn",
      "url": "images/tov/tov-heroic-01.jpg",
      "date": "21.12.16",
      "description": "Opis killa"
    }
  ],
  "normal": [
    {
      "bossName": "Helya",
      "url": "images/tov/tov-normal-03.jpg",
      "date": "12.11.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Guarm",
      "url": "images/tov/tov-normal-02.jpg",
      "date": "09.11.16",
      "description": "brak fotki po killu, fotka na dole tuż przed first killowym pullem"
    },
    {
      "bossName": "Odyn",
      "url": "images/tov/tov-normal-01.jpg",
      "date": "09.11.16",
      "description": "Opis killa"
    }
  ]
};

var en = {
  "progress": ["7/7", "7/7", "5/7"],
  "mythic": [
    {
      "bossName": "Il'gynoth",
      "url": "images/en/en-mythic-05.jpg",
      "date": "05.03.17",
      "description": "Opis killa"
    },
    {
      "bossName": "Elerethe Renferal",
      "url": "images/en/en-mythic-04.jpg",
      "date": "26.02.17",
      "description": "Opis killa"
    },
    {
      "bossName": "Nythendra",
      "url": "images/en/en-mythic-01.jpg",
      "date": "23.02.17",
      "description": "Opis killa"
    }
  ],
  "heroic": [
    {
      "bossName": "Xavius",
      "url": "images/en/en-heroic-07.jpg",
      "date": "25.10.16",
      "description": "https://www.youtube.com/watch?v=RtF5iz8DTN8"
    },
    {
      "bossName": "Cenarius",
      "url": "images/en/en-heroic-06.jpg",
      "date": "22.10.16",
      "description": "https://www.youtube.com/watch?v=ztyMcFHFw4g"
    },
    {
      "bossName": "Il'gynoth",
      "url": "images/en/en-heroic-05.jpg",
      "date": "18.10.16",
      "description": "https://www.youtube.com/watch?v=b4z8tT1qHuM"
    },
    {
      "bossName": "Ursoc",
      "url": "images/en/en-heroic-04.jpg",
      "date": "15.10.16",
      "description": "https://www.youtube.com/watch?v=_131g6kzlPg"
    },
    {
      "bossName": "Elerethe Renferal",
      "url": "images/en/en-heroic-03.jpg",
      "date": "15.10.16",
      "description": "https://www.youtube.com/watch?v=nWNEFEiRBaE"
    },
    {
      "bossName": "Dragons of Nightmare",
      "url": "images/en/en-heroic-02.jpg",
      "date": "30.09.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Nythendra",
      "url": "images/en/en-heroic-01.jpg",
      "date": "30.09.16",
      "description": "Opis killa"
    },
  ],
  "normal": [
    {
      "bossName": "Xavius",
      "url": "images/en/en-normal-07.jpg",
      "date": "28.09.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Cenarius",
      "url": "images/en/en-normal-06.jpg",
      "date": "25.09.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Il'gynoth",
      "url": "images/en/en-normal-05.jpg",
      "date": "25.09.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Elerethe Renferal",
      "url": "images/en/en-normal-03.jpg",
      "date": "24.09.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Dragons of Nightmare",
      "url": "images/en/en-normal-02.jpg",
      "date": "24.09.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Ursoc",
      "url": "images/en/en-normal-04.jpg",
      "date": "24.09.16",
      "description": "Opis killa"
    },
    {
      "bossName": "Nythendra",
      "url": "images/en/en-normal-01.jpg",
      "date": "21.09.16",
      "description": "Opis killa"
    },
  ],
}


var contacts = {
  "contacts": [
    {
      "url": "https://www.wowprogress.com/guild/eu/shadowsong/Elysium",
      "name": "WoW Progress",
    },
    {
      "url": "http://eu.battle.net/wow/en/guild/shadowsong/Elysium/",
      "name": "Armory",
    },
    {
      "url": "https://discord.gg/hKYS8gM",
      "name": "Discord",
    },
  ],
  "display": function() {
    contacts.contacts.forEach(function(contact) {
      $("#footerContacts").append(HTMLcontactStart);
      var formattedContactUrl = HTMLcontactUrl.replace("#", contact.url);
      var formattedContactName = HTMLcontactName.replace("%data%", contact.name);
      var formattedContact = formattedContactUrl + formattedContactName;
      $(".contact-entry:last").append(formattedContact);
    });
  }
};

tos.display();
contacts.display();

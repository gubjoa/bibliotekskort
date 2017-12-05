export default {
  "home": {
    "headers": {
      "logoPrintUrl": '/gu_logo_sv_high.png',
      "level1": 'Göteborgs universitetsbibliotek',
      "level2": 'Bibliotekskort',
    },
  },
  "components": {

  },

  "application": {
    "title": "Library card"
  },
  "patron": {
    "header": 'Ansökan om bibliotekskort',
    "sub_header": 'Obs! Endast för dig som inte redan har bibliotekskort vid GUB eller GU-kort.',
    "is_required": '(obligatoriskt)',


    "form_error_header": 'Formuläret innehåller felaktigheter. Var vänlig rätta till dessa och försök igen.',
    "personalnumber": 'Personnummer',
    "personalnumber_help_block": 'Ange 12 siffror utan bindestreck',
    "firstname": 'Förnamn',
    "surname": 'Efternamn',
    "address1_header": "Adress",
    "address": 'Adress',
    "zipcode": 'Postnummer',
    "city": 'Stad',
    "address2_header": "Annan adress",
    "B_address": 'Adress',
    "B_zipcode": 'Postnummer',
    "B_city": 'Stad',
    "smsalertnumber": 'Mobilnummer för sms',
    'phonenumber': 'Telefonnummer',
    "phone_help_block": 'Ange endast siffror',
    'email': 'Epostadress',
    'message_header': 'Meddelanden från biblioteket',
    'message_pref': 'Hur vill du få påminnelser och aviseringar?',
    'message_pref_help_block': "Välj metod för hur du vill att biblioteket skall kontakta dig.",
    'lang': 'Välj språk',
    'accept_text': 'Godkänn',
    'accept_text_help_block': "Jag har tagit del av <a target='_blank' href='http://www.ub.gu.se/(sv)/lana/regler/'>Regler för användning av Göteborgs universitetsbibliotek</a> och förbinder mig att följa dem.",
    'pul_link': "<a href='http://www.ub.gu.se/(sv)/lana/regler/pul.pdf' target='_blank'>Information om hantering av personuppgifter (pdf)</a>",
    "submit": 'Skicka',
    "category": "Användarkategori",
    "sv": "Svenska",
    "en": "Engelska",
    'optionally': 'valfritt'
  },

  "error_codes": {
    "MISSING_PERSONALNUMBER": 'Personnummer är obligatoriskt',
    "MISSING_CATEGORYCODE": 'Låntagarkategori är obligatoriskt',
    "MISSING_FIRSTNAME": 'Förnamn är obligatoriskt',
    "MISSING_SURNAME": 'Efternamn är obligatoriskt',
    "MISSING_ADDRESS": 'Adress är obligatoriskt',
    "MISSING_ZIPCODE": 'Postnummer är obligatiriskt',
    "MISSING_CITY": 'Stad är obligatoriskt',
    "MISSING_LANG": 'Språk är obligatoriskt',
    "MISSING_MESSAGING_FORMAT": 'Meddelandeformat är obligatoriskt',
    "MISSING_ACCEPT_TEXT": "Du måste acceptera reglerna",
    "MISSING_SMSALERTNUMBER": 'Mobilnummer för sms-utskick är obligatoriskt',
    "MISSING_EMAIL": 'E-postadress är obligatoriskt',

    "INVALID_CATEGORYCODE": 'Ogiltig låntagarkategori',

    "PERSONALNUMBER_FORMAT_ERROR": 'Felaktigt personnummer',
    "SMSALERTNUMBER_FORMAT_ERROR": 'Felaktigt mobilnummer för sms-utskick',
    "EMAIL_FORMAT_ERROR": 'Felaktig e-postadress',
    "LANG_FORMAT_ERROR": 'Felaktigt språk',
    "MESSAGING_FORMAT_FORMAT_ERROR": 'Felaktigt meddelandeformat',

    "PERSONALNUMBER_EXISTS": 'Detta personnummer är redan registrerat',
  },

  "confirm": {
    "header": 'Tack för din registrering',
    "extra_info": 'Du hämtar ut dit bibliotekskort på något av <a href="#">våra bibliotek.</a> Ta med dig giltig legitimation. Om du är distansstudent vid Göteborgs universitet kan du kontakta biblioteket för att få dit kort hemskickat.',
    "extra_info_2": 'När du beställer material lägger biblioteket det på en öppen avhämtningshylla med ditt namn synligt. Kontakta biblioteket om du istället vill hämta dina beställningar i informationsdisken',
    "contact_library_link": '<a href="#">Kontakta biblioteket</a>'
  }

};
// chatbot.js
// Emergency/Travel Medicines Checker Chatbot

const chatbotSteps = {
  // Step 1
  step1: {
    message: "Do you need emergency/travel medicines for your child?",
    options: [
      { label: "Yes", next: "step2" },
      { label: "No", next: "step1" }
    ]
  },

  // Step 2: Age selection
  step2: {
    message: "The age of your child is:",
    options: [
      { label: "Less than 3 months", next: "step3" },
      { label: "3-6 months", next: "step4" },
      { label: "6 months – 1 year", next: "step5" },
      { label: "1-3 years", next: "step6" },
      { label: "3-5 years", next: "step7" },
      { label: "5-7 years", next: "step8" },
      { label: "8-12 years", next: "step9" },
      { label: "12-15 years", next: "step10" }
    ]
  },

  // Step 3: <3 months
  step3: {
    message:
      "You can treat these yourself:\n" +
      "- Nose block: NASIVION-S saline nasal drops/spray before feeds\n" +
      "- Abdominal colic: burp well, hold child over shoulder\n" +
      "- Rash in skin folds: CANDID cream twice daily for 3 weeks\n" +
      "- Fever post-vaccine: consult fever chatbot",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 4: 3-6 months
  step4: {
    message:
      "For cough, fever, vomit, loose motions consult chatbot.\n" +
      "- Earache: Otogesic ear drops, 2 drops each ear\n" +
      "- Rash in skin folds: CANDID cream twice daily for 3 weeks\n" +
      "- Running nose: no medicine needed\n" +
      "- Dry skin: moisturizer 4× daily for 1 week",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 5: 6m-1y
  step5: {
    message:
      "For cough, fever, vomit, loose motions consult chatbot.\n" +
      "- Earache: Otogesic ear drops, 2 drops each ear\n" +
      "- Rash in skin folds: CANDID cream twice daily for 3 weeks\n" +
      "- Wheals/hives: ALERID 2.5 ml at night for 4 days\n" +
      "- Running nose: no medicine needed\n" +
      "- Dry skin: moisturizer 4× daily for 1 week",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 6: 1-3y
  step6: {
    message:
      "For cough, fever, vomit, loose motions consult chatbot.\n" +
      "- Earache: Otogesic ear drops, 2 drops each ear\n" +
      "- Rash in skin folds: CANDID cream twice daily for 3 weeks\n" +
      "- Wheals/hives/allergies: ALERID 5 ml at night for 4 days\n" +
      "- Stomach pain: CYCLOPAM syrup 2.5 ml every 8h\n" +
      "- Running nose: CORIMINIC drops, 10 drops 3× daily for 3 days",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 7: 3-5y
  step7: {
    message:
      "For cough, fever, vomit, loose motions consult chatbot.\n" +
      "- Earache: Otogesic ear drops, 2 drops each ear\n" +
      "- Wheals/hives/allergies/running nose: ALERID 7.5 ml at night for 4 days\n" +
      "- Stomach pain: CYCLOPAM syrup 5 ml every 8h",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 8: 5-7y
  step8: {
    message:
      "For cough, fever, vomit, loose motions consult chatbot.\n" +
      "- Earache: Otogesic ear drops, 2 drops each ear\n" +
      "- Wheals/hives/allergies: ALERID 10 ml at night for 4 days\n" +
      "- Stomach pain: CYCLOPAM syrup 7.5 ml every 8h",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 9: 8-12y
  step9: {
    message:
      "For cough, fever, vomit, loose motions consult chatbot.\n" +
      "- Earache: Otogesic ear drops, 2 drops each ear\n" +
      "- ALLEGRA 120 mg, 1 tab at night for 4 days\n" +
      "- COLIMEX (dicyclomine) 6, one tablet if stomach pain",
    options: [{ label: "Restart", next: "step1" }]
  },

  // Step 10: 12-15y
  step10: {
    message:
      "For cough, fever, vomit, loose motions consult chatbot.\n" +
      "- Earache: Otogesic ear drops, 2 drops each ear\n" +
      "- ALLEGRA 120 mg, 1½ tabs at night for 4 days\n" +
      "- COLIMEX (dicyclomine) 6, one tablet if stomach pain",
    options: [{ label: "Restart", next: "step1" }]
  }
};

export default chatbotSteps;

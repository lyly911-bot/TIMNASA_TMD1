const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FaYmVmL0xTdFFLUml2TWpKZjh2OXJsTjF6YnpDWmc2cUNPTlJnZXJuUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDFKcEx2Umt0ZDNvTmdVUklXcWk1SG5SdGxrRjE1MlJxVklyaGVvOTRWcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrS2FPVThSdFQ1TkN5U2R3TVNrRkRYNmZJejFwci93cGVSaU5LVjkvbzM4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwb0VBUEdkU2Z5Um9UckxzVkR2OFlUZUNHME5zTW10OEEyVGhVMFZrVTFzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNORmk4QkM4Zjc5WWpMOGV2YmlZaEdNYjlOUDRRaUgwWTBBS2E5bzkxRWc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRpMExWTk96ZURFL1hmcUlibUI2Q0Q0bEdoVnJaNm9sUlY0ZjBtU2RZeUU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0k3K2R0dDlGd1J4TmNhKzY3dWQwVWVlL2RjeHVxMWh6QmR5cEw1ajFWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVBQWlpKU01ST3lxcEZDTmdjNkhGTGhhVEcxY3NsUm9WMTJTaCs1SDhqYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZyRXRrcHozc3c1ak1Ic0JIaC92MzAwZkZ1QlA4SGZ3YndodmRTMUdBVThOR1BLZ2xZY0g5enh0aXpaODN4R0V0MTZMYzhXbFprMWRZK0w1ZjArbENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OSwiYWR2U2VjcmV0S2V5IjoicCtMRUdFTjU0eG5vVVJIdHh1aFpKcmt2VG9CVnk5YXRiMzFlYTN5a2xiWT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDEyNDY0MDEyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY4RjlGQTUyMzQ0OTc4RjJCN0IzMTVFREQ2MjhFMDBEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDkzODEyNzd9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01IbjRMTURFSXZobGNJR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlhvOFFsdlMrY1VjQnhyeTY1SXcyZkpzUk96bE9NY1FNTTFsTm00NkVyUm89IiwiYWNjb3VudFNpZ25hdHVyZSI6Im9OMnhtT0hlazhRS2d3UUlhNFZpalc0Z04rYjR0M1l0RzR5RnNJeWtZbXVyVVZZZE9icGJGeTEzbjBBOFpOeURvZDEwMmFyTWc5YVhUSTlzaFNCNUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKOWRneEYyb25EeGFIQlUraTVsc2IwWERYR01jdmY4VnBHOWNHRklrWWM0SENmT0w1NThEMFlva0tlN2VpZEx3cnZ4WEZWL3hSdGxneU93bVQxVUNCQT09In0sIm1lIjp7ImlkIjoiMjM0OTAxMjQ2NDAxMjoxNkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjEwMjk1NDc5NTI5NDkwNToxNkBsaWQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTAxMjQ2NDAxMjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWNlBFSmIwdm5GSEFjYTh1dVNNTm55YkVUczVUakhFREROWlRadU9oSzBhIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQklJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDkzODEyNzIsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNMW4ifQ==',
    PREFIXE: process.env.PREFIX || ",",
    GITHUB : process.env.GITHUB|| 'https://github.com/timnasax/TIMNASA_TMD',
    OWNER_NAME : process.env.OWNER_NAME || "❌G҉O҉D҉W҉I҉N҉❌",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "2349012464012",  
              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    AUTO_REACT: process.env.AUTO_REACTION || "yes",  
     AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
    URL: process.env.URL || "https://files.catbox.moe/r4djgj.png",  
    URL2: process.env.URL2 || "https://files.catbox.moe/r4djgj.png",
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'yes',              
    CHAT_BOT: process.env.CHAT_BOT || "on",              
    AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "no",
    AUTO_BLOCK: process.env.AUTO_BLOCK || 'no', 
    GCF: process.env.GROUP_HANDLE || 'yes', 
    AUTO_REPLY : process.env.AUTO_REPLY || "no", 
    AUTO_STATUS_TEXT: process.env.AUTO_STATUS_TEXT ||'hello there',   
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || 'no',
    AUTO_BIO: process.env.AUTO_BIO || 'no',       
    ANTI_CALL_TEXT : process.env.ANTI_CALL_TEXT || 'yes',             
    GURL: process.env.GURL  || "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
    WEBSITE :process.env.GURL || "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
    CAPTION : process.env.CAPTION || "❌ PAY EVIL WITH EVIL ❌",
    BOT : process.env.BOT_NAME || '❌G҉O҉D҉W҉I҉N҉❌⁠',
    MODE: process.env.PUBLIC_MODE || "yes",              
    TIMEZONE: process.env.TIMEZONE || "Africa/Nigeria", 
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME || null,
    HEROKU_API_KEY : process.env.HEROKU_API_KEY || null,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '1',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTI_DELETE_MESSAGE : process.env.ANTI_DELETE_MESSAGE || 'yes',
    ANTI_CALL: process.env.ANTI_CALL || 'no', 
    AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',             
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, 
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

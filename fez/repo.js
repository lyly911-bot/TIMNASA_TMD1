"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { timoth } = require("../timnasa/timoth");

timoth({ nomCom: "repo", catégorie:"Général", reaction: "🙄", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/Next5x/TIMNASA_TMD1';
  const img = 'https://files.catbox.moe/yg0pb3.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = ` *𝑯𝒆𝒍𝒍𝒐𝒘 𝒇𝒓𝒊𝒆𝒏𝒅 𝒕𝒉𝒊𝒔 𝒊𝒔 * *_TIMNASA TMD_.*\n _𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝒎𝒚 𝒄𝒉𝒂𝒏𝒏𝒆𝒍_ *𝒕𝒉𝒓𝒐𝒖𝒏𝒈*,  https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31

🤠 *𝑅𝐸𝑃𝑂𝑆𝐼𝑇𝑂𝑅𝑌:* ${data.html_url}

🕐 *𝑈𝑃 𝐷𝐴𝑇𝐸𝐷 𝑂𝑁 :* ${repoInfo.lastUpdate}
⊷━━━━━━☆•∞•☆━━━━━━⊷  

 ╭━━═✺ *TIMNASA-TMD* ✺═━━⊷
 │┌═━━⊷•∞•⊷━━─⊛
 │┊❁*𝐯𝐢𝐬𝐢𝐭𝐨𝐫:* ${repoInfo.visitors}
 │┊❁ *𝐬𝐭𝐚𝐫𝐬:* ${repoInfo.stars}
 │┊❁ *𝐟𝐨𝐫𝐤𝐬:* ${repoInfo.forks}
 │┊❁ *𝐫𝐞𝐥𝐞𝐬𝐞𝐝 𝐝𝐚𝐭𝐞:* ${releaseDate}
 │┊❁ *𝐜𝐫𝐞𝐚𝐭𝐨𝐫:* *TimnasaTech*
 │┊❁ *𝐭𝐡𝐞𝐦:* *timnasa*
 │┊❁ *𝓌ℯ 𝒶𝓁𝓌𝒶𝓎𝓈 𝓁ℴ𝓋ℯ 𝓎ℴ𝓊❤️*
 │└═━━⊷•∞•⊷━━─⊛
 ╰━━━═⊷✺•∞•✺⊷═━━━⊷,
 menuMsg += `
> Made By timnasa\n
`;
   try {
        await zk.sendMessage(dest, { 
            image: { url: img },
            caption: infoMsg + menuMsg,
            contextInfo: {
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363332512801418@newsletter",
                    newsletterName: "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ",
                    serverMessageId: -1
                },
                forwardingScore: 999,
                externalAdReply: {
                    title: "☢️𝚻𝚰𝚳𝚴𝚫𝐒𝚫-𝚻𝚳𝐃☢️",
                    body: "🧃Command List",
                    thumbnailUrl: imgs,
                    sourceUrl: "https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }


      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});

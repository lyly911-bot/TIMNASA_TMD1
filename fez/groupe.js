





const { timoth } = require("../timnasa/timoth")
//const { getGroupe } = require("../bdd/groupe")
const { Sticker, StickerTypes } = require('wa-sticker-formatter');
const {ajouterOuMettreAJourJid,mettreAJourAction,verifierEtatJid} = require("../bdd/antilien")
const {atbajouterOuMettreAJourJid,atbverifierEtatJid} = require("../bdd/antibot")
const { search, download } = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const { default: axios } = require('axios');
//const { uploadImageToImgur } = require('../framework/imgur');





timoth({ nomCom: "tagall", categorie: 'Group', reaction: "📣" }, async (dest, zk, commandeOptions) => {

  const { ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin, superUser } = commandeOptions


 

  if (!verifGroupe) { repondre("✋🏿 ✋🏿this command is reserved for groups ❌"); return; }
  if (!arg || arg === ' ') {
  mess = 'Aucun Message'
  } else {
    mess = arg.join(' ')
  } ;
  let membresGroupe = verifGroupe ? await infosGroupe.participants : ""
  var tag = ""; 
  tag +=`
  
╭─────────────────━┈⊷ 
│⛔ RAHMANI-MD 𝐓𝐀𝐆𝐒
╰─────────────────━┈⊷ \n
│⭕ *Group* : ${nomGroupe} 
│⭕ *Hey😀* : *${nomAuteurMessage}* 
│⭕ *Message* : *${mess}* 
╰─────────────━┈⊷\n
\n

` ;




  let emoji = ['🦴', '👀', '😮‍💨', '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', '🙏🏿', '⛔️', '$','😟','🥵','🐅']
  let random = Math.floor(Math.random() * (emoji.length - 1))


  for (const membre of membresGroupe) {
    tag += `${emoji[random]}      @${membre.id.split("@")[0]}\n`
  }

 
 if (verifAdmin || superUser) {

  zk.sendMessage(dest, { text: tag, mentions: membresGroupe.map((i) => i.id) }, { quoted: ms })

   } else { repondre('command reserved for admins')}

});


timoth({ nomCom: "link", categorie: 'Group', reaction: "🙋" }, async (dest, zk, commandeOptions) => {
  const { repondre, nomGroupe, nomAuteurMessage, verifGroupe } = commandeOptions;
  if (!verifGroupe) { repondre("wait bro , you want the link to my dm?"); return; };


  var link = await zk.groupInviteCode(dest)
  var lien = `https://chat.whatsapp.com/${link}`;

  let mess = `hello ${nomAuteurMessage} , here is the group link for ${nomGroupe} \n

Group link :${lien} \n\n©Rahmani-md 𝐬𝐜𝐢𝐞𝐧𝐜𝐞`
  repondre(mess)


});
/** *nommer un membre comme admin */
timoth({ nomCom: "promote", categorie: 'Group', reaction: "👨🏿‍💼" }, async (dest, zk, commandeOptions) => {
  let { repondre, msgRepondu, infosGroupe, auteurMsgRepondu, verifGroupe, auteurMessage, superUser, idBot } = commandeOptions;
  let membresGroupe = verifGroupe ? await infosGroupe.participants : ""
  if (!verifGroupe) { return repondre("For groups only"); }


  const verifMember = (user) => {

    for (const m of membresGroupe) {
      if (m.id !== user) {
        continue;
      }
      else { return true }
      //membre=//(m.id==auteurMsgRepondu? return true) :false;
    }
  }

  const memberAdmin = (membresGroupe) => {
    let admin = [];
    for (m of membresGroupe) {
      if (m.admin == null) continue;
      admin.push(m.id);

    }
    // else{admin= false;}
    return admin;
  }

  const a = verifGroupe ? memberAdmin(membresGroupe) : '';


  let admin = verifGroupe ? a.includes(auteurMsgRepondu) : false;
  let membre = verifMember(auteurMsgRepondu)
  let autAdmin = verifGroupe ? a.includes(auteurMessage) : false;
  zkad = verifGroupe ? a.includes(idBot) : false;
  try {
    // repondre(verifZokouAdmin)

    if (autAdmin || superUser) {
      if (msgRepondu) {
        if (zkad) {
          if (membre) {
            if (admin == false) {
              var txt = `🎊🎊🎊  @${auteurMsgRepondu.split("@")[0]} rose in rank.\n
                      he/she has been named group administrator.`
              await zk.groupParticipantsUpdate(dest, [auteurMsgRepondu], "promote");
              zk.sendMessage(dest, { text: txt, mentions: [auteurMsgRepondu] })
            } else { return repondre("This member is already an administrator of the group.") }

          } else { return repondre("This user is not part of the group."); }
        }
        else { return repondre("Sorry, I cannot perform this action because I am not an administrator of the group.") }

      } else { repondre("please tag the member to be nominated"); }
    } else { return repondre("Sorry I cannot perform this action because you are not an administrator of the group.") }
  } catch (e) { repondre("oups " + e) }

})

//fin nommer
/** ***demettre */

timoth({ nomCom: "demote", categorie: 'Group', reaction: "👨🏿‍💼" }, async (dest, zk, commandeOptions) => {
  let { repondre, msgRepondu, infosGroupe, auteurMsgRepondu, verifGroupe, auteurMessage, superUser, idBot } = commandeOptions;
  let membresGroupe = verifGroupe ? await infosGroupe.participants : ""
  if (!verifGroupe) { return repondre("For groups only"); }


  const verifMember = (user) => {

    for (const m of membresGroupe) {
      if (m.id !== user) {
        continue;
      }
      else { return true }
      //membre=//(m.id==auteurMsgRepondu? return true) :false;
    }
  }

  const memberAdmin = (membresGroupe) => {
    let admin = [];
    for (m of membresGroupe) {
      if (m.admin == null) continue;
      admin.push(m.id);

    }
    // else{admin= false;}
    return admin;
  }

  const a = verifGroupe ? memberAdmin(membresGroupe) : '';


  let admin = verifGroupe ? a.includes(auteurMsgRepondu) : false;
  let membre = verifMember(auteurMsgRepondu)
  let autAdmin = verifGroupe ? a.includes(auteurMessage) : false;
  zkad = verifGroupe ? a.includes(idBot) : false;
  try {
    // repondre(verifZokouAdmin)

    if (autAdmin || superUser) {
      if (msgRepondu) {
        if (zkad) {
          if (membre) {
            if (admin == false) {

              repondre("This member is not a group administrator.")

            } else {
              var txt = `@${auteurMsgRepondu.split("@")[0]} was removed from his position as a group administrator\n`
              await zk.groupParticipantsUpdate(dest, [auteurMsgRepondu], "demote");
              zk.sendMessage(dest, { text: txt, mentions: [auteurMsgRepondu] })
            }

          } else { return repondre("This user is not part of the group."); }
        }
        else { return repondre("Sorry I cannot perform this action because I am not an administrator of the group.") }

      } else { repondre("please tag the member to be removed"); }
    } else { return repondre("Sorry I cannot perform this action because you are not an administrator of the group.") }
  } catch (e) { repondre("oups " + e) }

})



/** ***fin démettre****  **/
/** **retirer** */
timoth({ nomCom: "remove", categorie: 'Group', reaction: "👨🏿‍💼" }, async (dest, zk, commandeOptions) => {
  let { repondre, msgRepondu, infosGroupe, auteurMsgRepondu, verifGroupe, nomAuteurMessage, auteurMessage, superUser, idBot } = commandeOptions;
  let membresGroupe = verifGroupe ? await infosGroupe.participants : ""
  if (!verifGroupe) { return repondre("for groups only"); }


  const verifMember = (user) => {

    for (const m of membresGroupe) {
      if (m.id !== user) {
        continue;
      }
      else { return true }
      //membre=//(m.id==auteurMsgRepondu? return true) :false;
    }
  }

  const memberAdmin = (membresGroupe) => {
    let admin = [];
    for (m of membresGroupe) {
      if (m.admin == null) continue;
      admin.push(m.id);

    }
    // else{admin= false;}
    return admin;
  }

  const a = verifGroupe ? memberAdmin(membresGroupe) : '';


  let admin = verifGroupe ? a.includes(auteurMsgRepondu) : false;
  let membre = verifMember(auteurMsgRepondu)
  let autAdmin = verifGroupe ? a.includes(auteurMessage) : false;
  zkad = verifGroupe ? a.includes(idBot) : false;
  try {
    // repondre(verifZokouAdmin)

    if (autAdmin || superUser) {
      if (msgRepondu) {
        if (zkad) {
          if (membre) {
            if (admin == false) {
              const gifLink = "https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif"
              var sticker = new Sticker(gifLink, {
                pack: 'Zokou-Md', // The pack name
                author: nomAuteurMessage, // The author name
                type: StickerTypes.FULL, // The sticker type
                categories: ['🤩', '🎉'], // The sticker category
                id: '12345', // The sticker id
                quality: 50, // The quality of the output file
                background: '#000000'
              });

              await sticker.toFile("st.webp")
              var txt = `@${auteurMsgRepondu.split("@")[0]} was removed from the group.\n`
            /*  zk.sendMessage(dest, { sticker: fs.readFileSync("st.webp") }, { quoted: ms.message.extendedTextMessage.contextInfo.stanzaId})*/
              await zk.groupParticipantsUpdate(dest, [auteurMsgRepondu], "remove");
              zk.sendMessage(dest, { text: txt, mentions: [auteurMsgRepondu] })

            } else { repondre("This member cannot be removed because he is an administrator of the group.") }

          } else { return repondre("This user is not part of the group."); }
        }
        else { return repondre("Sorry, I cannot perform this action because I am not an administrator of the group.") }

      } else { repondre("please tag the member to be removed"); }
    } else { return repondre("Sorry I cannot perform this action because you are not an administrator of the group .") }
  } catch (e) { repondre("oups " + e) }

})


/** *****fin retirer */


timoth({ nomCom: "del", categorie: 'Group',reaction:"🧹" }, async (dest, zk, commandeOptions) => {

  const { ms, repondre, verifGroupe,auteurMsgRepondu,idBot, msgRepondu, verifAdmin, superUser} = commandeOptions;
  
  if (!msgRepondu) {
    repondre("Please mention the message to delete.");
    return;
  }
  if(superUser && auteurMsgRepondu==idBot )
  {
    
       if(auteurMsgRepondu==idBot)
       {
         const key={
            remoteJid:dest,
      fromMe: true,
      id: ms.message.extendedTextMessage.contextInfo.stanzaId,
         }
         await zk.sendMessage(dest,{delete:key});return;
       } 
  }

          if(verifGroupe)
          {
               if(verifAdmin || superUser)
               {
                    
                         try{
                
      
            const key=   {
               remoteJid : dest,
               id : ms.message.extendedTextMessage.contextInfo.stanzaId ,
               fromMe : false,
               participant : ms.message.extendedTextMessage.contextInfo.participant

            }        
         
         await zk.sendMessage(dest,{delete:key});return;

             }catch(e){repondre( "I need admin rights.")}
                    
                      
               }else{repondre("Sorry, you are not an administrator of the group.")}
          }

});

timoth({ nomCom: "info", categorie: 'Group' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe } = commandeOptions;
  if (!verifGroupe) { repondre("order reserved for the group only"); return };

 try { ppgroup = await zk.profilePictureUrl(dest ,'image') ; } catch { ppgroup = conf.IMAGE_MENU}

    const info = await zk.groupMetadata(dest)

    /*console.log(metadata.id + ", title: " + metadata.subject + ", description: " + metadata.desc)*/


    let mess = {
      image: { url: ppgroup },
      caption:  `*━━━━『Group Info』━━━━*\n\n*🎐Name:* ${info.subject}\n\n*🔩Group's ID:* ${dest}\n\n*🔍Desc:* \n\n${info.desc}`
    }


    zk.sendMessage(dest, mess, { quoted: ms })
  });



 //------------------------------------antilien-------------------------------

 zokou({ nomCom: "antilink", categorie: 'Group', reaction: "🔗" }, async (dest, zk, commandeOptions) => {


  var { repondre, arg, verifGroupe, superUser, verifAdmin } = commandeOptions;
  

  
  if (!verifGroupe) {
    return repondre("*for groups only*");
  }
  
  if( superUser || verifAdmin) {
    const enetatoui = await verifierEtatJid(dest)
    try {
      if (!arg || !arg[0] || arg === ' ') { repondre("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.") ; return};
     
      if(arg[0] === 'on') {

      
       if(enetatoui ) { repondre("the antilink is already activated for this group")
                    } else {
                  await ajouterOuMettreAJourJid(dest,"oui");
                
              repondre("the antilink is activated successfully") }
     
            } else if (arg[0] === "off") {

              if (enetatoui) { 
                await ajouterOuMettreAJourJid(dest , "non");

                repondre("The antilink has been successfully deactivated");
                
              } else {
                repondre("antilink is not activated for this group");
              }
            } else if (arg.join('').split("/")[0] === 'action') {
                            

              let action = (arg.join('').split("/")[1]).toLowerCase() ;

              if ( action == 'remove' || action == 'warn' || action == 'delete' ) {

                await mettreAJourAction(dest,action);

                repondre(`The anti-link action has been updated to ${arg.join('').split("/")[1]}`);

              } else {
                  repondre("The only actions available are warn, remove, and delete") ;
              }
            

            } else repondre("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.")

      
    } catch (error) {
       repondre(error)
    }

  } else { repondre('You are not entitled to this order') ;
  }

});




 //------------------------------------antibot-------------------------------

 timoth({ nomCom: "antibot", categorie: 'Group', reaction: "😬" }, async (dest, zk, commandeOptions) => {


  var { repondre, arg, verifGroupe, superUser, verifAdmin } = commandeOptions;
  

  
  if (!verifGroupe) {
    return repondre("*for groups only*");
  }
  
  if( superUser || verifAdmin) {
    const enetatoui = await atbverifierEtatJid(dest)
    try {
      if (!arg || !arg[0] || arg === ' ') { repondre('antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.') ; return};
     
      if(arg[0] === 'on') {

      
       if(enetatoui ) { repondre("the antibot is already activated for this group")
                    } else {
                  await atbajouterOuMettreAJourJid(dest,"oui");
                
              repondre("the antibot is successfully activated") }
     
            } else if (arg[0] === "off") {

              if (enetatoui) { 
                await atbajouterOuMettreAJourJid(dest , "non");

                repondre("The antibot has been successfully deactivated");
                
              } else {
                repondre("antibot is not activated for this group");
              }
            } else if (arg.join('').split("/")[0] === 'action') {

              let action = (arg.join('').split("/")[1]).toLowerCase() ;

              if ( action == 'remove' || action == 'warn' || action == 'delete' ) {

                await mettreAJourAction(dest,action);

                repondre(`The anti-bot action has been updated to ${arg.join('').split("/")[1]}`);

              } else {
                  repondre("The only actions available are warn, remove, and delete") ;
              }
            

            } else {  
              repondre('antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.') ;

                            }
    } catch (error) {
       repondre(error)
    }

  } else { repondre('You are not entitled to this order') ;

  }

});

//----------------------------------------------------------------------------

timoth({ nomCom: "group", categorie: 'Group' }, async (dest, zk, commandeOptions) => {

  const { repondre, verifGroupe, verifAdmin, superUser, arg } = commandeOptions;

  if (!verifGroupe) { repondre("order reserved for group only"); return };
  if (superUser || verifAdmin) {

    if (!arg[0]) { repondre('Instructions:\n\nType group open or close'); return; }
    const option = arg.join(' ')
    switch (option) {
      case "open":
        await zk.groupSettingUpdate(dest, 'not_announcement')
        repondre('group open')
        break;
      case "close":
        await zk.groupSettingUpdate(dest, 'announcement');
        repondre('Group close successfully');
        break;
      default: repondre("Please don't invent an option")
    }

    
  } else {
    repondre("order reserved for the administratorr");
    return;
  }
 

});

timoth({ nomCom: "left", categorie: "Mods" }, async (dest, zk, commandeOptions) => {

  const { repondre, verifGroupe, superUser } = commandeOptions;
  if (!verifGroupe) { repondre("order reserved for group only"); return };
  if (!superUser) {
    repondre("command reserved for the bot owner");
    return;
  }
  await repondre('sayonnara') ;
   
  zk.groupLeave(dest)
});

timoth({ nomCom: "gname", categorie: 'Group' }, async (dest, zk, commandeOptions) => {

  const { arg, repondre, verifAdmin } = commandeOptions;

  if (!verifAdmin) {
    repondre("order reserved for administrators of the group");
    return;
  };
  if (!arg[0]) {
    repondre("Please enter the group name");
    return;
  };
   const nom = arg.join(' ')
  await zk.groupUpdateSubject(dest, nom);
    repondre(`group name refresh: *${nom}*`)

 
}) ;

timoth({ nomCom: "gdesc", categorie: 'Group' }, async (dest, zk, commandeOptions) => {

  const { arg, repondre, verifAdmin } = commandeOptions;

  if (!verifAdmin) {
    repondre("order reserved for administrators of the group");
    return;
  };
  if (!arg[0]) {
    repondre("Please enter the group description");
    return;
  };
   const nom = arg.join(' ')
  await zk.groupUpdateDescription(dest, nom);
    repondre(`group description update: *${nom}*`)

 
}) ;


timoth({ nomCom: "gpp", categorie: 'Group' }, async (dest, zk, commandeOptions) => {

  const { repondre, msgRepondu, verifAdmin } = commandeOptions;

  if (!verifAdmin) {
    repondre("order reserved for administrators of the group");
    return;
  }; 
  if (msgRepondu.imageMessage) {
    const pp = await  zk.downloadAndSaveMediaMessage(msgRepondu.imageMessage) ;

    await zk.updateProfilePicture(dest, { url: pp })
                .then( () => {
                    zk.sendMessage(dest,{text:"Group pfp changed"})
                    fs.unlinkSync(pp)
                }).catch(() =>   zk.sendMessage(dest,{text:err})
)
        
  } else {
    repondre('Please mention an image')
  }

});

/////////////
timoth({nomCom:"hidetag",categorie:'Group',reaction:"🎤"},async(dest,zk,commandeOptions)=>{

  const {repondre,msgRepondu,verifGroupe,arg ,verifAdmin , superUser}=commandeOptions;

  if(!verifGroupe)  { repondre('This command is only allowed in groups.')} ;
  if (verifAdmin || superUser) { 

  let metadata = await zk.groupMetadata(dest) ;

  //console.log(metadata.participants)
 let tag = [] ;
  for (const participant of metadata.participants ) {

      tag.push(participant.id) ;
  }
  //console.log(tag)

    if(msgRepondu) {
      console.log(msgRepondu)
      let msg ;

      if (msgRepondu.imageMessage) {

        

     let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.imageMessage) ;
     // console.log(msgRepondu) ;
     msg = {

       image : { url : media } ,
       caption : msgRepondu.imageMessage.caption,
       mentions :  tag
       
     }
    

      } else if (msgRepondu.videoMessage) {

        let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.videoMessage) ;

        msg = {

          video : { url : media } ,
          caption : msgRepondu.videoMessage.caption,
          mentions :  tag
          
        }

      } else if (msgRepondu.audioMessage) {
    
        let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage) ;
       
        msg = {
   
          audio : { url : media } ,
          mimetype:'audio/mp4',
          mentions :  tag
           }     
        
      } else if (msgRepondu.stickerMessage) {

    
        let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.stickerMessage)

        let stickerMess = new Sticker(media, {
          pack: 'Rahmani-XMD',
          type: StickerTypes.CROPPED,
          categories: ["🤩", "🎉"],
          id: "12345",
          quality: 70,
          background: "transparent",
        });
        const stickerBuffer2 = await stickerMess.toBuffer();
       
        msg = { sticker: stickerBuffer2 , mentions : tag}


      }  else {
          msg = {
             text : msgRepondu.conversation,
             mentions : tag
          }
      }

    zk.sendMessage(dest,msg)

    } else {

        if(!arg || !arg[0]) { repondre('Enter the text to announce or mention the message to announce');
        ; return} ;

      zk.sendMessage(
         dest,
         {
          text : arg.join(' ') ,
          mentions : tag
         }     
      )
    }

} else {
  repondre('Command reserved for administrators.')
}

});


timoth({ nomCom: "apk2", reaction: "✨", categorie: "Recherche" }, async (dest, zk, commandeOptions) => {
  const { repondre, arg, ms } = commandeOptions;

  try {
    const appName = arg.join(' ');
    if (!appName) {
      return repondre("*Enter the name of the application to search for*");
    }

    const searchResults = await search(appName);

    if (searchResults.length === 0) {
      return repondre("*can't find application, please enter another name*");
    }

    const appData = await download(searchResults[0].id);
    const fileSize = parseInt(appData.size);

    if (fileSize > 300) {
      return repondre("The file exceeds 300 MB, unable to download.");
    }

    const downloadLink = appData.dllink;
    const captionText =
      "『 *timnasa Application* 』\n\n*Name :* " + appData.name +
      "\n*Id :* " + appData["package"] +
      "\n*Last Update :* " + appData.lastup +
      "\n*Size :* " + appData.size +
      "\n";

    const apkFileName = (appData?.["name"] || "Downloader") + ".apk";
    const filePath = apkFileName;

    const response = await axios.get(downloadLink, { 'responseType': "stream" });
    const fileWriter = fs.createWriteStream(filePath);
    response.data.pipe(fileWriter);

    await new Promise((resolve, reject) => {
      fileWriter.on('finish', resolve);
      fileWriter.on("error", reject);
    });

    const documentMessage = {
      'document': fs.readFileSync(filePath),
      'mimetype': 'application/vnd.android.package-archive',
      'fileName': apkFileName
    };

    // Utilisation d'une seule méthode sendMessage pour envoyer l'image et le document
    zk.sendMessage(dest, { image: { url: appData.icon }, caption: captionText }, { quoted: ms });
    zk.sendMessage(dest, documentMessage, { quoted: ms });

    // Supprimer le fichier après envoi
    fs.unlinkSync(filePath);
  } catch (error) {
    console.error('Erreur lors du traitement de la commande apk:', error);
    repondre("*Error during apk command processing*");
  }
});





/*******************************  automute && autoummute ***************************/

const cron = require(`../bdd/cron`) ;


timoth({
      nomCom : 'automute',
      categorie : 'Group'
  } , async (dest,zk,commandeOptions) => {

      const {arg , repondre , verifAdmin } = commandeOptions ;

      if (!verifAdmin) { repondre('You are not an administrator of the group') ; return}

      group_cron = await cron.getCronById(dest) ;
      
     

      if (!arg || arg.length == 0) {

        let state ;
        if (group_cron == null || group_cron.mute_at == null) {
  
            state =  "No time set for automatic mute"
        } else {
  
          state =  `The group will be muted at ${(group_cron.mute_at).split(':')[0]} ${(group_cron.mute_at).split(':')[1]}`
        }
  
        let msg = `* *State:* ${state}
        * *Instructions:* To activate automatic mute, add the minute and hour after the command separated by ':'
        Example automute 9:30
        * To delete the automatic mute, use the command *automute del*`
        

          repondre(msg) ;
          return ;
      } else {

        let texte = arg.join(' ')

        if (texte.toLowerCase() === `del` ) { 

          if (group_cron == null) {

              repondre('No cronometrage is active') ;
          } else {

              await cron.delCron(dest) ;

              repondre("The automatic mute has been removed; restart to apply changes") 
              .then(() => {

                exec("pm2 restart all");
              }) ;
          }
        } else if (texte.includes(':')) {

          //let { hr , min } = texte.split(':') ;

          await cron.addCron(dest,"mute_at",texte) ;

          repondre(`Setting up automatic mute for ${texte} ; restart to apply changes`) 
          .then(() => {

            exec("pm2 restart all");
          }) ;

        } else {
            repondre('Please enter a valid time with hour and minute separated by :') ;
        }


      }
  });


  timoth({
    nomCom : 'autounmute',
    categorie : 'Group'
} , async (dest,zk,commandeOptions) => {

    const {arg , repondre , verifAdmin } = commandeOptions ;

    if (!verifAdmin) { repondre('You are not an administrator of the group') ; return}

    group_cron = await cron.getCronById(dest) ;
    
   

    if (!arg || arg.length == 0) {

      let state ;
      if (group_cron == null || group_cron.unmute_at == null) {

          state = "No time set for autounmute" ;

      } else {

        state = `The group will be un-muted at ${(group_cron.unmute_at).split(':')[0]}H ${(group_cron.unmute_at).split(':')[1]}`
      }

      let msg = `* *State:* ${state}
      * *Instructions:* To activate autounmute, add the minute and hour after the command separated by ':'
      Example autounmute 7:30
      * To delete autounmute, use the command *autounmute del*`

        repondre(msg) ;
        return ;

    } else {

      let texte = arg.join(' ')

      if (texte.toLowerCase() === `del` ) { 

        if (group_cron == null) {

            repondre('No cronometrage has been activated') ;
        } else {

            await cron.delCron(dest) ;

            repondre("The autounmute has been removed; restart to apply the changes")
            .then(() => {

              exec("pm2 restart all");
            }) ;

            

        }
      } else if (texte.includes(':')) {

       

        await cron.addCron(dest,"unmute_at",texte) ;

        repondre(`Setting up autounmute for ${texte}; restart to apply the changes`)
        .then(() => {

          exec("pm2 restart all");
        }) ;

      } else {
          repondre('Please enter a valid time with hour and minute separated by :') ;
      }


    }
});



timoth({
  nomCom : 'fkick',
  categorie : 'Group'
} , async (dest,zk,commandeOptions) => {

  const {arg , repondre , verifAdmin , superUser , verifZokouAdmin } = commandeOptions ;

  if (verifAdmin || superUser) {

    if(!verifZokouAdmin){ repondre('You need administrative rights to perform this command') ; return ;}

    if (!arg || arg.length == 0) { repondre('Please enter the country code whose members will be removed') ; return ;}

      let metadata = await zk.groupMetadata(dest) ;

      let participants = metadata.participants ;

      for (let i = 0 ; i < participants.length ; i++) {

          if (participants[i].id.startsWith(arg[0]) && participants[i].admin === null ) {

             await zk.groupParticipantsUpdate(dest, [participants[i].id], "remove") ;
          }
      }

  } else {
    repondre('Sorry, you are not an administrator of the group')
  }


}) ;


timoth({
      nomCom : 'nsfw',
      categorie : 'Group'
}, async (dest,zk,commandeOptions) => {
  
    const {arg , repondre , verifAdmin } = commandeOptions ;

  if(!verifAdmin) { repondre('Sorry, you cannot enable NSFW content without being an administrator of the group') ; return}

      let hbd = require('../bdd/hentai') ;

    let isHentaiGroupe = await hbd.checkFromHentaiList(dest) ;

  if (arg[0] == 'on') {
    
       if(isHentaiGroupe) {repondre('NSFW content is already active for this group') ; return} ;

      await hbd.addToHentaiList(dest) ;

      repondre('NSFW content is now active for this group') ;
       
  } else if (arg[0] == 'off') {

     if(!isHentaiGroupe) {repondre('NSFW content is already disabled for this group') ; return} ;

      await hbd.removeFromHentaiList(dest) ;

      repondre('NSFW content is now disabled for this group') ;
  } else {

      repondre('You must enter "on" or "off"') ;
    }

  
} ) ;


  timoth({ nomCom: "telesticker", categorie: "Mods" }, async (dest, zk, commandeOptions) => {
    const { ms, repondre, arg, nomAuteurMessage, superUser } = commandeOptions;
  
    if (!superUser) {
      repondre('Only Mods can use this command'); return;
    }
    //const apikey = conf.APILOLHUMAIN
  
   // if (apikey === null || apikey === 'null') { repondre('Veillez vérifier votre apikey ou si vous en avez pas , veiller crée un compte sur api.lolhuman.xyz et vous en procurer une.'); return; };
  
    if (!arg[0]) {
      repondre("put a telegram sticker link ");
      return;
    }
  
    let lien = arg.join(' ');
  
    let name = lien.split('/addstickers/')[1] ;
  
    let api = 'https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=' + encodeURIComponent(packname) ;
  
    try {
  
      let stickers = await axios.get(api) ;
  
      let type = null ;
  
      if (stickers.data.result.is_animated === true ||stickers.data.result.is_video === true  ) {
  
          type = 'animated sticker'
      } else {
        type = 'not animated sticker'
      }
  
      let msg = `   Popkid-stickers-dl
      
  *Name :* ${stickers.data.result.name}
  *Type :* ${type} 
  *Length :* ${(stickers.data.result.stickers).length}
  
      Downloading...`
  
      await  repondre(msg) ;
  
       for ( let i = 0 ; i < (stickers.data.result.stickers).length ; i++ ) {
  
          let file = await axios.get(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${stickers.data.result.stickers[i].file_id}`) ;
  
          let buffer = await axios({
            method: 'get',  // Utilisez 'get' pour télécharger le fichier
            url:`https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/${file.data.result.file_path}` ,
            responseType: 'arraybuffer',  // Définissez le type de réponse sur 'stream' pour gérer un flux de données
          })
  
  
          const sticker = new Sticker(buffer.data, {
            pack: nomAuteurMessage,
            author: "pkdriller",
            type: StickerTypes.FULL,
            categories: ['🤩', '🎉'],
            id: '12345',
            quality: 50,
            background: '#000000'
          });
    
          const stickerBuffer = await sticker.toBuffer(); // Convertit l'autocollant en tampon (Buffer)
    
          await zk.sendMessage(
            dest,
            {
              sticker: stickerBuffer, // Utilisez le tampon (Buffer) directement dans l'objet de message
            },
            { quoted: ms }
          ); 
       }
  
    } catch (e) {
      repondre("we got an error \n", e);
    }
  });

timoth({ nomCom: "crew", categorie: "Mods" }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, arg, auteurMessage, superUser, auteurMsgRepondu, msgRepondu } = commandeOptions;

  if (!superUser) { repondre("only modds can use this command"); return };

  if (!arg[0]) { repondre('Please enter the name of the group to create'); return };
  if (!msgRepondu) { repondre('Please mention a member added '); return; }

  const name = arg.join(" ")

  const group = await zk.groupCreate(name, [auteurMessage, auteurMsgRepondu])
  console.log("created group with id: " + group.gid)
  zk.sendMessage(group.id, { text: `Bienvenue dans ${name}` })

});

timoth({ nomCom: "left", categorie: "Mods" }, async (dest, zk, commandeOptions) => {

  const { ms, repondre, verifGroupe, msgRepondu, verifAdmin, superUser, auteurMessage } = commandeOptions;
  if (!verifGroupe) { repondre("group only"); return };
  if (!superUser) {
    repondre("order reserved for the owner");
    return;
  }

  await zk.groupLeave(dest)
});

timoth({ nomCom: "join", categorie: "Mods" }, async (dest, zk, commandeOptions) => {

  const { arg, ms, repondre, verifGroupe, msgRepondu, verifAdmin, superUser, auteurMessage } = commandeOptions;

  if (!superUser) {
    repondre("command reserved for the bot owner");
    return;
  }
  let result = arg[0].split('https://chat.whatsapp.com/')[1] ;
 await zk.groupAcceptInvite(result) ;
  
      repondre(`Succes`).catch((e)=>{
  repondre('Unknown error')
})

})


timoth({ nomCom: "jid", categorie: "Mods" }, async (dest, zk, commandeOptions) => {

  const { arg, ms, repondre, verifGroupe, msgRepondu, verifAdmin, superUser, auteurMessage,auteurMsgRepondu } = commandeOptions;

         if (!superUser) {
    repondre("command reserved for the bot owner");
    return;
  }
              if(!msgRepondu) {
                jid = dest
              } else {
                jid = auteurMsgRepondu
              } ;
   zk.sendMessage(dest,{text : jid },{quoted:ms});

        }) ;

  

timoth({ nomCom: "block", categorie: "Mods" }, async (dest, zk, commandeOptions) => {

  const { arg, ms, repondre, verifGroupe, msgRepondu, verifAdmin, superUser, auteurMessage,auteurMsgRepondu } = commandeOptions;

         if (!superUser) {
    repondre("command reserved for the bot owner");
    return;
  }
             
              if(!msgRepondu) { 
                if(verifGroupe) {
                  repondre('Be sure to mention the person to block'); return
                } ;
                jid = dest

                 await zk.updateBlockStatus(jid, "block")
    .then( repondre('succes')) 
              } else {
                jid = auteurMsgRepondu
             await zk.updateBlockStatus(jid, "block")
    .then( repondre('succes'))   } ;

  });

timoth({ nomCom: "unblock", categorie: "Mods" }, async (dest, zk, commandeOptions) => {

  const { arg, ms, repondre, verifGroupe, msgRepondu, verifAdmin, superUser, auteurMessage,auteurMsgRepondu } = commandeOptions;

         if (!superUser) {
    repondre("command reserved for the bot owner");
    return;
  }
              if(!msgRepondu) { 
                if(verifGroupe) {
                  repondre('Please mention the person to be unlocked'); return
                } ;
                jid = dest

                 await zk.updateBlockStatus(jid, "unblock")
    .then( repondre('succes')) 
              } else {
                jid = auteurMsgRepondu
             await zk.updateBlockStatus(jid, "unblock")
    .then( repondre('succes'))   } ;
  
    });

timoth({ nomCom: "kickall", categorie: 'Group', reaction: "📣" }, async (dest, zk, commandeOptions) => {

  const { auteurMessage ,ms, repondre, arg, verifGroupe, nomGroupe, infosGroupe, nomAuteurMessage, verifAdmin, superUser,prefixe } = commandeOptions

  const metadata = await zk.groupMetadata(dest) ;
 

  if (!verifGroupe) { repondre("✋🏿 ✋🏿this command is reserved for groups ❌"); return; }
  if (superUser || auteurMessage == metadata.owner) { 
  
   repondre('No_admin members will be removed from the group. You have 5 seconds to reclaim your choice by restarting the bot.') ;
   await sleep(5000)
  let membresGroupe = verifGroupe ? await infosGroupe.participants : "";
try {
  let users = membresGroupe.filter((member) => !member.admin)

  for (const membre of users) {

    

   
    
await zk.groupParticipantsUpdate(
        dest, 
        [membre.id],
        "remove" 
    ) 
    await sleep(500)
    
  }  
} catch (e) {repondre("I need administration rights")} } else {
  repondre("Order reserved for the group owner for security reasons"); return
}
});

//timoth({
    nomCom: 'ban',
    categorie: 'Mods',
}, async (dest, zk, commandeOptions) => {

    const { ms, arg, auteurMsgRepondu, msgRepondu , repondre,prefixe,superUser } = commandeOptions;

    
  if (!superUser) {repondre('This command is only allowed to the bot owner') ; return}
    if (!arg[0]) {
        // Function 'reply' must be defined to send a response.
        repondre(`mention the victim by typing ${prefixe}ban add/del to ban/unban the victim`);
        return;
    };

    if (msgRepondu) {
        switch (arg.join(' ')) {
            case 'add':

           
   let youareban = await isUserBanned(auteurMsgRepondu)
           if(youareban) {repondre('This user is already banned') ; return}
               
           addUserToBanList(auteurMsgRepondu)
                break;
                case 'del':
                  let estbanni = await isUserBanned(auteurMsgRepondu)
    if (estbanni) {
        
        removeUserFromBanList(auteurMsgRepondu);
        repondre('This user is now free.');
    } else {
      repondre('This user is not banned.');
    }
    break;


            default:
                repondre('bad option');
                break;
        }
    } else {
        repondre('mention the victim')
        return;
    }
});



//timoth({
    nomCom: 'bangroup',
    categorie: 'Mods',
}, async (dest, zk, commandeOptions) => {

    const { ms, arg, auteurMsgRepondu, msgRepondu , repondre,prefixe,superUser,verifGroupe } = commandeOptions;

    
  if (!superUser) {repondre('This command is only allowed to the bot owner') ; return};
  if(!verifGroupe) {repondre('order reservation for groups' ) ; return };
    if (!arg[0]) {
        // Function 'reply' must be defined to send a response.
        repondre(`type ${prefix}bangroup add/del to ban/unban the group`);
        return;
    };
    const groupalreadyBan = await isGroupBanned(dest)

        switch (arg.join(' ')) {
            case 'add':

           

            if(groupalreadyBan) {repondre('This group is already banned') ; return}
               
            addGroupToBanList(dest)

                break;
                case 'del':
                      
    if (groupalreadyBan) {
      removeGroupFromBanList(dest)
      repondre('This group is now free.');
        
    } else {
       
      repondre('This group is not banned.');
    }
    break;


            default:
                repondre('bad option');
                break;
        }
    
});


 //timoth({
  nomCom: 'onlyadmin',
  categorie: 'Group',
}, async (dest, zk, commandeOptions) => {

  const { ms, arg, auteurMsgRepondu, msgRepondu , repondre,prefixe,superUser,verifGroupe , verifAdmin } = commandeOptions;

  
if (superUser || verifAdmin) { 
if(!verifGroupe) {repondre('order reservation for groups' ) ; return };
  if (!arg[0]) {
      // Function 'reply' must be defined to send a response.
      repondre(`type ${prefix}onlyadmin add/del to ban/unban the group`);
      return;
  };
  const groupalreadyBan = await isGroupOnlyAdmin(dest)

      switch (arg.join(' ')) {
          case 'add':

         

          if(groupalreadyBan) {repondre('This group is already in onlyadmin mode') ; return}
             
          addGroupToOnlyAdminList(dest)

              break;
              case 'del':
                    
  if (groupalreadyBan) {
    removeGroupFromOnlyAdminList(dest)
    repondre('This group is now free.');
      
  } else {
     
    repondre('This group is not in onlyadmin mode.');
  }
  break;


          default:
              repondre('bad option');
              break;
      }
} else { repondre('You are not entitled to this order')}
});

timoth({
  nomCom: 'sudo',
  categorie: 'Mods',
}, async (dest, zk, commandeOptions) => {

  const { ms, arg, auteurMsgRepondu, msgRepondu , repondre,prefixe,superUser } = commandeOptions;

  
if (!superUser) {repondre('This command is only allowed to the bot owner') ; return}
  if (!arg[0]) {
      // Function 'reply' must be defined to send a response.
      repondre(`mention the person by typing ${prefix}sudo add/del`);
      return;
  };

  if (msgRepondu) {
      switch (arg.join(' ')) {
          case 'add':

         
 let youaresudo = await issudo(auteurMsgRepondu)
         if(youaresudo) {repondre('This user is already sudo') ; return}
             
         addSudoNumber(auteurMsgRepondu)
         repondre('succes')
              break;
              case 'del':
                let estsudo = await issudo(auteurMsgRepondu)
  if (estsudo) {
      
      removeSudoNumber(auteurMsgRepondu);
      repondre('This user is now non-sudo.');
  } else {
    repondre('This user is not sudo.');
  }
  break;


          default:
              repondre('bad option');
              break;
      }
  } else {
      repondre('mention the victim')
      return;
  }
});


timoth({ nomCom: "save", categorie: "Mods" }, async (dest, zk, commandeOptions) => {

  const { repondre , msgRepondu , superUser, auteurMessage } = commandeOptions;
  
    if ( superUser) { 
  
      if(msgRepondu) {

        console.log(msgRepondu) ;

        let msg ;
  
        if (msgRepondu.imageMessage) {
  
          
  
       let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.imageMessage) ;
       // console.log(msgRepondu) ;
       msg = {
  
         image : { url : media } ,
         caption : msgRepondu.imageMessage.caption,
         
       }
      
  
        } else if (msgRepondu.videoMessage) {
  
          let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.videoMessage) ;
  
          msg = {
  
            video : { url : media } ,
            caption : msgRepondu.videoMessage.caption,
            
          }
  
        } else if (msgRepondu.audioMessage) {
      
          let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.audioMessage) ;
         
          msg = {
     
            audio : { url : media } ,
            mimetype:'audio/mp4',
             }     
          
        } else if (msgRepondu.stickerMessage) {
  
      
          let media  = await zk.downloadAndSaveMediaMessage(msgRepondu.stickerMessage)
  
          let stickerMess = new Sticker(media, {
            pack: 'POPKID-MD',
            type: StickerTypes.CROPPED,
            categories: ["🤩", "🎉"],
            id: "12345",
            quality: 70,
            background: "transparent",
          });
          const stickerBuffer2 = await stickerMess.toBuffer();
         
          msg = { sticker: stickerBuffer2}
  
  
        }  else {
            msg = {
               text : msgRepondu.conversation,
            }
        }
  
      zk.sendMessage(auteurMessage,msg)
  
      } else { repondre('Mention the message that you want to save') }
  
  } else {
    repondre('only mods can use this command')
  }
  

  })
;


timoth({
  nomCom : 'mention',
  categorie : 'Mods',
} , async (dest,zk,commandeOptions) => {

 const {ms , repondre ,superUser , arg} = commandeOptions ;

 if (!superUser) {repondre('you do not have the rights for this command') ; return}

 const mbdd = require('../bdd/mention') ;

 let alldata = await  mbdd.recupererToutesLesValeurs() ;
  data = alldata[0] ;
    

 if(!arg || arg.length < 1) { 

  let etat ;

  if (alldata.length === 0 ) { repondre(`To activate or modify the mention; follow this syntax: mention link type message
  The different types are audio, video, image, and sticker.
  Example: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is popkid`) ; return}

      if(data.status == 'non') {
          etat = 'Desactived'
      } else {
        etat = 'Actived' ;
      }
      
      mtype = data.type || 'no data' ;

      url = data.url || 'no data' ;


      let msg = `Status: ${etat}
Type: ${mtype}
Link: ${url}

*Instructions:*

To activate or modify the mention, follow this syntax: mention link type message
The different types are audio, video, image, and sticker.
Example: mention https://static.animecorner.me/2023/08/op2.jpg image Hi, my name is popkid

To stop the mention, use mention stop`;

    repondre(msg) ;

    return ;
          }

 if(arg.length >= 2) {
   
      if(arg[0].startsWith('http') && (arg[1] == 'image' || arg[1] == 'audio' || arg[1] == 'video' || arg[1] == 'sticker')) {

            let args = [] ;
              for (i = 2 ; i < arg.length ; i++) {
                  args.push(arg[i]) ;
              }
          let message = args.join(' ') || '' ;

              await mbdd.addOrUpdateDataInMention(arg[0],arg[1],message);
              await mbdd.modifierStatusId1('oui')
              .then(() =>{
                  repondre('mention updated') ;
              })
        } else {
          repondre(`*Instructions:*
          To activate or modify the mention, follow this syntax: mention link type message. The different types are audio, video, image, and sticker.`)
     } 
    
    } else if ( arg.length === 1 && arg[0] == 'stop') {

        await mbdd.modifierStatusId1('non')
        .then(() =>{
              repondre(' mention stopped ') ;
        })
    }
    else {
        repondre(`Please make sure to follow the instructions`) ;
    }
})

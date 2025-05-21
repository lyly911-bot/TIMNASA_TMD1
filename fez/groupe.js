const {
  timoth
} = require("../timnasa/timoth");
const {
  Sticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  ajouterOuMettreAJourJid,
  mettreAJourAction,
  verifierEtatJid
} = require("../bdd/antilien");
const {
  atbajouterOuMettreAJourJid,
  atbverifierEtatJid
} = require("../bdd/antibot");
const {
  search,
  download
} = require("aptoide-scraper");
const fs = require("fs-extra");
const conf = require("../set");
const {
  default: axios
} = require("axios");
const {
  generatepp
} = require("../timnasa/mesfonctions");
timoth({
  'nomCom': "tagall",
  'categorie': "Group",
  'reaction': '📣'
}, async (_0x9becdc, _0x37c0fb, _0x147d1a) => {
  const {
    ms: _0x33c94e,
    repondre: _0x4c0dd0,
    arg: _0x4b6370,
    verifGroupe: _0x1f0f63,
    nomGroupe: _0x5b1dd9,
    infosGroupe: _0x2eed05,
    nomAuteurMessage: _0x3dccd1,
    verifAdmin: _0x3fd22d,
    superUser: _0x2c04de
  } = _0x147d1a;
  if (!_0x1f0f63) {
    _0x4c0dd0("✋🏿 ✋🏿this command is reserved for groups ❌");
    return;
  }
  if (!_0x4b6370 || _0x4b6370 === " ") {
    mess = "Aucun Message";
  } else {
    mess = _0x4b6370.join(" ");
  }
  ;
  let _0x1c7063 = _0x1f0f63 ? await _0x2eed05.participants : '';
  var _0x2dda42 = '';
  _0x2dda42 += "\n╔══ ▓▓ *TIMNASA_MD TAGGED ALL* ▓▓ ══╗\n> 👥 Group : " + _0x5b1dd9 + " 🚀 \n> 👤 Autor : *" + _0x3dccd1 + "* 👋 \n> 📜 Message : *" + mess + "* 📝\n╚════════════════════╝\n\n╔════════════════════╗ \n\n\n\n";
  let _0x448ff6 = ['🦴', '👀', "😮‍💨", '❌', '✔️', '😇', '⚙️', '🔧', '🎊', '😡', "🙏🏿", '⛔️', '$', '😟', '🥵', '🐅'];
  let _0x3a8a17 = Math.floor(Math.random() * (_0x448ff6.length - 1));
  for (const _0x29e5df of _0x1c7063) {
    _0x2dda42 += _0x448ff6[_0x3a8a17] + " @" + _0x29e5df.id.split('@')[0] + "\n";
  }
  if (_0x3fd22d || _0x2c04de) {
    _0x37c0fb.sendMessage(_0x9becdc, {
      'text': _0x2dda42,
      'mentions': _0x1c7063.map(_0x48b3cc => _0x48b3cc.id)
    }, {
      'quoted': _0x33c94e
    });
  } else {
    _0x4c0dd0("command reserved for admins");
  }
});
timoth({
  'nomCom': "invite",
  'categorie': "Group",
  'reaction': '🙋'
}, async (_0x5e1696, _0x3279d6, _0x98ece9) => {
  const {
    repondre: _0xbfc2e0,
    nomGroupe: _0x1c7a12,
    nomAuteurMessage: _0x593c52,
    verifGroupe: _0x295353
  } = _0x98ece9;
  if (!_0x295353) {
    _0xbfc2e0("wait bro , you want the link to my dm?");
    return;
  }
  ;
  var _0x37ce85 = await _0x3279d6.groupInviteCode(_0x5e1696);
  var _0x4b0d82 = "https://chat.whatsapp.com/" + _0x37ce85;
  let _0x344a8f = "Hello " + _0x593c52 + " \nThe recent Group link for " + _0x1c7a12 + " is here. \n\n\nGroup link:" + _0x4b0d82 + "\n\n> CLICK HERE TO JOIN 👇";
  _0xbfc2e0(_0x344a8f);
});
timoth({
  'nomCom': "promote",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0xfd49eb, _0x1c741b, _0x2095a6) => {
  let {
    repondre: _0x1ca81e,
    msgRepondu: _0x5efb06,
    infosGroupe: _0x7d16c6,
    auteurMsgRepondu: _0x2e7293,
    verifGroupe: _0x4d3777,
    auteurMessage: _0x194996,
    superUser: _0x1b73e7,
    idBot: _0x5d4470
  } = _0x2095a6;
  let _0x4e1c16 = _0x4d3777 ? await _0x7d16c6.participants : '';
  if (!_0x4d3777) {
    return _0x1ca81e("For groups only");
  }
  const _0x338b69 = _0x4ac508 => {
    for (const _0x2b7508 of _0x4e1c16) {
      if (_0x2b7508.id !== _0x4ac508) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x36cdcf = _0x471095 => {
    let _0xd93032 = [];
    for (m of _0x471095) {
      if (m.admin == null) {
        continue;
      }
      _0xd93032.push(m.id);
    }
    return _0xd93032;
  };
  const _0x33eabc = _0x4d3777 ? _0x36cdcf(_0x4e1c16) : '';
  let _0x17f7cc = _0x4d3777 ? _0x33eabc.includes(_0x2e7293) : false;
  let _0x4a38a6 = _0x338b69(_0x2e7293);
  let _0x4cdfac = _0x4d3777 ? _0x33eabc.includes(_0x194996) : false;
  zkad = _0x4d3777 ? _0x33eabc.includes(_0x5d4470) : false;
  try {
    if (_0x4cdfac || _0x1b73e7) {
      if (_0x5efb06) {
        if (zkad) {
          if (_0x4a38a6) {
            if (_0x17f7cc == false) {
              var _0x356833 = "🎊🎊🎊 @" + _0x2e7293.split('@')[0] + " rose in rank.\n\n he/she has been named group administrator.";
              await _0x1c741b.groupParticipantsUpdate(_0xfd49eb, [_0x2e7293], "promote");
              _0x1c741b.sendMessage(_0xfd49eb, {
                'text': _0x356833,
                'mentions': [_0x2e7293]
              });
            } else {
              return _0x1ca81e("This member is already an administrator of the group.");
            }
          } else {
            return _0x1ca81e("This user is not part of the group.");
          }
        } else {
          return _0x1ca81e("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x1ca81e("please tag the member to be nominated");
      }
    } else {
      return _0x1ca81e("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x329954) {
    _0x1ca81e("oups " + _0x329954);
  }
});
timoth({
  'nomCom': "demote",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x2f3aa1, _0x5a6bd5, _0x29d3c5) => {
  let {
    repondre: _0x30bb5b,
    msgRepondu: _0x2e9581,
    infosGroupe: _0x2a871d,
    auteurMsgRepondu: _0x46462a,
    verifGroupe: _0x58c81d,
    auteurMessage: _0x53f42a,
    superUser: _0x55f297,
    idBot: _0x3c12f2
  } = _0x29d3c5;
  let _0x17a61c = _0x58c81d ? await _0x2a871d.participants : '';
  if (!_0x58c81d) {
    return _0x30bb5b("For groups only");
  }
  const _0x71df89 = _0x24d1dc => {
    for (const _0x44c759 of _0x17a61c) {
      if (_0x44c759.id !== _0x24d1dc) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x191e59 = _0x2641b4 => {
    let _0xfbf002 = [];
    for (m of _0x2641b4) {
      if (m.admin == null) {
        continue;
      }
      _0xfbf002.push(m.id);
    }
    return _0xfbf002;
  };
  const _0xf6a308 = _0x58c81d ? _0x191e59(_0x17a61c) : '';
  let _0x30878d = _0x58c81d ? _0xf6a308.includes(_0x46462a) : false;
  let _0x50685d = _0x71df89(_0x46462a);
  let _0x58377a = _0x58c81d ? _0xf6a308.includes(_0x53f42a) : false;
  zkad = _0x58c81d ? _0xf6a308.includes(_0x3c12f2) : false;
  try {
    if (_0x58377a || _0x55f297) {
      if (_0x2e9581) {
        if (zkad) {
          if (_0x50685d) {
            if (_0x30878d == false) {
              _0x30bb5b("This member is not a group administrator.");
            } else {
              var _0x2413ba = '@' + _0x46462a.split('@')[0] + " was removed from his position as a group administrator\n";
              await _0x5a6bd5.groupParticipantsUpdate(_0x2f3aa1, [_0x46462a], "demote");
              _0x5a6bd5.sendMessage(_0x2f3aa1, {
                'text': _0x2413ba,
                'mentions': [_0x46462a]
              });
            }
          } else {
            return _0x30bb5b("This user is not part of the group.");
          }
        } else {
          return _0x30bb5b("Sorry I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x30bb5b("please tag the member to be removed");
      }
    } else {
      return _0x30bb5b("Sorry I cannot perform this action because you are not an administrator of the group.");
    }
  } catch (_0x4618d9) {
    _0x30bb5b("oups " + _0x4618d9);
  }
});
timoth({
  'nomCom': "remove",
  'categorie': "Group",
  'reaction': "👨🏿‍💼"
}, async (_0x2c674b, _0x3a9814, _0x3ed9db) => {
  let {
    repondre: _0x2a96b3,
    msgRepondu: _0x2944c9,
    infosGroupe: _0x1cc97d,
    auteurMsgRepondu: _0x4bcbea,
    verifGroupe: _0x11dc5b,
    nomAuteurMessage: _0x33ff0a,
    auteurMessage: _0x632aed,
    superUser: _0x13075f,
    idBot: _0x44df24
  } = _0x3ed9db;
  let _0x1c5e2c = _0x11dc5b ? await _0x1cc97d.participants : '';
  if (!_0x11dc5b) {
    return _0x2a96b3("for groups only");
  }
  const _0x42a581 = _0x55ec96 => {
    for (const _0xcd751b of _0x1c5e2c) {
      if (_0xcd751b.id !== _0x55ec96) {
        continue;
      } else {
        return true;
      }
    }
  };
  const _0x3146e9 = _0x4d20ce => {
    let _0x38c15f = [];
    for (m of _0x4d20ce) {
      if (m.admin == null) {
        continue;
      }
      _0x38c15f.push(m.id);
    }
    return _0x38c15f;
  };
  const _0x371589 = _0x11dc5b ? _0x3146e9(_0x1c5e2c) : '';
  let _0x1f1515 = _0x11dc5b ? _0x371589.includes(_0x4bcbea) : false;
  let _0x267615 = _0x42a581(_0x4bcbea);
  let _0x4fd427 = _0x11dc5b ? _0x371589.includes(_0x632aed) : false;
  zkad = _0x11dc5b ? _0x371589.includes(_0x44df24) : false;
  try {
    if (_0x4fd427 || _0x13075f) {
      if (_0x2944c9) {
        if (zkad) {
          if (_0x267615) {
            if (_0x1f1515 == false) {
              var _0x963281 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
                'pack': "Lucky_Md",
                'author': _0x33ff0a,
                'type': StickerTypes.FULL,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x32,
                'background': "#000000"
              });
              await _0x963281.toFile("st.webp");
              var _0xbab72a = '@' + _0x4bcbea.split('@')[0] + " was removed from the group.\n";
              await _0x3a9814.groupParticipantsUpdate(_0x2c674b, [_0x4bcbea], "remove");
              _0x3a9814.sendMessage(_0x2c674b, {
                'text': _0xbab72a,
                'mentions': [_0x4bcbea]
              });
            } else {
              _0x2a96b3("This member cannot be removed because he is an administrator of the group.");
            }
          } else {
            return _0x2a96b3("This user is not part of the group.");
          }
        } else {
          return _0x2a96b3("Sorry, I cannot perform this action because I am not an administrator of the group.");
        }
      } else {
        _0x2a96b3("please tag the member to be removed");
      }
    } else {
      return _0x2a96b3("Sorry I cannot perform this action because you are not an administrator of the group .");
    }
  } catch (_0x3f7662) {
    _0x2a96b3("oups " + _0x3f7662);
  }
});
timoth({
  'nomCom': "del",
  'categorie': "Group",
  'reaction': '🧹'
}, async (_0x5903a9, _0x8e3dc0, _0x4a4156) => {
  const {
    ms: _0x14f2e5,
    repondre: _0x49ebbf,
    verifGroupe: _0x294bb7,
    auteurMsgRepondu: _0x3b1f57,
    idBot: _0x3222b9,
    msgRepondu: _0x562551,
    verifAdmin: _0x4158fb,
    superUser: _0x208e91
  } = _0x4a4156;
  if (!_0x562551) {
    _0x49ebbf("Please mention the message to delete.");
    return;
  }
  if (_0x208e91 && _0x3b1f57 == _0x3222b9) {
    if (_0x3b1f57 == _0x3222b9) {
      const _0x35e40d = {
        'remoteJid': _0x5903a9,
        'fromMe': true,
        'id': _0x14f2e5.message.extendedTextMessage.contextInfo.stanzaId
      };
      await _0x8e3dc0.sendMessage(_0x5903a9, {
        'delete': _0x35e40d
      });
      return;
    }
  }
  if (_0x294bb7) {
    if (_0x4158fb || _0x208e91) {
      try {
        const _0x46f12a = {
          'remoteJid': _0x5903a9,
          'id': _0x14f2e5.message.extendedTextMessage.contextInfo.stanzaId,
          'fromMe': false,
          'participant': _0x14f2e5.message.extendedTextMessage.contextInfo.participant
        };
        await _0x8e3dc0.sendMessage(_0x5903a9, {
          'delete': _0x46f12a
        });
        return;
      } catch (_0x19be36) {
        _0x49ebbf("I need admin rights.");
      }
    } else {
      _0x49ebbf("Sorry, you are not an administrator of the group.");
    }
  }
});
timoth({
  'nomCom': "info",
  'categorie': "Group"
}, async (_0x543afa, _0x1abdac, _0xd351c2) => {
  const {
    ms: _0x5e5c8e,
    repondre: _0x2d7968,
    verifGroupe: _0x3e590c
  } = _0xd351c2;
  if (!_0x3e590c) {
    _0x2d7968("order reserved for the group only");
    return;
  }
  ;
  try {
    ppgroup = await _0x1abdac.profilePictureUrl(_0x543afa, "image");
  } catch {
    ppgroup = conf.IMAGE_MENU;
  }
  const _0x1a6848 = await _0x1abdac.groupMetadata(_0x543afa);
  let _0x3fcce3 = {
    'image': {
      'url': ppgroup
    },
    'caption': "*━━━━『Info du groupe』━━━━*\n\n*🎐Name:* " + _0x1a6848.subject + "\n\n*🔩Group's ID:* " + _0x543afa + "\n\n*🔍Desc:* \n\n" + _0x1a6848.desc
  };
  _0x1abdac.sendMessage(_0x543afa, _0x3fcce3, {
    'quoted': _0x5e5c8e
  });
});
timoth({
  'nomCom': "antilink",
  'categorie': "Group",
  'reaction': '🔗'
}, async (_0x510290, _0x5892e4, _0x32ce79) => {
  var {
    repondre: _0x2d985e,
    arg: _0x92f31b,
    verifGroupe: _0x16f6a2,
    superUser: _0x4cf7e6,
    verifAdmin: _0x22e687
  } = _0x32ce79;
  if (!_0x16f6a2) {
    return _0x2d985e("*for groups only*");
  }
  if (_0x4cf7e6 || _0x22e687) {
    const _0x3a2acb = await verifierEtatJid(_0x510290);
    try {
      if (!_0x92f31b || !_0x92f31b[0] || _0x92f31b === " ") {
        _0x2d985e("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
        return;
      }
      ;
      if (_0x92f31b[0] === 'on') {
        if (_0x3a2acb) {
          _0x2d985e("the antilink is already activated for this group");
        } else {
          await ajouterOuMettreAJourJid(_0x510290, "oui");
          _0x2d985e("the antilink is activated successfully");
        }
      } else {
        if (_0x92f31b[0] === "off") {
          if (_0x3a2acb) {
            await ajouterOuMettreAJourJid(_0x510290, "non");
            _0x2d985e("The antilink has been successfully deactivated");
          } else {
            _0x2d985e("antilink is not activated for this group");
          }
        } else {
          if (_0x92f31b.join('').split('/')[0] === "action") {
            let _0x2004f6 = _0x92f31b.join('').split('/')[1].toLowerCase();
            if (_0x2004f6 == "remove" || _0x2004f6 == "warn" || _0x2004f6 == "delete") {
              await mettreAJourAction(_0x510290, _0x2004f6);
              _0x2d985e("The anti-link action has been updated to " + _0x92f31b.join('').split('/')[1]);
            } else {
              _0x2d985e("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x2d985e("antilink on to activate the anti-link feature\nantilink off to deactivate the anti-link feature\nantilink action/remove to directly remove the link without notice\nantilink action/warn to give warnings\nantilink action/delete to remove the link without any sanctions\n\nPlease note that by default, the anti-link feature is set to delete.");
          }
        }
      }
    } catch (_0x403eb4) {
      _0x2d985e(_0x403eb4);
    }
  } else {
    _0x2d985e("You are not entitled to this order");
  }
});
timoth({
  'nomCom': "antibot",
  'categorie': "Group",
  'reaction': '🔗'
}, async (_0x4d88fa, _0x588b2d, _0x4df5e5) => {
  var {
    repondre: _0x239d26,
    arg: _0x3b694c,
    verifGroupe: _0x3bd313,
    superUser: _0x8f64d2,
    verifAdmin: _0xcea221
  } = _0x4df5e5;
  if (!_0x3bd313) {
    return _0x239d26("*for groups only*");
  }
  if (_0x8f64d2 || _0xcea221) {
    const _0x1e00ec = await atbverifierEtatJid(_0x4d88fa);
    try {
      if (!_0x3b694c || !_0x3b694c[0] || _0x3b694c === " ") {
        _0x239d26("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
        return;
      }
      ;
      if (_0x3b694c[0] === 'on') {
        if (_0x1e00ec) {
          _0x239d26("the antibot is already activated for this group");
        } else {
          await atbajouterOuMettreAJourJid(_0x4d88fa, "oui");
          _0x239d26("the antibot is successfully activated");
        }
      } else {
        if (_0x3b694c[0] === "off") {
          if (_0x1e00ec) {
            await atbajouterOuMettreAJourJid(_0x4d88fa, "non");
            _0x239d26("The antibot has been successfully deactivated");
          } else {
            _0x239d26("antibot is not activated for this group");
          }
        } else {
          if (_0x3b694c.join('').split('/')[0] === "action") {
            let _0xb9e522 = _0x3b694c.join('').split('/')[1].toLowerCase();
            if (_0xb9e522 == "remove" || _0xb9e522 == "warn" || _0xb9e522 == "delete") {
              await mettreAJourAction(_0x4d88fa, _0xb9e522);
              _0x239d26("The anti-bot action has been updated to " + _0x3b694c.join('').split('/')[1]);
            } else {
              _0x239d26("The only actions available are warn, remove, and delete");
            }
          } else {
            _0x239d26("antibot on to activate the anti-bot feature\nantibot off to deactivate the antibot feature\nantibot action/remove to directly remove the bot without notice\nantibot action/warn to give warnings\nantilink action/delete to remove the bot message without any sanctions\n\nPlease note that by default, the anti-bot feature is set to delete.");
          }
        }
      }
    } catch (_0x2bd6e6) {
      _0x239d26(_0x2bd6e6);
    }
  } else {
    _0x239d26("You are not entitled to this order");
  }
});
timoth({
  'nomCom': "group",
  'categorie': "Group"
}, async (_0x2879d5, _0x3c65f0, _0x2303d2) => {
  const {
    repondre: _0x9886a1,
    verifGroupe: _0x35b82e,
    verifAdmin: _0x2c99ef,
    superUser: _0x2780fd,
    arg: _0x1a90f3
  } = _0x2303d2;
  if (!_0x35b82e) {
    _0x9886a1("order reserved for group only");
    return;
  }
  ;
  if (_0x2780fd || _0x2c99ef) {
    if (!_0x1a90f3[0]) {
      _0x9886a1("Instructions:\n\nType group open or close");
      return;
    }
    const _0x43d3c9 = _0x1a90f3.join(" ");
    switch (_0x43d3c9) {
      case "open":
        await _0x3c65f0.groupSettingUpdate(_0x2879d5, "not_announcement");
        _0x9886a1("group open");
        break;
      case "close":
        await _0x3c65f0.groupSettingUpdate(_0x2879d5, "announcement");
        _0x9886a1("Group close successfully");
        break;
      default:
        _0x9886a1("Please don't invent an option");
    }
  } else {
    _0x9886a1("order reserved for the administratorr");
    return;
  }
});
timoth({
  'nomCom': "left",
  'categorie': "Mods"
}, async (_0x4869dd, _0x44c48b, _0x1df53e) => {
  const {
    repondre: _0x13c35b,
    verifGroupe: _0x300d38,
    superUser: _0x46eaf8
  } = _0x1df53e;
  if (!_0x300d38) {
    _0x13c35b("order reserved for group only");
    return;
  }
  ;
  if (!_0x46eaf8) {
    _0x13c35b("command reserved for the bot owner");
    return;
  }
  await _0x13c35b("sayonnara");
  _0x44c48b.groupLeave(_0x4869dd);
});
timoth({
  'nomCom': "gname",
  'categorie': "Group"
}, async (_0x499309, _0x95b5fc, _0x4e3b8f) => {
  const {
    arg: _0x46c09f,
    repondre: _0x1b7a44,
    verifAdmin: _0x24dc6f
  } = _0x4e3b8f;
  if (!_0x24dc6f) {
    _0x1b7a44("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x46c09f[0]) {
    _0x1b7a44("Please enter the group name");
    return;
  }
  ;
  const _0x5de718 = _0x46c09f.join(" ");
  await _0x95b5fc.groupUpdateSubject(_0x499309, _0x5de718);
  _0x1b7a44("group name refresh: *" + _0x5de718 + '*');
});
timoth({
  'nomCom': "gdesc",
  'categorie': "Group"
}, async (_0x54816d, _0x5e359d, _0x398e1a) => {
  const {
    arg: _0x91e6a1,
    repondre: _0x154bf7,
    verifAdmin: _0xeb570d
  } = _0x398e1a;
  if (!_0xeb570d) {
    _0x154bf7("order reserved for administrators of the group");
    return;
  }
  ;
  if (!_0x91e6a1[0]) {
    _0x154bf7("Please enter the group description");
    return;
  }
  ;
  const _0x21565 = _0x91e6a1.join(" ");
  await _0x5e359d.groupUpdateDescription(_0x54816d, _0x21565);
  _0x154bf7("group description update: *" + _0x21565 + '*');
});
timoth({
  'nomCom': "gpp",
  'categorie': "Group"
}, async (_0x3ab2ff, _0x1c1ea9, _0x426284) => {
  const {
    repondre: _0x1ff5e2,
    msgRepondu: _0x119ac2,
    verifAdmin: _0x54e334
  } = _0x426284;
  if (!_0x54e334) {
    _0x1ff5e2("order reserved for administrators of the group");
    return;
  }
  ;
  if (_0x119ac2.imageMessage) {
    const _0x2cf6e0 = await _0x1c1ea9.downloadAndSaveMediaMessage(_0x119ac2.imageMessage);
    let _0x69774e = await generatepp(_0x2cf6e0);
    console.log(_0x69774e);
    fs.writeFile("monpdp.jpg", _0x69774e.img, async _0x579d3d => {
      if (_0x579d3d) {
        console.log(_0x579d3d);
      } else {
        await _0x1c1ea9.updateProfilePicture(_0x3ab2ff, {
          'url': "monpdp.jpg"
        });
        _0x1c1ea9.sendMessage(_0x3ab2ff, {
          'text': "Group pfp changed"
        });
        fs.unlinkSync(_0x2cf6e0);
      }
    });
  } else {
    _0x1ff5e2("Please mention an image");
  }
});
timoth({
  'nomCom': "htag",
  'categorie': "Group",
  'reaction': '🎤'
}, async (_0x818619, _0x1aea1a, _0x9261ef) => {
  const {
    repondre: _0x28b87d,
    msgRepondu: _0xcd71,
    verifGroupe: _0x5b92b4,
    arg: _0x51792a,
    verifAdmin: _0x3aff8f,
    superUser: _0x48557d
  } = _0x9261ef;
  if (!_0x5b92b4) {
    _0x28b87d("This command is only allowed in groups.");
  }
  ;
  if (_0x3aff8f || _0x48557d) {
    let _0x5799af = await _0x1aea1a.groupMetadata(_0x818619);
    let _0x307395 = [];
    for (const _0x6e4213 of _0x5799af.participants) {
      _0x307395.push(_0x6e4213.id);
    }
    if (_0xcd71) {
      console.log(_0xcd71);
      let _0x54987b;
      if (_0xcd71.imageMessage) {
        let _0x44833c = await _0x1aea1a.downloadAndSaveMediaMessage(_0xcd71.imageMessage);
        _0x54987b = {
          'image': {
            'url': _0x44833c
          },
          'caption': _0xcd71.imageMessage.caption,
          'mentions': _0x307395
        };
      } else {
        if (_0xcd71.videoMessage) {
          let _0x2e3f7e = await _0x1aea1a.downloadAndSaveMediaMessage(_0xcd71.videoMessage);
          _0x54987b = {
            'video': {
              'url': _0x2e3f7e
            },
            'caption': _0xcd71.videoMessage.caption,
            'mentions': _0x307395
          };
        } else {
          if (_0xcd71.audioMessage) {
            let _0x33065c = await _0x1aea1a.downloadAndSaveMediaMessage(_0xcd71.audioMessage);
            _0x54987b = {
              'audio': {
                'url': _0x33065c
              },
              'mimetype': "audio/mp4",
              'mentions': _0x307395
            };
          } else {
            if (_0xcd71.stickerMessage) {
              let _0x32f930 = await _0x1aea1a.downloadAndSaveMediaMessage(_0xcd71.stickerMessage);
              let _0x54fb50 = new Sticker(_0x32f930, {
                'pack': "Fredie-Tech",
                'type': StickerTypes.CROPPED,
                'categories': ['🤩', '🎉'],
                'id': "12345",
                'quality': 0x46,
                'background': "transparent"
              });
              const _0x1b59ad = await _0x54fb50.toBuffer();
              _0x54987b = {
                'sticker': _0x1b59ad,
                'mentions': _0x307395
              };
            } else {
              _0x54987b = {
                'text': _0xcd71.conversation,
                'mentions': _0x307395
              };
            }
          }
        }
      }
      _0x1aea1a.sendMessage(_0x818619, _0x54987b);
    } else {
      if (!_0x51792a || !_0x51792a[0]) {
        _0x28b87d("Enter the text to announce or mention the message to announce");
        ;
        return;
      }
      ;
      _0x1aea1a.sendMessage(_0x818619, {
        'text': _0x51792a.join(" "),
        'mentions': _0x307395
      });
    }
  } else {
    _0x28b87d("Command reserved for administrators.");
  }
});
timoth({
  'nomCom': "aplication",
  'reaction': '✨',
  'categorie': "Search"
}, async (_0x447f44, _0x4f9776, _0x4ec060) => {
  const {
    repondre: _0x33d81b,
    arg: _0x352460,
    ms: _0xcd5f87
  } = _0x4ec060;
  try {
    const _0x37e383 = _0x352460.join(" ");
    if (!_0x37e383) {
      return _0x33d81b("*Enter the name of the application to search for*");
    }
    const _0x2f9103 = await search(_0x37e383);
    if (_0x2f9103.length === 0) {
      return _0x33d81b("*can't find application, please enter another name*");
    }
    const _0x499063 = await download(_0x2f9103[0].id);
    const _0x1db7d3 = parseInt(_0x499063.size);
    if (_0x1db7d3 > 300) {
      return _0x33d81b("The file exceeds 300 MB, unable to download.");
    }
    const _0x20d9b9 = _0x499063.dllink;
    const _0x5fd732 = "『 *LUCKY_MDD APPLICATION D.W.D* 』\n\n*Name :* " + _0x499063.name + "\n*Id :* " + _0x499063["package"] + "\n*Last Update :* " + _0x499063.lastup + "\n*Size :* " + _0x499063.size + "\n";
    const _0x41a2a3 = (_0x499063?.["name"] || "Downloader") + ".apk";
    const _0x22ffaf = await axios.get(_0x20d9b9, {
      'responseType': "stream"
    });
    const _0x15608d = fs.createWriteStream(_0x41a2a3);
    _0x22ffaf.data.pipe(_0x15608d);
    await new Promise((_0x40cf0, _0x58e65c) => {
      _0x15608d.on("finish", _0x40cf0);
      _0x15608d.on("error", _0x58e65c);
    });
    const _0x580dd5 = {
      'document': fs.readFileSync(_0x41a2a3),
      'mimetype': "application/vnd.android.package-archive",
      'fileName': _0x41a2a3
    };
    _0x4f9776.sendMessage(_0x447f44, {
      'image': {
        'url': _0x499063.icon
      },
      'caption': _0x5fd732
    }, {
      'quoted': _0xcd5f87
    });
    _0x4f9776.sendMessage(_0x447f44, _0x580dd5, {
      'quoted': _0xcd5f87
    });
    fs.unlinkSync(_0x41a2a3);
  } catch (_0x5240bf) {
    console.error("Erreur lors du traitement de la commande apk:", _0x5240bf);
    _0x33d81b("*Error during apk command processing*");
  }
});
const cron = require("../bdd/cron");
timoth({
  'nomCom': "amute",
  'categorie': "Group"
}, async (_0xd4a6c0, _0x197eda, _0xf36316) => {
  const {
    arg: _0x31df45,
    repondre: _0x81a400,
    verifAdmin: _0x3fc697
  } = _0xf36316;
  if (!_0x3fc697) {
    _0x81a400("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0xd4a6c0);
  if (!_0x31df45 || _0x31df45.length == 0) {
    let _0x4593fc;
    if (group_cron == null || group_cron.mute_at == null) {
      _0x4593fc = "No time set for automatic mute";
    } else {
      _0x4593fc = "The group will be muted at " + group_cron.mute_at.split(':')[0] + " " + group_cron.mute_at.split(':')[1];
    }
    let _0x208382 = "* *State:* " + _0x4593fc + "\n * *Instructions:* To activate automatic mute, add the minute and hour after the command separated by ':'\n Example automute 9:30\n * To delete the automatic mute, use the command *automute del*";
    _0x81a400(_0x208382);
    return;
  } else {
    let _0x2d8fba = _0x31df45.join(" ");
    if (_0x2d8fba.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x81a400("No cronometrage is active");
      } else {
        await cron.delCron(_0xd4a6c0);
        _0x81a400("The automatic mute has been removed; restart to apply changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x2d8fba.includes(':')) {
      await cron.addCron(_0xd4a6c0, "mute_at", _0x2d8fba);
      _0x81a400("Setting up automatic mute for " + _0x2d8fba + " ; restart to apply changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x81a400("Please enter a valid time with hour and minute separated by :");
    }
  }
});
timoth({
  'nomCom': "aunmute",
  'categorie': "Group"
}, async (_0x5ee403, _0x341ab8, _0xa4f972) => {
  const {
    arg: _0x5438ce,
    repondre: _0x4a2cf9,
    verifAdmin: _0x577e4a
  } = _0xa4f972;
  if (!_0x577e4a) {
    _0x4a2cf9("You are not an administrator of the group");
    return;
  }
  group_cron = await cron.getCronById(_0x5ee403);
  if (!_0x5438ce || _0x5438ce.length == 0) {
    let _0x29d26c;
    if (group_cron == null || group_cron.unmute_at == null) {
      _0x29d26c = "No time set for autounmute";
    } else {
      _0x29d26c = "The group will be un-muted at " + group_cron.unmute_at.split(':')[0] + "H " + group_cron.unmute_at.split(':')[1];
    }
    let _0x1503c9 = "* *State:* " + _0x29d26c + "\n * *Instructions:* To activate autounmute, add the minute and hour after the command separated by ':'\n Example autounmute 7:30\n * To delete autounmute, use the command *autounmute del*";
    _0x4a2cf9(_0x1503c9);
    return;
  } else {
    let _0x2e63c1 = _0x5438ce.join(" ");
    if (_0x2e63c1.toLowerCase() === "del") {
      if (group_cron == null) {
        _0x4a2cf9("No cronometrage has been activated");
      } else {
        await cron.delCron(_0x5ee403);
        _0x4a2cf9("The autounmute has been removed; restart to apply the changes").then(() => {
          exec("pm2 restart all");
        });
      }
    } else if (_0x2e63c1.includes(':')) {
      await cron.addCron(_0x5ee403, "unmute_at", _0x2e63c1);
      _0x4a2cf9("Setting up autounmute for " + _0x2e63c1 + "; restart to apply the changes").then(() => {
        exec("pm2 restart all");
      });
    } else {
      _0x4a2cf9("Please enter a valid time with hour and minute separated by :");
    }
  }
});
timoth({
  'nomCom': "fkick",
  'categorie': "Group"
}, async (_0x3ab4ee, _0x498434, _0x52346c) => {
  const {
    arg: _0xbc8ed1,
    repondre: _0x36ea4d,
    verifAdmin: _0x4099d9,
    superUser: _0x49ac7c,
    verifZokouAdmin: _0xdf046d
  } = _0x52346c;
  if (_0x4099d9 || _0x49ac7c) {
    if (!_0xdf046d) {
      _0x36ea4d("You need administrative rights to perform this command");
      return;
    }
    if (!_0xbc8ed1 || _0xbc8ed1.length == 0) {
      _0x36ea4d("Please enter the country code whose members will be removed");
      return;
    }
    let _0x23068f = await _0x498434.groupMetadata(_0x3ab4ee);
    let _0x194ea9 = _0x23068f.participants;
    for (let _0xc4b7cc = 0; _0xc4b7cc < _0x194ea9.length; _0xc4b7cc++) {
      if (_0x194ea9[_0xc4b7cc].id.startsWith(_0xbc8ed1[0]) && _0x194ea9[_0xc4b7cc].admin === null) {
        await _0x498434.groupParticipantsUpdate(_0x3ab4ee, [_0x194ea9[_0xc4b7cc].id], "remove");
      }
    }
  } else {
    _0x36ea4d("Sorry, you are not an administrator of the group");
  }
});
timoth({
  'nomCom': "nsfw",
  'categorie': "Group"
}, async (_0x1ea72c, _0x4498f0, _0x54e2ef) => {
  const {
    arg: _0x11593b,
    repondre: _0x33ea46,
    verifAdmin: _0x341b19
  } = _0x54e2ef;
  if (!_0x341b19) {
    _0x33ea46("Sorry, you cannot enable NSFW content without being an administrator of the group");
    return;
  }
  let _0x211500 = require("../bdd/hentai");
  let _0x29f08 = await _0x211500.checkFromHentaiList(_0x1ea72c);
  if (_0x11593b[0] == 'on') {
    if (_0x29f08) {
      _0x33ea46("NSFW content is already active for this group");
      return;
    }
    ;
    await _0x211500.addToHentaiList(_0x1ea72c);
    _0x33ea46("NSFW content is now active for this group");
  } else {
    if (_0x11593b[0] == "off") {
      if (!_0x29f08) {
        _0x33ea46("NSFW content is already disabled for this group");
        return;
      }
      ;
      await _0x211500.removeFromHentaiList(_0x1ea72c);
      _0x33ea46("NSFW content is now disabled for this group");
    } else {
      _0x33ea46("You must enter \"on\" or \"off\"");
    }
  }
});

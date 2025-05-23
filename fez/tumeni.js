const {
  timoth
} = require(__dirname + "/../timnasa/timoth");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
timoth({
  'nomCom': "publicmenu",
  'categorie': "General"
}, async (_0x32d997, _0x261f21, _0x35c1de) => {
  let {
    ms: _0x2f7eec,
    repondre: _0x20560f,
    prefixe: _0x40d5c4,
    nomAuteurMessage: _0x3460ee,
    mybotpic: _0x548c54
  } = _0x35c1de;
  let {
    cm: _0x1cfe72
  } = require(__dirname + "/../timnasa//timoth");
  var _0x2ea65b = {};
  var _0x2ee529 = s.MODE.toLowerCase() !== "yes" ? "private" : "public";
  _0x1cfe72.map(async _0x36b25f => {
    if (!_0x2ea65b[_0x36b25f.categorie]) {
      _0x2ea65b[_0x36b25f.categorie] = [];
    }
    _0x2ea65b[_0x36b25f.categorie].push(_0x36b25f.nomCom);
  });
  moment.tz.setDefault("Africa/Nairobi");
  const _0x3fb484 = moment().format("DD/MM/YYYY");
  const _0x3d18ff = moment().hour();
  let _0x1e92e3 = "Good Morning";
  if (_0x3d18ff >= 12 && _0x3d18ff < 18) {
    _0x1e92e3 = "Good afternnon!";
  } else {
    if (_0x3d18ff >= 18) {
      _0x1e92e3 = "Good Everning!";
    } else if (_0x3d18ff >= 22 || _0x3d18ff < 5) {
      _0x1e92e3 = "Good Night 🌌";
    }
  }
  let _0x5027f1 = "╭───────────⊷\n┊▢ʙᴏᴛ ɴᴀᴍᴇ : *ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ*\n┊▢ᴘʀᴇғɪx : *[ " + s.PREFIXE + " ]*\n┊▢ᴍᴏᴅᴇ : *" + _0x2ee529 + "*\n┊▢ᴅᴀᴛᴇ : *" + _0x3fb484 + "*\n╰─┬────────┬⊷\n╭─┴────────┴⊷\n┊ ❍[0]•MENULIST\n┊ ❍[1]•MENU-AI\n┊ ❍[2]•MENU-GENERAL\n┊ ❍[3]•MENU-DONLOAD\n┊ ❍[4]•MENU-USE\n┊ ❍[5]•MENU-MOD\n┊ ❍[6]•MENU-FUN\n┊ ❍[7]•MENU-BOOKS\n┊ ❍[8]•MENU-SEARCH\n┊ ❍[9]•MENU-GROUP\n┊ ❍[10]•MENU-CONTROL\n╰─┬⊷\n╭─┴⊷ʀᴇᴘʟʏ ɴᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅs 1ᴛᴏ10\n╰┬───────⊷⳹\n┌┤🌇 *Am say : " + _0x1e92e3 + "*\n┊╰─────────────⊷\n*╰⊷••ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ••──────⊷* ";
  const _0x276cd7 = ["https://files.catbox.moe/7n8oyx.jpg", "https://files.catbox.moe/znvqsv.jpg", "https://files.catbox.moe/nj1w1s.jpg"];
  const _0x866ebb = ["https://files.catbox.moe/8gkj9l.jpg", "https://files.catbox.moe/nj1w1s.jpg", "https://files.catbox.moe/znvqsv.jpg"];
  const _0x472af9 = Math.random() > 0.5;
  let _0x2f3579;
  let _0x135a79;
  let _0xad9813;
  if (_0x472af9) {
    _0x2f3579 = _0x548c54();
    _0x135a79 = _0x276cd7[Math.floor(Math.random() * _0x276cd7.length)];
    _0xad9813 = "renderLargerThumbnail";
  } else {
    _0x2f3579 = _0x866ebb[Math.floor(Math.random() * _0x866ebb.length)];
    _0x135a79 = _0x2f3579;
    _0xad9813 = "renderSmallThumbnail";
  }
  try {
    if (_0x2f3579.match(/\.(mp4|gif)$/i)) {
      await _0x261f21.sendMessage(_0x32d997, {
        'video': {
          'url': _0x2f3579
        },
        'caption': _0x5027f1,
        'footer': "*TimnasaTech*, developed by TimnasaKing",
        'gifPlayback': true,
        'contextInfo': {
          'externalAdReply': {
            'title': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ",
            'body': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
            'mediaType': 0x1,
            'thumbnailUrl': _0x135a79,
            'sourceUrl': "https://github.com/Next5x/TIMNASA_TMD1",
            'showAdAttribution': true,
            [_0xad9813]: true
          }
        }
      }, {
        'quoted': _0x2f7eec
      });
    } else {
      await _0x261f21.sendMessage(_0x32d997, {
        'image': {
          'url': _0x2f3579
        },
        'caption': _0x5027f1,
        'footer': "*ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ*, developed by ᴛɪᴍɴᴀsᴀ",
        'contextInfo': {
          'externalAdReply': {
            'title': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ",
            'body': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
            'mediaType': 0x1,
            'thumbnailUrl': _0x135a79,
            'sourceUrl': "https://github.com/Next5x/TIMNASA_TMD1",
            'showAdAttribution': true,
            [_0xad9813]: true
          }
        }
      }, {
        'quoted': _0x2f7eec
      });
    }
  } catch (_0x54a5d9) {
    console.log("🥵🥵 Error sending menu: " + _0x54a5d9);
    _0x20560f("🥵🥵 Error sending menu: " + _0x54a5d9);
  }
  const _0x410b0b = ["https://files.catbox.moe/i8ks0j.mp3"];
  const _0x5aa213 = _0x410b0b[Math.floor(Math.random() * _0x410b0b.length)];
  try {
    await _0x261f21.sendMessage(_0x32d997, {
      'audio': {
        'url': _0x5aa213
      },
      'mimetype': "audio/mpeg",
      'ptt': true,
      'contextInfo': {
        'externalAdReply': {
          'title': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ",
          'body': "ᴛɪᴍɴᴀsᴀ ᴛᴍᴅ ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ",
          'mediaType': 0x1,
          'thumbnailUrl': _0x135a79,
          'sourceUrl': "https://github.com/Next5x/TIMNASA_TMD1",
          'showAdAttribution': true,
          [_0xad9813]: true
        }
      }
    }, {
      'quoted': _0x2f7eec
    });
  } catch (_0x226891) {
    console.log("🥵🥵 Error sending audio: " + _0x226891);
    _0x20560f("🥵🥵 Error sending audio: " + _0x226891);
  }
})

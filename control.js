'use strict';

var __createBinding = this && this.__createBinding || (Object.create ? function (_0x24c8a3, _0x238dfa, _0x3ceaf6, _0x3fa72c) {
  if (_0x3fa72c === undefined) {
    _0x3fa72c = _0x3ceaf6;
  }
  var _0x346211 = Object.getOwnPropertyDescriptor(_0x238dfa, _0x3ceaf6);
  if (!_0x346211 || ('get' in _0x346211 ? !_0x238dfa.__esModule : _0x346211.writable || _0x346211.configurable)) {
    _0x346211 = {
      'enumerable': true,
      'get': function () {
        return _0x238dfa[_0x3ceaf6];
      }
    };
  }
  Object.defineProperty(_0x24c8a3, _0x3fa72c, _0x346211);
} : function (_0x1e47e7, _0x2509ad, _0x5a04b5, _0x14a7d6) {
  if (_0x14a7d6 === undefined) {
    _0x14a7d6 = _0x5a04b5;
  }
  _0x1e47e7[_0x14a7d6] = _0x2509ad[_0x5a04b5];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x4a0f95, _0x4ea8fc) {
  Object.defineProperty(_0x4a0f95, "default", {
    'enumerable': true,
    'value': _0x4ea8fc
  });
} : function (_0x4d6fc7, _0x592ace) {
  _0x4d6fc7["default"] = _0x592ace;
});
var __importStar = this && this.__importStar || function (_0x370596) {
  if (_0x370596 && _0x370596.__esModule) {
    return _0x370596;
  }
  var _0x53fac6 = {};
  if (_0x370596 != null) {
    for (var _0x400a58 in _0x370596) if (_0x400a58 !== "default" && Object.prototype.hasOwnProperty.call(_0x370596, _0x400a58)) {
      __createBinding(_0x53fac6, _0x370596, _0x400a58);
    }
  }
  __setModuleDefault(_0x53fac6, _0x370596);
  return _0x53fac6;
};
var __importDefault = this && this.__importDefault || function (_0x3bd676) {
  return _0x3bd676 && _0x3bd676.__esModule ? _0x3bd676 : {
    'default': _0x3bd676
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require("@whiskeysockets/baileys"));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1['default'].child({});
logger.level = "silent";
const pino = require("pino");
const boom_1 = require("@hapi/boom");
const conf = require("./set");
let fs = require('fs-extra');
let path = require("path");
const FileType = require("file-type");
const {
  Sticker,
  createSticker,
  StickerTypes
} = require("wa-sticker-formatter");
const {
  verifierEtatJid,
  recupererActionJid
} = require("./data/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./data/antibot");
let evt = require(__dirname + "/timnasa/timoth");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./data/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require('./data/banGroup');
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./data/onlyAdmin");
let {
  reagir
} = require(__dirname + "/timnasa/app");
var session = conf.session.replace(/TIMNASA-MD;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/scan/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + "/scan/creds.json") && session != "zokk") {
      await fs.writeFileSync(__dirname + "/scan/creds.json", atob(session), "utf8");
    }
  } catch (_0xf9816d) {
    console.log("Session Invalid " + _0xf9816d);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': 'silent',
    'stream': "store"
  })
});
setTimeout(() => {
  authentification();
  async function _0x22c19c() {
    0x0;
    const {
      version: _0x50ee82,
      isLatest: _0x348936
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0x1fbadc,
      saveCreds: _0x5bce68
    } = await baileys_1.useMultiFileAuthState(__dirname + "/scan");
    0x0;
    const _0x405f73 = {
      'version': _0x50ee82,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ['Timnasa-Md', "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x1fbadc.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x1fbadc.keys, logger)
      },
      'getMessage': async _0x103bfc => {
        if (store) {
          const _0x304bb7 = await store.loadMessage(_0x103bfc.remoteJid, _0x103bfc.id, undefined);
          return _0x304bb7.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x16eea7 = baileys_1["default"](_0x405f73);
    store.bind(_0x16eea7.ev);
    function _0x49ed40() {
      const _0x35cc1c = {
        'timeZone': "Africa/Dar_Es_Salam",
        'year': "numeric",
        'month': "2-digit",
        'day': '2-digit',
        'hour': "2-digit",
        'minute': '2-digit',
        'second': "2-digit",
        'hour12': false
      };
      const _0x236242 = new Intl.DateTimeFormat("en-KE", _0x35cc1c).format(new Date());
      return _0x236242;
    }
    setInterval(async () => {
      if (conf.AUTO_BIO === "yes") {
        const _0x5438e9 = _0x49ed40();
        const _0x218b0b = "Timnasa_Md is running 🚗\n" + _0x5438e9;
        await _0x16eea7.updateProfileStatus(_0x218b0b);
        console.log("Updated Bio: " + _0x218b0b);
      }
    }, 0xea60);
    _0x16eea7.ev.on("call", async _0x2cd17c => {
      if (conf.ANTI_CALL === 'yes') {
        const _0x369dad = _0x2cd17c[0x0].id;
        const _0x14303f = _0x2cd17c[0x0].from;
        await _0x16eea7.rejectCall(_0x369dad, _0x14303f);
        const _0x55ee50 = Date.now();
        if (_0x55ee50 - lastTextTime >= messageDelay) {
          await client.sendMessage(_0x14303f, {
            'text': conf.ANTI_CALL_TEXT
          });
          lastTextTime = _0x55ee50;
        } else {
          console.log("Message skipped to prevent overflow");
        }
      }
    });
    _0x16eea7.ev.on('messages.upsert', async _0xdc6fce => {
      if (conf.ANTI_DELETE_MESSAGE !== "yes") {
        return;
      }
      const {
        messages: _0x2877c7
      } = _0xdc6fce;
      const _0x465750 = _0x2877c7[0x0];
      if (!_0x465750.message) {
        return;
      }
      const _0x3cbfea = _0x465750.key;
      const _0x239e9e = _0x3cbfea.remoteJid;
      if (_0x239e9e === "status@broadcast") {
        return;
      }
      if (!store.chats[_0x239e9e]) {
        store.chats[_0x239e9e] = [];
      }
      store.chats[_0x239e9e].push(_0x465750);
      if (_0x465750.message.protocolMessage?.["type"] === 0x0) {
        const _0x303925 = _0x465750.message.protocolMessage.key;
        const _0x5da22a = store.chats[_0x239e9e];
        const _0x4a2419 = _0x5da22a.find(_0x149618 => _0x149618.key.id === _0x303925.id);
        if (!_0x4a2419) {
          return;
        }
        try {
          const _0x104d6f = _0x465750.key.participant || _0x465750.key.remoteJid;
          const _0x4131ea = _0x4a2419.key.participant || _0x4a2419.key.remoteJid;
          const _0x466d2c = _0x239e9e.endsWith('@g.us');
          let _0x4441ba = '';
          if (_0x466d2c) {
            try {
              const _0x29241f = await _0x16eea7.groupMetadata(_0x239e9e);
              _0x4441ba = "\n• Group: " + _0x29241f.subject;
            } catch (_0x51cedd) {
              console.error("Error fetching group metadata:", _0x51cedd);
              _0x4441ba = "\n• Group information unavailable.";
            }
          }
          const _0x33ae4f = "✌️ *TIMNASA-TMD ANTIDELETE* ✌️\n" + ("• Deleted by: @" + _0x104d6f.split('@')[0x0] + "\n") + ("• Original sender: @" + _0x4131ea.split('@')[0x0] + "\n") + (_0x4441ba + "\n") + ("• Chat type: " + (_0x466d2c ? 'Group' : 'Private'));
          const _0x412503 = getContextInfo("Deleted Message Alert", _0x104d6f);
          const _0x5ea3f0 = {
            'mentions': [_0x104d6f, _0x4131ea],
            'contextInfo': _0x412503
          };
          if (_0x4a2419.message.conversation) {
            await _0x16eea7.sendMessage(_0x239e9e, {
              'text': _0x33ae4f + "\n\n📝 *Deleted Text:*\n" + _0x4a2419.message.conversation,
              ..._0x5ea3f0
            });
          } else {
            if (_0x4a2419.message.extendedTextMessage) {
              await _0x16eea7.sendMessage(_0x239e9e, {
                'text': _0x33ae4f + "\n\n📝 *Deleted Text:*\n" + _0x4a2419.message.extendedTextMessage.text,
                ..._0x5ea3f0
              });
            } else {
              if (_0x4a2419.message.imageMessage) {
                const _0x2c1d59 = _0x4a2419.message.imageMessage.caption || '';
                const _0x2c0ea1 = await _0x16eea7.downloadAndSaveMediaMessage(_0x4a2419.message.imageMessage);
                await _0x16eea7.sendMessage(_0x239e9e, {
                  'image': {
                    'url': _0x2c0ea1
                  },
                  'caption': _0x33ae4f + "\n\n📷 *Image Caption:*\n" + _0x2c1d59,
                  ..._0x5ea3f0
                });
              } else {
                if (_0x4a2419.message.videoMessage) {
                  const _0x55b54a = _0x4a2419.message.videoMessage.caption || '';
                  const _0x36fed9 = await _0x16eea7.downloadAndSaveMediaMessage(_0x4a2419.message.videoMessage);
                  await _0x16eea7.sendMessage(_0x239e9e, {
                    'video': {
                      'url': _0x36fed9
                    },
                    'caption': _0x33ae4f + "\n\n🎥 *Video Caption:*\n" + _0x55b54a,
                    ..._0x5ea3f0
                  });
                } else {
                  if (_0x4a2419.message.audioMessage) {
                    const _0x46dbeb = await _0x16eea7.downloadAndSaveMediaMessage(_0x4a2419.message.audioMessage);
                    await _0x16eea7.sendMessage(_0x239e9e, {
                      'audio': {
                        'url': _0x46dbeb
                      },
                      'ptt': true,
                      'caption': _0x33ae4f + "\n\n🎤 *Voice Message Deleted*",
                      ..._0x5ea3f0
                    });
                  } else {
                    if (_0x4a2419.message.stickerMessage) {
                      const _0x1f1680 = await _0x16eea7.downloadAndSaveMediaMessage(_0x4a2419.message.stickerMessage);
                      await _0x16eea7.sendMessage(_0x239e9e, {
                        'sticker': {
                          'url': _0x1f1680
                        },
                        'caption': _0x33ae4f,
                        ..._0x5ea3f0
                      });
                    } else {
                      await _0x16eea7.sendMessage(_0x239e9e, {
                        'text': _0x33ae4f + "\n\n⚠️ *Unsupported message type was deleted*",
                        ..._0x5ea3f0
                      });
                    }
                  }
                }
              }
            }
          }
        } catch (_0x50a746) {
          console.error("Error handling deleted message:", _0x50a746);
        }
      }
    });
    const _0x2641fa = _0x1798b8 => new Promise(_0x548d70 => setTimeout(_0x548d70, _0x1798b8));
    let _0x1de29a = 0x0;
    const _0x33b67a = {
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", "🙋‍♀️"],
      'hi': ['👋', '🙂', '😁', '🙋‍♂️', "🙋‍♀️"],
      "good morning": ['🌅', '🌞', '☀️', '🌻', '🌼'],
      "good night": ['🌙', '🌜', '⭐', '🌛', '💫'],
      'bye': ['👋', '😢', "👋🏻", '🥲', '🚶‍♂️', "🚶‍♀️"],
      "see you": ['👋', '😊', "👋🏻", '✌️', "🚶‍♂️"],
      'bro': ["🤜🤛", '👊', '💥', '🥊', '👑'],
      'sister': ['👭', "💁‍♀️", '🌸', '💖', '🙋‍♀️'],
      'buddy': ['🤗', "👯‍♂️", "👯‍♀️", '🤜🤛', '🤝'],
      'niaje': ['👋', '😄', '💥', '🔥', '🕺', '💃'],
      'fredi': ['😎', '💯', '🔥', '🚀', '👑'],
      'ezra': ['🔥', '💥', '👑', '💯', '😎'],
      'thanks': ['🙏', '😊', '💖', '❤️', '💐'],
      "thank you": ['🙏', '😊', '🙌', '💖', '💝'],
      'love': ['❤️', '💖', '💘', '😍', '😘', '💍', '💑'],
      "miss you": ['😢', '💔', '😔', '😭', '💖'],
      'sorry': ['😔', '🙏', '😓', '💔', '🥺'],
      'apologies': ['😔', '💔', '🙏', '😞', '🙇‍♂️', "🙇‍♀️"],
      'congratulations': ['🎉', '🎊', '🏆', '🎁', '👏'],
      "well done": ['👏', '💪', '🎉', "🎖️", '👍'],
      "good job": ['👏', '💯', '👍', '🌟', '🎉'],
      'happy': ['😁', '😊', '🎉', '🎊', '💃', '🕺'],
      'sad': ['😢', '😭', '😞', '💔', '😓'],
      'angry': ['😡', '🤬', '😤', '💢', '😾'],
      'excited': ['🤩', '🎉', '😆', '🤗', '🥳'],
      'surprised': ['😲', '😳', '😯', '😮', '😲'],
      'help': ['🆘', '❓', '🙏', '💡', "👨‍💻", '👩‍💻'],
      'how': ['❓', '🤔', '😕', '😳', '🧐'],
      'what': ['❓', "🤷‍♂️", '🤷‍♀️', '😕', '😲'],
      'where': ['❓', '🌍', '🗺️', "🏙️", '🌎'],
      'party': ['🎉', '🥳', '🍾', '🍻', '🎤', '💃', '🕺'],
      'fun': ['🤣', '😂', '🥳', '🎉', '🎮', '🎲'],
      'hangout': ['🍕', '🍔', '🍻', '🎮', '🍿', '😆'],
      'good': ['👍', '👌', '😊', '💯', '🌟'],
      'awesome': ['🔥', '🚀', '🤩', '👏', '💥'],
      'cool': ['😎', '👌', '🎮', '🎸', '💥'],
      'boring': ['😴', '🥱', '🙄', '😑', '🤐'],
      'tired': ['😴', '🥱', '😌', '💤', '🛌'],
      'bot': ['🤖', '💻', '⚙️', '🧠', '🔧'],
      'robot': ['🤖', '⚙️', '💻', '🔋', '🤓'],
      "cool bot": ['🤖', '😎', '🤘', '💥', '🎮'],
      "love you": ['❤️', '💖', '😘', '💋', '💑'],
      "thank you bot": ['🙏', '🤖', '😊', '💖', '💐'],
      "good night bot": ['🌙', '🌛', '⭐', '💤', '😴'],
      'laughter': ['😂', '🤣', '😆', '😄', '🤪'],
      'crying': ['😢', '😭', '😿', '😓', '💔'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'happy': ['😁', '😄', '😊', '🙌', '🎉', '🥳', '💃', '🕺', '🔥'],
      'excited': ['🤩', '🎉', '🥳', '🎊', '😆', '🤗', '💥', '🚀'],
      'love': ['❤️', '💖', '💘', '💝', '😍', '😘', '💍', '💑', '🌹'],
      'grateful': ['🙏', '💐', '🥰', '❤️', '😊'],
      'thankful': ['🙏', '💖', '💐', '🤗', '😇'],
      'sad': ['😢', '😭', '😞', '💔', '😔', '😓', '😖'],
      'angry': ['😡', '😠', '🤬', '💢', '👊', '💥', '⚡'],
      'frustrated': ['😤', '😩', '🤯', '😑', '🌀'],
      'bored': ['😴', '🥱', '🙄', '😑', '😒'],
      'surprised': ['😲', '😳', '😮', '😯', '😲', '🙀'],
      'shocked': ['😱', '😳', '😯', '💥', '🤯'],
      'wow': ['😲', '😱', '🤩', '🤯', '💥', '🚀'],
      'crying': ['😭', '😢', '💔', '😞', '😓'],
      "miss you": ['😭', '💔', '😔', '😢', '❤️'],
      'lonely': ['😔', '😭', '😢', '💔', '🙁'],
      'help': ['🆘', '❓', '🤔', '🙋‍♂️', "🙋‍♀️", '💡'],
      "need assistance": ['🆘', "💁‍♂️", '💁‍♀️', '❓', '🙏'],
      'sorry': ['😔', '🙏', '💔', '😓', '🥺', "🙇‍♂️", "🙇‍♀️"],
      'apology': ['😔', '😞', '🙏', '💔', "🙇‍♂️", '🙇‍♀️'],
      "good job": ['👏', '💯', '🎉', '🌟', '👍', '👏'],
      "well done": ['👏', '🎉', "🎖️", '💪', '🔥', '🏆'],
      "you can do it": ['💪', '🔥', '💯', '🚀', '🌟'],
      'congratulations': ['🎉', '🏆', '🎊', '🎁', '👏', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🍷', '🥳', '🎉'],
      'goodbye': ['👋', '😢', '💔', "👋🏻", "🚶‍♂️", "🚶‍♀️"],
      'bye': ['👋', "👋🏻", '🥲', "🚶‍♂️", '🚶‍♀️'],
      "see you": ['👋', "👋🏻", '🤗', '✌️', "🙋‍♂️", "🙋‍♀️"],
      'hello': ['👋', '🙂', '😊', '🙋‍♂️', '🙋‍♀️'],
      'hi': ['👋', '🙂', '😁', '🙋‍♂️', '🙋‍♀️'],
      'party': ['🎉', '🥳', '🎤', '💃', '🕺', '🍻', '🎶'],
      'fun': ['🎮', '🎲', '🤣', '🎉', '🃏'],
      'play': ['🎮', '🏀', '⚽', '🎾', '🎱', '🎲', '🏆'],
      'work': ['💻', "🖥️", '💼', '📅', '📝'],
      'school': ['📚', '🏫', '🎒', "👨‍🏫", "👩‍🏫"],
      'study': ['📖', '📝', '💡', '📚', '🎓'],
      'summer': ['🌞', "🏖️", '🌴', '🍉', '🌻'],
      'winter': ['❄️', '☃️', '🎿', '🔥', '⛄'],
      'autumn': ['🍁', '🍂', '🎃', '🍂', '🍁'],
      'spring': ['🌸', '🌼', '🌷', '🌱', '🌺'],
      'birthday': ['🎂', '🎉', '🎁', '🎈', '🎊'],
      'anniversary': ['💍', '🎉', '🎁', '🎈', '💑'],
      'robot': ['🤖', '⚙️', '🔧', '🤖', '🧠'],
      'bot': ['🤖', '🧠', '⚙️', '💻', "🖥️"],
      'thanks': ['🙏', '💖', '😊', '❤️', '💐'],
      "good luck": ['🍀', '🍀', '💯', '🍀', '🎯'],
      'john': ['👑', '🔥', '💥', '😎', '💯'],
      'mike': ['💪', '🏆', '🔥', '💥', '🚀'],
      'lisa': ['💖', '👑', '🌸', '😍', '🌺'],
      'emily': ['💖', '💃', '👑', '🎉', '🎀'],
      'food': ['🍕', '🍔', '🍟', '🍲', '🍣', '🍩'],
      'drink': ['🍺', '🍷', '🥂', '🍾', '🥤'],
      'coffee': ['☕', '🥤', '🍵', '🥶'],
      'tea': ['🍵', '🫖', '🍂', '🍃'],
      'excited': ['🤩', '🎉', '🥳', '💥', '🚀', '😆', '😜'],
      'nervous': ['😬', '😰', '🤞', '🧠', '👐'],
      'confused': ['🤔', '😕', '🧐', '😵', "🤷‍♂️", "🤷‍♀️"],
      'embarrassed': ['😳', '😳', '🙈', '😳', '😬', '😅'],
      'hopeful': ['🤞', '🌠', '🙏', '🌈', '💫'],
      'shy': ['😊', '😳', '🙈', '🫣', '🫶'],
      'family': ["👨‍👩‍👧‍👦", "👩‍👧", "👩‍👧‍👦", "👨‍👩‍👧", '💏', "👨‍👨‍👧‍👦", "👩‍👩‍👧‍👦"],
      'friends': ["👯‍♂️", '👯‍♀️', '🤗', '🫶', '💫', '🤝'],
      'relationship': ['💑', '❤️', '💍', '🥰', '💏', '💌'],
      'couple': ["👩‍❤️‍👨", "👨‍❤️‍👨", "👩‍❤️‍👩", '💍', '💑', '💏'],
      "best friend": ['🤗', '💖', '👯‍♀️', "👯‍♂️", '🙌'],
      "love you": ['❤️', '😘', '💖', '💘', '💓', '💗'],
      'vacation': ["🏖️", '🌴', '✈️', '🌊', '🛳️', "🏞️", "🏕️"],
      'beach': ["🏖️", '🌊', "🏄‍♀️", '🩴', "🏖️", '🌴', '🦀'],
      "road trip": ['🚗', '🚙', "🛣️", '🌄', '🌟'],
      'mountain': ["🏞️", '⛰️', "🏔️", '🌄', '🏕️', '🌲'],
      'city': ['🏙️', '🌆', '🗽', '🌇', '🚖', "🏙️"],
      'exploration': ['🌍', '🧭', '🌎', '🌍', '🧳', '📍', '⛵'],
      'morning': ['🌅', '☀️', '🌞', '🌄', '🌻', "🕶️"],
      'afternoon': ['🌞', "🌤️", '⛅', '🌻', '🌇'],
      'night': ['🌙', '🌛', '🌜', '⭐', '🌚', '💫'],
      'evening': ['🌙', '🌛', '🌇', '🌓', '💫'],
      'goodnight': ['🌙', '😴', '💤', '🌜', '🛌', '🌛', '✨'],
      'productivity': ['💻', '📊', '📝', '💼', '📅', '📈'],
      'office': ['🖥️', '💼', "🗂️", '📅', "🖋️"],
      'workout': ["🏋️‍♀️", '💪', "🏃‍♂️", "🏃‍♀️", "🤸‍♀️", "🚴‍♀️", "🏋️‍♂️"],
      "study hard": ['📚', '📝', '📖', '💡', '💼'],
      'focus': ['🔍', '🎯', '💻', '🧠', '🤓'],
      'food': ['🍕', '🍔', '🍟', '🍖', '🍖', '🥗', '🍣', '🍲'],
      'drink': ['🍹', '🥤', '🍷', '🍾', '🍸', '🍺', '🥂', '☕'],
      'coffee': ['☕', '🧃', '🍵', '🥤', '🍫'],
      'cake': ['🍰', '🎂', '🍩', '🍪', '🍫', '🧁'],
      "ice cream": ['🍦', '🍧', '🍨', '🍪'],
      'cat': ['🐱', '😺', '🐈', '🐾'],
      'dog': ['🐶', '🐕', '🐩', '🐕‍🦺', '🐾'],
      'bird': ['🐦', '🦉', '🦅', '🐦'],
      'fish': ['🐟', '🐠', '🐡', '🐡', '🐙'],
      'rabbit': ['🐰', '🐇', '🐹', '🐾'],
      'lion': ['🦁', '🐯', '🐅', '🐆'],
      'bear': ['🐻', '🐨', '🐼', "🐻‍❄️"],
      'elephant': ['🐘', '🐘'],
      'sun': ['☀️', '🌞', '🌄', '🌅', '🌞'],
      'rain': ['🌧️', '☔', '🌈', "🌦️", '🌧️'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '❄️'],
      'wind': ['💨', '🌬️', "🌪️", "🌬️"],
      'earth': ['🌍', '🌏', '🌎', '🌍', '🌱', '🌳'],
      'phone': ['📱', '☎️', '📞', '📲', '📡'],
      'computer': ['💻', "🖥️", '⌨️', "🖱️", "🖥️"],
      'internet': ['🌐', '💻', '📶', '📡', '🔌'],
      'software': ['💻', "🖥️", "🧑‍💻", "🖱️", '💡'],
      'star': ['⭐', '🌟', '✨', '🌠', '💫'],
      'light': ['💡', '🔦', '✨', '🌟', '🔆'],
      'money': ['💵', '💰', '💸', '💳', '💶'],
      'victory': ['✌️', '🏆', '🎉', "🎖️", '🎊'],
      'gift': ['🎁', '🎀', '🎉', '🎁'],
      'fire': ['🔥', '💥', '🌋', '🔥', '💣'],
      'music': ['🎵', '🎶', '🎧', '🎤', '🎸', '🎹'],
      'sports': ['⚽', '🏀', '🏈', '🎾', "🏋️‍♂️", "🏃‍♀️", '🏆', '🥇'],
      'games': ['🎮', "🕹️", '🎲', '🎯', '🧩'],
      'art': ['🎨', "🖌️", "🖼️", '🎭', "🖍️"],
      'photography': ['📷', '📸', '📸', "🖼️", '🎥'],
      'reading': ['📚', '📖', '📚', '📰'],
      'craft': ['🧵', '🪡', '✂️', '🪢', '🧶'],
      'hello': ['👋', '🙂', '😊'],
      'hey': ['👋', '🙂', '😊'],
      'hi': ['👋', '🙂', '😊'],
      'bye': ['👋', '😢', '👋'],
      'goodbye': ['👋', '😢', "🙋‍♂️"],
      'thanks': ['🙏', '😊', '🌹'],
      "thank you": ['🙏', '😊', '🌸'],
      'welcome': ['😊', '😄', '🌷'],
      'congrats': ['🎉', '👏', '🥳'],
      'congratulations': ['🎉', '👏', '🥳'],
      "good job": ['👏', '👍', '🙌'],
      'great': ['👍', '💪', '😄'],
      'cool': ['😎', '🤙', '🔥'],
      'ok': ['👌', '👍', '✅'],
      'love': ['❤️', '💕', '💖'],
      'like': ['👍', '❤️', '👌'],
      'happy': ['😊', '😁', '🙂'],
      'joy': ['😁', '😆', '😂'],
      'laugh': ['😂', '🤣', '😁'],
      'sad': ['😢', '😭', '☹️'],
      'cry': ['😭', '😢', '😿'],
      'angry': ['😡', '😠', '💢'],
      'mad': ['😠', '😡', '😤'],
      'shocked': ['😲', '😱', '😮'],
      'scared': ['😱', '😨', '😧'],
      'sleep': ['😴', '💤', '😌'],
      'bored': ['😐', '😑', '🙄'],
      'excited': ['🤩', '🥳', '🎉'],
      'party': ['🥳', '🎉', '🍾'],
      'kiss': ['😘', '💋', '😍'],
      'hug': ['🤗', '❤️', '💕'],
      'peace': ['✌️', "🕊️", '✌️'],
      'pizza': ['🍕', '🥖', '🍟'],
      'coffee': ['☕', '🥤', '🍵'],
      'water': ['💧', '💦', '🌊'],
      'wine': ['🍷', '🍸', '🍾'],
      'hello': ['👋', '🙂', '😊', '😃', '😄'],
      'hey': ['👋', '😊', '🙋', '😄', '😁'],
      'hi': ['👋', '😀', '😁', '😃', '🙂'],
      'bye': ['👋', '😢', "🙋‍♂️", '😞', '😔'],
      'goodbye': ['👋', '😢', '🙋‍♀️', '😔', '😭'],
      'thanks': ['🙏', '😊', '🌹', '🤲', '🤗'],
      "thank you": ['🙏', '💐', '🤲', '🥰', '😌'],
      'welcome': ['😊', '😄', '🌸', '🙂', '💖'],
      'congrats': ['🎉', '👏', '🥳', '💐', '🎊'],
      'congratulations': ['🎉', '👏', '🥳', '🎊', '🍾'],
      "good job": ['👏', '👍', '🙌', '💪', '🤩'],
      'great': ['👍', '💪', '😄', '🔥', '✨'],
      'cool': ['😎', '🤙', '🔥', '👌', '🆒'],
      'ok': ['👌', '👍', '✅', '😌', '🤞'],
      'love': ['❤️', '💕', '💖', '💗', '😍'],
      'like': ['👍', '❤️', '👌', '😌', '💓'],
      'happy': ['😊', '😁', '🙂', '😃', '😄'],
      'joy': ['😁', '😆', '😂', '😊', '🤗'],
      'laugh': ['😂', '🤣', '😁', '😹', '😄'],
      'sad': ['😢', '😭', '☹️', '😞', '😔'],
      'cry': ['😭', '😢', '😿', '💧', '😩'],
      'angry': ['😡', '😠', '💢', '😤', '🤬'],
      'mad': ['😠', '😡', '😤', '💢', '😒'],
      'shocked': ['😲', '😱', '😮', '😯', '😧'],
      'scared': ['😱', '😨', '😧', '😰', '😳'],
      'sleep': ['😴', '💤', '😌', '😪', '🛌'],
      'bored': ['😐', '😑', '🙄', '😒', '🤦'],
      'excited': ['🤩', '🥳', '🎉', '😄', '✨'],
      'party': ['🥳', '🎉', '🎊', '🍾', '🎈'],
      'kiss': ['😘', '💋', '😍', '💖', '💏'],
      'hug': ['🤗', '❤️', '💕', '💞', '😊'],
      'peace': ['✌️', "🕊️", '🤞', '💫', '☮️'],
      'pizza': ['🍕', '🥖', '🍟', '🍔', '🍝'],
      'burger': ['🍔', '🍟', '🥓', '🥪', '🌭'],
      'fries': ['🍟', '🍔', '🥤', '🍿', '🧂'],
      'coffee': ['☕', '🥤', '🍵', '🫖', '🥄'],
      'tea': ['🍵', '☕', '🫖', '🥄', '🍪'],
      'cake': ['🍰', '🎂', '🧁', '🍩', '🍫'],
      'donut': ['🍩', '🍪', '🍰', '🧁', '🍫'],
      "ice cream": ['🍦', '🍨', '🍧', '🍧', '🍫'],
      'cookie': ['🍪', '🍩', '🍰', '🧁', '🍫'],
      'chocolate': ['🍫', '🍬', '🍰', '🍦', '🍭'],
      'popcorn': ['🍿', '🥤', '🍫', '🎬', '🍩'],
      'soda': ['🥤', '🍾', '🍹', '🍷', '🍸'],
      'water': ['💧', '💦', '🌊', '🚰', '🥤'],
      'wine': ['🍷', '🍾', '🥂', '🍹', '🍸'],
      'beer': ['🍺', '🍻', '🥂', '🍹', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🎉', '🎊'],
      'sun': ['🌞', '☀️', '🌅', '🌄', '🌻'],
      'moon': ['🌜', '🌙', '🌚', '🌝', '🌛'],
      'star': ['🌟', '⭐', '✨', '💫', '🌠'],
      'cloud': ['☁️', "🌥️", '🌤️', '⛅', "🌧️"],
      'rain': ["🌧️", '☔', '💧', '💦', '🌂'],
      'thunder': ['⚡', '⛈️', "🌩️", '🌪️', '⚠️'],
      'fire': ['🔥', '⚡', '🌋', '🔥', '💥'],
      'flower': ['🌸', '🌺', '🌷', '💐', '🌹'],
      'tree': ['🌳', '🌲', '🌴', '🎄', '🌱'],
      'leaves': ['🍃', '🍂', '🍁', '🌿', '🌾'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '☃️'],
      'wind': ['💨', '🌬️', '🍃', '⛅', "🌪️"],
      'rainbow': ['🌈', "🌤️", '☀️', '✨', '💧'],
      'ocean': ['🌊', '💦', '🚤', '⛵', "🏄‍♂️"],
      'dog': ['🐶', '🐕', '🐾', '🐩', '🦮'],
      'cat': ['🐱', '😺', '😸', '🐾', '🦁'],
      'lion': ['🦁', '🐯', '🐱', '🐾', '🐅'],
      'tiger': ['🐯', '🐅', '🦁', '🐆', '🐾'],
      'bear': ['🐻', '🐨', '🐼', '🧸', '🐾'],
      'rabbit': ['🐰', '🐇', '🐾', '🐹', '🐭'],
      'panda': ['🐼', '🐻', '🐾', '🐨', '🍃'],
      'monkey': ['🐒', '🐵', '🙊', '🙉', '🙈'],
      'fox': ['🦊', '🐺', '🐾', '🐶', '🦮'],
      'bird': ['🐦', '🐧', '🦅', '🦢', '🦜'],
      'fish': ['🐟', '🐠', '🐡', '🐬', '🐳'],
      'whale': ['🐋', '🐳', '🌊', '🐟', '🐠'],
      'dolphin': ['🐬', '🐟', '🐠', '🐳', '🌊'],
      'unicorn': ['🦄', '✨', '🌈', '🌸', '💫'],
      'bee': ['🐝', '🍯', '🌻', '💐', '🐞'],
      'butterfly': ['🦋', '🌸', '💐', '🌷', '🌼'],
      'phoenix': ['🦅', '🔥', '✨', '🌄', '🔥'],
      'wolf': ['🐺', '🌕', '🐾', '🌲', '🌌'],
      'mouse': ['🐭', '🐁', '🧀', '🐾', '🐀'],
      'cow': ['🐮', '🐄', '🐂', '🌾', '🍀'],
      'pig': ['🐷', '🐽', '🐖', '🐾', '🐗'],
      'horse': ['🐴', '🏇', '🐎', '🌄', "🏞️"],
      'sheep': ['🐑', '🐏', '🌾', '🐾', '🐐'],
      'soccer': ['⚽', '🥅', "🏟️", '🎉', '👏'],
      'basketball': ['🏀', "⛹️‍♂️", '🏆', '🎉', '🥇'],
      'tennis': ['🎾', '🏸', '🥇', '🏅', '💪'],
      'baseball': ['⚾', "🏟️", '🏆', '🎉', '👏'],
      'football': ['🏈', '🎉', "🏟️", '🏆', '🥅'],
      'golf': ['⛳', '🏌️‍♂️', "🏌️‍♀️", '🎉', '🏆'],
      'bowling': ['🎳', '🏅', '🎉', '🏆', '👏'],
      'running': ['🏃‍♂️', '🏃‍♀️', '👟', '🏅', '🔥'],
      'swimming': ["🏊‍♂️", "🏊‍♀️", '🌊', '🏆', '👏'],
      'cycling': ['🚴‍♂️', '🚴‍♀️', '🏅', '🔥', "🏞️"],
      'yoga': ['🧘', '🌸', '💪', '✨', '😌'],
      'dancing': ['💃', '🕺', '🎶', '🥳', '🎉'],
      'singing': ['🎤', '🎶', "🎙️", '🎉', '🎵'],
      'guitar': ['🎸', '🎶', '🎼', '🎵', '🎉'],
      'piano': ['🎹', '🎶', '🎼', '🎵', '🎉'],
      'money': ['💸', '💰', '💵', '💳', '🤑'],
      'fire': ['🔥', '💥', '⚡', '🎇', '✨'],
      'rocket': ['🚀', '🌌', '🛸', "🛰️", '✨'],
      'bomb': ['💣', '🔥', '⚡', '😱', '💥'],
      'computer': ['💻', '🖥️', '📱', '⌨️', "🖱️"],
      'phone': ['📱', '📲', '☎️', '📞', '📳'],
      'camera': ['📷', '📸', '🎥', '📹', '🎞️'],
      'book': ['📚', '📖', '✏️', '📘', '📕'],
      'light': ['💡', '✨', '🔦', '🌟', '🌞'],
      'music': ['🎶', '🎵', '🎼', '🎸', '🎧'],
      'star': ['🌟', '⭐', '✨', '🌠', '💫'],
      'gift': ['🎁', '💝', '🎉', '🎊', '🎈'],
      'car': ['🚗', '🚘', '🚙', '🚕', "🛣️"],
      'train': ['🚆', '🚄', '🚅', '🚞', '🚂'],
      'plane': ['✈️', '🛫', '🛬', "🛩️", '🚁'],
      'boat': ['⛵', '🛥️', '🚤', '🚢', '🌊'],
      'city': ['🏙️', '🌆', '🌇', '🏢', '🌃'],
      'beach': ["🏖️", '🌴', '🌊', '☀️', "🏄‍♂️"],
      'mountain': ["🏔️", '⛰️', '🗻', '🌄', '🌞'],
      'forest': ['🌲', '🌳', '🍃', "🏞️", '🐾'],
      'desert': ["🏜️", '🌵', '🐪', '🌞', '🏖️'],
      'hotel': ['🏨', '🏩', "🛏️", "🛎️", '🏢'],
      'restaurant': ["🍽️", '🍴', '🥂', '🍷', '🍾'],
      'brave': ["🦸‍♂️", "🦸‍♀️", '💪', '🔥', '👊'],
      'shy': ['😳', '☺️', '🙈', '😊', '😌'],
      'surprised': ['😲', '😮', '😧', '😯', '🤯'],
      'bored': ['😐', '😑', '😶', '🙄', '😒'],
      'sleepy': ['😴', '💤', '😪', '😌', '🛌'],
      'determined': ['💪', '🔥', '😤', '👊', '🏆'],
      'birthday': ['🎂', '🎉', '🎈', '🎊', '🍰'],
      'christmas': ['🎄', '🎅', '🤶', '🎁', '⛄'],
      "new year": ['🎉', '🎊', '🎇', '🍾', '✨'],
      'easter': ['🐰', '🐣', '🌷', '🥚', '🌸'],
      'halloween': ['🎃', '👻', "🕸️", "🕷️", '👹'],
      'valentine': ['💘', '❤️', '💌', '💕', '🌹'],
      'wedding': ['💍', '👰', '🤵', '🎩', '💒']
    };
    const _0x1addb9 = ['😎', '🔥', '💥', '💯', '✨', '🌟', '🌈', '⚡', '💎', '🌀', '👑', '🎉', '🎊', '🦄', '👽', '🛸', '🚀', '🦋', '💫', '🍀', '🎶', '🎧', '🎸', '🎤', '🏆', '🏅', '🌍', '🌎', '🌏', '🎮', '🎲', '💪', "🏋️", '🥇', '👟', '🏃', '🚴', '🚶', '🏄', '⛷️', "🕶️", '🧳', '🍿', '🍿', '🥂', '🍻', '🍷', '🍸', '🥃', '🍾', '🎯', '⏳', '🎁', '🎈', '🎨', '🌻', '🌸', '🌺', '🌹', '🌼', '🌞', '🌝', '🌜', '🌙', '🌚', '🍀', '🌱', '🍃', '🍂', '🌾', '🐉', '🐍', '🦓', '🦄', '🦋', '🦧', '🦘', '🦨', '🦡', '🐉', '🐅', '🐆', '🐓', '🐢', '🐊', '🐠', '🐟', '🐡', '🦑', '🐙', '🦀', '🐬', '🦕', '🦖', '🐾', '🐕', '🐈', '🐇', '🐾', '🐁', '🐀', "🐿️"];
    const _0xe07f95 = _0xddc2e4 => {
      const _0x1402e7 = _0xddc2e4.split(/\s+/);
      for (const _0x26d48a of _0x1402e7) {
        const _0x25998d = _0x55e0b8(_0x26d48a.toLowerCase());
        if (_0x25998d) {
          return _0x25998d;
        }
      }
      return _0x1addb9[Math.floor(Math.random() * _0x1addb9.length)];
    };
    const _0x55e0b8 = _0x4e04f7 => {
      const _0x5a6e12 = _0x33b67a[_0x4e04f7.toLowerCase()];
      if (_0x5a6e12 && _0x5a6e12.length > 0x0) {
        return _0x5a6e12[Math.floor(Math.random() * _0x5a6e12.length)];
      }
      return null;
    };
    if (conf.AUTO_REACT_STATUS === "yes") {
      console.log("AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x16eea7.ev.on("messages.upsert", async _0x103c01 => {
        const {
          messages: _0x55a39f
        } = _0x103c01;
        for (const _0x592694 of _0x55a39f) {
          if (_0x592694.key && _0x592694.key.remoteJid === "status@broadcast") {
            console.log("Detected status update from:", _0x592694.key.remoteJid);
            const _0x5295f0 = Date.now();
            if (_0x5295f0 - _0x1de29a < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x1e686f = _0x16eea7.user && _0x16eea7.user.id ? _0x16eea7.user.id.split(':')[0x0] + "@s.whatsapp.net" : null;
            if (!_0x1e686f) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            const _0x6101e1 = _0x592694?.["message"]?.['conversation'] || '';
            const _0x4d9c22 = _0xe07f95(_0x6101e1) || _0x1addb9[Math.floor(Math.random() * _0x1addb9.length)];
            if (_0x4d9c22) {
              await _0x16eea7.sendMessage(_0x592694.key.remoteJid, {
                'react': {
                  'key': _0x592694.key,
                  'text': _0x4d9c22
                }
              }, {
                'statusJidList': [_0x592694.key.participant, _0x1e686f]
              });
              _0x1de29a = Date.now();
              console.log("Successfully reacted with '" + _0x4d9c22 + "' to status update by " + _0x592694.key.remoteJid);
            }
            await _0x2641fa(0x7d0);
          }
        }
      });
    }
    if (conf.AUTO_REACT === "yes") {
      console.log("AUTO_REACT is enabled. Listening for regular messages...");
      _0x16eea7.ev.on('messages.upsert', async _0x46841d => {
        const {
          messages: _0x20adde
        } = _0x46841d;
        for (const _0x4114f3 of _0x20adde) {
          if (_0x4114f3.key && _0x4114f3.key.remoteJid) {
            const _0x1abe71 = Date.now();
            if (_0x1abe71 - _0x1de29a < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x37396f = _0x4114f3?.["message"]?.["conversation"] || '';
            const _0x2dc869 = _0xe07f95(_0x37396f) || _0x1addb9[Math.floor(Math.random() * _0x1addb9.length)];
            if (_0x2dc869) {
              await _0x16eea7.sendMessage(_0x4114f3.key.remoteJid, {
                'react': {
                  'text': _0x2dc869,
                  'key': _0x4114f3.key
                }
              }).then(() => {
                _0x1de29a = Date.now();
                console.log("Successfully reacted with '" + _0x2dc869 + "' to message by " + _0x4114f3.key.remoteJid);
              })["catch"](_0x3acd2b => {
                console.error("Failed to send reaction:", _0x3acd2b);
              });
            }
            await _0x2641fa(0x7d0);
          }
        }
      });
    }
    async function _0xb837ed(_0x2e7096, _0x32f20f) {
      try {
        const _0xbfde35 = _0x2e7096.split('@')[0x0];
        let _0x2920fc = 0x1;
        let _0x5188bd = _0x32f20f + " " + _0x2920fc;
        while (Object.values(store.contacts).some(_0xdc2950 => _0xdc2950.name === _0x5188bd)) {
          _0x2920fc++;
          _0x5188bd = _0x32f20f + " " + _0x2920fc;
        }
        const _0x2af028 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x5188bd + "\nTEL;type=CELL;type=VOICE;waid=" + _0xbfde35 + ':+' + _0xbfde35 + "\nEND:VCARD\n";
        const _0x5b7521 = './' + _0x5188bd + ".vcf";
        fs.writeFileSync(_0x5b7521, _0x2af028);
        await _0x16eea7.sendMessage(conf.NUMERO_OWNER + '@s.whatsapp.net', {
          'document': {
            'url': _0x5b7521
          },
          'mimetype': "text/vcard",
          'fileName': _0x5188bd + ".vcf",
          'caption': "Contact saved as " + _0x5188bd + ". Please import this vCard to add the number to your contacts.\n\n TIMNASA MD👊"
        });
        console.log("vCard created and sent for: " + _0x5188bd + " (" + _0x2e7096 + ')');
        fs.unlinkSync(_0x5b7521);
        return _0x5188bd;
      } catch (_0x2dc78b) {
        console.error("Error creating or sending vCard for " + name + ':', _0x2dc78b.message);
      }
    }
    _0x16eea7.ev.on("messages.upsert", async _0x342788 => {
      if (conf.AUTO_SAVE_CONTACTS !== "yes") {
        return;
      }
      const {
        messages: _0x310c0a
      } = _0x342788;
      const _0x59274f = _0x310c0a[0x0];
      if (!_0x59274f.message) {
        return;
      }
      const _0x12b10c = _0x59274f.key.remoteJid;
      if (_0x12b10c.endsWith("@s.whatsapp.net") && (!store.contacts[_0x12b10c] || !store.contacts[_0x12b10c].name)) {
        const _0x1f5aad = await _0xb837ed(_0x12b10c, "Timnasa-Md");
        store.contacts[_0x12b10c] = {
          'name': _0x1f5aad
        };
        await _0x16eea7.sendMessage(_0x12b10c, {
          'text': "Ssup Your name has been saved as \"" + _0x1f5aad + "\" in my account.\n\nTIMNASA_MD"
        });
        console.log("Contact " + _0x1f5aad + " has been saved and notified.");
      }
    });
    let _0x444702 = "Hello,its Timnasa Md on board. My owner is currently unavailable. Please leave a message, and we will get back to you as soon as possible.";
    let _0x16f0fb = new Set();
    _0x16eea7.ev.on("messages.upsert", async _0x21a429 => {
      const {
        messages: _0x33bbba
      } = _0x21a429;
      const _0x3908a6 = _0x33bbba[0x0];
      if (!_0x3908a6.message) {
        return;
      }
      const _0x35749f = _0x3908a6.message.conversation || _0x3908a6.message.extendedTextMessage?.["text"];
      const _0x50621a = _0x3908a6.key.remoteJid;
      if (_0x35749f && _0x35749f.match(/^[^\w\s]/) && _0x3908a6.key.fromMe) {
        const _0x43d2f9 = _0x35749f[0x0];
        const _0x10cf15 = _0x35749f.slice(0x1).split(" ")[0x0];
        const _0x5dbf81 = _0x35749f.slice(_0x43d2f9.length + _0x10cf15.length).trim();
        if (_0x10cf15 === 'setautoreply' && _0x5dbf81) {
          _0x444702 = _0x5dbf81;
          await _0x16eea7.sendMessage(_0x50621a, {
            'text': "Auto-reply message has been updated to:\n\"" + _0x444702 + "\""
          });
          return;
        }
      }
      if (conf.AUTO_REPLY === 'yes' && !_0x16f0fb.has(_0x50621a) && !_0x3908a6.key.fromMe && !_0x50621a.includes("@g.us")) {
        await _0x16eea7.sendMessage(_0x50621a, {
          'text': _0x444702
        });
        const _0x4a39c7 = {
          'heya': "audios/hey.wav",
          'hi': 'audios/hey.wav',
          'hey': "audios/hey.wav",
          'he': "audios/hey.wav",
          'hello': "audios/hello.wav",
          'mambo': "audios/hey.wav",
          'niaje': "audios/hey.wav",
          'morning': "audios/goodmorning.wav",
          'goodmorning': 'audios/goodmorning.wav',
          "wake up": "audios/goodmorning.wav",
          'night': "audios/goodnight.wav",
          'goodnight': "audios/goodnight.wav",
          'sleep': "audios/goodnight.wav",
          'man': "audios/mkuu.wav",
          'owoh': "audios/mkuu.wav",
          'yoo': "audios/mkuu.wav",
          'wazii': "audios/mkuu.wav",
          'bot': 'audios/tmd.mp3',
          'timnasa': "audios/timnasa.mp3",
          "timnasa tmd": "audios/timnasa.mp3",
          'Multiple': 'audios/multiple.mp3',
          'timnasa': 'audios/timnasa.mp3',
          'md': "audios/timnasa.mp3",
          "whatsapp bot": "audios/timnasa.mp3",
          "timoth md": "audios/timoth.mp3",
          'evening': "audios/goodevening.wav",
          'goodevening': "audios/goodevening.wav",
          'darling': "audios/darling.wav",
          'beb': "audios/darling.wav",
          'mpenzi': "audios/darling.wav",
          'afternoon': 'audios/goodafternoon.wav',
          'jioni': "audios/goodafternoon.wav",
          'kaka': "audios/kaka.wav",
          'bro': "audios/morio.mp3",
          'ndugu': 'audios/kaka.wav',
          'morio': 'audios/morio.mp3',
          'mzee': "audios/morio.mp3",
          'kijana': "audios/mkuu.wav",
          'mkuu': "audios/mkuu.wav",
          'ozah': "audios/mkuu.wav",
          'ozaah': "audios/mkuu.wav",
          'oyaah': "audios/mkuu.wav",
          'oyah': "audios/mkuu.wav"
        };
        const _0x5f172b = _0x3c65ab => {
          const _0x5c7b8e = _0x3c65ab.split(/\s+/);
          for (const _0x2d22fd of _0x5c7b8e) {
            const _0x12d151 = _0x4a39c7[_0x2d22fd.toLowerCase()];
            if (_0x12d151) {
              return _0x12d151;
            }
          }
          return null;
        };
        if (conf.AUDIO_REPLY === 'yes') {
          console.log("AUTO_REPLY_AUDIO is enabled. Listening for messages...");
          _0x16eea7.ev.on("messages.upsert", async _0x201067 => {
            try {
              const {
                messages: _0x59364d
              } = _0x201067;
              for (const _0x584326 of _0x59364d) {
                if (!_0x584326.key || !_0x584326.key.remoteJid) {
                  continue;
                }
                const _0x4ee2dc = _0x584326?.["message"]?.["conversation"] || '';
                const _0x60f2cf = _0x5f172b(_0x4ee2dc);
                if (_0x60f2cf) {
                  try {
                    await fs.access(_0x60f2cf);
                    console.log("Replying with audio: " + _0x60f2cf);
                    await _0x16eea7.sendMessage(_0x584326.key.remoteJid, {
                      'audio': {
                        'url': _0x60f2cf
                      },
                      'mimetype': "audio/mp4",
                      'ptt': true
                    });
                    console.log("Audio reply sent: " + _0x60f2cf);
                  } catch (_0x5916bb) {
                    console.error("Error sending audio reply: " + _0x5916bb.message);
                  }
                } else {
                  console.log("No matching keyword detected. Skipping message.");
                }
                await new Promise(_0x35d6d7 => setTimeout(_0x35d6d7, 0xbb8));
              }
            } catch (_0x451acb) {
              console.error("Error in message processing:", _0x451acb.message);
            }
          });
        }
        _0x16f0fb.add(_0x50621a);
      }
    });
    _0x16eea7.ev.on("messages.upsert", async _0x53ebe8 => {
      const {
        messages: _0x49d634
      } = _0x53ebe8;
      const _0x5cd326 = _0x49d634[0x0];
      if (!_0x5cd326.message) {
        return;
      }
      const _0x1c41ef = _0x191aba => {
        if (!_0x191aba) {
          return _0x191aba;
        }
        if (/:\d+@/gi.test(_0x191aba)) {
          0x0;
          let _0x1d1a1b = baileys_1.jidDecode(_0x191aba) || {};
          return _0x1d1a1b.user && _0x1d1a1b.server && _0x1d1a1b.user + '@' + _0x1d1a1b.server || _0x191aba;
        } else {
          return _0x191aba;
        }
      };
      0x0;
      var _0x1226dd = baileys_1.getContentType(_0x5cd326.message);
      var _0x5ccf9a = _0x1226dd == "conversation" ? _0x5cd326.message.conversation : _0x1226dd == "imageMessage" ? _0x5cd326.message.imageMessage?.["caption"] : _0x1226dd == "videoMessage" ? _0x5cd326.message.videoMessage?.['caption'] : _0x1226dd == "extendedTextMessage" ? _0x5cd326.message?.['extendedTextMessage']?.["text"] : _0x1226dd == 'buttonsResponseMessage' ? _0x5cd326?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x1226dd == "listResponseMessage" ? _0x5cd326.message?.["listResponseMessage"]?.["singleSelectReply"]?.["selectedRowId"] : _0x1226dd == "messageContextInfo" ? _0x5cd326?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] || _0x5cd326.message?.['listResponseMessage']?.['singleSelectReply']?.["selectedRowId"] || _0x5cd326.text : '';
      var _0x597ff8 = _0x5cd326.key.remoteJid;
      var _0x1e22eb = _0x1c41ef(_0x16eea7.user.id);
      var _0x260159 = _0x1e22eb.split('@')[0x0];
      const _0xb5ddc5 = _0x597ff8?.["endsWith"]('@g.us');
      var _0x288636 = _0xb5ddc5 ? await _0x16eea7.groupMetadata(_0x597ff8) : '';
      var _0x38b83f = _0xb5ddc5 ? _0x288636.subject : '';
      var _0x4d9a5c = _0x5cd326.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x16f1f6 = _0x1c41ef(_0x5cd326.message?.["extendedTextMessage"]?.['contextInfo']?.['participant']);
      var _0x4cf576 = _0xb5ddc5 ? _0x5cd326.key.participant ? _0x5cd326.key.participant : _0x5cd326.participant : _0x597ff8;
      if (_0x5cd326.key.fromMe) {
        _0x4cf576 = _0x1e22eb;
      }
      var _0x58b36b = _0xb5ddc5 ? _0x5cd326.key.participant : '';
      const {
        getAllSudoNumbers: _0x7e9131
      } = require("./data/sudo");
      const _0x6690d7 = _0x5cd326.pushName;
      const _0x427ce8 = await _0x7e9131();
      const _0x8d674e = [_0x260159, "255752593977", "255620814108", "255764182801", "255752593977", conf.NUMERO_OWNER].map(_0x1066e9 => _0x1066e9.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x333d3a = _0x8d674e.concat(_0x427ce8);
      const _0x2dfa0a = _0x333d3a.includes(_0x4cf576);
      var _0x1b70fc = ["255752593977", "255620814108", "255764182801", "255752593977"].map(_0x612424 => _0x612424.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x4cf576);
      function _0xf7ab7d(_0xea6fee) {
        _0x16eea7.sendMessage(_0x597ff8, {
          'text': _0xea6fee
        }, {
          'quoted': _0x5cd326
        });
      }
      console.log("\tCONSOLE MESSAGES");
      console.log("=========== NEW CONVERSATION ===========");
      if (_0xb5ddc5) {
        console.log("MESSAGE FROM GROUP : " + _0x38b83f);
      }
      console.log("MESSAGE SENT BY : [" + _0x6690d7 + " : " + _0x4cf576.split("@s.whatsapp.net")[0x0] + " ]");
      console.log("MESSAGE TYPE : " + _0x1226dd);
      console.log("==================TEXT==================");
      console.log(_0x5ccf9a);
      function _0x75a7a1(_0x3c9f4c) {
        let _0x51c016 = [];
        for (_0x53ebe8 of _0x3c9f4c) {
          if (_0x53ebe8.admin == null) {
            continue;
          }
          _0x51c016.push(_0x53ebe8.id);
        }
        return _0x51c016;
      }
      var _0x561583 = conf.ETAT;
      if (_0x561583 == 0x1) {
        await _0x16eea7.sendPresenceUpdate("available", _0x597ff8);
      } else {
        if (_0x561583 == 0x2) {
          await _0x16eea7.sendPresenceUpdate("composing", _0x597ff8);
        } else if (_0x561583 == 0x3) {
          await _0x16eea7.sendPresenceUpdate("recording", _0x597ff8);
        } else {
          await _0x16eea7.sendPresenceUpdate("unavailable", _0x597ff8);
        }
      }
      const _0x15ebd8 = _0xb5ddc5 ? await _0x288636.participants : '';
      let _0x15e87c = _0xb5ddc5 ? _0x75a7a1(_0x15ebd8) : '';
      const _0x112ecf = _0xb5ddc5 ? _0x15e87c.includes(_0x4cf576) : false;
      var _0x5088c7 = _0xb5ddc5 ? _0x15e87c.includes(_0x1e22eb) : false;
      const _0x5f3b30 = _0x5ccf9a ? _0x5ccf9a.trim().split(/ +/).slice(0x1) : null;
      const _0x3bd6d4 = _0x5ccf9a ? _0x5ccf9a.startsWith(prefixe) : false;
      const _0x1c7caf = _0x3bd6d4 ? _0x5ccf9a.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x2c4a93 = conf.URL.split(',');
      function _0x49092f() {
        const _0x435878 = Math.floor(Math.random() * _0x2c4a93.length);
        const _0x29fc70 = _0x2c4a93[_0x435878];
        return _0x29fc70;
      }
      var _0x37cd37 = {
        'superUser': _0x2dfa0a,
        'dev': _0x1b70fc,
        'verifGroupe': _0xb5ddc5,
        'mbre': _0x15ebd8,
        'membreGroupe': _0x58b36b,
        'verifAdmin': _0x112ecf,
        'infosGroupe': _0x288636,
        'nomGroupe': _0x38b83f,
        'auteurMessage': _0x4cf576,
        'nomAuteurMessage': _0x6690d7,
        'idBot': _0x1e22eb,
        'verifZokouAdmin': _0x5088c7,
        'prefixe': prefixe,
        'arg': _0x5f3b30,
        'repondre': _0xf7ab7d,
        'mtype': _0x1226dd,
        'groupeAdmin': _0x75a7a1,
        'msgRepondu': _0x4d9a5c,
        'auteurMsgRepondu': _0x16f1f6,
        'ms': _0x5cd326,
        'mybotpic': _0x49092f
      };
      if (conf.AUTO_READ === "yes") {
        _0x16eea7.ev.on("messages.upsert", async _0x49dfcc => {
          const {
            messages: _0x5eb6bb
          } = _0x49dfcc;
          for (const _0xdbb213 of _0x5eb6bb) {
            if (!_0xdbb213.key.fromMe) {
              await _0x16eea7.readMessages([_0xdbb213.key]);
            }
          }
        });
      }
      if (_0x5cd326.key && _0x5cd326.key.remoteJid === 'status@broadcast' && conf.AUTO_STATUS_REPLY === 'yes') {
        const _0x1551c9 = _0x5cd326.key.participant;
        const _0x3173be = '' + conf.AUTO_STATUS_TEXT;
        await _0x16eea7.sendMessage(_0x1551c9, {
          'text': _0x3173be,
          'react': {
            'text': '🤦',
            'key': _0x5cd326.key
          }
        }, {
          'quoted': _0x5cd326
        });
      }
      if (_0x5cd326.key && _0x5cd326.key.remoteJid === 'status@broadcast' && conf.AUTO_READ_STATUS === 'yes') {
        await _0x16eea7.readMessages([_0x5cd326.key]);
      }
      if (_0x5cd326.key && _0x5cd326.key.remoteJid === "status@broadcast" && conf.AUTO_DOWNLOAD_STATUS === 'yes') {
        if (_0x5cd326.message.extendedTextMessage) {
          var _0x19cbec = _0x5cd326.message.extendedTextMessage.text;
          await _0x16eea7.sendMessage(_0x1e22eb, {
            'text': _0x19cbec
          }, {
            'quoted': _0x5cd326
          });
        } else {
          if (_0x5cd326.message.imageMessage) {
            var _0x533af7 = _0x5cd326.message.imageMessage.caption;
            var _0x9650f9 = await _0x16eea7.downloadAndSaveMediaMessage(_0x5cd326.message.imageMessage);
            await _0x16eea7.sendMessage(_0x1e22eb, {
              'image': {
                'url': _0x9650f9
              },
              'caption': _0x533af7
            }, {
              'quoted': _0x5cd326
            });
          } else {
            if (_0x5cd326.message.videoMessage) {
              var _0x533af7 = _0x5cd326.message.videoMessage.caption;
              var _0x104de1 = await _0x16eea7.downloadAndSaveMediaMessage(_0x5cd326.message.videoMessage);
              await _0x16eea7.sendMessage(_0x1e22eb, {
                'video': {
                  'url': _0x104de1
                },
                'caption': _0x533af7
              }, {
                'quoted': _0x5cd326
              });
            }
          }
        }
      }
      if (!_0x1b70fc && _0x597ff8 == "120363158701337904@g.us") {
        return;
      }
      if (_0x5ccf9a && _0x4cf576.endsWith("s.whatsapp.net")) {
        const {
          ajouterOuMettreAJourUserData: _0x472edc
        } = require('./data/level');
        try {
          await _0x472edc(_0x4cf576);
        } catch (_0x5cd0d8) {
          console.error(_0x5cd0d8);
        }
      }
      try {
        if (_0x5cd326.message[_0x1226dd].contextInfo.mentionedJid && (_0x5cd326.message[_0x1226dd].contextInfo.mentionedJid.includes(_0x1e22eb) || _0x5cd326.message[_0x1226dd].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + '@s.whatsapp.net'))) {
          if (_0x597ff8 == "120363158701337904@g.us") {
            return;
          }
          ;
          if (_0x2dfa0a) {
            console.log("hummm");
            return;
          }
          let _0xee954c = require("./data/mention");
          let _0x2a7ba7 = await _0xee954c.recupererToutesLesValeurs();
          let _0x2a8e84 = _0x2a7ba7[0x0];
          if (_0x2a8e84.status === "non") {
            console.log("mention pas actifs");
            return;
          }
          let _0x3cf729;
          if (_0x2a8e84.type.toLocaleLowerCase() === "image") {
            _0x3cf729 = {
              'image': {
                'url': _0x2a8e84.url
              },
              'caption': _0x2a8e84.message
            };
          } else {
            if (_0x2a8e84.type.toLocaleLowerCase() === 'video') {
              _0x3cf729 = {
                'video': {
                  'url': _0x2a8e84.url
                },
                'caption': _0x2a8e84.message
              };
            } else {
              if (_0x2a8e84.type.toLocaleLowerCase() === 'sticker') {
                let _0x1265f2 = new Sticker(_0x2a8e84.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': '12345',
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x298b1d = await _0x1265f2.toBuffer();
                _0x3cf729 = {
                  'sticker': _0x298b1d
                };
              } else if (_0x2a8e84.type.toLocaleLowerCase() === "audio") {
                _0x3cf729 = {
                  'audio': {
                    'url': _0x2a8e84.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x16eea7.sendMessage(_0x597ff8, _0x3cf729, {
            'quoted': _0x5cd326
          });
        }
      } catch (_0x2f2b5c) {}
      try {
        const _0x3df176 = await verifierEtatJid(_0x597ff8);
        if (_0x5ccf9a.includes('https://') && _0xb5ddc5 && _0x3df176) {
          console.log("lien detecté");
          var _0x36f895 = _0xb5ddc5 ? _0x15e87c.includes(_0x1e22eb) : false;
          if (_0x2dfa0a || _0x112ecf || !_0x36f895) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x4cdb00 = {
            'remoteJid': _0x597ff8,
            'fromMe': false,
            'id': _0x5cd326.key.id,
            'participant': _0x4cf576
          };
          var _0x7e238 = "lien detected, \n";
          var _0x2b9f13 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Cyberion",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': '#000000'
          });
          await _0x2b9f13.toFile('st1.webp');
          var _0x390e29 = await recupererActionJid(_0x597ff8);
          if (_0x390e29 === "remove") {
            _0x7e238 += "message deleted \n @" + _0x4cf576.split('@')[0x0] + " removed from group.";
            await _0x16eea7.sendMessage(_0x597ff8, {
              'sticker': fs.readFileSync('st1.webp')
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x16eea7.sendMessage(_0x597ff8, {
              'text': _0x7e238,
              'mentions': [_0x4cf576]
            }, {
              'quoted': _0x5cd326
            });
            try {
              await _0x16eea7.groupParticipantsUpdate(_0x597ff8, [_0x4cf576], "remove");
            } catch (_0x2f0c2e) {
              console.log("antiien ") + _0x2f0c2e;
            }
            await _0x16eea7.sendMessage(_0x597ff8, {
              'delete': _0x4cdb00
            });
            await fs.unlink('st1.webp');
          } else {
            if (_0x390e29 === "delete") {
              _0x7e238 += "message deleted \n @" + _0x4cf576.split('@')[0x0] + " avoid sending link.";
              await _0x16eea7.sendMessage(_0x597ff8, {
                'text': _0x7e238,
                'mentions': [_0x4cf576]
              }, {
                'quoted': _0x5cd326
              });
              await _0x16eea7.sendMessage(_0x597ff8, {
                'delete': _0x4cdb00
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x390e29 === "warn") {
                const {
                  getWarnCountByJID: _0x1ce9eb,
                  ajouterUtilisateurAvecWarnCount: _0x3714cb
                } = require("./data/warn");
                let _0x5d5a56 = await _0x1ce9eb(_0x4cf576);
                let _0xf5a411 = conf.WARN_COUNT;
                if (_0x5d5a56 >= _0xf5a411) {
                  var _0x548752 = "link detected , you will be remove because of reaching warn-limit";
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'text': _0x548752,
                    'mentions': [_0x4cf576]
                  }, {
                    'quoted': _0x5cd326
                  });
                  await _0x16eea7.groupParticipantsUpdate(_0x597ff8, [_0x4cf576], 'remove');
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'delete': _0x4cdb00
                  });
                } else {
                  var _0x479b18 = _0xf5a411 - _0x5d5a56;
                  var _0xff33f1 = "Link detected , your warn_count was upgrade ;\n rest : " + _0x479b18 + " ";
                  await _0x3714cb(_0x4cf576);
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'text': _0xff33f1,
                    'mentions': [_0x4cf576]
                  }, {
                    'quoted': _0x5cd326
                  });
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'delete': _0x4cdb00
                  });
                }
              }
            }
          }
        }
      } catch (_0x32a12d) {
        console.log("data err " + _0x32a12d);
      }
      try {
        const _0x233ae3 = _0x5cd326.key?.['id']?.["startsWith"]("BAES") && _0x5cd326.key?.['id']?.["length"] === 0x10;
        const _0x30cf1f = _0x5cd326.key?.['id']?.['startsWith']("BAE5") && _0x5cd326.key?.['id']?.['length'] === 0x10;
        if (_0x233ae3 || _0x30cf1f) {
          if (_0x1226dd === 'reactionMessage') {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0xb1b143 = await atbverifierEtatJid(_0x597ff8);
          if (!_0xb1b143) {
            return;
          }
          ;
          if (_0x112ecf || _0x4cf576 === _0x1e22eb) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x2e9c60 = {
            'remoteJid': _0x597ff8,
            'fromMe': false,
            'id': _0x5cd326.key.id,
            'participant': _0x4cf576
          };
          var _0x7e238 = "bot detected, \n";
          var _0x2b9f13 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "FredieTech",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x2b9f13.toFile("st1.webp");
          var _0x390e29 = await atbrecupererActionJid(_0x597ff8);
          if (_0x390e29 === 'remove') {
            _0x7e238 += "message deleted \n @" + _0x4cf576.split('@')[0x0] + " removed from group.";
            await _0x16eea7.sendMessage(_0x597ff8, {
              'sticker': fs.readFileSync('st1.webp')
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x16eea7.sendMessage(_0x597ff8, {
              'text': _0x7e238,
              'mentions': [_0x4cf576]
            }, {
              'quoted': _0x5cd326
            });
            try {
              await _0x16eea7.groupParticipantsUpdate(_0x597ff8, [_0x4cf576], "remove");
            } catch (_0x4e4d89) {
              console.log("antibot ") + _0x4e4d89;
            }
            await _0x16eea7.sendMessage(_0x597ff8, {
              'delete': _0x2e9c60
            });
            await fs.unlink('st1.webp');
          } else {
            if (_0x390e29 === "delete") {
              _0x7e238 += "message delete \n @" + _0x4cf576.split('@')[0x0] + " Avoid sending link.";
              await _0x16eea7.sendMessage(_0x597ff8, {
                'text': _0x7e238,
                'mentions': [_0x4cf576]
              }, {
                'quoted': _0x5cd326
              });
              await _0x16eea7.sendMessage(_0x597ff8, {
                'delete': _0x2e9c60
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x390e29 === 'warn') {
                const {
                  getWarnCountByJID: _0x51f5c4,
                  ajouterUtilisateurAvecWarnCount: _0x22b235
                } = require("./data/warn");
                let _0x5c95dc = await _0x51f5c4(_0x4cf576);
                let _0x14584f = conf.WARN_COUNT;
                if (_0x5c95dc >= _0x14584f) {
                  var _0x548752 = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'text': _0x548752,
                    'mentions': [_0x4cf576]
                  }, {
                    'quoted': _0x5cd326
                  });
                  await _0x16eea7.groupParticipantsUpdate(_0x597ff8, [_0x4cf576], "remove");
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'delete': _0x2e9c60
                  });
                } else {
                  var _0x479b18 = _0x14584f - _0x5c95dc;
                  var _0xff33f1 = "bot detected , your warn_count was upgrade ;\n rest : " + _0x479b18 + " ";
                  await _0x22b235(_0x4cf576);
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'text': _0xff33f1,
                    'mentions': [_0x4cf576]
                  }, {
                    'quoted': _0x5cd326
                  });
                  await _0x16eea7.sendMessage(_0x597ff8, {
                    'delete': _0x2e9c60
                  });
                }
              }
            }
          }
        }
      } catch (_0x5ca05a) {
        console.log(".... " + _0x5ca05a);
      }
      if (_0x3bd6d4) {
        const _0x4805d2 = evt.cm.find(_0x50819b => _0x50819b.nomCom === _0x1c7caf);
        if (_0x4805d2) {
          try {
            if (conf.MODE.toLocaleLowerCase() != 'yes' && !_0x2dfa0a) {
              return;
            }
            if (!_0x2dfa0a && _0x597ff8 === _0x4cf576 && conf.PM_PERMIT === 'yes') {
              _0xf7ab7d("You don't have acces to commands here");
              return;
            }
            if (!_0x2dfa0a && _0xb5ddc5) {
              let _0x34cc10 = await isGroupBanned(_0x597ff8);
              if (_0x34cc10) {
                return;
              }
            }
            if (!_0x112ecf && _0xb5ddc5) {
              let _0x59ff5e = await isGroupOnlyAdmin(_0x597ff8);
              if (_0x59ff5e) {
                return;
              }
            }
            if (!_0x2dfa0a) {
              let _0x3b90e5 = await isUserBanned(_0x4cf576);
              if (_0x3b90e5) {
                _0xf7ab7d("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x597ff8, _0x16eea7, _0x5cd326, _0x4805d2.reaction);
            _0x4805d2.fonction(_0x597ff8, _0x16eea7, _0x37cd37);
          } catch (_0x4eaeaa) {
            console.log("😡😡 " + _0x4eaeaa);
            _0x16eea7.sendMessage(_0x597ff8, {
              'text': "😡😡 " + _0x4eaeaa
            }, {
              'quoted': _0x5cd326
            });
          }
        }
      }
    });
    const {
      recupevents: _0x18b210
    } = require("./data/welcome");
    _0x16eea7.ev.on('group-participants.update', async _0x5a95dd => {
      console.log(_0x5a95dd);
      let _0x444f9a;
      try {
        _0x444f9a = await _0x16eea7.profilePictureUrl(_0x5a95dd.id, "image");
      } catch {
        _0x444f9a = "https://files.catbox.moe/7irwqn.jpeg";
      }
      try {
        const _0x9f7fe6 = await _0x16eea7.groupMetadata(_0x5a95dd.id);
        if (_0x5a95dd.action == "add" && (await _0x18b210(_0x5a95dd.id, "welcome")) == 'on') {
          let _0x3f794c = "👋 Hello\n";
          let _0x46a218 = _0x5a95dd.participants;
          for (let _0xa99101 of _0x46a218) {
            _0x3f794c += " *@" + _0xa99101.split('@')[0x0] + "* Welcome to Our Official Group,";
          }
          _0x3f794c += "You might want to read the group Description to avoid getting removed...";
          _0x16eea7.sendMessage(_0x5a95dd.id, {
            'image': {
              'url': _0x444f9a
            },
            'caption': _0x3f794c,
            'mentions': _0x46a218
          });
        } else {
          if (_0x5a95dd.action == 'remove' && (await _0x18b210(_0x5a95dd.id, "goodbye")) == 'on') {
            let _0x58a001 = "one or somes member(s) left group;\n";
            let _0x182a02 = _0x5a95dd.participants;
            for (let _0x36b32f of _0x182a02) {
              _0x58a001 += '@' + _0x36b32f.split('@')[0x0] + "\n";
            }
            _0x16eea7.sendMessage(_0x5a95dd.id, {
              'text': _0x58a001,
              'mentions': _0x182a02
            });
          } else {
            if (_0x5a95dd.action == "promote" && (await _0x18b210(_0x5a95dd.id, "antipromote")) == 'on') {
              if (_0x5a95dd.author == _0x9f7fe6.owner || _0x5a95dd.author == conf.NUMERO_OWNER + '@s.whatsapp.net' || _0x5a95dd.author == decodeJid(_0x16eea7.user.id) || _0x5a95dd.author == _0x5a95dd.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x16eea7.groupParticipantsUpdate(_0x5a95dd.id, [_0x5a95dd.author, _0x5a95dd.participants[0x0]], 'demote');
              _0x16eea7.sendMessage(_0x5a95dd.id, {
                'text': '@' + _0x5a95dd.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x5a95dd.author.split('@')[0x0] + " and @" + _0x5a95dd.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x5a95dd.author, _0x5a95dd.participants[0x0]]
              });
            } else {
              if (_0x5a95dd.action == "demote" && (await _0x18b210(_0x5a95dd.id, "antidemote")) == 'on') {
                if (_0x5a95dd.author == _0x9f7fe6.owner || _0x5a95dd.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x5a95dd.author == decodeJid(_0x16eea7.user.id) || _0x5a95dd.author == _0x5a95dd.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x16eea7.groupParticipantsUpdate(_0x5a95dd.id, [_0x5a95dd.author], 'demote');
                await _0x16eea7.groupParticipantsUpdate(_0x5a95dd.id, [_0x5a95dd.participants[0x0]], "promote");
                _0x16eea7.sendMessage(_0x5a95dd.id, {
                  'text': '@' + _0x5a95dd.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x5a95dd.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x5a95dd.author, _0x5a95dd.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0x4571d8) {
        console.error(_0x4571d8);
      }
    });
    async function _0x129cd8() {
      const _0x4f5d81 = require("node-cron");
      const {
        getCron: _0x1931cc
      } = require("./data/cron");
      let _0x19f331 = await _0x1931cc();
      console.log(_0x19f331);
      if (_0x19f331.length > 0x0) {
        for (let _0x4974e3 = 0x0; _0x4974e3 < _0x19f331.length; _0x4974e3++) {
          if (_0x19f331[_0x4974e3].mute_at != null) {
            let _0x4199a7 = _0x19f331[_0x4974e3].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x19f331[_0x4974e3].group_id + " a " + _0x4199a7[0x0] + " H " + _0x4199a7[0x1]);
            _0x4f5d81.schedule(_0x4199a7[0x1] + " " + _0x4199a7[0x0] + " * * *", async () => {
              await _0x16eea7.groupSettingUpdate(_0x19f331[_0x4974e3].group_id, 'announcement');
              _0x16eea7.sendMessage(_0x19f331[_0x4974e3].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Dar Es Salam"
            });
          }
          if (_0x19f331[_0x4974e3].unmute_at != null) {
            let _0x52e160 = _0x19f331[_0x4974e3].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x52e160[0x0] + " H " + _0x52e160[0x1] + " ");
            _0x4f5d81.schedule(_0x52e160[0x1] + " " + _0x52e160[0x0] + " * * *", async () => {
              await _0x16eea7.groupSettingUpdate(_0x19f331[_0x4974e3].group_id, "not_announcement");
              _0x16eea7.sendMessage(_0x19f331[_0x4974e3].group_id, {
                'image': {
                  'url': './media/chrono.webp'
                },
                'caption': "Good morning; It's time to open the group."
              });
            }, {
              'timezone': "Africa/Dar Es Salam"
            });
          }
        }
      } else {
        console.log("Les crons n'ont pas été activés");
      }
      return;
    }
    _0x16eea7.ev.on("connection.update", async _0x2155b5 => {
      const {
        lastDisconnect: _0x458583,
        connection: _0x384006
      } = _0x2155b5;
      if (_0x384006 === "connecting") {
        console.log("ℹ️ Timnasa is connecting...");
      } else {
        if (_0x384006 === 'open') {
          console.log("✅ Timnasa Connected to WhatsApp! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log("------");
          0x0;
          await baileys_1.delay(0x12c);
          console.log('------------------/-----');
          console.log("Timnasa is Online 🕸\n\n");
          console.log("Loading Timnasa Commands ...\n");
          fs.readdirSync(__dirname + "/fez").forEach(_0x2f6f9f => {
            if (path.extname(_0x2f6f9f).toLowerCase() == ".js") {
              try {
                require(__dirname + "/fez/" + _0x2f6f9f);
                console.log(_0x2f6f9f + " Installed Successfully✔️");
              } catch (_0xa69f85) {
                console.log(_0x2f6f9f + " could not be installed due to : " + _0xa69f85);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x23e0d7;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x23e0d7 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x23e0d7 = "private";
          } else {
            _0x23e0d7 = "undefined";
          }
          console.log("Commands Installation Completed ✅");
          await _0x129cd8();
          if (conf.DP.toLowerCase() === "yes") {
            let _0x4a6a33 = " ⁠⁠⁠⁠\n\n   _BOT🦚CONNECTED_\n\n║ Prefix: [ " + prefixe + " ]\n║ Mode: " + _0x23e0d7 + "\n║ Model: Timnasa_Md\n║ Bot Name: Timnasa-Md-Bot \n║ Owner: " + conf.OWNER_NAME + " \n╚═════ ❖ •✦\n-_-<-<-<-<-<-<-<--<-<-<-<-<-<\n\n*🪀Follow my channel for updates and free hacks🙃*\n \n> https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31\n\n-_-_-<€<€-<-<-<-<-<-<-<-<-<-<-<\n                \n                 ";
            await _0x16eea7.sendMessage(_0x16eea7.user.id, {
              'text': _0x4a6a33
            });
          }
        } else {
          if (_0x384006 == 'close') {
            let _0x392eaf = new boom_1.Boom(_0x458583?.["error"])?.["output"]["statusCode"];
            if (_0x392eaf === baileys_1.DisconnectReason.badSession) {
              console.log("Session id error, rescan again...");
            } else {
              if (_0x392eaf === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x22c19c();
              } else {
                if (_0x392eaf === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error 😞 ,,, trying to reconnect... ");
                  _0x22c19c();
                } else {
                  if (_0x392eaf === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x392eaf === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x392eaf === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x22c19c();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x392eaf);
                        const {
                          exec: _0x2c8d18
                        } = require('child_process');
                        _0x2c8d18("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x384006);
            _0x22c19c();
          }
        }
      }
    });
    _0x16eea7.ev.on("creds.update", _0x5bce68);
    _0x16eea7.downloadAndSaveMediaMessage = async (_0x14c6fe, _0x29547c = '', _0x38b9f2 = true) => {
      let _0x4eb3bd = _0x14c6fe.msg ? _0x14c6fe.msg : _0x14c6fe;
      let _0x15c0fa = (_0x14c6fe.msg || _0x14c6fe).mimetype || '';
      let _0x4dbb6a = _0x14c6fe.mtype ? _0x14c6fe.mtype.replace(/Message/gi, '') : _0x15c0fa.split('/')[0x0];
      0x0;
      const _0x56f068 = await baileys_1.downloadContentFromMessage(_0x4eb3bd, _0x4dbb6a);
      let _0x108c78 = Buffer.from([]);
      for await (const _0x2b7323 of _0x56f068) {
        _0x108c78 = Buffer.concat([_0x108c78, _0x2b7323]);
      }
      let _0x5f3706 = await FileType.fromBuffer(_0x108c78);
      let _0x41f80e = './' + _0x29547c + '.' + _0x5f3706.ext;
      await fs.writeFileSync(_0x41f80e, _0x108c78);
      return _0x41f80e;
    };
    _0x16eea7.awaitForMessage = async (_0x3d3fc4 = {}) => {
      return new Promise((_0x1807b8, _0x3e99ea) => {
        if (typeof _0x3d3fc4 !== "object") {
          _0x3e99ea(new Error("Options must be an object"));
        }
        if (typeof _0x3d3fc4.sender !== "string") {
          _0x3e99ea(new Error("Sender must be a string"));
        }
        if (typeof _0x3d3fc4.chatJid !== "string") {
          _0x3e99ea(new Error("ChatJid must be a string"));
        }
        if (_0x3d3fc4.timeout && typeof _0x3d3fc4.timeout !== "number") {
          _0x3e99ea(new Error("Timeout must be a number"));
        }
        if (_0x3d3fc4.filter && typeof _0x3d3fc4.filter !== 'function') {
          _0x3e99ea(new Error("Filter must be a function"));
        }
        const _0x512c32 = _0x3d3fc4?.['timeout'] || undefined;
        const _0x261876 = _0x3d3fc4?.["filter"] || (() => true);
        let _0x29413e = undefined;
        let _0x4584f9 = _0x539b87 => {
          let {
            type: _0x3e6edc,
            messages: _0x26bfe4
          } = _0x539b87;
          if (_0x3e6edc == 'notify') {
            for (let _0x344986 of _0x26bfe4) {
              const _0x316b21 = _0x344986.key.fromMe;
              const _0x1b2f0c = _0x344986.key.remoteJid;
              const _0x3d485a = _0x1b2f0c.endsWith("@g.us");
              const _0x4e28a4 = _0x1b2f0c == "status@broadcast";
              const _0x3558dc = _0x316b21 ? _0x16eea7.user.id.replace(/:.*@/g, '@') : _0x3d485a || _0x4e28a4 ? _0x344986.key.participant.replace(/:.*@/g, '@') : _0x1b2f0c;
              if (_0x3558dc == _0x3d3fc4.sender && _0x1b2f0c == _0x3d3fc4.chatJid && _0x261876(_0x344986)) {
                _0x16eea7.ev.off("messages.upsert", _0x4584f9);
                clearTimeout(_0x29413e);
                _0x1807b8(_0x344986);
              }
            }
          }
        };
        _0x16eea7.ev.on("messages.upsert", _0x4584f9);
        if (_0x512c32) {
          _0x29413e = setTimeout(() => {
            _0x16eea7.ev.off("messages.upsert", _0x4584f9);
            _0x3e99ea(new Error("Timeout"));
          }, _0x512c32);
        }
      });
    };
    return _0x16eea7;
  }
  let _0x59bfcc = require.resolve(__filename);
  fs.watchFile(_0x59bfcc, () => {
    fs.unwatchFile(_0x59bfcc);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x59bfcc];
    require(_0x59bfcc);
  });
  _0x22c19c();
}, 0x1388);

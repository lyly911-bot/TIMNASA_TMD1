function hi() {
  console.log("Hello World!");
}
hi();
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function (_0x52ea1a, _0x3a7701, _0xf9b32e, _0x1fa2cb) {
  if (_0x1fa2cb === undefined) {
    _0x1fa2cb = _0xf9b32e;
  }
  var _0x5178c8 = Object.getOwnPropertyDescriptor(_0x3a7701, _0xf9b32e);
  if (!_0x5178c8 || ('get' in _0x5178c8 ? !_0x3a7701.__esModule : _0x5178c8.writable || _0x5178c8.configurable)) {
    _0x5178c8 = {
      'enumerable': true,
      'get': function () {
        return _0x3a7701[_0xf9b32e];
      }
    };
  }
  Object.defineProperty(_0x52ea1a, _0x1fa2cb, _0x5178c8);
} : function (_0x117841, _0x56c36d, _0x28da22, _0x26458f) {
  if (_0x26458f === undefined) {
    _0x26458f = _0x28da22;
  }
  _0x117841[_0x26458f] = _0x56c36d[_0x28da22];
});
var __setModuleDefault = this && this.__setModuleDefault || (Object.create ? function (_0x2b52eb, _0x30675c) {
  Object.defineProperty(_0x2b52eb, 'default', {
    'enumerable': true,
    'value': _0x30675c
  });
} : function (_0x233c59, _0x1f94f2) {
  _0x233c59['default'] = _0x1f94f2;
});
var __importStar = this && this.__importStar || function (_0x338d08) {
  if (_0x338d08 && _0x338d08.__esModule) {
    return _0x338d08;
  }
  var _0x5814f8 = {};
  if (_0x338d08 != null) {
    for (var _0x10fd1e in _0x338d08) if (_0x10fd1e !== "default" && Object.prototype.hasOwnProperty.call(_0x338d08, _0x10fd1e)) {
      __createBinding(_0x5814f8, _0x338d08, _0x10fd1e);
    }
  }
  __setModuleDefault(_0x5814f8, _0x338d08);
  return _0x5814f8;
};
var __importDefault = this && this.__importDefault || function (_0x392fc4) {
  return _0x392fc4 && _0x392fc4.__esModule ? _0x392fc4 : {
    'default': _0x392fc4
  };
};
Object.defineProperty(exports, "__esModule", {
  'value': true
});
const baileys_1 = __importStar(require('@whiskeysockets/baileys'));
const logger_1 = __importDefault(require("@whiskeysockets/baileys/lib/Utils/logger"));
const logger = logger_1["default"].child({});
logger.level = 'silent';
const pino = require('pino');
const boom_1 = require('@hapi/boom');
const conf = require("./set");
let fs = require("fs-extra");
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
} = require("./bdd/antilien");
const {
  atbverifierEtatJid,
  atbrecupererActionJid
} = require("./bdd/antibot");
let evt = require(__dirname + "/timnasa/timoth");
const {
  isUserBanned,
  addUserToBanList,
  removeUserFromBanList
} = require("./bdd/banUser");
const {
  addGroupToBanList,
  isGroupBanned,
  removeGroupFromBanList
} = require("./bdd/banGroup");
const {
  isGroupOnlyAdmin,
  addGroupToOnlyAdminList,
  removeGroupFromOnlyAdminList
} = require("./bdd/onlyAdmin");
let {
  reagir
} = require(__dirname + "/timnasa/app");
var session = conf.session.replace(/TIMNASA-TMD-WHATSAPP-BOT;;;=>/g, '');
const prefixe = conf.PREFIXE;
async function authentification() {
  try {
    if (!fs.existsSync(__dirname + "/auth/creds.json")) {
      console.log("connexion en cour ...");
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), "utf8");
    } else if (fs.existsSync(__dirname + '/auth/creds.json') && session != "zokk") {
      await fs.writeFileSync(__dirname + "/auth/creds.json", atob(session), 'utf8');
    }
  } catch (_0xec241a) {
    console.log("Session Invalid " + _0xec241a);
    return;
  }
}
authentification();
0x0;
const store = baileys_1.makeInMemoryStore({
  'logger': pino().child({
    'level': "silent",
    'stream': "store"
  })
});
setTimeout(() => {
  authentification();
  async function _0x53a379() {
    0x0;
    const {
      version: _0x1293b7,
      isLatest: _0x58f7f1
    } = await baileys_1.fetchLatestBaileysVersion();
    0x0;
    const {
      state: _0x27b763,
      saveCreds: _0x446f7c
    } = await baileys_1.useMultiFileAuthState(__dirname + "/auth");
    0x0;
    const _0x569fc8 = {
      'version': _0x1293b7,
      'logger': pino({
        'level': "silent"
      }),
      'browser': ["TIMNASA-TMD", "safari", "1.0.0"],
      'printQRInTerminal': true,
      'fireInitQueries': false,
      'shouldSyncHistoryMessage': true,
      'downloadHistory': true,
      'syncFullHistory': true,
      'generateHighQualityLinkPreview': true,
      'markOnlineOnConnect': false,
      'keepAliveIntervalMs': 0x7530,
      'auth': {
        'creds': _0x27b763.creds,
        'keys': baileys_1.makeCacheableSignalKeyStore(_0x27b763.keys, logger)
      },
      'getMessage': async _0x1a4a12 => {
        if (store) {
          const _0x42dc2c = await store.loadMessage(_0x1a4a12.remoteJid, _0x1a4a12.id, undefined);
          return _0x42dc2c.message || undefined;
        }
        return {
          'conversation': "An Error Occurred, Repeat Command!"
        };
      }
    };
    0x0;
    const _0x210adb = baileys_1["default"](_0x569fc8);
    store.bind(_0x210adb.ev);
    function _0x1a8192() {
      const _0x182fb6 = {
        'timeZone': "Africa/Dar Es Salam",
        'year': 'numeric',
        'month': "2-digit",
        'day': "2-digit",
        'hour': "2-digit",
        'minute': '2-digit',
        'second': "2-digit",
        'hour12': false
      };
      const _0x28dc02 = new Intl.DateTimeFormat("en-KE", _0x182fb6).format(new Date());
      return _0x28dc02;
    }
    setInterval(async () => {
      if (conf.AUTO_BIO === "yes") {
        const _0x18053e = _0x1a8192();
        const _0x38417f = "TIMNASA-TMD is running 🚗\n" + _0x18053e;
        await _0x210adb.updateProfileStatus(_0x38417f);
        console.log("Updated Bio: " + _0x38417f);
      }
    }, 0xea60);
    _0x210adb.ev.on("call", async _0xf37693 => {
      if (conf.ANTICALL === "yes") {
        const _0x4bcf40 = _0xf37693[0x0].id;
        const _0x330146 = _0xf37693[0x0].from;
        await _0x210adb.rejectCall(_0x4bcf40, _0x330146);
        await _0x210adb.sendMessage(_0x330146, {
          'text': "Hello😊,am TimnasaTech a personal assistant,please try again later"
        });
      }
    });
    const _0x11e9ab = _0x576c49 => new Promise(_0xaa7a3b => setTimeout(_0xaa7a3b, _0x576c49));
    let _0x1f2467 = 0x0;
    const _0x1741a4 = {
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", '🙋‍♀️'],
      'hi': ['👋', '🙂', '😁', '🙋‍♂️', "🙋‍♀️"],
      "good morning": ['🌅', '🌞', '☀️', '🌻', '🌼'],
      "good night": ['🌙', '🌜', '⭐', '🌛', '💫'],
      'bye': ['👋', '😢', "👋🏻", '🥲', "🚶‍♂️", "🚶‍♀️"],
      "see you": ['👋', '😊', "👋🏻", '✌️', "🚶‍♂️"],
      'bro': ["🤜🤛", '👊', '💥', '🥊', '👑'],
      'sister': ['👭', "💁‍♀️", '🌸', '💖', "🙋‍♀️"],
      'buddy': ['🤗', '👯‍♂️', "👯‍♀️", '🤜🤛', '🤝'],
      'niaje': ['👋', '😄', '💥', '🔥', '🕺', '💃'],
      'timnasa': ['😎', '💯', '🔥', '🚀', '👑'],
      'timoth': ['🔥', '💥', '👑', '💯', '😎'],
      'thanks': ['🙏', '😊', '💖', '❤️', '💐'],
      "thank you": ['🙏', '😊', '🙌', '💖', '💝'],
      'love': ['❤️', '💖', '💘', '😍', '😘', '💍', '💑'],
      "miss you": ['😢', '💔', '😔', '😭', '💖'],
      'sorry': ['😔', '🙏', '😓', '💔', '🥺'],
      'apologies': ['😔', '💔', '🙏', '😞', "🙇‍♂️", "🙇‍♀️"],
      'congratulations': ['🎉', '🎊', '🏆', '🎁', '👏'],
      "well done": ['👏', '💪', '🎉', '🎖️', '👍'],
      "good job": ['👏', '💯', '👍', '🌟', '🎉'],
      'happy': ['😁', '😊', '🎉', '🎊', '💃', '🕺'],
      'sad': ['😢', '😭', '😞', '💔', '😓'],
      'angry': ['😡', '🤬', '😤', '💢', '😾'],
      'excited': ['🤩', '🎉', '😆', '🤗', '🥳'],
      'surprised': ['😲', '😳', '😯', '😮', '😲'],
      'help': ['🆘', '❓', '🙏', '💡', "👨‍💻", "👩‍💻"],
      'how': ['❓', '🤔', '😕', '😳', '🧐'],
      'what': ['❓', '🤷‍♂️', '🤷‍♀️', '😕', '😲'],
      'where': ['❓', '🌍', "🗺️", "🏙️", '🌎'],
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
      'help': ['🆘', '❓', '🤔', "🙋‍♂️", "🙋‍♀️", '💡'],
      "need assistance": ['🆘', "💁‍♂️", "💁‍♀️", '❓', '🙏'],
      'sorry': ['😔', '🙏', '💔', '😓', '🥺', "🙇‍♂️", "🙇‍♀️"],
      'apology': ['😔', '😞', '🙏', '💔', "🙇‍♂️", "🙇‍♀️"],
      "good job": ['👏', '💯', '🎉', '🌟', '👍', '👏'],
      "well done": ['👏', '🎉', "🎖️", '💪', '🔥', '🏆'],
      "you can do it": ['💪', '🔥', '💯', '🚀', '🌟'],
      'congratulations': ['🎉', '🏆', '🎊', '🎁', '👏', '🍾'],
      'cheers': ['🥂', '🍻', '🍾', '🍷', '🥳', '🎉'],
      'goodbye': ['👋', '😢', '💔', "👋🏻", "🚶‍♂️", "🚶‍♀️"],
      'bye': ['👋', "👋🏻", '🥲', '🚶‍♂️', "🚶‍♀️"],
      "see you": ['👋', "👋🏻", '🤗', '✌️', "🙋‍♂️", "🙋‍♀️"],
      'hello': ['👋', '🙂', '😊', "🙋‍♂️", "🙋‍♀️"],
      'hi': ['👋', '🙂', '😁', "🙋‍♂️", "🙋‍♀️"],
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
      'family': ["👨‍👩‍👧‍👦", "👩‍👧", "👩‍👧‍👦", "👨‍👩‍👧", '💏', "👨‍👨‍👧‍👦", '👩‍👩‍👧‍👦'],
      'friends': ["👯‍♂️", "👯‍♀️", '🤗', '🫶', '💫', '🤝'],
      'relationship': ['💑', '❤️', '💍', '🥰', '💏', '💌'],
      'couple': ["👩‍❤️‍👨", '👨‍❤️‍👨', "👩‍❤️‍👩", '💍', '💑', '💏'],
      "best friend": ['🤗', '💖', "👯‍♀️", '👯‍♂️', '🙌'],
      "love you": ['❤️', '😘', '💖', '💘', '💓', '💗'],
      'vacation': ["🏖️", '🌴', '✈️', '🌊', "🛳️", '🏞️', "🏕️"],
      'beach': ["🏖️", '🌊', '🏄‍♀️', '🩴', "🏖️", '🌴', '🦀'],
      "road trip": ['🚗', '🚙', "🛣️", '🌄', '🌟'],
      'mountain': ["🏞️", '⛰️', "🏔️", '🌄', "🏕️", '🌲'],
      'city': ["🏙️", '🌆', '🗽', '🌇', '🚖', "🏙️"],
      'exploration': ['🌍', '🧭', '🌎', '🌍', '🧳', '📍', '⛵'],
      'morning': ['🌅', '☀️', '🌞', '🌄', '🌻', "🕶️"],
      'afternoon': ['🌞', '🌤️', '⛅', '🌻', '🌇'],
      'night': ['🌙', '🌛', '🌜', '⭐', '🌚', '💫'],
      'evening': ['🌙', '🌛', '🌇', '🌓', '💫'],
      'goodnight': ['🌙', '😴', '💤', '🌜', '🛌', '🌛', '✨'],
      'productivity': ['💻', '📊', '📝', '💼', '📅', '📈'],
      'office': ["🖥️", '💼', "🗂️", '📅', "🖋️"],
      'workout': ['🏋️‍♀️', '💪', '🏃‍♂️', "🏃‍♀️", "🤸‍♀️", "🚴‍♀️", "🏋️‍♂️"],
      "study hard": ['📚', '📝', '📖', '💡', '💼'],
      'focus': ['🔍', '🎯', '💻', '🧠', '🤓'],
      'food': ['🍕', '🍔', '🍟', '🍖', '🍖', '🥗', '🍣', '🍲'],
      'drink': ['🍹', '🥤', '🍷', '🍾', '🍸', '🍺', '🥂', '☕'],
      'coffee': ['☕', '🧃', '🍵', '🥤', '🍫'],
      'cake': ['🍰', '🎂', '🍩', '🍪', '🍫', '🧁'],
      "ice cream": ['🍦', '🍧', '🍨', '🍪'],
      'cat': ['🐱', '😺', '🐈', '🐾'],
      'dog': ['🐶', '🐕', '🐩', "🐕‍🦺", '🐾'],
      'bird': ['🐦', '🦉', '🦅', '🐦'],
      'fish': ['🐟', '🐠', '🐡', '🐡', '🐙'],
      'rabbit': ['🐰', '🐇', '🐹', '🐾'],
      'lion': ['🦁', '🐯', '🐅', '🐆'],
      'bear': ['🐻', '🐨', '🐼', "🐻‍❄️"],
      'elephant': ['🐘', '🐘'],
      'sun': ['☀️', '🌞', '🌄', '🌅', '🌞'],
      'rain': ["🌧️", '☔', '🌈', "🌦️", '🌧️'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '❄️'],
      'wind': ['💨', "🌬️", "🌪️", '🌬️'],
      'earth': ['🌍', '🌏', '🌎', '🌍', '🌱', '🌳'],
      'phone': ['📱', '☎️', '📞', '📲', '📡'],
      'computer': ['💻', '🖥️', '⌨️', '🖱️', "🖥️"],
      'internet': ['🌐', '💻', '📶', '📡', '🔌'],
      'software': ['💻', "🖥️", "🧑‍💻", '🖱️', '💡'],
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
      'goodbye': ['👋', '😢', "🙋‍♀️", '😔', '😭'],
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
      'cloud': ['☁️', '🌥️', "🌤️", '⛅', "🌧️"],
      'rain': ["🌧️", '☔', '💧', '💦', '🌂'],
      'thunder': ['⚡', '⛈️', "🌩️", "🌪️", '⚠️'],
      'fire': ['🔥', '⚡', '🌋', '🔥', '💥'],
      'flower': ['🌸', '🌺', '🌷', '💐', '🌹'],
      'tree': ['🌳', '🌲', '🌴', '🎄', '🌱'],
      'leaves': ['🍃', '🍂', '🍁', '🌿', '🌾'],
      'snow': ['❄️', '⛄', "🌨️", "🌬️", '☃️'],
      'wind': ['💨', '🌬️', '🍃', '⛅', "🌪️"],
      'rainbow': ['🌈', '🌤️', '☀️', '✨', '💧'],
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
      'horse': ['🐴', '🏇', '🐎', '🌄', '🏞️'],
      'sheep': ['🐑', '🐏', '🌾', '🐾', '🐐'],
      'soccer': ['⚽', '🥅', "🏟️", '🎉', '👏'],
      'basketball': ['🏀', '⛹️‍♂️', '🏆', '🎉', '🥇'],
      'tennis': ['🎾', '🏸', '🥇', '🏅', '💪'],
      'baseball': ['⚾', '🏟️', '🏆', '🎉', '👏'],
      'football': ['🏈', '🎉', "🏟️", '🏆', '🥅'],
      'golf': ['⛳', '🏌️‍♂️', '🏌️‍♀️', '🎉', '🏆'],
      'bowling': ['🎳', '🏅', '🎉', '🏆', '👏'],
      'running': ["🏃‍♂️", "🏃‍♀️", '👟', '🏅', '🔥'],
      'swimming': ["🏊‍♂️", '🏊‍♀️', '🌊', '🏆', '👏'],
      'cycling': ["🚴‍♂️", "🚴‍♀️", '🏅', '🔥', "🏞️"],
      'yoga': ['🧘', '🌸', '💪', '✨', '😌'],
      'dancing': ['💃', '🕺', '🎶', '🥳', '🎉'],
      'singing': ['🎤', '🎶', '🎙️', '🎉', '🎵'],
      'guitar': ['🎸', '🎶', '🎼', '🎵', '🎉'],
      'piano': ['🎹', '🎶', '🎼', '🎵', '🎉'],
      'money': ['💸', '💰', '💵', '💳', '🤑'],
      'fire': ['🔥', '💥', '⚡', '🎇', '✨'],
      'rocket': ['🚀', '🌌', '🛸', '🛰️', '✨'],
      'bomb': ['💣', '🔥', '⚡', '😱', '💥'],
      'computer': ['💻', "🖥️", '📱', '⌨️', '🖱️'],
      'phone': ['📱', '📲', '☎️', '📞', '📳'],
      'camera': ['📷', '📸', '🎥', '📹', "🎞️"],
      'book': ['📚', '📖', '✏️', '📘', '📕'],
      'light': ['💡', '✨', '🔦', '🌟', '🌞'],
      'music': ['🎶', '🎵', '🎼', '🎸', '🎧'],
      'star': ['🌟', '⭐', '✨', '🌠', '💫'],
      'gift': ['🎁', '💝', '🎉', '🎊', '🎈'],
      'car': ['🚗', '🚘', '🚙', '🚕', "🛣️"],
      'train': ['🚆', '🚄', '🚅', '🚞', '🚂'],
      'plane': ['✈️', '🛫', '🛬', "🛩️", '🚁'],
      'boat': ['⛵', "🛥️", '🚤', '🚢', '🌊'],
      'city': ['🏙️', '🌆', '🌇', '🏢', '🌃'],
      'beach': ["🏖️", '🌴', '🌊', '☀️', "🏄‍♂️"],
      'mountain': ["🏔️", '⛰️', '🗻', '🌄', '🌞'],
      'forest': ['🌲', '🌳', '🍃', "🏞️", '🐾'],
      'desert': ["🏜️", '🌵', '🐪', '🌞', "🏖️"],
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
    const _0x35cd12 = ['😎', '🔥', '💥', '💯', '✨', '🌟', '🌈', '⚡', '💎', '🌀', '👑', '🎉', '🎊', '🦄', '👽', '🛸', '🚀', '🦋', '💫', '🍀', '🎶', '🎧', '🎸', '🎤', '🏆', '🏅', '🌍', '🌎', '🌏', '🎮', '🎲', '💪', "🏋️", '🥇', '👟', '🏃', '🚴', '🚶', '🏄', '⛷️', "🕶️", '🧳', '🍿', '🍿', '🥂', '🍻', '🍷', '🍸', '🥃', '🍾', '🎯', '⏳', '🎁', '🎈', '🎨', '🌻', '🌸', '🌺', '🌹', '🌼', '🌞', '🌝', '🌜', '🌙', '🌚', '🍀', '🌱', '🍃', '🍂', '🌾', '🐉', '🐍', '🦓', '🦄', '🦋', '🦧', '🦘', '🦨', '🦡', '🐉', '🐅', '🐆', '🐓', '🐢', '🐊', '🐠', '🐟', '🐡', '🦑', '🐙', '🦀', '🐬', '🦕', '🦖', '🐾', '🐕', '🐈', '🐇', '🐾', '🐁', '🐀', "🐿️"];
    const _0x186268 = _0x1af196 => {
      const _0x2ede19 = _0x1af196.split(/\s+/);
      for (const _0x3c9cec of _0x2ede19) {
        const _0x237f3a = _0x3d8d9b(_0x3c9cec.toLowerCase());
        if (_0x237f3a) {
          return _0x237f3a;
        }
      }
      return _0x35cd12[Math.floor(Math.random() * _0x35cd12.length)];
    };
    const _0x3d8d9b = _0x3ece4b => {
      const _0x32e62c = _0x1741a4[_0x3ece4b.toLowerCase()];
      if (_0x32e62c && _0x32e62c.length > 0x0) {
        return _0x32e62c[Math.floor(Math.random() * _0x32e62c.length)];
      }
      return null;
    };
    if (conf.AUTO_REACT_STATUS === "yes") {
      console.log("AUTO_REACT_STATUS is enabled. Listening for status updates...");
      _0x210adb.ev.on("messages.upsert", async _0x101b21 => {
        const {
          messages: _0x2d445c
        } = _0x101b21;
        for (const _0x200589 of _0x2d445c) {
          if (_0x200589.key && _0x200589.key.remoteJid === "status@broadcast") {
            console.log("Detected status update from:", _0x200589.key.remoteJid);
            const _0x1bba5e = Date.now();
            if (_0x1bba5e - _0x1f2467 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            if (!zokou) {
              console.log("Bot's user ID not available. Skipping reaction.");
              continue;
            }
            const _0x1f3c1a = _0x200589?.["message"]?.["conversation"] || '';
            const _0x237246 = _0x186268(_0x1f3c1a) || _0x35cd12[Math.floor(Math.random() * _0x35cd12.length)];
            if (_0x237246) {
              await _0x210adb.sendMessage(_0x200589.key.remoteJid, {
                'react': {
                  'key': _0x200589.key,
                  'text': _0x237246
                }
              }, {
                'statusJidList': [_0x200589.key.participant, zokou]
              });
              _0x1f2467 = Date.now();
              console.log("Successfully reacted with '" + _0x237246 + "' to status update by " + _0x200589.key.remoteJid);
            }
            await _0x11e9ab(0x7d0);
          }
        }
      });
    }
    if (conf.AUTO_REACT === "yes") {
      console.log("AUTO_REACT is enabled. Listening for regular messages...");
      _0x210adb.ev.on("messages.upsert", async _0x4606f6 => {
        const {
          messages: _0x43a2af
        } = _0x4606f6;
        for (const _0x40bcbd of _0x43a2af) {
          if (_0x40bcbd.key && _0x40bcbd.key.remoteJid) {
            const _0x176432 = Date.now();
            if (_0x176432 - _0x1f2467 < 0x1388) {
              console.log("Throttling reactions to prevent overflow.");
              continue;
            }
            const _0x2f49ad = _0x40bcbd?.["message"]?.["conversation"] || '';
            const _0x57ae0d = _0x186268(_0x2f49ad) || _0x35cd12[Math.floor(Math.random() * _0x35cd12.length)];
            if (_0x57ae0d) {
              await _0x210adb.sendMessage(_0x40bcbd.key.remoteJid, {
                'react': {
                  'text': _0x57ae0d,
                  'key': _0x40bcbd.key
                }
              }).then(() => {
                _0x1f2467 = Date.now();
                console.log("Successfully reacted with '" + _0x57ae0d + "' to message by " + _0x40bcbd.key.remoteJid);
              })["catch"](_0xafca39 => {
                console.error("Failed to send reaction:", _0xafca39);
              });
            }
            await _0x11e9ab(0x7d0);
          }
        }
      });
    }
    async function _0x22653a(_0x12b232, _0x1690f7) {
      try {
        const _0x1a9029 = _0x12b232.split('@')[0x0];
        let _0x5bf987 = 0x1;
        let _0x4e578c = _0x1690f7 + " " + _0x5bf987;
        while (Object.values(store.contacts).some(_0x212d7a => _0x212d7a.name === _0x4e578c)) {
          _0x5bf987++;
          _0x4e578c = _0x1690f7 + " " + _0x5bf987;
        }
        const _0x1e2d39 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x4e578c + "\nTEL;type=CELL;type=VOICE;waid=" + _0x1a9029 + ':+' + _0x1a9029 + "\nEND:VCARD\n";
        const _0x4d3a74 = './' + _0x4e578c + '.vcf';
        fs.writeFileSync(_0x4d3a74, _0x1e2d39);
        await _0x210adb.sendMessage(conf.NUMERO_OWNER + '@s.whatsapp.net', {
          'document': {
            'url': _0x4d3a74
          },
          'mimetype': "text/vcard",
          'fileName': _0x4e578c + ".vcf",
          'caption': "Contact saved as " + _0x4e578c + ". Please import this vCard to add the number to your contacts.\nN RAHMANI XMD👊"
        });
        console.log("vCard created and sent for: " + _0x4e578c + " (" + _0x12b232 + ')');
        fs.unlinkSync(_0x4d3a74);
        return _0x4e578c;
      } catch (_0x521281) {
        console.error("Error creating or sending vCard for " + name + ':', _0x521281.message);
      }
    }
    _0x210adb.ev.on("messages.upsert", async _0x1964da => {
      if (conf.AUTO_SAVE_CONTACTS !== "yes") {
        return;
      }
      const {
        messages: _0x1b1302
      } = _0x1964da;
      const _0x224b3f = _0x1b1302[0x0];
      if (!_0x224b3f.message) {
        return;
      }
      const _0x41f5af = _0x224b3f.key.remoteJid;
      if (_0x41f5af.endsWith("@s.whatsapp.net") && (!store.contacts[_0x41f5af] || !store.contacts[_0x41f5af].name)) {
        const _0x51069d = await _0x22653a(_0x41f5af, 'RAHMANI-XMD');
        store.contacts[_0x41f5af] = {
          'name': _0x51069d
        };
        await _0x210adb.sendMessage(_0x41f5af, {
          'text': "Ssup Your name has been saved as \"" + _0x51069d + "\" in my account.\n\nTIMNASA-TMD"
        });
        console.log("Contact " + _0x51069d + " has been saved and notified.");
      }
    });
    let _0x3c4aec = "Hello,its TimbasaTech on board. My owner is currently unavailable. Please leave a message, and we will get back to you as soon as possible.";
    let _0x378ffe = new Set();
    _0x210adb.ev.on('messages.upsert', async _0x5a3f40 => {
      const {
        messages: _0xce6642
      } = _0x5a3f40;
      const _0xdad5c7 = _0xce6642[0x0];
      if (!_0xdad5c7.message) {
        return;
      }
      const _0x549ebd = _0xdad5c7.message.conversation || _0xdad5c7.message.extendedTextMessage?.["text"];
      const _0x25da21 = _0xdad5c7.key.remoteJid;
      if (_0x549ebd && _0x549ebd.match(/^[^\w\s]/) && _0xdad5c7.key.fromMe) {
        const _0x208773 = _0x549ebd[0x0];
        const _0xa6af4a = _0x549ebd.slice(0x1).split(" ")[0x0];
        const _0x4a3e04 = _0x549ebd.slice(_0x208773.length + _0xa6af4a.length).trim();
        if (_0xa6af4a === "setautoreply" && _0x4a3e04) {
          _0x3c4aec = _0x4a3e04;
          await _0x210adb.sendMessage(_0x25da21, {
            'text': "Auto-reply message has been updated to:\n\"" + _0x3c4aec + "\""
          });
          return;
        }
      }
      if (conf.AUTO_REPLY === "yes" && !_0x378ffe.has(_0x25da21) && !_0xdad5c7.key.fromMe && !_0x25da21.includes('@g.us')) {
        await _0x210adb.sendMessage(_0x25da21, {
          'text': _0x3c4aec
        });
        _0x378ffe.add(_0x25da21);
      }
    });
    const _0x1068ee = {
      'hey': "files/hey.wav",
      'hi': 'files/hey.wav',
      'hey': 'files/hey.wav',
      'he': "files/hey.wav",
      'hello': "files/hello.wav",
      'mambo': "files/hey.wav",
      'niaje': "files/hey.wav",
      'morning': 'files/goodmorning.wav',
      'goodmorning': "files/goodmorning.wav",
      "weka up": "files/goodmorning.wav",
      'night': "files/goodnight.wav",
      'goodnight': 'files/goodnight.wav',
      'sleep': 'files/goodnight.wav',
      'oyaah': "files/mkuu.wav",
      'mkuu': "files/mkuu.wav",
      'mahn': 'files/mkuu.wav',
      'owoh': "files/mkuu.wav",
      'yoo': "files/mkuu.wav",
      'wazii': "files/mkuu.wav",
      'bot': "files/fred.mp3",
      'timnasa': "files/fred.mp3",
      "timnasa md": 'files/fred.mp3',
      "timnasa tmd": "files/fred.mp3",
      'timoth': "files/fred.mp3",
      'timnasa': "files/fred.mp3",
      'md': "files/fred.mp3",
      "whatsapp bot": "files/fred.mp3",
      "goodbye": 'files/fred.mp3',
      'evening': "files/goodevening.wav",
      'goodevening': "files/goodevening.wav",
      'darling': "files/darling.wav",
      'beb': 'files/darling.wav',
      'mpenzi': "files/darling.wav",
      'afternoon': "files/goodafternoon.wav",
      'jion': "files/goodafternoon.wav",
      'kaka': 'files/kaka.wav',
      'bro': "files/morio.mp3",
      'ndugu': "files/kaka.wav",
      'morio': "files/morio.mp3",
      'mzee': 'files/morio.mp3',
      'kijina': 'files/mkuu.wav',
      'mkuu': "files/mkuu.wav",
      'ozah': 'files/mkuu.wav',
      'ozaah': "files/mkuu.wav",
      'oyaah': "files/mkuu.wav",
      'oyah': "files/mkuu.wav"
    };
    const _0x2957c0 = _0x4ac600 => {
      const _0x318a6a = _0x4ac600.split(/\s+/);
      for (const _0x2cd42a of _0x318a6a) {
        const _0x587794 = _0x1068ee[_0x2cd42a.toLowerCase()];
        if (_0x587794) {
          return _0x587794;
        }
      }
      return null;
    };
    if (conf.AUDIO_REPLY === "yes") {
      console.log("AUTO_REPLY_AUDIO is enabled. Listening for messages...");
      _0x210adb.ev.on("messages.upsert", async _0x246881 => {
        try {
          const {
            messages: _0x45e103
          } = _0x246881;
          for (const _0xc2082e of _0x45e103) {
            if (!_0xc2082e.key || !_0xc2082e.key.remoteJid) {
              continue;
            }
            const _0xcba912 = _0xc2082e?.["message"]?.["conversation"] || '';
            const _0x21fcf9 = _0x2957c0(_0xcba912);
            if (_0x21fcf9) {
              try {
                await fs.access(_0x21fcf9);
                console.log("Replying with audio: " + _0x21fcf9);
                await _0x210adb.sendMessage(_0xc2082e.key.remoteJid, {
                  'audio': {
                    'url': _0x21fcf9
                  },
                  'mimetype': "audio/mp4",
                  'ptt': true
                });
                console.log("Audio reply sent: " + _0x21fcf9);
              } catch (_0x3bd8c6) {
                console.error("Error sending audio reply: " + _0x3bd8c6.message);
              }
            } else {
              console.log("No matching keyword detected. Skipping message.");
            }
            await new Promise(_0x51372e => setTimeout(_0x51372e, 0xbb8));
          }
        } catch (_0x1a6d7c) {
          console.error("Error in message processing:", _0x1a6d7c.message);
        }
      });
    }
    _0x210adb.ev.on("messages.upsert", async _0xd4da2e => {
      const {
        messages: _0x23ccda
      } = _0xd4da2e;
      const _0x4b7db8 = _0x23ccda[0x0];
      if (!_0x4b7db8.message) {
        return;
      }
      const _0x4cea91 = _0x3ea498 => {
        if (!_0x3ea498) {
          return _0x3ea498;
        }
        if (/:\d+@/gi.test(_0x3ea498)) {
          0x0;
          let _0x1ed575 = baileys_1.jidDecode(_0x3ea498) || {};
          return _0x1ed575.user && _0x1ed575.server && _0x1ed575.user + '@' + _0x1ed575.server || _0x3ea498;
        } else {
          return _0x3ea498;
        }
      };
      0x0;
      var _0x497b51 = baileys_1.getContentType(_0x4b7db8.message);
      var _0x31e1b8 = _0x497b51 == 'conversation' ? _0x4b7db8.message.conversation : _0x497b51 == "imageMessage" ? _0x4b7db8.message.imageMessage?.["caption"] : _0x497b51 == "videoMessage" ? _0x4b7db8.message.videoMessage?.["caption"] : _0x497b51 == "extendedTextMessage" ? _0x4b7db8.message?.["extendedTextMessage"]?.["text"] : _0x497b51 == "buttonsResponseMessage" ? _0x4b7db8?.["message"]?.["buttonsResponseMessage"]?.["selectedButtonId"] : _0x497b51 == "listResponseMessage" ? _0x4b7db8.message?.["listResponseMessage"]?.['singleSelectReply']?.["selectedRowId"] : _0x497b51 == "messageContextInfo" ? _0x4b7db8?.['message']?.['buttonsResponseMessage']?.["selectedButtonId"] || _0x4b7db8.message?.['listResponseMessage']?.['singleSelectReply']?.['selectedRowId'] || _0x4b7db8.text : '';
      var _0x4e9a4c = _0x4b7db8.key.remoteJid;
      var _0x52ba70 = _0x4cea91(_0x210adb.user.id);
      var _0x444726 = _0x52ba70.split('@')[0x0];
      const _0x28a9dd = _0x4e9a4c?.['endsWith']('@g.us');
      var _0x34b8aa = _0x28a9dd ? await _0x210adb.groupMetadata(_0x4e9a4c) : '';
      var _0x224435 = _0x28a9dd ? _0x34b8aa.subject : '';
      var _0x696dc3 = _0x4b7db8.message.extendedTextMessage?.["contextInfo"]?.["quotedMessage"];
      var _0x380bf8 = _0x4cea91(_0x4b7db8.message?.["extendedTextMessage"]?.['contextInfo']?.["participant"]);
      var _0x133189 = _0x28a9dd ? _0x4b7db8.key.participant ? _0x4b7db8.key.participant : _0x4b7db8.participant : _0x4e9a4c;
      if (_0x4b7db8.key.fromMe) {
        _0x133189 = _0x52ba70;
      }
      var _0x5b3784 = _0x28a9dd ? _0x4b7db8.key.participant : '';
      const {
        getAllSudoNumbers: _0x5472b0
      } = require('./bdd/sudo');
      const _0x3b0752 = _0x4b7db8.pushName;
      const _0x3b811e = await _0x5472b0();
      const _0x2cf175 = [_0x444726, "255784766591", "255756469954", "255743414322", "255784766591", conf.NUMERO_OWNER].map(_0x32ed51 => _0x32ed51.replace(/[^0-9]/g) + "@s.whatsapp.net");
      const _0x4b448b = _0x2cf175.concat(_0x3b811e);
      const _0x199b9a = _0x4b448b.includes(_0x133189);
      var _0x41dcda = ["255784766591", "255756469954", "255784766591", "255784766591"].map(_0xdfa31d => _0xdfa31d.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(_0x133189);
      function _0x30fb72(_0x555ae5) {
        _0x210adb.sendMessage(_0x4e9a4c, {
          'text': _0x555ae5
        }, {
          'quoted': _0x4b7db8
        });
      }
      console.log("\tCONSOLE MESSAGES");
      console.log("=========== NEW CONVERSATION ===========");
      if (_0x28a9dd) {
        console.log("MESSAGE FROM GROUP : " + _0x224435);
      }
      console.log("MESSAGE SENT BY : [" + _0x3b0752 + " : " + _0x133189.split('@s.whatsapp.net')[0x0] + " ]");
      console.log("MESSAGE TYPE : " + _0x497b51);
      console.log("==================TEXT==================");
      console.log(_0x31e1b8);
      function _0xd91fba(_0x289168) {
        let _0x2ffbfa = [];
        for (_0xd4da2e of _0x289168) {
          if (_0xd4da2e.admin == null) {
            continue;
          }
          _0x2ffbfa.push(_0xd4da2e.id);
        }
        return _0x2ffbfa;
      }
      var _0x5ed9cf = conf.ETAT;
      if (_0x5ed9cf == 0x1) {
        await _0x210adb.sendPresenceUpdate("available", _0x4e9a4c);
      } else {
        if (_0x5ed9cf == 0x2) {
          await _0x210adb.sendPresenceUpdate("composing", _0x4e9a4c);
        } else if (_0x5ed9cf == 0x3) {
          await _0x210adb.sendPresenceUpdate('recording', _0x4e9a4c);
        } else {
          await _0x210adb.sendPresenceUpdate('unavailable', _0x4e9a4c);
        }
      }
      const _0x209842 = _0x28a9dd ? await _0x34b8aa.participants : '';
      let _0x2dc5cf = _0x28a9dd ? _0xd91fba(_0x209842) : '';
      const _0x100ec7 = _0x28a9dd ? _0x2dc5cf.includes(_0x133189) : false;
      var _0x40e8ea = _0x28a9dd ? _0x2dc5cf.includes(_0x52ba70) : false;
      const _0x41770e = _0x31e1b8 ? _0x31e1b8.trim().split(/ +/).slice(0x1) : null;
      const _0x2f6eba = _0x31e1b8 ? _0x31e1b8.startsWith(prefixe) : false;
      const _0x271146 = _0x2f6eba ? _0x31e1b8.slice(0x1).trim().split(/ +/).shift().toLowerCase() : false;
      const _0x1ec67b = conf.URL.split(',');
      function _0x504cab() {
        const _0x29b07a = Math.floor(Math.random() * _0x1ec67b.length);
        const _0x1cc25b = _0x1ec67b[_0x29b07a];
        return _0x1cc25b;
      }
      var _0x475f02 = {
        'superUser': _0x199b9a,
        'dev': _0x41dcda,
        'verifGroupe': _0x28a9dd,
        'mbre': _0x209842,
        'membreGroupe': _0x5b3784,
        'verifAdmin': _0x100ec7,
        'infosGroupe': _0x34b8aa,
        'nomGroupe': _0x224435,
        'auteurMessage': _0x133189,
        'nomAuteurMessage': _0x3b0752,
        'idBot': _0x52ba70,
        'verifZokouAdmin': _0x40e8ea,
        'prefixe': prefixe,
        'arg': _0x41770e,
        'repondre': _0x30fb72,
        'mtype': _0x497b51,
        'groupeAdmin': _0xd91fba,
        'msgRepondu': _0x696dc3,
        'auteurMsgRepondu': _0x380bf8,
        'ms': _0x4b7db8,
        'mybotpic': _0x504cab
      };
      if (conf.AUTO_READ === "yes") {
        _0x210adb.ev.on("messages.upsert", async _0x1cf6c4 => {
          const {
            messages: _0xd60b27
          } = _0x1cf6c4;
          for (const _0x849fef of _0xd60b27) {
            if (!_0x849fef.key.fromMe) {
              await _0x210adb.readMessages([_0x849fef.key]);
            }
          }
        });
      }
      if (_0x4b7db8.key && _0x4b7db8.key.remoteJid === "status@broadcast" && conf.AUTO_READ_STATUS === "yes") {
        await _0x210adb.readMessages([_0x4b7db8.key]);
      }
      if (_0x4b7db8.key && _0x4b7db8.key.remoteJid === 'status@broadcast' && conf.AUTO_DOWNLOAD_STATUS === "yes") {
        if (_0x4b7db8.message.extendedTextMessage) {
          var _0x360c3c = _0x4b7db8.message.extendedTextMessage.text;
          await _0x210adb.sendMessage(_0x52ba70, {
            'text': _0x360c3c
          }, {
            'quoted': _0x4b7db8
          });
        } else {
          if (_0x4b7db8.message.imageMessage) {
            var _0x3aac4e = _0x4b7db8.message.imageMessage.caption;
            var _0x8be96e = await _0x210adb.downloadAndSaveMediaMessage(_0x4b7db8.message.imageMessage);
            await _0x210adb.sendMessage(_0x52ba70, {
              'image': {
                'url': _0x8be96e
              },
              'caption': _0x3aac4e
            }, {
              'quoted': _0x4b7db8
            });
          } else {
            if (_0x4b7db8.message.videoMessage) {
              var _0x3aac4e = _0x4b7db8.message.videoMessage.caption;
              var _0x42803c = await _0x210adb.downloadAndSaveMediaMessage(_0x4b7db8.message.videoMessage);
              await _0x210adb.sendMessage(_0x52ba70, {
                'video': {
                  'url': _0x42803c
                },
                'caption': _0x3aac4e
              }, {
                'quoted': _0x4b7db8
              });
            }
          }
        }
      }
      if (!_0x41dcda && _0x4e9a4c == "120363353854480831@g.us") {
        return;
      }
      if (_0x31e1b8 && _0x133189.endsWith('s.whatsapp.net')) {
        const {
          ajouterOuMettreAJourUserData: _0x151e3f
        } = require("./bdd/level");
        try {
          await _0x151e3f(_0x133189);
        } catch (_0x3e61cf) {
          console.error(_0x3e61cf);
        }
      }
      try {
        if (_0x4b7db8.message[_0x497b51].contextInfo.mentionedJid && (_0x4b7db8.message[_0x497b51].contextInfo.mentionedJid.includes(_0x52ba70) || _0x4b7db8.message[_0x497b51].contextInfo.mentionedJid.includes(conf.NUMERO_OWNER + "@s.whatsapp.net"))) {
          if (_0x4e9a4c == "120363353854480831@g.us") {
            return;
          }
          ;
          if (_0x199b9a) {
            console.log("hummm");
            return;
          }
          let _0x53943e = require("./bdd/mention");
          let _0x2f155c = await _0x53943e.recupererToutesLesValeurs();
          let _0x267c8d = _0x2f155c[0x0];
          if (_0x267c8d.status === 'non') {
            console.log("mention pas actifs");
            return;
          }
          let _0x199fe0;
          if (_0x267c8d.type.toLocaleLowerCase() === "image") {
            _0x199fe0 = {
              'image': {
                'url': _0x267c8d.url
              },
              'caption': _0x267c8d.message
            };
          } else {
            if (_0x267c8d.type.toLocaleLowerCase() === "video") {
              _0x199fe0 = {
                'video': {
                  'url': _0x267c8d.url
                },
                'caption': _0x267c8d.message
              };
            } else {
              if (_0x267c8d.type.toLocaleLowerCase() === 'sticker') {
                let _0x252b89 = new Sticker(_0x267c8d.url, {
                  'pack': conf.NOM_OWNER,
                  'type': StickerTypes.FULL,
                  'categories': ['🤩', '🎉'],
                  'id': "12345",
                  'quality': 0x46,
                  'background': "transparent"
                });
                const _0x3e654e = await _0x252b89.toBuffer();
                _0x199fe0 = {
                  'sticker': _0x3e654e
                };
              } else if (_0x267c8d.type.toLocaleLowerCase() === "audio") {
                _0x199fe0 = {
                  'audio': {
                    'url': _0x267c8d.url
                  },
                  'mimetype': "audio/mp4"
                };
              }
            }
          }
          _0x210adb.sendMessage(_0x4e9a4c, _0x199fe0, {
            'quoted': _0x4b7db8
          });
        }
      } catch (_0x1be9d6) {}
      try {
        const _0x4bfb36 = await verifierEtatJid(_0x4e9a4c);
        if (_0x31e1b8.includes("https://") && _0x28a9dd && _0x4bfb36) {
          console.log("lien detecté");
          var _0x50585c = _0x28a9dd ? _0x2dc5cf.includes(_0x52ba70) : false;
          if (_0x199b9a || _0x100ec7 || !_0x50585c) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0xbf2d5a = {
            'remoteJid': _0x4e9a4c,
            'fromMe': false,
            'id': _0x4b7db8.key.id,
            'participant': _0x133189
          };
          var _0x1ab9d6 = "lien detected, \n";
          var _0x234204 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "Cyberion",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x234204.toFile('st1.webp');
          var _0x3cc968 = await recupererActionJid(_0x4e9a4c);
          if (_0x3cc968 === "remove") {
            _0x1ab9d6 += "message deleted \n @" + _0x133189.split('@')[0x0] + " removed from group.";
            await _0x210adb.sendMessage(_0x4e9a4c, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x210adb.sendMessage(_0x4e9a4c, {
              'text': _0x1ab9d6,
              'mentions': [_0x133189]
            }, {
              'quoted': _0x4b7db8
            });
            try {
              await _0x210adb.groupParticipantsUpdate(_0x4e9a4c, [_0x133189], "remove");
            } catch (_0x3963bd) {
              console.log("antiien ") + _0x3963bd;
            }
            await _0x210adb.sendMessage(_0x4e9a4c, {
              'delete': _0xbf2d5a
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x3cc968 === "delete") {
              _0x1ab9d6 += "message deleted \n @" + _0x133189.split('@')[0x0] + " avoid sending link.";
              await _0x210adb.sendMessage(_0x4e9a4c, {
                'text': _0x1ab9d6,
                'mentions': [_0x133189]
              }, {
                'quoted': _0x4b7db8
              });
              await _0x210adb.sendMessage(_0x4e9a4c, {
                'delete': _0xbf2d5a
              });
              await fs.unlink("st1.webp");
            } else {
              if (_0x3cc968 === "warn") {
                const {
                  getWarnCountByJID: _0x3e698f,
                  ajouterUtilisateurAvecWarnCount: _0x1539eb
                } = require("./bdd/warn");
                let _0x139a67 = await _0x3e698f(_0x133189);
                let _0xd03258 = conf.WARN_COUNT;
                if (_0x139a67 >= _0xd03258) {
                  var _0x65c6aa = "link detected , you will be remove because of reaching warn-limit";
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'text': _0x65c6aa,
                    'mentions': [_0x133189]
                  }, {
                    'quoted': _0x4b7db8
                  });
                  await _0x210adb.groupParticipantsUpdate(_0x4e9a4c, [_0x133189], "remove");
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'delete': _0xbf2d5a
                  });
                } else {
                  var _0x539fc8 = _0xd03258 - _0x139a67;
                  var _0x48d868 = "Link detected , your warn_count was upgrade ;\n rest : " + _0x539fc8 + " ";
                  await _0x1539eb(_0x133189);
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'text': _0x48d868,
                    'mentions': [_0x133189]
                  }, {
                    'quoted': _0x4b7db8
                  });
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'delete': _0xbf2d5a
                  });
                }
              }
            }
          }
        }
      } catch (_0x51bd9a) {
        console.log("bdd err " + _0x51bd9a);
      }
      try {
        const _0x972898 = _0x4b7db8.key?.['id']?.["startsWith"]('BAES') && _0x4b7db8.key?.['id']?.['length'] === 0x10;
        const _0xef032a = _0x4b7db8.key?.['id']?.["startsWith"]("BAE5") && _0x4b7db8.key?.['id']?.["length"] === 0x10;
        if (_0x972898 || _0xef032a) {
          if (_0x497b51 === "reactionMessage") {
            console.log("Je ne reagis pas au reactions");
            return;
          }
          ;
          const _0x25dfa7 = await atbverifierEtatJid(_0x4e9a4c);
          if (!_0x25dfa7) {
            return;
          }
          ;
          if (_0x100ec7 || _0x133189 === _0x52ba70) {
            console.log("je fais rien");
            return;
          }
          ;
          const _0x28360c = {
            'remoteJid': _0x4e9a4c,
            'fromMe': false,
            'id': _0x4b7db8.key.id,
            'participant': _0x133189
          };
          var _0x1ab9d6 = "bot detected, \n";
          var _0x234204 = new Sticker("https://raw.githubusercontent.com/djalega8000/Zokou-MD/main/media/remover.gif", {
            'pack': "FredieTech",
            'author': conf.OWNER_NAME,
            'type': StickerTypes.FULL,
            'categories': ['🤩', '🎉'],
            'id': "12345",
            'quality': 0x32,
            'background': "#000000"
          });
          await _0x234204.toFile('st1.webp');
          var _0x3cc968 = await atbrecupererActionJid(_0x4e9a4c);
          if (_0x3cc968 === "remove") {
            _0x1ab9d6 += "message deleted \n @" + _0x133189.split('@')[0x0] + " removed from group.";
            await _0x210adb.sendMessage(_0x4e9a4c, {
              'sticker': fs.readFileSync("st1.webp")
            });
            0x0;
            baileys_1.delay(0x320);
            await _0x210adb.sendMessage(_0x4e9a4c, {
              'text': _0x1ab9d6,
              'mentions': [_0x133189]
            }, {
              'quoted': _0x4b7db8
            });
            try {
              await _0x210adb.groupParticipantsUpdate(_0x4e9a4c, [_0x133189], 'remove');
            } catch (_0x1af6c8) {
              console.log("antibot ") + _0x1af6c8;
            }
            await _0x210adb.sendMessage(_0x4e9a4c, {
              'delete': _0x28360c
            });
            await fs.unlink("st1.webp");
          } else {
            if (_0x3cc968 === "delete") {
              _0x1ab9d6 += "message delete \n @" + _0x133189.split('@')[0x0] + " Avoid sending link.";
              await _0x210adb.sendMessage(_0x4e9a4c, {
                'text': _0x1ab9d6,
                'mentions': [_0x133189]
              }, {
                'quoted': _0x4b7db8
              });
              await _0x210adb.sendMessage(_0x4e9a4c, {
                'delete': _0x28360c
              });
              await fs.unlink('st1.webp');
            } else {
              if (_0x3cc968 === "warn") {
                const {
                  getWarnCountByJID: _0x5ed865,
                  ajouterUtilisateurAvecWarnCount: _0x3c1708
                } = require("./bdd/warn");
                let _0x27ce7a = await _0x5ed865(_0x133189);
                let _0x50c1e3 = conf.WARN_COUNT;
                if (_0x27ce7a >= _0x50c1e3) {
                  var _0x65c6aa = "bot detected ;you will be remove because of reaching warn-limit";
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'text': _0x65c6aa,
                    'mentions': [_0x133189]
                  }, {
                    'quoted': _0x4b7db8
                  });
                  await _0x210adb.groupParticipantsUpdate(_0x4e9a4c, [_0x133189], "remove");
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'delete': _0x28360c
                  });
                } else {
                  var _0x539fc8 = _0x50c1e3 - _0x27ce7a;
                  var _0x48d868 = "bot detected , your warn_count was upgrade ;\n rest : " + _0x539fc8 + " ";
                  await _0x3c1708(_0x133189);
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'text': _0x48d868,
                    'mentions': [_0x133189]
                  }, {
                    'quoted': _0x4b7db8
                  });
                  await _0x210adb.sendMessage(_0x4e9a4c, {
                    'delete': _0x28360c
                  });
                }
              }
            }
          }
        }
      } catch (_0x3bb293) {
        console.log(".... " + _0x3bb293);
      }
      if (_0x2f6eba) {
        const _0x4202f0 = evt.cm.find(_0xfec377 => _0xfec377.nomCom === _0x271146);
        if (_0x4202f0) {
          try {
            if (conf.MODE.toLocaleLowerCase() != "yes" && !_0x199b9a) {
              return;
            }
            if (!_0x199b9a && _0x4e9a4c === _0x133189 && conf.PM_PERMIT === "yes") {
              _0x30fb72("You don't have acces to commands here");
              return;
            }
            if (!_0x199b9a && _0x28a9dd) {
              let _0xc18c93 = await isGroupBanned(_0x4e9a4c);
              if (_0xc18c93) {
                return;
              }
            }
            if (!_0x100ec7 && _0x28a9dd) {
              let _0x43616b = await isGroupOnlyAdmin(_0x4e9a4c);
              if (_0x43616b) {
                return;
              }
            }
            if (!_0x199b9a) {
              let _0x3bdca8 = await isUserBanned(_0x133189);
              if (_0x3bdca8) {
                _0x30fb72("You are banned from bot commands");
                return;
              }
            }
            reagir(_0x4e9a4c, _0x210adb, _0x4b7db8, _0x4202f0.reaction);
            _0x4202f0.fonction(_0x4e9a4c, _0x210adb, _0x475f02);
          } catch (_0x4186a9) {
            console.log("😡😡 " + _0x4186a9);
            _0x210adb.sendMessage(_0x4e9a4c, {
              'text': "😡😡 " + _0x4186a9
            }, {
              'quoted': _0x4b7db8
            });
          }
        }
      }
    });
    const {
      recupevents: _0x189602
    } = require("./bdd/welcome");
    _0x210adb.ev.on("group-participants.update", async _0x142006 => {
      console.log(_0x142006);
      let _0x3ce458;
      try {
        _0x3ce458 = await _0x210adb.profilePictureUrl(_0x142006.id, "image");
      } catch {
        _0x3ce458 = 'https://files.catbox.moe/dzzlrd.jpg';
      }
      try {
        const _0xe6a7ad = await _0x210adb.groupMetadata(_0x142006.id);
        if (_0x142006.action == 'add' && (await _0x189602(_0x142006.id, 'welcome')) == 'on') {
          let _0x622517 = "👋 Hello\n";
          let _0x40add8 = _0x142006.participants;
          for (let _0x23bb17 of _0x40add8) {
            _0x622517 += " *@" + _0x23bb17.split('@')[0x0] + "* Welcome to Our Official Group TimnasaTech,";
          }
          _0x622517 += "You might want to read the group Description to avoid getting removed...";
          _0x210adb.sendMessage(_0x142006.id, {
            'image': {
              'url': _0x3ce458
            },
            'caption': _0x622517,
            'mentions': _0x40add8
          });
        } else {
          if (_0x142006.action == "remove" && (await _0x189602(_0x142006.id, "goodbye")) == 'on') {
            let _0x31dbda = "ɢᴏᴏᴅʙʏᴇ ᴛᴏ sᴇᴇ ᴇᴀᴄʜ ᴏᴛʜᴇʀ ᴡᴇ ᴡɪʟʟ ʀᴇᴍᴇᴍʙᴇʀ ʏᴏᴜ sᴏ ᴍᴜᴄʜ ᴛʜᴀᴛ ʏᴏᴜ ʜᴀᴠᴇ ʟᴇғᴛ ᴜs ᴀʟᴏɴᴇ ғᴏʀ ᴀ ɢʀᴏᴜᴘ 😞 one or somes member(s) left group;\n";
            let _0x361152 = _0x142006.participants;
            for (let _0x4bed34 of _0x361152) {
              _0x31dbda += '@' + _0x4bed34.split('@')[0x0] + "\n";
            }
            _0x210adb.sendMessage(_0x142006.id, {
              'text': _0x31dbda,
              'mentions': _0x361152
            });
          } else {
            if (_0x142006.action == "promote" && (await _0x189602(_0x142006.id, "antipromote")) == 'on') {
              if (_0x142006.author == _0xe6a7ad.owner || _0x142006.author == conf.NUMERO_OWNER + '@s.whatsapp.net' || _0x142006.author == decodeJid(_0x210adb.user.id) || _0x142006.author == _0x142006.participants[0x0]) {
                console.log("Cas de superUser je fais rien");
                return;
              }
              ;
              await _0x210adb.groupParticipantsUpdate(_0x142006.id, [_0x142006.author, _0x142006.participants[0x0]], "demote");
              _0x210adb.sendMessage(_0x142006.id, {
                'text': '@' + _0x142006.author.split('@')[0x0] + " has violated the anti-promotion rule, therefore both " + _0x142006.author.split('@')[0x0] + " and @" + _0x142006.participants[0x0].split('@')[0x0] + " have been removed from administrative rights.",
                'mentions': [_0x142006.author, _0x142006.participants[0x0]]
              });
            } else {
              if (_0x142006.action == "demote" && (await _0x189602(_0x142006.id, "antidemote")) == 'on') {
                if (_0x142006.author == _0xe6a7ad.owner || _0x142006.author == conf.NUMERO_OWNER + "@s.whatsapp.net" || _0x142006.author == decodeJid(_0x210adb.user.id) || _0x142006.author == _0x142006.participants[0x0]) {
                  console.log("Cas de superUser je fais rien");
                  return;
                }
                ;
                await _0x210adb.groupParticipantsUpdate(_0x142006.id, [_0x142006.author], 'demote');
                await _0x210adb.groupParticipantsUpdate(_0x142006.id, [_0x142006.participants[0x0]], "promote");
                _0x210adb.sendMessage(_0x142006.id, {
                  'text': '@' + _0x142006.author.split('@')[0x0] + " has violated the anti-demotion rule by removing @" + _0x142006.participants[0x0].split('@')[0x0] + ". Consequently, he has been stripped of administrative rights.",
                  'mentions': [_0x142006.author, _0x142006.participants[0x0]]
                });
              }
            }
          }
        }
      } catch (_0x4f1bba) {
        console.error(_0x4f1bba);
      }
    });
    async function _0x2fe204() {
      const _0x1820b1 = require("node-cron");
      const {
        getCron: _0x1f19dd
      } = require('./bdd/cron');
      let _0x33dc9a = await _0x1f19dd();
      console.log(_0x33dc9a);
      if (_0x33dc9a.length > 0x0) {
        for (let _0x100b5f = 0x0; _0x100b5f < _0x33dc9a.length; _0x100b5f++) {
          if (_0x33dc9a[_0x100b5f].mute_at != null) {
            let _0x196acb = _0x33dc9a[_0x100b5f].mute_at.split(':');
            console.log("etablissement d'un automute pour " + _0x33dc9a[_0x100b5f].group_id + " a " + _0x196acb[0x0] + " H " + _0x196acb[0x1]);
            _0x1820b1.schedule(_0x196acb[0x1] + " " + _0x196acb[0x0] + " * * *", async () => {
              await _0x210adb.groupSettingUpdate(_0x33dc9a[_0x100b5f].group_id, 'announcement');
              _0x210adb.sendMessage(_0x33dc9a[_0x100b5f].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
                },
                'caption': "Hello, it's time to close the group; sayonara."
              });
            }, {
              'timezone': "Africa/Dar Es Salam"
            });
          }
          if (_0x33dc9a[_0x100b5f].unmute_at != null) {
            let _0x327285 = _0x33dc9a[_0x100b5f].unmute_at.split(':');
            console.log("etablissement d'un autounmute pour " + _0x327285[0x0] + " H " + _0x327285[0x1] + " ");
            _0x1820b1.schedule(_0x327285[0x1] + " " + _0x327285[0x0] + " * * *", async () => {
              await _0x210adb.groupSettingUpdate(_0x33dc9a[_0x100b5f].group_id, 'not_announcement');
              _0x210adb.sendMessage(_0x33dc9a[_0x100b5f].group_id, {
                'image': {
                  'url': "./media/chrono.webp"
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
    _0x210adb.ev.on("connection.update", async _0x33bc0a => {
      const {
        lastDisconnect: _0x1f271f,
        connection: _0x17e9fb
      } = _0x33bc0a;
      if (_0x17e9fb === 'connecting') {
        console.log("ℹ️ TimnasaTech is connecting...");
      } else {
        if (_0x17e9fb === "open") {
          console.log("✅ TimnasaTech Connected to WhatsApp! ☺️");
          console.log('--');
          0x0;
          await baileys_1.delay(0xc8);
          console.log("------");
          0x0;
          await baileys_1.delay(0x12c);
          console.log('------------------/-----');
          console.log("Timnasa whatsapp bot is Online 🕸\n\n");
          console.log("Loading TimnasaTech Commands ...\n");
          fs.readdirSync(__dirname + "/commandes").forEach(_0x49456f => {
            if (path.extname(_0x49456f).toLowerCase() == ".js") {
              try {
                require(__dirname + "/commandes/" + _0x49456f);
                console.log(_0x49456f + " Installed Successfully✔️");
              } catch (_0x38365d) {
                console.log(_0x49456f + " could not be installed due to : " + _0x38365d);
              }
              0x0;
              baileys_1.delay(0x12c);
            }
          });
          0x0;
          baileys_1.delay(0x2bc);
          var _0x3fd2d7;
          if (conf.MODE.toLocaleLowerCase() === "yes") {
            _0x3fd2d7 = "public";
          } else if (conf.MODE.toLocaleLowerCase() === 'no') {
            _0x3fd2d7 = 'private';
          } else {
            _0x3fd2d7 = 'undefined';
          }
          console.log("Commands Installation Completed ✅");
          await _0x2fe204();
          if (conf.DP.toLowerCase() === 'yes') {
            let _0x35ab5a = " ⁠⁠⁠⁠\n\n   _TIMNASATECH-CONNECTED_\n\n║ Prefix: [ " + prefixe + " ]\n║ Mode: " + _0x3fd2d7 + "\n║ Model: TIMNASA_TECH\n║ Bot Name: TIMNASA-TMD-Bot \n║ Owner: TimnasaTech\n╚═════ ❖ •✦\n-_-<-<-<-<-<-<-<--<-<-<-<-<-<\n\n*🪀Follow my channel for updates 🔱*\n \n> https://whatsapp.com/channel/0029VajweHxKQuJP6qnjLM31\n\n*Heroku App Configuration*\n \n*🐥Client name*\n> " + herokuAppName + "\n\n*🦋Visit your bot web*\n> " + herokuAppLink + "\n\n*🦁Client Number*\n> " + botOwner + "\n\n-_-_-<€<€-<-<-<-<-<-<-<-<-<-<-<\n                \n                 ";
            await _0x210adb.sendMessage(_0x210adb.user.id, {
              'text': _0x35ab5a
            });
          }
        } else {
          if (_0x17e9fb == 'close') {
            let _0x57b6c4 = new boom_1.Boom(_0x1f271f?.["error"])?.["output"]['statusCode'];
            if (_0x57b6c4 === baileys_1.DisconnectReason.badSession) {
              console.log("Session id error, rescan again...");
            } else {
              if (_0x57b6c4 === baileys_1.DisconnectReason.connectionClosed) {
                console.log("!!! connexion fermée, reconnexion en cours ...");
                _0x53a379();
              } else {
                if (_0x57b6c4 === baileys_1.DisconnectReason.connectionLost) {
                  console.log("connection error 😞 ,,, trying to reconnect... ");
                  _0x53a379();
                } else {
                  if (_0x57b6c4 === baileys_1.DisconnectReason?.["connectionReplaced"]) {
                    console.log("connexion réplacée ,,, une sesssion est déjà ouverte veuillez la fermer svp !!!");
                  } else {
                    if (_0x57b6c4 === baileys_1.DisconnectReason.loggedOut) {
                      console.log("vous êtes déconnecté,,, veuillez rescanner le code qr svp");
                    } else {
                      if (_0x57b6c4 === baileys_1.DisconnectReason.restartRequired) {
                        console.log("redémarrage en cours ▶️");
                        _0x53a379();
                      } else {
                        console.log("redemarrage sur le coup de l'erreur  ", _0x57b6c4);
                        const {
                          exec: _0xabaf2c
                        } = require('child_process');
                        _0xabaf2c("pm2 restart all");
                      }
                    }
                  }
                }
              }
            }
            console.log("hum " + _0x17e9fb);
            _0x53a379();
          }
        }
      }
    });
    _0x210adb.ev.on("creds.update", _0x446f7c);
    _0x210adb.downloadAndSaveMediaMessage = async (_0x4536fb, _0x34f184 = '', _0x4dc48c = true) => {
      let _0xa2fcde = _0x4536fb.msg ? _0x4536fb.msg : _0x4536fb;
      let _0x16edfc = (_0x4536fb.msg || _0x4536fb).mimetype || '';
      let _0x3d592d = _0x4536fb.mtype ? _0x4536fb.mtype.replace(/Message/gi, '') : _0x16edfc.split('/')[0x0];
      0x0;
      const _0x2e5187 = await baileys_1.downloadContentFromMessage(_0xa2fcde, _0x3d592d);
      let _0x1b6210 = Buffer.from([]);
      for await (const _0x51e7ab of _0x2e5187) {
        _0x1b6210 = Buffer.concat([_0x1b6210, _0x51e7ab]);
      }
      let _0x191bd2 = await FileType.fromBuffer(_0x1b6210);
      let _0x1ae845 = './' + _0x34f184 + '.' + _0x191bd2.ext;
      await fs.writeFileSync(_0x1ae845, _0x1b6210);
      return _0x1ae845;
    };
    _0x210adb.awaitForMessage = async (_0x430161 = {}) => {
      return new Promise((_0x3e2aa3, _0x5abf67) => {
        if (typeof _0x430161 !== "object") {
          _0x5abf67(new Error("Options must be an object"));
        }
        if (typeof _0x430161.sender !== 'string') {
          _0x5abf67(new Error("Sender must be a string"));
        }
        if (typeof _0x430161.chatJid !== 'string') {
          _0x5abf67(new Error("ChatJid must be a string"));
        }
        if (_0x430161.timeout && typeof _0x430161.timeout !== 'number') {
          _0x5abf67(new Error("Timeout must be a number"));
        }
        if (_0x430161.filter && typeof _0x430161.filter !== 'function') {
          _0x5abf67(new Error("Filter must be a function"));
        }
        const _0x19feb4 = _0x430161?.["timeout"] || undefined;
        const _0x20b4f1 = _0x430161?.['filter'] || (() => true);
        let _0x28fcde = undefined;
        let _0x21e56d = _0x9da6ec => {
          let {
            type: _0x43dfc0,
            messages: _0x5f7cf
          } = _0x9da6ec;
          if (_0x43dfc0 == "notify") {
            for (let _0x4e6f1a of _0x5f7cf) {
              const _0x4ab2e2 = _0x4e6f1a.key.fromMe;
              const _0x271971 = _0x4e6f1a.key.remoteJid;
              const _0x2513c6 = _0x271971.endsWith("@g.us");
              const _0x26ab90 = _0x271971 == "status@broadcast";
              const _0xa8d32a = _0x4ab2e2 ? _0x210adb.user.id.replace(/:.*@/g, '@') : _0x2513c6 || _0x26ab90 ? _0x4e6f1a.key.participant.replace(/:.*@/g, '@') : _0x271971;
              if (_0xa8d32a == _0x430161.sender && _0x271971 == _0x430161.chatJid && _0x20b4f1(_0x4e6f1a)) {
                _0x210adb.ev.off("messages.upsert", _0x21e56d);
                clearTimeout(_0x28fcde);
                _0x3e2aa3(_0x4e6f1a);
              }
            }
          }
        };
        _0x210adb.ev.on("messages.upsert", _0x21e56d);
        if (_0x19feb4) {
          _0x28fcde = setTimeout(() => {
            _0x210adb.ev.off("messages.upsert", _0x21e56d);
            _0x5abf67(new Error("Timeout"));
          }, _0x19feb4);
        }
      });
    };
    return _0x210adb;
  }
  let _0x509de3 = require.resolve(__filename);
  fs.watchFile(_0x509de3, () => {
    fs.unwatchFile(_0x509de3);
    console.log("mise à jour " + __filename);
    delete require.cache[_0x509de3];
    require(_0x509de3);
  });
  _0x53a379();
}, 0x1388)

import PhoneNumber from "awesome-phonenumber";
import fetch from "node-fetch";
let handler = async (m, { conn, args }) => {
  let _pp = "./src/avatar_contact.png";
  let who = m.mentionedJid[0]
    ? m.mentionedJid[0]
    : m.quoted
    ? m.quoted.sender
    : args[1]
    ? args[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
    : m.isGroup
    ? m.sender
    : m.chat;
  let user = db.data.users[who];
  let pp = await conn
    .profilePictureUrl(who, "image")
    .catch((_) => "./src/avatar_contact.png");
  let pepe = await conn.resize(pp, 280, 210);
  let { premium, level, limit, exp, lastclaim, registered, regTime, age } =
    global.db.data.users[who];
  let username = conn.getName(who);
  let name = conn.getName(who);
  let about = ((await conn.fetchStatus(who).catch(console.log)) || {}).status;
  let fkon = {
    key: {
      fromMe: false,
      participant: `${who.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: "16504228206@s.whatsapp.net" } : {}),
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${
          who.split("@")[0]
        }:${who.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
      },
    },
  };
  let str = `]─────────❏ *PROFILE* ❏─────────[
    
💌 • *Name :* ${username} 
🎐 • *Username :* ${registered ? user.name : ""}
📧 • *Tag :* @${who.split(`@`)[0]}
📑 • *About ;* ${about}
📞 • *Number :* ${PhoneNumber(
    "+" + who.replace("@s.whatsapp.net", "")
  ).getNumber("international")}
🔗 • *Link :* https://wa.me/${who.split`@`[0]}
🎨 • *Age :* ${registered ? getAge(age) : "Belum Register"} ${readMore}
✨ • *Exp :* ${NumberF(user.exp)}
🧬 • *Level :* ${NumberF(user.level)}
🌸 • *Role :* ${user.role}
🌌 • *Limit :* ${user.limit}
💵 • *Money :* ${NumberF(user.money)}
${readMore}
🌟 • *Premium:* ${premium ? "✅" : "❌"}
⏰ • *PremiumTime:* 
${clockString(user.premiumTime)}
📜 • *Registered:* ${registered ? "✅" : "❌"}
`.trim();
  conn.sendButton(
    m.chat,
    str,
    botdate,
    pp,
    [
      [
        `${registered ? "Menu" : "Verify"}`,
        `${user.registered ? ".menu" : ".verify"}`,
      ],
    ],
    fkon,
    { mentions: await conn.parseMention(str) }
  );
};
handler.help = ["profile [@user]"];
handler.tags = ["exp"];
handler.command = /^profile|pp$/i;
export default handler;

const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);

function clockString(ms) {
  let d = isNaN(ms) ? "--" : Math.floor(ms / 86400000);
  let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000) % 24;
  let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [
    d,
    " *Days ☀️*\n ",
    h,
    " *Hours 🕐*\n ",
    m,
    " *Minute ⏰*\n ",
    s,
    " *Second ⏱️* ",
  ]
    .map((v) => v.toString().padStart(2, 0))
    .join("");
}

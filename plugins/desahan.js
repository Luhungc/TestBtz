import fetch from "node-fetch";
import fs from "fs";

let handler = async (m, { conn }) => {
  let dsh = fs.readFileSync("./json/desah.json");
  let vn = dsh[Math.floor(Math.random() * dsh.length)];
  conn.sendFile(m.chat, await (await fetch(vn.path)).buffer(), "", "", m);
};
handler.help = ["desah"];
handler.tags = ["nsfw"];
handler.command = /^(desah)$/i;

export default handler;

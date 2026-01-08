# UPLINK v2.0 // Secure Terminal Chat

UPLINK v2.0 is a browser-based, terminal-style real-time chat application designed with a hacker/CRT aesthetic. It allows users to communicate instantly using a shared channel key, without accounts, servers, or databases.

---

## 🚀 Features

- Terminal-style UI with CRT scanlines and flicker effects  
- Real-time messaging using MQTT (WebSocket-based)  
- No sign-up or storage — session-based communication  
- Keyboard-only interaction for an authentic console feel  
- Shared channel system (frequency-based rooms)  
- Lightweight and runs entirely in the browser  

---

## 🖥️ How It Works

1. Open the site in your browser.
2. Enter a **Codename** (your display name).
3. Enter a **Channel Frequency (Key)**.
4. Press **Enter** to establish the uplink.
5. Start typing messages and press **Enter** to send.

Anyone using the same channel frequency will see messages in real time.

---

## ⌨️ Commands

- `/clear` — Clears the terminal screen  
- `/whoami` — Displays your codename and active channel  

---

## 🌐 Technology Used

- HTML, CSS, JavaScript  
- MQTT over WebSockets (HiveMQ public broker)  
- No backend or database required  

---

## 🔐 Privacy Notes

- Messages are not stored.
- Channels are public but obscured by custom keys.
- Anyone with the same frequency can join.

---

## 👤 Author

**Taki Zaidi**  
UPLINK v2.0

---

## ⚠️ Disclaimer

This project is for educational and demonstration purposes only. It does not provide true end-to-end encryption or guaranteed privacy.

---

Enjoy the uplink. Stay connected. 🟢

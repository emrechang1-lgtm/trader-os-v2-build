# 🎯 TRADER OS v2 - Disiplin Panosu

Londra seansı XAUUSD scalper'ları için **gerçek zamanlı ticaret takibi** + **Telegram bot entegrasyonu**.

---

## 📋 Özellikler

✅ **Daily Tracker** - PnL, işlem sayısı, $100 stop status  
✅ **Pre-Trading Checklist** - Fiziksel + psikolojik hazırlık  
✅ **Session Entry Gate** - Her giriş önce 4-nokta kontrol  
✅ **Psychology Checkpoint** - $60 hedef protokolü  
✅ **Telegram Integration** - Günlük log özetini botla gönder  
✅ **Local Storage** - Tarayıcıda kalıcı işlem kaydı  

---

## 🚀 Hızlı Başlangıç

### **1️⃣ Netlify'ye Deploy Et (1 dakika)**

Netlify dashboard'a git:
- https://netlify.com
- "New site from Git" → GitHub hesabını bağla
- `trader-os-v2` repo'yu seç
- Auto deploy başlayacak

### **2️⃣ Bot Token'ı Ekle (1 dakika)**

Netlify Site Settings → Build & deploy → Environment:
```
Key: TELEGRAM_BOT_TOKEN
Value: 8847755362:AAG992QcpvtAw8ReZvk7kd29HAUdwkrUeGE
```

### **3️⃣ Redeploy Et (1 dakika)**

Deploys → Trigger deploy → Deploy site

### **4️⃣ Bitti!**

```
https://trader-os-v2.netlify.app
```

---

## 📁 Dosya Yapısı

```
trader-os-v2/
├── index.html                    # Ana dashboard
├── netlify.toml                  # Netlify config
├── package.json                  # Dependencies
├── netlify/
│   └── functions/
│       └── send-telegram.js      # Telegram API backend
├── .gitignore
└── README.md
```

---

## 🔐 Telegram Bot Kurulum

**Bot:** @cantrading202611bot  
**Chat ID:** 8235306697  
**Token:** Netlify environment variable'da (tarayıcıda görünmüyor)

Dashboard'dan "📲 Telegram'a Gönder" tıklandığında:
1. HTML → Netlify Function'a gidiyor
2. Function → Bot token'ı ortamdan okuyor
3. Telegram API'ye güvenli bir şekilde POST yapıyor
4. Mesaj @cantrading202611bot'a ulaşıyor

---

## 💡 Kullanım

### **Londra Seansında:**

1. Dashboard'ı aç: https://trader-os-v2.netlify.app
2. 📊 **Günlük Takip** tab'ı
3. Her işlemde:
   - Saat
   - Lot (0.02)
   - Pip kazancı/kaybı
   - Kar/Zarar ($)
   - Notlar
4. "✓ İşlem Ekle" tıkla

### **$60 Yaptıysa:**

1. 🧠 **Psikoloji** tab'ı oku
2. "📲 Telegram'a Gönder" tıkla
3. @cantrading202611bot'a bak (mesaj gelecek)
4. LAPTOPI KAPAT

---

## 🔧 Geliştirme

Kendi tarafında localhost'ta test etmek istersan:

```bash
npm install
npm start  # Netlify dev sunucusu başlayacak
```

Tarayıcı: http://localhost:8888

---

## 📊 Veri Saklama

- **Local Storage:** Tarayıcıda otomatik (silinceye kadar)
- **Telegram:** Günlük log summary
- **Netlify:** Fonksiyonlar (sunucu-tarafında, data saklamamız yok)

---

## 🛠️ Troubleshooting

### "Telegram'a göndermiyor"
- Bot token Netlify env variable'da mı?
- Netlify redeploy edildi mi?
- Network tab'ında `/.netlify/functions/send-telegram` 200 dönüyor mü?

### "Local storage silindi"
- Tarayıcı cache'i temizledik mi?
- Başka tab'da test et

---

## 📝 Not

Bu dashboard **sadece client-tarafında** çalışır. Tüm işlemler local storage'da kalıyor. Netlify Functions sadece **Telegram mesajı göndermek** için kullanılıyor.

---

## 🎯 Hedef

5 günlük kar + 1 gün kayıp döngüsünü kırmak.  
Disiplin = Para. 💰

---

**Londra seansında başarılar! 🚀**

let btnGenerate = document.getElementById("generator");
let theSurah = document.getElementById("main-surah");
let translator = document.getElementById("english-Translate");
let link = document.getElementById("surah-link");

let surahs = ["Al-Fatiha - https://www.quran411.com/surah-fatiha", "Al Baqarah - https://www.quran411.com/surah-baqarah?r=12", "Al Imran - https://www.quran411.com/surah-imran?r=12", "An Nisa - https://www.quran411.com/surah-nisa?r=12", "Al Maidah - https://www.quran411.com/surah-maidah?r=12", "Al An'am - https://www.quran411.com/surah-anam?r=12", "Al A'raf - https://www.quran411.com/surah-araf?r=12", "Al Anfal - https://www.quran411.com/surah-anfal?r=12", "Al Taubah - https://www.quran411.com/surah-taubah?r=12", "Yunus - https://www.quran411.com/surah-yunus?r=12", "Hud - https://www.quran411.com/surah-hud?r=12", "Yusuf - https://www.quran411.com/surah-yusuf?r=12", "Ar Rad - https://www.quran411.com/surah-rad?r=12", "Ibrahim - https://www.quran411.com/surah-ibrahim?r=12", "Al Hijr - https://www.quran411.com/surah-hijr?r=12", "An Nahl - https://www.quran411.com/surah-nahl?r=12", "Al Isra - https://www.quran411.com/surah-al-isra?r=12", "Al Kahf - https://www.quran411.com/surah-kahf?r=12", "Maryam - https://www.quran411.com/surah-maryam?r=12", "Ta-Ha - https://www.quran411.com/surah-taha?r=12", "Al Anbiya - https://www.quran411.com/surah-anbiya?r=12", "Al Hajj - https://www.quran411.com/surah-hajj?r=12", "Al Mu'minun - https://www.quran411.com/surah-muminun?r=12", "Al Noor - https://www.quran411.com/surah-nur?r=12", "Al Furqan - https://www.quran411.com/surah-furqan?r=12", "Ash-Shuara - https://www.quran411.com/surah-shuara?r=12", "Al Naml - https://www.quran411.com/surah-naml?r=12", "Al-Qasas - https://www.quran411.com/surah-qasas?r=12", "Al Ankaboot - https://www.quran411.com/surah-ankabut?r=12", "Al Room - https://www.quran411.com/surah-ar-rum?r=12", "Luqman - https://www.quran411.com/surah-luqman?r=12", "Al Sajda - https://www.quran411.com/surah-sajdah?r=12", "Al Ahzab - https://www.quran411.com/surah-ahzab?r=12", "Saba - https://www.quran411.com/surah-saba?r=12", "Fatir - https://www.quran411.com/surah-fatir?r=12", "Ya-seen - https://www.quran411.com/surah-yaseen?r=12", "As-Saaffat - https://www.quran411.com/surah-as-saffat?r=12", "Sad - https://www.quran411.com/surah-sad?r=12", "Az Zumar - https://www.quran411.com/surah-az-zumar?r=12", "Al Mu'min - https://www.quran411.com/surah-al-mumin?r=12", "Fussilat - https://www.quran411.com/surah-fussilat?r=12", "Ash Shura - https://www.quran411.com/surah-ash-shura?r=12", "Az Zukhruf - https://www.quran411.com/surah-zukhruf?r=12", "Ad Dukhan - https://www.quran411.com/surah-dukhan?r=12", "Al Jasiyah - https://www.quran411.com/surah-jasiyah?r=12", "Al Ahqaf - https://www.quran411.com/surah-ahqaf?r=12", "Muhammed - https://www.quran411.com/surah-muhammad?r=12", "Al Fath - https://www.quran411.com/surah-fath?r=12", "Al Hujuraat - https://www.quran411.com/surah-hujurat?r=12", "Qaf - https://www.quran411.com/surah-qaf?r=12", "Adh-Dhariyat - https://www.quran411.com/surah-dhariyat?r=12", "At Tur - https://www.quran411.com/surah-tur?r=12", "An Najm - https://www.quran411.com/surah-najm?r=12", "Al Qamar - https://www.quran411.com/surah-qamar?r=12", "Ar Rahman - https://www.quran411.com/surah-ar-rahman?r=12", "Al Waqiah - https://www.quran411.com/surah-waqiah?r=12", "Al Hadid - https://www.quran411.com/surah-hadid?r=12", "Al Mujadilah - https://www.quran411.com/surah-mujadilah?r=12", "Al Hashr - https://www.quran411.com/surah-hashr?r=12", "Al Mumtahanah - https://www.quran411.com/surah-mumtahanah?r=12", "As Saff - https://www.quran411.com/surah-saff?r=12", "Al Jumua - https://www.quran411.com/surah-jumuah?r=12", "Al Munafiqoon - https://www.quran411.com/surah-munafiqun?r=12", "At Taghabun - https://www.quran411.com/surah-taghabun?r=12", "At Talaq - https://www.quran411.com/surah-talaq?r=12", "At Tahrim - https://www.quran411.com/surah-tahrim?r=12", "Al Mulk - https://www.quran411.com/surah-mulk?r=12", "Al Qalam - https://www.quran411.com/surah-qalam?r=12", "Al Haqqah - https://www.quran411.com/surah-haqqah?r=12", "Al Ma'arij - https://www.quran411.com/surah-maarij?r=12", "Nuh - https://www.quran411.com/surah-nuh?r=12", "Al Jinn - https://www.quran411.com/surah-jinn?r=12", "Al Muzammil - https://www.quran411.com/surah-muzzammil?r=12", "Al Muddaththir - https://www.quran411.com/surah-muddaththir?r=12", "Al Qiyamah - https://www.quran411.com/surah-qiyamah?r=12", "Al Insan - https://www.quran411.com/surah-insan?r=12", "Al Mursalaat - https://www.quran411.com/surah-mursalat?r=12", "An Naba - https://www.quran411.com/surah-naba?r=12", "An Naziat - https://www.quran411.com/surah-naziat?r=12", "Abasa - https://www.quran411.com/surah-abasa?r=12", "At Takwir - https://www.quran411.com/surah-takwir?r=12", "Al infitaar - https://www.quran411.com/surah-infitaar?r=12", "Al Mutaffifin - https://www.quran411.com/surah-mutaffifin?r=12", "Al Ishiqaq - https://www.quran411.com/surah-inshiqaq?r=12", "Al Burooj - https://www.quran411.com/surah-burooj?r=12", "At Tariq - https://www.quran411.com/surah-tariq?r=12", "Al Ala - https://www.quran411.com/surah-ala?r=12", "Al Ghaashiyah - https://www.quran411.com/surah-ghaashiyah?r=12", "Al Fajr - https://www.quran411.com/surah-fajr?r=12", "Al Balad - https://www.quran411.com/surah-balad?r=12", "Ash-Shams - https://www.quran411.com/surah-ash-shams?r=12", "Al Lail - https://www.quran411.com/surah-lail?r=12", "Ad Duha - https://www.quran411.com/surah-duha?r=12", "Al Inshirah - https://www.quran411.com/surah-inshirah?r=12", "At Tin - https://www.quran411.com/surah-tin?r=12", "Al Alaq - https://www.quran411.com/surah-alaq?r=12", "Al Qadr - https://www.quran411.com/surah-qadr?r=12", "Al Bayyinah - https://www.quran411.com/surah-bayyinah?r=12", "Al Zilzal - https://www.quran411.com/surah-zilzal?r=12", "Al Adiyat - https://www.quran411.com/surah-adiyat?r=12", "Al Qari'ah - https://www.quran411.com/surah-qariah?r=12", "Al Takathur - https://www.quran411.com/surah-takathur?r=12", "Al Asr - https://www.quran411.com/surah-asr?r=12", "Al Humazah - https://www.quran411.com/surah-humazah?r=12", "Al Fil - https://www.quran411.com/surah-fil?r=12", "Quraish - https://www.quran411.com/surah-quraish?r=12", "Al Maun - https://www.quran411.com/surah-maun?r=12", "Al Kauhtar - https://www.quran411.com/surah-kauthar?r=12", "Al Kafirun - https://www.quran411.com/surah-kafirun?r=12", "An Nasr - https://www.quran411.com/surah-nasr?r=12", "Al Lahab - https://www.quran411.com/surah-lahab?r=12", "Al Ikhlas - https://www.quran411.com/surah-ikhlas?r=12", "Al Falaq - https://www.quran411.com/surah-falaq?r=12", "An Nas - https://www.quran411.com/surah-nas?r=12"];


btnGenerate.addEventListener("click", function() {
theSurah.innerHTML = surahs[getRandom()] + " Copy link or click here:";
if (theSurah.innerHTML == "Al-Fatiha - https://www.quran411.com/surah-fatiha Copy link or click here:") {
  link.href = "https://www.quran411.com/surah-fatiha"
  link.innerHTML =  "https://www.quran411.com/surah-fatiha"
}
if (theSurah.innerHTML == "Al Baqarah - https://www.quran411.com/surah-baqarah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-baqarah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-baqarah?r=12"
}
if (theSurah.innerHTML == "Al Imran - https://www.quran411.com/surah-imran?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-imran?r=12"
  link.innerHTML = "https://www.quran411.com/surah-imran?r=12"
}
if (theSurah.innerHTML == "An Nisa - https://www.quran411.com/surah-nisa?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-nisa?r=12"
  link.innerHTML = "https://www.quran411.com/surah-nisa?r=12"
}
if (theSurah.innerHTML == "Al Maidah - https://www.quran411.com/surah-maidah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-maidah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-maidah?r=12"
}
if (theSurah.innerHTML == "Al An'am - https://www.quran411.com/surah-anam?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-anam?r=12"
  link.innerHTML = "https://www.quran411.com/surah-anam?r=12"
}
if (theSurah.innerHTML == "Al A'raf - https://www.quran411.com/surah-araf?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-araf?r=12"
  link.innerHTML = "https://www.quran411.com/surah-araf?r=12"
}
if (theSurah.innerHTML == "Al Anfal - https://www.quran411.com/surah-anfal?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-anfal?r=12"
  link.innerHTML = "https://www.quran411.com/surah-anfal?r=12"
}
if (theSurah.innerHTML == "Al Taubah - https://www.quran411.com/surah-taubah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-taubah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-taubah?r=12"
}
if (theSurah.innerHTML == "Yunus - https://www.quran411.com/surah-yunus?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-yunus?r=12"
  link.innerHTML = "https://www.quran411.com/surah-yunus?r=12"
}
if (theSurah.innerHTML == "Hud - https://www.quran411.com/surah-hud?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-hud?r=12"
  link.innerHTML = "https://www.quran411.com/surah-hud?r=12"
}
if (theSurah.innerHTML == "Yusuf - https://www.quran411.com/surah-yusuf?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-yusuf?r=12"
  link.innerHTML = "https://www.quran411.com/surah-yusuf?r=12"
}
if (theSurah.innerHTML == "Ar Rad - https://www.quran411.com/surah-rad?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-rad?r=12"
  link.innerHTML = "https://www.quran411.com/surah-rad?r=12"
}
if (theSurah.innerHTML == "Ibrahim - https://www.quran411.com/surah-ibrahim?r=12 Copy link or click here:"){
link.href = "https://www.quran411.com/surah-ibrahim?r=12"
link.innerHTML = "https://www.quran411.com/surah-ibrahim?r=12"
}
if (theSurah.innerHTML == "Al Hijr - https://www.quran411.com/surah-hijr?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-hijr?r=12"
  link.innerHTML = "https://www.quran411.com/surah-hijr?r=12"
}
if (theSurah.innerHTML == "An Nahl - https://www.quran411.com/surah-nahl?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-nahl?r=12"
  link.innerHTML = "https://www.quran411.com/surah-nahl?r=12"
}
if (theSurah.innerHTML == "Al Isra - https://www.quran411.com/surah-al-isra?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-al-isra?r=12"
  link.innerHTML = "https://www.quran411.com/surah-al-isra?r=12"
}
if (theSurah.innerHTML == "Al Kahf - https://www.quran411.com/surah-kahf?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-kahf?r=12"
  link.innerHTML = "https://www.quran411.com/surah-kahf?r=12"
}
if (theSurah.innerHTML == "Maryam - https://www.quran411.com/surah-maryam?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-maryam?r=12"
  link.innerHTML = "https://www.quran411.com/surah-maryam?r=12"
}
if (theSurah.innerHTML == "Ta-Ha - https://www.quran411.com/surah-taha?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-taha?r=12"
  link.innerHTML = "https://www.quran411.com/surah-taha?r=12"
}
if (theSurah.innerHTML == "Al Anbiya - https://www.quran411.com/surah-anbiya?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-anbiya?r=12"
  link.innerHTML = "https://www.quran411.com/surah-anbiya?r=12"
}
if (theSurah.innerHTML == "Al Hajj - https://www.quran411.com/surah-hajj?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-hajj?r=12"
  link.innerHTML = "https://www.quran411.com/surah-hajj?r=12"
}
if (theSurah.innerHTML == "Al Mu'minun - https://www.quran411.com/surah-muminun?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-muminun?r=12"
  link.innerHTML = "https://www.quran411.com/surah-muminun?r=12"
}
if (theSurah.innerHTML == "Al Noor - https://www.quran411.com/surah-nur?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-nur?r=12"
  link.innerHTML = "https://www.quran411.com/surah-nur?r=12"
}
if (theSurah.innerHTML == "Al Furqan - https://www.quran411.com/surah-furqan?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-furqan?r=12"
  link.innerHTML = "https://www.quran411.com/surah-furqan?r=12";
}
if (theSurah.innerHTML == "Ash-Shuara - https://www.quran411.com/surah-shuara?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-shuara?r=12"
  link.innerHTML = "https://www.quran411.com/surah-shuara?r=12"
}
if (theSurah.innerHTML == "Al Naml - https://www.quran411.com/surah-naml?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-naml?r=12"
  link.innerHTML = "https://www.quran411.com/surah-naml?r=12"
}
if (theSurah.innerHTML == "Al-Qasas - https://www.quran411.com/surah-qasas?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-qasas?r=12"
  link.innerHTML = "https://www.quran411.com/surah-qasas?r=12"
}
if (theSurah.innerHTML == "Al Ankaboot - https://www.quran411.com/surah-ankabut?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ankabut?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ankabut?r=12"
}
if (theSurah.innerHTML == "Al Room - https://www.quran411.com/surah-ar-rum?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ar-rum?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ar-rum?r=12"
}
if (theSurah.innerHTML == "Luqman - https://www.quran411.com/surah-luqman?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-luqman?r=12"
  link.innerHTML = "https://www.quran411.com/surah-luqman?r=12"
}
if (theSurah.innerHTML == "Al Sajda - https://www.quran411.com/surah-sajdah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-sajdah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-sajdah?r=12"
}
if (theSurah.innerHTML == "Al Ahzab - https://www.quran411.com/surah-ahzab?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ahzab?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ahzab?r=12"
}
if (theSurah.innerHTML == "Saba - https://www.quran411.com/surah-saba?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-saba?r=12"
  link.innerHTML = "https://www.quran411.com/surah-saba?r=12"
}
if (theSurah.innerHTML == "Fatir - https://www.quran411.com/surah-fatir?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-fatir?r=12"
  link.innerHTML = "https://www.quran411.com/surah-fatir?r=12"
}
if (theSurah.innerHTML == "Ya-seen - https://www.quran411.com/surah-yaseen?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-yaseen?r=12"
  link.innerHTML = "https://www.quran411.com/surah-yaseen?r=12"
}
if (theSurah.innerHTML == "As-Saaffat - https://www.quran411.com/surah-as-saffat?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-as-saffat?r=12"
  link.innerHTML = "https://www.quran411.com/surah-as-saffat?r=12"
}
if (theSurah.innerHTML == "Sad - https://www.quran411.com/surah-sad?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-sad?r=12"
  link.innerHTML = "https://www.quran411.com/surah-sad?r=12"
}
if (theSurah.innerHTML == "Az Zumar - https://www.quran411.com/surah-az-zumar?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-az-zumar?r=12"
  link.innerHTML = "https://www.quran411.com/surah-az-zumar?r=12"
}
if (theSurah.innerHTML == "Al Mu'min - https://www.quran411.com/surah-al-mumin?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-al-mumin?r=12"
  link.innerHTML = "https://www.quran411.com/surah-al-mumin?r=12"
}
if (theSurah.innerHTML == "Fussilat - https://www.quran411.com/surah-fussilat?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-fussilat?r=12"
  link.innerHTML = "https://www.quran411.com/surah-fussilat?r=12"
}
if (theSurah.innerHTML == "Ash Shura - https://www.quran411.com/surah-ash-shura?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ash-shura?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ash-shura?r=12"
}
if (theSurah.innerHTML == "Az Zukhruf - https://www.quran411.com/surah-zukhruf?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-zukhruf?r=12"
  link.innerHTML = "https://www.quran411.com/surah-zukhruf?r=12"
}
if (theSurah.innerHTML == "Ad Dukhan - https://www.quran411.com/surah-dukhan?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-dukhan?r=12"
  link.innerHTML = "https://www.quran411.com/surah-dukhan?r=12"
}
if (theSurah.innerHTML == "Al Jasiyah - https://www.quran411.com/surah-jasiyah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-jasiyah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-jasiyah?r=12"
}
if (theSurah.innerHTML == "Al Ahqaf - https://www.quran411.com/surah-ahqaf?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ahqaf?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ahqaf?r=12"
}
if (theSurah.innerHTML == "Muhammed - https://www.quran411.com/surah-muhammad?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-muhammad?r=12"
  link.innerHTML = "https://www.quran411.com/surah-muhammad?r=12"
}
if (theSurah.innerHTML == "Al Fath - https://www.quran411.com/surah-fath?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-fath?r=12"
  link.innerHTML = "https://www.quran411.com/surah-fath?r=12"
}
if (theSurah.innerHTML == "Al Hujuraat - https://www.quran411.com/surah-hujurat?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-hujurat?r=12"
  link.innerHTML = "https://www.quran411.com/surah-hujurat?r=12"
}
if (theSurah.innerHTML == "Qaf - https://www.quran411.com/surah-qaf?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-qaf?r=12"
  link.innerHTML = "https://www.quran411.com/surah-qaf?r=12"
}
if (theSurah.innerHTML == "Adh-Dhariyat - https://www.quran411.com/surah-dhariyat?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-dhariyat?r=12"
  link.innerHTML = "https://www.quran411.com/surah-dhariyat?r=12"
}
if (theSurah.innerHTML == "At Tur - https://www.quran411.com/surah-tur?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-tur?r=12"
  link.innerHTML = "https://www.quran411.com/surah-tur?r=12"
}
if (theSurah.innerHTML == "An Najm - https://www.quran411.com/surah-najm?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-najm?r=12"
  link.innerHTML = "https://www.quran411.com/surah-najm?r=12"
}
if (theSurah.innerHTML == "'Al Qamar - https://www.quran411.com/surah-qamar?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-qamar?r=12"
  link.innerHTML = "https://www.quran411.com/surah-qamar?r=12"
}
if (theSurah.innerHTML == "Ar Rahman - https://www.quran411.com/surah-ar-rahman?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ar-rahman?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ar-rahman?r=12"
}
if (theSurah.innerHTML == "Al Waqiah - https://www.quran411.com/surah-waqiah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-waqiah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-waqiah?r=12"
}
if (theSurah.innerHTML == "Al Hadid - https://www.quran411.com/surah-hadid?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-hadid?r=12"
  link.innerHTML = "https://www.quran411.com/surah-hadid?r=12"
}
if (theSurah.innerHTML == "Al Mujadilah - https://www.quran411.com/surah-mujadilah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-mujadilah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-mujadilah?r=12"
}
if (theSurah.innerHTML == "Al Hashr - https://www.quran411.com/surah-hashr?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-hashr?r=12"
  link.innerHTML = "https://www.quran411.com/surah-hashr?r=12"
}
if (theSurah.innerHTML == "Al Mumtahanah - https://www.quran411.com/surah-mumtahanah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-mumtahanah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-mumtahanah?r=12"
}
if (theSurah.innerHTML == "As Saff - https://www.quran411.com/surah-saff?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-saff?r=12"
  link.innerHTML = "https://www.quran411.com/surah-saff?r=12"
}
if (theSurah.innerHTML == "Al Jumua - https://www.quran411.com/surah-jumuah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-jumuah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-jumuah?r=12" 
}
if (theSurah.innerHTML == "Al Munafiqoon - https://www.quran411.com/surah-munafiqun?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-munafiqun?r=12"
  link.innerHTML = "https://www.quran411.com/surah-munafiqun?r=12"
}
if (theSurah.innerHTML == "At Taghabun - https://www.quran411.com/surah-taghabun?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-taghabun?r=12"
  link.innerHTML = "https://www.quran411.com/surah-taghabun?r=12"
}
if (theSurah.innerHTML == "At Talaq - https://www.quran411.com/surah-talaq?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-talaq?r=12"
  link.innerHTML = "https://www.quran411.com/surah-talaq?r=12"
}
if (theSurah.innerHTML == "At Tahrim - https://www.quran411.com/surah-tahrim?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-tahrim?r=12"
  link.innerHTML = "https://www.quran411.com/surah-tahrim?r=12"
}
if (theSurah.innerHTML == "Al Mulk - https://www.quran411.com/surah-mulk?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-mulk?r=12"
  link.innerHTML = "https://www.quran411.com/surah-mulk?r=12"
}
if (theSurah.innerHTML == "Al Qalam - https://www.quran411.com/surah-qalam?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-qalam?r=12"
  link.innerHTML = "https://www.quran411.com/surah-qalam?r=12"
}
if (theSurah.innerHTML == "Al Haqqah - https://www.quran411.com/surah-haqqah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-haqqah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-haqqah?r=12"
}
if (theSurah.innerHTML == "Al Ma'arij - https://www.quran411.com/surah-maarij?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-maarij?r=12"
  link.innerHTML = "https://www.quran411.com/surah-maarij?r=12"
}
if (theSurah.innerHTML == "Nuh - https://www.quran411.com/surah-nuh?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-nuh?r=12"
  link.innerHTML = "https://www.quran411.com/surah-nuh?r=12"
}
if (theSurah.innerHTML == "Al Jinn - https://www.quran411.com/surah-jinn?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-jinn?r=12"
  link.innerHTML = "https://www.quran411.com/surah-jinn?r=12"
}
if (theSurah.innerHTML == "Al Muzammil - https://www.quran411.com/surah-muzzammil?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-muzzammil?r=12"
  link.innerHTML = "https://www.quran411.com/surah-muzzammil?r=12"
}
if (theSurah.innerHTML == "Al Muddaththir - https://www.quran411.com/surah-muddaththir?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-muddaththir?r=12"
  link.innerHTML = "https://www.quran411.com/surah-muddaththir?r=12"
}
if (theSurah.innerHTML == "Al Qiyamah - https://www.quran411.com/surah-qiyamah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-qiyamah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-qiyamah?r=12"
}
if (theSurah.innerHTML == "Al Insan - https://www.quran411.com/surah-insan?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-insan?r=12"
  link.innerHTML = "https://www.quran411.com/surah-insan?r=12"
}
if (theSurah.innerHTML == "Al Mursalaat - https://www.quran411.com/surah-mursalat?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-mursalat?r=12"
  link.innerHTML = "https://www.quran411.com/surah-mursalat?r=12"
}
if (theSurah.innerHTML == "An Naba - https://www.quran411.com/surah-naba?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-naba?r=12"
  link.innerHTML = "https://www.quran411.com/surah-naba?r=12"
}
if (theSurah.innerHTML == "An Naziat - https://www.quran411.com/surah-naziat?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-naziat?r=12"
  link.innerHTML = "https://www.quran411.com/surah-naziat?r=12"
}
if (theSurah.innerHTML == "Abasa - https://www.quran411.com/surah-abasa?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-abasa?r=12"
  link.innerHTML = "https://www.quran411.com/surah-abasa?r=12"
}
if (theSurah.innerHTML == "At Takwir - https://www.quran411.com/surah-takwir?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-takwir?r=12"
  link.innerHTML = "https://www.quran411.com/surah-takwir?r=12"
}
if (theSurah.innerHTML == "Al infitaar - https://www.quran411.com/surah-infitaar?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-infitaar?r=12"
  link.innerHTML = "https://www.quran411.com/surah-infitaar?r=12"
}
if (theSurah.innerHTML == "Al Mutaffifin - https://www.quran411.com/surah-mutaffifin?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-mutaffifin?r=12"
  link.innerHTML = "https://www.quran411.com/surah-mutaffifin?r=12"
}
if (theSurah.innerHTML == "Al Ishiqaq - https://www.quran411.com/surah-inshiqaq?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-inshiqaq?r=12"
  link.innerHTML = "https://www.quran411.com/surah-inshiqaq?r=12"
}
if (theSurah.innerHTML == "Al Burooj - https://www.quran411.com/surah-burooj?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-burooj?r=12"
  link.innerHTML = "https://www.quran411.com/surah-burooj?r=12"
}
if (theSurah.innerHTML == "At Tariq - https://www.quran411.com/surah-tariq?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-tariq?r=12"
  link.innerHTML = "https://www.quran411.com/surah-tariq?r=12"
}
if (theSurah.innerHTML == "Al Ala - https://www.quran411.com/surah-ala?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ala?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ala?r=12"
}
if (theSurah.innerHTML == "Al Ghaashiyah - https://www.quran411.com/surah-ghaashiyah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ghaashiyah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ghaashiyah?r=12"
}
if (theSurah.innerHTML == "Al Fajr - https://www.quran411.com/surah-fajr?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-fajr?r=12"
  link.innerHTML = "https://www.quran411.com/surah-fajr?r=12"
}
if (theSurah.innerHTML == "Al Balad - https://www.quran411.com/surah-balad?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-balad?r=12"
  link.innerHTML = "https://www.quran411.com/surah-balad?r=12"
}
if (theSurah.innerHTML == "Ash-Shams - https://www.quran411.com/surah-ash-shams?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ash-shams?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ash-shams?r=12"
}
if (theSurah.innerHTML == "Al Lail - https://www.quran411.com/surah-lail?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-lail?r=12"
  link.innerHTML = "https://www.quran411.com/surah-lail?r=12"
}
if (theSurah.innerHTML == "Ad Duha - https://www.quran411.com/surah-duha?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-duha?r=12"
  link.innerHTML = "https://www.quran411.com/surah-duha?r=12"
}
if (theSurah.innerHTML == "Al Inshirah - https://www.quran411.com/surah-inshirah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-inshirah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-inshirah?r=12"
}
if (theSurah.innerHTML == "At Tin - https://www.quran411.com/surah-tin?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-tin?r=12"
  link.innerHTML = "https://www.quran411.com/surah-tin?r=12"
}
if (theSurah.innerHTML == "Al Alaq - https://www.quran411.com/surah-alaq?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-alaq?r=12"
  link.innerHTML = "https://www.quran411.com/surah-alaq?r=12"
}
if (theSurah.innerHTML == "Al Qadr - https://www.quran411.com/surah-qadr?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-qadr?r=12"
  link.innerHTML = "https://www.quran411.com/surah-qadr?r=12"
}
if (theSurah.innerHTML == "Al Bayyinah - https://www.quran411.com/surah-bayyinah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-bayyinah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-bayyinah?r=12"
}
if (theSurah.innerHTML == "Al Zilzal - https://www.quran411.com/surah-zilzal?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-zilzal?r=12"
  link.innerHTML = "https://www.quran411.com/surah-zilzal?r=12"
}
if (theSurah.innerHTML == "Al Adiyat - https://www.quran411.com/surah-adiyat?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-adiyat?r=12"
  link.innerHTML = "https://www.quran411.com/surah-adiyat?r=12"
}
if (theSurah.innerHTML == "Al Qari'ah - https://www.quran411.com/surah-qariah?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-qariah?r=12"
  link.innerHTML  = "https://www.quran411.com/surah-qariah?r=12"
}
if (theSurah.innerHTML == "Al Takathur - https://www.quran411.com/surah-takathur?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-takathur?r=12"
  link.innerHTML = "https://www.quran411.com/surah-takathur?r=12"
}
if (theSurah.innerHTML == "Al Asr - https://www.quran411.com/surah-asr?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-asr?r=12"
  link.innerHTML = "https://www.quran411.com/surah-asr?r=12"
}
if (theSurah.innerHTML == "Al Humazah - https://www.quran411.com/surah-humazah?r=12 Copy link or click here:"){
  link.href  = "https://www.quran411.com/surah-humazah?r=12"
  link.innerHTML = "https://www.quran411.com/surah-humazah?r=12"
}
if (theSurah.innerHTML == "Al Fil - https://www.quran411.com/surah-fil?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-fil?r=12"
  link.innerHTML = "https://www.quran411.com/surah-fil?r=12"
}
if (theSurah.innerHTML == "Quraish - https://www.quran411.com/surah-quraish?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-quraish?r=12"
  link.innerHTML = "https://www.quran411.com/surah-quraish?r=12"
}
if (theSurah.innerHTML == "Al Maun - https://www.quran411.com/surah-maun?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-maun?r=12"
  link.innerHTML = "https://www.quran411.com/surah-maun?r=12"
}
if (theSurah.innerHTML == "Al Kauhtar - https://www.quran411.com/surah-kauthar?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-kauthar?r=12"
  link.innerHTML = "https://www.quran411.com/surah-kauthar?r=12"
}
if (theSurah.innerHTML == "Al Kafirun - https://www.quran411.com/surah-kafirun?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-kafirun?r=12"
  link.innerHTML = "https://www.quran411.com/surah-kafirun?r=12"
}
if (theSurah.innerHTML == "An Nasr - https://www.quran411.com/surah-nasr?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-nasr?r=12"
  link.innerHTML = "https://www.quran411.com/surah-nasr?r=12"
}
if (theSurah.innerHTML == "Al Lahab - https://www.quran411.com/surah-lahab?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-lahab?r=12"
  link.innerHTML = "https://www.quran411.com/surah-lahab?r=12"
}
if (theSurah.innerHTML == "Al Ikhlas - https://www.quran411.com/surah-ikhlas?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-ikhlas?r=12"
  link.innerHTML = "https://www.quran411.com/surah-ikhlas?r=12"
}
if (theSurah.innerHTML == "Al Falaq - https://www.quran411.com/surah-falaq?r=12 Copy link or click here:"){
  link.href  = "https://www.quran411.com/surah-falaq?r=12"
  link.innerHTML = "https://www.quran411.com/surah-falaq?r=12"
}
if (theSurah.innerHTML == "An Nas - https://www.quran411.com/surah-nas?r=12 Copy link or click here:"){
  link.href = "https://www.quran411.com/surah-nas?r=12"
  link.innerHTML = "https://www.quran411.com/surah-nas?r=12"
}
});

function getRandom() {
for (let i = 0; i < 3; i++){
  return Math.floor(Math.random() * surahs.length);
}
}
#!/bin/bash
set -e
cd "$(dirname "$0")"
export PATH="$PATH:/opt/homebrew/bin:/usr/local/bin"
if [ -s "$HOME/.nvm/nvm.sh" ]; then
  . "$HOME/.nvm/nvm.sh" --no-use
  if [ "$(uname -s)" = Darwin ] && [[ "$(sw_vers -productVersion)" == 10.15.* ]]; then
    nvm use 18.20.8 || { echo "Catalina icin nvm install 18.20.8 komutunu calistirip tekrar ac."; read -r -p "Kapatmak icin Enter: " answer; exit 1; }
  elif ! command -v node >/dev/null 2>&1; then
    nvm use default
  fi
fi
pause_exit() { printf '\n%s\n' "$1"; read -r -p 'Kapatmak icin Enter: ' answer; exit 1; }
command -v node >/dev/null 2>&1 || { open 'https://nodejs.org/en/download'; pause_exit 'Node.js gerekli. Acilan sayfadan LTS macOS installer (.pkg) indirip kur, sonra bu dosyayi tekrar ac.'; }
node -e 'if(Number(process.versions.node.split(".")[0]) < 18 || (Number(process.versions.node.split(".")[0]) === 18 && Number(process.versions.node.split(".")[1]) < 18)) process.exit(1)' || { open 'https://nodejs.org/en/download'; pause_exit 'Node.js 18.18 veya daha yeni bir surum gerekli. Guncel macOS icin desteklenen LTS surumunu kullan.'; }
command -v npm >/dev/null 2>&1 || pause_exit 'npm bulunamadi. Node.js LTS macOS installer ile kurulumu tamamla.'
if [ ! -d node_modules ]; then
  printf '\nIlk kurulum yapiliyor. Internet baglantisi gerekiyor.\n'
  npm ci --no-audit --no-fund || pause_exit 'Kurulum tamamlanamadi. Internet baglantini kontrol edip tekrar ac.'
fi
site_port=3000
while lsof -nP -iTCP:"$site_port" -sTCP:LISTEN >/dev/null 2>&1; do
  site_port=$((site_port + 1))
  [ "$site_port" -lt 3020 ] || pause_exit '3000-3019 portlari kullanimda. Acik gelistirme sunucularini kapatip tekrar dene.'
done
printf '\nSite baslatiliyor: http://localhost:%s\nBu terminali acik tut. Durdurmak icin Control+C.\n' "$site_port"
(
  for attempt in {1..60}; do
    if curl -fsS --max-time 2 "http://localhost:$site_port" >/dev/null 2>&1; then
      open "http://localhost:$site_port"
      exit 0
    fi
    sleep 1
  done
) &
launcher_pid=$!
trap 'kill "$launcher_pid" 2>/dev/null || true' EXIT
npm run dev -- --hostname 127.0.0.1 --port "$site_port"

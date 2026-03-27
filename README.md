(readme vai ser atualizado dps)

npx create-expo-app "app"
cd "app"
mover as pastas "frontend" e "backend" para "app"
npx expo start
npm install -g json-server
npm install -g localtunnel
npx json-server --watch database.json --port 3000
lt --port 3000

![myimage](https://github.com/Ray625/URL_shortener/blob/main/screen.PNG?raw=true)
## 簡介
使用Node.js並連結資料庫MongoDB所建製之App，可縮短使用者輸入之網址。
## 功能
+ 可將原網址縮短為5位數亂碼。  
+ 點擊產生之新網址可連結至使用者輸入之網址。
## 環境設置
Node.js@18.14.0  
express@4.17.1  
express-handlebars@4.0.2  
body-parser@1.20.2  
mongoose@5.9.7
## 開始使用
1. 請先安裝Node.js與npm  
2. clone專案至本地
3. 於終端機移至專案資料夾輸入:
```
npm install
```
4. 設定環境變數: 在專案資料夾下新增.env檔案，並填入你的MongoDB連線字串
```
MONGODB_URI = "<你的連線字串>"
```
5. 啟用伺服器
```
npm run start
```
6. 若看見此訊息代表順利運行，打開瀏覽器進入到以下網址
```
The web app is running on http://localhost:3000
```
7. 若欲停止使用請輸入
```
Ctrl + C
```

# PWA To-Do List with Vanilla JS (sw-precache-webpack-plugin)

## Intro

1. 透過 [json-server](https://github.com/typicode/json-server) 來新增 DEMO 用的 API，模擬實際專案會使用 REST API 的情境。

2. 安裝 [http-server](https://github.com/indexzero/http-server) 來快速建置 server 環境，將網站跑起來。

3. 藉由 [concurrently](https://github.com/kimmobrunfeldt/concurrently)，能夠同時跑多個 commands，例如：`concurrently --kill-others 'http-server' 'json-server --watch db.json'`

**To-Do List 實作 PWA** 相關文章：

- [環境建置 ( json-server、http-server、concurrently )](http://ithelp.ithome.com.tw/articles/10187889)
- [使用 Vanilla JS 顯示 To-Do List 內容](http://ithelp.ithome.com.tw/articles/10188350)
- [使用 Vanilla JS 新增/修改/刪除 To-Do List 內容](http://ithelp.ithome.com.tw/articles/10188458)
- [sw-precache-webpack-plugin 簡介](http://ithelp.ithome.com.tw/articles/10188690)
- [使用 Vanilla JS 完成 To-Do List 範例並加入 sw-precache-webpack-plugin](http://ithelp.ithome.com.tw/articles/10188696)

***

## Install

```
git clone https://github.com/AnnaSu/todolist-pwa-demo.git
cd todolist-pwa-demo
npm install
```

***

## Run

```
npm start
```


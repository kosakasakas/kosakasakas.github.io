---
layout: post
title: "ポーセラーツサロンのサイトデザインしました"
date: 2014-09-20 18:47:29 +0900
comments: true
categories: [Google Apps Script]
---

<img src="/images/unicorn/yululu/logo.jpg" alt="logo" width="512" height="430">

頼まれまして、ポーセラーツサロンのデザインとブログのカスタマイズを行いました。

上の写真がそのとき作ったロゴです。

ポーセラーツって何やねんって感じですが、**世界にたった一つしかないマイブランドのテーブルウェアを作る、とっても楽しくて実用的なハンドクラフト**らしいです。

<!-- more -->

実際サロンで作ってるものがこちら

![image](/images/unicorn/yululu/image.jpg)

結構本格的な食器とかが作れます。

僕が行った事としては、ロゴの作成、CSSのカスタマイズ、各種リンク、申し込みフォームの作成などです。

申し込みフォームについては、Google Apps Scriptを使って、いい感じにフォーム内容を整形して登録したメールアドレスに送ってくれるように実装しました。

コードはこんな感じです。

{% codeblock %}


function sendForm(e){
 
  // 件名
  var subject = "申し込みあり"; 

  // 本文
  var body = "以下の内容で申し込みがありました。\nヾ(・ω・*)ノチェック!!\n------------------------------------------------------------";  

  // フッターに記述する内容
  var footer = "------------------------------------------------------------\n内容の確認：\nhttps://docs.google.com/スプレットシートのURL\n"

  var PRE='\n\n[';
  var AFT=']\n\n';
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  // 項目名の取得
  var COLUMN = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  
  // メール送信
  var to    = "AAAAA@gmail.com, BBBB@gmail.com";
  var n = COLUMN.length
  for ( var i = 0; i < n; ++i) {
    var key = COLUMN[i];
    body += PRE+key+AFT+e.namedValues[key];
  }
  body += "\n\n";
  body += footer;
  MailApp.sendEmail(to, subject, body);
}

{% endcodeblock %}


実際のブログがこちらです。

http://ameblo.jp/23712372/

ぜひ訪れてみてください。





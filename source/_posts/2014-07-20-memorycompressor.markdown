---
layout: post
title: "Memory Compressor"
date: 2014-07-20 15:21:27 +0900
comments: true
categories: [Proessiong]
---

![Frozen](/images/unicorn/compressor/00_Frozen.jpg)

旅行に行ったときに取った写真が1000枚以上あるけど、いちいち見てる時間無いし、結構同じようなアングルの写真もたくさんあるし、ファイル名も日付けしかないから探しつらい。  

これなんかうまい事要約して少ない情報にまとめて、さらっと思い出のサムネイルとかにしてくれないかなーと思ったので、動画像を一枚の画像に圧縮するプログラム書いてみました。  

<!-- more -->

具体的には画像とか動画とかを適度にサンプリングして数ピクセルに無理矢理圧縮して、時系列に並べたサムネイル画像を作るだけです。  

インプットの映像ごとにユニークな出力出るし、ある意味プロシージャルなテクスチャ生成が出来る訳です。  

実装はopenFrameworks v0.8.2、iOS用のアプリケーションで作ってます。GUIとかは何もしていないので、oFのサンプルと同程度の作りですが、一応GitHubあがってます。  

[GitHub - MemoryCompressor](https://github.com/kosakasakas/MemoryCompressor)  


このtop画像はこのプログラムで出力した**アナと雪の女王**の全編の圧縮画像です。  
それっぽい！!  

こちらはスペイン旅行に行った時の1000枚の写真の圧縮結果  
あー、ここマドリードの夜だなーとか、バルセロナのビーチだなってのが何となく分かる。
![Spanish](/images/unicorn/compressor/06_Spain.jpg)  

で、こちらはBUMP OF CHICKENの2hくらいのLive映像を圧縮した画像  
照明変化とか、ザイロバンドの発光が混じってて一番きれいにでた。
![Live](/images/unicorn/compressor/03_Live.jpg)  

これは映画**僕の彼女はサイボーグ**の圧縮画像  
全編使ってます。
![CyborgGirl](/images/unicorn/compressor/02_CyborgGirl.jpg)  

**ナイトメアビフォアクリスマス**の圧縮画像  
思ったよりきれいにでなかった。
![NightmareBeforeChristmas](/images/unicorn/compressor/05_NightmareBeforeChristmas.jpg)  

なんとなくおしゃれな画像作れるので、自分の好きな映画とか、思い出映像で出力してみたら楽しいかも。



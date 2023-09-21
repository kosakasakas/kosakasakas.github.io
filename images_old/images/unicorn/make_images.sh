#!/bin/sh

# コマンドがあるかチェック
if ! type "jpegoptim" > /dev/null 2>&1
then
    echo "Jpegoptimがインストールされていないので終了します."
    exit 1
fi

if ! type "optipng" > /dev/null 2>&1
then
    echo "OptiPNGがインストールされていないので終了します."
    exit 1
fi

# 引数は二つじゃないといけない。
if [ $# -ne 2 ]; then
  echo "引数は二つ必要です." 1>&2
  exit 1
fi

# ディレクトリのチェック
if [ ! -d $1 ]; then
    echo "第1引数のディレクトリが存在しません."
    exit 1
fi
if [ ! -d $2 ]; then
    echo "第2引数のディレクトリが存在しません."
    mkdir $2
    echo "第2引数のディレクトリを新たに作成しました."
fi

# 出力パス
outputPath=${2%/*}

# ファイルごとに圧縮して変換
for file in `\find $1 -type f`; do
    ## 拡張子の取得
    basename=${file##*/}
    extension=${basename##*.}
    #echo $extension
    if [ $extension = 'png' ] || [ $extension = 'jpg' ] || [ $extension = 'jpeg' ]; then
      out_file="${outputPath}/${basename}"

      # 画像のリサイズ一旦1024に揃える
      sips -Z 1024 $file --out $out_file
      echo "$basename をリサイズしました."
      # バナー用のトリミング版も作成
      out_file_banner="${outputPath}/banner_${basename}"
      sips -c 512 1024 $out_file --out $out_file_banner
      echo "$basename のバナー用ファイルを作成しました."

      # 圧縮
      if [ $extension = 'png' ]; then
        optipng -o7 $out_file
        optipng -o7 $out_file_banner
        echo "$basename を圧縮しました."
      else
        jpegoptim -s $out_file -m 80
        jpegoptim -s $out_file_banner -m 80
        echo "$basename を圧縮しました."
      fi
    fi
done

exit 0

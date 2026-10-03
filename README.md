# Docker-and-mongo-express
Docker と mongo を連携させて作るテスト

https://scrawledtechblog.com/docker-mongo-express/
【Docker × MongoDB】コンテナでMongoDBを作って操作してみる mongo-express

■解説
Dockerを使ってMongoDBコンテナを作成し、MongoDBを操作してみる
MongoDBの操作は

・mongosh
・mongo-express
があるが今回は「mongo-express」を使う

mongo-expressはWEBのUIで感覚的に操作できるので
まずはMongoDBのデータ構造のイメージをつかむために
簡単な操作をする場合には便利だと思う

## MongoDB とは？
MongoDBはNoSQLは、従来のリレーショナルデータベース（RDB）とは
異なる方法でデータを処理・操作する

・ドキュメント指向型
MongoDBはNoSQLのドキュメント指向型のDBで JSONやXMLといったデータ形式で記述されたドキュメントの形でデータを管理する。

利点としてはJSONやXMLといったデータ形式でかつ階層構造を持たず、相互の関係が横並びに管理
されるため、複雑な構造を持つことができます。さまざまなデータを保存することができる

・MongoDB のデータ構造
ドキュメント指向型のMongoDBではデータを

１：データベース　一番大きな単位。これはRDBと同じ
２：コレクション　コレクションはRDBでいうことろのテーブルに相当する
ドキュメントの集まり
３：ドキュメント　ドキュメントはRDBでいうことろのレコードに相当する
の単位で扱う

## mongo-express とは？
mongo-expressはNode.jsとExpressを使用して書かれているWebベースのMongoDB管理インターフェース
mongo-expressは、複数のデータベースに接続し、データベースやコレクションの表示、追加、削除、ドキュメント
の編集などを行うことができる。

具体的なデータが見えるので慣れないうちはmongoshよりもmongo-expressを
使った方がイメージをつかみやすいと思う

## プロジェクト構成
.
|-- docker-compose.yml
`-- mongo
    |-- db
    `-- init
        `-- init-db.js
コンテナ作成用にdocker-compose.ymlを用意する
mongodb用にmongoディレクトリを作っておく

## MongoDB のコンテナ環境を作成する
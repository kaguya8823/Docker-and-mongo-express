// init-db.js

// 管理者ユーザーでログイン
db = db.getSiblingDB('admin');
db.auth('admin', 'admin123');

// 新しいユーザーを作成
db.createUser({
    user: 'example_user',
    pwd: 'password123',
    roles: [{ role: 'readWrite', db: 'mongotable' }],
});

// mongotable データべースに接続する
// MongoDBはdbに少なくも1つのコレクションをがないとデータベースとして
// 認識しないので、MONGO_INITDB_DATABASEで設定している「mongotable」に
// 対して初期化スクリプトでコレクションを作成している。
// ※この初期化スクリプトがないとmongotableは作成されない
db = db.getSiblingDB("mongotable");

// コレクションを作成する
db.createCollection('example_collection');

// サンプルドキュメントを挿入する
db.example_collection.insertOne({
    key: 'value',
});

print('Initialization completed.');
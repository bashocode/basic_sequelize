# basic_sequelize

inisialisasi bahwa folder ini adalah project node js
```
npm init --yes
```
install express, sequelize, mysql2 (install bareng dipisah pake spasi)
```
npm install --save express sequelize mysql2
```
inisialisasi sequelize biar ada folders baru migrations, seeders, sama models
```
sequelize init
```
jangan lupa setting config.json set username, password sama nama database
```
"development": {
  "username": "root",
  "password": "Ikhda123",
  "database": "genshin_impact",
  "host": "127.0.0.1",
  "dialect": "mysql"
}
```
create database nya dulu
```
sequelize db:create
```
create tablenya, character sama skill
--------------------------------------
relasi
hasMany (skill punya banyak pengguna) => one to many
belongsTo (pengguna punya satu skill) => one to one
```
sequelize model:create --name Skill --attributes element:string
sequelize model:create --name Character --attributes name:string,element_id:integer
```
migrasi ke server mysql supaya bisa terdaftar tablenya
```
sequelize db:migrate
```
salah migrasi ? ya udah hapus aja
```
sequelize db:migrate:undo
```
seeder untuk mengisi default data, cuma sekali saat development
```
sequelize seed:create --name skill-seeder
sequelize seed:create --name character-seeder
```
upload seeders
```
sequelize db:seed:all
```
delete/undo seeders
```
sequelize db:seed:undo:all
```
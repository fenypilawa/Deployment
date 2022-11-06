# BUILD

## Kenapa Perlu Build?

Secara default, React mengandung banyak pesan peringatan. Peringatan-peringatan ini sangat berguna dalam pengembangan aplikasi. Namun, pesan-pesan ini membuat React menjadi lebih besar dan lambat. Oleh karenanya kita harus menggunakan versi produksi ketika men-deploy aplikasi.

Tujuan melakukan build agar aplikasi kita menjadi versi production, sehingga performanya lebih ringan cepat.


## build react App

Karena proyek kita dibangun menggunakan Create React App,

npm run build

Ini akan membuat versi produksi untuk aplikasi kita di dalam folder build/. Ini hanya diperlukan sebelum men-deploy ke produksi. Untuk pengembangan normal, gunakan npm start.

# Deployment

## deploy menggunakan netlify 

Buat akun Netlify (www.netlify.com)
Install Netlify CLI di terminal
`` npm i netlify-cli -g``
Jalankan perintah netlify deploy di terminal.

## APA deploy
Deployment adalah kegiatan yang bertujuan untuk menyebarkan aplikasi yang sudah kita buat. Harapannya aplikasi tersebut dapat diakses oleh banyak orang, tidak hanya oleh kita sendiri.

## Apa itu surge
Surge adalah layanan penerbit website statik (static web publishing) gratis untuk Front-End Developers. Website statik yang menggunakan surge akan memiliki subdomain *.surge.sh. Surge dapat menerima file HTML, CSS, dan JS.

`` npm i --global surge ``

## nnetlify
Netlify adalah salah satu platform penyedia layanan build tools sekaligus Continous Deployment. Netlify memungkinkan kita untuk mempublish website statis secara gratis. Netlify juga sudah terintegrasi dengan Git Host popular seperti Github, Gitlab dan Bitbucket.




import React from 'react';
import image from '../Assets/1200px-HTML5_logo_and_wordmark.svg.png';

const HTML = () => {
  return (
  <div className='container-fluid'>
    <div className='d-flex justify-content-center mt-4 h2 '>
      HTML
    </div>
    <div className='row ps-3 pe-3'>
      <div className='col-6'>
      <div className='h4'>Pengertian</div>
        <div className='h5'>
          Hypertext Markup Language HTML adalah bahasa markah standar untuk dokumen yang dirancang untuk ditampilkan di peramban internet. 
          Ini dapat dibantu oleh teknologi seperti Cascading Style Sheets CSS dan bahasa scripting seperti JavaScript dan VBScript.
          Peramban internet menerima dokumen HTML dari server web atau dari penyimpanan lokal dan membuat dokumen menjadi halaman web multimedia. 
          HTML menggambarkan struktur halaman web secara semantik dan isyarat awal yang disertakan untuk penampilan dokumen.
          {/* Elemen HTML digambarkan oleh tag, ditulis menggunakan tanda kurung sudut. Tag seperti <img/> dan <input/> langsung perkenalkan  */}
          konten ke dalam halaman. Tag lain seperti  mengelilingi dan memberikan informasi tentang teks dokumen dan mungkin menyertakan tag 
          lain sebagai sub-elemen. Peramban tidak menampilkan tag HTML, tetapi menggunakannya untuk menafsirkan konten halaman.
          HTML dapat menyematkan program yang ditulis dalam bahasa scripting seperti JavaScript, yang memengaruhi perilaku dan konten halaman 
          web. Dimasukkannya CSS mendefinisikan tampilan dan tata letak konten. World Wide Web Consortium W3C, mantan pengelola HTML dan 
          pemelihara standar CSS saat ini, telah mendorong penggunaan CSS pada HTML presentasi eksplisit sejak 1997
        </div>
        <div className='h5'>
        Pada tahun 1980 seorang ahli fisika, Tim Berners-Lee, dan juga seorang kontraktor di CERN (Organisasi Eropa untuk Riset Nuklir) 
        mengusulkan dan menyusun ENQUIRE, sebuah sistem untuk ilmuwan CERN dalam membagi dokumen. Sembilan tahun kemudian, Berners-Lee 
        mengusulkan adanya sistem markah berbasis internet.[2] Berners-Lee menspesifikasikan HTML dan menulis jaringan beserta perangkat
         lunaknya di akhir 1990. Pada tahun yang sama, Berners-Lee dan Robert Cailliau, insinyur sistem data CERN berkolaborasi dalam sebuah 
         permintaan untuk pendanaan, namun tidak diterima secara resmi oleh CERN. Di catatan pribadinya[3] sejak 1990 dia mendaftar[4] "beberapa
          dari banyak daerah yang menggunakan hypertext" dan pertama-tama menempatkan sebuah ensiklopedia.
        </div>
        <div className='h5'>
        Penjelasan pertama yang dibagi untuk umum dari HTML adalah sebuah dokumen yang disebut "Tanda HTML", pertama kali disebutkan di Internet
         oleh Tim Berners-Lee pada akhir 1991.[5][6] Tanda ini menggambarkan 18 elemen awal mula, versi sederhana dari HTML. Kecuali untuk tag 
         hyperlink, yang sangat dipengaruhi oleh SGMLguid, in-house Standard Generalized Markup Language (SGML) berbasis format dokumen di CERN. 
         Sebelas elemen ini masih ada di HTML 4.[7]
        HTML adalah bahasa markah yang digunakan peramban untuk menafsirkan dan menulis teks, gambar dan bahan lainnya ke dalam halaman web secara 
        visual maupun suara. Karakteristik dasar untuk setiap item dari markah HTML didefinisikan di dalam peramban, dan karakteristik ini dapat
         diubah atau ditingkatkan dengan menggunakan tambahan halaman web desainer CSS. Banyak elemen teks ditemukan di laporan teknis ISO pada
          tahun 1988 TR 9537 Teknik untuk menggunakan SGML, yang pada gilirannya meliputi fitur bahasa format teks awal seperti yang digunakan
           oleh komandan RUNOFF dikembangkan pada awal 1960-an untuk sistem operasi: perintah-perintah format ini berasal dari perintah yang 
           digunakan oleh pengetik untuk memformat dokumen CTSS secara manual. Namun, konsep SGML dari markah umum didasarkan pada unsur-unsur 
           daripada hanya efek cetak, dengan pemisahan struktur dan markah juga; HTML telah semakin bergerak ke arah ini dengan CSS.
        </div>
      </div>
      <div className='col-6'>
      <div className='d-flex justify-content-center'>
          <img src={image} alt="image" className='md figure img-fluid body-bg' />
        </div>
      </div>
    </div>
  </div>
  )
}

export default HTML
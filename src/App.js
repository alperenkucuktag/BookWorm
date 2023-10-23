import React, { useState } from "react";
import BookCard from "./components/BookCard";
import { ADD_TYPE } from "./components/buttonTypes";
import CustomButton from './components/CustomButton'
const App = () => {
  //Inputun içerisindeki veriyi tutuacak state (Objeye aktarılacak Kitap İsmi Burada tutalacak)
  const [bookName, setBookName] = useState("");
  //Tüm Kitapların Tutulduğu Dizi

  const [bookList, setBookList] = useState([]);
  // console.log(inputText)

  //console.log(new Date().toLocaleString())

  //Kitab ekleme işlemi
  const addBook = (e) => {
    e.preventDefault();
    //console.log('fonksiyon çalıştı')

    //Yeni Kitab bilgilerini tutan bir obje oluşturulması
    const newBook = {
      id: new Date().getTime(),
      bookTitle: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    //spread operator (...)

    setBookList([...bookList, newBook]);

    //Ekle butonuna basıldığında inputu temizliyor
    setBookName("");
  };

  //Sil Butonuna basılınca çalışacak fonksiyon

  const handleDelete = (deleteId) => {
    //kitap listesi filter metodu ile dönülür ve istenilen değer eşit olmayan elemenalar yeni değişkene atanır
    const filteredList = bookList.filter((book) => book.id !== deleteId);

    //Kitap Listesi bu yeni değişken ile güncellenir
    setBookList(filteredList);
  };

 //okundu butonuna basılınca
 //1- okundu değerini terisne çevir
 //2- bookList dizisini kopyasını olutşru
 //3-dünelenecek olan dizi elemanını indexini tespit etme
 //4-eski kitapı diziden çıkartıyoruz ve yerine yeni kitabı eklıyoruz
 // 5-Güncel Kopya diziyi stateye aktarıoyruz

 const handleReadChange=(book)=>{

    //İstenilen Kitapda okundu bilgisi değiştirme
const updatedBook={...book,isRead:!book.isRead}





//dizideki değişmemiş eski elemanı tespit adımları

const cloneBookList=[...bookList]


const bookIndex=cloneBookList.findIndex((item)=>item.id===book.id)


cloneBookList.splice(bookIndex,1,updatedBook)

setBookList(cloneBookList)


 }


  return (
    <div>
      <header className="bg-dark text-light  py-2 text-center fs-5  ">
        Kitap Kurdu
      </header>

      <div className="container border pb-5">
        {/*Kitap Ekleme Formu*/}
        <form className="d-flex gap-3 mt-4" onSubmit={addBook}>
          <input
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            placeholder="Kitap Adı Giriniz"
            className="form-control shadow"
          />
          <CustomButton type={ADD_TYPE} title={"Ekle"} />
        </form>
        {/*Kitap Ekleme Formu*/}

        {/*Kitapları gösteren Yapı*/}
        <div className="d-flex flex-column gap-5 mt-3">
          {bookList.length === 0 ? (
            <p>Henüz herhangi bir kitap eklenmedi</p>
          ) : (
            bookList.map((book) => {
              return (
                <BookCard
                readUpdateClick={()=>handleReadChange(book)}
                  deleteClick={() => handleDelete(book.id)}
                  bookInfo={book}
                />
              );
            })
          )}
        </div>
        {/*Kitapları gösteren Yapı*/}
      </div>
    </div>
  );
};
export default App;

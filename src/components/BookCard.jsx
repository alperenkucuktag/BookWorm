import { DELETE_TYPE, EDIT_TYPE, READ_TYPE } from "./buttonTypes";
import CustomButton from "./CustomButton";

const BookCard = ({ bookInfo, deleteClick, readUpdateClick }) => {
  console.log("BookCard", bookInfo);

  return (
    //En Dış Kapsayıcı
    <div className="d-flex justify-content-between align-items-center border p-3 shadow">
      {/*Sol Taraf (İsim ve Tarih Bilgisi)*/}

      <div>
        <h5
          style={{
            textDecoration: bookInfo.isRead ? "line-through" : "none",
          }}
        >
          {bookInfo.bookTitle}
        </h5>
        <p>{bookInfo.date}</p>
      </div>
      {/*Sol Taraf (İsim ve Tarih Bilgisi)*/}

      {/*Sağ Taraf (Butonların Bulunduğu Alan)*/}

      <div className="btn-group">
        <CustomButton title={"Sil"} type={DELETE_TYPE} onClick={deleteClick} />
        <CustomButton title={"Düzenle"} type={EDIT_TYPE} />
        <CustomButton
          title={bookInfo.isRead === false ? "Okunmadı" : "Okundu"}
          type={READ_TYPE}
          onClick={readUpdateClick}
        />
      </div>

      {/*Sağ Taraf (Butonların Bulunduğu Alan)*/}
    </div>
  );
};

export default BookCard;

import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <h1>با ما در تماس باشید</h1>
          </li>
          <li>
            <i className="bi bi-geo-alt" />
            <p>
              آدرس : تبریز - پاستور جدید - نرسیده یه تقاطع حاج جبار نایب - روبه
              روی بانک رفاه - ساختمان 345
            </p>
          </li>
          <li>
            <i className="bi bi-telephone" />
            <p>شماره تماس شرکت : 04135553390</p>
          </li>
          <li>
            <i className="bi bi-phone" />
            <p>شماره تلفن همراه : 09144115162</p>
          </li>
          <li>
            <i className="bi bi-envelope-at" />
            <p>ایمیل : mavaddatdentalequipment@gmail.com</p>
          </li>
          <li>
            <i className="bi bi-instagram" />

            <a href="instagram://user?username=your_username">
              <p>اینستاگرام : tajhizatdandanpezeshkimavaddat</p>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;

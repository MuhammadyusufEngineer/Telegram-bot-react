import { useState, useEffect } from 'react';
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from '@/firebase';
import Header from '@/components/Header';
import BlueBtn from '@/components/BlueBtn';

const PhoneSignIn = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'invisible',
        'callback': (response) => {
          handleSignin();
        },
        'expired-callback': () => {
          console.log('reCAPTCHA expired; reset it here if needed.');
        }
      }, auth);
    }
  }, []);

  const handleSignin = () => {
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, `+998${phoneNumber}`, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setMessage('SMS yuborildi. Iltimos, telefoningizni tekshiring.');
      })
      .catch((err) => {
        console.error('Kirish paytida xatolik:', err);
        setMessage('SMS yuborishda xatolik: ' + err.message);
      });
  };

  const verifyCode = () => {
    confirmationResult.confirm(verificationCode)
      .then((result) => {
        const user = result.user;
        console.log('Foydalanuvchi tizimga kirdi:', user);
        setMessage('Telefon raqami tasdiqlandi va foydalanuvchi tizimga kirdi.');
      })
      .catch((err) => {
        console.error('Kod tasdiqlashda xatolik:', err);
        setMessage('Kod tasdiqlashda xatolik: ' + err.message);
      });
  };



  return (
    <div className="min-h-[90vh] bg-white">
      <Header child="Kirish" />
      <div id="recaptcha-container"></div>
      {message && <p>{message}</p>}
      {confirmationResult ? (
        <>
          <div className="container">
            <p className="text-[7vw] font-tsb pt-[5vw]">Tasdiqlash kodi</p>
            <p className="text-[5vw] mt-[2vw]">Telefoningizga yuborilgan kodni kiriting</p>
          </div>
          <div className="flex items-center gap-[2vw] py-[3vw] px-[2vw] rounded-lg bg-lowlight text-[5vw] font-tsb mt-[5vw]">
            <input
              type="text"
              className="bg-transparent outline-none"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              placeholder="Tasdiqlash kodi"
            />
          </div>
          <BlueBtn onClick={verifyCode}>Tasdiqlash</BlueBtn>
        </>
      ) : (
        <>
          <div className="container">
            <div className="flex flex-col justify-between min-h-[80vh]">
              <div>
                <p className="text-[7vw] font-tsb pt-[5vw]">Telefon raqamini kiriting</p>
                <p className="text-[5vw] mt-[2vw]">Tasdiqlash kodi ko'rsatilgan SMS yuboramiz</p>
                <div className="flex items-center gap-[2vw] py-[3vw] px-[2vw] rounded-lg bg-lowlight text-[5vw] font-tsb mt-[5vw]">
                  <p className="font-tsb">+998</p>
                  <input
                    type="text"
                    className="bg-transparent outline-none"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="57 234-56-78"
                  />
                </div>
                <BlueBtn onClick={handleSignin}>Kod jo'natish</BlueBtn>
              </div>
              <div>
                <p className="text-[4vw] text-lowdark text-center">Tizimda ro'yxatdan o'tish orqali, <a href="#" className="text-blue">foydalanuvchi shartnomasi</a> va <a href="#" className="text-blue">shaxsiy ma'lumotlarni qayta ishlash siyosati</a>ga rozilik bildirgan bo'lasiz</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PhoneSignIn;

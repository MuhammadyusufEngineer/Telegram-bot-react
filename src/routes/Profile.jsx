// // src/pages/Profile.jsx
// import IconChevronRight from '@/components/icons/iconChevronRight';
// import GuestProfile from '@/routes/Auth/GuestProfile';
// import BlueBtn from '@/components/BlueBtn';

// const profileData = [
//   { icon: 'uz', title: 'Ilova tili' },
//   { icon: 'location', title: 'Shahar' },
//   { icon: 'map', title: 'Xaritadagi topshirish punktlari' },
//   { icon: 'notification', title: 'Bildirishnomalar' },
//   { icon: 'help', title: 'Ma\'lumot' },
//   { icon: 'mail', title: 'Biz bilan bog\'lanish' },
// ];

// const Profile = () => {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="bg-lowlight min-h-screen pb-[10vw]">
//       <div className="py-[10vw]">
//         <div className="container pb-[5vw]">
//           {user ? (
//             <>
//               <p className="text-[4vw] text-center font-tm">Xush kelibsiz, {user.email || user.phoneNumber}</p>
//               <div className="container pt-[5vw]">
//                 <div className="border border-lowdark rounded-xl bg-white">
//                   {profileData.map((item, index) => (
//                     <div
//                       key={index}
//                       className={`flex items-center justify-between gap-[2vw] p-[3vw] ${index !== profileData.length - 1 ? 'border-b border-solid border-lowdark' : ''
//                         }`}
//                     >
//                       <img className="w-[7vw]" src={`/${item.icon}.svg`} alt={`${item.title} icon`} />
//                       <p className="text-primary text-[4vw] font-tm flex-1 leading-none capitalize">{item.title}</p>
//                       <div className="w-[7vw]">
//                         <IconChevronRight />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <BlueBtn onClick={() => auth.signOut()}>Chiqish</BlueBtn>
//               </div>
//             </>
//           ) : (
//             <GuestProfile />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;
import React from 'react'

const Profile = () => {
  return (
    <div>Profile</div>
  )
}

export default Profile
import IconChevronRight from '@/components/icons/iconChevronRight'
const profileData = [
  { icon: 'uz', title: 'Ilova tili' },
  { icon: 'location', title: 'Shahar' },
  { icon: 'map', title: 'Xaritadagi topshirish punktlari' },
  { icon: 'notification', title: 'Bildirishnomalar' },
  { icon: 'help', title: 'Ma\'lumot' },
  { icon: 'mail', title: 'Biz bilan bog\'lanish' },
]
const Profile = () => {
  return (
    <div className="bg-lowlight min-h-screen pb-[10vw]">
      <div className="py-[10vw]">
        <div className="container pb-[5vw]">
          <p className="text-[5vw] text-center font-tm mb-[10vw]">Shaxsiy kabinet</p>
          <div className="flex justify-center">
            <img src="/logo-2.svg" className="w-[15vw] mb-[5vw]" alt="logo" />
          </div>
          <p className="text-[4vw] text-center font-tm">Savat va akkauntingizdagi tanlangan mahsulotlar ro'yxatini ochish uchun tizimga kiring</p>
        </div>

        <div className="container pt-[5vw]">
          <div className="border border-lowdark rounded-xl bg-white">
            {profileData.map((item, index) => (
              <div key={index} className={`flex items-center justify-between gap-[2vw] p-[3vw] ${index !== profileData.length - 1 ? 'border-b border-solid border-lowdark' : ''}`}>
                <img className="w-[7vw]" src={`/${item.icon}.svg`} alt={`${item.title} icon`} />
                <p className="text-primary text-[4vw] font-tm flex-1 leading-none capitalize">{item.title}</p>
                <div className="w-[7vw]">
                  <IconChevronRight />
                </div>
              </div>
            ))}
          </div>
          <button className="px-[5vw] py-[3vw] bg-blue text-[4vw] text-white font-tm mt-[5vw] w-full">Kirish</button>
        </div>
      </div>
    </div>
  )
}
export default Profile
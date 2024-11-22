import Card from "./components/ProductsCard/ProductsCard";

function App() {
  const data = [
    {
      img: "./img/phone01.webp",
      name: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: 44000000,
      offer: 41777000,
      send: true,
      star: 4.4,
    },
    {
      img: "./img/phone02.webp",
      name: "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: 52699000,
      offer: 0,
      send: false,
      star: 4,
    },
    {
      img: "./img/phone03.webp",
      name: "گوشی موبایل اپل مدل iPhone 12 ZA/A دو سیم‌ کارت ظرفیت 256 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: 50000000,
      offer: 47199000,
      send: true,
      star: 5,
    },
    {
      img: "./img/phone04.webp",
      name: "گوشی موبایل اپل مدل iPhone 13 Pro Max ZDA تک سیم‌ کارت ظرفیت 256 گیگابایت و رم 6 گیگابایت - نات اکتیو ریفربیش پارت نامبر F",
      price: 92020000,
      offer: 91000000,
      send: false,
      star: 5,
    },
    {
      img: "./img/phone05.webp",
      name: "گوشی موبایل اپل مدل iPhone 11 تک سیم‌ کارت ظرفیت 64 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: 0,
      offer: 0,
      send: true,
      star: 2.1,
    },
    {
      img: "./img/phone06.webp",
      name: "گوشی موبایل اپل مدل iPhone 11 ZPA تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت",
      price: 38000000,
      offer: 36899000,
      send: false,
      star: 1.5,
    },
    {
      img: "./img/phone07.webp",
      name: "گوشی موبایل اپل مدل iPhone 13 Pro Max ZAA دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 6 گیگابایت - نات اکتیو ریفربیش پارت نامبر F",
      price: 98100000,
      offer: 92987000,
      send: true,
      star: 4.7,
    },
    {
      img: "./img/phone08.webp",
      name: "گوشی موبایل اپل مدل iPhone 13 Pro ZAA دو سیم‌ کارت ظرفیت 512 گیگابایت و رم 6 گیگابایت - نات اکتیو ریفربیش پارت نامبر F",
      price: 98659500,
      offer: 93878000,
      send: false,
      star: 3.9,
    },
    {
      img: "./img/phone09.webp",
      name: "گوشی موبایل اپل مدل iPhone 13 CH تک سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو - به همراه شارژر",
      price: 36999000,
      offer: 0,
      send: true,
      star: 1.2,
    },
    {
      img: "./img/phone11.webp ",
      name: "گوشی موبایل اپل مدل iPhone 11 A2223 ZAA دو سیم‌ کارت ظرفیت 128 گیگابایت و رم 4 گیگابایت - نات اکتیو",
      price: 40000000,
      offer: 38999000,
      send: false,
      star: 4.9,
    },
    {
      img: "./img/phone10.webp",
      name: "گوشی موبایل اپل مدل iPhone 13 Pro CH دو سیم‌ کارت ظرفیت 512 گیگابایت و 6 گیگابایت رم - نات اکتیو",
      price: 0,
      offer: 0,
      send: false,
      star: 5,
    },
    {
      img: "./img/phone12.webp",
      name: "گوشی موبایل اپل مدل iphone 14 Pro دو سیم کارت ظرفیت 256 گیگابایت و 6 گیگابایت رم",
      price: 0,
      offer: 0,
      send: false,
      star: 5,
    },
  ];
  return (
    <div className="all-products">
      {data.map((data, index) => {
        return <Card key={index + 1} data={data} />;
      })}
    </div>
  );
}

export default App;

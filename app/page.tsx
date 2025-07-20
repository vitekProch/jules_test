import ReviewsCarousel from '@/components/reviews/ReviewsCarousel';
import PortfolioCarousel from '@/components/portfolio/PortfolioCarousel'; // Přidán import pro PortfolioCarousel

export default function Home() {
  const heroBackgroundImage = '/images/homepageImages/uvodni_foto_vetsi.jpeg'; // Ujistěte se, že tento obrázek existuje v public/images/homepageImages/

  return (
    <main>
      <section
        className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackgroundImage})` }}
      >
        {/* Overlay pro lepší čitelnost textu */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Kontejner pro obsah, který bude nad overlayem */}
        <div className="relative z-10 text-center text-white p-4 w-full max-w-3xl mx-auto">
          {/* Přidáno: pt-20 sm:pt-24 md:pt-28 pro explicitní odsazení shora, pokud by bylo potřeba kvůli Navbaru.
              Nicméně, items-center na rodiči by to mělo řešit. Toto je spíše pojistka.
              Odstraněno: Nakonec jsem se rozhodl, že explicitní padding top není nutný díky flex centrování.
              Zachovávám: w-full max-w-3xl mx-auto pro lepší kontrolu šířky obsahu.
           */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wider">
            FOTOGRAFIE OD HANKY
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl">
            Zachyťte každou emoci
          </p>

          {/* Ikony */}
          <div className="mt-8 flex justify-center space-x-6">
            <a href="#" aria-label="Fotoaparát" title="Fotoaparát">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-yellow-400 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.04l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
            </a>
            <a href="#" aria-label="Objektiv" title="Objektiv">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-yellow-400 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
              </svg>
            </a>
            <a href="#" aria-label="Blesk" title="Blesk">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-yellow-400 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
              </svg>
            </a>
          </div>

          {/* Tlačítko Kontaktuj mě */}
          <div className="mt-10">
            <a
              href="#"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Kontaktuj mě
            </a>
          </div>
        </div>
      </section>

      {/* Sekce O mně */}
      <section id="o-mne" className="bg-[#fdd154] py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4"> {/* Přidán kontejner pro omezení šířky obsahu sekce */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            O mně
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Kontejner pro text - na mobilu první, na desktopu druhý (vpravo) */}
            <div className="md:order-2 flex flex-col text-gray-700">
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                BcA. Hana Jedličková
              </h3>
              <p className="mb-4 text-base sm:text-lg leading-relaxed">
                Vítám tě na svých stránkách. Líbí se ti moje práce a chceš také takové fotografie? Mrkni na to, kdo tě bude fotit.
              </p>
              <p className="mb-2 text-base sm:text-lg italic">
                Kdo jsem?
              </p>
              <p className="mb-6 text-base sm:text-lg leading-relaxed">
                Jmenuji se Hana Jedličková a v oboru fotografie se pohybuji už od dětství. Vše začalo, už když mi bylo 11 let a já dostala svůj první fotoaparát. Od té doby se fotografie stala moji životní cestou. Není to pro mě pouze koníček či práce. Je to dalo by se říci můj životní směr, ve kterém jsem se rozhodla zdokonalovat a vložit do toho kus sebe. Své znalosti v oboru jsem rozvíjela jak na střední, tak i na vysoké škole.
              </p>
              <div className="mt-auto text-right"> {/* Zarovná odkaz "Čti dále" dolů a doprava */}
                <a href="#" className="text-yellow-600 hover:text-yellow-700 font-semibold hover:underline transition-colors">
                  Čti dále...
                </a>
              </div>
            </div>
            {/* Kontejner pro fotografii - na mobilu druhý, na desktopu první (vlevo) */}
            <div className="md:order-1">
              <img
                src="/images/homepageImages/uvodni_foto_hanka.jpg"
                alt="Fotografie Hanky Jedličkové"
                className="w-full h-auto object-cover object-top rounded-lg shadow-lg mx-auto md:max-h-[calc(100vh-10rem)]"
                // md:max-h-[calc(100vh-10rem)] je příklad, jak omezit výšku na desktopu,
                // aby nebyla příliš velká, pokud je text krátký. 10rem je odhad pro paddingy a nadpis.
                // Pokud chceme, aby výška byla omezena pouze výškou textového bloku, toto není nutné
                // a `items-center` na gridu by to mělo zařídit. Prozatím to nechávám bez explicitní max-h na desktopu.
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sekce Vaše reakce */}
      <section id="vase-reakce" className="bg-white py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Vaše reakce
          </h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* Sekce Portfolio */}
      <section id="portfolio" className="bg-[#fdd154] py-12 sm:py-16 md:py-20">
        {/* Kontejner pro portfolio, který je širší */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">
            Portfolio
          </h2>
          <PortfolioCarousel />
        </div>
      </section>
    </main>
  );
}

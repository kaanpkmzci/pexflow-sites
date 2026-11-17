/* LX Resins — site content.
   Everything a visitor reads lives in this file, in English, German and Turkish.
   t(en, de, tr) builds one trilingual string. Edit texts here; layout lives in app.js and site.css. */
(function () {
  const t = (en, de, tr) => ({ en, de, tr });

  /* ---------- Interface and page texts ---------- */
  const ui = {
    skip: t('Skip to content', 'Zum Inhalt springen', 'İçeriğe geç'),
    menu: t('Menu', 'Menü', 'Menü'),
    close: t('Close', 'Schließen', 'Kapat'),
    language: t('Language', 'Sprache', 'Dil'),
    home: t('Home', 'Startseite', 'Ana sayfa'),
    nav: {
      products: t('Products', 'Produkte', 'Ürünler'),
      industries: t('Industries', 'Branchen', 'Sektörler'),
      about: t('About', 'Über uns', 'Hakkımızda'),
      partners: t('Partners', 'Partner', 'Partnerler'),
      contact: t('Contact', 'Kontakt', 'İletişim')
    },

    hero: {
      kicker: t('Material collection 2026', 'Materialkollektion 2026', 'Malzeme koleksiyonu 2026'),
      a: t('From light', 'Vom Licht', 'Işıktan'),
      b: t('to possibility.', 'zur Möglichkeit.', 'olasılığa.'),
      sub: t('Photopolymer resins for professional 3D printing.', 'Photopolymerharze für den professionellen 3D-Druck.', 'Profesyonel 3D baskı için fotopolimer reçineler.'),
      cta1: t('Explore the products', 'Produkte ansehen', 'Ürünleri incele'),
      cta2: t('Get in touch', 'Kontakt aufnehmen', 'İletişime geç'),
      band: t('Light band', 'Wellenlängenbereich', 'Işık bandı'),
      alt: t('Lattice bracket rising from liquid resin', 'Gitterhalter, der aus flüssigem Harz aufsteigt', 'Sıvı reçineden yükselen kafes braket')
    },

    collection: {
      a: t('The right material.', 'Das richtige Material.', 'Doğru malzeme.'),
      b: t('The right start.', 'Der richtige Anfang.', 'Doğru başlangıç.'),
      sub: t('Five focus areas for professional applications.', 'Fünf Schwerpunkte für professionelle Anwendungen.', 'Profesyonel uygulamalar için beş odak noktası.'),
      all: t('View all 15 product families', 'Alle 15 Produktfamilien ansehen', '15 ürün ailesinin tümünü gör')
    },

    statement: {
      a: t('Material is', 'Material ist', 'Malzeme,'),
      b: t('the continuation of the idea.', 'die Fortsetzung der Idee.', 'fikrin devamıdır.'),
      p: t('To make a geometry visible. To hold a design in your hand. To see the next step more clearly.',
           'Eine Geometrie sichtbar machen. Einen Entwurf in der Hand halten. Den nächsten Schritt klarer sehen.',
           'Bir geometriyi görünür kılmak. Bir tasarımı elde tutmak. Bir sonraki adımı daha net görmek.'),
      alt: t('Close-up of a graphite-black printed lattice shell', 'Nahaufnahme einer graphitschwarzen gedruckten Gitterschale', 'Grafit siyah 3B baskılı kafes kabuk, yakın çekim')
    },
    principles: [
      { h: t('It starts with the application.', 'Es beginnt mit der Anwendung.', 'Uygulamadan başlar.'),
        p: t('Each product family focuses on a different workflow; the material is chosen together with the purpose of the part.',
             'Jede Produktfamilie konzentriert sich auf einen anderen Arbeitsablauf; die Materialwahl wird gemeinsam mit dem Zweck des Bauteils getroffen.',
             'Her ürün ailesi farklı bir iş akışına odaklanır; malzeme seçimi, parçanın amacıyla birlikte düşünülür.') },
      { h: t('It takes shape in layers.', 'Es entsteht Schicht für Schicht.', 'Katmanlarla şekillenir.'),
        p: t('The link between digital design and physical part is photopolymer chemistry, cured by light.',
             'Die Verbindung zwischen digitalem Entwurf und physischem Bauteil ist die lichthärtende Photopolymerchemie.',
             'Dijital tasarım ile fiziksel parça arasındaki bağ, ışıkla kürlenen fotopolimer kimyasıdır.') },
      { h: t('It is completed in the detail.', 'Es vollendet sich im Detail.', 'Ayrıntıda tamamlanır.'),
        p: t('When printing, cleaning and post-curing are treated as one process, the integrity of the design is preserved.',
             'Werden Druck, Reinigung und Nachhärtung gemeinsam betrachtet, bleibt die Integrität des Entwurfs erhalten.',
             'Baskı, temizleme ve son kürleme birlikte ele alındığında tasarımın bütünlüğü korunur.') }
    ],

    sectorsIntro: {
      a: t('Materials,', 'Materialien,', 'Malzemeler,'),
      b: t('by field of application.', 'nach Anwendungsfeld.', 'uygulama alanına göre.'),
      sub: t('Product families grouped by where they are used.', 'Produktfamilien, geordnet nach ihrem Einsatzbereich.', 'Kullanıldıkları alana göre gruplanmış ürün aileleri.'),
      open: t('Open the page', 'Zur Seite', 'Sayfaya git'),
      families: t('product families', 'Produktfamilien', 'ürün ailesi')
    },

    workflow: {
      a: t('From a file', 'Von der Datei', 'Bir dosyadan'),
      b: t('to a physical part.', 'zum physischen Bauteil.', 'fiziksel parçaya.'),
      sub: t('Material and workflow are considered together.', 'Material und Arbeitsablauf werden gemeinsam gedacht.', 'Malzeme ve iş akışı birlikte düşünülür.'),
      steps: [
        { h: t('Select', 'Auswählen', 'Seç'),
          p: t('Choose the product family that fits the purpose and geometry of the part.', 'Die Produktfamilie wählen, die zu Zweck und Geometrie des Bauteils passt.', 'Parçanın amacına ve geometriye uygun ürün ailesini belirle.') },
        { h: t('Prepare', 'Vorbereiten', 'Hazırla'),
          p: t('Plan orientation, supports and layer strategy.', 'Ausrichtung, Stützstrukturen und Schichtstrategie planen.', 'Yönlendirme, destekler ve katman stratejisini planla.') },
        { h: t('Print', 'Drucken', 'Bas'),
          p: t('Proceed with a print profile suited to the material and the printer.', 'Mit einem zu Material und Drucker passenden Druckprofil arbeiten.', 'Malzemeye ve yazıcıya uygun baskı profiliyle ilerle.') },
        { h: t('Finish', 'Fertigstellen', 'Tamamla'),
          p: t('Carry out cleaning and post-curing according to the product instructions.', 'Reinigung und Nachhärtung gemäß Produktanweisung durchführen.', 'Temizleme ve son kürlemeyi ürün talimatına göre uygula.') },
        { h: t('Evaluate', 'Bewerten', 'Değerlendir'),
          p: t('Compare the finished part with its intended use and design goals.', 'Das fertige Bauteil mit Verwendungszweck und Konstruktionszielen vergleichen.', 'Bitmiş parçayı kullanım amacı ve tasarım hedefleriyle karşılaştır.') }
      ]
    },

    portfolio: {
      a: t('A wider', 'Ein größeres', 'Daha geniş'),
      b: t('field of possibility.', 'Feld an Möglichkeiten.', 'bir olasılık alanı.'),
      sub: t('Specialised product families shaped by the application.', 'Spezialisierte Produktfamilien, geformt von der Anwendung.', 'Uygulamaya göre şekillenen özel ürün aileleri.'),
      note: t('Product selection for special dental applications is made together with the relevant technical documentation and the defined intended use.',
              'Die Produktauswahl für spezielle Dentalanwendungen erfolgt zusammen mit der zugehörigen technischen Dokumentation und der definierten Zweckbestimmung.',
              'Özel dental uygulamalar için ürün seçimi, ilgili teknik dokümantasyon ve tanımlanmış kullanım amacıyla birlikte yapılır.')
    },

    cta: {
      a: t('Think of', 'An die nächste', 'Bir sonraki'),
      b: t('the next layer.', 'Schicht denken.', 'katmanı düşün.'),
      p: t('Tell us about your application. We will point you to the matching product family and its documentation.',
           'Beschreiben Sie Ihre Anwendung. Wir nennen Ihnen die passende Produktfamilie und die zugehörige Dokumentation.',
           'Uygulamanızı anlatın. Size uygun ürün ailesini ve dokümantasyonunu iletelim.'),
      b1: t('Contact us', 'Kontakt aufnehmen', 'İletişime geçin'),
      b2: t('Become a partner', 'Partner werden', 'Partner olun')
    },

    products: {
      a: t('Photopolymer', 'Photopolymer-', 'Fotopolimer'),
      b: t('collection 2026.', 'Kollektion 2026.', 'koleksiyonu 2026.'),
      sub: t('Fifteen product families for engineering, dental and modeling work. Five are presented with a full material profile; for the ten specialised families, ask us for the documentation.',
             'Fünfzehn Produktfamilien für Engineering, Dental und Modellbau. Fünf stellen wir mit vollständigem Materialprofil vor; die Dokumentation zu den zehn spezialisierten Familien fragen Sie bei uns an.',
             'Mühendislik, dental ve modelleme için on beş ürün ailesi. Beşini tam malzeme profiliyle sunuyoruz; on özel aile için dokümantasyonu bizden isteyin.'),
      filter: t('Filter by field', 'Nach Anwendungsfeld filtern', 'Alana göre filtrele'),
      all: t('All', 'Alle', 'Tümü'),
      g1: t('With material profile', 'Mit Materialprofil', 'Malzeme profiliyle'),
      g2: t('Specialised families', 'Spezialisierte Familien', 'Özel ürün aileleri'),
      view: t('View product', 'Produkt ansehen', 'Ürünü incele'),
      ask: t('Request information', 'Informationen anfordern', 'Bilgi iste'),
      count: t('product families shown', 'Produktfamilien angezeigt', 'ürün ailesi gösteriliyor'),
      empty: t('No product family is listed for this field yet.', 'Für dieses Anwendungsfeld ist noch keine Produktfamilie gelistet.', 'Bu alan için henüz listelenen bir ürün ailesi yok.'),
      showAll: t('Show all product families', 'Alle Produktfamilien anzeigen', 'Tüm ürün ailelerini göster')
    },

    product: {
      focus: t('Application focus', 'Anwendungsschwerpunkt', 'Uygulama odağı'),
      profile: t('Material profile', 'Materialprofil', 'Malzeme profili'),
      property: t('Property', 'Eigenschaft', 'Özellik'),
      value: t('Value', 'Wert', 'Değer'),
      design: t('Design and application', 'Konstruktion und Anwendung', 'Tasarım ve uygulama'),
      band: t('Light band', 'Wellenlängenbereich', 'Işık bandı'),
      bandNote: t('The printer profile must be verified.', 'Das Druckerprofil ist zu verifizieren.', 'Yazıcı profili doğrulanmalıdır.'),
      bandAlt: t('Wavelength scale from 360 to 440 nm with the band 385 to 405 nm marked', 'Wellenlängenskala von 360 bis 440 nm mit markiertem Bereich 385 bis 405 nm', '360–440 nm dalga boyu ölçeği; 385–405 nm bandı işaretli'),
      pack: t('Packaging', 'Gebinde', 'Ambalaj'),
      bottle: t('1 kg bottle', '1-kg-Flasche', '1 kg şişe'),
      type: t('Professional SLA 3D printing resin', 'Professionelles SLA-3D-Druckharz', 'Profesyonel SLA 3D baskı reçinesi'),
      docsH: t('Documentation', 'Dokumentation', 'Dokümantasyon'),
      docs: t('For numeric performance data, printer compatibility and conditions of use, the current TDS/SDS and product instructions apply.',
              'Für numerische Leistungsdaten, Druckerkompatibilität und Einsatzbedingungen gelten das aktuelle TDS/SDS und die Produktanweisungen.',
              'Sayısal performans verileri, yazıcı uyumluluğu ve kullanım koşulları için güncel TDS/SDS ve ürün talimatları esas alınır.'),
      docsDental: t('The clinical scope of use of dental products is defined by the relevant product documentation.',
                    'Der klinische Anwendungsbereich dentaler Produkte wird durch die jeweilige Produktdokumentation bestimmt.',
                    'Dental ürünlerin klinik kullanım kapsamı ilgili ürün dokümantasyonuyla belirlenir.'),
      ask: t('Ask about this product', 'Zu diesem Produkt anfragen', 'Bu ürün hakkında bilgi iste'),
      tds: t('Request TDS / SDS', 'TDS / SDS anfordern', 'TDS / SDS iste'),
      related: t('Related product families', 'Verwandte Produktfamilien', 'İlgili ürün aileleri'),
      next: t('Next product', 'Nächstes Produkt', 'Sonraki ürün')
    },

    sector: {
      pre: t('Resins for', 'Harze für', ''),
      post: t('', '', 'için reçineler.'),
      finder: t('Which material for which job', 'Welches Material für welche Aufgabe', 'Hangi iş için hangi malzeme'),
      application: t('Application', 'Anwendung', 'Uygulama'),
      family: t('Product family', 'Produktfamilie', 'Ürün ailesi'),
      featured: t('Families with material profile', 'Familien mit Materialprofil', 'Malzeme profili olan aileler'),
      seeProducts: t('See these products', 'Diese Produkte ansehen', 'Bu ürünleri gör'),
      other: t('Other fields', 'Weitere Anwendungsfelder', 'Diğer alanlar')
    },

    about: {
      lead: t('LX Resins manufactures high-quality photopolymer resins for specific applications in professional 3D printing: engineering, dental and modeling.',
              'LX Resins stellt hochwertige Photopolymerharze für spezifische Anwendungen im professionellen 3D-Druck her: Engineering, Dental und Modellbau.',
              'LX Resins; mühendislik, dental ve modelleme alanlarında profesyonel 3D baskının özel kullanım ihtiyaçları için yüksek kaliteli fotopolimer reçineler üretir.'),
      p2: t('Each product family is developed around an application. We treat material choice, print profile, cleaning and post-curing as parts of one workflow.',
            'Jede Produktfamilie wird um eine Anwendung herum entwickelt. Materialwahl, Druckprofil, Reinigung und Nachhärtung betrachten wir als Teile eines Arbeitsablaufs.',
            'Her ürün ailesi bir uygulama etrafında geliştirilir. Malzeme seçimini, baskı profilini, temizlemeyi ve son kürlemeyi tek bir iş akışının parçaları olarak ele alırız.'),
      facts: [
        { n: '15', l: t('product families in the 2026 collection', 'Produktfamilien in der Kollektion 2026', '2026 koleksiyonundaki ürün ailesi') },
        { n: '3', l: t('fields of application: engineering, dental, modeling', 'Anwendungsfelder: Engineering, Dental, Modellbau', 'uygulama alanı: mühendislik, dental, modelleme') },
        { n: '385–405 nm', l: t('light band of the collection', 'Wellenlängenbereich der Kollektion', 'koleksiyonun ışık bandı') }
      ],
      princH: t('How we think about material', 'Wie wir über Material denken', 'Malzemeye nasıl bakıyoruz'),
      images: t('Images on this site are representative application visuals.', 'Die Abbildungen auf dieser Website sind repräsentative Anwendungsbeispiele.', 'Bu sitedeki görseller temsili uygulama görselleridir.')
    },

    contact: {
      a: t('Tell us about', 'Erzählen Sie uns von', 'Uygulamanızı'),
      b: t('your application.', 'Ihrer Anwendung.', 'bize anlatın.'),
      p: t('Ask about a product family, request technical documentation or a quote. The more we know about your printer and the part, the more precise our answer.',
           'Fragen Sie nach einer Produktfamilie, fordern Sie technische Dokumentation oder ein Angebot an. Je mehr wir über Ihren Drucker und das Bauteil wissen, desto genauer können wir antworten.',
           'Bir ürün ailesi hakkında soru sorun, teknik dokümantasyon veya teklif isteyin. Yazıcınız ve parçanız hakkında ne kadar bilgi verirseniz yanıtımız o kadar net olur.'),
      partnerQ: t('Distributor, reseller or laboratory group?', 'Händler, Wiederverkäufer oder Laborgruppe?', 'Distribütör, bayi veya laboratuvar grubu musunuz?'),
      partnerL: t('Use the partner form', 'Zum Partnerformular', 'Partner formuna geçin'),
      formTitle: t('Enquiry form', 'Anfrageformular', 'Talep formu'),
      submit: t('Send enquiry', 'Anfrage senden', 'Talebi gönder')
    },

    partners: {
      a: t('Work with', 'Zusammenarbeit mit', 'LX Resins ile'),
      b: t('LX Resins.', 'LX Resins.', 'birlikte çalışın.'),
      p: t('For distributors, resellers, dental laboratories and printer manufacturers who want to work with our materials. Tell us about your company and your market.',
           'Für Distributoren, Wiederverkäufer, Dentallabore und Druckerhersteller, die mit unseren Materialien arbeiten möchten. Stellen Sie uns Ihr Unternehmen und Ihren Markt vor.',
           'Malzemelerimizle çalışmak isteyen distribütörler, bayiler, dental laboratuvarlar ve yazıcı üreticileri için. Firmanızı ve pazarınızı bize tanıtın.'),
      listH: t('Helpful in your message', 'Hilfreich in Ihrer Nachricht', 'Mesajınızda işimize yarayacak bilgiler'),
      list: [
        t('Your company and the region you serve', 'Ihr Unternehmen und die Region, die Sie betreuen', 'Firmanız ve hizmet verdiğiniz bölge'),
        t('The fields you work in: engineering, dental, modeling', 'Ihre Anwendungsfelder: Engineering, Dental, Modellbau', 'Çalıştığınız alanlar: mühendislik, dental, modelleme'),
        t('The printers and technologies you work with', 'Die Drucker und Technologien, mit denen Sie arbeiten', 'Çalıştığınız yazıcılar ve teknolojiler')
      ],
      customerQ: t('Looking for a product or documentation?', 'Suchen Sie ein Produkt oder Dokumentation?', 'Ürün veya dokümantasyon mu arıyorsunuz?'),
      customerL: t('Use the contact form', 'Zum Kontaktformular', 'İletişim formuna geçin'),
      formTitle: t('Partner enquiry form', 'Formular für Partneranfragen', 'Partner talep formu'),
      submit: t('Send partner enquiry', 'Partneranfrage senden', 'Partner talebini gönder')
    },

    form: {
      required: t('Required fields are marked with *.', 'Pflichtfelder sind mit * gekennzeichnet.', 'Zorunlu alanlar * ile işaretlidir.'),
      optional: t('optional', 'optional', 'isteğe bağlı'),
      name: t('Full name', 'Vor- und Nachname', 'Ad soyad'),
      contactName: t('Contact person', 'Ansprechperson', 'İlgili kişi'),
      company: t('Company', 'Unternehmen', 'Firma'),
      email: t('Email', 'E-Mail', 'E-posta'),
      phone: t('Phone', 'Telefon', 'Telefon'),
      country: t('Country', 'Land', 'Ülke'),
      region: t('Country or region', 'Land oder Region', 'Ülke veya bölge'),
      website: t('Website', 'Website', 'Web sitesi'),
      subject: t('Subject', 'Anliegen', 'Konu'),
      subjects: [
        t('Product information', 'Produktinformation', 'Ürün bilgisi'),
        t('Technical documentation (TDS/SDS)', 'Technische Dokumentation (TDS/SDS)', 'Teknik dokümantasyon (TDS/SDS)'),
        t('Quote request', 'Angebotsanfrage', 'Teklif talebi'),
        t('Other', 'Sonstiges', 'Diğer')
      ],
      family: t('Product family', 'Produktfamilie', 'Ürün ailesi'),
      familyNone: t('Not sure yet', 'Noch unklar', 'Henüz belli değil'),
      bizType: t('Type of business', 'Art des Unternehmens', 'Firma türü'),
      bizTypes: [
        t('Distributor', 'Distributor', 'Distribütör'),
        t('Reseller', 'Wiederverkäufer', 'Bayi'),
        t('Dental laboratory', 'Dentallabor', 'Dental laboratuvar'),
        t('Printer manufacturer', 'Druckerhersteller', 'Yazıcı üreticisi'),
        t('Other', 'Sonstiges', 'Diğer')
      ],
      choose: t('Choose an option', 'Bitte wählen', 'Seçin'),
      fields: t('Fields of interest', 'Interessensfelder', 'İlgilendiğiniz alanlar'),
      message: t('Message', 'Nachricht', 'Mesaj'),
      messageHint: t('Printer model, application and quantities help us answer.', 'Druckermodell, Anwendung und Mengen helfen uns bei der Antwort.', 'Yazıcı modeli, uygulama ve miktar bilgisi yanıtlamamızı kolaylaştırır.'),
      consent: t('I agree that my details are used to answer this enquiry.', 'Ich bin damit einverstanden, dass meine Angaben zur Beantwortung dieser Anfrage verwendet werden.', 'Bilgilerimin bu talebi yanıtlamak için kullanılmasını kabul ediyorum.'),
      sending: t('Checking your enquiry…', 'Ihre Anfrage wird geprüft…', 'Talebiniz kontrol ediliyor…'),
      err: {
        summary: t('Check the marked fields.', 'Bitte prüfen Sie die markierten Felder.', 'İşaretli alanları kontrol edin.'),
        name: t('Enter your name.', 'Geben Sie Ihren Namen ein.', 'Adınızı girin.'),
        company: t('Enter your company name.', 'Geben Sie den Namen Ihres Unternehmens ein.', 'Firma adını girin.'),
        email: t('Enter a valid email address, for example name@company.com.', 'Geben Sie eine gültige E-Mail-Adresse ein, zum Beispiel name@firma.de.', 'Geçerli bir e-posta adresi girin, örneğin ad@firma.com.'),
        country: t('Enter your country.', 'Geben Sie Ihr Land ein.', 'Ülkenizi girin.'),
        select: t('Choose an option.', 'Wählen Sie eine Option.', 'Bir seçenek seçin.'),
        message: t('Write a short message.', 'Schreiben Sie eine kurze Nachricht.', 'Kısa bir mesaj yazın.'),
        consent: t('Confirm the consent to send the enquiry.', 'Bestätigen Sie die Einwilligung, um die Anfrage zu senden.', 'Talebi göndermek için onay kutusunu işaretleyin.')
      },
      doneH: t('Your enquiry is complete.', 'Ihre Anfrage ist vollständig.', 'Talebiniz eksiksiz.'),
      doneP: t('Preview notice: this form is not yet connected to a mail service, so nothing was sent. Once it is connected, the delivery confirmation appears here.',
               'Hinweis zur Vorschau: Dieses Formular ist noch nicht an einen Versanddienst angebunden, es wurde nichts gesendet. Nach der Anbindung erscheint hier die Versandbestätigung.',
               'Önizleme notu: Bu form henüz bir gönderim servisine bağlı değil; hiçbir şey gönderilmedi. Bağlantı kurulduğunda gönderim onayı burada görünecek.'),
      edit: t('Edit the enquiry', 'Anfrage bearbeiten', 'Talebi düzenle')
    },

    footer: {
      tagline: 'Precision in every layer',
      note: t('Images are representative application visuals. For numeric performance data, printer compatibility and conditions of use, the current TDS/SDS and product instructions apply.',
              'Abbildungen sind repräsentative Anwendungsbeispiele. Für numerische Leistungsdaten, Druckerkompatibilität und Einsatzbedingungen gelten das aktuelle TDS/SDS und die Produktanweisungen.',
              'Görseller temsili uygulama görselleridir. Sayısal performans verileri, yazıcı uyumluluğu ve kullanım koşulları için güncel TDS/SDS ve ürün talimatları esas alınır.'),
      company: t('Company', 'Unternehmen', 'Kurumsal'),
      rights: t('Professional photopolymer materials', 'Professionelle Photopolymer-Materialien', 'Profesyonel fotopolimer malzemeler')
    },

    notFound: {
      h: t('This page does not exist.', 'Diese Seite gibt es nicht.', 'Böyle bir sayfa yok.'),
      p: t('The address may have changed. Start again from the product overview.', 'Die Adresse hat sich möglicherweise geändert. Beginnen Sie in der Produktübersicht.', 'Adres değişmiş olabilir. Ürün listesinden yeniden başlayın.')
    },

    meta: {
      home: t('Photopolymer resins for professional 3D printing in engineering, dental and modeling work.',
              'Photopolymerharze für den professionellen 3D-Druck in Engineering, Dental und Modellbau.',
              'Mühendislik, dental ve modelleme için profesyonel 3D baskı fotopolimer reçineleri.')
    }
  };

  /* ---------- Property labels of the material profile ---------- */
  const props = {
    viscosity: t('Viscosity, 25 °C', 'Viskosität, 25 °C', 'Viskozite, 25 °C'),
    density: t('Density, 25 °C', 'Dichte, 25 °C', 'Yoğunluk, 25 °C'),
    tensile: t('Tensile strength', 'Zugfestigkeit', 'Çekme dayanımı'),
    flexural: t('Flexural strength', 'Biegefestigkeit', 'Eğilme dayanımı'),
    modulus: t('Elastic modulus', 'Elastizitätsmodul', 'Elastik modül'),
    elongation: t('Elongation at break', 'Bruchdehnung', 'Kopma uzaması'),
    hardness: t('Hardness', 'Härte', 'Sertlik'),
    hdt: t('Heat deflection temperature*', 'Wärmeformbeständigkeit*', 'Isıl sapma sıcaklığı*'),
    tear: t('Tear strength', 'Weiterreißfestigkeit', 'Yırtılma dayanımı'),
    layer: t('Layer thickness, starting range', 'Schichtdicke, Startbereich', 'Katman kalınlığı, başlangıç')
  };

  /* ---------- Sectors ---------- */
  const sectors = [
    { id: 'engineering', accent: '#305068', image: 'enc',
      name: t('Engineering', 'Engineering', 'Mühendislik'),
      inTitle: t('engineering.', 'das Engineering.', 'Mühendislik'),
      line: t('Functional prototypes, assembly trials, fixtures and process-specific work.',
              'Funktionsprototypen, Montageversuche, Vorrichtungen und prozessspezifische Arbeiten.',
              'Fonksiyonel prototipler, montaj denemeleri, fikstürler ve sürece özel çalışmalar.'),
      intro: t('Assess assembly relationships, part geometry and design decisions on physical prototypes. Stiffness and strength are considered together with print orientation, support marks and post-curing conditions.',
               'Montagebeziehungen, Bauteilgeometrie und Konstruktionsentscheidungen am physischen Prototyp beurteilen. Steifigkeit und Festigkeit werden zusammen mit Druckausrichtung, Stützspuren und Nachhärtebedingungen betrachtet.',
               'Montaj ilişkilerini, parça geometrisini ve tasarım kararlarını fiziksel prototipler üzerinden değerlendirin. Rijitlik ve dayanım; baskı yönü, destek izi ve son kürleme koşullarıyla birlikte ele alınır.') },
    { id: 'dental', accent: '#C87080', image: 'gic',
      name: t('Dental', 'Dental', 'Dental'),
      inTitle: t('dental work.', 'die Dentaltechnik.', 'Dental'),
      line: t('Working models, guide geometries, soft tissue representation and specialised dental families.',
              'Arbeitsmodelle, Schablonengeometrien, Weichgewebedarstellung und spezialisierte Dentalfamilien.',
              'Çalışma modelleri, kılavuz geometrileri, yumuşak doku temsili ve özel dental aileler.'),
      intro: t('From working models to guide geometries and soft tissue representation: each dental family addresses a defined step in the laboratory workflow. Product selection for special dental applications is made together with the relevant technical documentation and the defined intended use.',
               'Vom Arbeitsmodell über Schablonengeometrien bis zur Weichgewebedarstellung: Jede Dentalfamilie ist auf einen definierten Schritt im Laborablauf ausgerichtet. Die Produktauswahl für spezielle Dentalanwendungen erfolgt zusammen mit der zugehörigen technischen Dokumentation und der definierten Zweckbestimmung.',
               'Çalışma modellerinden kılavuz geometrilerine ve yumuşak doku temsiline: her dental aile, laboratuvar iş akışının tanımlı bir adımına odaklanır. Özel dental uygulamalar için ürün seçimi, ilgili teknik dokümantasyon ve tanımlanmış kullanım amacıyla birlikte yapılır.') },
    { id: 'modeling', accent: '#8050B0', image: 'gec',
      name: t('Modeling', 'Modellbau', 'Modelleme'),
      inTitle: t('modeling.', 'den Modellbau.', 'Modelleme'),
      line: t('Concept and presentation models, detail studies and everyday prototyping.',
              'Konzept- und Präsentationsmodelle, Detailstudien und tägliches Prototyping.',
              'Konsept ve sunum modelleri, detay çalışmaları ve günlük prototipleme.'),
      intro: t('From concept models to presentation pieces, a versatile starting point for everyday 3D printing. Fine details and support removal are planned together with part size and orientation.',
               'Vom Konzeptmodell bis zum Präsentationsstück: ein vielseitiger Ausgangspunkt für den täglichen 3D-Druck. Feine Details und das Entfernen der Stützen werden zusammen mit Bauteilgröße und Ausrichtung geplant.',
               'Konsept modellerinden sunum parçalarına, günlük 3D baskı çalışmaları için çok yönlü bir başlangıç. İnce ayrıntılar ve destek temizleme ihtiyacı, parça boyutu ve yönlendirmeyle birlikte planlanır.') }
  ];

  /* ---------- The five families with a material profile ----------
     values: [min, max, decimals, unit] — figures and units exactly as in the 2026 catalogue. */
  const products = [
    { id: 'lx-enc', code: 'LX-ENC', name: ['Engineering', 'Cure'], accent: '#305068', sectors: ['engineering'], image: 'enc', bottle: true,
      cat: t('Engineering and functional prototyping', 'Engineering und funktionales Prototyping', 'Mühendislik ve fonksiyonel prototipleme'),
      tagline: t('Explore the structure.', 'Struktur erkunden.', 'Yapıyı keşfet.'),
      desc: t('An engineering-focused product family for evaluating assembly relationships, part geometry and design decisions on physical prototypes.',
              'Eine auf Engineering ausgerichtete Produktfamilie, um Montagebeziehungen, Bauteilgeometrie und Konstruktionsentscheidungen an physischen Prototypen zu beurteilen.',
              'Montaj ilişkilerini, parça geometrisini ve tasarım kararlarını fiziksel prototipler üzerinden değerlendirmek için mühendislik odaklı ürün ailesi.'),
      focus: [
        t('Functional prototypes', 'Funktionsprototypen', 'Fonksiyonel prototipler'),
        t('Connection and assembly trials', 'Verbindungs- und Montageversuche', 'Bağlantı ve montaj denemeleri'),
        t('Fixture and jig designs', 'Vorrichtungs- und Lehrenkonstruktionen', 'Fikstür ve aparat tasarımları'),
        t('Rigid part geometries', 'Starre Bauteilgeometrien', 'Rijit parça geometrileri')
      ],
      highlights: [
        t('Rigid parts', 'Starre Bauteile', 'Rijit parçalar'),
        t('Dimensional stability', 'Dimensionsstabilität', 'Boyutsal kararlılık'),
        t('Functional prototyping', 'Funktionales Prototyping', 'Fonksiyonel prototipleme')
      ],
      values: { viscosity: [350, 650, 0, 'mPa·s'], density: [1.10, 1.18, 2, 'g/cm³'], tensile: [60, 75, 0, 'MPa'], flexural: [90, 120, 0, 'MPa'],
                modulus: [2.0, 3.0, 1, 'GPa'], elongation: [6, 12, 0, '%'], hardness: [82, 88, 0, 'Shore D'], hdt: [75, 95, 0, '°C'], layer: [50, 100, 0, 'µm'] },
      note: t('*Heat deflection temperature is reported together with the selected load and method.',
              '*Die Wärmeformbeständigkeit wird zusammen mit der gewählten Last und Methode angegeben.',
              '*Isıl sapma sıcaklığı, seçilen yük ve yöntemle birlikte raporlanır.'),
      design: t('Design iterations on connection points, lattice structures and assembly parts. Stiffness and strength are evaluated together with print orientation, support marks and post-curing conditions.',
                'Konstruktionsiterationen an Verbindungspunkten, Gitterstrukturen und Montageteilen. Steifigkeit und Festigkeit werden zusammen mit Druckausrichtung, Stützspuren und Nachhärtebedingungen bewertet.',
                'Bağlantı noktaları, kafes yapılar ve montaj parçaları üzerinde tasarım iterasyonları. Rijitlik ve dayanım; baskı yönü, destek izi ve son kürleme koşullarıyla birlikte değerlendirilir.'),
      alt: t('Black quadcopter frame with lattice arms', 'Schwarzer Quadrocopter-Rahmen mit Gitterarmen', 'Kafes kollu siyah quadcopter gövdesi') },

    { id: 'lx-gec', code: 'LX-GEC', name: ['General', 'Cure'], accent: '#8050B0', sectors: ['modeling'], image: 'gec', bottle: true,
      cat: t('General-purpose modeling', 'Universeller Modellbau', 'Genel amaçlı modelleme'),
      tagline: t('Make room for every idea.', 'Raum für jede Idee.', 'Her fikre alan aç.'),
      desc: t('A general-purpose product family that brings together the different needs of everyday 3D printing, from concept models to presentation pieces.',
              'Eine universelle Produktfamilie, die die unterschiedlichen Anforderungen des täglichen 3D-Drucks zusammenführt, vom Konzeptmodell bis zum Präsentationsstück.',
              'Konsept modellerinden sunum parçalarına kadar günlük 3D baskı çalışmalarının farklı ihtiyaçlarını bir araya getiren genel amaçlı ürün ailesi.'),
      focus: [
        t('Concept and presentation models', 'Konzept- und Präsentationsmodelle', 'Konsept ve sunum modelleri'),
        t('Geometric detail studies', 'Geometrische Detailstudien', 'Geometrik detay çalışmaları'),
        t('Everyday prototyping', 'Tägliches Prototyping', 'Günlük prototipleme'),
        t('Versatile modeling', 'Vielseitiger Modellbau', 'Çok yönlü modelleme')
      ],
      highlights: [
        t('Balanced performance', 'Ausgewogene Leistung', 'Dengeli performans'),
        t('Dimensional stability', 'Dimensionsstabilität', 'Boyutsal stabilite'),
        t('Versatile use', 'Vielseitiger Einsatz', 'Çok yönlü kullanım')
      ],
      values: { viscosity: [300, 600, 0, 'mPa·s'], density: [1.08, 1.14, 2, 'g/cm³'], tensile: [45, 60, 0, 'MPa'], flexural: [70, 90, 0, 'MPa'],
                modulus: [1.8, 2.5, 1, 'GPa'], elongation: [5, 10, 0, '%'], hardness: [80, 85, 0, 'Shore D'], layer: [50, 100, 0, 'µm'] },
      note: t('Post-curing, surface quality and dimensional stability should be evaluated together.',
              'Nachhärtung, Oberflächenqualität und Dimensionsstabilität sollten gemeinsam bewertet werden.',
              'Son kürleme, yüzey kalitesi ve boyutsal kararlılık birlikte değerlendirilmelidir.'),
      design: t('A versatile starting point for presentation models, training parts and geometry trials. Fine details and support removal are planned together with part size and orientation.',
                'Ein vielseitiger Ausgangspunkt für Präsentationsmodelle, Schulungsteile und Geometrieversuche. Feine Details und das Entfernen der Stützen werden zusammen mit Bauteilgröße und Ausrichtung geplant.',
                'Sunum modelleri, eğitim parçaları ve geometri denemeleri için çok yönlü bir başlangıç. İnce ayrıntılar ve destek temizleme ihtiyacı, parça boyutu ve yönlendirmeyle birlikte planlanır.'),
      alt: t('Grey detail geometries, a lattice bracket and a chess knight', 'Graue Detailgeometrien, ein Gitterhalter und ein Schachspringer', 'Gri detay geometrileri, kafes braket ve satranç atı') },

    { id: 'lx-mc', code: 'LX-MC', name: ['Model', 'Cure'], accent: '#B89050', sectors: ['dental'], image: 'mc', bottle: true,
      cat: t('Dental modeling', 'Dentale Modellherstellung', 'Dental modelleme'),
      tagline: t('Make detail visible.', 'Details sichtbar machen.', 'Ayrıntıyı görünür kıl.'),
      desc: t('A product family for dental modeling work, focused on evaluating form, surface detail and geometric relationships on a physical model.',
              'Eine Produktfamilie für die dentale Modellherstellung, mit Fokus auf die Beurteilung von Form, Oberflächendetail und geometrischen Beziehungen am physischen Modell.',
              'Dental modelleme çalışmalarında form, yüzey ayrıntısı ve geometrik ilişkileri fiziksel bir model üzerinden değerlendirmeye odaklanan ürün ailesi.'),
      focus: [
        t('Dental working models', 'Dentale Arbeitsmodelle', 'Dental çalışma modelleri'),
        t('Restorative planning models', 'Modelle für die restaurative Planung', 'Restoratif planlama modelleri'),
        t('Laboratory presentations', 'Laborpräsentationen', 'Laboratuvar sunumları'),
        t('Dental model geometries', 'Dentale Modellgeometrien', 'Dental model geometrileri')
      ],
      highlights: [
        t('High detail', 'Hohe Detailtreue', 'Yüksek detay'),
        t('Dimensional stability', 'Dimensionsstabilität', 'Boyutsal stabilite'),
        t('Matte surface', 'Matte Oberfläche', 'Mat yüzey')
      ],
      values: { viscosity: [250, 450, 0, 'mPa·s'], density: [1.08, 1.15, 2, 'g/cm³'], tensile: [45, 60, 0, 'MPa'], flexural: [70, 90, 0, 'MPa'],
                modulus: [1.8, 2.6, 1, 'GPa'], elongation: [4, 8, 0, '%'], hardness: [80, 86, 0, 'Shore D'], layer: [25, 100, 0, 'µm'] },
      note: t('Model accuracy depends on printer, orientation, supports and curing conditions.',
              'Die Modellgenauigkeit hängt von Drucker, Ausrichtung, Stützen und Härtungsbedingungen ab.',
              'Model doğruluğu; yazıcı, yönlendirme, destek ve kürleme koşullarına bağlıdır.'),
      design: t('A detail-focused approach to tooth surfaces, preparation details and model margins. Fit checks take post-print measurement, support position and model storage conditions into account.',
                'Ein detailorientierter Ansatz für Zahnoberflächen, Präparationsdetails und Modellgrenzen. Bei Passungskontrollen werden Messung nach dem Druck, Stützenposition und Lagerbedingungen des Modells berücksichtigt.',
                'Diş yüzeyleri, preparasyon ayrıntıları ve model sınırları için detay odaklı yaklaşım. Uyum kontrollerinde baskı sonrası ölçüm, destek konumu ve model saklama koşulları dikkate alınır.'),
      alt: t('Beige dental model of a lower jaw', 'Beigefarbenes Dentalmodell eines Unterkiefers', 'Bej alt çene dental modeli') },

    { id: 'lx-gc', code: 'LX-GC', name: ['Guide', 'Cure'], accent: '#4898B8', sectors: ['dental'], image: 'gc', bottle: false,
      cat: t('Guide geometries', 'Schablonengeometrien', 'Kılavuz geometrileri'),
      tagline: t('Give precision a direction.', 'Präzision eine Richtung geben.', 'Hassasiyete yön ver.'),
      desc: t('A product family with a focus on transparent appearance, developed for the positioning, clearance and geometry needs of guide designs.',
              'Eine Produktfamilie mit Fokus auf transparente Optik, entwickelt für die Anforderungen an Positionierung, Freiraum und Geometrie bei Schablonendesigns.',
              'Kılavuz tasarımlarındaki konumlandırma, açıklık ve geometri ihtiyaçları için geliştirilen, şeffaf görünüm odaklı ürün ailesi.'),
      focus: [
        t('Guide design studies', 'Schablonen-Designstudien', 'Kılavuz tasarım çalışmaları'),
        t('Positioning geometries', 'Positionierungsgeometrien', 'Konumlandırma geometrileri'),
        t('Fit and clearance evaluations', 'Beurteilung von Passung und Freiraum', 'Uyum ve açıklık değerlendirmeleri'),
        t('Transparent guide concepts', 'Transparente Schablonenkonzepte', 'Şeffaf kılavuz konseptleri')
      ],
      highlights: [
        t('Transparent appearance', 'Transparente Optik', 'Şeffaf görünüm'),
        t('Positioning geometries', 'Positionierungsgeometrien', 'Konumlandırma geometrileri'),
        t('Fit and clearance', 'Passung und Freiraum', 'Uyum ve açıklık')
      ],
      values: { viscosity: [300, 500, 0, 'mPa·s'], density: [1.08, 1.14, 2, 'g/cm³'], tensile: [50, 65, 0, 'MPa'], flexural: [75, 90, 0, 'MPa'],
                modulus: [1.8, 2.5, 1, 'GPa'], elongation: [6, 10, 0, '%'], hardness: [78, 84, 0, 'Shore D'], layer: [50, 100, 0, 'µm'] },
      note: t('Suitability for clinical use and sterilisation is determined by the relevant product validation.',
              'Die Eignung für klinische Anwendung und Sterilisation wird durch die jeweilige Produktvalidierung bestimmt.',
              'Klinik kullanım ve sterilizasyon uygunluğu, ilgili ürün doğrulamasıyla belirlenir.'),
      design: t('When guide openings and metal insert seats are designed, dimensional tolerances are checked separately. The transparent appearance is verified together with the cleaning and post-curing recipe.',
                'Bei der Konstruktion von Führungsöffnungen und Sitzen für Metallhülsen werden die Maßtoleranzen gesondert geprüft. Die transparente Optik wird zusammen mit dem Reinigungs- und Nachhärteprotokoll verifiziert.',
                'Kılavuz açıklıkları ve metal insert yuvaları tasarlanırken ölçü toleransları ayrıca kontrol edilir. Şeffaf görünüm, temizleme ve son kürleme reçetesiyle birlikte doğrulanır.'),
      alt: t('Transparent blue guide with metal sleeves', 'Transparente blaue Schablone mit Metallhülsen', 'Metal kovanlı şeffaf mavi kılavuz') },

    { id: 'lx-gic', code: 'LX-GIC', name: ['Gingiva', 'Cure'], accent: '#C87080', sectors: ['dental'], image: 'gic', bottle: true,
      cat: t('Soft tissue modeling', 'Weichgewebemodellierung', 'Yumuşak doku modelleme'),
      tagline: t('See the whole model.', 'Das ganze Modell sehen.', 'Modelin bütününü gör.'),
      desc: t('A product family focused on pink appearance and flexibility, intended to represent the soft tissue areas of dental models.',
              'Eine Produktfamilie mit Fokus auf rosa Optik und Flexibilität, zur Darstellung der Weichgewebebereiche dentaler Modelle.',
              'Dental modellerin yumuşak doku bölümlerini temsil etmeye yönelik, pembe görünüm ve esneklik odaklı ürün ailesi.'),
      focus: [
        t('Gingiva mask models', 'Gingivamasken-Modelle', 'Gingiva maskesi modelleri'),
        t('Implant planning models', 'Modelle für die Implantatplanung', 'İmplant planlama modelleri'),
        t('Dental training and demonstration', 'Dentale Ausbildung und Demonstration', 'Dental eğitim ve gösterim'),
        t('Soft tissue representation', 'Weichgewebedarstellung', 'Yumuşak doku temsili')
      ],
      highlights: [
        t('Natural pink tone', 'Natürlicher Rosaton', 'Doğal pembe ton'),
        t('Controlled flexibility', 'Kontrollierte Flexibilität', 'Kontrollü esneklik'),
        t('Tear resistance', 'Reißfestigkeit', 'Yırtılma direnci')
      ],
      values: { viscosity: [400, 700, 0, 'mPa·s'], density: [1.05, 1.12, 2, 'g/cm³'], tensile: [4, 8, 0, 'MPa'], elongation: [60, 120, 0, '%'],
                hardness: [75, 85, 0, 'Shore A'], tear: [15, 25, 0, 'kN/m'], layer: [50, 100, 0, 'µm'] },
      note: t('Flexibility and tear behaviour should be evaluated together with part thickness and post-curing.',
              'Flexibilität und Reißverhalten sollten zusammen mit Bauteildicke und Nachhärtung bewertet werden.',
              'Esneklik ve yırtılma davranışı, parça kalınlığı ve son kürlemeyle birlikte değerlendirilmelidir.'),
      design: t('Modeling gingiva areas as a separate flexible part; evaluating removable masks and peri-implant geometries. In thin sections, tear and re-seating behaviour are assessed.',
                'Modellierung der Gingivabereiche als separates flexibles Teil; Beurteilung von abnehmbaren Masken und periimplantären Geometrien. Bei dünnen Querschnitten werden Reiß- und Wiedereinsetzverhalten beurteilt.',
                'Gingiva bölgelerinin ayrı bir esnek parça olarak modellenmesi; sökülebilir maske ve implant çevresi geometrilerinin değerlendirilmesi. İnce kesitlerde yırtılma ve tekrar takma davranışı değerlendirilir.'),
      alt: t('Dental model with a pink gingiva mask', 'Dentalmodell mit rosa Gingivamaske', 'Pembe gingiva maskeli dental model') }
  ];

  /* ---------- The ten specialised families ---------- */
  const families = [
    { code: 'LX-CC', name: 'Crown Cure', sectors: ['dental'], use: t('Permanent crowns and restorations', 'Permanente Kronen und Restaurationen', 'Kalıcı kron ve restorasyon') },
    { code: 'LX-TC', name: 'Temp Cure', sectors: ['dental'], use: t('Temporary crowns and bridges', 'Provisorische Kronen und Brücken', 'Geçici kron ve köprü') },
    { code: 'LX-SC', name: 'Splint Cure', sectors: ['dental'], use: t('Splints and night guards', 'Schienen und Aufbissschienen', 'Splint ve gece plağı') },
    { code: 'LX-TRC', name: 'Tray Cure', sectors: ['dental'], use: t('Custom impression trays', 'Individuelle Abformlöffel', 'Kişisel ölçü kaşığı') },
    { code: 'LX-DC', name: 'Denture Cure', sectors: ['dental'], use: t('Denture bases', 'Prothesenbasen', 'Protez kaidesi') },
    { code: 'LX-TEC', name: 'Teeth Cure', sectors: ['dental'], use: t('Denture teeth', 'Prothesenzähne', 'Protez dişleri') },
    { code: 'LX-OC', name: 'Ortho Cure', sectors: ['dental'], use: t('Orthodontic modeling', 'Kieferorthopädische Modelle', 'Ortodontik modelleme'),
      desc: t('Focused on orthodontic working models and geometry evaluations.', 'Für kieferorthopädische Arbeitsmodelle und Geometriebeurteilungen.', 'Ortodontik çalışma modelleri ve geometri değerlendirmelerine odaklanır.') },
    { code: 'LX-CAC', name: 'Cast Cure', sectors: ['engineering'], use: t('Casting', 'Guss', 'Döküm'),
      desc: t('A pattern and model oriented product family for precision casting workflows.', 'Eine auf Muster und Modelle ausgerichtete Produktfamilie für Feingussabläufe.', 'Hassas döküm iş akışları için desen ve model odaklı ürün ailesi.') },
    { code: 'LX-BC', name: 'Bulk Cure', sectors: ['engineering', 'modeling'], use: t('Thick layers, fast printing', 'Dicke Schichten, schneller Druck', 'Kalın katman, hızlı baskı'),
      desc: t('A product family focused on layer strategy and print efficiency.', 'Eine Produktfamilie mit Fokus auf Schichtstrategie und Druckeffizienz.', 'Katman stratejisi ve baskı verimliliği odaklı ürün ailesi.') },
    { code: 'LX-CLC', name: 'Clear Cure', sectors: ['modeling'], use: t('Transparent applications', 'Transparente Anwendungen', 'Şeffaf uygulamalar'),
      desc: t('Special geometry and modeling work that calls for a transparent appearance.', 'Spezielle Geometrie- und Modellarbeiten, die eine transparente Optik erfordern.', 'Şeffaf görünüm gerektiren özel geometri ve modelleme çalışmaları.') }
  ];

  window.LX = { ui, props, sectors, products, families };
})();

export interface WeddingEvent {
  id: string;
  name: string;
  nameEn: string;
  time: string;
  timeEn: string;
  date: string;
  dateEn: string;
  locationNote?: string;
  associatedFamily: string[];
  description: string;
  iconType: 'mandap' | 'jaan' | 'dinner' | 'hastmelap';
}

export interface FamilySection {
  title: string;
  titleEn: string;
  subtitle?: string;
  members: string[];
}

export const WEDDING_DATA = {
  couple: {
    bride: {
      name: "ચિ. ડો. નેન્સી",
      nameEn: "Chi. Dr. Nancy",
      title: "ડોક્ટર (Dr.)",
      relation: "સુપુત્રી",
      parents: "અ.સો. અસ્મિતાબેન તથા શ્રી જીતુભાઇ ઉકાભાઇ કુકડીયા",
      nativePlace: "બહાદુરગઢ નિવાસી (હાલ સુરત)",
      familyTitle: "કુકડીયા પરિવાર",
    },
    groom: {
      name: "ચિ. હર્ષલ",
      nameEn: "Chi. Harshal",
      relation: "સુપુત્ર",
      parents: "અ.સો. તરુણાબેન તથા હસમુખભાઈ હીરાભાઈ ડાંખરા",
      nativePlace: "સેંજળીયા નિવાસી (હાલ સુરત)",
      familyTitle: "ડાંખરા પરિવાર",
    },
  },
  dates: {
    weddingDay: "સોમવાર, ૧૪ ડિસેમ્બર ૨૦૨૬",
    weddingDayEn: "Monday, 14 December 2026",
    vikramSamvat: "વિક્રમ સંવત ૨૦૮૩ના માગશર સુદ પાંચમ",
    isoTargetDate: "2026-12-14T07:00:00+05:30",
  },
  kuldevi: {
    name: "|| આઈ શ્રી ખોડિયાર માતાજી ||",
    shlok: "રિદ્ધિ સિદ્ધિ સહિત પધારજો ગૌરી નંદન ગણેશ। સહકુટુંબ સહિત પધારજો બ્રહ્મા, વિષ્ણુ, મહેશ॥",
    ganeshMantra: "|| શ્રી ગણેશાય નમઃ ||",
  },
  hosts: {
    title: "|| નિમંત્રક ||",
    titleEn: "Invitation Hosts",
    members: [
      "શ્રી ઉકાભાઇ લવજીભાઈ કુકડીયા",
      "શ્રી જીતુભાઇ ઉકાભાઇ કુકડીયા",
      "શ્રી ભાર્ગવ જીતુભાઈ કુકડીયા",
    ],
    address: "એ-૫૦૪, અનમોલ હાઈટ્સ, શાંગ્રીલા હાઈટ્સ ની સામે, વી.આઈ.પી સર્કલ, ઉત્રાણ, સુરત.",
    phones: ["9998781120", "8980090833"],
  },
  events: [
    {
      id: "mandap-muhurat",
      name: "મંડપ મુહૂર્ત",
      nameEn: "Mandap Muhurat",
      time: "સવારે ૭:૦૦ કલાકે",
      timeEn: "Morning 07:00 AM",
      date: "સોમવાર, તા:- ૧૪/૧૨/૨૦૨૬",
      dateEn: "Monday, 14 Dec 2026",
      locationNote: "“કાન્હાવન ફાર્મ પધારશો”",
      associatedFamily: [
        "અ.સો. અસ્મિતાબેન જે. કુકડીયા",
        "અ.સો. શારદાબેન વી. કુકડીયા",
      ],
      description: "શુભ ગણેશ સ્થાપના અને મંડપ પૂજન વિધિ સાથે લગ્નોત્સવનો શુભારંભ.",
      iconType: "mandap",
    },
    {
      id: "jaan-aagaman",
      name: "જાન આગમન",
      nameEn: "Jaan Aagaman (Baraat)",
      time: "સાંજે ૬:૦૦ કલાકે",
      timeEn: "Evening 06:00 PM",
      date: "સોમવાર, તા:- ૧૪/૧૨/૨૦૨૬",
      dateEn: "Monday, 14 Dec 2026",
      associatedFamily: [
        "અ.સો. વસંતબેન કે. કુકડીયા",
        "અ.સો. કાજલબેન આર. કુકડીયા",
      ],
      description: "વરપક્ષની ભવ્ય જાનનું સામૈયું અને હાર્દિક શાહી સ્વાગત.",
      iconType: "jaan",
    },
    {
      id: "swaruchi-bhojan",
      name: "સ્વરુચિ ભોજન",
      nameEn: "Swaruchi Bhojan (Royal Banquet)",
      time: "સાંજે ૬:૩૦ કલાકે",
      timeEn: "Evening 06:30 PM",
      date: "સોમવાર, તા:- ૧૪/૧૨/૨૦૨૬",
      dateEn: "Monday, 14 Dec 2026",
      locationNote: "આપ શ્રી સજોડે પધારશો.",
      associatedFamily: [],
      description: "કાઠિયાવાડી તથા સ્વાદિષ્ટ શાહી ભોજન સમારંભ. આપ શ્રી સજોડે પધારી મિજબાની માણશો.",
      iconType: "dinner",
    },
    {
      id: "hast-melap",
      name: "હસ્ત મેળાપ",
      nameEn: "Hasta Melap (Sacred Nuptials)",
      time: "સાંજે ૭:૧૫ કલાકે",
      timeEn: "Evening 07:15 PM",
      date: "સોમવાર, તા:- ૧૪/૧૨/૨૦૨૬",
      dateEn: "Monday, 14 Dec 2026",
      associatedFamily: [
        "અ.સો. અસ્મિતાબેન જે. કુકડીયા",
      ],
      description: "વેદોક્ત મંત્રોચ્ચાર અને મંગલ ફેરા સાથે નવદંપતીનું પવિત્ર મિલન.",
      iconType: "hastmelap",
    },
  ] as WeddingEvent[],
  mameru: {
    title: "|| અમારા માયાળુ મામેરીયા ||",
    titleEn: "Maternal Family (Mameru)",
    native: "(ઘેટી)",
    members: [
      "શ્રી ગોરધનભાઈ બચુભાઈ સભાડીયા",
      "શ્રી દલપતભાઈ બચુભાઈ સભાડીયા",
      "શ્રી અશોકભાઈ બચુભાઈ સભાડીયા",
      "શ્રી અતુલભાઈ ગોરધનભાઈ સભાડીયા",
    ],
  },
  bhanej: {
    title: "|| અમારા વ્હાલા ભાણેજ ||",
    titleEn: "Beloved Nephews (Bhanej)",
    members: [
      "દર્શક વિઠ્ઠલભાઈ ડાંખરા",
      "કેવિન વિઠ્ઠલભાઈ ડાંખરા",
      "બ્રિજેશ પ્રવિણભાઇ કળથિયા",
      "શ્રેય હિતેષભાઇ સુતરીયા",
      "આર્યન હિતેષભાઈ સુતરીયા",
    ],
  },
  rudaAashirwad: {
    title: "|| રૂડા આશીર્વાદ ||",
    titleEn: "Elder's Auspicious Blessings",
    members: [
      "સ્વ. લવજીભાઈ રાઘવભાઈ કુકડીયા",
      "શ્રી ઉકાભાઇ લવજીભાઈ કુકડીયા",
      "શ્રી કાનજીભાઈ લવજીભાઈ કુકડીયા",
      "શ્રી નાનજીભાઈ લવજીભાઈ કુકડીયા",
    ],
  },
  snehadhin: {
    title: "|| સ્નેહાધિન ||",
    titleEn: "With Love & Regards (Affectionate Family)",
    column1: [
      "શ્રી ઉકાભાઇ લવજીભાઈ કુકડીયા",
      "શ્રી કાનજીભાઈ લવજીભાઈ કુકડીયા",
      "શ્રી નાનજીભાઈ લવજીભાઈ કુકડીયા",
      "શ્રી કલ્યાણભાઈ ઉકાભાઇ કુકડીયા",
      "શ્રી વલ્લભભાઈ ઉકાભાઇ કુકડીયા",
    ],
    column2: [
      "શ્રી જીતુભાઇ ઉકાભાઇ કુકડીયા",
      "શ્રી નરશીભાઈ કાનજીભાઈ કુકડીયા",
      "શ્રી વિનુભાઈ કાનજીભાઈ કુકડીયા",
      "શ્રી પરેશભાઈ નાનજીભાઈ કુકડીયા",
      "શ્રી હરેશભાઇ નાનજીભાઈ કુકડીયા",
    ],
  },
  aavkarvaAatur: {
    title: "|| આવકારવા આતુર ||",
    titleEn: "Eagerly Waiting to Welcome You",
    column1: [
      "શ્રી રોહિત કલ્યાણભાઈ કુકડીયા",
      "શ્રી ગોપાલ કલ્યાણભાઈ કુકડીયા",
      "શ્રી જેમિશ વલ્લભભાઈ કુકડીયા",
      "શ્રી વેનિસ વલ્લભભાઈ કુકડીયા",
      "શ્રી ભાર્ગવ જીતુભાઇ કુકડીયા",
      "શ્રી હેનીલ પરેશભાઈ કુકડીયા",
    ],
    column2: [
      "શ્રી નીલ વિનુભાઈ કુકડીયા",
      "શ્રી પ્રિન્સ વિનુભાઈ કુકડીયા",
      "શ્રી ખુશ નરશીભાઈ કુકડીયા",
      "શ્રી મન હરેશભાઇ કુકડીયા",
      "શ્રી મંત્ર રોહિતભાઈ કુકડીયા",
      "શ્રી ક્રિશિવ જેમિશભાઈ કુકડીયા",
    ],
  },
  tahuko: {
    title: "|| ટહુકો ||",
    titleEn: "Tahuko (Niece's Heartfelt Invitation)",
    verses: [
      "મારી ફોઈનાં લગ્નનો આવ્યો રૂડો અવસર,",
      "ભત્રીજીના હૈયામાં આનંદ અપાર.",
      "મંગળ ઘડીએ પધારજો સૌ પરિવાર સાથે,",
      "ફોઈનાં લગ્ન શોભાવજો આશીર્વાદ સાથે,",
    ],
    signature: "વાણી, ધ્યાના.....",
  },
  venue: {
    name: "કાન્હાવન ફાર્મ",
    nameEn: "Kanhavan Farm",
    addressLines: [
      "કાન્હાવન ફાર્મ,",
      "દુખિયાનો દરબાર રોડ,",
      "કર્મ વેલી બંગલૉ ની પાછળ, મોટા",
      "વરાછા, સુરત.",
    ],
    fullAddress: "કાન્હાવન ફાર્મ, દુખિયાનો દરબાર રોડ, કર્મ વેલી બંગલૉ ની પાછળ, મોટા વરાછા, સુરત.",
    googleMapsUrl: "https://maps.app.goo.gl/F78n6UuHz1aMfAFz5",
  },
  rsvpNote: {
    heading: "આપના આગમનની પ્રતિક્ષામાં",
    familySignature: "કુકડીયા પરિવાર",
    message: [
      "અમારી સુપુત્રી",
      "ચિ. ડો. નેન્સી ના",
      "લગ્ન નું આ ડિજિટલ આમંત્રણ ને",
      "રૂબરૂ મળ્યા તુલ્ય સમજી",
      "અમારે આંગણે આવેલ પ્રસંગમાં પધારશોજી.",
      "અમારું આ આમંત્રણ આપને મળે એટલે તુરંત",
      "OK",
      "દ્વારા જવાબ આપવા વિનંતિ",
    ],
  },
  originalCards: [
    { page: 1, title: "કવર પેજ - શ્રી ગણેશાય નમઃ & નિમંત્રક", src: "/assets/cards/page_1.png" },
    { page: 2, title: "આનંદનો અવસર - લગ્ન ઉત્સવ વિધિ", src: "/assets/cards/page_2.png" },
    { page: 3, title: "મામેરીયા, ભાણેજ & લગ્ન સ્થળ", src: "/assets/cards/page_3.png" },
    { page: 4, title: "પરિણય સંસ્કાર & રૂડા આશીર્વાદ", src: "/assets/cards/page_4.png" },
    { page: 5, title: "સ્નેહાધિન, આવકારવા આતુર & ટહુકો", src: "/assets/cards/page_5.png" },
    { page: 6, title: "ડિજિટલ આમંત્રણ & આગમનની પ્રતિક્ષામાં", src: "/assets/cards/page_6.png" },
  ],
};


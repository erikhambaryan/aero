import { Language } from '../types/language';

export const translations = {
  [Language.Armenian]: {
    nav: {
      about: 'ՄԵՐ ՄԱՍԻՆ',
      mission: 'ԱՌԱՔԵԼՈՒԹՅՈՒՆ',
      services: 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ',
      experts: 'ԱԲՓ',
      contact: 'ԿԱՊ',
    },
    hero: {
      title: 'Ավիաբուժ Բժշկական Կենтրոն',
      description: 'տեքստ',
      learnMore: 'Ավելին',
    },
    about: {
      title: 'ՄԵՐ ՄԱՍԻՆ',
      description: '«Ավիաբուժ» բժշկական կենտրոն» փակ բաժնետիրական ընկերությունը /այսուհետ` Ընկերություն /ստեղծվել է (վերակազմակերպվել է) Հայաստանի Հանրապետության կառավարության 16.12.2000թ. թիվ 828 որոշման և ՀՀ ԿԱ քաղաքացիական ավիացիայի գլխավոր վարչության պետի 09.01.2001թ. թիվ 3 հրամանի հիման վրա «Զվարթնոց» ՄՕ ՓԲԸ առանձնացման ճանապարհով:',
      // Add all other Armenian texts from AboutContent component
    },
    mission: {
      title: 'ԸՆԿԵՐՈՒԹՅԱՆ ԱՌԱՔԵԼՈՒԹՅՈՒՆԸ',
      // Add all other Armenian texts from the mission section
    },
    services: {
      title: 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ',
      // Add all Armenian services texts
    },
    experts: {
      title: 'Ավիաբժշկական փորձագետներ',
      subtitle: 'Ավիաբժշկական փորձագետներ/ԱԲՓ/',
      // Add expert details
    },
    contact: {
      title: 'Կապնվեք Մեր Հետ',
      description: 'Հարցերի դեպէում առկա են հեռախոսահամար և էլ. հասցե:',
      // Add contact details
    },
  },
  [Language.Russian]: {
    nav: {
      about: '(RUS) О НАС',
      mission: '(RUS) МИССИЯ',
      services: '(RUS) УСЛУГИ',
      experts: '(RUS) АМЭ',
      contact: '(RUS) КОНТАКТЫ',
    },
    hero: {
      title: '(RUS) Авиамед Медицинский Центр',
      description: '(RUS) текст',
      learnMore: '(RUS) Подробнее',
    },
    about: {
      title: '(RUS) О НАС',
      description: '(RUS) «Авиамед» медицинский центр» закрытое акционерное общество /далее - Общество/ создано (реорганизовано) на основании постановления Правительства РА от 16.12.2000г. № 828 и приказа начальника Главного управления гражданской авиации при Правительстве РА от 09.01.2001г. № 3 путем выделения из ЗАО «Звартноц».',
      // Add Russian translations for all AboutContent texts
    },
    // Add other Russian translations following the same pattern
  },
  [Language.English]: {
    nav: {
      about: '(ENG) ABOUT US',
      mission: '(ENG) MISSION',
      services: '(ENG) SERVICES',
      experts: '(ENG) AME',
      contact: '(ENG) CONTACT',
    },
    hero: {
      title: '(ENG) AviaMed Medical Center',
      description: '(ENG) text',
      learnMore: '(ENG) Learn More',
    },
    about: {
      title: '(ENG) ABOUT US',
      description: '(ENG) "AviaMed Medical Center" Closed Joint Stock Company /hereinafter - the Company/ was established (reorganized) based on the RA Government Decree No. 828 dated 16.12.2000 and the order No. 3 dated 09.01.2001 of the Head of the General Department of Civil Aviation under the RA Government through separation from "Zvartnots" CJSC.',
      // Add English translations for all AboutContent texts
    },
    // Add other English translations following the same pattern
  },
} as const;
import { Language } from '../types/language';

interface Expert {
  name: string;
  code: string;
  workDays: string;
  workHours: string;
}

export const experts: Record<Language, Expert[]> = {
  [Language.Armenian]: [
    {
      name: 'ՌԻՏԱ ՎԱՐԴԱՆԻ ՄՈՎՍԵՍՅԱՆ',
      code: 'ԱԲՓ 1',
      workDays: 'I, II, III, IV, V',
      workHours: '09:00-16:00',
    },
    {
      name: 'ԷԼԵՈՆՈՐԱ ՎԱՐԴԱՆԻ ՄԱՐՏԻՐՈՍՅԱՆ',
      code: 'ԱԲՓ 4',
      workDays: 'I, II, III, IV, V',
      workHours: '09:00-17:20',
    },
    {
      name: 'ՏԻԳՐԱՆ ԳԱԼՈՒՍՏԻ ՍԱՀԱԿՅԱՆ',
      code: 'ԱԲՓ 5',
      workDays: 'II, IV, V',
      workHours: '09:00-13:00',
    },
  ],
  [Language.Russian]: [
    {
      name: 'РИТА ВАРДАНОВНА МОВСЕСЯН',
      code: 'АМЭ 1',
      workDays: 'I, II, III, IV, V',
      workHours: '09:00-16:00',
    },
    {
      name: 'ЭЛЕОНОРА ВАРДАНОВНА МАРТИРОСЯН',
      code: 'АМЭ 4',
      workDays: 'I, II, III, IV, V',
      workHours: '09:00-17:20',
    },
    {
      name: 'ТИГРАН ГАЛУСТОВИЧ СААКЯН',
      code: 'АМЭ 5',
      workDays: 'II, IV, V',
      workHours: '09:00-13:00',
    },
  ],
  [Language.English]: [
    {
      name: 'RITA V. MOVSESYAN',
      code: 'AME 1',
      workDays: 'I, II, III, IV, V',
      workHours: '09:00-16:00',
    },
    {
      name: 'ELEONORA V. MARTIROSYAN',
      code: 'AME 4',
      workDays: 'I, II, III, IV, V',
      workHours: '09:00-17:20',
    },
    {
      name: 'TIGRAN G. SAHAKYAN',
      code: 'AME 5',
      workDays: 'II, IV, V',
      workHours: '09:00-13:00',
    },
  ],
};
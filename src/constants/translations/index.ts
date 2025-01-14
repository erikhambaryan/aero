import { Language } from '../../types/language';
import type { TranslationSchema } from '../../types/language';
import { armenianTranslations } from './armenian';
import { russianTranslations } from './russian';
import { englishTranslations } from './english';

export const translations: Record<Language, TranslationSchema> = {
  [Language.Armenian]: armenianTranslations,
  [Language.Russian]: russianTranslations,
  [Language.English]: englishTranslations,
};
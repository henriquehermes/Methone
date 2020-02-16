const LANGUAGE = 'en-US';
// TO GET THE DEVICE LANGUAGE, INSTALL DEVICE INFO AND USE THE CODE BELOW
// const LANGUAGE = DeviceInfo.getDeviceLocale().substring(0,2)

let currentLanguageStrings;

switch (LANGUAGE) {
    case 'en-US':
        currentLanguageStrings = require('./en-US');
        break;
        // case "pt": IF EXISTS
        //     currentLanguageStrings = require("./strings/pt-BR")
        break;
    default:
        currentLanguageStrings = require('./en-US');
}

export const ONBOARDING_STRINGS = currentLanguageStrings.ONBOARDING;
export const QUESTIONS_STRINGS = currentLanguageStrings.QUESTIONS;
export const SCORE_STRINGS = currentLanguageStrings.SCORE;

const LANGUAGE = 'en-US';
// TO GET THE DEVICE LANGUAGE, USE THE CODE BELOW
// const LANGUAGE = DeviceInfo.getDeviceLocale().substring(0,2)

let currentLanguageStrings;

switch (LANGUAGE) {
    case 'en-US':
        currentLanguageStrings = require('./en-US');
        break;
        // case "pt":
        //     currentLanguageStrings = require("./strings/pt-BR")
        break;
    default:
        currentLanguageStrings = require('./en-US');
}

export const ONBOARDING_STRINGS = currentLanguageStrings.ONBOARDING;
export const QUESTIONS_STRINGS = currentLanguageStrings.QUESTIONS;
export const SCORE_STRINGS = currentLanguageStrings.SCORE;

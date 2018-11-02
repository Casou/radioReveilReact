export const MOIS_COMPLETS = Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
export const MOIS_COURTS = Array('Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc');
export const JOURS_COMPLETS = Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
export const JOURS_COURTS = Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');

export const lpad10 = (time) => {
    return time <= 9 ? '0' + time : time;
};

export const WEATHER_API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
export const WEATHER_API_KEY = '4c970dd9b513b67c4225c0aa1ba0acb5';
// export const WEATHER_API_LILLE_ID = 6454414;
export const WEATHER_API_FACHES_ID = 6614164;

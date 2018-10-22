export const MOIS_COMPLETS = Array('Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre');
export const MOIS_COURTS = Array('Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc');
export const JOURS_COMPLETS = Array('Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi');
export const JOURS_COURTS = Array('Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam');

export const lpadTime = (time) => {
    return time <= 9 ? '0' + time : time;
};
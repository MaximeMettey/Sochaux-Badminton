// ===================================
// Configuration du site - EXEMPLE
// ===================================
// IMPORTANT: Copiez ce fichier en config.js et remplissez vos vraies valeurs

const CONFIG = {
    // Clé API Web3Forms
    // Obtenez votre clé gratuite sur https://web3forms.com
    // 1. Allez sur https://web3forms.com
    // 2. Entrez contact@sochauxbadminton.com
    // 3. Vérifiez votre email et copiez la clé
    // 4. Collez-la ci-dessous dans config.js (pas dans ce fichier)
    web3formsKey: 'VOTRE_CLE_API_ICI',

    // Email de destination (doit correspondre à celui utilisé pour créer la clé)
    contactEmail: 'contact@sochauxbadminton.com',

    // URL du site (pour la redirection après envoi)
    siteUrl: window.location.origin
};

// Ne pas modifier le code ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

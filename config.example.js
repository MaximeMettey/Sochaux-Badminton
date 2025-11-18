// ===================================
// Configuration du site - EXEMPLE
// ===================================
// IMPORTANT: Copiez ce fichier en config.js et remplissez vos vraies valeurs

const CONFIG = {
    // Clé hCaptcha (Site Key)
    // 1. Allez sur https://dashboard.hcaptcha.com/sites
    // 2. Créez un nouveau site (ou utilisez un existant)
    // 3. Copiez la "Site Key" (clé publique)
    // 4. Collez-la ci-dessous dans config.js
    // Note: La Site Key peut être publique, c'est normal !
    hcaptchaSiteKey: 'VOTRE_SITE_KEY_HCAPTCHA_ICI',

    // Email de destination
    contactEmail: 'contact@sochauxbadminton.com',

    // URL de redirection après soumission (optionnel)
    // Exemple: 'https://sochauxbadminton.com/merci.html'
    // Si vide, FormSubmit affichera sa page de confirmation par défaut
    redirectUrl: ''
};

// Ne pas modifier le code ci-dessous
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

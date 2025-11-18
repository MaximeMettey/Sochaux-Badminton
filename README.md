# 🏸 Sochaux Badminton - Site Web Officiel

Site web moderne et responsive pour le club de badminton de Sochaux.

## ✨ Fonctionnalités

- **Design moderne** avec animations fluides
- **Responsive** - compatible mobile, tablette et desktop
- **Thème sombre** avec couleurs jaune et bleu du club
- **Formulaire de contact** intégré
- **Téléchargement de documents** (fiches d'inscription)
- **Animations au scroll** pour une expérience dynamique
- **Aucune dépendance** - HTML, CSS et JavaScript vanilla

## 🚀 Déploiement

### Option 1 : GitHub Pages (Recommandé)

1. Pushez votre code sur GitHub
2. Allez dans **Settings** > **Pages**
3. Sélectionnez la branche `main` et le dossier `/root`
4. Votre site sera disponible à `https://votre-username.github.io/Sochaux-Badminton`

### Option 2 : Netlify

1. Créez un compte sur [Netlify](https://www.netlify.com)
2. Glissez-déposez le dossier complet du projet
3. Votre site sera déployé automatiquement

### Option 3 : Vercel

1. Installez Vercel CLI : `npm i -g vercel`
2. Dans le dossier du projet : `vercel`
3. Suivez les instructions

### Option 4 : Serveur local

Ouvrez simplement `index.html` dans votre navigateur, ou utilisez un serveur HTTP simple :

```bash
# Python 3
python -m http.server 8000

# Node.js (avec http-server)
npx http-server
```

Puis ouvrez `http://localhost:8000`

## 📁 Structure du projet

```
Sochaux-Badminton/
├── index.html          # Page principale
├── style.css           # Styles et animations
├── script.js           # Interactions JavaScript
├── config.js           # Configuration (clé API - ne pas commit)
├── config.example.js   # Exemple de configuration
├── documents/          # Documents téléchargeables
│   ├── fiche-inscription.pdf
│   └── decharge-mineur.pdf
└── README.md          # Ce fichier
```

## ✉️ Configuration du formulaire de contact

Le site utilise **FormSubmit.co** avec **hCaptcha** pour l'envoi d'emails (gratuit, illimité, avec protection antispam).

### Étape 1 : Premier envoi de test (activation FormSubmit)

1. Ouvrez `index.html` dans votre navigateur
2. Remplissez et envoyez le formulaire UNE FOIS
3. **Important** : Vous recevrez un email de confirmation de FormSubmit
4. Cliquez sur le lien dans l'email pour activer le formulaire

### Étape 2 : Configurer hCaptcha (protection antispam)

1. Allez sur [dashboard.hcaptcha.com](https://dashboard.hcaptcha.com/)
2. Connectez-vous avec votre compte hCaptcha
3. Allez dans "Sites" et créez un nouveau site (ou utilisez un existant)
4. Copiez la **Site Key** (clé publique)

### Étape 3 : Configurer le site

1. Copiez `config.example.js` en `config.js` :
   ```bash
   cp config.example.js config.js
   ```

2. Ouvrez `config.js` et collez votre Site Key hCaptcha

3. C'est tout ! Le formulaire est maintenant protégé 🎉

### Protection antispam incluse

- **hCaptcha** : Captcha moderne et respectueux de la vie privée
- **Honeypot** : Piège invisible pour attraper les robots
- **FormSubmit** : Validation côté serveur automatique

> **Note** : La Site Key hCaptcha est publique (normale dans le HTML). Le fichier `config.js` peut être commité si vous le souhaitez.

## 📄 Documents à ajouter

Placez vos PDF dans le dossier `documents/` :

- `fiche-inscription.pdf` - Fiche d'inscription au club
- `decharge-mineur.pdf` - Décharge pour les mineurs non accompagnés

## 🎨 Personnalisation

### Couleurs

Les couleurs principales sont définies dans `style.css` (lignes 5-8) :

```css
--primary-color: #FFD700;    /* Jaune */
--secondary-color: #1E90FF;  /* Bleu */
--dark-bg: #0a0e27;          /* Fond sombre */
```

### Contenu

Modifiez directement le texte dans `index.html` pour personnaliser :
- Les horaires
- Les tarifs
- Les informations de contact
- Le contenu des sections

### Email de contact

L'email est configuré dans plusieurs endroits :
- `index.html` - Section contact et footer
- `script.js` - Formulaire de contact (ligne 127)

## 🌟 Fonctionnalités techniques

- **Navigation sticky** avec effet au scroll
- **Menu burger** responsive pour mobile
- **Animations CSS** avec Intersection Observer
- **Compteurs animés** pour les statistiques
- **Effet parallax** sur la section hero
- **Formulaire mailto** pour le contact
- **Particules animées** sur le fond
- **Trail du curseur** (desktop uniquement)

## 📱 Compatibilité

- ✅ Chrome, Firefox, Safari, Edge (dernières versions)
- ✅ iOS Safari 12+
- ✅ Android Chrome 80+
- ✅ Responsive de 320px à 4K

## 🔧 Technologies utilisées

- HTML5 sémantique
- CSS3 avec variables CSS et animations
- JavaScript ES6+ vanilla
- Google Fonts (Inter)

## 📞 Support

Pour toute question concernant le site web, contactez :
**contact@sochauxbadminton.com**

## 📝 Licence

© 2024 Sochaux Badminton. Tous droits réservés.

---

**Made with ❤️ for Sochaux Badminton**

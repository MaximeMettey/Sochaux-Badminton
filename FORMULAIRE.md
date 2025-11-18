# 📧 Configuration du Formulaire de Contact

Ce guide explique comment activer le formulaire de contact avec **FormSubmit.co** et **hCaptcha**.

## 🚀 Solution : FormSubmit + hCaptcha (Gratuit)

### Avantages
- ✅ **100% gratuit** et illimité
- ✅ **Aucune inscription** nécessaire pour FormSubmit
- ✅ **hCaptcha** : Protection antispam moderne
- ✅ **Aucun backend** requis
- ✅ **Configuration en 3 minutes**
- ✅ Emails reçus directement dans votre boîte

---

## 📝 Configuration Étape par Étape

### Étape 1 : Activer FormSubmit (1ère utilisation)

FormSubmit nécessite une confirmation par email lors de la première utilisation.

1. **Ouvrez le site** : Lancez `index.html` dans votre navigateur
2. **Remplissez le formulaire** avec vos vraies données
3. **Soumettez-le** : Cliquez sur "Envoyer"
4. **Vérifiez votre email** : Vous recevrez un message de FormSubmit
5. **Confirmez** : Cliquez sur le lien de confirmation dans l'email

> ✅ Après confirmation, tous les futurs emails seront envoyés automatiquement !

### Étape 2 : Configurer hCaptcha

Vous avez déjà un compte hCaptcha, parfait !

#### A. Récupérer votre Site Key

1. Allez sur [https://dashboard.hcaptcha.com/sites](https://dashboard.hcaptcha.com/sites)
2. Connectez-vous avec votre compte
3. **Option 1 : Site existant**
   - Sélectionnez un site existant
   - Copiez la **Site Key** (sitekey)
4. **Option 2 : Nouveau site**
   - Cliquez sur "New Site"
   - Nom : "Sochaux Badminton"
   - Domaines : Laissez vide pour tester en local, ou ajoutez `sochauxbadminton.com`
   - Copiez la **Site Key** générée

> 📝 La Site Key ressemble à : `10000000-ffff-ffff-ffff-000000000001`

#### B. Configurer le site

1. **Copiez le fichier de config** :
   ```bash
   cp config.example.js config.js
   ```

2. **Éditez config.js** :
   ```javascript
   const CONFIG = {
       hcaptchaSiteKey: 'COLLEZ_VOTRE_SITE_KEY_ICI',
       contactEmail: 'contact@sochauxbadminton.com',
       redirectUrl: '' // Optionnel
   };
   ```

3. **Sauvegardez** le fichier

### Étape 3 : Tester

1. Ouvrez `index.html` dans votre navigateur
2. Remplissez le formulaire
3. **Validez le hCaptcha** (case à cocher)
4. Cliquez sur "Envoyer"
5. ✅ Vous devriez recevoir l'email à `contact@sochauxbadminton.com`

---

## 🛡️ Protection Antispam

Le formulaire inclut **3 niveaux de protection** :

### 1. hCaptcha ✅
- Captcha moderne et accessible
- Respectueux de la vie privée
- Bloque 99% des robots
- Alternative éthique à Google reCAPTCHA

### 2. Honeypot 🍯
- Champ invisible dans le HTML
- Les robots remplissent ce champ
- FormSubmit rejette automatiquement ces soumissions
- Transparent pour les utilisateurs humains

### 3. FormSubmit (côté serveur)
- Validation des emails
- Rate limiting automatique
- Détection de patterns suspects
- Blocage d'IPs malveillantes

---

## ⚙️ Options Avancées

### Personnaliser la page de confirmation

Par défaut, FormSubmit affiche sa propre page de confirmation. Pour personnaliser :

1. **Créez une page de remerciement** : `merci.html`
2. **Ajoutez dans config.js** :
   ```javascript
   redirectUrl: 'https://votre-site.com/merci.html'
   ```

### Désactiver temporairement hCaptcha

Pour tester sans captcha :

1. Dans `index.html`, ligne 266, commentez :
   ```html
   <!-- <div class="h-captcha" id="hcaptcha" data-sitekey=""></div> -->
   ```

### Changer l'email de destination

1. **Dans index.html**, ligne 233 :
   ```html
   <form action="https://formsubmit.co/NOUVEL_EMAIL@exemple.com" method="POST">
   ```

2. **Première soumission** : Confirmez le nouvel email

---

## 🎨 Personnalisation hCaptcha

### Thème sombre (matching le site)

Dans `config.js`, le widget hCaptcha peut être personnalisé :

```javascript
// Après le chargement de hCaptcha, vous pouvez ajouter :
document.querySelector('.h-captcha').setAttribute('data-theme', 'dark');
```

### Taille du widget

Options : `normal` (défaut), `compact`

```html
<div class="h-captcha" data-size="compact"></div>
```

---

## 🔍 Dépannage

### Le formulaire ne s'envoie pas

1. ✅ Vérifiez que vous avez **confirmé l'email** FormSubmit
2. ✅ Vérifiez que **hCaptcha est validé** (case cochée)
3. ✅ Ouvrez la **console** (F12) pour voir les erreurs
4. ✅ Vérifiez que `config.js` existe et contient votre Site Key

### hCaptcha ne s'affiche pas

1. ✅ Vérifiez que la **Site Key** est correcte dans `config.js`
2. ✅ Vérifiez la **console** pour les erreurs de chargement
3. ✅ Testez avec un **autre navigateur** (cache)
4. ✅ Vérifiez que le script hCaptcha se charge : `https://js.hcaptcha.com/1/api.js`

### Les emails ne sont pas reçus

1. ✅ Vérifiez vos **spams**
2. ✅ Vérifiez que l'email dans `index.html` est correct
3. ✅ Testez avec un **autre email** pour vérifier
4. ✅ Attendez quelques minutes (peut prendre jusqu'à 5 min)

### Erreur "Email not confirmed"

➡️ Vous devez cliquer sur le lien de confirmation dans le premier email envoyé par FormSubmit

### Le captcha est en anglais

➡️ hCaptcha détecte la langue du navigateur. Vous pouvez forcer le français :

```html
<div class="h-captcha" data-hl="fr"></div>
```

---

## 📊 Statistiques et Monitoring

### Voir les soumissions

FormSubmit n'a pas de dashboard. Tous les messages arrivent directement par email.

### hCaptcha Dashboard

1. Allez sur [dashboard.hcaptcha.com](https://dashboard.hcaptcha.com/)
2. Sélectionnez votre site
3. Consultez les statistiques :
   - Nombre de vérifications
   - Taux de succès
   - Détection de bots

---

## 🔐 Sécurité

### La Site Key est publique ?

✅ **Oui, c'est normal !** La Site Key hCaptcha est conçue pour être publique (dans le HTML). La validation se fait côté serveur avec la Secret Key (que vous n'utilisez pas ici).

### Puis-je commiter config.js ?

✅ **Oui**, car la Site Key est publique. Cependant, le `.gitignore` l'ignore par défaut au cas où vous ajouteriez d'autres données sensibles plus tard.

### FormSubmit est-il sûr ?

✅ **Oui**. FormSubmit est un service établi utilisé par des milliers de sites. Ils ne stockent pas vos données et agissent uniquement comme proxy email.

---

## 💡 Alternatives

Si vous voulez explorer d'autres solutions :

### Netlify Forms
- **Avantages** : Intégration native si déployé sur Netlify
- **Inconvénients** : Limité à 100 soumissions/mois (gratuit)

### Web3Forms
- **Avantages** : API moderne, dashboard, webhooks
- **Inconvénients** : Nécessite inscription et clé API

### EmailJS
- **Avantages** : Templates personnalisables
- **Inconvénients** : Limité à 200 emails/mois (gratuit)

### Backend custom
- **Avantages** : Contrôle total
- **Inconvénients** : Nécessite serveur, maintenance, coûts

---

## 🆘 Support

### FormSubmit
- **Documentation** : [https://formsubmit.co/](https://formsubmit.co/)
- **Email** : contact@formsubmit.co

### hCaptcha
- **Documentation** : [https://docs.hcaptcha.com/](https://docs.hcaptcha.com/)
- **Support** : [https://www.hcaptcha.com/contact](https://www.hcaptcha.com/contact)

---

## ✅ Checklist de Configuration

- [ ] Formulaire soumis une première fois
- [ ] Email de confirmation FormSubmit cliqué
- [ ] Compte hCaptcha créé/connecté
- [ ] Site Key hCaptcha copiée
- [ ] Fichier `config.js` créé et configuré
- [ ] Test d'envoi réussi avec captcha
- [ ] Email reçu à destination
- [ ] Protection antispam fonctionnelle

---

**Fait avec ❤️ pour Sochaux Badminton** 🏸

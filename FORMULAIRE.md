# 📧 Configuration du Formulaire de Contact

Ce guide explique comment activer le formulaire de contact sur votre site.

## 🚀 Solution recommandée : Web3Forms (Gratuit)

### Avantages
- ✅ Gratuit et illimité
- ✅ Protection antispam intégrée
- ✅ Aucun backend nécessaire
- ✅ Configuration en 2 minutes
- ✅ Emails reçus directement dans votre boîte

### Configuration

#### 1. Créer un compte Web3Forms

1. Allez sur [https://web3forms.com](https://web3forms.com)
2. Entrez votre email : `contact@sochauxbadminton.com`
3. Cliquez sur "Create Access Key"
4. Vérifiez votre boîte email
5. Cliquez sur le lien de confirmation
6. Copiez votre Access Key (ressemble à : `abcd1234-5678-90ab-cdef-1234567890ab`)

#### 2. Configurer le site

```bash
# 1. Copiez le fichier d'exemple
cp config.example.js config.js

# 2. Ouvrez config.js et collez votre clé
# Remplacez 'VOTRE_CLE_API_ICI' par votre vraie clé
```

#### 3. Tester

1. Ouvrez `index.html` dans votre navigateur
2. Allez sur la section Contact
3. Remplissez le formulaire et envoyez
4. Vous devriez recevoir l'email à `contact@sochauxbadminton.com`

### Protection antispam incluse

- **Honeypot field** : Piège invisible qui attrape les robots
- **Rate limiting** : Limite automatique de 250 emails/heure
- **Spam detection** : Détection automatique par Web3Forms

---

## 🔄 Alternatives gratuites

### Option 2 : FormSubmit (Plus simple, aucune inscription)

Si vous voulez quelque chose d'encore plus simple :

1. **Modifiez `index.html`** ligne 231 :
   ```html
   <form action="https://formsubmit.co/contact@sochauxbadminton.com" method="POST">
   ```

2. **Supprimez** les lignes 232-243 (champs hidden Web3Forms)

3. **Testez** : Lors du premier envoi, vous recevrez un email de confirmation

**Avantages** : Zéro configuration
**Inconvénients** : Moins de contrôle, design basique des emails

### Option 3 : Netlify Forms

Si vous déployez sur Netlify :

1. **Ajoutez** `netlify` au formulaire :
   ```html
   <form name="contact" netlify>
   ```

2. Netlify détecte automatiquement le formulaire au déploiement

**Avantages** : Intégration native, dashboard Netlify
**Inconvénients** : Limité à 100 soumissions/mois (gratuit)

### Option 4 : EmailJS

Pour plus de personnalisation :

1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
2. Configurez un service email
3. Remplacez le code JavaScript

**Avantages** : Templates d'emails personnalisables
**Inconvénients** : Limité à 200 emails/mois (gratuit)

---

## 🛡️ Sécurité

### Bonnes pratiques

1. **Ne commitez jamais `config.js`** (déjà dans `.gitignore`)
2. **Utilisez des variables d'environnement** en production
3. **Activez la captcha** si vous recevez trop de spam
4. **Vérifiez régulièrement** vos emails pour ne pas manquer de messages

### Activer reCAPTCHA (optionnel)

Pour une protection maximale contre le spam :

1. Créez une clé reCAPTCHA v3 sur [google.com/recaptcha](https://www.google.com/recaptcha)
2. Ajoutez dans `index.html` avant `</head>` :
   ```html
   <script src="https://www.google.com/recaptcha/api.js?render=VOTRE_CLE_SITE"></script>
   ```
3. Modifiez le script d'envoi pour inclure le token reCAPTCHA

---

## 📊 Monitoring

### Vérifier que le formulaire fonctionne

1. **Test local** : Remplissez et envoyez le formulaire
2. **Vérifiez la console** : Regardez les erreurs éventuelles (F12)
3. **Email de confirmation** : Vérifiez votre boîte mail
4. **Dashboard Web3Forms** : Consultez les statistiques

### Emails de test

Envoyez un email de test avec :
- Nom : Test
- Email : test@example.com
- Sujet : Test du formulaire
- Message : Ceci est un test

---

## ❓ Dépannage

### Le formulaire affiche "Configuration manquante"

➡️ Vérifiez que `config.js` existe et contient votre vraie clé API

### Les emails ne sont pas reçus

1. ✅ Vérifiez vos spams
2. ✅ Vérifiez que l'email dans Web3Forms est `contact@sochauxbadminton.com`
3. ✅ Vérifiez la console du navigateur pour les erreurs
4. ✅ Testez avec un autre email

### Erreur CORS

➡️ Utilisez un serveur local (voir README) au lieu d'ouvrir directement le fichier HTML

### Le bouton reste bloqué sur "Envoi en cours..."

➡️ Vérifiez votre connexion internet et la console pour les erreurs

---

## 📞 Support

- **Web3Forms Docs** : [https://docs.web3forms.com](https://docs.web3forms.com)
- **Email** : support@web3forms.com
- **Issues GitHub** : Créez une issue sur le repo

---

**Fait avec ❤️ pour Sochaux Badminton**

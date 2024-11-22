## /actions/AuthActions :
   Rôle : Gère les actions liées à l'authentification des utilisateurs.
   Fonctionnalités :
      loginActions.login = Action asynchrone qui gère le processus d'authentification. Efface les données locale, appelle la fonction qui gère l'appel à l'API et dispatch les acions en fonction du resultat.

      loginFailure = Action pour gérer les erreurs de connexion.
   .
.
## /middleware/AuthMiddleware :
   Rôle : Gestion des tokens et du localStorage lors du Login et du Logout.
.
## /reducers/services/AuthService :
   Rôle : Gestion des différentes appels à l'API.
   Fonctionnalités :
      login = Effectue la requête API pour vérifier les informations d'identification et retourne les données.
      getUserProfile = Effectue la requête API pour récupérer les informations du profil utilisateur.
      updateUserName = Effectue la requête pour envoyer le nouvel userName au sein de l'API.
   .
.
## /reducers/authSlice : 
   Rôle : Gestion des état de l'authentification dans l'application.
   Fonctionnalités :
      Défini l'état initial de l'authentifaction ( Utilisateur déconnecté et absence de token )

      Contient les reducers pour gérer les différentes actions liées à l'authentification.
   .
.
## /reducers/userSlice :
   Rôle : Gère l'état du profil utilisateur.
   Fonctionnalités :
      getUserProfile = Action asynchrone pour récupérer les informations du profil utilisateur depuis l'API.

      updateUserName = Action asynchrone pour mettre à jour l'userName de l'utilisateur et le dispatcher.

      userSlice = Contient les reducers et actions pour mettre à jour l'état du profil utilisateur dans le store Redux.
   .
.
## store.js :
   Rôle : Configure et crée le store Redux de l'application.
   Fonctionnalités :
      Combine les reducers de l'application.
      Créer le store Redux et le rend disponible pour l'application.
   .
.
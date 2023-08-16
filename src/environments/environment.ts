// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  msalConfig: {
    auth: {
      clientId: 'c750489d-d82b-4e33-afeb-f178456a90db',
      authority: 'https://login.microsoftonline.com/fcb2b37b-5da0-466b-9b83-0014b67a7c78/',
    }
  },
  apiConfig: {
    scopes: ['profile', 'User.Read', 'api://60195e0a-80d7-4a93-af05-a377c58b1d17/EventData.ReadWrite'],
    uri: 'https://graph.microsoft.com/v1.0/me'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

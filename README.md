
This is an example project how to upload premium assets to your Ready Player Me app. 
There are two main components: react [frontend](https://github.com/wolverine0606/rpm_test/tree/main/frontend/button_view) where you can find simple button that contains Ready Player Me Avatar creator and nestjs backend that gets users data and creates new assets.

## Installation

```bash
$ npm install
```
## Running the app

```bash
# development
$ npm run start

# backend watch mode
$ npm run start:dev

# frontend watch mode
$ npm run start

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# rpm_test

## frontend
 Avatar Creator with React and Axios
    - This code snippet demonstrates how to create a simple React component that integrates the Ready Player Me Avatar Creator with the ability to send user data to a local backend server using Axios. The Ready Player Me Avatar Creator allows users to create avatars with various customization options.
 Import the AvatarCreator component from the @readyplayerme/react-avatar-creator library.

# Usage
[handlers](https://github.com/wolverine0606/rpm_test/blob/main/frontend/button_view/src/handleEvents.js) 
handleOnUserSet and handleOnAvatarExported. These handlers update the userId and avatarUrl variables and then call the checkAndSendDataToBackend function.
 
[checkAndSendDataToBackend](https://github.com/wolverine0606/rpm_test/blob/main/frontend/button_view/src/handleEvents.js#L31-L50) : function checks if both userId and avatarUrl are defined. If so, it sends a POST request to the  backend URL with the user data using Axios.

The component renders the AvatarCreator component, passing it the configuration, style, and event handlers. Users can create avatars, and the user data is sent to the backend when both userId and avatarUrl are available.


## backend
# Usage
[] [Unlock_equip](https://github.com/wolverine0606/rpm_test/blob/main/backend/dich/src/create_asset/create_asset.service.ts) - Service Method

[CreateOutfitDto](https://github.com/wolverine0606/rpm_test/blob/main/backend/dich/src/dtos/user_rpm.dto.ts) object that contains user data, specifically the userId and avatarUrl.

It defines user_id, and avatarId variables based on the received data from frontend.
It constructs the URLs for unlocking and equipping assets using the Ready Player Me API.

It prepares data to be sent in the request body for both unlocking and equipping.
It defines a config object that includes the API key in the headers for authentication.

# Axios Requests:
It makes two Axios requests: one to unlock the asset and another to equip it. If any errors occur during the requests, they are logged to the console.
Both requests are made with the provided data and configuration.

# Note:
Customize the x-api-key value in the config object with your own API key from Ready Player Me.
This code includes commented-out code for database interaction [e.g., creating a user in a database using Prisma]
    

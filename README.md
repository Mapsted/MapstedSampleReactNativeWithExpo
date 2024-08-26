# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

## Step 1: Install dependencies

   ```bash
   npm install
   ```

## Step 2: Install Mapsted 

```sh
e.g npm install mapsted-react-native
```
Please find more details here : https://www.npmjs.com/package/mapsted-react-native

## prerequisites

### iOS
- Project/ios/Podfile Add source file on top

```sh
source 'https://cdn.cocoapods.org/'

# To run in simulator add below source target
source 'https://github.com/Mapsted/podspec-simulator.git'

# To run in device add below source target
source 'https://github.com/Mapsted/podspec.git'
```

- Project/ios/Podfile set use frameworks in your app target

```sh
use_frameworks!
```

- Add license file in Resources folder `your_ios_license.key`


### Android

- Add license file in Assets folder('/app/src/main/assets') `your_android_license.key`


## Step 3: Initialize Mapsted map SDK

We need to call below function to initialize the map SDK.

**launchMapActivity()** 


# run ios 
```bash
npm run ios 
```


# run android 
```bash
npm run android 
```
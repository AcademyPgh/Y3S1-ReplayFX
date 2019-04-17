## How to rename this project
If you want to make a new version of this app as a separate push to the App Store (like Convention A wants their own separate app), you'll have to run through some steps to make it an official new & different app. Here they are!

### create new apps and get some values for later
At https://appcenter.ms, create two new apps:
1. `AppName-android`, with OS: `Android` and Platform: `React Native`
   * Save the app secret (from the Overview screen)
   * Save the production CodePush key (from Distribute > CodePush > Create Standard Deployments > wrench icon)
2. `AppName-ios`, with OS: `iOS` and Platform: `React Native`
   * Save the app secret and CodePush key

### check out a new branch
1. make sure you're working on a new branch, for example - `git checkout -b appname origin/master`

### run renaming script
1. use `react-native-rename` to update basic locations. For example: `react-native-rename AppName -b com.academypgh.appname`
   * the string after `-b` is your `Bundle Id` - save it for later.
1. On a Mac: `cd ios && pod install`
   * You may see some warnings like 'Automatically assigning platform' or 'x target overrides... build settings'. These can be safely ignored as long as you get a `Pod installation complete!`
1. `cd .. & watchman watch-del-all`
1. `npm start --reset-cache`

### Make your new icons
1. First, you'll need your app icon as an image file
1. Then use a site like https://appiconmaker.co to create the app icons. Download the whole zip file with all the icons in it.

### manual updates
These should be scripted someday, but for now, you'll need to do them manually.

#### Android
 1. Icons:
    1. create a new folder at `/versions/appname/android` by copying one of the existing ones.
       * Each `mipmap-*` folder should contain ic_launcher.png in the proper size for android. Don't change the filename, just replace it with the new file that is the same icon size.
    1. overwrite the folders at `/android/app/src/main/res/mipmap-*` with the ones you just created
 1. Colors: `/android/app/src/main/res/values/colors` can be updated if you want to change the background color on the splash screen. `background` is the only important color - we usually leave it at black.
 1. CodePush key: in `/android/app/src/main/res/values/strings.xml`, update `reactNativeCodePush_androidDeploymentKey` to the one that you saved (in a previous step) from https://appcenter.ms. You should be using the production CodePush key.
 1. Secret: in `/android/app/src/main/assets/appcenter-config.json`, update `app_secret` to the one that you saved (in a previous step) from https://appcenter.ms.
 1. Bundle Id: check that in `/android/app/src/main/AndroidManifest.xml`, the following area has your Bundle Id (from a previous step). `react-native-rename` should have done this for you, but check.

```
<receiver
android:name="com.google.android.gms.gcm.GcmReceiver"
android:exported="true"
android:permission="com.google.android.c2dm.permission.SEND" >
    <intent-filter>
        <action android:name="com.google.android.c2dm.intent.RECEIVE" />
        <category android:name="***FULL BUNDlE ID***" />
    </intent-filter>
</receiver>
```

#### iOS
 1. Images
    1. Update the images in the `AppIcon` and `Launcher` directories at `ios/AppName/images.xcassets`. If it asks for images you don't have, edit `Contents.json` so that you don't need them (for example, a place asking for `Icon-121` could be changed to use `Icon-120`)
    1. Apply these changes by opening xcode, opening your project's `ios` folder, expanding to `AppName/AppName` on the left, and clicking on `LaunchScreen.xib`???! and maybe `Images.xcassets`
 1. Check in Xcode (`General` > `Identity`) to make sure the package info has been updated 
    1. Display Name: probably just `AppName` with spaces in it. Make it human readable.
    1. Bundle identifier: this should already be the Bundle Id from a previous step
    1. Version: match whatever the current highest is from master (be sure to update master before making a new branch)
    1. Build: Leave this where it is.
 1. Update `CodePushDeploymentKey` in `/ios/AppName/Info.plist` to correct key from https://appcenter.ms
 1. Update `ios/AppName/AppCenter-Config.plist` to have new AppSecret string from https://appcenter.ms ios project

### Commit your changes and push your branch
do it. For example: `git add . && git commit -m 'AppName version of app' && git push`

### Create store pages

#### iOS
Follow some tutorial online. You'll start at https://developer.apple.com > App Store Connect, then (using XCode) build, validate, and distribute.

#### Android
You'll start at https://play.google.com/apps/publish and create a new application.

### Build in App Center

#### iOS
In the iOS version of the app in App Center, do this to build:
1. go to 'build'
1. choose `GitHub` as the source, select your repo and branch
1. turn on `Automatically increment build number` (default build id is fine)
1. turn on `Sign builds`.
   1. Make a provisioning profile at https://developer.apple.com > Provisioning Profiles > All.
   1. Get the P12 file from John. (It's on the iMac at LFG in Documents)
1. Press 'save' until it's happy. Then build.
1. Go to Distribute > Stores > Connect to Store > App Store Connect. Select your app and 'Assign'. It will probably not have the right icon yet

#### Android
In the Android version of the app in App Center, do this to build:
1. go to 'build'
1. choose `GitHub` as the source, select your repo and branch
1. turn on `Automatically increment build number` (default build id is fine)
1. turn on `Sign builds`.
   1. upload a keystore file - get it from John. (It's `academypgh.jks` in the Downloads folder on the iMac at LFG)
   1. You'll need to get passwords from John.
1. Press 'save' until it's happy. Then build.
1. Go to Distribute > Stores > Connect to Store > Google Play.
   1. get the security token from John. It's named `api-[ridiculous numbers etc].json` (it's on the iMac at LFG in Downloads)
   1. Select your app and 'Assign'. It will probably not have the right icon yet

## Check to make sure everything worked
You'll have to run the project on something with an Android emulator and something with an iOS emulator. Here are the areas to check:
- icons
- splash screen (color & icon)
- test that notifications work
- test that everything builds in App Center (this tests your secrets)
- test that the app icon updates in App Center

## fill in every option thing that has ever existed
for both android and ios.

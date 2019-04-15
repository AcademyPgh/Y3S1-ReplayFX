## How to rename this project
If you want to make a new version of this app as a separate push to the App Store (like Convention A wants their own separate app), you'll have to run through some steps to make it an official new & different app. Here they are!

### check out a new branch
1. make sure you're working on a new branch, for example - `git checkout -b appname origin/master`

### run renaming script
1. use `react-native-rename` to update basic locations. For example: `react-native-rename AppName -b com.academypgh.appname`
1. On a Mac: `cd ios && pod install`
   * You may see some warnings like 'Automatically assigning platform' or 'x target overrides... build settings'. These can be safely ignored as long as you get a `Pod installation complete!`
1. `cd .. & watchman watch-del-all`
1. `npm start --reset-cache`

### update icons/theming

Make your new icons:
1. First, you'll need your app icon
1. Then use a site like https://appiconmaker.co to create the app icons. Download the whole zip file with all the icons in it.

Places to update:
1. Android
   1. Icons:
      1. create a new folder at `/versions/appname/android` by copying one of the existing ones.
         * Each `mipmap-*` folder should contain ic_launcher.png in the proper size for android. Don't change the filename, just replace it with the new file that is the same icon size.
      1. overwrite the folders at `/android/app/src/main/res/mipmap-*` with the ones you just created
   1. Colors: `/android/app/src/main/res/values/colors` should be updated to match the splash screen
   1. Strings: `/android/app/src/main/res/values/strings` update the React Native Code Push value to the one within `appcenter.ms` for this version
   1. Secret: `/android/app/src/main/assets/appcenter-config.json` should have the correct secret from the `appcenter.ms` config for this version
   1. Bundle Id: `/android/app/src/main/AndroidManifest.xml` should update the following area to the new bundle identifier that you set when doing `react-native-rename` (if you can figure out why this can't use ${applicationId} I'm all ears)

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

2. Apple
   1. Update `ios/NewName/images.xcassets` via xcode to include the new splash screen and icons for the new version
   1. Update package identifier in xcode (or in `ios/NewName/Info.plist` but Apple and everyone on the internet says to do it via xcode, not by hand in this file) to match name in `appcenter.ms` along with the correct version/build number
   1. Update `CodePushDeploymentKey` in `/ios/NewName/Info.plist` to correct key in `appcenter.ms`
   1. Update `ios/NewName/AppCenter-Config.plist` to have new AppSecret string to match `appcenter.ms` project

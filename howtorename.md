How to rename this project

use `react-native-rename` to update basic locations
run `pod install` inside the `ios` directory (while on a mac)

Places to update:

Android Icons

`/android/app/src/main/res/*` should all be updated with the proper images for the new name/application

Each `mipmap-*` file should contain ic_launcher.png and icon.png in the proper size for android

`/android/app/src/main/values/colors` should be updated to match the splash screen


`/android/app/src/main/values/strings` update the React Native Code Push value to the one within `appcenter.ms` for this version

`/android/app/src/main/assets/appcenter-config.json` should have the correct secret from the `appcenter.ms` config for this version

`/android/app/src/main/AndroidManifest.xml` should update the following area to the new bundle identifier (if you can figure out why this can't use ${applicationId} I'm all ears)

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

Apple Updates

Update `ios/NewName/images.xcassets` via xcode to include the new splash screen and icons for the new version

Update package identifier in xcode (or in `ios/NewName/Info.plist` but Apple and everyone on the internet says to do it via xcode, not by hand in this file) to match name in `appcenter.ms` along with the correct version/build number

Update `CodePushDeploymentKey` in `/ios/NewName/Info.plist` to correct key in `appcenter.ms`

Update `ios/NewName/APpCenter-Config.plist` to have new AppSecret string to match `appcenter.ms` project
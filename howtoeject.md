Things to add when rebuilding IOS app:

After deleting `/ios` run `react-native eject`
Must do `react-native link`
Then manually link `node-modules/react-native/pushnotificationsIOS/product/` via xcode
Add appropriate codepush key into info.plist
```
	<key>CodePushDeploymentKey</key>
	<string>KAZ3DtSs-FPq1LTXqZfPBlkEX5CzrJA-ptB-4</string>
```
Update `AppDelegate.m` with two changed lines from here: https://docs.microsoft.com/en-us/appcenter/distribution/codepush/react-native#ios-setup

Add: `#import <CodePush/CodePush.h>`
Replace: `jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];`
With this: 
```
#ifdef DEBUG
    jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
#else
    jsCodeLocation = [CodePush bundleURL];
#endif
```

Add ios parts so Auth0 works: https://auth0.com/docs/quickstart/native/react-native/00-login

this is the default to add to appdelegate.m
```
#import <React/RCTLinkingManager.h>

 //Required for Auth0
 - (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}

```

This is the default to add to info.plist
```
    <key>CFBundleURLTypes</key>
	<array>
		<dict>
			<key>CFBundleTypeRole</key>
			<string>None</string>
			<key>CFBundleURLName</key>
			<string>auth0</string>
			<key>CFBundleURLSchemes</key>
			<array>
				<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
			</array>
		</dict>
	</array>
```
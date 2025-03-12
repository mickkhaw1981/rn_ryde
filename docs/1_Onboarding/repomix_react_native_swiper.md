This file is a merged representation of the entire codebase, combined into a single document by Repomix. The content has been processed where security check has been disabled.

<file_summary>
This section contains a summary of this file.

<purpose>
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.
</purpose>

<file_format>
The content is organized as follows:

1. This summary section
2. Repository information
3. Directory structure
4. Repository files, each consisting of:

- File path as an attribute
- Full contents of the file
  </file_format>

<usage_guidelines>

- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
  </usage_guidelines>

<notes>
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Security check has been disabled - content may contain sensitive information
</notes>

<additional_info>

</additional_info>

</file_summary>

<directory_structure>
.github/
ISSUE_TEMPLATE.md
PULL_REQUEST_TEMPLATE.md
examples/
**tests**/
App-test.js
android/
.settings/
org.eclipse.buildship.core.prefs
app/
src/
debug/
java/
com/
examples/
ReactNativeFlipper.java
AndroidManifest.xml
main/
java/
com/
examples/
MainActivity.java
MainApplication.java
res/
values/
strings.xml
styles.xml
AndroidManifest.xml
BUCK
build_defs.bzl
build.gradle
proguard-rules.pro
gradle/
wrapper/
gradle-wrapper.properties
.project
build.gradle
gradle.properties
gradlew
gradlew.bat
settings.gradle
components/
AutoPlay/
index.tsx
Basic/
index.js
DisableButton/
index.tsx
Dynamic/
index.js
LoadMinimal/
index.tsx
Loop/
index.tsx
NestSwiper/
index.tsx
Phone/
index.js
PhotoView/
index.js
Swiper/
index.js
SwiperNumber/
index.js
e2e/
AutoPlay.spec.js
Basic.spec.js
config.json
init.js
NestSwiper.spec.js
ios/
examples/
Base.lproj/
LaunchScreen.xib
Images.xcassets/
AppIcon.appiconset/
Contents.json
Contents.json
AppDelegate.h
AppDelegate.m
Info.plist
main.m
examples-tvOS/
Info.plist
examples-tvOSTests/
Info.plist
examples.xcodeproj/
xcshareddata/
xcschemes/
examples-tvOS.xcscheme
examples.xcscheme
project.pbxproj
examples.xcworkspace/
contents.xcworkspacedata
examplesTests/
examplesTests.m
Info.plist
Podfile
Podfile.lock
.buckconfig
.eslintrc.js
.flowconfig
.gitattributes
.gitignore
.prettierrc
.watchmanconfig
app.json
babel.config.js
index.tsx
metro.config.js
package.json
src/
index.js
.editorconfig
.gitignore
.npmignore
.prettierrc
CHANGELOG.md
index.d.ts
index.js
index.js.flow
LICENSE
package.json
README.md
ROADMAP.md
</directory_structure>

<files>
This section contains the contents of the repository's files.

<file path=".github/ISSUE_TEMPLATE.md">
### Which OS ?

### Version

Which versions are you using:

- react-native-swiper v?
- react-native v0.?.?

### Expected behaviour

### Actual behaviour

### How to reproduce it>

## To help us, please fork this component, modify one example in examples folder to reproduce your issue and include link here.

### Steps to reproduce

1.
2.
3. </file>

<file path=".github/PULL_REQUEST_TEMPLATE.md">
### Is it a bugfix ?
- Yes or No ?
- If yes, which issue (fix #number) ?

### Is it a new feature ?

- Yes or no ?
- Include documentation, demo GIF if applicable

### Describe what you've done:

### How to test it ?

</file>

<file path="examples/__tests__/App-test.js">
/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
renderer.create(<App />);
});
</file>

<file path="examples/android/.settings/org.eclipse.buildship.core.prefs">
connection.project.dir=
eclipse.preferences.version=1
</file>

<file path="examples/android/app/src/debug/java/com/examples/ReactNativeFlipper.java">
package com.example;

import android.content.Context;

import com.facebook.flipper.android.AndroidFlipperClient;
import com.facebook.flipper.android.utils.FlipperUtils;
import com.facebook.flipper.core.FlipperClient;
import com.facebook.flipper.plugins.crashreporter.CrashReporterPlugin;
import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;
import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin;
import com.facebook.flipper.plugins.inspector.DescriptorMapping;
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;
import com.facebook.flipper.plugins.network.FlipperOkhttpInterceptor;
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;
import com.facebook.flipper.plugins.react.ReactFlipperPlugin;
import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.modules.network.NetworkingModule;
import okhttp3.OkHttpClient;

public class ReactNativeFlipper {
public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
if (FlipperUtils.shouldEnableFlipper(context)) {
final FlipperClient client = AndroidFlipperClient.getInstance(context);

      client.addPlugin(new InspectorFlipperPlugin(context, DescriptorMapping.withDefaults()));
      client.addPlugin(new ReactFlipperPlugin());
      client.addPlugin(new DatabasesFlipperPlugin(context));
      client.addPlugin(new SharedPreferencesFlipperPlugin(context));
      client.addPlugin(CrashReporterPlugin.getInstance());

      NetworkFlipperPlugin networkFlipperPlugin = new NetworkFlipperPlugin();
      NetworkingModule.setCustomClientBuilder(
        new NetworkingModule.CustomClientBuilder() {
          @Override
          public void apply(OkHttpClient.Builder builder) {
            builder.addNetworkInterceptor(new FlipperOkhttpInterceptor(networkFlipperPlugin));
          }
        });
      client.addPlugin(networkFlipperPlugin);
      client.start();

      // Fresco Plugin needs to ensure that ImagePipelineFactory is initialized
      // Hence we run if after all native modules have been initialized
      ReactContext reactContext = reactInstanceManager.getCurrentReactContext();
      if (reactContext == null) {
        reactInstanceManager.addReactInstanceEventListener(
          new ReactInstanceManager.ReactInstanceEventListener() {
            @Override
            public void onReactContextInitialized(ReactContext reactContext) {
              reactInstanceManager.removeReactInstanceEventListener(this);
              reactContext.runOnNativeModulesQueueThread(
                new Runnable() {
                  @Override
                  public void run() {
                    client.addPlugin(new FrescoFlipperPlugin());
                  }
                });
            }
          });
      } else {
        client.addPlugin(new FrescoFlipperPlugin());
      }
    }

}
}
</file>

<file path="examples/android/app/src/debug/AndroidManifest.xml">
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>

    <application android:usesCleartextTraffic="true" tools:targetApi="28" tools:ignore="GoogleAppIndexingWarning" />

</manifest>
</file>

<file path="examples/android/app/src/main/java/com/examples/MainActivity.java">
package com.examples;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "examples";
    }

}
</file>

<file path="examples/android/app/src/main/java/com/examples/MainApplication.java">
package com.examples;

import android.app.Application;
import android.content.Context;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;

import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
@Override
public boolean getUseDeveloperSupport() {
return BuildConfig.DEBUG;
}

    @Override
    protected List<ReactPackage> getPackages() {
      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new MyReactNativePackage());
      return packages;
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }

};

@Override
public ReactNativeHost getReactNativeHost() {
return mReactNativeHost;
}

@Override
public void onCreate() {
super.onCreate();
SoLoader.init(this, /_ native exopackage _/ false);
initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
}

/\*\*

- Loads Flipper in React Native templates. Call this in the onCreate method
- with something like initializeFlipper(this,
- getReactNativeHost().getReactInstanceManager());
-
- @param context
  _/
  private static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
  if (BuildConfig.DEBUG) {
  try {
  /_
  _ We use reflection here to pick up the class that initializes Flipper, since
  _ Flipper library is not available in release mode
  \*/
  Class<?> aClass = Class.forName("com.example.ReactNativeFlipper");
  aClass.getMethod("initializeFlipper", Context.class, ReactInstanceManager.class).invoke(null, context,
  reactInstanceManager);
  } catch (ClassNotFoundException e) {
  e.printStackTrace();
  } catch (NoSuchMethodException e) {
  e.printStackTrace();
  } catch (IllegalAccessException e) {
  e.printStackTrace();
  } catch (InvocationTargetException e) {
  e.printStackTrace();
  }
  }
  }

}
</file>

<file path="examples/android/app/src/main/res/values/strings.xml">
<resources>
    <string name="app_name">examples</string>
</resources>
</file>

<file path="examples/android/app/src/main/res/values/styles.xml">
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:textColor">#000000</item>
    </style>

</resources>
</file>

<file path="examples/android/app/src/main/AndroidManifest.xml">
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.examples">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenSize"
        android:windowSoftInputMode="adjustResize">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>

</manifest>
</file>

<file path="examples/android/app/BUCK">
# To learn about Buck see [Docs](https://buckbuild.com/).
# To run your application with Buck:
# - install Buck
# - `npm start` - to start the packager
# - `cd android`
# - `keytool -genkey -v -keystore keystores/debug.keystore -storepass android -alias androiddebugkey -keypass android -dname "CN=Android Debug,O=Android,C=US"`
# - `./gradlew :app:copyDownloadableDepsToLibs` - make all Gradle compile dependencies available to Buck
# - `buck install -r android/app` - compile, install and run application
#

load(":build_defs.bzl", "create_aar_targets", "create_jar_targets")

lib_deps = []

create_aar_targets(glob(["libs/*.aar"]))

create_jar_targets(glob(["libs/*.jar"]))

android_library(
name = "all-libs",
exported_deps = lib_deps,
)

android_library(
name = "app-code",
srcs = glob([
"src/main/java/**/*.java",
]),
deps = [
":all-libs",
":build_config",
":res",
],
)

android_build_config(
name = "build_config",
package = "com.examples",
)

android_resource(
name = "res",
package = "com.examples",
res = "src/main/res",
)

android_binary(
name = "app",
keystore = "//android/keystores:debug",
manifest = "src/main/AndroidManifest.xml",
package_type = "debug",
deps = [
":app-code",
],
)
</file>

<file path="examples/android/app/build_defs.bzl">
"""Helper definitions to glob .aar and .jar targets"""

def create_aar_targets(aarfiles):
for aarfile in aarfiles:
name = "aars\_\_" + aarfile[aarfile.rindex("/") + 1:aarfile.rindex(".aar")]
lib_deps.append(":" + name)
android_prebuilt_aar(
name = name,
aar = aarfile,
)

def create_jar_targets(jarfiles):
for jarfile in jarfiles:
name = "jars\_\_" + jarfile[jarfile.rindex("/") + 1:jarfile.rindex(".jar")]
lib_deps.append(":" + name)
prebuilt_jar(
name = name,
binary_jar = jarfile,
)
</file>

<file path="examples/android/app/build.gradle">
apply plugin: "com.android.application"

import com.android.build.OutputFile

/\*\*

- The react.gradle file registers a task for each build variant (e.g. bundleDebugJsAndAssets
- and bundleReleaseJsAndAssets).
- These basically call `react-native bundle` with the correct arguments during the Android build
- cycle. By default, bundleDebugJsAndAssets is skipped, as in debug/dev mode we prefer to load the
- bundle directly from the development server. Below you can see all the possible configurations
- and their defaults. If you decide to add a configuration block, make sure to add it before the
- `apply from: "../../node_modules/react-native/react.gradle"` line.
-
- project.ext.react = [
- // the name of the generated asset file containing your JS bundle
- bundleAssetName: "index.android.bundle",
-
- // the entry file for bundle generation
- entryFile: "index.android.js",
-
- // https://facebook.github.io/react-native/docs/performance#enable-the-ram-format
- bundleCommand: "ram-bundle",
-
- // whether to bundle JS and assets in debug mode
- bundleInDebug: false,
-
- // whether to bundle JS and assets in release mode
- bundleInRelease: true,
-
- // whether to bundle JS and assets in another build variant (if configured).
- // See http://tools.android.com/tech-docs/new-build-system/user-guide#TOC-Build-Variants
- // The configuration property can be in the following formats
- // 'bundleIn${productFlavor}${buildType}'
- // 'bundleIn${buildType}'
- // bundleInFreeDebug: true,
- // bundleInPaidRelease: true,
- // bundleInBeta: true,
-
- // whether to disable dev mode in custom build variants (by default only disabled in release)
- // for example: to disable dev mode in the staging build type (if configured)
- devDisabledInStaging: true,
- // The configuration property can be in the following formats
- // 'devDisabledIn${productFlavor}${buildType}'
- // 'devDisabledIn${buildType}'
-
- // the root of your project, i.e. where "package.json" lives
- root: "../../",
-
- // where to put the JS bundle asset in debug mode
- jsBundleDirDebug: "$buildDir/intermediates/assets/debug",
-
- // where to put the JS bundle asset in release mode
- jsBundleDirRelease: "$buildDir/intermediates/assets/release",
-
- // where to put drawable resources / React Native assets, e.g. the ones you use via
- // require('./image.png')), in debug mode
- resourcesDirDebug: "$buildDir/intermediates/res/merged/debug",
-
- // where to put drawable resources / React Native assets, e.g. the ones you use via
- // require('./image.png')), in release mode
- resourcesDirRelease: "$buildDir/intermediates/res/merged/release",
-
- // by default the gradle tasks are skipped if none of the JS files or assets change; this means
- // that we don't look at files in android/ or ios/ to determine whether the tasks are up to
- // date; if you have any other folders that you want to ignore for performance reasons (gradle
- // indexes the entire tree), add them here. Alternatively, if you have JS files in android/
- // for example, you might want to remove it from here.
- inputExcludes: ["android/**", "ios/**"],
-
- // override which node gets called and with what additional arguments
- nodeExecutableAndArgs: ["node"],
-
- // supply additional arguments to the packager
- extraPackagerArgs: []
- ]
  \*/

project.ext.react = [
entryFile: "index.js",
enableHermes: false, // clean and rebuild if changing
]

apply from: "../../node_modules/react-native/react.gradle"

/\*\*

- Set this to true to create two separate APKs instead of one:
- - An APK that only works on ARM devices
- - An APK that only works on x86 devices
- The advantage is the size of the APK is reduced by about 4MB.
- Upload all the APKs to the Play Store and people will download
- the correct one based on the CPU architecture of their device.
  \*/
  def enableSeparateBuildPerCPUArchitecture = false

/\*\*

- Run Proguard to shrink the Java bytecode in release builds.
  \*/
  def enableProguardInReleaseBuilds = false

/\*\*

- The preferred build flavor of JavaScriptCore.
-
- For example, to use the international variant, you can use:
- `def jscFlavor = 'org.webkit:android-jsc-intl:+'`
-
- The international variant includes ICU i18n library and necessary data
- allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
- give correct results when using with locales other than en-US. Note that
- this variant is about 6MiB larger per architecture than default.
  \*/
  def jscFlavor = 'org.webkit:android-jsc:+'

/\*\*

- Whether to enable the Hermes VM.
-
- This should be set on project.ext.react and mirrored here. If it is not set
- on project.ext.react, JavaScript will not be compiled to Hermes Bytecode
- and the benefits of using Hermes will therefore be sharply reduced.
  \*/
  def enableHermes = project.ext.react.get("enableHermes", false);

android {
compileSdkVersion rootProject.ext.compileSdkVersion

    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }

    defaultConfig {
        applicationId "com.examples"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
    }
    splits {
        abi {
            reset()
            enable enableSeparateBuildPerCPUArchitecture
            universalApk false  // If true, also generate a universal APK
            include "armeabi-v7a", "x86", "arm64-v8a", "x86_64"
        }
    }
    signingConfigs {
        debug {
            storeFile file('debug.keystore')
            storePassword 'android'
            keyAlias 'androiddebugkey'
            keyPassword 'android'
        }
    }
    buildTypes {
        debug {
            signingConfig signingConfigs.debug
        }
        release {
            // Caution! In production, you need to generate your own keystore file.
            // see https://facebook.github.io/react-native/docs/signed-apk-android.
            signingConfig signingConfigs.debug
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
    // applicationVariants are e.g. debug, release
    applicationVariants.all { variant ->
        variant.outputs.each { output ->
            // For each separate APK per architecture, set a unique version code as described here:
            // https://developer.android.com/studio/build/configure-apk-splits.html
            def versionCodes = ["armeabi-v7a": 1, "x86": 2, "arm64-v8a": 3, "x86_64": 4]
            def abi = output.getFilter(OutputFile.ABI)
            if (abi != null) {  // null for the universal-debug, universal-release variants
                output.versionCodeOverride =
                        versionCodes.get(abi) * 1048576 + defaultConfig.versionCode
            }

        }
    }

    packagingOptions {
        pickFirst '**/armeabi-v7a/libc++_shared.so'
        pickFirst '**/x86/libc++_shared.so'
        pickFirst '**/arm64-v8a/libc++_shared.so'
        pickFirst '**/x86_64/libc++_shared.so'
        pickFirst '**/x86/libjsc.so'
        pickFirst '**/armeabi-v7a/libjsc.so'
    }

}

dependencies {
implementation fileTree(dir: "libs", include: ["*.jar"])
implementation "com.facebook.react:react-native:+" // From node_modules

    // react-native-screens
    implementation 'androidx.appcompat:appcompat:1.1.0-rc01'
    implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'

    if (enableHermes) {
      def hermesPath = "../../node_modules/hermesvm/android/";
      debugImplementation files(hermesPath + "hermes-debug.aar")
      releaseImplementation files(hermesPath + "hermes-release.aar")
    } else {
      implementation jscFlavor
    }

    debugImplementation("com.facebook.flipper:flipper:${FLIPPER_VERSION}") {
        exclude group:'com.facebook.yoga'
        exclude group:'com.facebook.flipper', module: 'fbjni'
        exclude group:'com.facebook.fbjni', module: 'fbjni'
        exclude group:'com.facebook.litho', module: 'litho-annotations'
    }

}

// Run this once to be able to run the application with BUCK
// puts all compile dependencies into folder libs for BUCK to use
task copyDownloadableDepsToLibs(type: Copy) {
from configurations.compile
into 'libs'
}

apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)
</file>

<file path="examples/android/app/proguard-rules.pro">
# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   http://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

</file>

<file path="examples/android/gradle/wrapper/gradle-wrapper.properties">
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-5.4.1-all.zip
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
</file>

<file path="examples/android/.project">
<?xml version="1.0" encoding="UTF-8"?>
<projectDescription>
	<name>android</name>
	<comment>Project android created by Buildship.</comment>
	<projects>
	</projects>
	<buildSpec>
		<buildCommand>
			<name>org.eclipse.buildship.core.gradleprojectbuilder</name>
			<arguments>
			</arguments>
		</buildCommand>
	</buildSpec>
	<natures>
		<nature>org.eclipse.buildship.core.gradleprojectnature</nature>
	</natures>
</projectDescription>
</file>

<file path="examples/android/build.gradle">
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
ext {
buildToolsVersion = "28.0.3"
minSdkVersion = 16
compileSdkVersion = 28
targetSdkVersion = 28
supportLibVersion = "28.0.0"
}
repositories {
google()
jcenter()
}
dependencies {
classpath("com.android.tools.build:gradle:3.4.1")

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }

}

allprojects {
repositories {
mavenLocal()
maven {
// All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
url("$rootDir/../node_modules/react-native/android")
        }
        maven {
            // Android JSC is installed from npm
            url("$rootDir/../node_modules/jsc-android/dist")
}

        google()
        jcenter()
    }

}
</file>

<file path="examples/android/gradle.properties">
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:

# Gradle settings configured through the IDE _will override_

# any settings specified in this file.

# For more details on how to configure your build environment visit

# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.

# The setting is particularly useful for tweaking memory settings.

# Default value: -Xmx10248m -XX:MaxPermSize=256m

# org.gradle.jvmargs=-Xmx2048m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8

# When configured, Gradle will run in incubating parallel mode.

# This option should only be used with decoupled projects. More details, visit

# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects

# org.gradle.parallel=true

android.useAndroidX=true
android.enableJetifier=true

# Version of flipper SDK to use with React Native

FLIPPER_VERSION=0.23.4
</file>

<file path="examples/android/gradlew">
#!/usr/bin/env sh

#

# Copyright 2015 the original author or authors.

#

# Licensed under the Apache License, Version 2.0 (the "License");

# you may not use this file except in compliance with the License.

# You may obtain a copy of the License at

#

# http://www.apache.org/licenses/LICENSE-2.0

#

# Unless required by applicable law or agreed to in writing, software

# distributed under the License is distributed on an "AS IS" BASIS,

# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

# See the License for the specific language governing permissions and

# limitations under the License.

#

##############################################################################

##

## Gradle start up script for UN\*X

##

##############################################################################

# Attempt to set APP_HOME

# Resolve links: $0 may be a link

PRG="$0"

# Need this for relative symlinks.

while [ -h "$PRG" ] ; do
ls=`ls -ld "$PRG"`
link=`expr "$ls" : '.*-> \(.*\)$'`
if expr "$link" : '/.*' > /dev/null; then
        PRG="$link"
else
PRG=`dirname "$PRG"`"/$link"
    fi
done
SAVED="`pwd`"
cd "`dirname \"$PRG\"`/" >/dev/null
APP_HOME="`pwd -P`"
cd "$SAVED" >/dev/null

APP_NAME="Gradle"
APP_BASE_NAME=`basename "$0"`

# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.

DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Use the maximum available, or set MAX_FD != -1 to use that value.

MAX_FD="maximum"

warn () {
echo "$\*"
}

die () {
echo
echo "$\*"
echo
exit 1
}

# OS specific support (must be 'true' or 'false').

cygwin=false
msys=false
darwin=false
nonstop=false
case "`uname`" in
CYGWIN* )
cygwin=true
;;
Darwin* )
darwin=true
;;
MINGW* )
msys=true
;;
NONSTOP* )
nonstop=true
;;
esac

CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar

# Determine the Java command to use to start the JVM.

if [ -n "$JAVA_HOME" ] ; then
if [ -x "$JAVA_HOME/jre/sh/java" ] ; then # IBM's JDK on AIX uses strange locations for the executables
JAVACMD="$JAVA_HOME/jre/sh/java"
    else
        JAVACMD="$JAVA_HOME/bin/java"
fi
if [ ! -x "$JAVACMD" ] ; then
die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
fi
else
JAVACMD="java"
which java >/dev/null 2>&1 || die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
fi

# Increase the maximum file descriptors if we can.

if [ "$cygwin" = "false" -a "$darwin" = "false" -a "$nonstop" = "false" ] ; then
MAX_FD_LIMIT=`ulimit -H -n`
if [ $? -eq 0 ] ; then
if [ "$MAX_FD" = "maximum" -o "$MAX_FD" = "max" ] ; then
MAX_FD="$MAX_FD_LIMIT"
fi
ulimit -n $MAX_FD
if [ $? -ne 0 ] ; then
warn "Could not set maximum file descriptor limit: $MAX_FD"
fi
else
warn "Could not query maximum file descriptor limit: $MAX_FD_LIMIT"
fi
fi

# For Darwin, add options to specify how the application appears in the dock

if $darwin; then
    GRADLE_OPTS="$GRADLE_OPTS \"-Xdock:name=$APP_NAME\" \"-Xdock:icon=$APP_HOME/media/gradle.icns\""
fi

# For Cygwin, switch paths to Windows format before running java

if $cygwin ; then
    APP_HOME=`cygpath --path --mixed "$APP_HOME"`
    CLASSPATH=`cygpath --path --mixed "$CLASSPATH"`
    JAVACMD=`cygpath --unix "$JAVACMD"`

    # We build the pattern for arguments to be converted via cygpath
    ROOTDIRSRAW=`find -L / -maxdepth 1 -mindepth 1 -type d 2>/dev/null`
    SEP=""
    for dir in $ROOTDIRSRAW ; do
        ROOTDIRS="$ROOTDIRS$SEP$dir"
        SEP="|"
    done
    OURCYGPATTERN="(^($ROOTDIRS))"
    # Add a user-defined pattern to the cygpath arguments
    if [ "$GRADLE_CYGPATTERN" != "" ] ; then
        OURCYGPATTERN="$OURCYGPATTERN|($GRADLE_CYGPATTERN)"
    fi
    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    i=0
    for arg in "$@" ; do
        CHECK=`echo "$arg"|egrep -c "$OURCYGPATTERN" -`
        CHECK2=`echo "$arg"|egrep -c "^-"`                                 ### Determine if an option

        if [ $CHECK -ne 0 ] && [ $CHECK2 -eq 0 ] ; then                    ### Added a condition
            eval `echo args$i`=`cygpath --path --ignore --mixed "$arg"`
        else
            eval `echo args$i`="\"$arg\""
        fi
        i=$((i+1))
    done
    case $i in
        (0) set -- ;;
        (1) set -- "$args0" ;;
        (2) set -- "$args0" "$args1" ;;
        (3) set -- "$args0" "$args1" "$args2" ;;
        (4) set -- "$args0" "$args1" "$args2" "$args3" ;;
        (5) set -- "$args0" "$args1" "$args2" "$args3" "$args4" ;;
        (6) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" ;;
        (7) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" "$args6" ;;
        (8) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" "$args6" "$args7" ;;
        (9) set -- "$args0" "$args1" "$args2" "$args3" "$args4" "$args5" "$args6" "$args7" "$args8" ;;
    esac

fi

# Escape application args

save () {
for i do printf %s\\n "$i" | sed "s/'/'\\\\''/g;1s/^/'/;\$s/\$/' \\\\/" ; done
    echo " "
}
APP_ARGS=$(save "$@")

# Collect all arguments for the java command, following the shell quoting and substitution rules

eval set -- $DEFAULT_JVM_OPTS $JAVA_OPTS $GRADLE_OPTS "\"-Dorg.gradle.appname=$APP_BASE_NAME\"" -classpath "\"$CLASSPATH\"" org.gradle.wrapper.GradleWrapperMain "$APP_ARGS"

# by default we should be in the correct project dir, but when run from Finder on Mac, the cwd is wrong

if [ "$(uname)" = "Darwin" ] && [ "$HOME" = "$PWD" ]; then
cd "$(dirname "$0")"
fi

exec "$JAVACMD" "$@"
</file>

<file path="examples/android/gradlew.bat">
@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      http://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%" == "" @echo off
@rem ##########################################################################
@rem
@rem Gradle startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%" == "" set DIRNAME=.
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if "%ERRORLEVEL%" == "0" goto init

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto init

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:init
@rem Get command-line arguments, handling Windows variants

if not "%OS%" == "Windows_NT" goto win9xME_args

:win9xME_args
@rem Slurp the command line arguments.
set CMD_LINE_ARGS=
set \_SKIP=2

:win9xME_args_slurp
if "x%~1" == "x" goto execute

set CMD_LINE_ARGS=%\*

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar

@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %CMD_LINE_ARGS%

:end
@rem End local scope for the variables with windows NT shell
if "%ERRORLEVEL%"=="0" goto mainEnd

:fail
rem Set variable GRADLE*EXIT_CONSOLE if you need the \_script* return code instead of
rem the _cmd.exe /c_ return code!
if not "" == "%GRADLE_EXIT_CONSOLE%" exit 1
exit /b 1

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
</file>

<file path="examples/android/settings.gradle">
rootProject.name = 'examples'
apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)
include ':app'
</file>

<file path="examples/components/AutoPlay/index.tsx">
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
wrapper: {},
slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},
slide2: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},
slide3: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
}
})

export default () => (
<Swiper style={styles.wrapper} autoplay>
<View testID="Hello" style={styles.slide1}>
<Text style={styles.text}>Hello Swiper</Text>
</View>
<View testID="Beautiful" style={styles.slide2}>
<Text style={styles.text}>Beautiful</Text>
</View>
<View testID="Simple" style={styles.slide3}>
<Text style={styles.text}>And simple</Text>
</View>
</Swiper>
)
</file>

<file path="examples/components/Basic/index.js">
import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
wrapper: {},
slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},
slide2: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},
slide3: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
}
}

export default () => (
<Swiper style={styles.wrapper} showsButtons loop={false}>
<View testID="Hello" style={styles.slide1}>
<Text style={styles.text}>Hello Swiper</Text>
</View>
<View testID="Beautiful" style={styles.slide2}>
<Text style={styles.text}>Beautiful</Text>
</View>
<View testID="Simple" style={styles.slide3}>
<Text style={styles.text}>And simple</Text>
</View>
</Swiper>
)
</file>

<file path="examples/components/DisableButton/index.tsx">
import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

const styles = {
wrapper: {},
slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},
slide2: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},
slide3: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
}
}

export default () => (
<Swiper
style={styles.wrapper}
showsButtons
// disable button onPress behavior
disablePrevButton
disableNextButton
loop={false}

>

    <View style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>

  </Swiper>
)
</file>

<file path="examples/components/Dynamic/index.js">
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

const styles = {
slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},

slide2: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},

slide3: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},

text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
}
}

export default class extends Component {
constructor(props) {
super(props)
this.state = {
items: []
}
}
componentDidMount() {
this.setState({
items: [
{ title: 'Hello Swiper', css: styles.slide1 },
{ title: 'Beautiful', css: styles.slide2 },
{ title: 'And simple', css: styles.slide3 }
]
})
}
render() {
return (
<Swiper showsButtons>
{this.state.items.map((item, key) => {
return (
<View key={key} style={item.css}>
<Text style={styles.text}>{item.title}</Text>
</View>
)
})}
</Swiper>
)
}
}
</file>

<file path="examples/components/LoadMinimal/index.tsx">
import React, { useState, useCallback } from 'react'
import { Text, View, Image, Dimensions, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { Model } from 'react-model'
const { width } = Dimensions.get('window')
const loading = require('./img/loading.gif')

const styles = StyleSheet.create({
wrapper: {},

slide: {
flex: 1,
justifyContent: 'center',
backgroundColor: 'transparent'
},
image: {
width,
flex: 1,
backgroundColor: 'transparent'
},

loadingView: {
position: 'absolute',
justifyContent: 'center',
alignItems: 'center',
left: 0,
right: 0,
top: 0,
bottom: 0,
backgroundColor: 'rgba(0,0,0,.5)'
},

loadingImage: {
width: 60,
height: 60
}
})

interface SlideState {
imgList: string[]
loadQueue: number[]
}

interface SlideActions {
loaded: number
}

const SlideSchema: ModelType<SlideState, SlideActions> = {
state: {
imgList: [
'https://www.mordeo.org/files/uploads/2016/10/Cute-Angry-Birds-Mobile-Wallpaper.jpg',
'http://www.glittergraphics.org/img/74/743564/cute-wallpapers-for-mobile.jpg',
'https://wallpapercave.com/wp/wp2807409.jpg',
'https://preppywallpapers.com/wp-content/uploads/2018/08/Gorgeous-iPhone-Wallpaper-Collection-11.jpg'
],
loadQueue: [0, 0, 0, 0]
},
actions: {
loaded: index => {
return state => {
state.loadQueue[index] = 1
}
}
}
}

const Slide = props => {
return (
<View style={styles.slide}>
<Image
onLoad={() => {
props.loadHandle(props.i)
}}
style={styles.image}
source={{ uri: props.uri }}
/>
{!props.loaded && (
<View style={styles.loadingView}>
<Image style={styles.loadingImage} source={loading} />
</View>
)}
</View>
)
}

const Page = () => {
const [{ useStore }] = useState(() => Model(SlideSchema))
const [state, actions] = useStore()
const loadHandle = useCallback((i: number) => {
actions.loaded(i)
}, [])
return (
<View style={{ flex: 1 }}>
<Swiper
loadMinimal
loadMinimalSize={1}
// index={0}
style={styles.wrapper}
loop={true} >
{state.imgList.map((item, i) => (
<Slide
            loadHandle={loadHandle}
            uri={item}
            i={i}
            key={i}
            loaded={state.loadQueue[i]}
          />
))}
</Swiper>
<View>
<Text>Current Loaded Images: {state.loadQueue}</Text>
</View>
</View>
)
}

export default Page
</file>

<file path="examples/components/Loop/index.tsx">
import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = StyleSheet.create({
wrapper: {},
slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},
slide2: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},
slide3: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
}
})

export default () => (
<Swiper style={styles.wrapper} loop={true} index={0} showsButtons>
<View style={styles.slide1}>
<Text style={styles.text}>Hello Swiper</Text>
</View>
<View style={styles.slide2}>
<Text style={styles.text}>Beautiful</Text>
</View>
<View style={styles.slide3}>
<Text style={styles.text}>And simple</Text>
</View>
</Swiper>
)
</file>

<file path="examples/components/NestSwiper/index.tsx">
import React, { useRef, useState } from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = StyleSheet.create({
wrapper: {},
slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},
slide2: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},
slide3: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
}
})

export default () => {
const swiper = useRef(null)
const [enable, setEnable] = useState(true)
return (
<Swiper
      ref={swiper}
      containerStyle={styles.wrapper}
      scrollEnabled={enable}
      index={0}
      showsButtons
    >
<View style={{ flex: 1, height: Dimensions.get('window').height }}>
<View style={{ height: 300 }}>
<Swiper
index={1}
onTouchStart={e => {
setEnable(false)
}}
onTouchEnd={e => {
setEnable(true)
}}
onMomentumScrollEnd={e => {
setEnable(true)
}} >
<View style={styles.slide1}>
<Text style={styles.text}>Nested: Hello Swiper</Text>
</View>
<View style={styles.slide2}>
<Text style={styles.text}>Nested: Beautiful</Text>
</View>
<View style={styles.slide3}>
<Text style={styles.text}>Nested: And simple</Text>
</View>
</Swiper>
</View>
</View>
<View style={styles.slide2}>
<Text style={styles.text}>Beautiful</Text>
</View>
<View style={styles.slide3}>
<Text style={styles.text}>And simple</Text>
</View>
</Swiper>
)
}
</file>

<file path="examples/components/Phone/index.js">
import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
wrapper: {
// backgroundColor: '#f00'
},

slide: {
flex: 1,
backgroundColor: 'transparent'
},
container: {
flex: 1
},

imgBackground: {
width,
height,
backgroundColor: 'transparent',
position: 'absolute'
},

image: {
width,
height
}
}

export default class extends Component {
render() {
return (
<View style={styles.container}>
<StatusBar barStyle="light-content" />
<Image source={require('./img/bg.jpg')} style={styles.imgBackground} />
<Swiper
style={styles.wrapper}
dot={
<View
style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
/>
}
activeDot={
<View
style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
/>
}
paginationStyle={{
            bottom: 70
          }}
loop={false} >
<View style={styles.slide}>
<Image
style={styles.image}
source={require('./img/1.jpg')}
resizeMode="cover"
/>
</View>
<View style={styles.slide}>
<Image
style={styles.image}
source={require('./img/2.jpg')}
resizeMode="cover"
/>
</View>
<View style={styles.slide}>
<Image style={styles.image} source={require('./img/3.jpg')} />
</View>
</Swiper>
</View>
)
}
}
</file>

<file path="examples/components/PhotoView/index.js">
import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import PhotoView from 'react-native-photo-view'
const { width, height } = Dimensions.get('window')

var styles = {
wrapper: {
backgroundColor: '#000',
top: 0,
right: 0,
bottom: 0,
left: 0
},
slide: {
flex: 1,
justifyContent: 'center',
alignItems: 'center'
},
photo: {
width,
height,
flex: 1
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
},
thumbWrap: {
marginTop: 100,
borderWidth: 5,
borderColor: '#000',
flexDirection: 'row'
},
thumb: {
width: 50,
height: 50
}
}

const renderPagination = (index, total, context) => {
return (
<View
style={{
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        top: 25,
        left: 0,
        right: 0
      }} >
<View
style={{
          borderRadius: 7,
          backgroundColor: 'rgba(255,255,255,.15)',
          padding: 3,
          paddingHorizontal: 7
        }} >
<Text
style={{
            color: '#fff',
            fontSize: 14
          }} >
{index + 1} / {total}
</Text>
</View>
</View>
)
}

const Viewer = props => (
<Swiper
index={props.index}
style={styles.wrapper}
renderPagination={renderPagination}

>

    {props.imgList.map((item, i) => (
      <View key={i} style={styles.slide}>
        <TouchableWithoutFeedback onPress={e => props.pressHandle()}>
          <PhotoView
            source={{ uri: item }}
            resizeMode="contain"
            minimumZoomScale={0.5}
            maximumZoomScale={3}
            androidScaleType="center"
            style={styles.photo}
          />
        </TouchableWithoutFeedback>
      </View>
    ))}

  </Swiper>
)

export default class extends Component {
constructor(props) {
super(props)
this.state = {
imgList: [
'https://avatars3.githubusercontent.com/u/533360?v=3&s=466',
'https://assets-cdn.github.com/images/modules/site/business-hero.jpg',
'https://placeholdit.imgix.net/~text?txtsize=29&txt=350%C3%971150&w=350&h=1150'
],
showViewer: true,
showIndex: 0
}
this.viewerPressHandle = this.viewerPressHandle.bind(this)
this.thumbPressHandle = this.thumbPressHandle.bind(this)
}
viewerPressHandle() {
this.setState({
showViewer: false
})
}
thumbPressHandle(i) {
this.setState({
showIndex: i,
showViewer: true
})
}
render() {
return (
<View style={{ position: 'relative' }}>
{this.state.showViewer && (
<Viewer
            index={this.state.showIndex}
            pressHandle={this.viewerPressHandle}
            imgList={this.state.imgList}
          />
)}
<View style={styles.thumbWrap}>
{this.state.imgList.map((item, i) => (
<TouchableOpacity key={i} onPress={e => this.thumbPressHandle(i)}>
<Image style={styles.thumb} source={{ uri: item }} />
</TouchableOpacity>
))}
</View>
</View>
)
}
}
</file>

<file path="examples/components/Swiper/index.js">
import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
container: {
flex: 1
},

wrapper: {},

slide: {
flex: 1,
justifyContent: 'center',
backgroundColor: 'transparent'
},

slide1: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#9DD6EB'
},

slide2: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#97CAE5'
},

slide3: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: '#92BBD9'
},

text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
},

image: {
width,
flex: 1
}
}

export default class extends Component {
render() {
return (
<View style={styles.container}>
<Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
<View style={styles.slide1}>
<Text style={styles.text}>Hello Swiper</Text>
</View>
<View style={styles.slide2}>
<Text style={styles.text}>Beautiful</Text>
</View>
<View style={styles.slide3}>
<Text style={styles.text}>And simple</Text>
</View>
</Swiper>

        <Swiper
          style={styles.wrapper}
          height={240}
          onMomentumScrollEnd={(e, state, context) =>
            console.log('index:', state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#000',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          paginationStyle={{
            bottom: -23,
            left: null,
            right: 10
          }}
          loop
        >
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/1.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/2.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/3.jpg')}
            />
          </View>
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require('./img/4.jpg')}
            />
          </View>
        </Swiper>
      </View>
    )

}
}
</file>

<file path="examples/components/SwiperNumber/index.js">
import React, { Component } from 'react'
import { Text, View, Image, Dimensions } from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window')

const styles = {
wrapper: {},
slide: {
flex: 1,
justifyContent: 'center',
backgroundColor: 'transparent'
},
text: {
color: '#fff',
fontSize: 30,
fontWeight: 'bold'
},
image: {
width,
flex: 1
},
paginationStyle: {
position: 'absolute',
bottom: 10,
right: 10
},
paginationText: {
color: 'white',
fontSize: 20
}
}

const renderPagination = (index, total, context) => {
return (
<View style={styles.paginationStyle}>
<Text style={{ color: 'grey' }}>
<Text style={styles.paginationText}>{index + 1}</Text>/{total}
</Text>
</View>
)
}

export default class extends Component {
render() {
return (
<Swiper
        style={styles.wrapper}
        renderPagination={renderPagination}
        loop={false}
      >
<View
style={styles.slide}
title={
<Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
} >
<Image style={styles.image} source={require('./img/1.jpg')} />
</View>
<View
style={styles.slide}
title={<Text numberOfLines={1}>Big lie behind Nine’s new show</Text>} >
<Image style={styles.image} source={require('./img/2.jpg')} />
</View>
<View
style={styles.slide}
title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>} >
<Image style={styles.image} source={require('./img/3.jpg')} />
</View>
<View
style={styles.slide}
title={
<Text numberOfLines={1}>Learn from Kim K to land that job</Text>
} >
<Image style={styles.image} source={require('./img/4.jpg')} />
</View>
</Swiper>
)
}
}
</file>

<file path="examples/e2e/AutoPlay.spec.js">
describe('AutoPlay', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await element(by.id('AutoPlay')).tap()
  })

it('should execute scrollBy(1) every 2.5s', async () => {
// Initial with first swiper
await expect(element(by.id('Hello'))).toBeVisible()
await expect(element(by.id('Beautiful'))).toBeNotVisible()
await expect(element(by.id('Simple'))).toBeNotVisible()

    // after 2.5s => second swiper
    await new Promise(r => setTimeout(r, 2500))

    await expect(element(by.id('Hello'))).toBeNotVisible()
    await expect(element(by.id('Beautiful'))).toBeVisible()
    await expect(element(by.id('Simple'))).toBeNotVisible()

    // after 5s => second swiper
    await new Promise(r => setTimeout(r, 2500))

    await expect(element(by.id('Hello'))).toBeNotVisible()
    await expect(element(by.id('Beautiful'))).toBeNotVisible()
    await expect(element(by.id('Simple'))).toBeVisible()

    // after 7.5s => second swiper
    await new Promise(r => setTimeout(r, 2500))

    await expect(element(by.id('Hello'))).toBeVisible()
    await expect(element(by.id('Beautiful'))).toBeNotVisible()
    await expect(element(by.id('Simple'))).toBeNotVisible()

})
})
</file>

<file path="examples/e2e/Basic.spec.js">
describe('Basic', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await element(by.id('Basic')).tap()
  })

it('should have Basic swiper', async () => {
await expect(element(by.id('Hello'))).toBeVisible()
await expect(element(by.id('Beautiful'))).toBeNotVisible()
await expect(element(by.id('Simple'))).toBeNotVisible()
})

it('should be the same swiper after swipe right when loop={false}', async () => {
await element(by.id('Hello')).swipe('right')
await expect(element(by.id('Hello'))).toBeVisible()
await expect(element(by.id('Beautiful'))).toBeNotVisible()
})

it('should be Beautiful swiper after swipe left', async () => {
await element(by.id('Hello')).swipe('left')
await expect(element(by.id('Hello'))).toBeNotVisible()
await expect(element(by.id('Beautiful'))).toBeVisible()
})

it('should be Simple swiper after swipe left twice', async () => {
await element(by.id('Hello')).swipe('left')
await element(by.id('Beautiful')).swipe('left')
await expect(element(by.id('Hello'))).toBeNotVisible()
await expect(element(by.id('Beautiful'))).toBeNotVisible()
await expect(element(by.id('Simple'))).toBeVisible()
})
})
</file>

<file path="examples/e2e/config.json">
{
    "setupFilesAfterEnv": ["./init.js"],
    "testEnvironment": "node",
    "reporters": ["detox/runners/jest/streamlineReporter"],
    "verbose": true
}
</file>

<file path="examples/e2e/init.js">
const detox = require('detox');
const config = require('../package.json').detox;
const adapter = require('detox/runners/jest/adapter');
const specReporter = require('detox/runners/jest/specReporter');

// Set the default timeout
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);

// This takes care of generating status logs on a per-spec basis. By default, jest only reports at file-level.
// This is strictly optional.
jasmine.getEnv().addReporter(specReporter);

beforeAll(async () => {
await detox.init(config);
});

beforeEach(async () => {
await adapter.beforeEach();
});

afterAll(async () => {
await adapter.afterAll();
await detox.cleanup();
});
</file>

<file path="examples/e2e/NestSwiper.spec.js">
describe('AutoPlay', () => {
  beforeEach(async () => {
    await device.reloadReactNative()
    await element(by.id('NestSwiper')).tap()
  })
}
</file>

<file path="examples/ios/examples/Base.lproj/LaunchScreen.xib">
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.XIB" version="3.0" toolsVersion="7702" systemVersion="14D136" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES">
    <dependencies>
        <deployment identifier="iOS"/>
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="7701"/>
        <capability name="Constraints with non-1.0 multipliers" minToolsVersion="5.1"/>
    </dependencies>
    <objects>
        <placeholder placeholderIdentifier="IBFilesOwner" id="-1" userLabel="File's Owner"/>
        <placeholder placeholderIdentifier="IBFirstResponder" id="-2" customClass="UIResponder"/>
        <view contentMode="scaleToFill" id="iN0-l3-epB">
            <rect key="frame" x="0.0" y="0.0" width="480" height="480"/>
            <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
            <subviews>
                <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="Powered by React Native" textAlignment="center" lineBreakMode="tailTruncation" baselineAdjustment="alignBaselines" minimumFontSize="9" translatesAutoresizingMaskIntoConstraints="NO" id="8ie-xW-0ye">
                    <rect key="frame" x="20" y="439" width="441" height="21"/>
                    <fontDescription key="fontDescription" type="system" pointSize="17"/>
                    <color key="textColor" cocoaTouchSystemColor="darkTextColor"/>
                    <nil key="highlightedColor"/>
                </label>
                <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="examples" textAlignment="center" lineBreakMode="middleTruncation" baselineAdjustment="alignBaselines" minimumFontSize="18" translatesAutoresizingMaskIntoConstraints="NO" id="kId-c2-rCX">
                    <rect key="frame" x="20" y="140" width="441" height="43"/>
                    <fontDescription key="fontDescription" type="boldSystem" pointSize="36"/>
                    <color key="textColor" cocoaTouchSystemColor="darkTextColor"/>
                    <nil key="highlightedColor"/>
                </label>
            </subviews>
            <color key="backgroundColor" white="1" alpha="1" colorSpace="custom" customColorSpace="calibratedWhite"/>
            <constraints>
                <constraint firstItem="kId-c2-rCX" firstAttribute="centerY" secondItem="iN0-l3-epB" secondAttribute="bottom" multiplier="1/3" constant="1" id="5cJ-9S-tgC"/>
                <constraint firstAttribute="centerX" secondItem="kId-c2-rCX" secondAttribute="centerX" id="Koa-jz-hwk"/>
                <constraint firstAttribute="bottom" secondItem="8ie-xW-0ye" secondAttribute="bottom" constant="20" id="Kzo-t9-V3l"/>
                <constraint firstItem="8ie-xW-0ye" firstAttribute="leading" secondItem="iN0-l3-epB" secondAttribute="leading" constant="20" symbolic="YES" id="MfP-vx-nX0"/>
                <constraint firstAttribute="centerX" secondItem="8ie-xW-0ye" secondAttribute="centerX" id="ZEH-qu-HZ9"/>
                <constraint firstItem="kId-c2-rCX" firstAttribute="leading" secondItem="iN0-l3-epB" secondAttribute="leading" constant="20" symbolic="YES" id="fvb-Df-36g"/>
            </constraints>
            <nil key="simulatedStatusBarMetrics"/>
            <freeformSimulatedSizeMetrics key="simulatedDestinationMetrics"/>
            <point key="canvasLocation" x="548" y="455"/>
        </view>
    </objects>
</document>
</file>

<file path="examples/ios/examples/Images.xcassets/AppIcon.appiconset/Contents.json">
{
  "images" : [
    {
      "idiom" : "iphone",
      "size" : "29x29",
      "scale" : "2x"
    },
    {
      "idiom" : "iphone",
      "size" : "29x29",
      "scale" : "3x"
    },
    {
      "idiom" : "iphone",
      "size" : "40x40",
      "scale" : "2x"
    },
    {
      "idiom" : "iphone",
      "size" : "40x40",
      "scale" : "3x"
    },
    {
      "idiom" : "iphone",
      "size" : "60x60",
      "scale" : "2x"
    },
    {
      "idiom" : "iphone",
      "size" : "60x60",
      "scale" : "3x"
    }
  ],
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}
</file>

<file path="examples/ios/examples/Images.xcassets/Contents.json">
{
  "info" : {
    "version" : 1,
    "author" : "xcode"
  }
}
</file>

<file path="examples/ios/examples/AppDelegate.h">
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <React/RCTBridgeDelegate.h>
#import <UIKit/UIKit.h>

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate>

@property (nonatomic, strong) UIWindow \*window;

@end
</file>

<file path="examples/ios/examples/AppDelegate.m">
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication _)application didFinishLaunchingWithOptions:(NSDictionary _)launchOptions
  {
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
  moduleName:@"examples"
  initialProperties:nil];

  rootView.backgroundColor = [[UIColor alloc] initWithRed:1.0f green:1.0f blue:1.0f alpha:1];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController \*rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
  }

- (NSURL _)sourceURLForBridge:(RCTBridge _)bridge
  {
  #if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
  #else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
  #endif
  }

@end
</file>

<file path="examples/ios/examples/Info.plist">
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleDisplayName</key>
	<string>examples</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>1</string>
	<key>LSRequiresIPhoneOS</key>
	<true/>
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
		<key>NSExceptionDomains</key>
		<dict>
			<key>localhost</key>
			<dict>
				<key>NSExceptionAllowsInsecureHTTPLoads</key>
				<true/>
			</dict>
		</dict>
	</dict>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
	<key>UIRequiredDeviceCapabilities</key>
	<array>
		<string>armv7</string>
	</array>
	<key>UISupportedInterfaceOrientations</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
</dict>
</plist>
</file>

<file path="examples/ios/examples/main.m">
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>

#import "AppDelegate.h"

int main(int argc, char \* argv[]) {
@autoreleasepool {
return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
}
}
</file>

<file path="examples/ios/examples-tvOS/Info.plist">
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>1</string>
	<key>LSRequiresIPhoneOS</key>
	<true/>
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSExceptionDomains</key>
		<dict>
			<key>localhost</key>
			<dict>
				<key>NSExceptionAllowsInsecureHTTPLoads</key>
				<true/>
			</dict>
		</dict>
	</dict>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
	<key>UIRequiredDeviceCapabilities</key>
	<array>
		<string>armv7</string>
	</array>
	<key>UISupportedInterfaceOrientations</key>
	<array>
		<string>UIInterfaceOrientationPortrait</string>
		<string>UIInterfaceOrientationLandscapeLeft</string>
		<string>UIInterfaceOrientationLandscapeRight</string>
	</array>
	<key>UIViewControllerBasedStatusBarAppearance</key>
	<false/>
</dict>
</plist>
</file>

<file path="examples/ios/examples-tvOSTests/Info.plist">
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>BNDL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>1</string>
</dict>
</plist>
</file>

<file path="examples/ios/examples.xcodeproj/xcshareddata/xcschemes/examples-tvOS.xcscheme">
<?xml version="1.0" encoding="UTF-8"?>
<Scheme
   LastUpgradeVersion = "0940"
   version = "1.3">
   <BuildAction
      parallelizeBuildables = "NO"
      buildImplicitDependencies = "YES">
      <BuildActionEntries>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "2D2A28121D9B038B00D4039D"
               BuildableName = "libReact.a"
               BlueprintName = "React-tvOS"
               ReferencedContainer = "container:../node_modules/react-native/React/React.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "2D02E47A1E0B4A5D006451C7"
               BuildableName = "examples-tvOS.app"
               BlueprintName = "examples-tvOS"
               ReferencedContainer = "container:examples.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "NO"
            buildForArchiving = "NO"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "2D02E48F1E0B4A5D006451C7"
               BuildableName = "examples-tvOSTests.xctest"
               BlueprintName = "examples-tvOSTests"
               ReferencedContainer = "container:examples.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
      </BuildActionEntries>
   </BuildAction>
   <TestAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      shouldUseLaunchSchemeArgsEnv = "YES">
      <Testables>
         <TestableReference
            skipped = "NO">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "2D02E48F1E0B4A5D006451C7"
               BuildableName = "examples-tvOSTests.xctest"
               BlueprintName = "examples-tvOSTests"
               ReferencedContainer = "container:examples.xcodeproj">
            </BuildableReference>
         </TestableReference>
      </Testables>
      <MacroExpansion>
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "2D02E47A1E0B4A5D006451C7"
            BuildableName = "examples-tvOS.app"
            BlueprintName = "examples-tvOS"
            ReferencedContainer = "container:examples.xcodeproj">
         </BuildableReference>
      </MacroExpansion>
      <AdditionalOptions>
      </AdditionalOptions>
   </TestAction>
   <LaunchAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      launchStyle = "0"
      useCustomWorkingDirectory = "NO"
      ignoresPersistentStateOnLaunch = "NO"
      debugDocumentVersioning = "YES"
      debugServiceExtension = "internal"
      allowLocationSimulation = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "2D02E47A1E0B4A5D006451C7"
            BuildableName = "examples-tvOS.app"
            BlueprintName = "examples-tvOS"
            ReferencedContainer = "container:examples.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
      <AdditionalOptions>
      </AdditionalOptions>
   </LaunchAction>
   <ProfileAction
      buildConfiguration = "Release"
      shouldUseLaunchSchemeArgsEnv = "YES"
      savedToolIdentifier = ""
      useCustomWorkingDirectory = "NO"
      debugDocumentVersioning = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "2D02E47A1E0B4A5D006451C7"
            BuildableName = "examples-tvOS.app"
            BlueprintName = "examples-tvOS"
            ReferencedContainer = "container:examples.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
   </ProfileAction>
   <AnalyzeAction
      buildConfiguration = "Debug">
   </AnalyzeAction>
   <ArchiveAction
      buildConfiguration = "Release"
      revealArchiveInOrganizer = "YES">
   </ArchiveAction>
</Scheme>
</file>

<file path="examples/ios/examples.xcodeproj/xcshareddata/xcschemes/examples.xcscheme">
<?xml version="1.0" encoding="UTF-8"?>
<Scheme
   LastUpgradeVersion = "0940"
   version = "1.3">
   <BuildAction
      parallelizeBuildables = "NO"
      buildImplicitDependencies = "YES">
      <BuildActionEntries>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "83CBBA2D1A601D0E00E9B192"
               BuildableName = "libReact.a"
               BlueprintName = "React"
               ReferencedContainer = "container:../node_modules/react-native/React/React.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "YES"
            buildForArchiving = "YES"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
               BuildableName = "examples.app"
               BlueprintName = "examples"
               ReferencedContainer = "container:examples.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
         <BuildActionEntry
            buildForTesting = "YES"
            buildForRunning = "YES"
            buildForProfiling = "NO"
            buildForArchiving = "NO"
            buildForAnalyzing = "YES">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "00E356ED1AD99517003FC87E"
               BuildableName = "examplesTests.xctest"
               BlueprintName = "examplesTests"
               ReferencedContainer = "container:examples.xcodeproj">
            </BuildableReference>
         </BuildActionEntry>
      </BuildActionEntries>
   </BuildAction>
   <TestAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      shouldUseLaunchSchemeArgsEnv = "YES">
      <Testables>
         <TestableReference
            skipped = "NO">
            <BuildableReference
               BuildableIdentifier = "primary"
               BlueprintIdentifier = "00E356ED1AD99517003FC87E"
               BuildableName = "examplesTests.xctest"
               BlueprintName = "examplesTests"
               ReferencedContainer = "container:examples.xcodeproj">
            </BuildableReference>
         </TestableReference>
      </Testables>
      <MacroExpansion>
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
            BuildableName = "examples.app"
            BlueprintName = "examples"
            ReferencedContainer = "container:examples.xcodeproj">
         </BuildableReference>
      </MacroExpansion>
      <AdditionalOptions>
      </AdditionalOptions>
   </TestAction>
   <LaunchAction
      buildConfiguration = "Debug"
      selectedDebuggerIdentifier = "Xcode.DebuggerFoundation.Debugger.LLDB"
      selectedLauncherIdentifier = "Xcode.DebuggerFoundation.Launcher.LLDB"
      launchStyle = "0"
      useCustomWorkingDirectory = "NO"
      ignoresPersistentStateOnLaunch = "NO"
      debugDocumentVersioning = "YES"
      debugServiceExtension = "internal"
      allowLocationSimulation = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
            BuildableName = "examples.app"
            BlueprintName = "examples"
            ReferencedContainer = "container:examples.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
      <AdditionalOptions>
      </AdditionalOptions>
   </LaunchAction>
   <ProfileAction
      buildConfiguration = "Release"
      shouldUseLaunchSchemeArgsEnv = "YES"
      savedToolIdentifier = ""
      useCustomWorkingDirectory = "NO"
      debugDocumentVersioning = "YES">
      <BuildableProductRunnable
         runnableDebuggingMode = "0">
         <BuildableReference
            BuildableIdentifier = "primary"
            BlueprintIdentifier = "13B07F861A680F5B00A75B9A"
            BuildableName = "examples.app"
            BlueprintName = "examples"
            ReferencedContainer = "container:examples.xcodeproj">
         </BuildableReference>
      </BuildableProductRunnable>
   </ProfileAction>
   <AnalyzeAction
      buildConfiguration = "Debug">
   </AnalyzeAction>
   <ArchiveAction
      buildConfiguration = "Release"
      revealArchiveInOrganizer = "YES">
   </ArchiveAction>
</Scheme>
</file>

<file path="examples/ios/examples.xcodeproj/project.pbxproj">
// !$*UTF8*$!
{
	archiveVersion = 1;
	classes = {
	};
	objectVersion = 46;
	objects = {

/_ Begin PBXBuildFile section _/
00E356F31AD99517003FC87E /_ examplesTests.m in Sources _/ = {isa = PBXBuildFile; fileRef = 00E356F21AD99517003FC87E /_ examplesTests.m _/; };
073B8355E279210B358A0178 /_ libPods-examplesTests.a in Frameworks _/ = {isa = PBXBuildFile; fileRef = 7C4131D052E7D6F8A4D054A8 /_ libPods-examplesTests.a _/; };
13B07FBC1A68108700A75B9A /_ AppDelegate.m in Sources _/ = {isa = PBXBuildFile; fileRef = 13B07FB01A68108700A75B9A /_ AppDelegate.m _/; };
13B07FBD1A68108700A75B9A /_ LaunchScreen.xib in Resources _/ = {isa = PBXBuildFile; fileRef = 13B07FB11A68108700A75B9A /_ LaunchScreen.xib _/; };
13B07FBF1A68108700A75B9A /_ Images.xcassets in Resources _/ = {isa = PBXBuildFile; fileRef = 13B07FB51A68108700A75B9A /_ Images.xcassets _/; };
13B07FC11A68108700A75B9A /_ main.m in Sources _/ = {isa = PBXBuildFile; fileRef = 13B07FB71A68108700A75B9A /_ main.m _/; };
2D02E4BC1E0B4A80006451C7 /_ AppDelegate.m in Sources _/ = {isa = PBXBuildFile; fileRef = 13B07FB01A68108700A75B9A /_ AppDelegate.m _/; };
2D02E4BD1E0B4A84006451C7 /_ Images.xcassets in Resources _/ = {isa = PBXBuildFile; fileRef = 13B07FB51A68108700A75B9A /_ Images.xcassets _/; };
2D02E4BF1E0B4AB3006451C7 /_ main.m in Sources _/ = {isa = PBXBuildFile; fileRef = 13B07FB71A68108700A75B9A /_ main.m _/; };
2DCD954D1E0B4F2C00145EB5 /_ examplesTests.m in Sources _/ = {isa = PBXBuildFile; fileRef = 00E356F21AD99517003FC87E /_ examplesTests.m _/; };
5F23F3D973322DEDD3AC231D /_ libPods-examples-tvOS.a in Frameworks _/ = {isa = PBXBuildFile; fileRef = 8593F66191A8FFA04628E590 /_ libPods-examples-tvOS.a _/; };
ACA2E00B7D57720E802A98DA /_ libPods-examples.a in Frameworks _/ = {isa = PBXBuildFile; fileRef = C64610AFBA96E83FDDA6BCF5 /_ libPods-examples.a _/; };
F78C1DD9D4E6AF9D5A195B5D /_ libPods-examples-tvOSTests.a in Frameworks _/ = {isa = PBXBuildFile; fileRef = AE58C94385B3990A15FEBEAB /_ libPods-examples-tvOSTests.a _/; };
/_ End PBXBuildFile section _/

/_ Begin PBXContainerItemProxy section _/
00E356F41AD99517003FC87E /_ PBXContainerItemProxy _/ = {
isa = PBXContainerItemProxy;
containerPortal = 83CBB9F71A601CBA00E9B192 /_ Project object _/;
proxyType = 1;
remoteGlobalIDString = 13B07F861A680F5B00A75B9A;
remoteInfo = examples;
};
2D02E4911E0B4A5D006451C7 /_ PBXContainerItemProxy _/ = {
isa = PBXContainerItemProxy;
containerPortal = 83CBB9F71A601CBA00E9B192 /_ Project object _/;
proxyType = 1;
remoteGlobalIDString = 2D02E47A1E0B4A5D006451C7;
remoteInfo = "examples-tvOS";
};
/_ End PBXContainerItemProxy section _/

/_ Begin PBXFileReference section _/
005A27D0448C5695A79AB311 /_ Pods-examples-tvOSTests.release.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examples-tvOSTests.release.xcconfig"; path = "Target Support Files/Pods-examples-tvOSTests/Pods-examples-tvOSTests.release.xcconfig"; sourceTree = "<group>"; };
008F07F21AC5B25A0029DE68 /_ main.jsbundle _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text; path = main.jsbundle; sourceTree = "<group>"; };
00E356EE1AD99517003FC87E /_ examplesTests.xctest _/ = {isa = PBXFileReference; explicitFileType = wrapper.cfbundle; includeInIndex = 0; path = examplesTests.xctest; sourceTree = BUILT_PRODUCTS_DIR; };
00E356F11AD99517003FC87E /_ Info.plist _/ = {isa = PBXFileReference; lastKnownFileType = text.plist.xml; path = Info.plist; sourceTree = "<group>"; };
00E356F21AD99517003FC87E /_ examplesTests.m _/ = {isa = PBXFileReference; lastKnownFileType = sourcecode.c.objc; path = examplesTests.m; sourceTree = "<group>"; };
13B07F961A680F5B00A75B9A /_ examples.app _/ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = examples.app; sourceTree = BUILT_PRODUCTS_DIR; };
13B07FAF1A68108700A75B9A /_ AppDelegate.h _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = sourcecode.c.h; name = AppDelegate.h; path = examples/AppDelegate.h; sourceTree = "<group>"; };
13B07FB01A68108700A75B9A /_ AppDelegate.m _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = sourcecode.c.objc; name = AppDelegate.m; path = examples/AppDelegate.m; sourceTree = "<group>"; };
13B07FB21A68108700A75B9A /_ Base _/ = {isa = PBXFileReference; lastKnownFileType = file.xib; name = Base; path = Base.lproj/LaunchScreen.xib; sourceTree = "<group>"; };
13B07FB51A68108700A75B9A /_ Images.xcassets _/ = {isa = PBXFileReference; lastKnownFileType = folder.assetcatalog; name = Images.xcassets; path = examples/Images.xcassets; sourceTree = "<group>"; };
13B07FB61A68108700A75B9A /_ Info.plist _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text.plist.xml; name = Info.plist; path = examples/Info.plist; sourceTree = "<group>"; };
13B07FB71A68108700A75B9A /_ main.m _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = sourcecode.c.objc; name = main.m; path = examples/main.m; sourceTree = "<group>"; };
2D02E47B1E0B4A5D006451C7 /_ examples-tvOS.app _/ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = "examples-tvOS.app"; sourceTree = BUILT_PRODUCTS_DIR; };
2D02E4901E0B4A5D006451C7 /_ examples-tvOSTests.xctest _/ = {isa = PBXFileReference; explicitFileType = wrapper.cfbundle; includeInIndex = 0; path = "examples-tvOSTests.xctest"; sourceTree = BUILT_PRODUCTS_DIR; };
33E1C601310E71BFA99167B2 /_ Pods-examples-tvOS.debug.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examples-tvOS.debug.xcconfig"; path = "Target Support Files/Pods-examples-tvOS/Pods-examples-tvOS.debug.xcconfig"; sourceTree = "<group>"; };
60FA21D121821EE076453629 /_ Pods-examples-tvOSTests.debug.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examples-tvOSTests.debug.xcconfig"; path = "Target Support Files/Pods-examples-tvOSTests/Pods-examples-tvOSTests.debug.xcconfig"; sourceTree = "<group>"; };
630CDFB4166145771886AB02 /_ Pods-examples.debug.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examples.debug.xcconfig"; path = "Target Support Files/Pods-examples/Pods-examples.debug.xcconfig"; sourceTree = "<group>"; };
7C4131D052E7D6F8A4D054A8 /_ libPods-examplesTests.a _/ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = "libPods-examplesTests.a"; sourceTree = BUILT_PRODUCTS_DIR; };
8593F66191A8FFA04628E590 /_ libPods-examples-tvOS.a _/ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = "libPods-examples-tvOS.a"; sourceTree = BUILT_PRODUCTS_DIR; };
92B5115BF52F24D6F9494D7E /_ Pods-examples.release.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examples.release.xcconfig"; path = "Target Support Files/Pods-examples/Pods-examples.release.xcconfig"; sourceTree = "<group>"; };
A8CCE8BE1CFAF9D3C9A30B40 /_ Pods-examplesTests.debug.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examplesTests.debug.xcconfig"; path = "Target Support Files/Pods-examplesTests/Pods-examplesTests.debug.xcconfig"; sourceTree = "<group>"; };
A8F6826D16AA3CAAF25E7693 /_ Pods-examples-tvOS.release.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examples-tvOS.release.xcconfig"; path = "Target Support Files/Pods-examples-tvOS/Pods-examples-tvOS.release.xcconfig"; sourceTree = "<group>"; };
AE58C94385B3990A15FEBEAB /_ libPods-examples-tvOSTests.a _/ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = "libPods-examples-tvOSTests.a"; sourceTree = BUILT_PRODUCTS_DIR; };
C64610AFBA96E83FDDA6BCF5 /_ libPods-examples.a _/ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = "libPods-examples.a"; sourceTree = BUILT_PRODUCTS_DIR; };
D75E96F6BB25B7F4475E8247 /_ Pods-examplesTests.release.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-examplesTests.release.xcconfig"; path = "Target Support Files/Pods-examplesTests/Pods-examplesTests.release.xcconfig"; sourceTree = "<group>"; };
ED297162215061F000B7C4FE /_ JavaScriptCore.framework _/ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = JavaScriptCore.framework; path = System/Library/Frameworks/JavaScriptCore.framework; sourceTree = SDKROOT; };
ED2971642150620600B7C4FE /_ JavaScriptCore.framework _/ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = JavaScriptCore.framework; path = Platforms/AppleTVOS.platform/Developer/SDKs/AppleTVOS12.0.sdk/System/Library/Frameworks/JavaScriptCore.framework; sourceTree = DEVELOPER_DIR; };
/_ End PBXFileReference section _/

/_ Begin PBXFrameworksBuildPhase section _/
00E356EB1AD99517003FC87E /_ Frameworks _/ = {
isa = PBXFrameworksBuildPhase;
buildActionMask = 2147483647;
files = (
073B8355E279210B358A0178 /_ libPods-examplesTests.a in Frameworks _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
13B07F8C1A680F5B00A75B9A /_ Frameworks _/ = {
isa = PBXFrameworksBuildPhase;
buildActionMask = 2147483647;
files = (
ACA2E00B7D57720E802A98DA /_ libPods-examples.a in Frameworks _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
2D02E4781E0B4A5D006451C7 /_ Frameworks _/ = {
isa = PBXFrameworksBuildPhase;
buildActionMask = 2147483647;
files = (
5F23F3D973322DEDD3AC231D /_ libPods-examples-tvOS.a in Frameworks _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
2D02E48D1E0B4A5D006451C7 /_ Frameworks _/ = {
isa = PBXFrameworksBuildPhase;
buildActionMask = 2147483647;
files = (
F78C1DD9D4E6AF9D5A195B5D /_ libPods-examples-tvOSTests.a in Frameworks _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
/_ End PBXFrameworksBuildPhase section _/

/_ Begin PBXGroup section _/
00E356EF1AD99517003FC87E /_ examplesTests _/ = {
isa = PBXGroup;
children = (
00E356F21AD99517003FC87E /_ examplesTests.m _/,
00E356F01AD99517003FC87E /_ Supporting Files _/,
);
path = examplesTests;
sourceTree = "<group>";
};
00E356F01AD99517003FC87E /_ Supporting Files _/ = {
isa = PBXGroup;
children = (
00E356F11AD99517003FC87E /_ Info.plist _/,
);
name = "Supporting Files";
sourceTree = "<group>";
};
13B07FAE1A68108700A75B9A /_ examples _/ = {
isa = PBXGroup;
children = (
008F07F21AC5B25A0029DE68 /_ main.jsbundle _/,
13B07FAF1A68108700A75B9A /_ AppDelegate.h _/,
13B07FB01A68108700A75B9A /_ AppDelegate.m _/,
13B07FB51A68108700A75B9A /_ Images.xcassets _/,
13B07FB61A68108700A75B9A /_ Info.plist _/,
13B07FB11A68108700A75B9A /_ LaunchScreen.xib _/,
13B07FB71A68108700A75B9A /_ main.m _/,
);
name = examples;
sourceTree = "<group>";
};
2D16E6871FA4F8E400B85C8A /_ Frameworks _/ = {
isa = PBXGroup;
children = (
ED297162215061F000B7C4FE /_ JavaScriptCore.framework _/,
ED2971642150620600B7C4FE /_ JavaScriptCore.framework _/,
C64610AFBA96E83FDDA6BCF5 /_ libPods-examples.a _/,
8593F66191A8FFA04628E590 /_ libPods-examples-tvOS.a _/,
AE58C94385B3990A15FEBEAB /_ libPods-examples-tvOSTests.a _/,
7C4131D052E7D6F8A4D054A8 /_ libPods-examplesTests.a _/,
);
name = Frameworks;
sourceTree = "<group>";
};
8006AD69FE8EAFA8CF40E998 /_ Pods _/ = {
isa = PBXGroup;
children = (
630CDFB4166145771886AB02 /_ Pods-examples.debug.xcconfig _/,
92B5115BF52F24D6F9494D7E /_ Pods-examples.release.xcconfig _/,
33E1C601310E71BFA99167B2 /_ Pods-examples-tvOS.debug.xcconfig _/,
A8F6826D16AA3CAAF25E7693 /_ Pods-examples-tvOS.release.xcconfig _/,
60FA21D121821EE076453629 /_ Pods-examples-tvOSTests.debug.xcconfig _/,
005A27D0448C5695A79AB311 /_ Pods-examples-tvOSTests.release.xcconfig _/,
A8CCE8BE1CFAF9D3C9A30B40 /_ Pods-examplesTests.debug.xcconfig _/,
D75E96F6BB25B7F4475E8247 /_ Pods-examplesTests.release.xcconfig _/,
);
name = Pods;
path = Pods;
sourceTree = "<group>";
};
832341AE1AAA6A7D00B99B32 /_ Libraries _/ = {
isa = PBXGroup;
children = (
);
name = Libraries;
sourceTree = "<group>";
};
83CBB9F61A601CBA00E9B192 = {
isa = PBXGroup;
children = (
13B07FAE1A68108700A75B9A /_ examples _/,
832341AE1AAA6A7D00B99B32 /_ Libraries _/,
00E356EF1AD99517003FC87E /_ examplesTests _/,
83CBBA001A601CBA00E9B192 /_ Products _/,
2D16E6871FA4F8E400B85C8A /_ Frameworks _/,
8006AD69FE8EAFA8CF40E998 /_ Pods _/,
);
indentWidth = 2;
sourceTree = "<group>";
tabWidth = 2;
usesTabs = 0;
};
83CBBA001A601CBA00E9B192 /_ Products _/ = {
isa = PBXGroup;
children = (
13B07F961A680F5B00A75B9A /_ examples.app _/,
00E356EE1AD99517003FC87E /_ examplesTests.xctest _/,
2D02E47B1E0B4A5D006451C7 /_ examples-tvOS.app _/,
2D02E4901E0B4A5D006451C7 /_ examples-tvOSTests.xctest _/,
);
name = Products;
sourceTree = "<group>";
};
/_ End PBXGroup section _/

/_ Begin PBXNativeTarget section _/
00E356ED1AD99517003FC87E /_ examplesTests _/ = {
isa = PBXNativeTarget;
buildConfigurationList = 00E357021AD99517003FC87E /_ Build configuration list for PBXNativeTarget "examplesTests" _/;
buildPhases = (
1E3654ADFD28571C966571ED /_ [CP] Check Pods Manifest.lock _/,
00E356EA1AD99517003FC87E /_ Sources _/,
00E356EB1AD99517003FC87E /_ Frameworks _/,
00E356EC1AD99517003FC87E /_ Resources _/,
);
buildRules = (
);
dependencies = (
00E356F51AD99517003FC87E /_ PBXTargetDependency _/,
);
name = examplesTests;
productName = examplesTests;
productReference = 00E356EE1AD99517003FC87E /_ examplesTests.xctest _/;
productType = "com.apple.product-type.bundle.unit-test";
};
13B07F861A680F5B00A75B9A /_ examples _/ = {
isa = PBXNativeTarget;
buildConfigurationList = 13B07F931A680F5B00A75B9A /_ Build configuration list for PBXNativeTarget "examples" _/;
buildPhases = (
88A3D288572FEFD4D2BECAC5 /_ [CP] Check Pods Manifest.lock _/,
FD10A7F022414F080027D42C /_ Start Packager _/,
13B07F871A680F5B00A75B9A /_ Sources _/,
13B07F8C1A680F5B00A75B9A /_ Frameworks _/,
13B07F8E1A680F5B00A75B9A /_ Resources _/,
00DD1BFF1BD5951E006B06BC /_ Bundle React Native code and images _/,
);
buildRules = (
);
dependencies = (
);
name = examples;
productName = examples;
productReference = 13B07F961A680F5B00A75B9A /_ examples.app _/;
productType = "com.apple.product-type.application";
};
2D02E47A1E0B4A5D006451C7 /_ examples-tvOS _/ = {
isa = PBXNativeTarget;
buildConfigurationList = 2D02E4BA1E0B4A5E006451C7 /_ Build configuration list for PBXNativeTarget "examples-tvOS" _/;
buildPhases = (
43FFDE46011B0B8541D10623 /_ [CP] Check Pods Manifest.lock _/,
FD10A7F122414F3F0027D42C /_ Start Packager _/,
2D02E4771E0B4A5D006451C7 /_ Sources _/,
2D02E4781E0B4A5D006451C7 /_ Frameworks _/,
2D02E4791E0B4A5D006451C7 /_ Resources _/,
2D02E4CB1E0B4B27006451C7 /_ Bundle React Native Code And Images _/,
);
buildRules = (
);
dependencies = (
);
name = "examples-tvOS";
productName = "examples-tvOS";
productReference = 2D02E47B1E0B4A5D006451C7 /_ examples-tvOS.app _/;
productType = "com.apple.product-type.application";
};
2D02E48F1E0B4A5D006451C7 /_ examples-tvOSTests _/ = {
isa = PBXNativeTarget;
buildConfigurationList = 2D02E4BB1E0B4A5E006451C7 /_ Build configuration list for PBXNativeTarget "examples-tvOSTests" _/;
buildPhases = (
F563263ABC39B3FF843D3A78 /_ [CP] Check Pods Manifest.lock _/,
2D02E48C1E0B4A5D006451C7 /_ Sources _/,
2D02E48D1E0B4A5D006451C7 /_ Frameworks _/,
2D02E48E1E0B4A5D006451C7 /_ Resources _/,
);
buildRules = (
);
dependencies = (
2D02E4921E0B4A5D006451C7 /_ PBXTargetDependency _/,
);
name = "examples-tvOSTests";
productName = "examples-tvOSTests";
productReference = 2D02E4901E0B4A5D006451C7 /_ examples-tvOSTests.xctest _/;
productType = "com.apple.product-type.bundle.unit-test";
};
/_ End PBXNativeTarget section _/

/_ Begin PBXProject section _/
83CBB9F71A601CBA00E9B192 /_ Project object _/ = {
isa = PBXProject;
attributes = {
LastUpgradeCheck = 0940;
ORGANIZATIONNAME = Facebook;
TargetAttributes = {
00E356ED1AD99517003FC87E = {
CreatedOnToolsVersion = 6.2;
TestTargetID = 13B07F861A680F5B00A75B9A;
};
2D02E47A1E0B4A5D006451C7 = {
CreatedOnToolsVersion = 8.2.1;
ProvisioningStyle = Automatic;
};
2D02E48F1E0B4A5D006451C7 = {
CreatedOnToolsVersion = 8.2.1;
ProvisioningStyle = Automatic;
TestTargetID = 2D02E47A1E0B4A5D006451C7;
};
};
};
buildConfigurationList = 83CBB9FA1A601CBA00E9B192 /_ Build configuration list for PBXProject "examples" _/;
compatibilityVersion = "Xcode 3.2";
developmentRegion = English;
hasScannedForEncodings = 0;
knownRegions = (
en,
Base,
);
mainGroup = 83CBB9F61A601CBA00E9B192;
productRefGroup = 83CBBA001A601CBA00E9B192 /_ Products _/;
projectDirPath = "";
projectRoot = "";
targets = (
13B07F861A680F5B00A75B9A /_ examples _/,
00E356ED1AD99517003FC87E /_ examplesTests _/,
2D02E47A1E0B4A5D006451C7 /_ examples-tvOS _/,
2D02E48F1E0B4A5D006451C7 /_ examples-tvOSTests _/,
);
};
/_ End PBXProject section _/

/_ Begin PBXResourcesBuildPhase section _/
00E356EC1AD99517003FC87E /_ Resources _/ = {
isa = PBXResourcesBuildPhase;
buildActionMask = 2147483647;
files = (
);
runOnlyForDeploymentPostprocessing = 0;
};
13B07F8E1A680F5B00A75B9A /_ Resources _/ = {
isa = PBXResourcesBuildPhase;
buildActionMask = 2147483647;
files = (
13B07FBF1A68108700A75B9A /_ Images.xcassets in Resources _/,
13B07FBD1A68108700A75B9A /_ LaunchScreen.xib in Resources _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
2D02E4791E0B4A5D006451C7 /_ Resources _/ = {
isa = PBXResourcesBuildPhase;
buildActionMask = 2147483647;
files = (
2D02E4BD1E0B4A84006451C7 /_ Images.xcassets in Resources _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
2D02E48E1E0B4A5D006451C7 /_ Resources _/ = {
isa = PBXResourcesBuildPhase;
buildActionMask = 2147483647;
files = (
);
runOnlyForDeploymentPostprocessing = 0;
};
/_ End PBXResourcesBuildPhase section _/

/_ Begin PBXShellScriptBuildPhase section _/
00DD1BFF1BD5951E006B06BC /_ Bundle React Native code and images _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputPaths = (
);
name = "Bundle React Native code and images";
outputPaths = (
);
runOnlyForDeploymentPostprocessing = 0;
shellPath = /bin/sh;
shellScript = "export NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh";
};
1E3654ADFD28571C966571ED /_ [CP] Check Pods Manifest.lock _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputFileListPaths = (
);
inputPaths = (
"${PODS_PODFILE_DIR_PATH}/Podfile.lock",
				"${PODS_ROOT}/Manifest.lock",
);
name = "[CP] Check Pods Manifest.lock";
outputFileListPaths = (
);
outputPaths = (
"$(DERIVED_FILE_DIR)/Pods-examplesTests-checkManifestLockResult.txt",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
showEnvVarsInLog = 0;
};
2D02E4CB1E0B4B27006451C7 /_ Bundle React Native Code And Images _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputPaths = (
);
name = "Bundle React Native Code And Images";
outputPaths = (
);
runOnlyForDeploymentPostprocessing = 0;
shellPath = /bin/sh;
shellScript = "export NODE_BINARY=node\n../node_modules/react-native/scripts/react-native-xcode.sh";
};
43FFDE46011B0B8541D10623 /_ [CP] Check Pods Manifest.lock _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputFileListPaths = (
);
inputPaths = (
"${PODS_PODFILE_DIR_PATH}/Podfile.lock",
				"${PODS_ROOT}/Manifest.lock",
);
name = "[CP] Check Pods Manifest.lock";
outputFileListPaths = (
);
outputPaths = (
"$(DERIVED_FILE_DIR)/Pods-examples-tvOS-checkManifestLockResult.txt",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
showEnvVarsInLog = 0;
};
88A3D288572FEFD4D2BECAC5 /_ [CP] Check Pods Manifest.lock _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputFileListPaths = (
);
inputPaths = (
"${PODS_PODFILE_DIR_PATH}/Podfile.lock",
				"${PODS_ROOT}/Manifest.lock",
);
name = "[CP] Check Pods Manifest.lock";
outputFileListPaths = (
);
outputPaths = (
"$(DERIVED_FILE_DIR)/Pods-examples-checkManifestLockResult.txt",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
showEnvVarsInLog = 0;
};
F563263ABC39B3FF843D3A78 /_ [CP] Check Pods Manifest.lock _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputFileListPaths = (
);
inputPaths = (
"${PODS_PODFILE_DIR_PATH}/Podfile.lock",
				"${PODS_ROOT}/Manifest.lock",
);
name = "[CP] Check Pods Manifest.lock";
outputFileListPaths = (
);
outputPaths = (
"$(DERIVED_FILE_DIR)/Pods-examples-tvOSTests-checkManifestLockResult.txt",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
showEnvVarsInLog = 0;
};
FD10A7F022414F080027D42C /_ Start Packager _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputFileListPaths = (
);
inputPaths = (
);
name = "Start Packager";
outputFileListPaths = (
);
outputPaths = (
);
runOnlyForDeploymentPostprocessing = 0;
shellPath = /bin/sh;
shellScript = "export RCT_METRO_PORT=\"${RCT_METRO_PORT:=8081}\"\necho \"export RCT_METRO_PORT=${RCT_METRO_PORT}\" > \"${SRCROOT}/../node_modules/react-native/scripts/.packager.env\"\nif [ -z \"${RCT_NO_LAUNCH_PACKAGER+xxx}\" ] ; then\n if nc -w 5 -z localhost ${RCT_METRO_PORT} ; then\n    if ! curl -s \"http://localhost:${RCT_METRO_PORT}/status\" | grep -q \"packager-status:running\" ; then\n echo \"Port ${RCT_METRO_PORT} already in use, packager is either not running or not running correctly\"\n      exit 2\n    fi\n  else\n    open \"$SRCROOT/../node_modules/react-native/scripts/launchPackager.command\" || echo \"Can't start packager automatically\"\n fi\nfi\n";
showEnvVarsInLog = 0;
};
FD10A7F122414F3F0027D42C /_ Start Packager _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputFileListPaths = (
);
inputPaths = (
);
name = "Start Packager";
outputFileListPaths = (
);
outputPaths = (
);
runOnlyForDeploymentPostprocessing = 0;
shellPath = /bin/sh;
shellScript = "export RCT_METRO_PORT=\"${RCT_METRO_PORT:=8081}\"\necho \"export RCT_METRO_PORT=${RCT_METRO_PORT}\" > \"${SRCROOT}/../node_modules/react-native/scripts/.packager.env\"\nif [ -z \"${RCT_NO_LAUNCH_PACKAGER+xxx}\" ] ; then\n if nc -w 5 -z localhost ${RCT_METRO_PORT} ; then\n    if ! curl -s \"http://localhost:${RCT_METRO_PORT}/status\" | grep -q \"packager-status:running\" ; then\n echo \"Port ${RCT_METRO_PORT} already in use, packager is either not running or not running correctly\"\n      exit 2\n    fi\n  else\n    open \"$SRCROOT/../node_modules/react-native/scripts/launchPackager.command\" || echo \"Can't start packager automatically\"\n fi\nfi\n";
showEnvVarsInLog = 0;
};
/_ End PBXShellScriptBuildPhase section _/

/_ Begin PBXSourcesBuildPhase section _/
00E356EA1AD99517003FC87E /_ Sources _/ = {
isa = PBXSourcesBuildPhase;
buildActionMask = 2147483647;
files = (
00E356F31AD99517003FC87E /_ examplesTests.m in Sources _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
13B07F871A680F5B00A75B9A /_ Sources _/ = {
isa = PBXSourcesBuildPhase;
buildActionMask = 2147483647;
files = (
13B07FBC1A68108700A75B9A /_ AppDelegate.m in Sources _/,
13B07FC11A68108700A75B9A /_ main.m in Sources _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
2D02E4771E0B4A5D006451C7 /_ Sources _/ = {
isa = PBXSourcesBuildPhase;
buildActionMask = 2147483647;
files = (
2D02E4BF1E0B4AB3006451C7 /_ main.m in Sources _/,
2D02E4BC1E0B4A80006451C7 /_ AppDelegate.m in Sources _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
2D02E48C1E0B4A5D006451C7 /_ Sources _/ = {
isa = PBXSourcesBuildPhase;
buildActionMask = 2147483647;
files = (
2DCD954D1E0B4F2C00145EB5 /_ examplesTests.m in Sources _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
/_ End PBXSourcesBuildPhase section _/

/_ Begin PBXTargetDependency section _/
00E356F51AD99517003FC87E /_ PBXTargetDependency _/ = {
isa = PBXTargetDependency;
target = 13B07F861A680F5B00A75B9A /_ examples _/;
targetProxy = 00E356F41AD99517003FC87E /_ PBXContainerItemProxy _/;
};
2D02E4921E0B4A5D006451C7 /_ PBXTargetDependency _/ = {
isa = PBXTargetDependency;
target = 2D02E47A1E0B4A5D006451C7 /_ examples-tvOS _/;
targetProxy = 2D02E4911E0B4A5D006451C7 /_ PBXContainerItemProxy _/;
};
/_ End PBXTargetDependency section _/

/_ Begin PBXVariantGroup section _/
13B07FB11A68108700A75B9A /_ LaunchScreen.xib _/ = {
isa = PBXVariantGroup;
children = (
13B07FB21A68108700A75B9A /_ Base _/,
);
name = LaunchScreen.xib;
path = examples;
sourceTree = "<group>";
};
/_ End PBXVariantGroup section _/

/_ Begin XCBuildConfiguration section _/
00E356F61AD99517003FC87E /_ Debug _/ = {
isa = XCBuildConfiguration;
baseConfigurationReference = A8CCE8BE1CFAF9D3C9A30B40 /_ Pods-examplesTests.debug.xcconfig _/;
buildSettings = {
BUNDLE_LOADER = "$(TEST_HOST)";
				GCC_PREPROCESSOR_DEFINITIONS = (
					"DEBUG=1",
					"$(inherited)",
);
INFOPLIST_FILE = examplesTests/Info.plist;
IPHONEOS_DEPLOYMENT_TARGET = 9.0;
LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @loader_path/Frameworks";
				OTHER_LDFLAGS = (
					"-ObjC",
					"-lc++",
					"$(inherited)",
);
PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
				PRODUCT_NAME = "$(TARGET_NAME)";
TEST_HOST = "$(BUILT_PRODUCTS_DIR)/examples.app/examples";
			};
			name = Debug;
		};
		00E356F71AD99517003FC87E /* Release */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = D75E96F6BB25B7F4475E8247 /* Pods-examplesTests.release.xcconfig */;
			buildSettings = {
				BUNDLE_LOADER = "$(TEST_HOST)";
COPY_PHASE_STRIP = NO;
INFOPLIST_FILE = examplesTests/Info.plist;
IPHONEOS_DEPLOYMENT_TARGET = 9.0;
LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @loader_path/Frameworks";
				OTHER_LDFLAGS = (
					"-ObjC",
					"-lc++",
					"$(inherited)",
);
PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
				PRODUCT_NAME = "$(TARGET_NAME)";
TEST_HOST = "$(BUILT_PRODUCTS_DIR)/examples.app/examples";
			};
			name = Release;
		};
		13B07F941A680F5B00A75B9A /* Debug */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = 630CDFB4166145771886AB02 /* Pods-examples.debug.xcconfig */;
			buildSettings = {
				ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
				CURRENT_PROJECT_VERSION = 1;
				DEAD_CODE_STRIPPING = NO;
				INFOPLIST_FILE = examples/Info.plist;
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
OTHER_LDFLAGS = (
"$(inherited)",
					"-ObjC",
					"-lc++",
				);
				PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
PRODUCT_NAME = examples;
VERSIONING_SYSTEM = "apple-generic";
};
name = Debug;
};
13B07F951A680F5B00A75B9A /_ Release _/ = {
isa = XCBuildConfiguration;
baseConfigurationReference = 92B5115BF52F24D6F9494D7E /_ Pods-examples.release.xcconfig _/;
buildSettings = {
ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
CURRENT_PROJECT_VERSION = 1;
INFOPLIST_FILE = examples/Info.plist;
LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
				OTHER_LDFLAGS = (
					"$(inherited)",
"-ObjC",
"-lc++",
);
PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
				PRODUCT_NAME = examples;
				VERSIONING_SYSTEM = "apple-generic";
			};
			name = Release;
		};
		2D02E4971E0B4A5E006451C7 /* Debug */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = 33E1C601310E71BFA99167B2 /* Pods-examples-tvOS.debug.xcconfig */;
			buildSettings = {
				ASSETCATALOG_COMPILER_APPICON_NAME = "App Icon & Top Shelf Image";
				ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = LaunchImage;
				CLANG_ANALYZER_NONNULL = YES;
				CLANG_WARN_DOCUMENTATION_COMMENTS = YES;
				CLANG_WARN_INFINITE_RECURSION = YES;
				CLANG_WARN_SUSPICIOUS_MOVE = YES;
				DEBUG_INFORMATION_FORMAT = dwarf;
				ENABLE_TESTABILITY = YES;
				GCC_NO_COMMON_BLOCKS = YES;
				INFOPLIST_FILE = "examples-tvOS/Info.plist";
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
OTHER_LDFLAGS = (
"$(inherited)",
					"-ObjC",
					"-lc++",
				);
				PRODUCT_BUNDLE_IDENTIFIER = "com.facebook.REACT.examples-tvOS";
				PRODUCT_NAME = "$(TARGET_NAME)";
SDKROOT = appletvos;
TARGETED_DEVICE_FAMILY = 3;
TVOS_DEPLOYMENT_TARGET = 9.2;
};
name = Debug;
};
2D02E4981E0B4A5E006451C7 /_ Release _/ = {
isa = XCBuildConfiguration;
baseConfigurationReference = A8F6826D16AA3CAAF25E7693 /_ Pods-examples-tvOS.release.xcconfig _/;
buildSettings = {
ASSETCATALOG_COMPILER_APPICON_NAME = "App Icon & Top Shelf Image";
ASSETCATALOG_COMPILER_LAUNCHIMAGE_NAME = LaunchImage;
CLANG_ANALYZER_NONNULL = YES;
CLANG_WARN_DOCUMENTATION_COMMENTS = YES;
CLANG_WARN_INFINITE_RECURSION = YES;
CLANG_WARN_SUSPICIOUS_MOVE = YES;
COPY_PHASE_STRIP = NO;
DEBUG_INFORMATION_FORMAT = "dwarf-with-dsym";
GCC_NO_COMMON_BLOCKS = YES;
INFOPLIST_FILE = "examples-tvOS/Info.plist";
LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks";
				OTHER_LDFLAGS = (
					"$(inherited)",
"-ObjC",
"-lc++",
);
PRODUCT_BUNDLE_IDENTIFIER = "com.facebook.REACT.examples-tvOS";
PRODUCT_NAME = "$(TARGET_NAME)";
				SDKROOT = appletvos;
				TARGETED_DEVICE_FAMILY = 3;
				TVOS_DEPLOYMENT_TARGET = 9.2;
			};
			name = Release;
		};
		2D02E4991E0B4A5E006451C7 /* Debug */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = 60FA21D121821EE076453629 /* Pods-examples-tvOSTests.debug.xcconfig */;
			buildSettings = {
				BUNDLE_LOADER = "$(TEST_HOST)";
CLANG_ANALYZER_NONNULL = YES;
CLANG_WARN_DOCUMENTATION_COMMENTS = YES;
CLANG_WARN_INFINITE_RECURSION = YES;
CLANG_WARN_SUSPICIOUS_MOVE = YES;
DEBUG_INFORMATION_FORMAT = dwarf;
ENABLE_TESTABILITY = YES;
GCC_NO_COMMON_BLOCKS = YES;
INFOPLIST_FILE = "examples-tvOSTests/Info.plist";
LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @loader_path/Frameworks";
				OTHER_LDFLAGS = (
					"$(inherited)",
"-ObjC",
"-lc++",
);
PRODUCT_BUNDLE_IDENTIFIER = "com.facebook.REACT.examples-tvOSTests";
PRODUCT_NAME = "$(TARGET_NAME)";
				SDKROOT = appletvos;
				TEST_HOST = "$(BUILT_PRODUCTS_DIR)/examples-tvOS.app/examples-tvOS";
TVOS_DEPLOYMENT_TARGET = 10.1;
};
name = Debug;
};
2D02E49A1E0B4A5E006451C7 /_ Release _/ = {
isa = XCBuildConfiguration;
baseConfigurationReference = 005A27D0448C5695A79AB311 /_ Pods-examples-tvOSTests.release.xcconfig _/;
buildSettings = {
BUNDLE_LOADER = "$(TEST_HOST)";
				CLANG_ANALYZER_NONNULL = YES;
				CLANG_WARN_DOCUMENTATION_COMMENTS = YES;
				CLANG_WARN_INFINITE_RECURSION = YES;
				CLANG_WARN_SUSPICIOUS_MOVE = YES;
				COPY_PHASE_STRIP = NO;
				DEBUG_INFORMATION_FORMAT = "dwarf-with-dsym";
				GCC_NO_COMMON_BLOCKS = YES;
				INFOPLIST_FILE = "examples-tvOSTests/Info.plist";
				LD_RUNPATH_SEARCH_PATHS = "$(inherited) @executable_path/Frameworks @loader_path/Frameworks";
OTHER_LDFLAGS = (
"$(inherited)",
					"-ObjC",
					"-lc++",
				);
				PRODUCT_BUNDLE_IDENTIFIER = "com.facebook.REACT.examples-tvOSTests";
				PRODUCT_NAME = "$(TARGET_NAME)";
SDKROOT = appletvos;
TEST_HOST = "$(BUILT_PRODUCTS_DIR)/examples-tvOS.app/examples-tvOS";
				TVOS_DEPLOYMENT_TARGET = 10.1;
			};
			name = Release;
		};
		83CBBA201A601CBA00E9B192 /* Debug */ = {
			isa = XCBuildConfiguration;
			buildSettings = {
				ALWAYS_SEARCH_USER_PATHS = NO;
				CLANG_CXX_LANGUAGE_STANDARD = "gnu++0x";
				CLANG_CXX_LIBRARY = "libc++";
				CLANG_ENABLE_MODULES = YES;
				CLANG_ENABLE_OBJC_ARC = YES;
				CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING = YES;
				CLANG_WARN_BOOL_CONVERSION = YES;
				CLANG_WARN_COMMA = YES;
				CLANG_WARN_CONSTANT_CONVERSION = YES;
				CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS = YES;
				CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
				CLANG_WARN_EMPTY_BODY = YES;
				CLANG_WARN_ENUM_CONVERSION = YES;
				CLANG_WARN_INFINITE_RECURSION = YES;
				CLANG_WARN_INT_CONVERSION = YES;
				CLANG_WARN_NON_LITERAL_NULL_CONVERSION = YES;
				CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF = YES;
				CLANG_WARN_OBJC_LITERAL_CONVERSION = YES;
				CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
				CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
				CLANG_WARN_STRICT_PROTOTYPES = YES;
				CLANG_WARN_SUSPICIOUS_MOVE = YES;
				CLANG_WARN_UNREACHABLE_CODE = YES;
				CLANG_WARN__DUPLICATE_METHOD_MATCH = YES;
				"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
				COPY_PHASE_STRIP = NO;
				ENABLE_STRICT_OBJC_MSGSEND = YES;
				ENABLE_TESTABILITY = YES;
				GCC_C_LANGUAGE_STANDARD = gnu99;
				GCC_DYNAMIC_NO_PIC = NO;
				GCC_NO_COMMON_BLOCKS = YES;
				GCC_OPTIMIZATION_LEVEL = 0;
				GCC_PREPROCESSOR_DEFINITIONS = (
					"DEBUG=1",
					"$(inherited)",
);
GCC_SYMBOLS_PRIVATE_EXTERN = NO;
GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
GCC_WARN_UNDECLARED_SELECTOR = YES;
GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
GCC_WARN_UNUSED_FUNCTION = YES;
GCC_WARN_UNUSED_VARIABLE = YES;
IPHONEOS_DEPLOYMENT_TARGET = 9.0;
MTL_ENABLE_DEBUG_INFO = YES;
ONLY_ACTIVE_ARCH = YES;
SDKROOT = iphoneos;
};
name = Debug;
};
83CBBA211A601CBA00E9B192 /_ Release _/ = {
isa = XCBuildConfiguration;
buildSettings = {
ALWAYS_SEARCH_USER_PATHS = NO;
CLANG_CXX_LANGUAGE_STANDARD = "gnu++0x";
CLANG_CXX_LIBRARY = "libc++";
CLANG_ENABLE_MODULES = YES;
CLANG_ENABLE_OBJC_ARC = YES;
CLANG_WARN_BLOCK_CAPTURE_AUTORELEASING = YES;
CLANG_WARN_BOOL_CONVERSION = YES;
CLANG_WARN_COMMA = YES;
CLANG_WARN_CONSTANT_CONVERSION = YES;
CLANG_WARN_DEPRECATED_OBJC_IMPLEMENTATIONS = YES;
CLANG_WARN_DIRECT_OBJC_ISA_USAGE = YES_ERROR;
CLANG_WARN_EMPTY_BODY = YES;
CLANG_WARN_ENUM_CONVERSION = YES;
CLANG_WARN_INFINITE_RECURSION = YES;
CLANG_WARN_INT_CONVERSION = YES;
CLANG_WARN_NON_LITERAL_NULL_CONVERSION = YES;
CLANG_WARN_OBJC_IMPLICIT_RETAIN_SELF = YES;
CLANG_WARN_OBJC_LITERAL_CONVERSION = YES;
CLANG_WARN_OBJC_ROOT_CLASS = YES_ERROR;
CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
CLANG_WARN_STRICT_PROTOTYPES = YES;
CLANG_WARN_SUSPICIOUS_MOVE = YES;
CLANG_WARN_UNREACHABLE_CODE = YES;
CLANG_WARN\_\_DUPLICATE_METHOD_MATCH = YES;
"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
COPY_PHASE_STRIP = YES;
ENABLE_NS_ASSERTIONS = NO;
ENABLE_STRICT_OBJC_MSGSEND = YES;
GCC_C_LANGUAGE_STANDARD = gnu99;
GCC_NO_COMMON_BLOCKS = YES;
GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
GCC_WARN_UNDECLARED_SELECTOR = YES;
GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
GCC_WARN_UNUSED_FUNCTION = YES;
GCC_WARN_UNUSED_VARIABLE = YES;
IPHONEOS_DEPLOYMENT_TARGET = 9.0;
MTL_ENABLE_DEBUG_INFO = NO;
SDKROOT = iphoneos;
VALIDATE_PRODUCT = YES;
};
name = Release;
};
/_ End XCBuildConfiguration section _/

/_ Begin XCConfigurationList section _/
00E357021AD99517003FC87E /_ Build configuration list for PBXNativeTarget "examplesTests" _/ = {
isa = XCConfigurationList;
buildConfigurations = (
00E356F61AD99517003FC87E /_ Debug _/,
00E356F71AD99517003FC87E /_ Release _/,
);
defaultConfigurationIsVisible = 0;
defaultConfigurationName = Release;
};
13B07F931A680F5B00A75B9A /_ Build configuration list for PBXNativeTarget "examples" _/ = {
isa = XCConfigurationList;
buildConfigurations = (
13B07F941A680F5B00A75B9A /_ Debug _/,
13B07F951A680F5B00A75B9A /_ Release _/,
);
defaultConfigurationIsVisible = 0;
defaultConfigurationName = Release;
};
2D02E4BA1E0B4A5E006451C7 /_ Build configuration list for PBXNativeTarget "examples-tvOS" _/ = {
isa = XCConfigurationList;
buildConfigurations = (
2D02E4971E0B4A5E006451C7 /_ Debug _/,
2D02E4981E0B4A5E006451C7 /_ Release _/,
);
defaultConfigurationIsVisible = 0;
defaultConfigurationName = Release;
};
2D02E4BB1E0B4A5E006451C7 /_ Build configuration list for PBXNativeTarget "examples-tvOSTests" _/ = {
isa = XCConfigurationList;
buildConfigurations = (
2D02E4991E0B4A5E006451C7 /_ Debug _/,
2D02E49A1E0B4A5E006451C7 /_ Release _/,
);
defaultConfigurationIsVisible = 0;
defaultConfigurationName = Release;
};
83CBB9FA1A601CBA00E9B192 /_ Build configuration list for PBXProject "examples" _/ = {
isa = XCConfigurationList;
buildConfigurations = (
83CBBA201A601CBA00E9B192 /_ Debug _/,
83CBBA211A601CBA00E9B192 /_ Release _/,
);
defaultConfigurationIsVisible = 0;
defaultConfigurationName = Release;
};
/_ End XCConfigurationList section _/
};
rootObject = 83CBB9F71A601CBA00E9B192 /_ Project object _/;
}
</file>

<file path="examples/ios/examples.xcworkspace/contents.xcworkspacedata">
<?xml version="1.0" encoding="UTF-8"?>
<Workspace
   version = "1.0">
   <FileRef
      location = "group:examples.xcodeproj">
   </FileRef>
   <FileRef
      location = "group:Pods/Pods.xcodeproj">
   </FileRef>
</Workspace>
</file>

<file path="examples/ios/examplesTests/examplesTests.m">
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <UIKit/UIKit.h>
#import <XCTest/XCTest.h>

#import <React/RCTLog.h>
#import <React/RCTRootView.h>

#define TIMEOUT_SECONDS 600
#define TEXT_TO_LOOK_FOR @"Welcome to React Native!"

@interface examplesTests : XCTestCase

@end

@implementation examplesTests

- (BOOL)findSubviewInView:(UIView *)view matching:(BOOL(^)(UIView *view))test
  {
  if (test(view)) {
  return YES;
  }
  for (UIView \*subview in [view subviews]) {
  if ([self findSubviewInView:subview matching:test]) {
  return YES;
  }
  }
  return NO;
  }

- (void)testRendersWelcomeScreen
  {
  UIViewController *vc = [[[RCTSharedApplication() delegate] window] rootViewController];
  NSDate *date = [NSDate dateWithTimeIntervalSinceNow:TIMEOUT_SECONDS];
  BOOL foundElement = NO;

  \_\_block NSString *redboxError = nil;
  RCTSetLogFunction(^(RCTLogLevel level, RCTLogSource source, NSString *fileName, NSNumber *lineNumber, NSString *message) {
  if (level >= RCTLogLevelError) {
  redboxError = message;
  }
  });

  while ([date timeIntervalSinceNow] > 0 && !foundElement && !redboxError) {
  [[NSRunLoop mainRunLoop] runMode:NSDefaultRunLoopMode beforeDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];
  [[NSRunLoop mainRunLoop] runMode:NSRunLoopCommonModes beforeDate:[NSDate dateWithTimeIntervalSinceNow:0.1]];

      foundElement = [self findSubviewInView:vc.view matching:^BOOL(UIView *view) {
        if ([view.accessibilityLabel isEqualToString:TEXT_TO_LOOK_FOR]) {
          return YES;
        }
        return NO;
      }];

  }

  RCTSetLogFunction(RCTDefaultLogFunction);

  XCTAssertNil(redboxError, @"RedBox error: %@", redboxError);
  XCTAssertTrue(foundElement, @"Couldn't find element with text '%@' in %d seconds", TEXT_TO_LOOK_FOR, TIMEOUT_SECONDS);
  }

@end
</file>

<file path="examples/ios/examplesTests/Info.plist">
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleExecutable</key>
	<string>$(EXECUTABLE_NAME)</string>
	<key>CFBundleIdentifier</key>
	<string>$(PRODUCT_BUNDLE_IDENTIFIER)</string>
	<key>CFBundleInfoDictionaryVersion</key>
	<string>6.0</string>
	<key>CFBundleName</key>
	<string>$(PRODUCT_NAME)</string>
	<key>CFBundlePackageType</key>
	<string>BNDL</string>
	<key>CFBundleShortVersionString</key>
	<string>1.0</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>1</string>
</dict>
</plist>
</file>

<file path="examples/ios/Podfile">
platform :ios, '9.0'
require_relative '../node_modules/@react-native-community/cli-platform-ios/native_modules'

target 'examples' do

# Pods for examples

pod 'React', :path => '../node_modules/react-native/'
pod 'React-Core', :path => '../node_modules/react-native/React'
pod 'React-DevSupport', :path => '../node_modules/react-native/React'
pod 'React-RCTActionSheet', :path => '../node_modules/react-native/Libraries/ActionSheetIOS'
pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'
pod 'React-RCTBlob', :path => '../node_modules/react-native/Libraries/Blob'
pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'
pod 'React-RCTLinking', :path => '../node_modules/react-native/Libraries/LinkingIOS'
pod 'React-RCTNetwork', :path => '../node_modules/react-native/Libraries/Network'
pod 'React-RCTSettings', :path => '../node_modules/react-native/Libraries/Settings'
pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'
pod 'React-RCTVibration', :path => '../node_modules/react-native/Libraries/Vibration'
pod 'React-RCTWebSocket', :path => '../node_modules/react-native/Libraries/WebSocket'

pod 'React-cxxreact', :path => '../node_modules/react-native/ReactCommon/cxxreact'
pod 'React-jsi', :path => '../node_modules/react-native/ReactCommon/jsi'
pod 'React-jsiexecutor', :path => '../node_modules/react-native/ReactCommon/jsiexecutor'
pod 'React-jsinspector', :path => '../node_modules/react-native/ReactCommon/jsinspector'
pod 'yoga', :path => '../node_modules/react-native/ReactCommon/yoga'

pod 'DoubleConversion', :podspec => '../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec'
pod 'glog', :podspec => '../node_modules/react-native/third-party-podspecs/glog.podspec'
pod 'Folly', :podspec => '../node_modules/react-native/third-party-podspecs/Folly.podspec'

target 'examplesTests' do
inherit! :search_paths # Pods for testing
end

use_native_modules!
end

target 'examples-tvOS' do

# Pods for examples-tvOS

target 'examples-tvOSTests' do
inherit! :search_paths # Pods for testing
end

end
</file>

<file path="examples/ios/Podfile.lock">
PODS:
  - boost-for-react-native (1.63.0)
  - DoubleConversion (1.1.6)
  - Folly (2018.10.22.00):
    - boost-for-react-native
    - DoubleConversion
    - Folly/Default (= 2018.10.22.00)
    - glog
  - Folly/Default (2018.10.22.00):
    - boost-for-react-native
    - DoubleConversion
    - glog
  - glog (0.3.5)
  - React (0.60.5):
    - React-Core (= 0.60.5)
    - React-DevSupport (= 0.60.5)
    - React-RCTActionSheet (= 0.60.5)
    - React-RCTAnimation (= 0.60.5)
    - React-RCTBlob (= 0.60.5)
    - React-RCTImage (= 0.60.5)
    - React-RCTLinking (= 0.60.5)
    - React-RCTNetwork (= 0.60.5)
    - React-RCTSettings (= 0.60.5)
    - React-RCTText (= 0.60.5)
    - React-RCTVibration (= 0.60.5)
    - React-RCTWebSocket (= 0.60.5)
  - React-Core (0.60.5):
    - Folly (= 2018.10.22.00)
    - React-cxxreact (= 0.60.5)
    - React-jsiexecutor (= 0.60.5)
    - yoga (= 0.60.5.React)
  - React-cxxreact (0.60.5):
    - boost-for-react-native (= 1.63.0)
    - DoubleConversion
    - Folly (= 2018.10.22.00)
    - glog
    - React-jsinspector (= 0.60.5)
  - React-DevSupport (0.60.5):
    - React-Core (= 0.60.5)
    - React-RCTWebSocket (= 0.60.5)
  - React-jsi (0.60.5):
    - boost-for-react-native (= 1.63.0)
    - DoubleConversion
    - Folly (= 2018.10.22.00)
    - glog
    - React-jsi/Default (= 0.60.5)
  - React-jsi/Default (0.60.5):
    - boost-for-react-native (= 1.63.0)
    - DoubleConversion
    - Folly (= 2018.10.22.00)
    - glog
  - React-jsiexecutor (0.60.5):
    - DoubleConversion
    - Folly (= 2018.10.22.00)
    - glog
    - React-cxxreact (= 0.60.5)
    - React-jsi (= 0.60.5)
  - React-jsinspector (0.60.5)
  - React-RCTActionSheet (0.60.5):
    - React-Core (= 0.60.5)
  - React-RCTAnimation (0.60.5):
    - React-Core (= 0.60.5)
  - React-RCTBlob (0.60.5):
    - React-Core (= 0.60.5)
    - React-RCTNetwork (= 0.60.5)
    - React-RCTWebSocket (= 0.60.5)
  - React-RCTImage (0.60.5):
    - React-Core (= 0.60.5)
    - React-RCTNetwork (= 0.60.5)
  - React-RCTLinking (0.60.5):
    - React-Core (= 0.60.5)
  - React-RCTNetwork (0.60.5):
    - React-Core (= 0.60.5)
  - React-RCTSettings (0.60.5):
    - React-Core (= 0.60.5)
  - React-RCTText (0.60.5):
    - React-Core (= 0.60.5)
  - React-RCTVibration (0.60.5):
    - React-Core (= 0.60.5)
  - React-RCTWebSocket (0.60.5):
    - React-Core (= 0.60.5)
  - RNGestureHandler (1.4.1):
    - React
  - RNReanimated (1.3.0):
    - React
  - RNScreens (1.0.0-alpha.23):
    - React
  - yoga (0.60.5.React)

DEPENDENCIES:

- DoubleConversion (from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`)
- Folly (from `../node_modules/react-native/third-party-podspecs/Folly.podspec`)
- glog (from `../node_modules/react-native/third-party-podspecs/glog.podspec`)
- React (from `../node_modules/react-native/`)
- React-Core (from `../node_modules/react-native/React`)
- React-cxxreact (from `../node_modules/react-native/ReactCommon/cxxreact`)
- React-DevSupport (from `../node_modules/react-native/React`)
- React-jsi (from `../node_modules/react-native/ReactCommon/jsi`)
- React-jsiexecutor (from `../node_modules/react-native/ReactCommon/jsiexecutor`)
- React-jsinspector (from `../node_modules/react-native/ReactCommon/jsinspector`)
- React-RCTActionSheet (from `../node_modules/react-native/Libraries/ActionSheetIOS`)
- React-RCTAnimation (from `../node_modules/react-native/Libraries/NativeAnimation`)
- React-RCTBlob (from `../node_modules/react-native/Libraries/Blob`)
- React-RCTImage (from `../node_modules/react-native/Libraries/Image`)
- React-RCTLinking (from `../node_modules/react-native/Libraries/LinkingIOS`)
- React-RCTNetwork (from `../node_modules/react-native/Libraries/Network`)
- React-RCTSettings (from `../node_modules/react-native/Libraries/Settings`)
- React-RCTText (from `../node_modules/react-native/Libraries/Text`)
- React-RCTVibration (from `../node_modules/react-native/Libraries/Vibration`)
- React-RCTWebSocket (from `../node_modules/react-native/Libraries/WebSocket`)
- RNGestureHandler (from `../node_modules/react-native-gesture-handler`)
- RNReanimated (from `../node_modules/react-native-reanimated`)
- RNScreens (from `../node_modules/react-native-screens`)
- yoga (from `../node_modules/react-native/ReactCommon/yoga`)

SPEC REPOS:
https://github.com/cocoapods/specs.git: - boost-for-react-native

EXTERNAL SOURCES:
DoubleConversion:
:podspec: "../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec"
Folly:
:podspec: "../node_modules/react-native/third-party-podspecs/Folly.podspec"
glog:
:podspec: "../node_modules/react-native/third-party-podspecs/glog.podspec"
React:
:path: "../node_modules/react-native/"
React-Core:
:path: "../node_modules/react-native/React"
React-cxxreact:
:path: "../node_modules/react-native/ReactCommon/cxxreact"
React-DevSupport:
:path: "../node_modules/react-native/React"
React-jsi:
:path: "../node_modules/react-native/ReactCommon/jsi"
React-jsiexecutor:
:path: "../node_modules/react-native/ReactCommon/jsiexecutor"
React-jsinspector:
:path: "../node_modules/react-native/ReactCommon/jsinspector"
React-RCTActionSheet:
:path: "../node_modules/react-native/Libraries/ActionSheetIOS"
React-RCTAnimation:
:path: "../node_modules/react-native/Libraries/NativeAnimation"
React-RCTBlob:
:path: "../node_modules/react-native/Libraries/Blob"
React-RCTImage:
:path: "../node_modules/react-native/Libraries/Image"
React-RCTLinking:
:path: "../node_modules/react-native/Libraries/LinkingIOS"
React-RCTNetwork:
:path: "../node_modules/react-native/Libraries/Network"
React-RCTSettings:
:path: "../node_modules/react-native/Libraries/Settings"
React-RCTText:
:path: "../node_modules/react-native/Libraries/Text"
React-RCTVibration:
:path: "../node_modules/react-native/Libraries/Vibration"
React-RCTWebSocket:
:path: "../node_modules/react-native/Libraries/WebSocket"
RNGestureHandler:
:path: "../node_modules/react-native-gesture-handler"
RNReanimated:
:path: "../node_modules/react-native-reanimated"
RNScreens:
:path: "../node_modules/react-native-screens"
yoga:
:path: "../node_modules/react-native/ReactCommon/yoga"

SPEC CHECKSUMS:
boost-for-react-native: 39c7adb57c4e60d6c5479dd8623128eb5b3f0f2c
DoubleConversion: 5805e889d232975c086db112ece9ed034df7a0b2
Folly: 30e7936e1c45c08d884aa59369ed951a8e68cf51
glog: 1f3da668190260b06b429bb211bfbee5cd790c28
React: 53c53c4d99097af47cf60594b8706b4e3321e722
React-Core: ba421f6b4f4cbe2fb17c0b6fc675f87622e78a64
React-cxxreact: 8384287780c4999351ad9b6e7a149d9ed10a2395
React-DevSupport: 197fb409737cff2c4f9986e77c220d7452cb9f9f
React-jsi: 4d8c9efb6312a9725b18d6fc818ffc103f60fec2
React-jsiexecutor: 90ad2f9db09513fc763bc757fdc3c4ff8bde2a30
React-jsinspector: e08662d1bf5b129a3d556eb9ea343a3f40353ae4
React-RCTActionSheet: b0f1ea83f4bf75fb966eae9bfc47b78c8d3efd90
React-RCTAnimation: 359ba1b5690b1e87cc173558a78e82d35919333e
React-RCTBlob: 5e2b55f76e9a1c7ae52b826923502ddc3238df24
React-RCTImage: f5f1c50922164e89bdda67bcd0153952a5cfe719
React-RCTLinking: d0ecbd791e9ddddc41fa1f66b0255de90e8ee1e9
React-RCTNetwork: e26946300b0ab7bb6c4a6348090e93fa21f33a9d
React-RCTSettings: d0d37cb521b7470c998595a44f05847777cc3f42
React-RCTText: b074d89033583d4f2eb5faf7ea2db3a13c7553a2
React-RCTVibration: 2105b2e0e2b66a6408fc69a46c8a7fb5b2fdade0
React-RCTWebSocket: cd932a16b7214898b6b7f788c8bddb3637246ac4
RNGestureHandler: 4cb47a93019c1a201df2644413a0a1569a51c8aa
RNReanimated: 6abbbae2e5e72609d85aabd92a982a94566885f1
RNScreens: f28b48b8345f2f5f39ed6195518291515032a788
yoga: 312528f5bbbba37b4dcea5ef00e8b4033fdd9411

PODFILE CHECKSUM: a3a53e6abc12f076194e8f2e182cc122fa168741

COCOAPODS: 1.7.5
</file>

<file path="examples/.buckconfig">
[android]
  target = Google Inc.:Google APIs:23

[maven_repositories]
central = https://repo1.maven.org/maven2
</file>

<file path="examples/.eslintrc.js">
module.exports = {
  root: true,
  extends: '@react-native-community',
};
</file>

<file path="examples/.flowconfig">
[ignore]
; We fork some components by platform
.*/*[.]android.js

; Ignore "BUCK" generated dirs
<PROJECT_ROOT>/\.buckd/

; Ignore unexpected extra "@providesModule"
._/node_modules/._/node_modules/fbjs/.\*

; Ignore duplicate module providers
; For RN Apps installed via npm, "Libraries" folder is inside
; "node_modules/react-native" but in the source repo it is in the root
node_modules/react-native/Libraries/react-native/React.js

; Ignore polyfills
node_modules/react-native/Libraries/polyfills/.\*

; These should not be required directly
; require from fbjs/lib instead: require('fbjs/lib/warning')
node_modules/warning/.\*

; Flow doesn't support platforms
.\*/Libraries/Utilities/HMRLoadingView.js

[untyped]
._/node_modules/@react-native-community/cli/._/.\*

[include]

[libs]
node_modules/react-native/Libraries/react-native/react-native-interface.js
node_modules/react-native/flow/

[options]
emoji=true

esproposal.optional_chaining=enable
esproposal.nullish_coalescing=enable

module.file_ext=.js
module.file_ext=.json
module.file_ext=.ios.js

module.system=haste
module.system.haste.use_name_reducers=true

# get basename

module.system.haste.name*reducers='^.\*/\([a-zA-Z0-9$*.-]+\.js\(\.flow\)?\)$' -> '\1'

# strip .js or .js.flow suffix

module.system.haste.name_reducers='^\(.\*\)\.js\(\.flow\)?$' -> '\1'

# strip .ios suffix

module.system.haste.name_reducers='^\(._\)\.ios$' -> '\1'
module.system.haste.name_reducers='^\(._\)\.android$' -> '\1'
module.system.haste.name_reducers='^\(.*\)\.native$' -> '\1'
module.system.haste.paths.blacklist=._/**tests**/._
module.system.haste.paths.blacklist=._/**mocks**/._
module.system.haste.paths.whitelist=<PROJECT_ROOT>/node_modules/react-native/Libraries/._
module.system.haste.paths.whitelist=<PROJECT_ROOT>/node_modules/react-native/RNTester/._
module.system.haste.paths.whitelist=<PROJECT_ROOT>/node_modules/react-native/IntegrationTests/._
module.system.haste.paths.blacklist=<PROJECT_ROOT>/node_modules/react-native/Libraries/react-native/react-native-implementation.js
module.system.haste.paths.blacklist=<PROJECT_ROOT>/node_modules/react-native/Libraries/Animated/src/polyfills/._

munge_underscores=true

module.name*mapper='^[./a-zA-Z0-9$*-]+\.\(bmp\|gif\|jpg\|jpeg\|png\|psd\|svg\|webp\|m4v\|mov\|mp4\|mpeg\|mpg\|webm\|aac\|aiff\|caf\|m4a\|mp3\|wav\|html\|pdf\)$' -> 'RelativeImageStub'

suppress_type=$FlowIssue
suppress_type=$FlowFixMe
suppress_type=$FlowFixMeProps
suppress_type=$FlowFixMeState

suppress*comment=\\(.\\|\n\\)*\\$FlowFixMe\\($\\|[^(]\\|(\\(<VERSION>\\)? *\\(site=[a-z,*]_react*native\\(\_ios\\)?*\\(oss\\|fb\\)[a-z,_]_\\)?)\\)
suppress*comment=\\(.\\|\n\\)*\\$FlowIssue\\((\\(<VERSION>\\)? *\\(site=[a-z,*]_react*native\\(\_ios\\)?*\\(oss\\|fb\\)[a-z,_]_\\)?)\\)?:? #[0-9]+
suppress_comment=\\(.\\|\n\\)\*\\$FlowExpectedError

[lints]
sketchy-null-number=warn
sketchy-null-mixed=warn
sketchy-number=warn
untyped-type-import=warn
nonstrict-import=warn
deprecated-type=warn
unsafe-getters-setters=warn
inexact-spread=warn
unnecessary-invariant=warn
signature-verification-failure=warn
deprecated-utility=error

[strict]
deprecated-type
nonstrict-import
sketchy-null
unclear-type
unsafe-getters-setters
untyped-import
untyped-type-import

[version]
^0.98.0
</file>

<file path="examples/.gitattributes">
*.pbxproj -text
</file>

<file path="examples/.gitignore">
# OSX
#
.DS_Store

# Xcode

#

build/
_.pbxuser
!default.pbxuser
_.mode1v3
!default.mode1v3
_.mode2v3
!default.mode2v3
_.perspectivev3
!default.perspectivev3
xcuserdata
_.xccheckout
_.moved-aside
DerivedData
_.hmap
_.ipa
\*.xcuserstate
project.xcworkspace

# Android/IntelliJ

#

build/
.idea
.gradle
local.properties
\*.iml

# node.js

#

node_modules/
npm-debug.log
yarn-error.log

# BUCK

buck-out/
\.buckd/
\*.keystore

# fastlane

#

# It is recommended to not store the screenshots in the git repo. Instead, use fastlane to re-generate the

# screenshots whenever they are needed.

# For more information about the recommended setup visit:

# https://docs.fastlane.tools/best-practices/source-control/

_/fastlane/report.xml
_/fastlane/Preview.html
\*/fastlane/screenshots

# Bundle artifact

\*.jsbundle

# CocoaPods

/ios/Pods/

# TestCase from issue

TestCase-\*/
</file>

<file path="examples/.prettierrc">
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
</file>

<file path="examples/.watchmanconfig">
{}
</file>

<file path="examples/app.json">
{
  "name": "examples",
  "displayName": "examples"
}
</file>

<file path="examples/babel.config.js">
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};
</file>

<file path="examples/index.tsx">
/**
 * @format
 */
import React from 'react'
import {
  AppRegistry,
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { name as appName } from './app.json'

import AutoPlay from './components/AutoPlay'
import Basic from './components/Basic' // Only update index when scrollEnd
import DisableButton from './components/DisableButton'
import Loop from './components/Loop'
import Dynamic from './components/Dynamic'
import LoadMinimal from './components/LoadMinimal' // flicker existing when shift from last to first on Android (or last to first)
import NestSwiper from './components/NestSwiper'
import Phone from './components/Phone'
// import PhotoView from './components/PhotoView/'; // not working
import Swiper from './components/Swiper' // working but no title displayed, direction vertical not work well on android
import SwiperNumber from './components/SwiperNumber' // working but no title displayed
import { createAppContainer } from 'react-navigation'

const DATA = [
{
name: 'AutoPlay'
},
{
name: 'Basic'
},
{
name: 'DisableButton'
},
{
name: 'Dynamic'
},
{
name: 'Loop'
},
{
name: 'LoadMinimal'
},
{
name: 'NestSwiper'
},
{
name: 'Phone'
},
{
name: 'Swiper'
},
{
name: 'SwiperNumber'
}
]

function Item({ title, navigation }) {
return (
<TouchableOpacity onPress={() => navigation.navigate(title)}>
<View testID={title} style={styles.item}>
<Text style={styles.title}>{title}</Text>
</View>
</TouchableOpacity>
)
}

const Home = ({ navigation }) => {
return (
<SafeAreaView style={{ flex: 1 }}>
<FlatList
data={DATA}
renderItem={({ item }) => (
<Item navigation={navigation} title={item.name}></Item>
)}
keyExtractor={item => item.name}
/>
</SafeAreaView>
)
}

const AppNavigator = createStackNavigator(
{
Home,
AutoPlay,
Basic,
DisableButton,
Loop,
Dynamic,
LoadMinimal,
NestSwiper,
Phone,
Swiper,
SwiperNumber
},
{
initialRouteName: 'Home'
}
)

const App = createAppContainer(AppNavigator)

const styles = StyleSheet.create({
item: {
backgroundColor: '#ede',
padding: 16,
marginVertical: 8,
marginHorizontal: 16
},
title: {
fontSize: 24
}
})

AppRegistry.registerComponent(appName, () => App)
</file>

<file path="examples/metro.config.js">
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
transformer: {
getTransformOptions: async () => ({
transform: {
experimentalImportSupport: false,
inlineRequires: false,
},
}),
},
};
</file>

<file path="examples/package.json">
{
  "name": "examples",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "rm -rf node_modules/react-native-swiper/examples && react-native start || react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
  "dependencies": {
    "react": "16.8.6",
    "react-model": "^3.0.0",
    "react-native": "0.60.5",
    "react-native-gesture-handler": "^1.4.1",
    "react-native-reanimated": "^1.3.0",
    "react-native-screens": "^1.0.0-alpha.23",
    "react-native-swiper": "../",
    "react-navigation": "^4.0.10",
    "react-navigation-stack": "^1.9.3"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/runtime": "^7.6.0",
    "@react-native-community/eslint-config": "^0.0.5",
    "@types/react": "^16.9.2",
    "@types/react-native": "^0.60.15",
    "babel-jest": "^24.9.0",
    "detox": "^14.3.4",
    "eslint": "^6.4.0",
    "jest": "^24.9.0",
    "metro-react-native-babel-preset": "^0.56.0",
    "react-test-renderer": "16.8.6"
  },
  "jest": {
    "preset": "react-native"
  },
  "detox": {
    "test-runner": "jest",
    "configurations": {
      "ios.sim.debug": {
        "binaryPath": "ios/build/examples/Build/Products/Debug-iphonesimulator/examples.app",
        "build": "xcodebuild -workspace ios/examples.xcworkspace -scheme examples -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
        "type": "ios.simulator",
        "name": "iPhone 7"
      }
    }
  }
}
</file>

<file path="src/index.js">
/**
 * react-native-swiper
 * @author leecade<leecade@163.com>
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  ViewPropTypes,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Platform,
  ActivityIndicator
} from 'react-native'

/\*\*

- Default styles
- @type {StyleSheetPropType}
  \*/
  const styles = {
  container: {
  backgroundColor: 'transparent',
  position: 'relative',
  flex: 1
  },

wrapperIOS: {
backgroundColor: 'transparent'
},

wrapperAndroid: {
backgroundColor: 'transparent',
flex: 1
},

slide: {
backgroundColor: 'transparent'
},

pagination_x: {
position: 'absolute',
bottom: 25,
left: 0,
right: 0,
flexDirection: 'row',
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'transparent'
},

pagination_y: {
position: 'absolute',
right: 15,
top: 0,
bottom: 0,
flexDirection: 'column',
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'transparent'
},

title: {
height: 30,
justifyContent: 'center',
position: 'absolute',
paddingLeft: 10,
bottom: -30,
left: 0,
flexWrap: 'nowrap',
width: 250,
backgroundColor: 'transparent'
},

buttonWrapper: {
backgroundColor: 'transparent',
flexDirection: 'row',
position: 'absolute',
top: 0,
left: 0,
flex: 1,
paddingHorizontal: 10,
paddingVertical: 10,
justifyContent: 'space-between',
alignItems: 'center'
},

buttonText: {
fontSize: 50,
color: '#007aff'
}
}

// missing `module.exports = exports['default'];` with babel6
// export default React.createClass({
export default class extends Component {
/\*\*

- Props Validation
- @type {Object}
  \*/
  static propTypes = {
  horizontal: PropTypes.bool,
  children: PropTypes.node.isRequired,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  style: PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.array
  ]),
  scrollViewStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  pagingEnabled: PropTypes.bool,
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  bounces: PropTypes.bool,
  scrollsToTop: PropTypes.bool,
  removeClippedSubviews: PropTypes.bool,
  automaticallyAdjustContentInsets: PropTypes.bool,
  showsPagination: PropTypes.bool,
  showsButtons: PropTypes.bool,
  disableNextButton: PropTypes.bool,
  disablePrevButton: PropTypes.bool,
  loadMinimal: PropTypes.bool,
  loadMinimalSize: PropTypes.number,
  loadMinimalLoader: PropTypes.element,
  loop: PropTypes.bool,
  autoplay: PropTypes.bool,
  autoplayTimeout: PropTypes.number,
  autoplayDirection: PropTypes.bool,
  index: PropTypes.number,
  renderPagination: PropTypes.func,
  dotStyle: PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.array
  ]),
  activeDotStyle: PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.number,
  PropTypes.array
  ]),
  dotColor: PropTypes.string,
  activeDotColor: PropTypes.string,
  /\*\*
  - Called when the index has changed because the user swiped.
    \*/
    onIndexChanged: PropTypes.func
    }

/\*\*

- Default props
- @return {object} props
- @see http://facebook.github.io/react-native/docs/scrollview.html
  \*/
  static defaultProps = {
  horizontal: true,
  pagingEnabled: true,
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  bounces: false,
  scrollsToTop: false,
  removeClippedSubviews: true,
  automaticallyAdjustContentInsets: false,
  showsPagination: true,
  showsButtons: false,
  disableNextButton: false,
  disablePrevButton: false,
  loop: true,
  loadMinimal: false,
  loadMinimalSize: 1,
  autoplay: false,
  autoplayTimeout: 2.5,
  autoplayDirection: true,
  index: 0,
  onIndexChanged: () => null
  }

/\*\*

- Init states
- @return {object} states
  \*/
  state = this.initState(this.props)

/\*\*

- Initial render flag
- @type {bool}
  \*/
  initialRender = true

/\*\*

- autoplay timer
- @type {null}
  \*/
  autoplayTimer = null
  loopJumpTimer = null

UNSAFE_componentWillReceiveProps(nextProps) {
if (!nextProps.autoplay && this.autoplayTimer)
clearTimeout(this.autoplayTimer)
if (nextProps.index === this.props.index) return
this.setState(
this.initState(nextProps, this.props.index !== nextProps.index)
)
}

componentDidMount() {
this.autoplay()
}

componentWillUnmount() {
this.autoplayTimer && clearTimeout(this.autoplayTimer)
this.loopJumpTimer && clearTimeout(this.loopJumpTimer)
}

UNSAFE_componentWillUpdate(nextProps, nextState) {
// If the index has changed, we notify the parent via the onIndexChanged callback
if (this.state.index !== nextState.index)
this.props.onIndexChanged(nextState.index)
}

componentDidUpdate(prevProps) {
// If autoplay props updated to true, autoplay immediately
if (this.props.autoplay && !prevProps.autoplay) {
this.autoplay()
}
if (this.props.children !== prevProps.children) {
if (this.props.loadMinimal && Platform.OS === 'ios') {
this.setState({ ...this.props, index: this.state.index })
} else {
this.setState(
this.initState({ ...this.props, index: this.state.index }, true)
)
}
}
}

initState(props, updateIndex = false) {
// set the current state
const state = this.state || { width: 0, height: 0, offset: { x: 0, y: 0 } }

    const initState = {
      autoplayEnd: false,
      children: null,
      loopJump: false,
      offset: {}
    }

    // Support Optional render page
    initState.children = Array.isArray(props.children)
      ? props.children.filter(child => child)
      : props.children

    initState.total = initState.children ? initState.children.length || 1 : 0

    if (state.total === initState.total && !updateIndex) {
      // retain the index
      initState.index = state.index
    } else {
      initState.index =
        initState.total > 1 ? Math.min(props.index, initState.total - 1) : 0
    }

    // Default: horizontal
    const { width, height } = Dimensions.get('window')

    initState.dir = props.horizontal === false ? 'y' : 'x'

    if (props.width) {
      initState.width = props.width
    } else if (this.state && this.state.width) {
      initState.width = this.state.width
    } else {
      initState.width = width
    }

    if (props.height) {
      initState.height = props.height
    } else if (this.state && this.state.height) {
      initState.height = this.state.height
    } else {
      initState.height = height
    }

    initState.offset[initState.dir] =
      initState.dir === 'y' ? initState.height * props.index : initState.width * props.index

    this.internals = {
      ...this.internals,
      isScrolling: false
    }
    return initState

}

// include internals with state
fullState() {
return Object.assign({}, this.state, this.internals)
}

onLayout = event => {
const { width, height } = event.nativeEvent.layout
const offset = (this.internals.offset = {})
const state = { width, height }

    if (this.state.total > 1) {
      let setup = this.state.index
      if (this.props.loop) {
        setup++
      }
      offset[this.state.dir] =
        this.state.dir === 'y' ? height * setup : width * setup
    }

    // only update the offset in state if needed, updating offset while swiping
    // causes some bad jumping / stuttering
    if (!this.state.offset) {
      state.offset = offset
    }

    // related to https://github.com/leecade/react-native-swiper/issues/570
    // contentOffset is not working in react 0.48.x so we need to use scrollTo
    // to emulate offset.
    if(this.state.total > 1) {
      this.scrollView.scrollTo({ ...offset, animated: false })
    }

    if (this.initialRender) {
      this.initialRender = false
    }

    this.setState(state)

}

loopJump = () => {
if (!this.state.loopJump) return
const i = this.state.index + (this.props.loop ? 1 : 0)
const scrollView = this.scrollView
this.loopJumpTimer = setTimeout(
() => {
if (scrollView.setPageWithoutAnimation) {
scrollView.setPageWithoutAnimation(i)
} else {
if (this.state.index === 0) {
scrollView.scrollTo(
this.props.horizontal === false
? { x: 0, y: this.state.height, animated: false }
: { x: this.state.width, y: 0, animated: false }
)
} else if (this.state.index === this.state.total - 1) {
this.props.horizontal === false
? this.scrollView.scrollTo({
x: 0,
y: this.state.height _ this.state.total,
animated: false
})
: this.scrollView.scrollTo({
x: this.state.width _ this.state.total,
y: 0,
animated: false
})
}
}
},
// Important Parameter
// ViewPager 50ms, ScrollView 300ms
scrollView.setPageWithoutAnimation ? 50 : 300
)
}

/\*\*

- Automatic rolling
  \*/
  autoplay = () => {
  if (
  !Array.isArray(this.state.children) ||
  !this.props.autoplay ||
  this.internals.isScrolling ||
  this.state.autoplayEnd
  )
  return


    this.autoplayTimer && clearTimeout(this.autoplayTimer)
    this.autoplayTimer = setTimeout(() => {
      if (
        !this.props.loop &&
        (this.props.autoplayDirection
          ? this.state.index === this.state.total - 1
          : this.state.index === 0)
      )
        return this.setState({ autoplayEnd: true })

      this.scrollBy(this.props.autoplayDirection ? 1 : -1)
    }, this.props.autoplayTimeout * 1000)

}

/\*\*

- Scroll begin handle
- @param {object} e native event
  \*/
  onScrollBegin = e => {
  // update scroll state
  this.internals.isScrolling = true
  this.props.onScrollBeginDrag &&
  this.props.onScrollBeginDrag(e, this.fullState(), this)
  }

/\*\*

- Scroll end handle
- @param {object} e native event
  \*/
  onScrollEnd = e => {
  // update scroll state
  this.internals.isScrolling = false


    // making our events coming from android compatible to updateIndex logic
    if (!e.nativeEvent.contentOffset) {
      if (this.state.dir === 'x') {
        e.nativeEvent.contentOffset = {
          x: e.nativeEvent.position * this.state.width
        }
      } else {
        e.nativeEvent.contentOffset = {
          y: e.nativeEvent.position * this.state.height
        }
      }
    }

    this.updateIndex(e.nativeEvent.contentOffset, this.state.dir, () => {
      this.autoplay()
      this.loopJump()
    })
    // if `onMomentumScrollEnd` registered will be called here
    this.props.onMomentumScrollEnd &&
      this.props.onMomentumScrollEnd(e, this.fullState(), this)

}

/\*

- Drag end handle
- @param {object} e native event
  \*/
  onScrollEndDrag = e => {
  const { contentOffset } = e.nativeEvent
  const { horizontal } = this.props
  const { children, index } = this.state
  const { offset } = this.internals
  const previousOffset = horizontal ? offset.x : offset.y
  const newOffset = horizontal ? contentOffset.x : contentOffset.y


    if (
      previousOffset === newOffset &&
      (index === 0 || index === children.length - 1)
    ) {
      this.internals.isScrolling = false
    }

}

/\*\*

- Update index after scroll
- @param {object} offset content offset
- @param {string} dir 'x' || 'y'
  \*/
  updateIndex = (offset, dir, cb) => {
  const state = this.state
  // Android ScrollView will not scrollTo certain offset when props change
  let index = state.index
  if (!this.internals.offset)
  // Android not setting this onLayout first? https://github.com/leecade/react-native-swiper/issues/582
  this.internals.offset = {}
  const diff = offset[dir] - (this.internals.offset[dir] || 0)
  const step = dir === 'x' ? state.width : state.height
  let loopJump = false


    // Do nothing if offset no change.
    if (!diff) return

    // Note: if touch very very quickly and continuous,
    // the variation of `index` more than 1.
    // parseInt() ensures it's always an integer
    index = parseInt(index + Math.round(diff / step))

    if (this.props.loop) {
      if (index <= -1) {
        index = state.total - 1
        offset[dir] = step * state.total
        loopJump = true
      } else if (index >= state.total) {
        index = 0
        offset[dir] = step
        loopJump = true
      }
    }

    const newState = {}
    newState.index = index
    newState.loopJump = loopJump

    this.internals.offset = offset

    // only update offset in state if loopJump is true
    if (loopJump) {
      // when swiping to the beginning of a looping set for the third time,
      // the new offset will be the same as the last one set in state.
      // Setting the offset to the same thing will not do anything,
      // so we increment it by 1 then immediately set it to what it should be,
      // after render.
      if (offset[dir] === this.internals.offset[dir]) {
        newState.offset = { x: 0, y: 0 }
        newState.offset[dir] = offset[dir] + 1
        this.setState(newState, () => {
          this.setState({ offset: offset }, cb)
        })
      } else {
        newState.offset = offset
        this.setState(newState, cb)
      }
    } else {
      this.setState(newState, cb)
    }

}

/\*\*

- Scroll by index
- @param {number} index offset index
- @param {bool} animated
  \*/

scrollBy = (index, animated = true) => {
if (this.internals.isScrolling || this.state.total < 2) return
const state = this.state
const diff = (this.props.loop ? 1 : 0) + index + this.state.index
let x = 0
let y = 0
if (state.dir === 'x') x = diff _ state.width
if (state.dir === 'y') y = diff _ state.height

    this.scrollView && this.scrollView.scrollTo({ x, y, animated })

    // update scroll state
    this.internals.isScrolling = true
    this.setState({
      autoplayEnd: false
    })

    // trigger onScrollEnd manually in android
    if (!animated || Platform.OS !== 'ios') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        })
      })
    }

}

/\*\*

- Scroll to index
- @param {number} index page
- @param {bool} animated
  \*/

scrollTo = (index, animated = true) => {
if (
this.internals.isScrolling ||
this.state.total < 2 ||
index == this.state.index
)
return

    const state = this.state
    const diff = this.state.index + (index - this.state.index)

    let x = 0
    let y = 0
    if (state.dir === 'x') x = diff * state.width
    if (state.dir === 'y') y = diff * state.height

    this.scrollView && this.scrollView.scrollTo({ x, y, animated })

    // update scroll state
    this.internals.isScrolling = true
    this.setState({
      autoplayEnd: false
    })

    // trigger onScrollEnd manually in android
    if (!animated || Platform.OS !== 'ios') {
      setImmediate(() => {
        this.onScrollEnd({
          nativeEvent: {
            position: diff
          }
        })
      })
    }

}

scrollViewPropOverrides = () => {
const props = this.props
let overrides = {}

    /*
    const scrollResponders = [
      'onMomentumScrollBegin',
      'onTouchStartCapture',
      'onTouchStart',
      'onTouchEnd',
      'onResponderRelease',
    ]
    */

    for (let prop in props) {
      // if(~scrollResponders.indexOf(prop)
      if (
        typeof props[prop] === 'function' &&
        prop !== 'onMomentumScrollEnd' &&
        prop !== 'renderPagination' &&
        prop !== 'onScrollBeginDrag'
      ) {
        let originResponder = props[prop]
        overrides[prop] = e => originResponder(e, this.fullState(), this)
      }
    }

    return overrides

}

/\*\*

- Render pagination
- @return {object} react-dom
  \*/
  renderPagination = () => {
  // By default, dots only show when `total` >= 2
  if (this.state.total <= 1) return null


    let dots = []
    const ActiveDot = this.props.activeDot || (
      <View
        style={[
          {
            backgroundColor: this.props.activeDotColor || '#007aff',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          },
          this.props.activeDotStyle
        ]}
      />
    )
    const Dot = this.props.dot || (
      <View
        style={[
          {
            backgroundColor: this.props.dotColor || 'rgba(0,0,0,.2)',
            width: 8,
            height: 8,
            borderRadius: 4,
            marginLeft: 3,
            marginRight: 3,
            marginTop: 3,
            marginBottom: 3
          },
          this.props.dotStyle
        ]}
      />
    )
    for (let i = 0; i < this.state.total; i++) {
      dots.push(
        i === this.state.index
          ? React.cloneElement(ActiveDot, { key: i })
          : React.cloneElement(Dot, { key: i })
      )
    }

    return (
      <View
        pointerEvents="none"
        style={[
          styles['pagination_' + this.state.dir],
          this.props.paginationStyle
        ]}
      >
        {dots}
      </View>
    )

}

renderTitle = () => {
const child = this.state.children[this.state.index]
const title = child && child.props && child.props.title
return title ? (
<View style={styles.title}>
{this.state.children[this.state.index].props.title}
</View>
) : null
}

renderNextButton = () => {
let button = null

    if (this.props.loop || this.state.index !== this.state.total - 1) {
      button = this.props.nextButton || <Text style={styles.buttonText}>›</Text>
    }

    return (
      <TouchableOpacity
        onPress={() => button !== null && this.scrollBy(1)}
        disabled={this.props.disableNextButton}
      >
        <View>{button}</View>
      </TouchableOpacity>
    )

}

renderPrevButton = () => {
let button = null

    if (this.props.loop || this.state.index !== 0) {
      button = this.props.prevButton || <Text style={styles.buttonText}>‹</Text>
    }

    return (
      <TouchableOpacity
        onPress={() => button !== null && this.scrollBy(-1)}
        disabled={this.props.disablePrevButton}
      >
        <View>{button}</View>
      </TouchableOpacity>
    )

}

renderButtons = () => {
return (
<View
pointerEvents="box-none"
style={[
styles.buttonWrapper,
{
width: this.state.width,
height: this.state.height
},
this.props.buttonWrapperStyle
]} >
{this.renderPrevButton()}
{this.renderNextButton()}
</View>
)
}

refScrollView = view => {
this.scrollView = view
}

onPageScrollStateChanged = state => {
switch (state) {
case 'dragging':
return this.onScrollBegin()

      case 'idle':
      case 'settling':
        if (this.props.onTouchEnd) this.props.onTouchEnd()
    }

}

renderScrollView = pages => {
return (
<ScrollView
ref={this.refScrollView}
{...this.props}
{...this.scrollViewPropOverrides()}
contentContainerStyle={[styles.wrapperIOS, this.props.style]}
contentOffset={this.state.offset}
onScrollBeginDrag={this.onScrollBegin}
onMomentumScrollEnd={this.onScrollEnd}
onScrollEndDrag={this.onScrollEndDrag}
style={this.props.scrollViewStyle} >
{pages}
</ScrollView>
)
}

/\*\*

- Default render
- @return {object} react-dom
  \*/
  render() {
  const { index, total, width, height, children } = this.state
  const {
  containerStyle,
  loop,
  loadMinimal,
  loadMinimalSize,
  loadMinimalLoader,
  renderPagination,
  showsButtons,
  showsPagination
  } = this.props
  // let dir = state.dir
  // let key = 0
  const loopVal = loop ? 1 : 0
  let pages = []


    const pageStyle = [{ width: width, height: height }, styles.slide]
    const pageStyleLoading = {
      width,
      height,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }

    // For make infinite at least total > 1
    if (total > 1) {
      // Re-design a loop model for avoid img flickering
      pages = Object.keys(children)
      if (loop) {
        pages.unshift(total - 1 + '')
        pages.push('0')
      }

      pages = pages.map((page, i) => {
        if (loadMinimal) {
          if (
            (i >= index + loopVal - loadMinimalSize &&
              i <= index + loopVal + loadMinimalSize) ||
            // The real first swiper should be keep
            (loop && i === 1) ||
            // The real last swiper should be keep
            (loop && i === total - 1)
          ) {
            return (
              <View style={pageStyle} key={i}>
                {children[page]}
              </View>
            )
          } else {
            return (
              <View style={pageStyleLoading} key={i}>
                {loadMinimalLoader ? loadMinimalLoader : <ActivityIndicator />}
              </View>
            )
          }
        } else {
          return (
            <View style={pageStyle} key={i}>
              {children[page]}
            </View>
          )
        }
      })
    } else {
      pages = (
        <View style={pageStyle} key={0}>
          {children}
        </View>
      )
    }

    return (
      <View style={[styles.container, containerStyle]} onLayout={this.onLayout}>
        {this.renderScrollView(pages)}
        {showsPagination &&
          (renderPagination
            ? renderPagination(index, total, this)
            : this.renderPagination())}
        {this.renderTitle()}
        {showsButtons && this.renderButtons()}
      </View>
    )

}
}
</file>

<file path=".editorconfig">
root = true

[*]
charset = utf-8
indent_style = space
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true

[**.js]
indent_style = space
indent_size = 2
quote_type = single
space_after_anon_function = true
curly_bracket_next_line = true
brace_style = end-expand

[**.jsx]
indent_style = space
indent_size = 2
quote_type = single
space_after_anon_function = true
curly_bracket_next_line = true
brace_style = end-expand

[**.css]
indent_style = space
indent_size = 4

[**.html]
indent_style = space
indent_size = 4
max_char = 78
brace_style = expand

[node_modules/**.js]
codepaint = false

[*.json]
indent_style = space
indent_size = 2
</file>

<file path=".gitignore">
.DS_Store

# Logs

logs
\*.log

# Runtime data

pids
_.pid
_.seed

# Directory for instrumented libs generated by jscoverage/JSCover

lib-cov

# Coverage directory used by tools like istanbul

coverage

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)

.grunt

# node-waf configuration

.lock-wscript

# Compiled binary addons (http://nodejs.org/api/addons.html)

build/Release

# Dependency directory

# https://www.npmjs.org/doc/misc/npm-faq.html#should-i-check-my-node_modules-folder-into-git

/node_modules

# Xcode

\*.xcuserstate
examples/swiper.xcodeproj/project.xcworkspace/
examples/swiper.xcodeproj/xcuserdata

# IntelliJ

.idea/

# Vim

_.sw_
dist/

# yarn

yarn.lock
</file>

<file path=".npmignore">
.DS_Store
logs
*.log
pids
*.pid
*.seed
lib-cov
coverage
.lock-wscript
build/Release
node_modules
res
examples
</file>

<file path=".prettierrc">
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
</file>

<file path="CHANGELOG.md">
- [1.6.0-dev]
  - ViewPagerAndroid: react-native => @react-native-community/viewpager
  - add TypeScript typing of containerStyle
- [1.5.14]
  - fixes #582 (Android not setting this onLayout first?) #789 (thanks [@fungilation](https://github.com/fungilation))
  - Add onScrollBegin and onTouchEnd for Android #684 (thanks [@kostyaVyrodov](https://github.com/kostyaVyrodov))
- [1.5.13]
  - Workaround for react-native 0.4.8 contentOffset regression #572 (thanks [@nixoz](https://github.com/nixoz))
  - Fix wrong calculation of width and height after device rotation #581 (thanks [@kostyaVyrodov](https://github.com/kostyaVyrodov))
  - Calculated width & height on layout, used later on re-rendering. Possibility to change ScrollView styles #548 (thanks [@germanst](https://github.com/germanst))
- [1.5.12]

- Update core packages
- Optionally disable the 'next' control button (thanks [@SSTPIERRE2](https://github.com/SSTPIERRE2))
- Fix `Uncaught TypeError: _this.refs.scrollView.scrollTo is not a function` (thanks [@flyskywhy](https://github.com/flyskywhy))
- Allow dotStyle and activeDotStyle PropTypes to accept Stylesheet (thanks [@knopt](https://github.com/knopt))
- Calculate the offset in the initial state instead of `onLayout` (thanks [@kjkta](https://github.com/kjkta))

- [1.5.11]

  - Typescript Definition

- [1.5.1]

  - Allow scroll without animate, ref: [scrollBy(index, animated)](#scrollbyindex-animated)
  - Remove [#254](https://github.com/leecade/react-native-swiper/pull/254) which break the scroll direction in loop mode

- [1.5.0]

  - Improve develop [workflow](#development) for support watch & use real pkg name in examples
  - Update examples for support `React-native 0.33` + `Xcode8` + `ios10` + `iphone7`
  - Switch to [standard](https://github.com/feross/standard) code style
  - Rewrite source code with ES6 syntex
  - Cancel transform the source code when publish
  - Add a [demo](examples/components/LoadMinimal) for `loadMinimal` + `lazyload`
  - Add a [demo](examples/components/PhotoView) for multi-images viewer
  - [#254](https://github.com/leecade/react-native-swiper/pull/254) Fix jitter when quickly swiping back and forth between pages (iOS) (@thanks [@nemophrost](https://github.com/nemophrost)).

- [1.4.11]

  - Adds loadMinimalSize property

- [1.4.10]

  - Adds loadMinimal to api (lazyloading-esque)

- [1.4.9]

  - Adds extra check for title

- [1.4.8]

  - Fixes loop and autoplay bugs in android

- [1.4.7]

  - Don't attempt to mutate this.props
  - Fixes examples links
  - Adds drag end handling to always reset state.isScrolling
  - Fixes float calculation error

- [1.4.6]

  - refactors examples
  - prevents mutation of `this.props`
  - fixes android index loop issue

- [1.4.5]

  - renames `scrollTo()` to `scrollBy()`
  - image index is now always an integer
  - prevents parent state updates from reseting index counter
  - fixes issue with scrolling not working sometimes

- [1.4.4]

  - Support for React Native latest(`^0.26.0`)
  - Updates examples to work with react-native-swiper 1.4.4
  - Examples now run on Android (some are still buggy, needs more work)
  - Removes old examples folder

- [1.4.3]

  - Fixed auto play issue when only a child view

- [v1.4.0]

  - Support for React Native latest(`^0.17.0`) & Upgrade examples base on Xcode `7.2` / React Native `0.17.0`

  - Upgrade build tool to babel6

  - Add missing deps `react-timer-mixin`

  - [1f8643a](https://github.com/leecade/react-native-swiper/commit/1f8643a67e2768d165132a19629a991a86672036) Move Dimensions import to deconstructed React import for react-native (@thanks [@jedrekk](https://github.com/jedrekk)).

  - [e28af9b](https://github.com/leecade/react-native-swiper/commit/e28af9b205f17447cb3149b45fc220beec037bce) Support index property in combination with loop property (@thanks [@almost](https://github.com/almost)).

  - [6c832d](https://github.com/leecade/react-native-swiper/commit/6c832d6a23da3737a2e8a2667273dc6093bcc9ee) fix warnings about keys for dots (@thanks [@sunnylqm](https://github.com/sunnylqm)).

  - [8de1afc](https://github.com/leecade/react-native-swiper/commit/8de1afcb75a003424231bb089802db53bbbf84e4) Changes to make the example work in xcode 7 (@thanks [@allomov](https://github.com/allomov)).

- [v1.3.0]

  - [8d6d75c](https://github.com/leecade/react-native-swiper/commit/8d6d75c00edf87b603c218aad0018932277814b5) inject `state` in ScrollResponders (@thanks [@smothers](https://github.com/smothers)).

- [v1.2.2]

  - [890c0ce](https://github.com/leecade/react-native-swiper/commit/890c0ce64e2192c2ca7830e6699f67b88171e74b) ensure `onMomentumScrollEnd` synchronous update `index`.

- [v1.2.0]

  - [838b24c](https://github.com/leecade/react-native-swiper/commit/838b24cbeaf49b9ca1dabb4eed8305e314503fb1) Re-design a loop model for avoid img flickering.
  - [9cb91c5](https://github.com/leecade/react-native-swiper/commit/9cb91c58c84034b0b8b874dbfc2a44da982686a8) fixes [#7](https://github.com/leecade/react-native-swiper/issues/6) `onMomentumScrollEnd` lost `event` param. (thanks [@smothers](https://github.com/smothers))

- [v1.1.1]

  - [21f0b00](https://github.com/leecade/react-native-swiper/commit/21f0b00138b6936cd3dfac2eb107a14c99c7392b) fixes [#6](https://github.com/leecade/react-native-swiper/issues/6) a define-propType error. (thanks [@benjamingeorge](https://github.com/benjamingeorge))

- [v1.1.0]

  - [44ec630](https://github.com/leecade/react-native-swiper/commit/44ec630b62844dbeaccee73adaa0996e319ebffb) fixes [#4](https://github.com/leecade/react-native-swiper/issues/4) `onMoementumScrollEnd` gets overridden. (thanks [@subpublicanders](https://github.com/subpublicanders))
  - [5de06a7](https://github.com/leecade/react-native-swiper/commit/5de06a7aa86318ad38720728022b80e5cf98a2ab) New prop: `renderPagination`. (thanks [@aksonov](https://github.com/aksonov))

- [v1.0.4]

  - [21cb373](https://github.com/leecade/react-native-swiper/commit/21cb3732578588f9d47ee7ddda541577ad691970) fixes [#2](https://github.com/leecade/react-native-swiper/issues/2) Solve the problem of installation. (thanks [@jamwaffles](https://github.com/jamwaffles))

- [v1.0.3]
  - [0f796f3](https://github.com/leecade/react-native-swiper/commit/0f796f3557b5aeb1772573cd7ecae2e835bccc0b) fixes [#1](https://github.com/leecade/react-native-swiper/issues/1) Two 'horizontal' in propTypes. (thanks [@MacyzZ](https://github.com/MacyzZ))
    </file>

<file path="index.d.ts">
import {
  ViewStyle,
  StyleProp,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollViewProps
} from 'react-native'
import { Component } from 'react'

declare module 'react-native-swiper' {
interface SwiperState {
autoplayEnd: false
loopJump: false
width: number
height: number
offset: {
x: number
y: number
}
total: number
index: number
dir: 'x' | 'y'
}

interface SwiperInternals extends SwiperState {
isScrolling: boolean
}

interface SwiperProps
extends Omit<ScrollViewProps, 'onScrollBeginDrag' | 'onMomentumScrollEnd'> {
// Basic
// If true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.
horizontal?: boolean
// If no specify default enable fullscreen mode by flex: 1.
loop?: boolean
// Index number of initial slide.
index?: number
// Set to true make control buttons visible.
showsButtons?: boolean
// Set to false to disable continuous loop mode.
autoplay?: boolean
// Called with the new index when the user swiped
onIndexChanged?: (index: number) => void

    // Custom basic style & content
    // Set to true enable auto play mode.
    width?: number
    // If no specify default fullscreen mode by flex: 1.
    height?: number
    // See default style in source.
    style?: StyleProp<ViewStyle>
    // Customize the View container.
    containerStyle?: StyleProp<ViewStyle>
    // Only load current index slide , loadMinimalSize slides before and after.
    loadMinimal?: boolean
    // see loadMinimal
    loadMinimalSize?: number
    // Custom loader to display when slides aren't loaded
    loadMinimalLoader?: React.ReactNode

    // Pagination
    // Set to true make pagination visible.
    showsPagination?: boolean
    // Custom styles will merge with the default styles.
    paginationStyle?: StyleProp<ViewStyle>
    // Complete control how to render pagination with three params (index, total, context) ref to this.state.index / this.state.total / this, For example: show numbers instead of dots.
    renderPagination?: (
      index: number,
      total: number,
      swiper: Swiper
    ) => React.ReactNode
    // Allow custom the dot element.
    dot?: React.ReactNode
    // Allow custom the active-dot element.
    activeDot?: React.ReactNode
    // Allow custom the active-dot element.
    dotStyle?: StyleProp<ViewStyle>
    // Allow custom the active-dot element.
    dotColor?: string
    // Allow custom the active-dot element.
    activeDotColor?: string
    // Allow custom the active-dot element.
    activeDotStyle?: StyleProp<ViewStyle>

    // Autoplay
    // Delay between auto play transitions (in second).
    autoplayTimeout?: number
    // Cycle direction control.
    autoplayDirection?: boolean

    // Control buttons
    // Set to true make control buttons visible.
    buttonWrapperStyle?: StyleProp<ViewStyle>
    // Allow custom the next button.
    nextButton?: React.ReactNode
    // Allow custom the prev button.
    prevButton?: React.ReactNode

    // Supported ScrollResponder
    // When animation begins after letting up
    onScrollBeginDrag?: (
      e: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperInternals,
      swiper: Swiper
    ) => void
    // Makes no sense why this occurs first during bounce
    onMomentumScrollEnd?: (
      e: NativeSyntheticEvent<NativeScrollEvent>,
      state: SwiperInternals,
      swiper: Swiper
    ) => void
    // Immediately after onMomentumScrollEnd
    onTouchStartCapture?: any
    // Same, but bubble phase
    onTouchStart?: any
    // You could hold the touch start for a long time
    onTouchEnd?: any
    // When lifting up - you could pause forever before * lifting
    onResponderRelease?: any

    // If true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for
    // horizontal pagination.
    pagingEnabled?: boolean
    // Set to true if you want to show horizontal scroll bar.
    showsHorizontalScrollIndicator?: boolean
    // Set to true if you want to show vertical scroll bar.
    showsVerticalScrollIndicator?: boolean
    // If true, the scroll view bounces when it reaches the end of the content if the content is larger then the
    // scroll view along the axis of the scroll direction. If false, it disables all bouncing even if the
    // alwaysBounce* props are true.
    bounces?: boolean
    // If true, the scroll view scrolls to top when the status bar is tapped.
    scrollsToTop?: boolean
    // If true, offscreen child views (whose overflow value is hidden) are removed from their native backing
    // superview when offscreen. This canimprove scrolling performance on long lists.
    removeClippedSubviews?: boolean
    // Set to true if you need adjust content insets automation.
    automaticallyAdjustContentInsets?: boolean
    // Enables/Disables swiping
    scrollEnabled?: boolean

}

export default class Swiper extends Component<SwiperProps, SwiperState> {
scrollBy: (index?: number, animated?: boolean) => void
scrollTo: (index: number, animated?: boolean) => void
}
}
</file>

<file path="index.js">
import Swiper from './src/'
/**
 * Resolve ES6 and CommonJS compatibility issues
 * 1. CommonJS code
 *    const Swiper = require('react-native-swiper');
 * 2. ES6 code
 *    import Swiper from 'react-native-swiper';
 */
module.exports = Swiper;
module.exports.default = Swiper;
</file>

<file path="index.js.flow">
// @flow strict

// eslint-disable-next-line
import { Component, type Node } from 'react';

declare module 'react-native-swiper' {
// eslint-disable-next-line no-undef
declare export type SwiperProps = $ReadOnly<{|
// Basic
// If true, the scroll view's children are arranged horizontally in a row instead of vertically in a column.
horizontal?: ?boolean,
// If no specify default enable fullscreen mode by flex: 1.
loop?: ?boolean,
// Index number of initial slide.
index?: ?number,
// Set to true make control buttons visible.
showsButtons?: ?boolean,
// Set to false to disable continuous loop mode.
autoplay?: ?boolean,
// Called with the new index when the user swiped
onIndexChanged?: ?(index?: number) => void,

    // Custom basic style & content
    // Set to true enable auto play mode.
    width?: ?number,
    // If no specify default fullscreen mode by flex: 1.
    height?: ?number,
    // See default style in source.
    style?: ?Object,
    // Only load current index slide , loadMinimalSize slides before and after.
    loadMinimal?: ?boolean,
    // see loadMinimal
    loadMinimalSize?: ?boolean,
    // Custom loader to display when slides aren't loaded
    loadMinimalLoader?: ?boolean,

    // Pagination
    // Set to true make pagination visible.
    showsPagination?: ?boolean,
    // Custom styles will merge with the default styles.
    paginationStyle?: ?Object,
    // Complete control how to render pagination with three params (index, total, context) ref to this.state.index / this.state.total / this, For example: show numbers instead of dots.
    renderPagination?: ?(index: number, total: number, context: any) => Node,
    // Allow custom the dot element.
    dot?: ?Node,
    // Allow custom the active-dot element.
    activeDot?: ?Node,
    // Allow custom the active-dot element.
    dotStyle?: ?Object,
    // Allow custom the active-dot element.
    dotColor?: ?string,
    // Allow custom the active-dot element.
    activeDotColor?: ?string,
    // Allow custom the active-dot element.
    activeDotStyle?: ?Object,

    // Autoplay
    // Delay between auto play transitions (in second).
    autoplayTimeout?: ?number,
    // Cycle direction control.
    autoplayDirection?: ?boolean,

    // Control buttons
    // Set to true make control buttons visible.
    buttonWrapperStyle?: ?Object,
    // Allow custom the next button.
    nextButton?: ?Node,
    // Allow custom the prev button.
    prevButton?: ?Node,

    // Supported ScrollResponder
    // When animation begins after letting up
    onScrollBeginDrag?: ?(event?: any, state?: any, context?: any) => void,
    // Makes no sense why this occurs first during bounce
    onMomentumScrollEnd?: ?(event?: any, state?: any, context?: any) => void,
    // Immediately after onMomentumScrollEnd
    onTouchStartCapture?: ?(event?: any, state?: any, context?: any) => void,
    // Same, but bubble phase
    onTouchStart?: ?(event?: any, state?: any, context?: any) => void,
    // You could hold the touch start for a long time
    onTouchEnd?: ?(event?: any, state?: any, context?: any) => void,
    // When lifting up - you could pause forever before * lifting
    onResponderRelease?: ?(event?: any, state?: any, context?: any) => void,

    // If true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for
    // horizontal pagination.
    pagingEnabled?: ?boolean,
    // Set to true if you want to show horizontal scroll bar.
    showsHorizontalScrollIndicator?: ?boolean,
    // Set to true if you want to show vertical scroll bar.
    showsVerticalScrollIndicator?: ?boolean,
    // If true, the scroll view bounces when it reaches the end of the content if the content is larger then the
    // scroll view along the axis of the scroll direction. If false, it disables all bouncing even if the
    // alwaysBounce* props are true.
    bounces?: ?boolean,
    // If true, the scroll view scrolls to top when the status bar is tapped.
    scrollsToTop?: ?boolean,
    // If true, offscreen child views (whose overflow value is hidden) are removed from their native backing
    // superview when offscreen. This canimprove scrolling performance on long lists.
    removeClippedSubviews?: ?boolean,
    // Set to true if you need adjust content insets automation.
    automaticallyAdjustContentInsets?: ?boolean,
    // Enables/Disables swiping
    scrollEnabled?: ?boolean

|}>;

// eslint-disable-next-line no-undef
declare export default class Swiper extends Component<SwiperProps> {
scrollBy(index: number, animated?: boolean): void;
}
}
</file>

<file path="LICENSE">
The MIT License (MIT)

Copyright (c) 2015 斯人

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</file>

<file path="package.json">
{
  "name": "react-native-swiper",
  "keywords": [
    "react-component",
    "react-native",
    "ios"
  ],
  "version": "1.6.0-rc.2",
  "description": "Swiper component for React Native.",
  "main": "index.js",
  "scripts": {
    "commit": "npx git-cz",
    "start": "react-native start",
    "lint": "standard | snazzy",
    "update": "updtr",
    "precommit": "git diff --name-only --cached --relative | grep '\\.jsx\\?$' | xargs standard | snazzy; if [ $? -ne 0 ]; then exit 1; fi",
    "test": "npm run lint"
  },
  "pre-commit": {
    "run": [
      "precommit"
    ],
    "silent": true
  },
  "standard": {
    "parser": "babel-eslint",
    "global": [
      "__DEV__",
      "FormData",
      "requestAnimationFrame",
      "alert",
      "setImmediate",
      "fetch"
    ],
    "ignore": [
      "dist/",
      "mock/",
      "node_modules/"
    ]
  },
  "ava": {
    "babel": "inherit",
    "require": []
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/leecade/react-native-swiper.git"
  },
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/leecade/react-native-swiper/issues"
  },
  "homepage": "https://github.com/leecade/react-native-swiper#readme",
  "devDependencies": {
    "babel-eslint": "^8.0.1",
    "rimraf": "^2.5.4",
    "snazzy": "^7.1.0",
    "standard": "^13.0.1",
    "updtr": "^2.0.0"
  },
  "dependencies": {
    "prop-types": "^15.5.10"
  },
  "config": {
    "commitizen": {
      "path": "cz-conventional-changelog"
    }
  }
}
</file>

<file path="README.md">
<p align="center">
  <img alt="react-native-swiper" src="http://i.imgur.com/P4cRUgD.png" width="208">
</p>

<p align="center">
  The best Swiper component for React Native.
</p>

<p align="center">
  <a href="http://standardjs.com/"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-swiper"><img alt="npm version" src="http://img.shields.io/npm/v/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-swiper"><img alt="npm version" src="http://img.shields.io/npm/dm/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://github.com/leecade/react-native-swiper/pulls?q=is%3Apr+is%3Aclosed"><img alt="PR Stats" src="https://img.shields.io/issuestats/i/github/leecade/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://github.com/leecade/react-native-swiper/issues?q=is%3Aissue+is%3Aclosed"><img alt="Issue Stats" src="https://img.shields.io/issuestats/p/github/leecade/react-native-swiper.svg?style=flat-square"></a>
  <a href="https://gitter.im/leecade/react-native-swiper?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img alt="Join the chat" src="https://badges.gitter.im/leecade/react-native-swiper.svg"></a>
</p>

# react-native-swiper

## Roadmap

> see: [ROADMAP.md](ROADMAP.md)

## Changelogs

- **[1.6.0-rc]**
  - Dependency
    - Remove ViewPagerAndroid, use ScrollView #1009
  - Test Integration
    - Setup e2e test
  - TypeScript
    - correct the wrong types #1000
    - Add missing scrollBy TypeScript definition #931
  - New Feature
    - add scrollTo #831
    - Added prop to disable the PrevButton #749
    - Optionally render page #1004
  - Bug Fix
    - ES6 and CommonJS compatibility #717
    - Solves the issue of state messing up when parent component calls setState #939
    - replay when autoplay is setted to true #1002
    - fix broken examples and migrate to react-native 0.60.x
    - fix bad jumping on ios when loadMinimal set true
    - fix fliker when loop and loadMinimal are enabled #1062

* [1.5.6]

  - Fix [#16](https://github.com/leecade/react-native-swiper/issues/16), [#36](https://github.com/leecade/react-native-swiper/issues/36), [#371](https://github.com/leecade/react-native-swiper/issues/371), [#410](https://github.com/leecade/react-native-swiper/issues/410), [#411](https://github.com/leecade/react-native-swiper/issues/411), [#422](https://github.com/leecade/react-native-swiper/issues/422), [#468](https://github.com/leecade/react-native-swiper/issues/468) Fix landscape orientation auto resize! (thanks [@ahmed3mar](https://github.com/ahmed3mar), [@timmywil](https://github.com/timmywil))
  - Add containerStyle prop to customize the view container.

* [1.5.5]
  - Update: using PropTypes from prop-types and Change View.propTypes to ViewPropTypes

- [1.5.4]

  - Added easily accessible pagination point manipulation: use `dotColor` / `activeDotColor` and `dotStyle` / `activeDotStyle` (thanks [@denizs](https://github.com/denizs))
  - Added scrollEnabled prop to documentation (thanks [@ibandominguez](https://github.com/ibandominguez))

- [1.5.3]

  - Add loadMinimalLoader prop to customize `<ActivityIndicator />` (thanks [@Exilz](https://github.com/Exilz))
  - Disable autoplay timer when prop changes to false (thanks [@dizlexik](https://github.com/dizlexik))
  - Special thanks to [@hypatiah](https://github.com/dizlexik) for fixed some grammatical errors in README

- [1.5.2]
  - Add yarn lock
  - Fix jitter when quickly swiping back and forth between pages (iOS) (thanks [@nemophrost](https://github.com/nemophrost))
  - The first webview always reloaded when injecting the rest of the children (thanks [@eosterberg](https://github.com/eosterberg))

> see more: [CHANGELOG.md](CHANGELOG.md)

## Show Cases

> Try these cases by yourself very easy, Just open `examples/ios/swiper.xcodeproj` in Xcode, then press `Cmd + R`; you may edit `examples/index.ios.js` for switch cases.

### [examples/components/Basic](https://github.com/leecade/react-native-swiper/blob/master/examples/components/Basic)

![](http://i.imgur.com/zrsazAG.gif=300x)

### [examples/components/Swiper](https://github.com/leecade/react-native-swiper/blob/master/examples/components/Swiper)

![](http://i.imgur.com/hP3f3oO.gif=300x)

### [examples/components/SwiperNumber](https://github.com/leecade/react-native-swiper/blob/master/examples/components/SwiperNumber)

![](http://i.imgur.com/0rqESVb.gif=300x)

### [examples/components/Phone](https://github.com/leecade/react-native-swiper/blob/master/examples/components/Phone)

![](http://i.imgur.com/c1BhjZm.gif=300x)

### [examples/components/LoadMinimal](https://github.com/leecade/react-native-swiper/blob/master/examples/components/LoadMinimal)

![](http://i.imgur.com/LAOHbJA.gif=300x)

## Getting Started

- [Installation](#installation)
- [Basic Usage](#basic-usage)
- [Properties](#properties)
  - [Basic](#basic)
  - [Custom basic style & content](#custom-basic-style--content)
  - [Pagination](#pagination)
  - [Autoplay](#autoplay)
  - [Control buttons](#control-buttons)
  - [Props of Children](#props-of-children)
  - [Basic props of `<ScrollView />`](#basic-props-of-scrollview-)
  - [Supported ScrollResponder](#supported-scrollresponder)
- [Examples](#examples)
- [Development](#development)

### Installation

> v1.5.14

```bash
$ npm i react-native-swiper --save
```

> v1.6.0-rc

```
npm i --save react-native-swiper@next
```

### Basic Usage

- Install `react-native` first

```bash
$ npm i react-native-cli -g
```

- Initialization of a react-native project

```bash
$ react-native init myproject
```

- Then, edit `myproject/index.ios.js`, like this:

```jsx
import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

import Swiper from "react-native-swiper";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    );
  }
}

AppRegistry.registerComponent("myproject", () => SwiperComponent);
```

### Properties

#### Basic

| Prop           |     Default     |   Type   | Description                                                                                                 |
| :------------- | :-------------: | :------: | :---------------------------------------------------------------------------------------------------------- |
| horizontal     |      true       |  `bool`  | If `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column. |
| loop           |      true       |  `bool`  | Set to `false` to disable continuous loop mode.                                                             |
| index          |        0        | `number` | Index number of initial slide.                                                                              |
| showsButtons   |      false      |  `bool`  | Set to `true` make control buttons visible.                                                                 |
| autoplay       |      false      |  `bool`  | Set to `true` enable auto play mode.                                                                        |
| onIndexChanged | (index) => null |  `func`  | Called with the new index when the user swiped                                                              |

#### Custom basic style & content

| Prop              |         Default         |   Type    | Description                                                                |
| :---------------- | :---------------------: | :-------: | :------------------------------------------------------------------------- |
| width             |            -            | `number`  | If no specify default enable fullscreen mode by `flex: 1`.                 |
| height            |            -            | `number`  | If no specify default fullscreen mode by `flex: 1`.                        |
| style             |          {...}          |  `style`  | See default style in source.                                               |
| containerStyle    |          {...}          |  `style`  | See default container style in source.                                     |
| loadMinimal       |          false          |  `bool`   | Only load current index slide , `loadMinimalSize` slides before and after. |
| loadMinimalSize   |            1            | `number`  | see `loadMinimal`                                                          |
| loadMinimalLoader | `<ActivityIndicator />` | `element` | Custom loader to display when slides aren't loaded                         |

#### Pagination

| Prop             |                                                                          Default                                                                          |    Type    | Description                                                                                                                                                                                   |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| showsPagination  |                                                                           true                                                                            |   `bool`   | Set to `true` make pagination visible.                                                                                                                                                        |
| paginationStyle  |                                                                           {...}                                                                           |  `style`   | Custom styles will merge with the default styles.                                                                                                                                             |
| renderPagination |                                                                             -                                                                             | `function` | Complete control how to render pagination with three params (`index`, `total`, `context`) ref to `this.state.index` / `this.state.total` / `this`, For example: show numbers instead of dots. |
| dot              | `<View style={{backgroundColor:'rgba(0,0,0,.2)', width: 8, height: 8,borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />` | `element`  | Allow custom the dot element.                                                                                                                                                                 |
| activeDot        |   `<View style={{backgroundColor: '#007aff', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,}} />`    | `element`  | Allow custom the active-dot element.                                                                                                                                                          |
| dotStyle         |                                                                             -                                                                             |  `object`  | Allow custom the dot element.                                                                                                                                                                 |
| dotColor         |                                                                             -                                                                             |  `string`  | Allow custom the dot element.                                                                                                                                                                 |
| activeDotColor   |                                                                             -                                                                             |  `string`  | Allow custom the active-dot element.                                                                                                                                                          |
| activeDotStyle   |                                                                             -                                                                             |  `object`  | Allow custom the active-dot element.                                                                                                                                                          |

#### Autoplay

| Prop              | Default |   Type   | Description                                      |
| :---------------- | :-----: | :------: | :----------------------------------------------- |
| autoplay          |  true   |  `bool`  | Set to `true` enable auto play mode.             |
| autoplayTimeout   |   2.5   | `number` | Delay between auto play transitions (in second). |
| autoplayDirection |  true   |  `bool`  | Cycle direction control.                         |

#### Control buttons

| Prop               |                                                                                                   Default                                                                                                   |   Type    | Description                                 |
| :----------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------: | :------------------------------------------ |
| showsButtons       |                                                                                                    true                                                                                                     |  `bool`   | Set to `true` make control buttons visible. |
| buttonWrapperStyle | `{backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: 'space-between', alignItems: 'center'}` |  `style`  | Custom styles.                              |
| nextButton         |                                                                                 `<Text style={styles.buttonText}>›</Text>`                                                                                  | `element` | Allow custom the next button.               |
| prevButton         |                                                                                 `<Text style={styles.buttonText}>‹</Text>`                                                                                  | `element` | Allow custom the prev button.               |

#### Props of Children

| Prop  |               Default                |   Type    | Description                                                    |
| :---- | :----------------------------------: | :-------: | :------------------------------------------------------------- |
| style |                {...}                 |  `style`  | Custom styles will merge with the default styles.              |
| title | {<Text numberOfLines={1}>...</Text>} | `element` | If this parameter is not specified, will not render the title. |

#### Basic props of `<ScrollView />`

| Prop                             | Default |  Type  | Description                                                                                                                                                                                                                                     |
| :------------------------------- | :-----: | :----: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| horizontal                       |  true   | `bool` | If `true`, the scroll view's children are arranged horizontally in a row instead of vertically in a column.                                                                                                                                     |
| pagingEnabled                    |  true   | `bool` | If true, the scroll view stops on multiples of the scroll view's size when scrolling. This can be used for horizontal pagination.                                                                                                               |
| showsHorizontalScrollIndicator   |  false  | `bool` | Set to `true` if you want to show horizontal scroll bar.                                                                                                                                                                                        |
| showsVerticalScrollIndicator     |  false  | `bool` | Set to `true` if you want to show vertical scroll bar.                                                                                                                                                                                          |
| bounces                          |  false  | `bool` | If `true`, the scroll view bounces when it reaches the end of the content if the content is larger then the scroll view along the axis of the scroll direction. If `false`, it disables all bouncing even if the alwaysBounce\* props are true. |
| scrollsToTop                     |  false  | `bool` | If true, the scroll view scrolls to top when the status bar is tapped.                                                                                                                                                                          |
| removeClippedSubviews            |  true   | `bool` | If true, offscreen child views (whose overflow value is hidden) are removed from their native backing superview when offscreen. This canimprove scrolling performance on long lists.                                                            |
| automaticallyAdjustContentInsets |  false  | `bool` | Set to `true` if you need adjust content insets automation.                                                                                                                                                                                     |
| scrollEnabled                    |  true   | `bool` | Enables/Disables swiping                                                                                                                                                                                                                        |

> @see: http://facebook.github.io/react-native/docs/scrollview.html

#### Supported ScrollResponder

| Prop                |          Params           |    Type    | Description                                                 |
| :------------------ | :-----------------------: | :--------: | :---------------------------------------------------------- |
| onScrollBeginDrag   | `e` / `state` / `context` | `function` | When animation begins after letting up                      |
| onMomentumScrollEnd | `e` / `state` / `context` | `function` | Makes no sense why this occurs first during bounce          |
| onTouchStartCapture | `e` / `state` / `context` | `function` | Immediately after `onMomentumScrollEnd`                     |
| onTouchStart        | `e` / `state` / `context` | `function` | Same, but bubble phase                                      |
| onTouchEnd          | `e` / `state` / `context` | `function` | You could hold the touch start for a long time              |
| onResponderRelease  | `e` / `state` / `context` | `function` | When lifting up - you could pause forever before \* lifting |

> Note: each ScrollResponder be injected with two params: `state` and `context`, you can get `state` and `context`(ref to swiper's `this`) from params, for example:

```jsx
var swiper = React.createClass({
  _onMomentumScrollEnd: function (e, state, context) {
    console.log(state, context.state)
  },
  render: function() {
    return (
      <Swiper style={styles.wrapper}
      onMomentumScrollEnd ={this._onMomentumScrollEnd}
     ...
      </Swiper>
    )
  }
})
```

> More ScrollResponder info, see: https://github.com/facebook/react-native/blob/master/Libraries/Components/ScrollResponder.js

### Methods

#### scrollBy(index, animated)

Scroll by relative index.

Parameters:

| Name     |   Type   |   default   | Description  |
| :------- | :------: | :---------: | :----------- |
| index    | `number` | `undefined` | offset index |
| animated |  `bool`  |   `true`    | offset index |

### Examples

```bash
$ cd examples
$ npm i
$ react-native run-ios
```

> Quick start with [examples](https://github.com/leecade/react-native-swiper/tree/master/examples/).

### Development

```bash
$ cd examples
$ yarn
$ yarn start
$ react-native run-ios
```

Then launch simulator to preview. Note that you just need to edit the source file `src/index.js`, the change will auto sync to examples.

After development, you should add test for your modification and make all tests passed to prevent other contributors break the feature in the future accidentally. We use detox + jest for e2e test now, you can read [Detox](https://github.com/wix/Detox) for more detail.

## Contribution

- [@leecade](mailto:leecade@163.com) The main author.
- [@rajkissu](mailto:rajkissu@gmail.com) The secondary contributor.

## Questions

Feel free to [contact me](mailto:leecade@163.com) or [create an issue](https://github.com/leecade/react-native-swiper/issues/new)

> Inspired by [nolimits4web/Swiper](https://github.com/nolimits4web/swiper/) & Design material from [Dribbble](https://dribbble.com/) & made with ♥.
> </file>

<file path="ROADMAP.md">
### V2

- [ ] Improve performance

- [ ] Landscape mode

> Please track in [milestones:v2](https://github.com/leecade/react-native-swiper/milestones/v2)

> Contribute code to [branch:Android](https://github.com/leecade/react-native-swiper/tree/android) and [branch:V2](https://github.com/leecade/react-native-swiper/tree/v2)

> Provide creative in [issues](https://github.com/leecade/react-native-swiper/issues)

---

### V1

- [x] **Support for Android**

- [ ] More switch effects

- [ ] Unit tests

- [ ] Check typo

- [ ] Fix bugs

- [x] Improve performance

- [x] Infinite loop

- [x] Direction control

- [x] Complete custom style

- [x] Allow title display & custom

- [x] Multiple instances

- [x] Custom container size

- [x] Control buttons

- [x] Autoplay

- [x] Custom pagination style

- [x] State inject
      </file>

</files>

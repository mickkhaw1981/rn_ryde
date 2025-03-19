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
ISSUE_TEMPLATE/
BUG_REPORT.md
workflows/
tests.yml
CODEOWNERS
CONTRIBUTING.md
PULL_REQUEST_TEMPLATE.md
examples/
bare/
android/
app/
src/
debug/
AndroidManifest.xml
main/
java/
com/
bare/
MainActivity.kt
MainApplication.kt
res/
drawable/
rn_edit_text_material.xml
values/
strings.xml
styles.xml
AndroidManifest.xml
build.gradle
proguard-rules.pro
gradle/
wrapper/
gradle-wrapper.properties
build.gradle
gradle.properties
gradlew
gradlew.bat
settings.gradle
ios/
bare/
Images.xcassets/
AppIcon.appiconset/
Contents.json
Contents.json
AppDelegate.swift
Info.plist
LaunchScreen.storyboard
PrivacyInfo.xcprivacy
bare.xcodeproj/
project.pbxproj
.xcode.env
Podfile
Podfile.lock
.gitignore
.watchmanconfig
app.json
App.tsx
babel.config.js
Gemfile
index.js
jest.config.js
metro.config.js
package.json
README.md
tsconfig.json
src/
back-handler.ts
index.ts
modal.style.ts
modal.tsx
types.ts
utils.ts
.gitattributes
.gitignore
.npmignore
.prettierignore
.prettierrc
.yarnrc.yml
ISSUE_TEMPLATE.md
LICENSE.md
package.json
README.md
tsconfig.json
</directory_structure>

<files>
This section contains the contents of the repository's files.

## <file path=".github/ISSUE_TEMPLATE/BUG_REPORT.md">

name: 🐛 Report a bug
about: Report a reproducible or regression bug.
labels: "bug"

---

<!-- NOTE:
- Under the hood react-native-modal uses react-native's built-in Modal.
- Before reporting a bug, try swapping react-native-modal with react-native's built-in Modal to check if the problem persists. If it does please report the issue in the react-native repo instead.
- Please notice that WE WON'T SUPPORT ISSUE IF YOU HAVEN'T TRIED USING THE BUILT-IN MODAL COMPONENT ALONE.
- For QUESTIONS and FEEDBACK, please use the [discussions](https://github.com/react-native-modal/react-native-modal/discussions) section.
-->

## Environment

<!-- Run `react-native info` in your terminal and paste its contents here. -->

## Platforms

<!-- Is this issue related to Android, iOS, or both? -->

## Versions

<!-- Please add the used versions/branches -->

- Android:
- iOS:
- react-native-modal:
- react-native:
- react:

## Description

<!-- Describe your issue in detail. Include screenshots if needed. If this is a regression, let us know. -->

## Reproducible Demo

<!-- Let us know how to reproduce the issue. Include a code sample or share a project that reproduces the issue. -->
<!-- Please follow the guidelines for providing a minimal example: https://stackoverflow.com/help/mcve -->
<!-- Please notice that WE WON'T SUPPORT ISSUE REPORTS THAT DON'T HAVE A MINIMAL REPRODUCIBLE EXAMPLE. -->
</file>

<file path=".github/workflows/tests.yml">
name: Tests

on:
push:
branches: - master
pull_request:
branches: - master

jobs:
tests:
runs-on: ubuntu-latest
name: Install
steps: - uses: actions/checkout@v4 - uses: actions/setup-node@v4
with:
node-version: '22.x' - run: |
corepack enable
yarn --immutable - name: Build the project
run: yarn build
</file>

<file path=".github/CODEOWNERS">
* @mmazzarolo @ancyrweb
</file>

<file path=".github/CONTRIBUTING.md">
# Contributing to React Native Modal

## Development Process

All work on React Native Modal happens directly on GitHub. Contributors send pull requests which go through a review process.

> **Working on your first pull request?** You can learn how from this _free_ series: [How to Contribute to an Open Source Project on GitHub](https://egghead.io/series/how-to-contribute-to-an-open-source-project-on-github).

1. Fork the repo and create your branch from `master` (a guide on [how to fork a repository](https://help.github.com/articles/fork-a-repo/)).
2. Run `yarn` or `npm install` to install all required dependencies.
3. Now you are ready to make your changes!

### Development flow

- Head into the `example` folder and do the same.
- Head into `ios` and run `pod install` if you wish to compile under iOS
- Get back into the root folder and launch `yarn run dev`. This will launch `ts` in watch mode.
- Get into the `example` folder again and type `yarn run start`.
- You can now open Android Studio or XCode directly from `example/android` or `example/ios` respectively, build
  and run the app.

## Tests & Verifications

Currently we use `eslint` with `prettier` for linting and formatting the code.  
We still don't have a test suite (it's a WIP).
All of these are run on CircleCI for all opened pull requests, but you should use them locally when making changes.

- `yarn test`: Run all tests and validations.
- `yarn lint`: Run `eslint`.
- `yarn test:ts`: Checks TypeScript
- `yarn lint --fix`: Run `eslint` and automatically fix issues. This is useful for correcting code formatting.

## Sending a pull request

When you're sending a pull request:

- Prefer small pull requests focused on one change.
- Verify that all tests and validations are passing.
- Follow the pull request template when opening a pull request.

## Commit message convention

We prefix our commit messages with one of the following to signify the kind of change:

- **build**: Changes that affect the build system or external dependencies.
- **ci**, **chore**: Changes to our CI configuration files and scripts.
- **docs**: Documentation only changes.
- **feat**: A new feature.
- **fix**: A bug fix.
- **perf**: A code change that improves performance.
- **refactor**: A code change that neither fixes a bug nor adds a feature.
- **style**: Changes that do not affect the meaning of the code.
- **test**: Adding missing tests or correcting existing tests.

## Reporting issues

You can report issues on our [bug tracker](https://github.com/react-native-community/react-native-modal/issues). Please search for existing issues and follow the issue template when opening an issue.

## License

By contributing to React Native Modal, you agree that your contributions will be licensed under the **MIT** license.
</file>

<file path=".github/PULL_REQUEST_TEMPLATE.md">
# Overview

<!-- Thank you for sending the PR! We appreciate you spending the time to work on these changes. -->
<!-- Help us understand your motivation by explaining why you decided to make this change -->

# Test Plan

<!-- Write your test plan here. If you changed any code, please provide us with clear instructions on how you verified your changes work. Bonus points for screenshots and videos! -->
</file>

<file path="examples/bare/android/app/src/debug/AndroidManifest.xml">
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:tools="http://schemas.android.com/tools">

    <application
        android:usesCleartextTraffic="true"
        tools:targetApi="28"
        tools:ignore="GoogleAppIndexingWarning"/>

</manifest>
</file>

<file path="examples/bare/android/app/src/main/java/com/bare/MainActivity.kt">
package com.bare

import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

/\*\*

- Returns the name of the main component registered from JavaScript. This is used to schedule
- rendering of the component.
  \*/
  override fun getMainComponentName(): String = "bare"

/\*\*

- Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
- which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
  \*/
  override fun createReactActivityDelegate(): ReactActivityDelegate =
  DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
  }
  </file>

<file path="examples/bare/android/app/src/main/java/com/bare/MainApplication.kt">
package com.bare

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.react.soloader.OpenSourceMergedSoMapping
import com.facebook.soloader.SoLoader

class MainApplication : Application(), ReactApplication {

override val reactNativeHost: ReactNativeHost =
object : DefaultReactNativeHost(this) {
override fun getPackages(): List<ReactPackage> =
PackageList(this).packages.apply {
// Packages that cannot be autolinked yet can be added manually here, for example:
// add(MyReactNativePackage())
}

        override fun getJSMainModuleName(): String = "index"

        override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

override val reactHost: ReactHost
get() = getDefaultReactHost(applicationContext, reactNativeHost)

override fun onCreate() {
super.onCreate()
SoLoader.init(this, OpenSourceMergedSoMapping)
if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
// If you opted-in for the New Architecture, we load the native entry point for this app.
load()
}
}
}
</file>

<file path="examples/bare/android/app/src/main/res/drawable/rn_edit_text_material.xml">
<?xml version="1.0" encoding="utf-8"?>
<!-- Copyright (C) 2014 The Android Open Source Project

     Licensed under the Apache License, Version 2.0 (the "License");
     you may not use this file except in compliance with the License.
     You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

     Unless required by applicable law or agreed to in writing, software
     distributed under the License is distributed on an "AS IS" BASIS,
     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     See the License for the specific language governing permissions and
     limitations under the License.

-->
<inset xmlns:android="http://schemas.android.com/apk/res/android"
       android:insetLeft="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetRight="@dimen/abc_edit_text_inset_horizontal_material"
       android:insetTop="@dimen/abc_edit_text_inset_top_material"
       android:insetBottom="@dimen/abc_edit_text_inset_bottom_material"
       >

    <selector>
        <!--
          This file is a copy of abc_edit_text_material (https://bit.ly/3k8fX7I).
          The item below with state_pressed="false" and state_focused="false" causes a NullPointerException.
          NullPointerException:tempt to invoke virtual method 'android.graphics.drawable.Drawable android.graphics.drawable.Drawable$ConstantState.newDrawable(android.content.res.Resources)'

          <item android:state_pressed="false" android:state_focused="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>

          For more info, see https://bit.ly/3CdLStv (react-native/pull/29452) and https://bit.ly/3nxOMoR.
        -->
        <item android:state_enabled="false" android:drawable="@drawable/abc_textfield_default_mtrl_alpha"/>
        <item android:drawable="@drawable/abc_textfield_activated_mtrl_alpha"/>
    </selector>

</inset>
</file>

<file path="examples/bare/android/app/src/main/res/values/strings.xml">
<resources>
    <string name="app_name">bare</string>
</resources>
</file>

<file path="examples/bare/android/app/src/main/res/values/styles.xml">
<resources>

    <!-- Base application theme. -->
    <style name="AppTheme" parent="Theme.AppCompat.DayNight.NoActionBar">
        <!-- Customize your theme here. -->
        <item name="android:editTextBackground">@drawable/rn_edit_text_material</item>
    </style>

</resources>
</file>

<file path="examples/bare/android/app/src/main/AndroidManifest.xml">
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
      android:name=".MainApplication"
      android:label="@string/app_name"
      android:icon="@mipmap/ic_launcher"
      android:roundIcon="@mipmap/ic_launcher_round"
      android:allowBackup="false"
      android:theme="@style/AppTheme"
      android:supportsRtl="true">
      <activity
        android:name=".MainActivity"
        android:label="@string/app_name"
        android:configChanges="keyboard|keyboardHidden|orientation|screenLayout|screenSize|smallestScreenSize|uiMode"
        android:launchMode="singleTask"
        android:windowSoftInputMode="adjustResize"
        android:exported="true">
        <intent-filter>
            <action android:name="android.intent.action.MAIN" />
            <category android:name="android.intent.category.LAUNCHER" />
        </intent-filter>
      </activity>
    </application>

</manifest>
</file>

<file path="examples/bare/android/app/build.gradle">
apply plugin: "com.android.application"
apply plugin: "org.jetbrains.kotlin.android"
apply plugin: "com.facebook.react"

/\*\*

- This is the configuration block to customize your React Native Android app.
- By default you don't need to apply any configuration, just uncomment the lines you need.
  _/
  react {
  /_ Folders \*/
  // The root of your project, i.e. where "package.json" lives. Default is '../..'
  // root = file("../../")
  // The folder where the react-native NPM package is. Default is ../../node_modules/react-native
  // reactNativeDir = file("../../node_modules/react-native")
  // The folder where the react-native Codegen package is. Default is ../../node_modules/@react-native/codegen
  // codegenDir = file("../../node_modules/@react-native/codegen")
  // The cli.js file which is the React Native CLI entrypoint. Default is ../../node_modules/react-native/cli.js
  // cliFile = file("../../node_modules/react-native/cli.js")

      /* Variants */
      //   The list of variants to that are debuggable. For those we're going to
      //   skip the bundling of the JS bundle and the assets. By default is just 'debug'.
      //   If you add flavors like lite, prod, etc. you'll have to list your debuggableVariants.
      // debuggableVariants = ["liteDebug", "prodDebug"]

      /* Bundling */
      //   A list containing the node command and its flags. Default is just 'node'.
      // nodeExecutableAndArgs = ["node"]
      //
      //   The command to run when bundling. By default is 'bundle'
      // bundleCommand = "ram-bundle"
      //
      //   The path to the CLI configuration file. Default is empty.
      // bundleConfig = file(../rn-cli.config.js)
      //
      //   The name of the generated asset file containing your JS bundle
      // bundleAssetName = "MyApplication.android.bundle"
      //
      //   The entry file for bundle generation. Default is 'index.android.js' or 'index.js'
      // entryFile = file("../js/MyApplication.android.js")
      //
      //   A list of extra flags to pass to the 'bundle' commands.
      //   See https://github.com/react-native-community/cli/blob/main/docs/commands.md#bundle
      // extraPackagerArgs = []

      /* Hermes Commands */
      //   The hermes compiler command to run. By default it is 'hermesc'
      // hermesCommand = "$rootDir/my-custom-hermesc/bin/hermesc"
      //
      //   The list of flags to pass to the Hermes compiler. By default is "-O", "-output-source-map"
      // hermesFlags = ["-O", "-output-source-map"]

      /* Autolinking */
      autolinkLibrariesWithApp()

  }

/\*\*

- Set this to true to Run Proguard on Release builds to minify the Java bytecode.
  \*/
  def enableProguardInReleaseBuilds = false

/\*\*

- The preferred build flavor of JavaScriptCore (JSC)
-
- For example, to use the international variant, you can use:
- `def jscFlavor = io.github.react-native-community:jsc-android-intl:2026004.+`
-
- The international variant includes ICU i18n library and necessary data
- allowing to use e.g. `Date.toLocaleString` and `String.localeCompare` that
- give correct results when using with locales other than en-US. Note that
- this variant is about 6MiB larger per architecture than default.
  \*/
  def jscFlavor = 'io.github.react-native-community:jsc-android:2026004.+'

android {
ndkVersion rootProject.ext.ndkVersion
buildToolsVersion rootProject.ext.buildToolsVersion
compileSdk rootProject.ext.compileSdkVersion

    namespace "com.bare"
    defaultConfig {
        applicationId "com.bare"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
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
            // see https://reactnative.dev/docs/signed-apk-android.
            signingConfig signingConfigs.debug
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }

}

dependencies {
// The version of react-native is set by the React Native Gradle Plugin
implementation("com.facebook.react:react-android")

    if (hermesEnabled.toBoolean()) {
        implementation("com.facebook.react:hermes-android")
    } else {
        implementation jscFlavor
    }

}
</file>

<file path="examples/bare/android/app/proguard-rules.pro">
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

<file path="examples/bare/android/gradle/wrapper/gradle-wrapper.properties">
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
distributionUrl=https\://services.gradle.org/distributions/gradle-8.12-all.zip
networkTimeout=10000
validateDistributionUrl=true
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
</file>

<file path="examples/bare/android/build.gradle">
buildscript {
    ext {
        buildToolsVersion = "35.0.0"
        minSdkVersion = 24
        compileSdkVersion = 35
        targetSdkVersion = 35
        ndkVersion = "27.1.12297006"
        kotlinVersion = "2.0.21"
    }
    repositories {
        google()
        mavenCentral()
    }
    dependencies {
        classpath("com.android.tools.build:gradle")
        classpath("com.facebook.react:react-native-gradle-plugin")
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin")
    }
}

apply plugin: "com.facebook.react.rootproject"
</file>

<file path="examples/bare/android/gradle.properties">
# Project-wide Gradle settings.

# IDE (e.g. Android Studio) users:

# Gradle settings configured through the IDE _will override_

# any settings specified in this file.

# For more details on how to configure your build environment visit

# http://www.gradle.org/docs/current/userguide/build_environment.html

# Specifies the JVM arguments used for the daemon process.

# The setting is particularly useful for tweaking memory settings.

# Default value: -Xmx512m -XX:MaxMetaspaceSize=256m

org.gradle.jvmargs=-Xmx2048m -XX:MaxMetaspaceSize=512m

# When configured, Gradle will run in incubating parallel mode.

# This option should only be used with decoupled projects. More details, visit

# http://www.gradle.org/docs/current/userguide/multi_project_builds.html#sec:decoupled_projects

# org.gradle.parallel=true

# AndroidX package structure to make it clearer which packages are bundled with the

# Android operating system, and which are packaged with your app's APK

# https://developer.android.com/topic/libraries/support-library/androidx-rn

android.useAndroidX=true

# Use this property to specify which architecture you want to build.

# You can also override it from the CLI using

# ./gradlew <task> -PreactNativeArchitectures=x86_64

reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_64

# Use this property to enable support to the new architecture.

# This will allow you to use TurboModules and the Fabric render in

# your application. You should enable this flag either if you want

# to write custom TurboModules/Fabric components OR use libraries that

# are providing them.

newArchEnabled=true

# Use this property to enable or disable the Hermes JS engine.

# If set to false, you will be using JSC instead.

hermesEnabled=true
</file>

<file path="examples/bare/android/gradlew">
#!/bin/sh

#

# Copyright © 2015-2021 the original authors.

#

# Licensed under the Apache License, Version 2.0 (the "License");

# you may not use this file except in compliance with the License.

# You may obtain a copy of the License at

#

# https://www.apache.org/licenses/LICENSE-2.0

#

# Unless required by applicable law or agreed to in writing, software

# distributed under the License is distributed on an "AS IS" BASIS,

# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

# See the License for the specific language governing permissions and

# limitations under the License.

#

# SPDX-License-Identifier: Apache-2.0

#

##############################################################################

#

# Gradle start up script for POSIX generated by Gradle.

#

# Important for running:

#

# (1) You need a POSIX-compliant shell to run this script. If your /bin/sh is

# noncompliant, but you have some other compliant shell such as ksh or

# bash, then to run this script, type that shell name before the whole

# command line, like:

#

# ksh Gradle

#

# Busybox and similar reduced shells will NOT work, because this script

# requires all of these POSIX shell features:

# \* functions;

# \* expansions «$var», «${var}», «${var:-default}», «${var+SET}»,

# «${var#prefix}», «${var%suffix}», and «$( cmd )»;

# \* compound commands having a testable exit status, especially «case»;

# \* various built-in commands including «command», «set», and «ulimit».

#

# Important for patching:

#

# (2) This script targets any POSIX shell, so it avoids extensions provided

# by Bash, Ksh, etc; in particular arrays are avoided.

#

# The "traditional" practice of packing multiple parameters into a

# space-separated string is a well documented source of bugs and security

# problems, so this is (mostly) avoided, by progressively accumulating

# options in "$@", and eventually passing that to Java.

#

# Where the inherited environment variables (DEFAULT_JVM_OPTS, JAVA_OPTS,

# and GRADLE_OPTS) rely on word-splitting, this is performed explicitly;

# see the in-line comments for details.

#

# There are tweaks for specific operating systems such as AIX, CygWin,

# Darwin, MinGW, and NonStop.

#

# (3) This script is generated from the Groovy template

# https://github.com/gradle/gradle/blob/HEAD/platforms/jvm/plugins-application/src/main/resources/org/gradle/api/internal/plugins/unixStartScript.txt

# within the Gradle project.

#

# You can find Gradle at https://github.com/gradle/gradle/.

#

##############################################################################

# Attempt to set APP_HOME

# Resolve links: $0 may be a link

app_path=$0

# Need this for daisy-chained symlinks.

while
APP_HOME=${app_path%"${app_path##_/}"} # leaves a trailing /; empty if no leading path
[ -h "$app_path" ]
do
ls=$( ls -ld "$app_path" )
link=${ls#_' -> '}
case $link in             #(
      /*)   app_path=$link ;; #(
\*) app_path=$APP_HOME$link ;;
esac
done

# This is normally unused

# shellcheck disable=SC2034

APP_BASE_NAME=${0##\*/}

# Discard cd standard output in case $CDPATH is set (https://github.com/gradle/gradle/issues/25036)

APP_HOME=$( cd -P "${APP_HOME:-./}" > /dev/null && printf '%s\n' "$PWD" ) || exit

# Use the maximum available, or set MAX_FD != -1 to use that value.

MAX_FD=maximum

warn () {
echo "$\*"
} >&2

die () {
echo
echo "$\*"
echo
exit 1
} >&2

# OS specific support (must be 'true' or 'false').

cygwin=false
msys=false
darwin=false
nonstop=false
case "$( uname )" in #(
CYGWIN* ) cygwin=true ;; #(
Darwin* ) darwin=true ;; #(
MSYS* | MINGW* ) msys=true ;; #(
NONSTOP\* ) nonstop=true ;;
esac

CLASSPATH=$APP_HOME/gradle/wrapper/gradle-wrapper.jar

# Determine the Java command to use to start the JVM.

if [ -n "$JAVA_HOME" ] ; then
if [ -x "$JAVA_HOME/jre/sh/java" ] ; then # IBM's JDK on AIX uses strange locations for the executables
JAVACMD=$JAVA_HOME/jre/sh/java
    else
        JAVACMD=$JAVA_HOME/bin/java
fi
if [ ! -x "$JAVACMD" ] ; then
die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
fi
else
JAVACMD=java
if ! command -v java >/dev/null 2>&1
then
die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.

Please set the JAVA_HOME variable in your environment to match the
location of your Java installation."
fi
fi

# Increase the maximum file descriptors if we can.

if ! "$cygwin" && ! "$darwin" && ! "$nonstop" ; then
    case $MAX_FD in #(
      max*)
        # In POSIX sh, ulimit -H is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        MAX_FD=$( ulimit -H -n ) ||
warn "Could not query maximum file descriptor limit"
esac
case $MAX_FD in  #(
      '' | soft) :;; #(
      *)
        # In POSIX sh, ulimit -n is undefined. That's why the result is checked to see if it worked.
        # shellcheck disable=SC2039,SC3045
        ulimit -n "$MAX_FD" ||
warn "Could not set maximum file descriptor limit to $MAX_FD"
esac
fi

# Collect all arguments for the java command, stacking in reverse order:

# \* args from the command line

# \* the main class name

# \* -classpath

# \* -D...appname settings

# \* --module-path (only if needed)

# \* DEFAULT_JVM_OPTS, JAVA_OPTS, and GRADLE_OPTS environment variables.

# For Cygwin or MSYS, switch paths to Windows format before running java

if "$cygwin" || "$msys" ; then
APP_HOME=$( cygpath --path --mixed "$APP_HOME" )
CLASSPATH=$( cygpath --path --mixed "$CLASSPATH" )

    JAVACMD=$( cygpath --unix "$JAVACMD" )

    # Now convert the arguments - kludge to limit ourselves to /bin/sh
    for arg do
        if
            case $arg in                                #(
              -*)   false ;;                            # don't mess with options #(
              /?*)  t=${arg#/} t=/${t%%/*}              # looks like a POSIX filepath
                    [ -e "$t" ] ;;                      #(
              *)    false ;;
            esac
        then
            arg=$( cygpath --path --ignore --mixed "$arg" )
        fi
        # Roll the args list around exactly as many times as the number of
        # args, so each arg winds up back in the position where it started, but
        # possibly modified.
        #
        # NB: a `for` loop captures its iteration list before it begins, so
        # changing the positional parameters here affects neither the number of
        # iterations, nor the values presented in `arg`.
        shift                   # remove old arg
        set -- "$@" "$arg"      # push replacement arg
    done

fi

# Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.

DEFAULT_JVM_OPTS='"-Xmx64m" "-Xms64m"'

# Collect all arguments for the java command:

# \* DEFAULT_JVM_OPTS, JAVA_OPTS, JAVA_OPTS, and optsEnvironmentVar are not allowed to contain shell fragments,

# and any embedded shellness will be escaped.

# \* For example: A user cannot expect ${Hostname} to be expanded, as it is an environment variable and will be

# treated as '${Hostname}' itself on the command line.

set -- \
 "-Dorg.gradle.appname=$APP_BASE_NAME" \
        -classpath "$CLASSPATH" \
 org.gradle.wrapper.GradleWrapperMain \
 "$@"

# Stop when "xargs" is not available.

if ! command -v xargs >/dev/null 2>&1
then
die "xargs is not available"
fi

# Use "xargs" to parse quoted args.

#

# With -n1 it outputs one arg per line, with the quotes and backslashes removed.

#

# In Bash we could simply go:

#

# readarray ARGS < <( xargs -n1 <<<"$var" ) &&

# set -- "${ARGS[@]}" "$@"

#

# but POSIX shell has neither arrays nor command substitution, so instead we

# post-process each arg (as a line of input to sed) to backslash-escape any

# character that might be a shell metacharacter, then use eval to reverse

# that process (while maintaining the separation between arguments), and wrap

# the whole thing up as a single "set" statement.

#

# This will of course break if any of these variables contains a newline or

# an unmatched quote.

#

eval "set -- $(
        printf '%s\n' "$DEFAULT*JVM_OPTS $JAVA_OPTS $GRADLE_OPTS" |
xargs -n1 |
sed ' s~[^-[:alnum:]+,./:=@*]~\\&~g; ' |
tr '\n' ' '
)" '"$@"'

exec "$JAVACMD" "$@"
</file>

<file path="examples/bare/android/gradlew.bat">
@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem
@rem SPDX-License-Identifier: Apache-2.0
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem Gradle startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and GRADLE_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS="-Xmx64m" "-Xms64m"

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH. 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo. 1>&2
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME% 1>&2
echo. 1>&2
echo Please set the JAVA_HOME variable in your environment to match the 1>&2
echo location of your Java installation. 1>&2

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\gradle\wrapper\gradle-wrapper.jar

@rem Execute Gradle
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %GRADLE_OPTS% "-Dorg.gradle.appname=%APP_BASE_NAME%" -classpath "%CLASSPATH%" org.gradle.wrapper.GradleWrapperMain %\*

:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd

:fail
rem Set variable GRADLE*EXIT_CONSOLE if you need the \_script* return code instead of
rem the _cmd.exe /c_ return code!
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%GRADLE_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
</file>

<file path="examples/bare/android/settings.gradle">
pluginManagement { includeBuild("../node_modules/@react-native/gradle-plugin") }
plugins { id("com.facebook.react.settings") }
extensions.configure(com.facebook.react.ReactSettingsExtension){ ex -> ex.autolinkLibrariesFromCommand() }
rootProject.name = 'bare'
include ':app'
includeBuild('../node_modules/@react-native/gradle-plugin')
</file>

<file path="examples/bare/ios/bare/Images.xcassets/AppIcon.appiconset/Contents.json">
{
  "images": [
    {
      "idiom": "iphone",
      "scale": "2x",
      "size": "20x20"
    },
    {
      "idiom": "iphone",
      "scale": "3x",
      "size": "20x20"
    },
    {
      "idiom": "iphone",
      "scale": "2x",
      "size": "29x29"
    },
    {
      "idiom": "iphone",
      "scale": "3x",
      "size": "29x29"
    },
    {
      "idiom": "iphone",
      "scale": "2x",
      "size": "40x40"
    },
    {
      "idiom": "iphone",
      "scale": "3x",
      "size": "40x40"
    },
    {
      "idiom": "iphone",
      "scale": "2x",
      "size": "60x60"
    },
    {
      "idiom": "iphone",
      "scale": "3x",
      "size": "60x60"
    },
    {
      "idiom": "ios-marketing",
      "scale": "1x",
      "size": "1024x1024"
    }
  ],
  "info": {
    "author": "xcode",
    "version": 1
  }
}
</file>

<file path="examples/bare/ios/bare/Images.xcassets/Contents.json">
{
  "info": {
    "version": 1,
    "author": "xcode"
  }
}
</file>

<file path="examples/bare/ios/bare/AppDelegate.swift">
import UIKit
import React
import React_RCTAppDelegate
import ReactAppDependencyProvider

@main
class AppDelegate: RCTAppDelegate {
override func application(\_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
self.moduleName = "bare"
self.dependencyProvider = RCTAppDependencyProvider()

    // You can add your custom initial props in the dictionary below.
    // They will be passed down to the ViewController used by React Native.
    self.initialProps = [:]

    return super.application(application, didFinishLaunchingWithOptions: launchOptions)

}

override func sourceURL(for bridge: RCTBridge) -> URL? {
self.bundleURL()
}

override func bundleURL() -> URL? {
#if DEBUG
RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index")
#else
Bundle.main.url(forResource: "main", withExtension: "jsbundle")
#endif
}
}
</file>

<file path="examples/bare/ios/bare/Info.plist">
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleDevelopmentRegion</key>
	<string>en</string>
	<key>CFBundleDisplayName</key>
	<string>bare</string>
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
	<string>$(MARKETING_VERSION)</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>CFBundleVersion</key>
	<string>$(CURRENT_PROJECT_VERSION)</string>
	<key>LSRequiresIPhoneOS</key>
	<true/>
	<key>NSAppTransportSecurity</key>
	<dict>
	  <!-- Do not change NSAllowsArbitraryLoads to true, or you will risk app rejection! -->
		<key>NSAllowsArbitraryLoads</key>
		<false/>
		<key>NSAllowsLocalNetworking</key>
		<true/>
	</dict>
	<key>NSLocationWhenInUseUsageDescription</key>
	<string></string>
	<key>UILaunchStoryboardName</key>
	<string>LaunchScreen</string>
	<key>UIRequiredDeviceCapabilities</key>
	<array>
		<string>arm64</string>
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

<file path="examples/bare/ios/bare/LaunchScreen.storyboard">
<?xml version="1.0" encoding="UTF-8"?>
<document type="com.apple.InterfaceBuilder3.CocoaTouch.Storyboard.XIB" version="3.0" toolsVersion="15702" targetRuntime="iOS.CocoaTouch" propertyAccessControl="none" useAutolayout="YES" launchScreen="YES" useTraitCollections="YES" useSafeAreas="YES" colorMatched="YES" initialViewController="01J-lp-oVM">
    <device id="retina4_7" orientation="portrait" appearance="light"/>
    <dependencies>
        <deployment identifier="iOS"/>
        <plugIn identifier="com.apple.InterfaceBuilder.IBCocoaTouchPlugin" version="15704"/>
        <capability name="Safe area layout guides" minToolsVersion="9.0"/>
        <capability name="documents saved in the Xcode 8 format" minToolsVersion="8.0"/>
    </dependencies>
    <scenes>
        <!--View Controller-->
        <scene sceneID="EHf-IW-A2E">
            <objects>
                <viewController id="01J-lp-oVM" sceneMemberID="viewController">
                    <view key="view" contentMode="scaleToFill" id="Ze5-6b-2t3">
                        <rect key="frame" x="0.0" y="0.0" width="375" height="667"/>
                        <autoresizingMask key="autoresizingMask" widthSizable="YES" heightSizable="YES"/>
                        <subviews>
                            <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="bare" textAlignment="center" lineBreakMode="middleTruncation" baselineAdjustment="alignBaselines" minimumFontSize="18" translatesAutoresizingMaskIntoConstraints="NO" id="GJd-Yh-RWb">
                                <rect key="frame" x="0.0" y="202" width="375" height="43"/>
                                <fontDescription key="fontDescription" type="boldSystem" pointSize="36"/>
                                <nil key="highlightedColor"/>
                            </label>
                            <label opaque="NO" clipsSubviews="YES" userInteractionEnabled="NO" contentMode="left" horizontalHuggingPriority="251" verticalHuggingPriority="251" text="Powered by React Native" textAlignment="center" lineBreakMode="tailTruncation" baselineAdjustment="alignBaselines" minimumFontSize="9" translatesAutoresizingMaskIntoConstraints="NO" id="MN2-I3-ftu">
                                <rect key="frame" x="0.0" y="626" width="375" height="21"/>
                                <fontDescription key="fontDescription" type="system" pointSize="17"/>
                                <nil key="highlightedColor"/>
                            </label>
                        </subviews>
                        <color key="backgroundColor" systemColor="systemBackgroundColor" cocoaTouchSystemColor="whiteColor"/>
                        <constraints>
                            <constraint firstItem="Bcu-3y-fUS" firstAttribute="bottom" secondItem="MN2-I3-ftu" secondAttribute="bottom" constant="20" id="OZV-Vh-mqD"/>
                            <constraint firstItem="Bcu-3y-fUS" firstAttribute="centerX" secondItem="GJd-Yh-RWb" secondAttribute="centerX" id="Q3B-4B-g5h"/>
                            <constraint firstItem="MN2-I3-ftu" firstAttribute="centerX" secondItem="Bcu-3y-fUS" secondAttribute="centerX" id="akx-eg-2ui"/>
                            <constraint firstItem="MN2-I3-ftu" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" id="i1E-0Y-4RG"/>
                            <constraint firstItem="GJd-Yh-RWb" firstAttribute="centerY" secondItem="Ze5-6b-2t3" secondAttribute="bottom" multiplier="1/3" constant="1" id="moa-c2-u7t"/>
                            <constraint firstItem="GJd-Yh-RWb" firstAttribute="leading" secondItem="Bcu-3y-fUS" secondAttribute="leading" symbolic="YES" id="x7j-FC-K8j"/>
                        </constraints>
                        <viewLayoutGuide key="safeArea" id="Bcu-3y-fUS"/>
                    </view>
                </viewController>
                <placeholder placeholderIdentifier="IBFirstResponder" id="iYj-Kq-Ea1" userLabel="First Responder" sceneMemberID="firstResponder"/>
            </objects>
            <point key="canvasLocation" x="52.173913043478265" y="375"/>
        </scene>
    </scenes>
</document>
</file>

<file path="examples/bare/ios/bare/PrivacyInfo.xcprivacy">
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>NSPrivacyAccessedAPITypes</key>
	<array>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryFileTimestamp</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>C617.1</string>
			</array>
		</dict>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategoryUserDefaults</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>CA92.1</string>
			</array>
		</dict>
		<dict>
			<key>NSPrivacyAccessedAPIType</key>
			<string>NSPrivacyAccessedAPICategorySystemBootTime</string>
			<key>NSPrivacyAccessedAPITypeReasons</key>
			<array>
				<string>35F9.1</string>
			</array>
		</dict>
	</array>
	<key>NSPrivacyCollectedDataTypes</key>
	<array/>
	<key>NSPrivacyTracking</key>
	<false/>
</dict>
</plist>
</file>

<file path="examples/bare/ios/bare.xcodeproj/project.pbxproj">
// !$*UTF8*$!
{
	archiveVersion = 1;
	classes = {
	};
	objectVersion = 54;
	objects = {

/_ Begin PBXBuildFile section _/
0C80B921A6F3F58F76C31292 /_ libPods-bare.a in Frameworks _/ = {isa = PBXBuildFile; fileRef = 5DCACB8F33CDC322A6C60F78 /_ libPods-bare.a _/; };
13B07FBF1A68108700A75B9A /_ Images.xcassets in Resources _/ = {isa = PBXBuildFile; fileRef = 13B07FB51A68108700A75B9A /_ Images.xcassets _/; };
761780ED2CA45674006654EE /_ AppDelegate.swift in Sources _/ = {isa = PBXBuildFile; fileRef = 761780EC2CA45674006654EE /_ AppDelegate.swift _/; };
81AB9BB82411601600AC10FF /_ LaunchScreen.storyboard in Resources _/ = {isa = PBXBuildFile; fileRef = 81AB9BB72411601600AC10FF /_ LaunchScreen.storyboard _/; };
B1B9DB0D1141E1727B1F9413 /_ PrivacyInfo.xcprivacy in Resources _/ = {isa = PBXBuildFile; fileRef = 13B07FB81A68108700A75B9A /_ PrivacyInfo.xcprivacy _/; };
/_ End PBXBuildFile section _/

/_ Begin PBXFileReference section _/
13B07F961A680F5B00A75B9A /_ bare.app _/ = {isa = PBXFileReference; explicitFileType = wrapper.application; includeInIndex = 0; path = bare.app; sourceTree = BUILT_PRODUCTS_DIR; };
13B07FB51A68108700A75B9A /_ Images.xcassets _/ = {isa = PBXFileReference; lastKnownFileType = folder.assetcatalog; name = Images.xcassets; path = bare/Images.xcassets; sourceTree = "<group>"; };
13B07FB61A68108700A75B9A /_ Info.plist _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text.plist.xml; name = Info.plist; path = bare/Info.plist; sourceTree = "<group>"; };
13B07FB81A68108700A75B9A /_ PrivacyInfo.xcprivacy _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = text.plist.xml; name = PrivacyInfo.xcprivacy; path = bare/PrivacyInfo.xcprivacy; sourceTree = "<group>"; };
3B4392A12AC88292D35C810B /_ Pods-bare.debug.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-bare.debug.xcconfig"; path = "Target Support Files/Pods-bare/Pods-bare.debug.xcconfig"; sourceTree = "<group>"; };
5709B34CF0A7D63546082F79 /_ Pods-bare.release.xcconfig _/ = {isa = PBXFileReference; includeInIndex = 1; lastKnownFileType = text.xcconfig; name = "Pods-bare.release.xcconfig"; path = "Target Support Files/Pods-bare/Pods-bare.release.xcconfig"; sourceTree = "<group>"; };
5DCACB8F33CDC322A6C60F78 /_ libPods-bare.a _/ = {isa = PBXFileReference; explicitFileType = archive.ar; includeInIndex = 0; path = "libPods-bare.a"; sourceTree = BUILT_PRODUCTS_DIR; };
761780EC2CA45674006654EE /_ AppDelegate.swift _/ = {isa = PBXFileReference; lastKnownFileType = sourcecode.swift; name = AppDelegate.swift; path = bare/AppDelegate.swift; sourceTree = "<group>"; };
81AB9BB72411601600AC10FF /_ LaunchScreen.storyboard _/ = {isa = PBXFileReference; fileEncoding = 4; lastKnownFileType = file.storyboard; name = LaunchScreen.storyboard; path = bare/LaunchScreen.storyboard; sourceTree = "<group>"; };
ED297162215061F000B7C4FE /_ JavaScriptCore.framework _/ = {isa = PBXFileReference; lastKnownFileType = wrapper.framework; name = JavaScriptCore.framework; path = System/Library/Frameworks/JavaScriptCore.framework; sourceTree = SDKROOT; };
/_ End PBXFileReference section _/

/_ Begin PBXFrameworksBuildPhase section _/
13B07F8C1A680F5B00A75B9A /_ Frameworks _/ = {
isa = PBXFrameworksBuildPhase;
buildActionMask = 2147483647;
files = (
0C80B921A6F3F58F76C31292 /_ libPods-bare.a in Frameworks _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
/_ End PBXFrameworksBuildPhase section _/

/_ Begin PBXGroup section _/
13B07FAE1A68108700A75B9A /_ bare _/ = {
isa = PBXGroup;
children = (
13B07FB51A68108700A75B9A /_ Images.xcassets _/,
761780EC2CA45674006654EE /_ AppDelegate.swift _/,
13B07FB61A68108700A75B9A /_ Info.plist _/,
81AB9BB72411601600AC10FF /_ LaunchScreen.storyboard _/,
13B07FB81A68108700A75B9A /_ PrivacyInfo.xcprivacy _/,
);
name = bare;
sourceTree = "<group>";
};
2D16E6871FA4F8E400B85C8A /_ Frameworks _/ = {
isa = PBXGroup;
children = (
ED297162215061F000B7C4FE /_ JavaScriptCore.framework _/,
5DCACB8F33CDC322A6C60F78 /_ libPods-bare.a _/,
);
name = Frameworks;
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
13B07FAE1A68108700A75B9A /_ bare _/,
832341AE1AAA6A7D00B99B32 /_ Libraries _/,
83CBBA001A601CBA00E9B192 /_ Products _/,
2D16E6871FA4F8E400B85C8A /_ Frameworks _/,
BBD78D7AC51CEA395F1C20DB /_ Pods _/,
);
indentWidth = 2;
sourceTree = "<group>";
tabWidth = 2;
usesTabs = 0;
};
83CBBA001A601CBA00E9B192 /_ Products _/ = {
isa = PBXGroup;
children = (
13B07F961A680F5B00A75B9A /_ bare.app _/,
);
name = Products;
sourceTree = "<group>";
};
BBD78D7AC51CEA395F1C20DB /_ Pods _/ = {
isa = PBXGroup;
children = (
3B4392A12AC88292D35C810B /_ Pods-bare.debug.xcconfig _/,
5709B34CF0A7D63546082F79 /_ Pods-bare.release.xcconfig _/,
);
path = Pods;
sourceTree = "<group>";
};
/_ End PBXGroup section _/

/_ Begin PBXNativeTarget section _/
13B07F861A680F5B00A75B9A /_ bare _/ = {
isa = PBXNativeTarget;
buildConfigurationList = 13B07F931A680F5B00A75B9A /_ Build configuration list for PBXNativeTarget "bare" _/;
buildPhases = (
C38B50BA6285516D6DCD4F65 /_ [CP] Check Pods Manifest.lock _/,
13B07F871A680F5B00A75B9A /_ Sources _/,
13B07F8C1A680F5B00A75B9A /_ Frameworks _/,
13B07F8E1A680F5B00A75B9A /_ Resources _/,
00DD1BFF1BD5951E006B06BC /_ Bundle React Native code and images _/,
00EEFC60759A1932668264C0 /_ [CP] Embed Pods Frameworks _/,
E235C05ADACE081382539298 /_ [CP] Copy Pods Resources _/,
);
buildRules = (
);
dependencies = (
);
name = bare;
productName = bare;
productReference = 13B07F961A680F5B00A75B9A /_ bare.app _/;
productType = "com.apple.product-type.application";
};
/_ End PBXNativeTarget section _/

/_ Begin PBXProject section _/
83CBB9F71A601CBA00E9B192 /_ Project object _/ = {
isa = PBXProject;
attributes = {
LastUpgradeCheck = 1210;
TargetAttributes = {
13B07F861A680F5B00A75B9A = {
LastSwiftMigration = 1120;
};
};
};
buildConfigurationList = 83CBB9FA1A601CBA00E9B192 /_ Build configuration list for PBXProject "bare" _/;
compatibilityVersion = "Xcode 12.0";
developmentRegion = en;
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
13B07F861A680F5B00A75B9A /_ bare _/,
);
};
/_ End PBXProject section _/

/_ Begin PBXResourcesBuildPhase section _/
13B07F8E1A680F5B00A75B9A /_ Resources _/ = {
isa = PBXResourcesBuildPhase;
buildActionMask = 2147483647;
files = (
81AB9BB82411601600AC10FF /_ LaunchScreen.storyboard in Resources _/,
13B07FBF1A68108700A75B9A /_ Images.xcassets in Resources _/,
B1B9DB0D1141E1727B1F9413 /_ PrivacyInfo.xcprivacy in Resources _/,
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
"$(SRCROOT)/.xcode.env.local",
				"$(SRCROOT)/.xcode.env",
);
name = "Bundle React Native code and images";
outputPaths = (
);
runOnlyForDeploymentPostprocessing = 0;
shellPath = /bin/sh;
shellScript = "set -e\n\nWITH_ENVIRONMENT=\"$REACT_NATIVE_PATH/scripts/xcode/with-environment.sh\"\nREACT_NATIVE_XCODE=\"$REACT_NATIVE_PATH/scripts/react-native-xcode.sh\"\n\n/bin/sh -c \"$WITH_ENVIRONMENT $REACT_NATIVE_XCODE\"\n";
		};
		00EEFC60759A1932668264C0 /* [CP] Embed Pods Frameworks */ = {
			isa = PBXShellScriptBuildPhase;
			buildActionMask = 2147483647;
			files = (
			);
			inputFileListPaths = (
				"${PODS_ROOT}/Target Support Files/Pods-bare/Pods-bare-frameworks-${CONFIGURATION}-input-files.xcfilelist",
			);
			name = "[CP] Embed Pods Frameworks";
			outputFileListPaths = (
				"${PODS_ROOT}/Target Support Files/Pods-bare/Pods-bare-frameworks-${CONFIGURATION}-output-files.xcfilelist",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-bare/Pods-bare-frameworks.sh\"\n";
showEnvVarsInLog = 0;
};
C38B50BA6285516D6DCD4F65 /_ [CP] Check Pods Manifest.lock _/ = {
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
"$(DERIVED_FILE_DIR)/Pods-bare-checkManifestLockResult.txt",
			);
			runOnlyForDeploymentPostprocessing = 0;
			shellPath = /bin/sh;
			shellScript = "diff \"${PODS_PODFILE_DIR_PATH}/Podfile.lock\" \"${PODS_ROOT}/Manifest.lock\" > /dev/null\nif [ $? != 0 ] ; then\n    # print error to STDERR\n    echo \"error: The sandbox is not in sync with the Podfile.lock. Run 'pod install' or update your CocoaPods installation.\" >&2\n    exit 1\nfi\n# This output is used by Xcode 'outputs' to avoid re-running this script phase.\necho \"SUCCESS\" > \"${SCRIPT_OUTPUT_FILE_0}\"\n";
showEnvVarsInLog = 0;
};
E235C05ADACE081382539298 /_ [CP] Copy Pods Resources _/ = {
isa = PBXShellScriptBuildPhase;
buildActionMask = 2147483647;
files = (
);
inputFileListPaths = (
"${PODS_ROOT}/Target Support Files/Pods-bare/Pods-bare-resources-${CONFIGURATION}-input-files.xcfilelist",
);
name = "[CP] Copy Pods Resources";
outputFileListPaths = (
"${PODS_ROOT}/Target Support Files/Pods-bare/Pods-bare-resources-${CONFIGURATION}-output-files.xcfilelist",
);
runOnlyForDeploymentPostprocessing = 0;
shellPath = /bin/sh;
shellScript = "\"${PODS_ROOT}/Target Support Files/Pods-bare/Pods-bare-resources.sh\"\n";
showEnvVarsInLog = 0;
};
/_ End PBXShellScriptBuildPhase section _/

/_ Begin PBXSourcesBuildPhase section _/
13B07F871A680F5B00A75B9A /_ Sources _/ = {
isa = PBXSourcesBuildPhase;
buildActionMask = 2147483647;
files = (
761780ED2CA45674006654EE /_ AppDelegate.swift in Sources _/,
);
runOnlyForDeploymentPostprocessing = 0;
};
/_ End PBXSourcesBuildPhase section _/

/_ Begin XCBuildConfiguration section _/
13B07F941A680F5B00A75B9A /_ Debug _/ = {
isa = XCBuildConfiguration;
baseConfigurationReference = 3B4392A12AC88292D35C810B /_ Pods-bare.debug.xcconfig _/;
buildSettings = {
ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
CLANG_ENABLE_MODULES = YES;
CURRENT_PROJECT_VERSION = 1;
ENABLE_BITCODE = NO;
INFOPLIST_FILE = bare/Info.plist;
IPHONEOS_DEPLOYMENT_TARGET = 15.1;
LD_RUNPATH_SEARCH_PATHS = (
"$(inherited)",
					"@executable_path/Frameworks",
				);
				MARKETING_VERSION = 1.0;
				OTHER_LDFLAGS = (
					"$(inherited)",
"-ObjC",
"-lc++",
);
PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
				PRODUCT_NAME = bare;
				SWIFT_OPTIMIZATION_LEVEL = "-Onone";
				SWIFT_VERSION = 5.0;
				VERSIONING_SYSTEM = "apple-generic";
			};
			name = Debug;
		};
		13B07F951A680F5B00A75B9A /* Release */ = {
			isa = XCBuildConfiguration;
			baseConfigurationReference = 5709B34CF0A7D63546082F79 /* Pods-bare.release.xcconfig */;
			buildSettings = {
				ASSETCATALOG_COMPILER_APPICON_NAME = AppIcon;
				CLANG_ENABLE_MODULES = YES;
				CURRENT_PROJECT_VERSION = 1;
				INFOPLIST_FILE = bare/Info.plist;
				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
				LD_RUNPATH_SEARCH_PATHS = (
					"$(inherited)",
"@executable_path/Frameworks",
);
MARKETING_VERSION = 1.0;
OTHER_LDFLAGS = (
"$(inherited)",
					"-ObjC",
					"-lc++",
				);
				PRODUCT_BUNDLE_IDENTIFIER = "org.reactjs.native.example.$(PRODUCT_NAME:rfc1034identifier)";
PRODUCT_NAME = bare;
SWIFT_VERSION = 5.0;
VERSIONING_SYSTEM = "apple-generic";
};
name = Release;
};
83CBBA201A601CBA00E9B192 /_ Debug _/ = {
isa = XCBuildConfiguration;
buildSettings = {
ALWAYS_SEARCH_USER_PATHS = NO;
CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED = YES;
CLANG_CXX_LANGUAGE_STANDARD = "c++20";
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
CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER = YES;
CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
CLANG_WARN_STRICT_PROTOTYPES = YES;
CLANG_WARN_SUSPICIOUS_MOVE = YES;
CLANG_WARN_UNREACHABLE_CODE = YES;
CLANG_WARN**DUPLICATE_METHOD_MATCH = YES;
"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
COPY_PHASE_STRIP = NO;
ENABLE_STRICT_OBJC_MSGSEND = YES;
ENABLE_TESTABILITY = YES;
"EXCLUDED_ARCHS[sdk=iphonesimulator*]" = "";
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
				IPHONEOS_DEPLOYMENT_TARGET = 15.1;
				LD_RUNPATH_SEARCH_PATHS = (
					/usr/lib/swift,
					"$(inherited)",
);
LIBRARY_SEARCH_PATHS = (
"\"$(SDKROOT)/usr/lib/swift\"",
					"\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\"",
					"\"$(inherited)\"",
);
MTL_ENABLE_DEBUG_INFO = YES;
ONLY_ACTIVE_ARCH = YES;
OTHER_CPLUSPLUSFLAGS = (
"$(OTHER_CFLAGS)",
					"-DFOLLY_NO_CONFIG",
					"-DFOLLY_MOBILE=1",
					"-DFOLLY_USE_LIBCPP=1",
					"-DFOLLY_CFG_NO_COROUTINES=1",
					"-DFOLLY_HAVE_CLOCK_GETTIME=1",
				);
				OTHER_LDFLAGS = (
					"$(inherited)",
" ",
);
REACT_NATIVE_PATH = "${PODS_ROOT}/../../node_modules/react-native";
				SDKROOT = iphoneos;
				SWIFT_ACTIVE_COMPILATION_CONDITIONS = "$(inherited) DEBUG";
USE_HERMES = true;
};
name = Debug;
};
83CBBA211A601CBA00E9B192 /_ Release _/ = {
isa = XCBuildConfiguration;
buildSettings = {
ALWAYS_SEARCH_USER_PATHS = NO;
CLANG_ANALYZER_LOCALIZABILITY_NONLOCALIZED = YES;
CLANG_CXX_LANGUAGE_STANDARD = "c++20";
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
CLANG_WARN_QUOTED_INCLUDE_IN_FRAMEWORK_HEADER = YES;
CLANG_WARN_RANGE_LOOP_ANALYSIS = YES;
CLANG_WARN_STRICT_PROTOTYPES = YES;
CLANG_WARN_SUSPICIOUS_MOVE = YES;
CLANG_WARN_UNREACHABLE_CODE = YES;
CLANG_WARN**DUPLICATE_METHOD_MATCH = YES;
"CODE_SIGN_IDENTITY[sdk=iphoneos*]" = "iPhone Developer";
COPY_PHASE_STRIP = YES;
ENABLE_NS_ASSERTIONS = NO;
ENABLE_STRICT_OBJC_MSGSEND = YES;
"EXCLUDED_ARCHS[sdk=iphonesimulator*]" = "";
GCC_C_LANGUAGE_STANDARD = gnu99;
GCC_NO_COMMON_BLOCKS = YES;
GCC_WARN_64_TO_32_BIT_CONVERSION = YES;
GCC_WARN_ABOUT_RETURN_TYPE = YES_ERROR;
GCC_WARN_UNDECLARED_SELECTOR = YES;
GCC_WARN_UNINITIALIZED_AUTOS = YES_AGGRESSIVE;
GCC_WARN_UNUSED_FUNCTION = YES;
GCC_WARN_UNUSED_VARIABLE = YES;
IPHONEOS_DEPLOYMENT_TARGET = 15.1;
LD_RUNPATH_SEARCH_PATHS = (
/usr/lib/swift,
"$(inherited)",
				);
				LIBRARY_SEARCH_PATHS = (
					"\"$(SDKROOT)/usr/lib/swift\"",
"\"$(TOOLCHAIN_DIR)/usr/lib/swift/$(PLATFORM_NAME)\"",
"\"$(inherited)\"",
				);
				MTL_ENABLE_DEBUG_INFO = NO;
				OTHER_CPLUSPLUSFLAGS = (
					"$(OTHER_CFLAGS)",
"-DFOLLY_NO_CONFIG",
"-DFOLLY_MOBILE=1",
"-DFOLLY_USE_LIBCPP=1",
"-DFOLLY_CFG_NO_COROUTINES=1",
"-DFOLLY_HAVE_CLOCK_GETTIME=1",
);
OTHER_LDFLAGS = (
"$(inherited)",
					" ",
				);
				REACT_NATIVE_PATH = "${PODS_ROOT}/../../node_modules/react-native";
SDKROOT = iphoneos;
USE_HERMES = true;
VALIDATE_PRODUCT = YES;
};
name = Release;
};
/_ End XCBuildConfiguration section _/

/_ Begin XCConfigurationList section _/
13B07F931A680F5B00A75B9A /_ Build configuration list for PBXNativeTarget "bare" _/ = {
isa = XCConfigurationList;
buildConfigurations = (
13B07F941A680F5B00A75B9A /_ Debug _/,
13B07F951A680F5B00A75B9A /_ Release _/,
);
defaultConfigurationIsVisible = 0;
defaultConfigurationName = Release;
};
83CBB9FA1A601CBA00E9B192 /_ Build configuration list for PBXProject "bare" _/ = {
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

<file path="examples/bare/ios/.xcode.env">
# This `.xcode.env` file is versioned and is used to source the environment
# used when running script phases inside Xcode.
# To customize your local environment, you can create an `.xcode.env.local`
# file that is not versioned.

# NODE_BINARY variable contains the PATH to the node executable.

#

# Customize the NODE_BINARY variable here.

# For example, to use nvm with brew, add the following line

# . "$(brew --prefix nvm)/nvm.sh" --no-use

export NODE_BINARY=$(command -v node)
</file>

<file path="examples/bare/ios/Podfile">
# Resolve react_native_pods.rb with node to allow for hoisting
require Pod::Executable.execute_command('node', ['-p',
  'require.resolve(
    "react-native/scripts/react_native_pods.rb",
    {paths: [process.argv[1]]},
  )', __dir__]).strip

platform :ios, min_ios_version_supported
prepare_react_native_project!

linkage = ENV['USE_FRAMEWORKS']
if linkage != nil
Pod::UI.puts "Configuring Pod with #{linkage}ally linked Frameworks".green
use_frameworks! :linkage => linkage.to_sym
end

target 'bare' do
config = use_native_modules!

use_react_native!(
:path => config[:reactNativePath], # An absolute path to your application root.
:app_path => "#{Pod::Config.instance.installation_root}/.."
)

post_install do |installer| # https://github.com/facebook/react-native/blob/main/packages/react-native/scripts/react_native_pods.rb#L197-L202
react_native_post_install(
installer,
config[:reactNativePath],
:mac_catalyst_enabled => false, # :ccache_enabled => true
)
end
end
</file>

<file path="examples/bare/ios/Podfile.lock">
PODS:
  - boost (1.84.0)
  - DoubleConversion (1.1.6)
  - fast_float (6.1.4)
  - FBLazyVector (0.78.0)
  - fmt (11.0.2)
  - glog (0.3.5)
  - hermes-engine (0.78.0):
    - hermes-engine/Pre-built (= 0.78.0)
  - hermes-engine/Pre-built (0.78.0)
  - RCT-Folly (2024.11.18.00):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - RCT-Folly/Default (= 2024.11.18.00)
  - RCT-Folly/Default (2024.11.18.00):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
  - RCT-Folly/Fabric (2024.11.18.00):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
  - RCTDeprecation (0.78.0)
  - RCTRequired (0.78.0)
  - RCTTypeSafety (0.78.0):
    - FBLazyVector (= 0.78.0)
    - RCTRequired (= 0.78.0)
    - React-Core (= 0.78.0)
  - React (0.78.0):
    - React-Core (= 0.78.0)
    - React-Core/DevSupport (= 0.78.0)
    - React-Core/RCTWebSocket (= 0.78.0)
    - React-RCTActionSheet (= 0.78.0)
    - React-RCTAnimation (= 0.78.0)
    - React-RCTBlob (= 0.78.0)
    - React-RCTImage (= 0.78.0)
    - React-RCTLinking (= 0.78.0)
    - React-RCTNetwork (= 0.78.0)
    - React-RCTSettings (= 0.78.0)
    - React-RCTText (= 0.78.0)
    - React-RCTVibration (= 0.78.0)
  - React-callinvoker (0.78.0)
  - React-Core (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default (= 0.78.0)
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/CoreModulesHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/Default (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/DevSupport (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default (= 0.78.0)
    - React-Core/RCTWebSocket (= 0.78.0)
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTActionSheetHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTAnimationHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTBlobHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTImageHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTLinkingHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTNetworkHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTSettingsHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTTextHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTVibrationHeaders (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-Core/RCTWebSocket (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTDeprecation
    - React-Core/Default (= 0.78.0)
    - React-cxxreact
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-perflogger
    - React-runtimescheduler
    - React-utils
    - SocketRocket (= 0.7.1)
    - Yoga
  - React-CoreModules (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety (= 0.78.0)
    - React-Core/CoreModulesHeaders (= 0.78.0)
    - React-jsi (= 0.78.0)
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTBlob
    - React-RCTFBReactNativeSpec
    - React-RCTImage (= 0.78.0)
    - ReactCommon
    - SocketRocket (= 0.7.1)
  - React-cxxreact (0.78.0):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.78.0)
    - React-debug (= 0.78.0)
    - React-jsi (= 0.78.0)
    - React-jsinspector
    - React-logger (= 0.78.0)
    - React-perflogger (= 0.78.0)
    - React-runtimeexecutor (= 0.78.0)
    - React-timing (= 0.78.0)
  - React-debug (0.78.0)
  - React-defaultsnativemodule (0.78.0):
    - hermes-engine
    - RCT-Folly
    - React-domnativemodule
    - React-featureflagsnativemodule
    - React-idlecallbacksnativemodule
    - React-jsi
    - React-jsiexecutor
    - React-microtasksnativemodule
    - React-RCTFBReactNativeSpec
  - React-domnativemodule (0.78.0):
    - hermes-engine
    - RCT-Folly
    - React-Fabric
    - React-FabricComponents
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - ReactCommon/turbomodule/core
    - Yoga
  - React-Fabric (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/animations (= 0.78.0)
    - React-Fabric/attributedstring (= 0.78.0)
    - React-Fabric/componentregistry (= 0.78.0)
    - React-Fabric/componentregistrynative (= 0.78.0)
    - React-Fabric/components (= 0.78.0)
    - React-Fabric/consistency (= 0.78.0)
    - React-Fabric/core (= 0.78.0)
    - React-Fabric/dom (= 0.78.0)
    - React-Fabric/imagemanager (= 0.78.0)
    - React-Fabric/leakchecker (= 0.78.0)
    - React-Fabric/mounting (= 0.78.0)
    - React-Fabric/observers (= 0.78.0)
    - React-Fabric/scheduler (= 0.78.0)
    - React-Fabric/telemetry (= 0.78.0)
    - React-Fabric/templateprocessor (= 0.78.0)
    - React-Fabric/uimanager (= 0.78.0)
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/animations (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/attributedstring (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/componentregistry (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/componentregistrynative (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/components/legacyviewmanagerinterop (= 0.78.0)
    - React-Fabric/components/root (= 0.78.0)
    - React-Fabric/components/view (= 0.78.0)
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components/legacyviewmanagerinterop (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components/root (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/components/view (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-Fabric/consistency (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/core (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/dom (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/imagemanager (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/leakchecker (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/mounting (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/observers (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/observers/events (= 0.78.0)
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/observers/events (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/scheduler (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/observers/events
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-performancetimeline
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/telemetry (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/templateprocessor (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/uimanager (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric/uimanager/consistency (= 0.78.0)
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererconsistency
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-Fabric/uimanager/consistency (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererconsistency
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
  - React-FabricComponents (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-FabricComponents/components (= 0.78.0)
    - React-FabricComponents/textlayoutmanager (= 0.78.0)
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-FabricComponents/components/inputaccessory (= 0.78.0)
    - React-FabricComponents/components/iostextinput (= 0.78.0)
    - React-FabricComponents/components/modal (= 0.78.0)
    - React-FabricComponents/components/rncore (= 0.78.0)
    - React-FabricComponents/components/safeareaview (= 0.78.0)
    - React-FabricComponents/components/scrollview (= 0.78.0)
    - React-FabricComponents/components/text (= 0.78.0)
    - React-FabricComponents/components/textinput (= 0.78.0)
    - React-FabricComponents/components/unimplementedview (= 0.78.0)
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/inputaccessory (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/iostextinput (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/modal (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/rncore (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/safeareaview (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/scrollview (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/text (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/textinput (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/components/unimplementedview (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricComponents/textlayoutmanager (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-cxxreact
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-logger
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - ReactCommon/turbomodule/core
    - Yoga
  - React-FabricImage (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - RCTRequired (= 0.78.0)
    - RCTTypeSafety (= 0.78.0)
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-ImageManager
    - React-jsi
    - React-jsiexecutor (= 0.78.0)
    - React-logger
    - React-rendererdebug
    - React-utils
    - ReactCommon
    - Yoga
  - React-featureflags (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
  - React-featureflagsnativemodule (0.78.0):
    - hermes-engine
    - RCT-Folly
    - React-featureflags
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - ReactCommon/turbomodule/core
  - React-graphics (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-jsi
    - React-jsiexecutor
    - React-utils
  - React-hermes (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-cxxreact (= 0.78.0)
    - React-jsi
    - React-jsiexecutor (= 0.78.0)
    - React-jsinspector
    - React-perflogger (= 0.78.0)
    - React-runtimeexecutor
  - React-idlecallbacksnativemodule (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - React-runtimescheduler
    - ReactCommon/turbomodule/core
  - React-ImageManager (0.78.0):
    - glog
    - RCT-Folly/Fabric
    - React-Core/Default
    - React-debug
    - React-Fabric
    - React-graphics
    - React-rendererdebug
    - React-utils
  - React-jserrorhandler (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-jsi
    - ReactCommon/turbomodule/bridging
  - React-jsi (0.78.0):
    - boost
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
  - React-jsiexecutor (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-cxxreact (= 0.78.0)
    - React-jsi (= 0.78.0)
    - React-jsinspector
    - React-perflogger (= 0.78.0)
  - React-jsinspector (0.78.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly
    - React-featureflags
    - React-jsi
    - React-jsinspectortracing
    - React-perflogger (= 0.78.0)
    - React-runtimeexecutor (= 0.78.0)
  - React-jsinspectortracing (0.78.0):
    - RCT-Folly
  - React-jsitracing (0.78.0):
    - React-jsi
  - React-logger (0.78.0):
    - glog
  - React-Mapbuffer (0.78.0):
    - glog
    - React-debug
  - React-microtasksnativemodule (0.78.0):
    - hermes-engine
    - RCT-Folly
    - React-jsi
    - React-jsiexecutor
    - React-RCTFBReactNativeSpec
    - ReactCommon/turbomodule/core
  - react-native-safe-area-context (5.3.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-ImageManager
    - react-native-safe-area-context/common (= 5.3.0)
    - react-native-safe-area-context/fabric (= 5.3.0)
    - React-NativeModulesApple
    - React-RCTFabric
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - react-native-safe-area-context/common (5.3.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-ImageManager
    - React-NativeModulesApple
    - React-RCTFabric
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - react-native-safe-area-context/fabric (5.3.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-ImageManager
    - react-native-safe-area-context/common
    - React-NativeModulesApple
    - React-RCTFabric
    - React-rendererdebug
    - React-utils
    - ReactCodegen
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
    - Yoga
  - React-NativeModulesApple (0.78.0):
    - glog
    - hermes-engine
    - React-callinvoker
    - React-Core
    - React-cxxreact
    - React-jsi
    - React-jsinspector
    - React-runtimeexecutor
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
  - React-perflogger (0.78.0):
    - DoubleConversion
    - RCT-Folly (= 2024.11.18.00)
  - React-performancetimeline (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
    - React-cxxreact
    - React-featureflags
    - React-jsinspectortracing
    - React-timing
  - React-RCTActionSheet (0.78.0):
    - React-Core/RCTActionSheetHeaders (= 0.78.0)
  - React-RCTAnimation (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTAnimationHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-RCTAppDelegate (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-CoreModules
    - React-debug
    - React-defaultsnativemodule
    - React-Fabric
    - React-featureflags
    - React-graphics
    - React-hermes
    - React-NativeModulesApple
    - React-RCTFabric
    - React-RCTFBReactNativeSpec
    - React-RCTImage
    - React-RCTNetwork
    - React-rendererdebug
    - React-RuntimeApple
    - React-RuntimeCore
    - React-RuntimeHermes
    - React-runtimescheduler
    - React-utils
    - ReactCommon
  - React-RCTBlob (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-Core/RCTBlobHeaders
    - React-Core/RCTWebSocket
    - React-jsi
    - React-jsinspector
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - React-RCTNetwork
    - ReactCommon
  - React-RCTFabric (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-Core
    - React-debug
    - React-Fabric
    - React-FabricComponents
    - React-FabricImage
    - React-featureflags
    - React-graphics
    - React-ImageManager
    - React-jsi
    - React-jsinspector
    - React-jsinspectortracing
    - React-performancetimeline
    - React-RCTImage
    - React-RCTText
    - React-rendererconsistency
    - React-rendererdebug
    - React-runtimescheduler
    - React-utils
    - Yoga
  - React-RCTFBReactNativeSpec (0.78.0):
    - hermes-engine
    - RCT-Folly
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-jsi
    - React-jsiexecutor
    - React-NativeModulesApple
    - ReactCommon
  - React-RCTImage (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTImageHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - React-RCTNetwork
    - ReactCommon
  - React-RCTLinking (0.78.0):
    - React-Core/RCTLinkingHeaders (= 0.78.0)
    - React-jsi (= 0.78.0)
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
    - ReactCommon/turbomodule/core (= 0.78.0)
  - React-RCTNetwork (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTNetworkHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-RCTSettings (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
    - RCTTypeSafety
    - React-Core/RCTSettingsHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-RCTText (0.78.0):
    - React-Core/RCTTextHeaders (= 0.78.0)
    - Yoga
  - React-RCTVibration (0.78.0):
    - RCT-Folly (= 2024.11.18.00)
    - React-Core/RCTVibrationHeaders
    - React-jsi
    - React-NativeModulesApple
    - React-RCTFBReactNativeSpec
    - ReactCommon
  - React-rendererconsistency (0.78.0)
  - React-rendererdebug (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - RCT-Folly (= 2024.11.18.00)
    - React-debug
  - React-rncore (0.78.0)
  - React-RuntimeApple (0.78.0):
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-callinvoker
    - React-Core/Default
    - React-CoreModules
    - React-cxxreact
    - React-featureflags
    - React-jserrorhandler
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-Mapbuffer
    - React-NativeModulesApple
    - React-RCTFabric
    - React-RCTFBReactNativeSpec
    - React-RuntimeCore
    - React-runtimeexecutor
    - React-RuntimeHermes
    - React-runtimescheduler
    - React-utils
  - React-RuntimeCore (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-cxxreact
    - React-Fabric
    - React-featureflags
    - React-jserrorhandler
    - React-jsi
    - React-jsiexecutor
    - React-jsinspector
    - React-performancetimeline
    - React-runtimeexecutor
    - React-runtimescheduler
    - React-utils
  - React-runtimeexecutor (0.78.0):
    - React-jsi (= 0.78.0)
  - React-RuntimeHermes (0.78.0):
    - hermes-engine
    - RCT-Folly/Fabric (= 2024.11.18.00)
    - React-featureflags
    - React-hermes
    - React-jsi
    - React-jsinspector
    - React-jsitracing
    - React-RuntimeCore
    - React-utils
  - React-runtimescheduler (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker
    - React-cxxreact
    - React-debug
    - React-featureflags
    - React-jsi
    - React-performancetimeline
    - React-rendererconsistency
    - React-rendererdebug
    - React-runtimeexecutor
    - React-timing
    - React-utils
  - React-timing (0.78.0)
  - React-utils (0.78.0):
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-debug
    - React-jsi (= 0.78.0)
  - ReactAppDependencyProvider (0.78.0):
    - ReactCodegen
  - ReactCodegen (0.78.0):
    - DoubleConversion
    - glog
    - hermes-engine
    - RCT-Folly
    - RCTRequired
    - RCTTypeSafety
    - React-Core
    - React-debug
    - React-Fabric
    - React-FabricImage
    - React-featureflags
    - React-graphics
    - React-jsi
    - React-jsiexecutor
    - React-NativeModulesApple
    - React-RCTAppDelegate
    - React-rendererdebug
    - React-utils
    - ReactCommon/turbomodule/bridging
    - ReactCommon/turbomodule/core
  - ReactCommon (0.78.0):
    - ReactCommon/turbomodule (= 0.78.0)
  - ReactCommon/turbomodule (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.78.0)
    - React-cxxreact (= 0.78.0)
    - React-jsi (= 0.78.0)
    - React-logger (= 0.78.0)
    - React-perflogger (= 0.78.0)
    - ReactCommon/turbomodule/bridging (= 0.78.0)
    - ReactCommon/turbomodule/core (= 0.78.0)
  - ReactCommon/turbomodule/bridging (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.78.0)
    - React-cxxreact (= 0.78.0)
    - React-jsi (= 0.78.0)
    - React-logger (= 0.78.0)
    - React-perflogger (= 0.78.0)
  - ReactCommon/turbomodule/core (0.78.0):
    - DoubleConversion
    - fast_float (= 6.1.4)
    - fmt (= 11.0.2)
    - glog
    - hermes-engine
    - RCT-Folly (= 2024.11.18.00)
    - React-callinvoker (= 0.78.0)
    - React-cxxreact (= 0.78.0)
    - React-debug (= 0.78.0)
    - React-featureflags (= 0.78.0)
    - React-jsi (= 0.78.0)
    - React-logger (= 0.78.0)
    - React-perflogger (= 0.78.0)
    - React-utils (= 0.78.0)
  - SocketRocket (0.7.1)
  - Yoga (0.0.0)

DEPENDENCIES:

- boost (from `../node_modules/react-native/third-party-podspecs/boost.podspec`)
- DoubleConversion (from `../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec`)
- fast_float (from `../node_modules/react-native/third-party-podspecs/fast_float.podspec`)
- FBLazyVector (from `../node_modules/react-native/Libraries/FBLazyVector`)
- fmt (from `../node_modules/react-native/third-party-podspecs/fmt.podspec`)
- glog (from `../node_modules/react-native/third-party-podspecs/glog.podspec`)
- hermes-engine (from `../node_modules/react-native/sdks/hermes-engine/hermes-engine.podspec`)
- RCT-Folly (from `../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec`)
- RCT-Folly/Fabric (from `../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec`)
- RCTDeprecation (from `../node_modules/react-native/ReactApple/Libraries/RCTFoundation/RCTDeprecation`)
- RCTRequired (from `../node_modules/react-native/Libraries/Required`)
- RCTTypeSafety (from `../node_modules/react-native/Libraries/TypeSafety`)
- React (from `../node_modules/react-native/`)
- React-callinvoker (from `../node_modules/react-native/ReactCommon/callinvoker`)
- React-Core (from `../node_modules/react-native/`)
- React-Core/RCTWebSocket (from `../node_modules/react-native/`)
- React-CoreModules (from `../node_modules/react-native/React/CoreModules`)
- React-cxxreact (from `../node_modules/react-native/ReactCommon/cxxreact`)
- React-debug (from `../node_modules/react-native/ReactCommon/react/debug`)
- React-defaultsnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/defaults`)
- React-domnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/dom`)
- React-Fabric (from `../node_modules/react-native/ReactCommon`)
- React-FabricComponents (from `../node_modules/react-native/ReactCommon`)
- React-FabricImage (from `../node_modules/react-native/ReactCommon`)
- React-featureflags (from `../node_modules/react-native/ReactCommon/react/featureflags`)
- React-featureflagsnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/featureflags`)
- React-graphics (from `../node_modules/react-native/ReactCommon/react/renderer/graphics`)
- React-hermes (from `../node_modules/react-native/ReactCommon/hermes`)
- React-idlecallbacksnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/idlecallbacks`)
- React-ImageManager (from `../node_modules/react-native/ReactCommon/react/renderer/imagemanager/platform/ios`)
- React-jserrorhandler (from `../node_modules/react-native/ReactCommon/jserrorhandler`)
- React-jsi (from `../node_modules/react-native/ReactCommon/jsi`)
- React-jsiexecutor (from `../node_modules/react-native/ReactCommon/jsiexecutor`)
- React-jsinspector (from `../node_modules/react-native/ReactCommon/jsinspector-modern`)
- React-jsinspectortracing (from `../node_modules/react-native/ReactCommon/jsinspector-modern/tracing`)
- React-jsitracing (from `../node_modules/react-native/ReactCommon/hermes/executor/`)
- React-logger (from `../node_modules/react-native/ReactCommon/logger`)
- React-Mapbuffer (from `../node_modules/react-native/ReactCommon`)
- React-microtasksnativemodule (from `../node_modules/react-native/ReactCommon/react/nativemodule/microtasks`)
- react-native-safe-area-context (from `../node_modules/react-native-safe-area-context`)
- React-NativeModulesApple (from `../node_modules/react-native/ReactCommon/react/nativemodule/core/platform/ios`)
- React-perflogger (from `../node_modules/react-native/ReactCommon/reactperflogger`)
- React-performancetimeline (from `../node_modules/react-native/ReactCommon/react/performance/timeline`)
- React-RCTActionSheet (from `../node_modules/react-native/Libraries/ActionSheetIOS`)
- React-RCTAnimation (from `../node_modules/react-native/Libraries/NativeAnimation`)
- React-RCTAppDelegate (from `../node_modules/react-native/Libraries/AppDelegate`)
- React-RCTBlob (from `../node_modules/react-native/Libraries/Blob`)
- React-RCTFabric (from `../node_modules/react-native/React`)
- React-RCTFBReactNativeSpec (from `../node_modules/react-native/React`)
- React-RCTImage (from `../node_modules/react-native/Libraries/Image`)
- React-RCTLinking (from `../node_modules/react-native/Libraries/LinkingIOS`)
- React-RCTNetwork (from `../node_modules/react-native/Libraries/Network`)
- React-RCTSettings (from `../node_modules/react-native/Libraries/Settings`)
- React-RCTText (from `../node_modules/react-native/Libraries/Text`)
- React-RCTVibration (from `../node_modules/react-native/Libraries/Vibration`)
- React-rendererconsistency (from `../node_modules/react-native/ReactCommon/react/renderer/consistency`)
- React-rendererdebug (from `../node_modules/react-native/ReactCommon/react/renderer/debug`)
- React-rncore (from `../node_modules/react-native/ReactCommon`)
- React-RuntimeApple (from `../node_modules/react-native/ReactCommon/react/runtime/platform/ios`)
- React-RuntimeCore (from `../node_modules/react-native/ReactCommon/react/runtime`)
- React-runtimeexecutor (from `../node_modules/react-native/ReactCommon/runtimeexecutor`)
- React-RuntimeHermes (from `../node_modules/react-native/ReactCommon/react/runtime`)
- React-runtimescheduler (from `../node_modules/react-native/ReactCommon/react/renderer/runtimescheduler`)
- React-timing (from `../node_modules/react-native/ReactCommon/react/timing`)
- React-utils (from `../node_modules/react-native/ReactCommon/react/utils`)
- ReactAppDependencyProvider (from `build/generated/ios`)
- ReactCodegen (from `build/generated/ios`)
- ReactCommon/turbomodule/core (from `../node_modules/react-native/ReactCommon`)
- Yoga (from `../node_modules/react-native/ReactCommon/yoga`)

SPEC REPOS:
trunk: - SocketRocket

EXTERNAL SOURCES:
boost:
:podspec: "../node_modules/react-native/third-party-podspecs/boost.podspec"
DoubleConversion:
:podspec: "../node_modules/react-native/third-party-podspecs/DoubleConversion.podspec"
fast_float:
:podspec: "../node_modules/react-native/third-party-podspecs/fast_float.podspec"
FBLazyVector:
:path: "../node_modules/react-native/Libraries/FBLazyVector"
fmt:
:podspec: "../node_modules/react-native/third-party-podspecs/fmt.podspec"
glog:
:podspec: "../node_modules/react-native/third-party-podspecs/glog.podspec"
hermes-engine:
:podspec: "../node_modules/react-native/sdks/hermes-engine/hermes-engine.podspec"
:tag: hermes-2025-01-13-RNv0.78.0-a942ef374897d85da38e9c8904574f8376555388
RCT-Folly:
:podspec: "../node_modules/react-native/third-party-podspecs/RCT-Folly.podspec"
RCTDeprecation:
:path: "../node_modules/react-native/ReactApple/Libraries/RCTFoundation/RCTDeprecation"
RCTRequired:
:path: "../node_modules/react-native/Libraries/Required"
RCTTypeSafety:
:path: "../node_modules/react-native/Libraries/TypeSafety"
React:
:path: "../node_modules/react-native/"
React-callinvoker:
:path: "../node_modules/react-native/ReactCommon/callinvoker"
React-Core:
:path: "../node_modules/react-native/"
React-CoreModules:
:path: "../node_modules/react-native/React/CoreModules"
React-cxxreact:
:path: "../node_modules/react-native/ReactCommon/cxxreact"
React-debug:
:path: "../node_modules/react-native/ReactCommon/react/debug"
React-defaultsnativemodule:
:path: "../node_modules/react-native/ReactCommon/react/nativemodule/defaults"
React-domnativemodule:
:path: "../node_modules/react-native/ReactCommon/react/nativemodule/dom"
React-Fabric:
:path: "../node_modules/react-native/ReactCommon"
React-FabricComponents:
:path: "../node_modules/react-native/ReactCommon"
React-FabricImage:
:path: "../node_modules/react-native/ReactCommon"
React-featureflags:
:path: "../node_modules/react-native/ReactCommon/react/featureflags"
React-featureflagsnativemodule:
:path: "../node_modules/react-native/ReactCommon/react/nativemodule/featureflags"
React-graphics:
:path: "../node_modules/react-native/ReactCommon/react/renderer/graphics"
React-hermes:
:path: "../node_modules/react-native/ReactCommon/hermes"
React-idlecallbacksnativemodule:
:path: "../node_modules/react-native/ReactCommon/react/nativemodule/idlecallbacks"
React-ImageManager:
:path: "../node_modules/react-native/ReactCommon/react/renderer/imagemanager/platform/ios"
React-jserrorhandler:
:path: "../node_modules/react-native/ReactCommon/jserrorhandler"
React-jsi:
:path: "../node_modules/react-native/ReactCommon/jsi"
React-jsiexecutor:
:path: "../node_modules/react-native/ReactCommon/jsiexecutor"
React-jsinspector:
:path: "../node_modules/react-native/ReactCommon/jsinspector-modern"
React-jsinspectortracing:
:path: "../node_modules/react-native/ReactCommon/jsinspector-modern/tracing"
React-jsitracing:
:path: "../node_modules/react-native/ReactCommon/hermes/executor/"
React-logger:
:path: "../node_modules/react-native/ReactCommon/logger"
React-Mapbuffer:
:path: "../node_modules/react-native/ReactCommon"
React-microtasksnativemodule:
:path: "../node_modules/react-native/ReactCommon/react/nativemodule/microtasks"
react-native-safe-area-context:
:path: "../node_modules/react-native-safe-area-context"
React-NativeModulesApple:
:path: "../node_modules/react-native/ReactCommon/react/nativemodule/core/platform/ios"
React-perflogger:
:path: "../node_modules/react-native/ReactCommon/reactperflogger"
React-performancetimeline:
:path: "../node_modules/react-native/ReactCommon/react/performance/timeline"
React-RCTActionSheet:
:path: "../node_modules/react-native/Libraries/ActionSheetIOS"
React-RCTAnimation:
:path: "../node_modules/react-native/Libraries/NativeAnimation"
React-RCTAppDelegate:
:path: "../node_modules/react-native/Libraries/AppDelegate"
React-RCTBlob:
:path: "../node_modules/react-native/Libraries/Blob"
React-RCTFabric:
:path: "../node_modules/react-native/React"
React-RCTFBReactNativeSpec:
:path: "../node_modules/react-native/React"
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
React-rendererconsistency:
:path: "../node_modules/react-native/ReactCommon/react/renderer/consistency"
React-rendererdebug:
:path: "../node_modules/react-native/ReactCommon/react/renderer/debug"
React-rncore:
:path: "../node_modules/react-native/ReactCommon"
React-RuntimeApple:
:path: "../node_modules/react-native/ReactCommon/react/runtime/platform/ios"
React-RuntimeCore:
:path: "../node_modules/react-native/ReactCommon/react/runtime"
React-runtimeexecutor:
:path: "../node_modules/react-native/ReactCommon/runtimeexecutor"
React-RuntimeHermes:
:path: "../node_modules/react-native/ReactCommon/react/runtime"
React-runtimescheduler:
:path: "../node_modules/react-native/ReactCommon/react/renderer/runtimescheduler"
React-timing:
:path: "../node_modules/react-native/ReactCommon/react/timing"
React-utils:
:path: "../node_modules/react-native/ReactCommon/react/utils"
ReactAppDependencyProvider:
:path: build/generated/ios
ReactCodegen:
:path: build/generated/ios
ReactCommon:
:path: "../node_modules/react-native/ReactCommon"
Yoga:
:path: "../node_modules/react-native/ReactCommon/yoga"

SPEC CHECKSUMS:
boost: 7e761d76ca2ce687f7cc98e698152abd03a18f90
DoubleConversion: cb417026b2400c8f53ae97020b2be961b59470cb
fast_float: 06eeec4fe712a76acc9376682e4808b05ce978b6
FBLazyVector: 6fe148afcef2e3213e484758e3459609d40d57f5
fmt: a40bb5bd0294ea969aaaba240a927bd33d878cdd
glog: eb93e2f488219332457c3c4eafd2738ddc7e80b8
hermes-engine: b417d2b2aee3b89b58e63e23a51e02be91dc876d
RCT-Folly: e78785aa9ba2ed998ea4151e314036f6c49e6d82
RCTDeprecation: b2eecf2d60216df56bc5e6be5f063826d3c1ee35
RCTRequired: 78522de7dc73b81f3ed7890d145fa341f5bb32ea
RCTTypeSafety: c135dd2bf50402d87fd12884cbad5d5e64850edd
React: b229c49ed5898dab46d60f61ed5a0bfa2ee2fadb
React-callinvoker: 2ac508e92c8bd9cf834cc7d7787d94352e4af58f
React-Core: 325b4f6d9162ae8b9a6ff42fe78e260eb124180d
React-CoreModules: 558041e5258f70cd1092f82778d07b8b2ff01897
React-cxxreact: 8fff17cbe76e6a8f9991b59552e1235429f9c74b
React-debug: 0a5fcdbacc6becba0521e910c1bcfdb20f32a3f6
React-defaultsnativemodule: 618dc50a0fad41b489997c3eb7aba3a74479fd14
React-domnativemodule: 7ba599afb6c2a7ec3eb6450153e2efe0b8747e9a
React-Fabric: 252112089d2c63308f4cbfade4010b6606db67d1
React-FabricComponents: 3c0f75321680d14d124438ab279c64ec2a3d13c4
React-FabricImage: 728b8061cdec2857ca885fd605ee03ad43ffca98
React-featureflags: 19682e02ef5861d96b992af16a19109c3dfc1200
React-featureflagsnativemodule: 23528c7e7d50782b7ef0804168ba40bbaf1e86ab
React-graphics: fefe48f71bfe6f48fd037f59e8277b12e91b6be1
React-hermes: a9a0c8377627b5506ef9a7b6f60a805c306e3f51
React-idlecallbacksnativemodule: 7e2b6a3b70e042f89cd91dbd73c479bb39a72a7e
React-ImageManager: e3300996ac2e2914bf821f71e2f2c92ae6e62ae2
React-jserrorhandler: fa75876c662e5d7e79d6efc763fc9f4c88e26986
React-jsi: f3f51595cc4c089037b536368f016d4742bf9cf7
React-jsiexecutor: cca6c232db461e2fd213a11e9364cfa6fdaa20eb
React-jsinspector: 2bd4c9fddf189d6ec2abf4948461060502582bef
React-jsinspectortracing: a417d8a0ad481edaa415734b4dac81e3e5ee7dc6
React-jsitracing: 1ff7172c5b0522cbf6c98d82bdbb160e49b5804e
React-logger: 018826bfd51b9f18e87f67db1590bc510ad20664
React-Mapbuffer: 3c11cee7737609275c7b66bd0b1de475f094cedf
React-microtasksnativemodule: 843f352b32aacbe13a9c750190d34df44c3e6c2c
react-native-safe-area-context: 0f14bce545abcdfbff79ce2e3c78c109f0be283e
React-NativeModulesApple: 88433b6946778bea9c153e27b671de15411bf225
React-perflogger: 9e8d3c0dc0194eb932162812a168aa5dc662f418
React-performancetimeline: 5a2d6efef52bdcefac079c7baa30934978acd023
React-RCTActionSheet: 592674cf61142497e0e820688f5a696e41bf16dd
React-RCTAnimation: e6d669872f9b3b4ab9527aab283b7c49283236b7
React-RCTAppDelegate: de2343fe08be4c945d57e0ecce44afcc7dd8fc03
React-RCTBlob: 3e2dce94c56218becc4b32b627fc2293149f798d
React-RCTFabric: cac2c033381d79a5956e08550b0220cb2d78ea93
React-RCTFBReactNativeSpec: d10ca5e0ccbfeac8c047361fedf8e4ac653887b6
React-RCTImage: dc04b176c022d12a8f55ae7a7279b1e091066ae0
React-RCTLinking: 88f5e37fe4f26fbc80791aa2a5f01baf9b9a3fd5
React-RCTNetwork: f213693565efbd698b8e9c18d700a514b49c0c8e
React-RCTSettings: a2d32a90c45a3575568cad850abc45924999b8a5
React-RCTText: 54cdcd1cbf6f6a91dc6317f5d2c2b7fc3f6bf7a0
React-RCTVibration: 11dae0e7f577b5807bb7d31e2e881eb46f854fd4
React-rendererconsistency: 64e897e00d2568fd8dfe31e2496f80e85c0aaad1
React-rendererdebug: 41ce452460c44bba715d9e41d5493a96de277764
React-rncore: 58748c2aa445f56b99e5118dad0aedb51c40ce9f
React-RuntimeApple: 7785ed0d8ae54da65a88736bb63ca97608a6d933
React-RuntimeCore: 6029ea70bc77f98cfd43ebe69217f14e93ba1f12
React-runtimeexecutor: a188df372373baf5066e6e229177836488799f80
React-RuntimeHermes: a264609c28b796edfffc8ae4cb8fad1773ab948b
React-runtimescheduler: 23ec3a1e0fb1ec752d1a9c1fb15258c30bfc7222
React-timing: bb220a53a795ed57976a4855c521f3de2f298fe5
React-utils: 3b054aaebe658fc710a8d239d0e4b9fd3e0b78f9
ReactAppDependencyProvider: a1fb08dfdc7ebc387b2e54cfc9decd283ed821d8
ReactCodegen: 008c319179d681a6a00966edfc67fda68f9fbb2e
ReactCommon: 0c097b53f03d6bf166edbcd0915da32f3015dd90
SocketRocket: d4aabe649be1e368d1318fdf28a022d714d65748
Yoga: afd04ff05ebe0121a00c468a8a3c8080221cb14c

PODFILE CHECKSUM: 8ab029e0468bb693b6486252f801abd33f1896e6

COCOAPODS: 1.16.2
</file>

<file path="examples/bare/.gitignore">
# OSX
.DS_Store

# Thumbnails

.\_\*

# Files that might appear in the root of a volume

.DocumentRevisions-V100
.fseventsd
.Spotlight-V100
.TemporaryItems
.Trashes
.VolumeIcon.icns

# Xcode

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

# Android/IJ

.idea
.gradle
local.properties

# node.js

node_modules/
npm-debug.log

# BUCK

buck-out/
\.buckd/
android/app/libs
android/keystores/debug.keystore

ios/Pods
vendor
ios/.xcode.env.local
android/app/.cxx
android/app/build
android/build
</file>

<file path="examples/bare/.watchmanconfig">
{}
</file>

<file path="examples/bare/app.json">
{
  "name": "bare",
  "displayName": "bare"
}
</file>

<file path="examples/bare/App.tsx">
import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';

function App(): React.JSX.Element {
const [visible, setVisible] = useState<boolean>(false);

return (
<View>
<View style={{marginTop: 40, paddingInline: 40}}>
<Button title={'Open Modal !'} onPress={() => setVisible(true)} />
</View>
<ReactNativeModal isVisible={visible}>
<View style={{flex: 1, backgroundColor: 'red'}}>
<Text>Hello!</Text>
<Button title="Hide modal" onPress={() => setVisible(false)} />
</View>
</ReactNativeModal>
</View>
);
}

export default App;
</file>

<file path="examples/bare/babel.config.js">
module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
</file>

<file path="examples/bare/Gemfile">
source 'https://rubygems.org'

# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version

ruby ">= 2.6.10"

# Exclude problematic versions of cocoapods and activesupport that causes build failures.

gem 'cocoapods', '>= 1.13', '!= 1.15.0', '!= 1.15.1'
gem 'activesupport', '>= 6.1.7.5', '!= 7.1.0'
gem 'xcodeproj', '< 1.26.0'
gem 'concurrent-ruby', '< 1.3.4'
</file>

<file path="examples/bare/index.js">
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
</file>

<file path="examples/bare/jest.config.js">
module.exports = {
  preset: 'react-native',
};
</file>

<file path="examples/bare/metro.config.js">
const path = require('path');
const {makeMetroConfig} = require('@rnx-kit/metro-config');

module.exports = makeMetroConfig({
transformer: {
getTransformOptions: async () => ({
transform: {
experimentalImportSupport: false,
inlineRequires: false,
},
}),
},
resolver: {
enableSymlinks: true,
extraNodeModules: {
'react-native-modal': path.resolve(**dirname, '../../dist/'),
},
},
watchFolders: [
path.join(**dirname, 'node_modules', 'react-native-modal'),
path.resolve(\_\_dirname, '../..'),
],
});
</file>

<file path="examples/bare/package.json">
{
  "name": "bare",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
    "lint": "eslint .",
    "start": "react-native start",
    "test": "jest"
  },
  "dependencies": {
    "react": "19.0.0",
    "react-native": "0.78.0",
    "react-native-modal": "link:../..",
    "react-native-safe-area-context": "^5.3.0"
  },
  "devDependencies": {
    "@babel/core": "^7.25.2",
    "@babel/preset-env": "^7.25.3",
    "@babel/runtime": "^7.25.0",
    "@react-native-community/cli": "^15.1.3",
    "@react-native-community/cli-platform-android": "15.0.1",
    "@react-native-community/cli-platform-ios": "15.0.1",
    "@react-native/babel-preset": "0.78.0",
    "@react-native/eslint-config": "0.78.0",
    "@react-native/metro-config": "0.78.0",
    "@react-native/typescript-config": "0.78.0",
    "@rnx-kit/metro-config": "^2.0.1",
    "@types/jest": "^29.5.13",
    "@types/react": "^19.0.0",
    "@types/react-test-renderer": "^19.0.0",
    "jest": "^29.6.3",
    "prettier": "2.8.8",
    "react-test-renderer": "19.0.0",
    "typescript": "5.0.4"
  },
  "engines": {
    "node": ">=18"
  }
}
</file>

<file path="examples/bare/README.md">
This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
  </file>

<file path="examples/bare/tsconfig.json">
{
  "extends": "@react-native/typescript-config/tsconfig.json"
}
</file>

<file path="src/back-handler.ts">
import {
  BackHandlerStatic,
  BackPressEventName,
  NativeEventSubscription,
  Platform,
} from 'react-native';

const noopBackHandler: BackHandlerStatic = {
exitApp() {},
addEventListener(
eventName: BackPressEventName,
handler: () => boolean | null | undefined,
): NativeEventSubscription {
return { remove: () => {} };
},
removeEventListener: () => {},
};

export const BackHandler: BackHandlerStatic =
Platform.OS === 'web' ? noopBackHandler : require('react-native').BackHandler;
</file>

<file path="src/index.ts">
import {ReactNativeModal} from './modal';

export {ModalProps, ReactNativeModal, OnSwipeCompleteParams} from './modal';
export {
AnimationEvent,
Animations,
SupportedAnimation,
Orientation,
Direction,
PresentationStyle,
OnOrientationChange,
GestureResponderEvent,
} from './types';

export default ReactNativeModal;
</file>

<file path="src/modal.style.ts">
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
backdrop: {
position: 'absolute',
top: 0,
bottom: 0,
left: 0,
right: 0,
opacity: 0,
backgroundColor: 'black',
},
content: {
flex: 1,
justifyContent: 'center',
},
containerBox: {
zIndex: 2,
opacity: 1,
backgroundColor: 'transparent',
},
});
</file>

<file path="src/modal.tsx">
import * as React from 'react';
import {
  Animated,
  DeviceEventEmitter,
  Dimensions,
  EmitterSubscription,
  InteractionManager,
  KeyboardAvoidingView,
  Modal,
  NativeEventSubscription,
  PanResponder,
  PanResponderGestureState,
  PanResponderInstance,
  Platform,
  StyleProp,
  TouchableWithoutFeedback,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import * as animatable from 'react-native-animatable';
import { Animation, CustomAnimation } from 'react-native-animatable';

import {
buildAnimations,
initializeAnimations,
reversePercentage,
} from './utils';
import styles from './modal.style';
import {
AnimationEvent,
Direction,
GestureResponderEvent,
OnOrientationChange,
Orientation,
OrNull,
PresentationStyle,
} from './types';
import { BackHandler } from './back-handler.js';

// Override default react-native-animatable animations
initializeAnimations();

export type OnSwipeCompleteParams = {
swipingDirection: Direction;
};

type State = {
showContent: boolean;
isVisible: boolean;
deviceWidth: number;
deviceHeight: number;
isSwipeable: boolean;
pan: OrNull<Animated.ValueXY>;
};

const defaultProps = {
animationIn: 'slideInUp' as Animation | CustomAnimation,
animationInTiming: 300,
animationOut: 'slideOutDown' as Animation | CustomAnimation,
animationOutTiming: 300,
avoidKeyboard: false,
coverScreen: true,
hasBackdrop: true,
backdropColor: 'black',
backdropOpacity: 0.7,
backdropTransitionInTiming: 300,
backdropTransitionOutTiming: 300,
customBackdrop: null as React.ReactNode,
useNativeDriver: false,
deviceHeight: null as OrNull<number>,
deviceWidth: null as OrNull<number>,
hideModalContentWhileAnimating: false,
propagateSwipe: false as
| boolean
| ((
event: GestureResponderEvent,
gestureState: PanResponderGestureState,
) => boolean),
isVisible: false,
panResponderThreshold: 4,
swipeThreshold: 100,

onModalShow: (() => null) as () => void,
onModalWillShow: (() => null) as () => void,
onModalHide: (() => null) as () => void,
onModalWillHide: (() => null) as () => void,
onBackdropPress: (() => null) as () => void,
onBackButtonPress: (() => null) as () => void,
scrollTo: null as OrNull<(e: any) => void>,
scrollOffset: 0,
scrollOffsetMax: 0,
scrollHorizontal: false,
statusBarTranslucent: false,
supportedOrientations: ['portrait', 'landscape'] as Orientation[],
};

export type ModalProps = ViewProps & {
children: React.ReactNode;
onSwipeStart?: (gestureState: PanResponderGestureState) => void;
onSwipeMove?: (
percentageShown: number,
gestureState: PanResponderGestureState,
) => void;
onSwipeComplete?: (
params: OnSwipeCompleteParams,
gestureState: PanResponderGestureState,
) => void;
onSwipeCancel?: (gestureState: PanResponderGestureState) => void;
style?: StyleProp<ViewStyle>;
swipeDirection?: Direction | Array<Direction>;
onDismiss?: () => void;
onShow?: () => void;
hardwareAccelerated?: boolean;
onOrientationChange?: OnOrientationChange;
presentationStyle?: PresentationStyle;

// Default ModalProps Provided
useNativeDriverForBackdrop?: boolean;
} & typeof defaultProps;

const extractAnimationFromProps = (props: ModalProps) => ({
animationIn: props.animationIn,
animationOut: props.animationOut,
});

export class ReactNativeModal extends React.Component<ModalProps, State> {
public static defaultProps = defaultProps;
private backHandler: NativeEventSubscription | null = null;

// We use an internal state for keeping track of the modal visibility: this allows us to keep
// the modal visible during the exit animation, even if the user has already change the
// isVisible prop to false.
// We store in the state the device width and height so that we can update the modal on
// device rotation.
state: State = {
showContent: true,
isVisible: false,
deviceWidth: Dimensions.get('window').width,
deviceHeight: Dimensions.get('window').height,
isSwipeable: !!this.props.swipeDirection,
pan: null,
};

isTransitioning = false;
inSwipeClosingState = false;
currentSwipingDirection: OrNull<Direction> = null;

animationIn: string;
animationOut: string;
backdropRef: any;
contentRef: any;
panResponder: OrNull<PanResponderInstance> = null;
didUpdateDimensionsEmitter: OrNull<EmitterSubscription> = null;

interactionHandle: OrNull<number> = null;

constructor(props: ModalProps) {
super(props);
const { animationIn, animationOut } = buildAnimations(
extractAnimationFromProps(props),
);

    this.animationIn = animationIn;
    this.animationOut = animationOut;

    if (this.state.isSwipeable) {
      this.state = {
        ...this.state,
        pan: new Animated.ValueXY(),
      };
      this.buildPanResponder();
    }
    if (props.isVisible) {
      this.state = {
        ...this.state,
        isVisible: true,
        showContent: true,
      };
    }

}

static getDerivedStateFromProps(
nextProps: Readonly<ModalProps>,
state: State,
) {
if (!state.isVisible && nextProps.isVisible) {
return { isVisible: true, showContent: true };
}
return null;
}
componentDidMount() {
// Show deprecation message
if ((this.props as any).onSwipe) {
console.warn(
'`<Modal onSwipe="..." />` is deprecated and will be removed starting from 13.0.0. Use `<Modal onSwipeComplete="..." />` instead.',
);
}
this.didUpdateDimensionsEmitter = DeviceEventEmitter.addListener(
'didUpdateDimensions',
this.handleDimensionsUpdate,
);
if (this.state.isVisible) {
this.open();
}

    this.backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      this.onBackButtonPress,
    );

}

componentWillUnmount() {
if (this.backHandler) {
this.backHandler.remove();
this.backHandler = null;
}

    if (this.didUpdateDimensionsEmitter) {
      this.didUpdateDimensionsEmitter.remove();
    }

    if (this.interactionHandle) {
      InteractionManager.clearInteractionHandle(this.interactionHandle);
      this.interactionHandle = null;
    }

}

componentDidUpdate(prevProps: ModalProps) {
// If the animations have been changed then rebuild them to make sure we're
// using the most up-to-date ones
if (
this.props.animationIn !== prevProps.animationIn ||
this.props.animationOut !== prevProps.animationOut
) {
const { animationIn, animationOut } = buildAnimations(
extractAnimationFromProps(this.props),
);
this.animationIn = animationIn;
this.animationOut = animationOut;
}
// If backdrop opacity has been changed then make sure to update it
if (
this.props.backdropOpacity !== prevProps.backdropOpacity &&
this.backdropRef
) {
this.backdropRef.transitionTo(
{ opacity: this.props.backdropOpacity },
this.props.backdropTransitionInTiming,
);
}
// On modal open request, we slide the view up and fade in the backdrop
if (this.props.isVisible && !prevProps.isVisible) {
this.open();
} else if (!this.props.isVisible && prevProps.isVisible) {
// On modal close request, we slide the view down and fade out the backdrop
this.close();
}
}
getDeviceHeight = () => this.props.deviceHeight || this.state.deviceHeight;
getDeviceWidth = () => this.props.deviceWidth || this.state.deviceWidth;
onBackButtonPress = () => {
if (this.props.onBackButtonPress && this.props.isVisible) {
this.props.onBackButtonPress();
return true;
}
return false;
};

shouldPropagateSwipe = (
evt: GestureResponderEvent,
gestureState: PanResponderGestureState,
) => {
return typeof this.props.propagateSwipe === 'function'
? this.props.propagateSwipe(evt, gestureState)
: this.props.propagateSwipe;
};

buildPanResponder = () => {
let animEvt: OrNull<AnimationEvent> = null;

    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        // Use propagateSwipe to allow inner content to scroll. See PR:
        // https://github.com/react-native-community/react-native-modal/pull/246
        if (!this.shouldPropagateSwipe(evt, gestureState)) {
          // The number "4" is just a good tradeoff to make the panResponder
          // work correctly even when the modal has touchable buttons.
          // However, if you want to overwrite this and choose for yourself,
          // set panResponderThreshold in the props.
          // For reference:
          // https://github.com/react-native-community/react-native-modal/pull/197
          const shouldSetPanResponder =
            Math.abs(gestureState.dx) >= this.props.panResponderThreshold ||
            Math.abs(gestureState.dy) >= this.props.panResponderThreshold;
          if (shouldSetPanResponder && this.props.onSwipeStart) {
            this.props.onSwipeStart(gestureState);
          }

          this.currentSwipingDirection = this.getSwipingDirection(gestureState);
          animEvt = this.createAnimationEventForSwipe();
          return shouldSetPanResponder;
        }

        return false;
      },
      onStartShouldSetPanResponder: (e: any, gestureState) => {
        const hasScrollableView =
          e._dispatchInstances &&
          e._dispatchInstances.some((instance: any) =>
            /scrollview|flatlist/i.test(instance.type),
          );

        if (
          hasScrollableView &&
          this.shouldPropagateSwipe(e, gestureState) &&
          this.props.scrollTo &&
          this.props.scrollOffset > 0
        ) {
          return false; // user needs to be able to scroll content back up
        }
        if (this.props.onSwipeStart) {
          this.props.onSwipeStart(gestureState);
        }

        // Cleared so that onPanResponderMove can wait to have some delta
        // to work with
        this.currentSwipingDirection = null;
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        // Using onStartShouldSetPanResponder we don't have any delta so we don't know
        // The direction to which the user is swiping until some move have been done
        if (!this.currentSwipingDirection) {
          if (gestureState.dx === 0 && gestureState.dy === 0) {
            return;
          }

          this.currentSwipingDirection = this.getSwipingDirection(gestureState);
          animEvt = this.createAnimationEventForSwipe();
        }

        if (this.isSwipeDirectionAllowed(gestureState)) {
          // Dim the background while swiping the modal
          const newOpacityFactor =
            1 - this.calcDistancePercentage(gestureState);

          this.backdropRef &&
            this.backdropRef.transitionTo({
              opacity: this.props.backdropOpacity * newOpacityFactor,
            });

          animEvt!(evt, gestureState);

          if (this.props.onSwipeMove) {
            this.props.onSwipeMove(newOpacityFactor, gestureState);
          }
        } else {
          if (this.props.scrollTo) {
            if (this.props.scrollHorizontal) {
              let offsetX = -gestureState.dx;
              if (offsetX > this.props.scrollOffsetMax) {
                offsetX -= (offsetX - this.props.scrollOffsetMax) / 2;
              }

              this.props.scrollTo({ x: offsetX, animated: false });
            } else {
              let offsetY = -gestureState.dy;
              if (offsetY > this.props.scrollOffsetMax) {
                offsetY -= (offsetY - this.props.scrollOffsetMax) / 2;
              }

              this.props.scrollTo({ y: offsetY, animated: false });
            }
          }
        }
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Call the onSwipe prop if the threshold has been exceeded on the right direction
        const accDistance = this.getAccDistancePerDirection(gestureState);
        if (
          accDistance > this.props.swipeThreshold &&
          this.isSwipeDirectionAllowed(gestureState)
        ) {
          if (this.props.onSwipeComplete) {
            this.inSwipeClosingState = true;
            this.props.onSwipeComplete(
              {
                swipingDirection: this.getSwipingDirection(gestureState),
              },
              gestureState,
            );
            return;
          }
          // Deprecated. Remove later.
          if ((this.props as any).onSwipe) {
            this.inSwipeClosingState = true;
            (this.props as any).onSwipe();
            return;
          }
        }

        //Reset backdrop opacity and modal position
        if (this.props.onSwipeCancel) {
          this.props.onSwipeCancel(gestureState);
        }

        if (this.backdropRef) {
          this.backdropRef.transitionTo({
            opacity: this.props.backdropOpacity,
          });
        }

        Animated.spring(this.state.pan!, {
          toValue: { x: 0, y: 0 },
          bounciness: 0,
          useNativeDriver: false,
        }).start();

        if (this.props.scrollTo) {
          if (this.props.scrollOffset > this.props.scrollOffsetMax) {
            this.props.scrollTo({
              y: this.props.scrollOffsetMax,
              animated: true,
            });
          }
        }
      },
    });

};

getAccDistancePerDirection = (gestureState: PanResponderGestureState) => {
switch (this.currentSwipingDirection) {
case 'up':
return -gestureState.dy;
case 'down':
return gestureState.dy;
case 'right':
return gestureState.dx;
case 'left':
return -gestureState.dx;
default:
return 0;
}
};

getSwipingDirection = (gestureState: PanResponderGestureState) => {
if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
return gestureState.dx > 0 ? 'right' : 'left';
}

    return gestureState.dy > 0 ? 'down' : 'up';

};

calcDistancePercentage = (gestureState: PanResponderGestureState) => {
switch (this.currentSwipingDirection) {
case 'down':
return (
(gestureState.moveY - gestureState.y0) /
((this.props.deviceHeight || this.state.deviceHeight) -
gestureState.y0)
);
case 'up':
return reversePercentage(gestureState.moveY / gestureState.y0);
case 'left':
return reversePercentage(gestureState.moveX / gestureState.x0);
case 'right':
return (
(gestureState.moveX - gestureState.x0) /
((this.props.deviceWidth || this.state.deviceWidth) - gestureState.x0)
);

      default:
        return 0;
    }

};

createAnimationEventForSwipe = () => {
if (
this.currentSwipingDirection === 'right' ||
this.currentSwipingDirection === 'left'
) {
return Animated.event([null, { dx: this.state.pan!.x }], {
useNativeDriver: false,
});
} else {
return Animated.event([null, { dy: this.state.pan!.y }], {
useNativeDriver: false,
});
}
};

isDirectionIncluded = (direction: Direction) => {
return Array.isArray(this.props.swipeDirection)
? this.props.swipeDirection.includes(direction)
: this.props.swipeDirection === direction;
};

isSwipeDirectionAllowed = ({ dy, dx }: PanResponderGestureState) => {
const draggedDown = dy > 0;
const draggedUp = dy < 0;
const draggedLeft = dx < 0;
const draggedRight = dx > 0;

    if (
      this.currentSwipingDirection === 'up' &&
      this.isDirectionIncluded('up') &&
      draggedUp
    ) {
      return true;
    } else if (
      this.currentSwipingDirection === 'down' &&
      this.isDirectionIncluded('down') &&
      draggedDown
    ) {
      return true;
    } else if (
      this.currentSwipingDirection === 'right' &&
      this.isDirectionIncluded('right') &&
      draggedRight
    ) {
      return true;
    } else if (
      this.currentSwipingDirection === 'left' &&
      this.isDirectionIncluded('left') &&
      draggedLeft
    ) {
      return true;
    }
    return false;

};

handleDimensionsUpdate = () => {
if (!this.props.deviceHeight && !this.props.deviceWidth) {
// Here we update the device dimensions in the state if the layout changed
// (triggering a render)
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
if (
deviceWidth !== this.state.deviceWidth ||
deviceHeight !== this.state.deviceHeight
) {
this.setState({ deviceWidth, deviceHeight });
}
}
};

open = () => {
if (this.isTransitioning) {
return;
}
this.isTransitioning = true;
if (this.backdropRef) {
this.backdropRef.transitionTo(
{ opacity: this.props.backdropOpacity },
this.props.backdropTransitionInTiming,
);
}

    // This is for resetting the pan position,otherwise the modal gets stuck
    // at the last released position when you try to open it.
    // TODO: Could certainly be improved - no idea for the moment.
    if (this.state.isSwipeable) {
      this.state.pan!.setValue({ x: 0, y: 0 });
    }

    if (this.contentRef) {
      this.props.onModalWillShow && this.props.onModalWillShow();
      if (this.interactionHandle == null) {
        this.interactionHandle = InteractionManager.createInteractionHandle();
      }
      this.contentRef
        .animate(this.animationIn, this.props.animationInTiming)
        .then(() => {
          this.isTransitioning = false;
          if (this.interactionHandle) {
            InteractionManager.clearInteractionHandle(this.interactionHandle);
            this.interactionHandle = null;
          }
          if (!this.props.isVisible) {
            this.close();
          } else {
            this.props.onModalShow();
          }
        });
    }

};

close = () => {
if (this.isTransitioning) {
return;
}
this.isTransitioning = true;
if (this.backdropRef) {
this.backdropRef.transitionTo(
{ opacity: 0 },
this.props.backdropTransitionOutTiming,
);
}

    let animationOut = this.animationOut;

    if (this.inSwipeClosingState) {
      this.inSwipeClosingState = false;
      if (this.currentSwipingDirection === 'up') {
        animationOut = 'slideOutUp';
      } else if (this.currentSwipingDirection === 'down') {
        animationOut = 'slideOutDown';
      } else if (this.currentSwipingDirection === 'right') {
        animationOut = 'slideOutRight';
      } else if (this.currentSwipingDirection === 'left') {
        animationOut = 'slideOutLeft';
      }
    }

    if (this.contentRef) {
      this.props.onModalWillHide && this.props.onModalWillHide();
      if (this.interactionHandle == null) {
        this.interactionHandle = InteractionManager.createInteractionHandle();
      }
      this.contentRef
        .animate(animationOut, this.props.animationOutTiming)
        .then(() => {
          this.isTransitioning = false;
          if (this.interactionHandle) {
            InteractionManager.clearInteractionHandle(this.interactionHandle);
            this.interactionHandle = null;
          }
          if (this.props.isVisible) {
            this.open();
          } else {
            this.setState(
              {
                showContent: false,
              },
              () => {
                this.setState(
                  {
                    isVisible: false,
                  },
                  () => {
                    this.props.onModalHide();
                  },
                );
              },
            );
          }
        });
    }

};
makeBackdrop = () => {
if (!this.props.hasBackdrop) {
return null;
}
if (
this.props.customBackdrop &&
!React.isValidElement(this.props.customBackdrop)
) {
console.warn(
'Invalid customBackdrop element passed to Modal. You must provide a valid React element.',
);
}
const {
customBackdrop,
backdropColor,
useNativeDriver,
useNativeDriverForBackdrop,
onBackdropPress,
} = this.props;
const hasCustomBackdrop = !!this.props.customBackdrop;

    const backdropComputedStyle = [
      {
        width: this.getDeviceWidth(),
        height: this.getDeviceHeight(),
        backgroundColor:
          this.state.showContent && !hasCustomBackdrop
            ? backdropColor
            : 'transparent',
      },
    ];

    const backdropWrapper = (
      <animatable.View
        // @ts-expect-error TODO fix it
        ref={ref => (this.backdropRef = ref)}
        useNativeDriver={
          useNativeDriverForBackdrop !== undefined
            ? useNativeDriverForBackdrop
            : useNativeDriver
        }
        style={[styles.backdrop, backdropComputedStyle]}>
        {hasCustomBackdrop && customBackdrop}
      </animatable.View>
    );

    if (hasCustomBackdrop) {
      // The user will handle backdrop presses himself
      return backdropWrapper;
    }
    // If there's no custom backdrop, handle presses with
    // TouchableWithoutFeedback
    return (
      <TouchableWithoutFeedback onPress={onBackdropPress}>
        {backdropWrapper}
      </TouchableWithoutFeedback>
    );

};
render() {
/_ eslint-disable @typescript-eslint/no-unused-vars _/
const {
animationIn,
animationInTiming,
animationOut,
animationOutTiming,
avoidKeyboard,
coverScreen,
hasBackdrop,
backdropColor,
backdropOpacity,
backdropTransitionInTiming,
backdropTransitionOutTiming,
customBackdrop,
children,
isVisible,
onModalShow,
onBackButtonPress,
useNativeDriver,
propagateSwipe,
style,
...otherProps
} = this.props;

    const { testID, ...containerProps } = otherProps;
    const computedStyle = [
      { margin: this.getDeviceWidth() * 0.05, transform: [{ translateY: 0 }] },
      styles.content,
      style,
    ];

    let panHandlers = {};
    let panPosition = {};
    if (this.state.isSwipeable) {
      panHandlers = { ...this.panResponder!.panHandlers };

      if (useNativeDriver) {
        panPosition = {
          transform: this.state.pan!.getTranslateTransform(),
        };
      } else {
        panPosition = this.state.pan!.getLayout();
      }
    }

    // The user might decide not to show the modal while it is animating
    // to enhance performance.
    const _children =
      this.props.hideModalContentWhileAnimating &&
      this.props.useNativeDriver &&
      !this.state.showContent ? (
        <animatable.View />
      ) : (
        children
      );
    const containerView = (
      <animatable.View
        {...panHandlers}
        // @ts-expect-error TODO fix it
        ref={ref => (this.contentRef = ref)}
        style={[panPosition, computedStyle]}
        pointerEvents="box-none"
        useNativeDriver={useNativeDriver}
        {...containerProps}>
        {_children}
      </animatable.View>
    );

    // If coverScreen is set to false by the user
    // we render the modal inside the parent view directly
    if (!coverScreen && this.state.isVisible) {
      return (
        <View
          pointerEvents="box-none"
          style={[styles.backdrop, styles.containerBox]}>
          {this.makeBackdrop()}
          {containerView}
        </View>
      );
    }
    return (
      <Modal
        transparent={true}
        animationType={'none'}
        visible={this.state.isVisible}
        onRequestClose={onBackButtonPress}
        {...otherProps}>
        {this.makeBackdrop()}

        {avoidKeyboard ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            pointerEvents="box-none"
            style={computedStyle.concat([{ margin: 0 }])}>
            {containerView}
          </KeyboardAvoidingView>
        ) : (
          containerView
        )}
      </Modal>
    );

}
}

export default ReactNativeModal;
</file>

<file path="src/types.ts">
import { Animation, CustomAnimation } from 'react-native-animatable';
import { NativeSyntheticEvent, NativeTouchEvent } from 'react-native';

export type OrNull<T> = null | T;

export type SupportedAnimation = Animation | CustomAnimation;
export type Animations = {
animationIn: string;
animationOut: string;
};

export type Orientation =
| 'portrait'
| 'portrait-upside-down'
| 'landscape'
| 'landscape-left'
| 'landscape-right';

export type Direction = 'up' | 'down' | 'left' | 'right';
export type AnimationEvent = (...args: any[]) => void;
export type PresentationStyle =
| 'fullScreen'
| 'pageSheet'
| 'formSheet'
| 'overFullScreen';
export type OnOrientationChange = (
orientation: NativeSyntheticEvent<any>,
) => void;

export interface GestureResponderEvent
extends NativeSyntheticEvent<NativeTouchEvent> {}
</file>

<file path="src/utils.ts">
import { Dimensions } from 'react-native';
import * as animatable from 'react-native-animatable';
import { Animation, CustomAnimation } from 'react-native-animatable';
import { Animations } from './types';

const { height, width } = Dimensions.get('window');

export const initializeAnimations = () => {
// Since react-native-animatable applies by default a margin of 100 to its
// sliding animation, we reset them here overriding the margin to 0.
const animationDefinitions: Record<string, CustomAnimation> = {
slideInDown: makeSlideTranslation('translateY', -height, 0),
slideInUp: makeSlideTranslation('translateY', height, 0),
slideInLeft: makeSlideTranslation('translateX', -width, 0),
slideInRight: makeSlideTranslation('translateX', width, 0),
slideOutDown: makeSlideTranslation('translateY', 0, height),
slideOutUp: makeSlideTranslation('translateY', 0, -height),
slideOutLeft: makeSlideTranslation('translateX', 0, -width),
slideOutRight: makeSlideTranslation('translateX', 0, width),
};

animatable.initializeRegistryWithDefinitions(animationDefinitions);
};

export const makeSlideTranslation = (
translationType: string,
fromValue: number,
toValue: number,
) => ({
from: {
[translationType]: fromValue,
},
to: {
[translationType]: toValue,
},
});

// User can define custom react-native-animatable animations, see PR #72
// Utility for creating our own custom react-native-animatable animations
export const buildAnimations = ({
animationIn,
animationOut,
}: {
animationIn: Animation | CustomAnimation;
animationOut: Animation | CustomAnimation;
}): Animations => {
let updatedAnimationIn: string;
let updatedAnimationOut: string;

if (isObject(animationIn)) {
const animationName = JSON.stringify(animationIn);
makeAnimation(animationName, animationIn as CustomAnimation);
updatedAnimationIn = animationName;
} else {
updatedAnimationIn = animationIn;
}

if (isObject(animationOut)) {
const animationName = JSON.stringify(animationOut);
makeAnimation(animationName, animationOut as CustomAnimation);
updatedAnimationOut = animationName;
} else {
updatedAnimationOut = animationOut;
}

return {
animationIn: updatedAnimationIn,
animationOut: updatedAnimationOut,
};
};

export const reversePercentage = (x: number) => -(x - 1);

const makeAnimation = (name: string, obj: CustomAnimation): void => {
animatable.registerAnimation(
name,
animatable.createAnimation(obj) as CustomAnimation,
);
};

const isObject = (obj: any): obj is Object => {
return obj !== null && typeof obj === 'object';
};
</file>

<file path=".gitattributes">
*.pbxproj -text
</file>

<file path=".gitignore">
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
xcshareddata
contents.xcworkspacedata

# Android/IntelliJ

#

build/
dist/
.idea
.gradle
local.properties
\*.iml

# node.js

#

node_modules/
npm-debug.log
yarn-error.log
package-lock.json

# BUCK

buck-out/
\.buckd/
\*.keystore
!debug.keystore

# VS Code

.vscode/\*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
</file>

<file path=".npmignore">
example/
src
</file>

<file path=".prettierignore">
examples/bare/android
examples/bare/ios
examples/bare/vendor
</file>

<file path=".prettierrc">
{
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "singleQuote": true,
  "trailingComma": "all"
}
</file>

<file path=".yarnrc.yml">
nodeLinker: node-modules
</file>

<file path="ISSUE_TEMPLATE.md">
### When reporting a bug, please be sure to check if the issue still persists with react-native original modal:

Under the hood `react-native-modal` uses react-native original [Modal component](https://reactnative.dev/docs/modal.html).  
Before reporting a bug, try swapping `react-native-modal` with react-native original Modal component to check if the problem persists.

### When reporting a bug, please be sure to include the following:

- [ ] The outcome of the `react-native-modal` swap described above
- [ ] A descriptive title
- [ ] What version of `react-native-modal` you're using, and the platform(s) you're running it on (iOS, Android, device)
- [ ] What packages or other dependencies you're using
- [ ] The behavior you expect to see, and the actual behavior
- [ ] **Most important of all:** An _isolated_ way to reproduce the behavior (example: GitHub repository with code isolated to the issue that anyone can clone to observe the problem)

### When you open an issue for a feature request, please add as much detail as possible:

- [ ] A descriptive title
- [ ] A description of the problem you're trying to solve, including _why_ you think this is a problem
- [ ] An overview of the suggested solution
- [ ] If the feature changes current behavior, reasons why your solution is better

### Please note by far the quickest way to get a new feature is to file a Pull Request.

</file>

<file path="LICENSE.md">
MIT License

Copyright (c) 2017 React Native Community

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
  "name": "react-native-modal",
  "version": "14.0.0-rc.1",
  "description": "An enhanced React Native modal",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "files": [
    "dist/"
  ],
  "scripts": {
    "test": "yarn run lint",
    "build": "tsc",
    "dev": "tsc --watch",
    "test:ts": "tsc --noEmit"
  },
  "husky": {
    "hooks": {
      "pre-commit": "pretty-quick --staged"
    }
  },
  "keywords": [
    "react-native",
    "react",
    "native",
    "modal",
    "android",
    "ios",
    "backdrop",
    "simple",
    "animated"
  ],
  "authors": [
    "Mazzarolo Matteo",
    "Anthony Cyrille"
  ],
  "license": "MIT",
  "homepage": "https://github.com/react-native-modal/react-native-modal",
  "repository": {
    "type": "git",
    "url": "https://github.com/react-native-modal/react-native-modal"
  },
  "dependencies": {
    "react-native-animatable": "1.4.0"
  },
  "devDependencies": {
    "@types/react": "^19.0.10",
    "husky": "^3.0.9",
    "postinstall": "^0.5.1",
    "prettier": "^1.18.2",
    "pretty-quick": "^2.0.0",
    "react": "19.0.0",
    "react-native": "0.76.7",
    "typescript": "5.8.2"
  },
  "peerDependencies": {
    "react": "*",
    "react-native": ">=0.70.0"
  },
  "packageManager": "yarn@4.7.0"
}
</file>

<file path="README.md">
### Announcements

- 📣 We're looking for maintainers and contributors! See [#598](https://github.com/react-native-modal/react-native-modal/discussions/598)
- 🙏 If you have a question, please [start a new discussion](https://github.com/react-native-modal/react-native-modal/discussions) instead of opening a new issue.

# react-native-modal

[![npm version](https://badge.fury.io/js/react-native-modal.svg)](https://badge.fury.io/js/react-native-modal)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> If you're new to the React Native world, please notice that React Native itself offers a [<Modal /> component that works out-of-the-box](https://reactnative.dev/docs/modal).

An enhanced, animated, customizable React Native modal.

The goal of `react-native-modal` is expanding the original React Native `<Modal>` component by adding animations, style customization options, and new features, while still providing a simple API.

<p align="center">
<img src="/.github/images/example-modal.gif" height="500" />
</p>

## Features

- Smooth enter/exit animations
- Plain simple and flexible APIs
- Customizable backdrop opacity, color and timing
- Listeners for the modal animations ending
- Resize itself correctly on device rotation
- Swipeable
- Scrollable

## Setup

This library is available on npm, install it with: `npm i react-native-modal` or `yarn add react-native-modal`.

## Usage

Since `react-native-modal` is an extension of the [original React Native modal](https://reactnative.dev/docs/modal.html), it works in a similar fashion.

1.  Import `react-native-modal`:

```javascript
import Modal from "react-native-modal";
```

2.  Create a `<Modal>` component and nest its content inside of it:

```javascript
function WrapperComponent() {
  return (
    <View>
      <Modal>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
```

3.  Then, show the modal by setting the `isVisible` prop to `true`:

```javascript
function WrapperComponent() {
  return (
    <View>
      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
```

The `isVisible` prop is the only prop you'll really need to make the modal work: you should control this prop value by saving it in your wrapper component state and setting it to `true` or `false` when needed.

## A complete example

The following example consists in a component (`ModalTester`) with a button and a modal.
The modal is controlled by the `isModalVisible` state variable and it is initially hidden, since its value is `false`.  
Pressing the button sets `isModalVisible` to true, making the modal visible.  
Inside the modal there is another button that, when pressed, sets `isModalVisible` to false, hiding the modal.

```javascript
import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;
```

For a more complex example take a look at the `/example` directory.

## Available props

| Name                             | Type                 | Default                          | Description                                                                                                                                |
| -------------------------------- | -------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `animationIn`                    | `string` or `object` | `"slideInUp"`                    | Modal show animation                                                                                                                       |
| `animationInTiming`              | `number`             | `300`                            | Timing for the modal show animation (in ms)                                                                                                |
| `animationOut`                   | `string` or `object` | `"slideOutDown"`                 | Modal hide animation                                                                                                                       |
| `animationOutTiming`             | `number`             | `300`                            | Timing for the modal hide animation (in ms)                                                                                                |
| `avoidKeyboard`                  | `bool`               | `false`                          | Move the modal up if the keyboard is open                                                                                                  |
| `coverScreen`                    | `bool`               | `true`                           | Will use RN `Modal` component to cover the entire screen wherever the modal is mounted in the component hierarchy                          |
| `hasBackdrop`                    | `bool`               | `true`                           | Render the backdrop                                                                                                                        |
| `backdropColor`                  | `string`             | `"black"`                        | The backdrop background color                                                                                                              |
| `backdropOpacity`                | `number`             | `0.70`                           | The backdrop opacity when the modal is visible                                                                                             |
| `backdropTransitionInTiming`     | `number`             | `300`                            | The backdrop show timing (in ms)                                                                                                           |
| `backdropTransitionOutTiming`    | `number`             | `300`                            | The backdrop hide timing (in ms)                                                                                                           |
| `customBackdrop`                 | `node`               | `null`                           | The custom backdrop element                                                                                                                |
| `children`                       | `node`               | **REQUIRED**                     | The modal content                                                                                                                          |
| `deviceHeight`                   | `number`             | `null`                           | Device height (useful on devices that can hide the navigation bar)                                                                         |
| `deviceWidth`                    | `number`             | `null`                           | Device width (useful on devices that can hide the navigation bar)                                                                          |
| `isVisible`                      | `bool`               | **REQUIRED**                     | Show the modal?                                                                                                                            |
| `onBackButtonPress`              | `func`               | `() => null`                     | Called when the Android back button is pressed                                                                                             |
| `onBackdropPress`                | `func`               | `() => null`                     | Called when the backdrop is pressed                                                                                                        |
| `onModalWillHide`                | `func`               | `() => null`                     | Called before the modal hide animation begins                                                                                              |
| `onModalHide`                    | `func`               | `() => null`                     | Called when the modal is completely hidden                                                                                                 |
| `onModalWillShow`                | `func`               | `() => null`                     | Called before the modal show animation begins                                                                                              |
| `onModalShow`                    | `func`               | `() => null`                     | Called when the modal is completely visible                                                                                                |
| `onSwipeStart`                   | `func`               | `() => null`                     | Called when the swipe action started                                                                                                       |
| `onSwipeMove`                    | `func`               | `(percentageShown) => null`      | Called on each swipe event                                                                                                                 |
| `onSwipeComplete`                | `func`               | `({ swipingDirection }) => null` | Called when the `swipeThreshold` has been reached                                                                                          |
| `onSwipeCancel`                  | `func`               | `() => null`                     | Called when the `swipeThreshold` has not been reached                                                                                      |
| `panResponderThreshold`          | `number`             | `4`                              | The threshold for when the panResponder should pick up swipe events                                                                        |
| `scrollOffset`                   | `number`             | `0`                              | When > 0, disables swipe-to-close, in order to implement scrollable content                                                                |
| `scrollOffsetMax`                | `number`             | `0`                              | Used to implement overscroll feel when content is scrollable. See `/example` directory                                                     |
| `scrollTo`                       | `func`               | `null`                           | Used to implement scrollable modal. See `/example` directory for reference on how to use it                                                |
| `scrollHorizontal`               | `bool`               | `false`                          | Set to true if your scrollView is horizontal (for a correct scroll handling)                                                               |
| `swipeThreshold`                 | `number`             | `100`                            | Swiping threshold that when reached calls `onSwipeComplete`                                                                                |
| `swipeDirection`                 | `string` or `array`  | `null`                           | Defines the direction where the modal can be swiped. Can be 'up', 'down', 'left, or 'right', or a combination of them like `['up','down']` |
| `useNativeDriver`                | `bool`               | `false`                          | Defines if animations should use native driver                                                                                             |
| `useNativeDriverForBackdrop`     | `bool`               | `null`                           | Defines if animations for backdrop should use native driver (to avoid flashing on android)                                                 |
| `hideModalContentWhileAnimating` | `bool`               | `false`                          | Enhances the performance by hiding the modal content until the animations complete                                                         |
| `propagateSwipe`                 | `bool` or `func`     | `false`                          | Allows swipe events to propagate to children components (eg a ScrollView inside a modal)                                                   |
| `style`                          | `any`                | `null`                           | Style applied to the modal                                                                                                                 |

## Frequently Asked Questions

### The component is not working as expected

Under the hood `react-native-modal` uses react-native original [Modal component](https://reactnative.dev/docs/modal).  
Before reporting a bug, try swapping `react-native-modal` with react-native original Modal component and, if the issue persists, check if it has already been reported as a [react-native issue](https://github.com/facebook/react-native/issues).

### The backdrop is not completely filled/covered on some Android devices (Galaxy, for one)

React-Native has a few issues detecting the correct device width/height of some devices.  
If you're experiencing this issue, you'll need to install [`react-native-extra-dimensions-android`](https://github.com/Sunhat/react-native-extra-dimensions-android).  
Then, provide the real window height (obtained from `react-native-extra-dimensions-android`) to the modal:

```javascript
const deviceWidth = Dimensions.get("window").width;
const deviceHeight =
  Platform.OS === "ios"
    ? Dimensions.get("window").height
    : require("react-native-extra-dimensions-android").get(
        "REAL_WINDOW_HEIGHT"
      );

function WrapperComponent() {
  const [isModalVisible, setModalVisible] = useState(true);

  return (
    <Modal
      isVisible={isModalVisible}
      deviceWidth={deviceWidth}
      deviceHeight={deviceHeight}
    >
      <View style={{ flex: 1 }}>
        <Text>I am the modal content!</Text>
      </View>
    </Modal>
  );
}
```

### How can I hide the modal by pressing outside of its content?

The prop `onBackdropPress` allows you to handle this situation:

```javascript
<Modal
  isVisible={isModalVisible}
  onBackdropPress={() => setModalVisible(false)}
>
  <View style={{ flex: 1 }}>
    <Text>I am the modal content!</Text>
  </View>
</Modal>
```

### How can I hide the modal by swiping it?

The prop `onSwipeComplete` allows you to handle this situation (remember to set `swipeDirection` too!):

```javascript
<Modal
  isVisible={isModalVisible}
  onSwipeComplete={() => setModalVisible(false)}
  swipeDirection="left"
>
  <View style={{ flex: 1 }}>
    <Text>I am the modal content!</Text>
  </View>
</Modal>
```

Note that when using `useNativeDriver={true}` the modal won't drag correctly. This is a [known issue](https://github.com/react-native-community/react-native-modal/issues/163#issuecomment-409760695).

### The modal flashes in a weird way when animating

Unfortunately this is a [known issue](https://github.com/react-native-community/react-native-modal/issues/92) that happens when `useNativeDriver=true` and must still be solved.  
In the meanwhile as a workaround you can set the `hideModalContentWhileAnimating` prop to `true`: this seems to solve the issue.
Also, do not assign a `backgroundColor` property directly to the Modal. Prefer to set it on the child container.

### The modal background doesn't animate properly

Are you sure you named the `isVisible` prop correctly? Make sure it is spelled correctly: `isVisible`, not `visible`.

### The modal doesn't change orientation

Add a `supportedOrientations={['portrait', 'landscape']}` prop to the component, as described [in the React Native documentation](https://reactnative.dev/docs/modal.html#supportedorientations).

Also, if you're providing the `deviceHeight` and `deviceWidth` props you'll have to manually update them when the layout changes.

### I can't show multiple modals one after another

Unfortunately right now react-native doesn't allow multiple modals to be displayed at the same time.
This means that, in `react-native-modal`, if you want to immediately show a new modal after closing one you must first make sure that the modal that your closing has completed its hiding animation by using the `onModalHide` prop.

### I can't show multiple modals at the same time

See the question above.
Showing multiple modals (or even alerts/dialogs) at the same time is not doable because of a react-native bug.
That said, I would strongly advice against using multiple modals at the same time because, most often than not, this leads to a bad UX, especially on mobile (just my opinion).

### The StatusBar style changes when the modal shows up

This issue has been discussed [here](https://github.com/react-native-community/react-native-modal/issues/50).  
The TLDR is: it's a know React-Native issue with the Modal component 😞

### The modal is not covering the entire screen

The modal style applied by default has a small margin.  
If you want the modal to cover the entire screen you can easily override it this way:

```js
<Modal style={{ margin: 0 }}>...</Modal>
```

### I can't scroll my ScrollView inside of the modal

Enable propagateSwipe to allow your child components to receive swipe events:

```js
<Modal propagateSwipe>...</Modal>
```

Please notice that this is still a WIP fix and might not fix your issue yet, see [issue #236](https://github.com/react-native-community/react-native-modal/issues/236).

### The modal enter/exit animation flickers

Make sure your `animationIn` and `animationOut` are set correctly.  
We noticed that, for example, using `fadeIn` as an exit animation makes the modal flicker (it should be `fadeOut`!).
Also, some users have noticed that setting backdropTransitionOutTiming={0} can fix the flicker without affecting the animation.

### The custom backdrop doesn't fill the entire screen

You need to specify the size of your custom backdrop component. You can also make it expand to fill the entire screen by adding a `flex: 1` to its style:

```javascript
<Modal isVisible={isModalVisible} customBackdrop={<View style={{ flex: 1 }} />}>
  <View style={{ flex: 1 }}>
    <Text>I am the modal content!</Text>
  </View>
</Modal>
```

### The custom backdrop doesn't dismiss the modal on press

You can provide an event handler to the custom backdrop element to dismiss the modal. The prop `onBackdropPress` is not supported for a custom backdrop.

```javascript
<Modal
  isVisible={isModalVisible}
  customBackdrop={
    <TouchableWithoutFeedback onPress={dismissModalHandler}>
      <View style={{ flex: 1 }} />
    </TouchableWithoutFeedback>
  }
/>
```

## Available animations

Take a look at [react-native-animatable](https://github.com/oblador/react-native-animatable) to see the dozens of animations available out-of-the-box. You can also pass in custom animation definitions and have them automatically register with react-native-animatable. For more information on creating custom animations, see the react-native-animatable [animation definition schema](https://github.com/oblador/react-native-animatable#animation-definition-schema).

## Alternatives

- [React Native's built-in `<Modal>` component](https://reactnative.dev/docs/modal.html)
- [React Native Paper `<Modal>` component](https://callstack.github.io/react-native-paper/modal.html)
- [React Native Modalfy](https://github.com/colorfy-software/react-native-modalfy)

## Acknowledgements

Thanks [@oblador](https://github.com/oblador) for react-native-animatable, [@brentvatne](https://github.com/brentvatne) for the npm namespace and to anyone who contributed to this library!

Pull requests, feedbacks and suggestions are welcome!
</file>

<file path="tsconfig.json">
{
  "include": ["src/**/*"],
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ],
  "compilerOptions": {
    "lib": ["es5", "es6", "esnext.asynciterable"],
    "allowSyntheticDefaultImports": false,
    "esModuleInterop": false,
    "jsx": "react",
    "moduleResolution": "node",
    "strict": true,
    "target": "esnext",
    "resolveJsonModule": true,
    "outDir": "./dist",
    "declaration": true,
    "skipLibCheck": true
  }
}
</file>

</files>

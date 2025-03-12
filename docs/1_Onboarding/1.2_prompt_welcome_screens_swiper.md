# Task:

Your task is to create a detailed implementation plan for an onboarding flow. Please give me a detailed implementation plan for this functionality, no code for now. Don't make any changes to my files or add new ones. Just focues on producing a detailed step-by-step implementation plan.

## Requirements:

- User can swipe through 3 welcome screens in a bidirectional way
- Pressing the "Next" button advances the user to the next welcome screen
- At the 3rd welcome screen, the button text changes to "Get Started" and the user is sent to Sign Up page
- Each of those screens will have the same layout as @welcome.tsx, so leverage that to map through the onboarding data to create dynamic slides. The image and text and buttons will be dynamic, and fed into that UI. The values for each screen are defined in @index.ts
- Modify the @ProgressIndicator.sx so that it works with the react-native-swiper package to indicate to the user which screen they are on in onboarding
  - Track the current slide index and update the ProgressIndicator accordingly
  - Disable looping (loop={false})
  - Start at the first slide (index={0})
  - Hide the default pagination (showsPagination={false})
- The PrimaryButton should be enhanced to be more reusable across the app
  - Import ButtonProps from @type.d.ts
  - Support for spreading additional props
  - Add helper functions getBgVariantStyle to apply different button colors (with switch statements for default, secondary, danger, success and outline)
  - Add helper function getTexVariantStyle to apply different text colors (with switch statements for primary, secondary, danger, success, and default)
  - Appply the styling helper functions to the TouchableOpacity and Text components of the PrimaryButton in the className string using templae literals.
  - Support conditional rendering of left and right icons e.g. if there is an IconLeft render it to the left of the button text. Similar logic for IconRight
  - Logic for when on the last slide, the button text should be "Get Started" and link to /sign-up
  - No need to handle loading states for now

## Packages:

- We want to use this package react-native-swiper for this feature. Make sure to install it. Docs https://github.com/leecade/react-native-swiper. Read @repomix_react_native_swiper.md for examples.

## Suggested order of changes:

- First, install the react-native-swiper package
- Then, get the welcome screens to change dynamically data. Focus on the image and text for now
- Then, enhance the PrimaryButton with the ButtonProps and has the logic for the last welcome screen

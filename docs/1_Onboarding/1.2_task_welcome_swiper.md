# Onboarding Flow Implementation Checklist

This checklist provides a comprehensive breakdown of tasks required to implement the onboarding flow with swipeable welcome screens. Each task is designed to be approximately one story point in effort.

## Step 1: Package Installation and Setup

- [x] Install the react-native-swiper package using `npm install react-native-swiper --save` or `yarn add react-native-swiper`
- [x] Verify the package is properly added to package.json
- [x] Import the Swiper component in the welcome.tsx file: `import Swiper from 'react-native-swiper'`
- [x] Read through the react-native-swiper documentation to understand available props and methods

## Step 2: Swiper Integration and Dynamic Content

### 2.1: Basic Swiper Setup

- [x] Create a reference to the Swiper component using useRef: `const swiperRef = useRef(null)`
- [x] Import the onboarding data from constants/index.ts: `import { onboarding } from '../../constants'`
- [x] Modify the welcome.tsx component to wrap the content in a Swiper component
- [x] Configure the Swiper with the following props:
  - [x] `loop={false}` to disable looping
  - [x] `index={0}` to start at the first slide
  - [x] `showsPagination={false}` to hide default pagination
  - [x] `ref={swiperRef}` to store a reference to the Swiper
  - [x] `onIndexChanged={(index) => setCurrentIndex(index)}` to track the current slide index

### 2.2: State Management

- [x] Create a state variable to track the current slide index: `const [currentIndex, setCurrentIndex] = useState(0)`
- [x] Create a helper function to determine if the current slide is the last slide: `const isLastSlide = currentIndex === onboarding.length - 1`

### 2.3: Dynamic Content Rendering

- [x] Replace the static content with a dynamic mapping through the onboarding array
- [x] Create a slide component or template structure that will be used for each slide
- [x] Ensure each slide contains:
  - [x] The correct image from onboarding[index].image
  - [x] The title from onboarding[index].title
  - [x] The description from onboarding[index].description
- [x] Maintain the same layout structure as the original welcome.tsx
- [x] Ensure the "Skip" button remains at the top right of all slides
- [x] Verify the SafeAreaView wraps the entire component properly

### 2.4: Initial Testing and Validation

- [x] Test horizontal swiping gestures to ensure they move between slides
- [x] Verify all three slides show the correct content from the onboarding data
- [x] Check that the swiper doesn't loop back to the first slide after the third slide
- [x] Verify the layout is consistent across all slides

**IMPORTANT VALIDATION CHECKPOINT**: Before proceeding to Step 3, confirm that:

1. The swiper integration works with proper swiping between screens
2. All welcome screens display dynamic data from the onboarding array
3. The basic structure and layout match the original welcome.tsx design

## Step 3: Enhance the PrimaryButton Component

### 3.1: Update PrimaryButton Interface

- [x] Import ButtonProps from type.d.ts: `import { ButtonProps } from '../types/type'`
- [x] Modify the PrimaryButton component to use the imported ButtonProps interface
- [x] Update the component parameters to destructure all required props:
  ```tsx
  const PrimaryButton = ({
    title,
    onPress,
    bgVariant = "primary",
    textVariant = "primary",
    IconLeft,
    IconRight,
    className = "",
    ...props
  }: ButtonProps) => {
  ```
- [x] Add support for spreading additional props to the TouchableOpacity component using `{...rest}`

### 3.2: Implement Button Styling Helper Functions

- [x] Create the getBgVariantStyle helper function:
  ```tsx
  const getBgVariantStyle = (variant: string): string => {
    switch (variant) {
      case "primary":
        return "bg-primary-500";
      case "secondary":
        return "bg-gray-500";
      case "danger":
        return "bg-red-500";
      case "success":
        return "bg-green-500";
      case "outline":
        return "bg-transparent border-neutral-300 border-[0.5px]";
      default:
        return "bg-[#0286FF]";
    }
  };
  ```
- [x] Create the getTextVariantStyle helper function:
  ```tsx
  const getTextVariantStyle = (variant: string): string => {
    switch (variant) {
      case "primary":
        return "text-black";
      case "secondary":
        return "text-gray-100";
      case "danger":
        return "text-red-100";
      case "success":
        return "text-green-100";
      default:
        return "text-white";
    }
  };
  ```
- [x] Apply these helper functions to the component's className properties
- [x] Apply the styling helper functions to the components:
  ```tsx
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    className={`w-full ${getBgVariantStyle(bgVariant)} py-4 rounded-full items-center ${className} ${
      isLoading ? "opacity-50" : ""
    }`}
    disabled={isLoading}
    {...rest}
  >
    <View className="flex-row items-center justify-center">
      {/* IconLeft will go here */}
      <Text
        className={`font-JakartaSemiBold ${getTextVariantStyle(textVariant)} text-base ${textStyles}`}
      >
        {title}
      </Text>
      {/* IconRight will go here */}
    </View>
  </TouchableOpacity>
  ```

### 3.3: Implement Icon Support

- [x] Add conditional rendering for the left icon:
  ```tsx
  {
    IconLeft && (
      <IconLeft
        size={20}
        color={textVariant === "primary" ? "#FFFFFF" : "#1E293B"}
        style={{ marginRight: 8 }}
      />
    );
  }
  ```
- [x] Add conditional rendering for the right icon:
  ```tsx
  {
    IconRight && (
      <IconRight
        size={20}
        color={textVariant === "primary" ? "#FFFFFF" : "#1E293B"}
        style={{ marginLeft: 8 }}
      />
    );
  }
  ```
- [x] Modify the TouchableOpacity's inner View to be a flexRow to accommodate icons and text:
  ```tsx
  <View className="flex-row items-center justify-center">
    {IconLeft && <IconLeft />}
    <Text>...</Text>
    {IconRight && <IconRight />}
  </View>
  ```

### 3.4: Test Enhanced PrimaryButton

- [x] Test the button with different bgVariant and textVariant combinations
- [x] Verify icons display correctly when provided
- [x] Check that additional props are correctly passed through to the TouchableOpacity

## Step 4: Modify the ProgressIndicator Component

### 4.1: Update ProgressIndicator Interface

- [x] Review the current ProgressIndicator implementation
- [x] Update the ProgressIndicator to work with the Swiper index:
  ```tsx
  interface ProgressIndicatorProps {
    totalSteps: number;
    currentStep: number;
    containerStyles?: string;
  }
  ```
- [x] Ensure the component accepts the currentIndex from the Swiper component as currentStep

### 4.2: Enhance Indicator Display

- [x] Verify the ProgressIndicator correctly highlights the current step based on the Swiper's currentIndex
- [x] Ensure the indicators update properly when swiping between screens
- [x] Test the ProgressIndicator with edge cases (first slide, last slide)

## Step 5: Implement Next Button Logic

### 5.1: Button Text and Navigation Logic

- [x] Update the PrimaryButton in the welcome.tsx to change text based on the current slide:
  ```tsx
  <PrimaryButton
    title={isLastSlide ? "Get Started" : "Next"}
    onPress={handleButtonPress}
  />
  ```
- [x] Create the handleButtonPress function to handle navigation logic:
  ```tsx
  const handleButtonPress = () => {
    if (isLastSlide) {
      // Navigate to sign-up page
      router.replace("/(auth)/sign-up");
    } else {
      // Go to next slide
      swiperRef.current?.scrollBy(1);
    }
  };
  ```

### 5.2: Button Behavior Testing

- [x] Test the "Next" button on the first and second slides to ensure it advances to the next slide
- [x] Test that the button text changes to "Get Started" on the third slide
- [x] Verify that clicking "Get Started" on the third slide navigates to the sign-up page
- [x] Test the "Skip" button to ensure it navigates directly to the sign-up page from any slide

## Step 6: Final Integration and Testing

### 6.1: Complete Integration

- [x] Ensure all components work together correctly
- [x] Verify all dynamic content is displayed properly
- [x] Check that navigation between screens works as expected

### 6.2: Edge Cases and Error Handling

- [x] Test rapid swiping between screens
- [x] Verify behavior when quickly tapping buttons
- [x] Ensure the app doesn't crash under abnormal usage patterns

### 6.3: UI/UX Validation

- [x] Verify all screens match the design specifications
- [x] Check that animations and transitions are smooth
- [x] Ensure accessibility features are working correctly

### 6.4: Final Testing

- [x] Test the entire flow from start to finish several times
- [x] Verify all requirements are met:
  - [x] Bidirectional swiping through 3 welcome screens
  - [x] "Next" button advances to the next screen
  - [x] "Get Started" button on the 3rd screen navigates to sign-up
  - [x] ProgressIndicator shows the current position correctly
  - [x] PrimaryButton supports various appearances and icons
- [x] Document any remaining issues or improvements for future iterations

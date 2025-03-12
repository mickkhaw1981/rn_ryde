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

- [ ] Import ButtonProps from type.d.ts: `import { ButtonProps } from '../../types/type'`
- [ ] Modify the PrimaryButton component to use the imported ButtonProps interface
- [ ] Update the component parameters to destructure all required props:
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
- [ ] Add support for spreading additional props to the TouchableOpacity component using `{...rest}`

### 3.2: Implement Button Styling Helper Functions

- [ ] Create the getBgVariantStyle helper function:
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
- [ ] Create the getTextVariantStyle helper function:
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
- [ ] Apply these helper functions to the component's className properties
- [ ] Apply the styling helper functions to the components:
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

- [ ] Add conditional rendering for the left icon:
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
- [ ] Add conditional rendering for the right icon:
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
- [ ] Modify the TouchableOpacity's inner View to be a flexRow to accommodate icons and text:
  ```tsx
  <View className="flex-row items-center justify-center">
    {IconLeft && <IconLeft />}
    <Text>...</Text>
    {IconRight && <IconRight />}
  </View>
  ```

### 3.4: Test Enhanced PrimaryButton

- [ ] Test the button with different bgVariant and textVariant combinations
- [ ] Verify icons display correctly when provided
- [ ] Check that additional props are correctly passed through to the TouchableOpacity

## Step 4: Modify the ProgressIndicator Component

### 4.1: Update ProgressIndicator Interface

- [ ] Review the current ProgressIndicator implementation
- [ ] Update the ProgressIndicator to work with the Swiper index:
  ```tsx
  interface ProgressIndicatorProps {
    totalSteps: number;
    currentStep: number;
    containerStyles?: string;
  }
  ```
- [ ] Ensure the component accepts the currentIndex from the Swiper component as currentStep

### 4.2: Enhance Indicator Display

- [ ] Verify the ProgressIndicator correctly highlights the current step based on the Swiper's currentIndex
- [ ] Ensure the indicators update properly when swiping between screens
- [ ] Test the ProgressIndicator with edge cases (first slide, last slide)

## Step 5: Implement Next Button Logic

### 5.1: Button Text and Navigation Logic

- [ ] Update the PrimaryButton in the welcome.tsx to change text based on the current slide:
  ```tsx
  <PrimaryButton
    title={isLastSlide ? "Get Started" : "Next"}
    onPress={handleButtonPress}
  />
  ```
- [ ] Create the handleButtonPress function to handle navigation logic:
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

- [ ] Test the "Next" button on the first and second slides to ensure it advances to the next slide
- [ ] Test that the button text changes to "Get Started" on the third slide
- [ ] Verify that clicking "Get Started" on the third slide navigates to the sign-up page
- [ ] Test the "Skip" button to ensure it navigates directly to the sign-up page from any slide

## Step 6: Final Integration and Testing

### 6.1: Complete Integration

- [ ] Ensure all components work together correctly
- [ ] Verify all dynamic content is displayed properly
- [ ] Check that navigation between screens works as expected

### 6.2: Edge Cases and Error Handling

- [ ] Test rapid swiping between screens
- [ ] Verify behavior when quickly tapping buttons
- [ ] Ensure the app doesn't crash under abnormal usage patterns

### 6.3: UI/UX Validation

- [ ] Verify all screens match the design specifications
- [ ] Check that animations and transitions are smooth
- [ ] Ensure accessibility features are working correctly

### 6.4: Final Testing

- [ ] Test the entire flow from start to finish several times
- [ ] Verify all requirements are met:
  - [ ] Bidirectional swiping through 3 welcome screens
  - [ ] "Next" button advances to the next screen
  - [ ] "Get Started" button on the 3rd screen navigates to sign-up
  - [ ] ProgressIndicator shows the current position correctly
  - [ ] PrimaryButton supports various appearances and icons
- [ ] Document any remaining issues or improvements for future iterations

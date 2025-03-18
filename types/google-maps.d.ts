// Type definitions for Google Maps Places API

export interface Suggestion {
  id: string;
  mainText: string;
  secondaryText: string;
}

declare namespace google {
  namespace maps {
    function importLibrary(libraryName: string): Promise<any>;

    namespace places {
      class AutocompleteSessionToken {
        constructor();
      }

      class AutocompleteSuggestion {
        static fetchAutocompleteSuggestions(
          request: AutocompleteSuggestionRequest
        ): Promise<AutocompleteSuggestionResponse>;
      }

      interface AutocompleteSuggestionRequest {
        input: string;
        sessionToken: AutocompleteSessionToken;
        language?: string;
        region?: string;
        // Add other optional parameters as needed
      }

      interface AutocompleteSuggestionResponse {
        suggestions: Array<{
          placePrediction: {
            id: string;
            text: {
              toString(): string;
            };
            // Add other properties as needed
          };
        }>;
      }
    }
  }
}

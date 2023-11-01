export function flattenJson(json: any): any {
    if (typeof json !== 'object' || json === null) {
      return json;
    }
  
    if (json.hasOwnProperty('data')) {
      return flattenJson(json['data']);
    }
  
    if (json.hasOwnProperty('attributes')) {
      return flattenJson(json['attributes']);
    }
  
    if (Array.isArray(json)) {
      return json.map((item) => flattenJson(item));
    }
  
    const result: Record<string, any> = {};
  
    for (const key in json) {
      if (json.hasOwnProperty(key)) {
        result[key] = flattenJson(json[key]);
      }
    }
  
    return result;
  }
  
export function randomArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]; // Create a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
    // Swap elements at i and j
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

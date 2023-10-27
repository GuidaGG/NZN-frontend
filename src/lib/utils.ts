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
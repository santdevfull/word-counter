export const metadata = {"slug": "word-counter", "title": "Word Counter", "description": "Analyze text length, lexical variety and reading time."};
export const fields = [{"name": "text", "label": "Text", "type": "textarea", "value": "Build useful things with clean code."}];
export function compute(input){
  const words=(input.text.match(/\b[\p{L}\p{N}']+\b/gu)||[]);return {words:words.length,characters:input.text.length,unique:new Set(words.map(w=>w.toLowerCase())).size,readingMinutes:Number((words.length/200).toFixed(2))}
}

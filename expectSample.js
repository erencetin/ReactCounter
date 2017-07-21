var checkString = function(str) {

  if(typeof str === 'string' && str.length > 0)
  {
      return true;
  }
  return false;
}
var makeFirstLetterUpper = function(str)
{
 
  if(checkString(str))
  {
      var firstLetter = str.charAt(0).toUpperCase();
      str = firstLetter + str.slice(1);
     
  }

  return str;
}
//unit tests
//1. regular
expect(makeFirstLetterUpper('eren')).toBe('Eren');
//2. empty string
expect(makeFirstLetterUpper('')).toBe('');
//3. different type
expect(makeFirstLetterUpper(2234)).toBe('');
//4. non string letters
expect(makeFirstLetterUpper(ereeen)).toBe('');

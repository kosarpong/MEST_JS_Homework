/*
 * 1. explain the special meaning of the following special characters
 \0 the null character                         //This special character returns a character as null.
 \n new line                                   //This special character breaks a line and continues it on a new line.
 \r carriage return                            //
 \v vertical tab                               //
 \t                                            //This special character adds a tabbed indent to a line.
 \b backspace                                  //This special character deletes the last letter which comes before the character.
 \f form feed                                  //This special character sends the cursor to the next page.
 */



/*
 *  2.Please combine those two array together as one array by using concate:
 *  var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday']
 *  var arr2 = ['Thursday', 'Friday', 'Saturday']
 */
 	var arr1 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday'];
 	var arr2 = ['Thursday', 'Friday', 'Saturday'];

 	console.log(arr1.concat(arr2));



/*
 *  3.Please combine those three array together as one array by only using concate() function once:
 *  var arr1 = ['Sunday', 'Monday']
 *  var arr2 = ['Tuesday', 'Wednesday']
 *  var arr3 = ['Thursday', 'Friday', 'Saturday']
 */
 	var arr1 = ['Sunday', 'Monday'];
 	var arr2 = ['Tuesday', 'Wednesday'];
 	var arr3 = ['Thursday', 'Friday', 'Saturday'];

 	console.log(arr1.concat(arr2, arr3));



/*
 * 4. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
 	var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 	console.log(arr.sort());
 	console.log(arr);

 	// Output for the first one will be ["Enoch", "Todd", "Yaw", "ashwin", "jerry", "lars", "mike"]
 	// Output for the second one will be ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']



/*
 * 5. what is the result(output of following code):
 *    var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 *    console.log(arr.sort());
 *    console.log(arr);
 */
 	var arr = [1, 3, 'apple', 'orange', 'black', 'test', 2];
 	console.log(arr.sort());
 	console.log(arr);

 	// Output for the first one will be [1, 2, 3, "apple", "black", "orange", "test"]
 	// Output for the second one will be [1, 3, 'apple', 'orange', 'black', 'test', 2];



/*
 * 6. Please remove mike, jerry, and Enoch from the following array by using slice
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 */
 	var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 	console.log(arr.slice(2, 4))
 	console.log(arr.slice(5, 6))


/*
 * 7. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-3, -1));
 *    console.log(arr);
 */
 	var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 	console.log(arr.slice(-3, -1));
 	console.log(arr);

 	// Output for the first one will be ["Yaw", "Enoch"]
 	// Output for the second one will be ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']



/*
 * 8. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(2));
 *    console.log(arr);
 */
 	var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 	console.log(arr.slice(2));
 	console.log(arr);

 	// Output for the first one will be ["mike", "jerry", "Yaw", "Enoch", "lars"]
 	// Output for the second one will be ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']



/*
 * 9. what is the result(output of following code):
 *    var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 *    console.log(arr.slice(-2));
 *    console.log(arr);
 */
	var arr = ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars'];
 	console.log(arr.slice(-2));
 	console.log(arr);

 	// Output for the first one will be ["Enoch", "lars"]
 	// Output for the second one will be ['ashwin', 'Todd', 'mike', 'jerry', 'Yaw', 'Enoch', 'lars']



/*
 * 10. convert the following function to function expression:
 *   function addTwoNumber (num1, num2) {
 *     return num1 + num2;
 *   }
 *
 *   and invoke the function expression to caluate the result of 256 + 532
 */
 	var addition = function addTwoNumber (num1, num2) {
	 
      console.log(num1 + num2);

    }
    sums(256, 532);



/*
 * 11. create an immediately invoked function expression
 * store the iife within a variable and call it
 */



/*
 * 12. you have following objects:
 *     var person1 = {
 *          name: 'ashwin'
 *     };
 *
 *     var person2 = {
 *          name: 'lars'
 *     };
 *
 *    function namer() {
 *          return this.name;
 *    }
 *
 *    use bind function here to make namer() function to call 'ashwin'
 *    and lars
 */
var person1 = {
      name: 'ashwin'
 };
 
 var person2 = {
      name: 'lars'
 };
 
function namer() {
      return this.name;
}

name1 = namer.bind(person1);
console.log(name1());

name2 = namer.bind(person2);
console.log(name2());



/*
 * 13. you have following object:
 *     var number = {
 *          x: 22,
 *          y: 33
 *     };
 *
 *    var count = function() {
 *          console.log(this.x + this.y);
 *    }
 *  a. what is the result when we invoke count()?
 *  b. use bind on function expression to make this work.
 */
var number = {
           x: 22,
           y: 33
      };
 
     var count = function() {
           console.log(this.x + this.y);
    }
    numb = count.bind(number);
    console.log(numb());



/*
 * 14. you have following objects:
 *     var person1 = {
 *          firstName: 'ashwin'
 *          lastName: 'Yaw'
 *     };
 *
 *     var person2 = {
 *          firstName: 'lars',
 *          lastName: 'Mike'
 *     };
 *
 *     function hello(greeting) {
 *          console.log(greeting + ' ' + this.firstName + '' + lastName);
 *    }
 *
 *  use call methods on function expression to make this work.
 */
 var personb = {
           firstName: 'ashwin',
          lastName: 'Yaw'
   };
 
    var personz = {
           firstName: 'lars',
          lastName: 'Mike'
     };
 
      function hello(greeting) {
           console.log(this.greeting + ' ' + this.firstName + ' ' + this.lastName);
     }

   hello.call(personb);
   hello.call (personz);



/*
 * 15. We have a following string:
 *     var str = 'Training, mentoring, and investing in world-class tech entrepreneurs in Africa.'
 *
 *     please write a function to change the first letter of every word to upper case.
 */
    var str = 'training, mentoring, and investing in world-class tech entrepreneurs in Africa.';

	function capitalisefirstletter(str) {
      console.log(str.replace(/\b\w/g, x => x.toUpperCase()));
 	}
 	capitalisefirstletter(str);

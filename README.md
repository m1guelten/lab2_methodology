Description

The program has two implementations.

The first implementation is a doubly linked list. The second implementation is a list based on built-in arrays. The advantage of a doubly linked list is that it can be moved in any direction — both from the beginning to the end and vice versa. It is easier for him to remove and rearrange elements, since the addresses of those list elements whose pointer points to the element to be changed are always known.

Variant

Defining variant formula: number of the gradebook % 4

My variant = 1325 % 4 = 1

Instruction

To use the program, you need to download Node.js, npm.

Node.js

npm

And also upload the modules used in the project

$ npm install

After downloading the necessary components. To run the program in the terminal, enter

$ node usage_example.js

To run the tests, enter

$ npm test

Reference to the commit that failed CI tests

Failed commit
Conclusion

I believe that unit tests are very useful. Although they take a lot of time, they help to track all possible errors during program development, and this is very convenient. I enjoyed using them while doing lab work. I will use them in my future projects.

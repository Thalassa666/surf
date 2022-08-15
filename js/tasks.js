const string = "Привет, как дела?";

let getVowels = (string) => string.replace(/[бвгджзклмнпрстфхцчшщъь]/gi, '')

console.log(getVowels(string));



   const workers = [
    {"name":"John","salary":500},
            {"name":"Mike","salary":1300},
            {"name":"Linda","salary":1500}
        ];
    
    const result = [];
    for (const worker of workers) {
        if (worker.salary > 1000) {
            result.push(worker.name); 
        }
    }
    
    console.log(result);


    const path = "/users/download/index.html"

    let isHtml = (path) => path.endsWith("html");
    
         console.log(isHtml(path))


         const mixedArray = [3,13,74,14,666,15,22,4];

         function isEven(number) { return number % 2 === 0; };

         const filterArray = (arrayToFilter, filterFn) => {
            const filteredArray = [];
            
            arrayToFilter.forEach(number => {
                if (filterFn(number)) {
                    filteredArray.push(number);
                }
                
            });

            return filteredArray;
         }

         console.log(filterArray(mixedArray, isEven));
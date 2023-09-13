/*- 
Console Application
- Display grocery list
- Add items to grocery list
    - Array of Items Objects
    - Item
        - Name
            - String
        - Quantity
            - Number
        - Price
            - Number
        - Bought
            - Boolean
- Remove items from the grocery list
- Set whether the item has been bought or not
*/
// Import the readline module for handling user input in the console
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin, // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});

rl.on('line', (line) => {
    console.log(line);
});

rl.once('close', () => {
     // end of input
 });
 
var groceryList = [
["Eggs",12,5.00,false],
["Milk",1,4.00,false],
["Bacon",2,3.50,true]
];
main();
function main(){  

    rl.question('What would you like to do with the grocery list: Display, Add, Remove, or Buy? (Close to exit) \n', cmd => {
        switch(cmd.toLowerCase())
        {
            case "display":
            {
                if(groceryList.length == 0)
                {
                    console.log("There is nothing in the grocery list.");
                    main();
                }else{
                    /*for (const item of groceryList) {
                        
                    }*/
                    console.log(groceryList);
                    main();
                }
    
                break;
            }case "add":
            {
                let grocery = [];
                rl.question('What is the name of the item you would like to add?\n', gName => 
                {
                    grocery.push(gName);
                    rl.question('What is the quanity of the item you would like to add?\n', gQuantity => 
                    {
                        grocery.push(gQuantity);
                        rl.question('What is the price of the item you would like to add?\n', gPrice => 
                        {
                            grocery.push(gPrice);
                            rl.question('Is the item bought? (y/n)\n', gBought => 
                            {
                                if(gBought!="y"&& gBought!="n"){
                                    console.log(`${gBought} is not an option.`);
                                    main();
                                }else if(gBought=="y")
                                {
                                    grocery.push(true);
                                    groceryList.push(grocery);
                                    console.log(`${grocery[0]} has been added.`);
                                    main();
                                }else if(gBought=="n"){
                                    grocery.push(false);
                                    groceryList.push(grocery);
                                    console.log(`${grocery[0]} has been added.`);
                                    main();
                                }
                            });
                        });
                        
                    });
                });
                
                
                
                break;
            }case "remove":
            {
                rl.question('What is the name of the item you would like to remove?\n', gName => 
                {
                    for (let i = 0; i<groceryList.length; i++) {
                        if (groceryList[i][0].toLowerCase() == gName.toLowerCase()){
                            groceryList.splice(i,1);
                            console.log(`${gName} has been removed.`)
                            break;
                        }
                    }
                    main();
                }); 
                break;
            }case "buy":
            {
                rl.question('What is the name of the item you would like to buy or return?\n', gName => 
                {
                    for (let i = 0; i<groceryList.length; i++) {
                        if (groceryList[i][0].toLowerCase() == gName.toLowerCase()){
                            if(groceryList[i][3]==true)
                            {
                                groceryList[i][3]=false;
                                console.log(`${gName} has been returned.`)
                                main();
                            }else{
                                groceryList[i][3]=true;
                                console.log(`${gName} has been bought.`);
                                main();
                            }
                            break;
                        }
                    }
                });
                break;
            }case "close":
            {
                process.exit();
            }
            default:
            {
                console.log("Sorry, that command is not possible.")
                main();
            }
        }
     });

    }

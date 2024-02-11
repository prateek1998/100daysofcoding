// Q: Write a function called rupee which returns an object on which i can set crores, lakhs, thousands etc and then finally get the value in javascript

// function rupee(){ //code 
// }

// const r = rupee().crore(10).lakhs(15).thousands(25).hundreds(3).ones(5).value()
// console.log(r)

// Solution 

function rupee(){ //code 
    let total = 0;
    return {
        crore(a){
            total += a * 10000000;
            return {
                lakhs(b){
                    total += b * 100000;
                    return {
                        thousands(c){
                            total += c *1000;
                            return {
                                hundreds(d){
                                    total += d * 100;
                                    return {
                                        ones(e){
                                            total += e * 1;
                                            return {
                                                value(){
                                                    return total;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
const r = rupee().crore(10).lakhs(15).thousands(25).hundreds(3).ones(5).value()
console.log(r)

//101525305

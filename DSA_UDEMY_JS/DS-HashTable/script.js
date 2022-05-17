/*Hash Table(Hash Map)
 -Hash table are used to store key value paires(array also store key value pairs but the keys are strictly number which are ordered)
 -ther are like array , but the keys are not ordere
 -unlike arrays hash table are fast for all of the following operations
  -finding values
  -adding new values
  -removing values

  -js has build in object and maps which are hashtable

  *implementing hash table by arrays
  -inorder to look up values by key, we need a way to convert keys into valid array indices which is done by hash function
  -simply hash function converts a string or anything into an index

*/

/*
good hash function
-Fast(constant)
-hash function must not return same index most of the time , it must be distibuted
-every time we pass the same input we must always got a same output

function hash(key) return 0 //it is not distibuted becuase it just return 0
function hash(key) return Math.floor(Math.ranodom() * 10000) //it wll not give same output for the same input due to Math.random()

*/
function hashFunction(string,length){
    let total = 0
    for(let char of string){
        let value = char.charCodeAt() - 96
        total = (total + value) % length
    }
    return total
}
/*problem with above hash function
1)only hashes string
2)Not constant time - linear in string or key length
3)could be a little more random(our data can be clustored)
*/

//slightly improved hash function
function hashFunction(key,length){ //sort of constant time which is 100
    let total = 0
    //like if string length is in millions than it will only consider 100
    //like if string length is 99 than 99 will be consider
    let WEIRD_PRIME = 31
    //adding prime number makes a huge difference as it reduce the collision(means more than 1 color at same index)
    //the length of key is prime than it reduces collison
    for(let i = 0; i<Math.min(key.length,100); i++){
        let value = char[i].charCodeAt() - 96
        total = (total + WEIRD_PRIME + value) % length
    }
    return total
}

//Dealing with collison - hovewer the good hash function you have there will be collison so we have two techinque to deal with
//1)Seperate chaining - if we get two color at same index [["darkblue","#00008b"],["salmon","#fa8072"]]
//2)Linear Probing - eg [filled,filled,filled,empty,empty] and we get ["tomato","#ff6347"] at 1(index) so we check index 1 is flled and we check index2 filled than we check index 3 empty so we add there

//1)seperate chaining(space is not limited in single index) - put together
//2)linear probing(space limited) - find a next empty splot

class HashTable{
    constructor(size=3){//size has to be prime no
        this.keyMap = new Array(size)
    }

    _hash(key){
        
        let total = 0
        let WEIRD_PRIME = 31
        for(let i = 0; i<Math.min(key.length,100); i++){
            let char = key[i]
            let value = char.charCodeAt(0) - 96
            total = (total + WEIRD_PRIME + value) % this.keyMap.length
        }
        return total;
    }
    set(key,value){
        let index = this._hash(key) //returns a no from 0 to 52(we set an size of 53)
        if(!this.keyMap[index]){
            this.keyMap[index] = []
        } 
        //will insert dupicate value as well and while get it will return the first inserted one
        this.keyMap[index].push([key,value])
    }
    get(key){
        let index = this._hash(key)
        let hash = this.keyMap[index]
        if(hash){
            for(let i = 0; i<hash.length; i++){
                if(hash[i][0] === key) return hash[i][1] //returns value
            }
        }
        return undefined
    }
    keys(){
        let keyArr = []
        for(let i = 0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j<this.keyMap[i].length; j++){
                    if(!keyArr.includes(this.keyMap[i][j][0])){
                    keyArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keyArr;
    }
    values(){
        let valueArr = []
        for(let i = 0; i<this.keyMap.length; i++){
            if(this.keyMap[i]){
                for(let j = 0; j<this.keyMap[i].length; j++){
                    if(!valueArr.includes(this.keyMap[i][j][1])){
                    valueArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valueArr;
    }
}
const ht = new HashTable()
ht.set("pink","pink")
ht.set("cyan","cyan")
ht.set("green","green")
ht.set("viloet","violet")
ht.set("viloet","violet")

/*
Big of hash table for average and best case
insert - o(1) - we find hashno we access arr[hashno] and we just push
deletion - o(1)
accessing - o(1) - we find hashno we access arr[hashno] and we loop throght isArray(arr[hashno]) -> true and we return
*/

//a good hash table should be fast, distibute keys uniformly(we did by prime no), and be deterministic(same output for same input)
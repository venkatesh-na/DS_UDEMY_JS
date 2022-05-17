//Dijkstras algorithm
//Dijkstras algorithm is used to find the shortest path between two vertices on a graph

//we need weighted graph for Dijkstras algorithm 
class Node{
    constructor(val,priority){
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue{
    /*
    time complexity is o(n logn) becuase we are using sort every time we push but using binary heap it is o(logn)
    this implementaion is easy to implement therefore we are using it but it is an bad ways of implementing priority queue
    */
    constructor(){
        this.values = []
    }
    enqueu(val,priority){
        let newNode = new Node(val,priority)
        this.values.push(newNode)
        this.bubbleUp()
    }
    bubbleUp(){
         let idx = this.values.length-1
        let element = this.values[idx]
        while(idx > 0){
            let parentidx = Math.floor((idx - 1)/2)
            let parent = this.values[parentidx]
            if(element.priority >= parent.priority) break;
            this.values[parentidx] = element
            this.values[idx] = parent
            idx = parentidx
        }
        return this;
    }
    deque(){
         let min = this.values[0]//8
        let end = this.values.pop()//2
        if(this.values.length > 0){
            this.values[0] = end
            this.sinkDown()
        }
        return min;
    }
    sinkDown(){
        let idx = 0
        let length = this.values.length
        let element = this.values[0]//2 
        while(true){
            let firstChildidx = 2*idx+1
            let secondChildidx = 2*idx+2
            let firstChild,secondChild;
            let swap = null
            if(firstChildidx < length){
                firstChild = this.values[firstChildidx]
                if(firstChild.priority < element.priority){
                    swap = firstChildidx
                }
            }
            if(secondChildidx < length){
                secondChild = this.values[secondChildidx]
                if((swap === null && secondChild.priority < element.priority) || 
                (swap !== null && secondChild.priority < firstChild.priority)){
                    swap = secondChildidx
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex] = []
        }
    }
    addEdge(v1,v2,weight){
        this.adjacencyList[v1].push({ node:v2, weight})
        this.adjacencyList[v2].push({ node:v1, weight })
    }
    Dijkstras(start,finish){
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = []//to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0
                nodes.enqueu(vertex,0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueu(vertex,Infinity)
            }
            previous[vertex] = null
        }
        // console.log(`distances : `,{...distances})
        // console.log(`previos :`, {...previous})
        // console.log(`priority queue :`, [...nodes.values])
        //as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.deque().val //"A"
            if(smallest === finish){
                while(previous[smallest]){
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                //neighnour is an index
                for(let neighbour in this.adjacencyList[smallest]){
                    //find neighbour node
                    let nextNode = this.adjacencyList[smallest][neighbour]
                    //calculate new distance to neighbour node
                    let candidate = distances[smallest] + nextNode.weight
                    //eg candidate = d + e
                    //d + e < e's previous total distance
                    let nextNeighbour = nextNode.node
                    if(candidate < distances[nextNeighbour]){
                        //updating new smallest distance to neightbour
                        distances[nextNeighbour] = candidate
                        //updating previous - how we got to neighbour
                        previous[nextNeighbour] = smallest
                        //enqueue in priority queue with new priority
                        nodes.enqueu(nextNeighbour,candidate)
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    } 
}

const wg = new WeightedGraph()
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addVertex("D")
wg.addVertex("E")
wg.addVertex("F")
wg.addEdge("A","B",4)
wg.addEdge("A","C",2)
wg.addEdge("B","E",3)
wg.addEdge("C","D",2)
wg.addEdge("C","F",4)
wg.addEdge("D","E",3)
wg.addEdge("D","F",1)
wg.addEdge("E","F",1)
console.log(wg.adjacencyList)
console.log(wg.Dijkstras("A","E"))

//            A
//    2   /       \   4
//      C           B 
//      |   \ 2   3  \  3
//      |     D ------E
//  4   |     /  1    | 
//      ------F--------  1   
    







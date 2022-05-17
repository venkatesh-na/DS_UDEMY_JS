class Graph
{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(value){
        if(!this.adjacencyList[value]){
            this.adjacencyList[value] = []
        }
    }
    addEdge(v1,v2){
        //if directed graph than will just write a first like in this function
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v=> v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
        }
    }
    removeVertex(vertex){
        if(this.adjacencyList[vertex]){
            while(this.adjacencyList[vertex].length){
                let adjacencyVertex = this.adjacencyList[vertex].pop()
                this.removeEdge(vertex,adjacencyVertex)
            }
            delete this.adjacencyList[vertex]
        }
    }
/*
A: (2) ['B', 'C'] 
B: (2) ['A', 'D'] 
C: (2) ['A', 'E']
D: (3) ['B', 'E', 'F'] 
E: (3) ['C', 'D', 'F']
F: (2) ['D', 'E']
    A
  /  \
 B     C(waits till end)
 |      | 
 D  -  E
  \   /
    F
    a -> b and c(waiting) so we choose b(which is first in array) {a:true}
    b -> neighbour is a and d so a is already visited so we choose d {a:true,b:true}
    d -> neighbour is b ,e, f(waiting) so b is already visited and  e is not so we choose e {a:true,b:true,d:true}
    e -> neihbour is c,d(waiting) and f(waiting) so c is not visited so we choose c {a:true,b:true,d:true,e:true}
    c -> neigbour a and e both are visited {a:true,b:true,d:true,e:true,c:true}
    e -  e of d visited but e of f not visited 
    f -> d  and e visited {a:true,b:true,d:true,e:true,c:true,f:true}
    d of f visited
    a of c visited 
*/

    depthFirstRecursive(start){
        let list = [] //end result
        let visited = {} //store the visited vertex
        //meaning of this changes in inner function so we have to preserve this in line 51 and use it in dfs function
        let adjacencyList = this.adjacencyList
        function dfs(vertex){
            if(!vertex) return null
            visited[vertex] = true
            list.push(vertex)
            adjacencyList[vertex].forEach(neighbour => {
                if(!visited[neighbour]){
                    return dfs(neighbour)
                }
            })
        }
        dfs(start)
        return list;
    }
    depthFirstIterative(start){
        let stack = [start] //instead of using callstack of browser we are using our own stack in iterative solution
        let result = []
        let visited = {}
        let currentVertex;

        visited[start] = true
        while(stack.length){
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbour=>{ 
                //store the current vertext neighbour
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    stack.push(neighbour)
                }
            })
        }
        return result;
    }
    
    /*
this is how our stack works where we can see b is waiting till end like in recurcive solution c is waiting till end
['A']
['B', 'C']
['B', 'E']
['B', 'D', 'F']
['B', 'D']
['B']
['A', 'C', 'E', 'F', 'D', 'B']

they both are depth first 
recursive - go from left 
iterative - goes from right 
g.depthFirstRecursive("A")
 ['A', 'B', 'D', 'E', 'C', 'F']
g.depthFirstIterative("A")
['A', 'C', 'E', 'F', 'D', 'B']
*/
    //storing siblings or traverse horizontally
    BreathFirst(start){
        let queue = [start]
        let result = []
        let visited = {}
        let currentVertex;

        visited[start] = true
        while(queue.length){
            currentVertex = queue.shift()
            result.push(currentVertex)
            this.adjacencyList[currentVertex].forEach(neighbour=>{
                if(!visited[neighbour]){
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            })
        }
        return result;
    }
}
const g = new Graph()
// g.addVertex("Dallas")
// g.addVertex("Tokyo")
// g.addVertex("Aspen")
// g.addVertex("Los Angeles")
// g.addVertex("Hong Kong")
// g.addEdge("Tokyo","Dallas")
// g.addEdge("Aspen","Dallas")
// g.addEdge("Hong Kong","Tokyo")
// g.addEdge("Hong Kong","Dallas")
// g.addEdge("Los Angeles","Hong Kong")
// g.addEdge("Los Angeles","Aspen")

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("A"))//['A', 'B', 'D', 'E', 'C', 'F']
console.log(g.depthFirstIterative("A"))//['A', 'C', 'E', 'F', 'D', 'B']
console.log(g.BreathFirst("A"))//['A', 'B', 'C', 'D', 'E', 'F']



/*
//Graph DS - Nodes + connection
*use of graphs
-social networks(faceboo like friend of friend ans so on)
-location/mapping(google map for finding shortest path)
-routing algorithm
-visual hierarchy
-file sysytem optimization
-Recommendation
    -"people also watched"
    -"you might also like"
    -"people you might know"
    -"frequently bought with"

terminology
-vertex - a node
-edge - connection between nodes

*Type of graph
-undirected graph - a-b  - a can see b content and b can also see a content
-directed graph - a<-b - a cant see b content but b can see a content
-weighted graph -        8   10
                      b - a - e
                  15 \  \ 17
                    d - f
                      7
                when we assign a value to its edges it becomes a weighted graph
-unweighted graph - undirected and directed graph are an example of unweighted graph becuase there is no value associtaed to an edge

undirected graph - eg facebook a - b 
directed graph - eg instagram(venkatesh -> justin) venkatesh following to justin but justin is not following to venkatesh even thought i can be possible than a <-> b
            90km
        @--------@
        |       / \
65km    |      /   \  40km
        |     /     \    
        |    /     - @         - visually is an undirected and weighted graph
        @   /     / 
        \ /      /
         \      /  40km
          \    / 
           \  /
            @

//Storing graph
-Adjacency matrix
a-b-c
   a  b  c
a  0  1  0
b  1  0  1
c  0  1  0

-Adjacency list
0 - 1
|   | 
3 - 2

[
    [1,3],
    [0,2],
    [1,3],
    [0,2]
]
Q)is there an edge between 1 and 3?
->at index 1 there is no 3
  at index 3 there is no 1
  sp no there is no edge

*if we have just letter in vertex than we can use adjacency matrix and 
if we have number which s start from 0 and ordered than we can use adjecency list and
if we have a vertex with huge gapes between the numbers and what if there a names in node than ithat case we use hash table(object,dictonaries,maps etc)

-Adjecency list for unordered data of string etc
a-b-c
{
    a:[b]
    b:[a,c]
    c:[b]
}
 

Difference and big o
|v| - no of vertices
|E| - no of edges

operation          adjacency List      Adjacency Matrix
add vertex           o(1)              o(|V^2|)
add edge             o(1)              o(1)
remove vertex        o(|V| + |E|)      o(|V^2|)
remove edge          o(|E|)            o(1)
query                o(|V| + |E|)      o(1)
storage              o(|V| + |E|)      o(|v^2|)

adjacency list                          adjacency matrx
-can take up less space                  Take up more space in sparse graph 
 (in sparse graph(we dont have           (becuase there is less connection
 that many edges))                        between nodes means unncessary zeros)
-faster to iterate all over              -slower to iterate all over edges(becuase 
 edges                                    we are going to traverse throght the edges 
                                          which are not there
-can be slower o lookup                  -faster to lookup specific edge
 specifuc edges                           we dont need to iterate here we can         
(we have to iterate throght               directly access
edges of certain node)
first we have to fidn vertex 
and then iterate through
edges so o(v+e)


we are using adjacency list becuase most of the data in real world are sparse means there are lots of vertices but usualy they are not connected
and 
if your every node is connected to each other throgh edges than use adjacency matrix


//Graph traversal
visiting/updating/checking ecah vertex in a graph

in tree - there is only one way to reach to an leaf
in graph - there is can be more than one ways for one node to other node

graph traversal uses
-peer to peer networking
-web crawlers
-finding closest
-matches/recommendations
-shortest path problem
 -GPS navigation
 -solving mazes
 -ai(shortest path to win the game)

Depth first graph traversal - we go to children of selected node firsr
Breath first graph traversal - we first go an sibling of selected node first 

*/